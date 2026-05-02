function getButton() {
  return document.querySelector<HTMLButtonElement>(
    'button[aria-label="Få bonus"]',
  );
}

const observer = new MutationObserver((mutations, obs) => {
  const btn = getButton();
  if (btn) {
    btn.click();
  }
  obs.disconnect();
  setTimeout(() => {
    startObserving();
  }, 1000);
});

function startObserving() {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

startObserving();
