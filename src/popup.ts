const countElement = document.getElementById("count");
const lastClaimElement = document.getElementById("lastClaim");
const channelElement = document.getElementById("channel");
const watchElement = document.getElementById("watchTime");
const resetButton = document.getElementById("reset");

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}h ${minutes}m ${secs}s`;
}

function updateUI() {
  chrome.storage.local.get(
    {
      clicks: 0,
      lastClaim: "Never",
      currentChannel: "-",
      watchSeconds: 0,
    },
    (data: {
      clicks: number;
      lastClaim: string;
      currentChannel: string;
      watchSeconds: number;
    }) => {
      if (countElement) countElement.textContent = String(data.clicks);
      if (lastClaimElement) lastClaimElement.textContent = data.lastClaim;
      if (channelElement) channelElement.textContent = data.currentChannel;
      if (watchElement)
        watchElement.textContent = formatTime(data.watchSeconds);
    },
  );
}

resetButton?.addEventListener("click", () => {
  chrome.storage.local.set({
    clicks: 0,
    lastClaim: "Never",
  });

  updateUI();
});

updateUI();

setInterval(updateUI, 1000);
