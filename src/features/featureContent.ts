function extensionAlive() {
  return chrome.runtime?.id !== undefined;
}

function getButton() {
  return document.querySelector<HTMLButtonElement>(
    'button[aria-label*="bonus"], button[aria-label*="Bonus"], button[aria-label*="Claim"]',
  );
}

const observer = new MutationObserver((_, obs) => {
  const btn = getButton();
  if (btn) {
    btn.click();
    if (!extensionAlive()) {
      return;
    }
    chrome.storage.local.get(
      {
        clicks: 0,
      },
      (data: { clicks: number }) => {
        const clicks = data.clicks + 1;

        chrome.storage.local.set({
          clicks,
          lastClaim: new Date().toLocaleTimeString(),
        });
      },
    );
  }
  obs.disconnect();
  setTimeout(() => {
    if (extensionAlive()) {
      startObserving();
    }
  }, 1000);
});

function startObserving() {
  if (!document.body) {
    return;
  }

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

startObserving();
let currentChannel = "";

function getChannelName(): string {
  const parts = window.location.pathname.split("/");
  return parts[1] ?? "";
}

let watchInterval: number | undefined;

function startWatchTracking() {
  watchInterval = window.setInterval(() => {
    if (!extensionAlive()) {
      if (watchInterval) {
        clearInterval(watchInterval);
      }

      return;
    }

    const channel = getChannelName();
    if (!channel) {
      return;
    }
    if (channel !== currentChannel) {
      currentChannel = channel;

      chrome.storage.local.set({
        currentChannel: channel,
        watchSeconds: 0,
        watchStart: Date.now(),
        clicks: 0,
        lastClaim: "Never",
      });
      return;
    }

    chrome.storage.local.get(
      {
        watchSeconds: 0,
      },
      (data: { watchSeconds: number }) => {
        chrome.storage.local.set({
          watchSeconds: data.watchSeconds + 1,
        });
      },
    );
  }, 1000);
}

startWatchTracking();
