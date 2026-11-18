(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let savedTheme = root.dataset.theme;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    themeButton.setAttribute('title', themeButton.getAttribute('aria-label'));
    themeColor.content = theme === 'dark' ? '#101a20' : '#f6f5f1';
  }

  applyTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));
  themeButton.hidden = false;

  themeButton.addEventListener('click', () => {
    savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(savedTheme);
    try {
      localStorage.setItem('portfolio-theme', savedTheme);
    } catch (error) {
      // The current choice still works when persistent storage is unavailable.
    }
  });

  systemTheme.addEventListener('change', (event) => {
    if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
  });

  window.addEventListener('storage', (event) => {
    if (event.key === 'portfolio-theme' || event.key === null) {
      savedTheme = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : undefined;
      applyTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const shareButton = document.getElementById('share-profile');
  const shareDialog = document.getElementById('share-dialog');
  const profileUrlInput = document.getElementById('profile-url');
  const copyButton = document.getElementById('copy-link');
  const copyFeedback = document.getElementById('copy-feedback');
  const statusMessage = document.getElementById('status-message');
  const profileUrl = document.querySelector('link[rel="canonical"]').href;
  const shareData = { title: 'Khaled Metwalie | AI Engineer', text: 'Projects, CV, and contact details.', url: profileUrl };
  let statusTimeout;

  function announce(message) {
    clearTimeout(statusTimeout);
    statusMessage.textContent = message;
    statusMessage.classList.add('is-visible');
    statusTimeout = setTimeout(() => statusMessage.classList.remove('is-visible'), 4000);
  }

  function showShareDialog() {
    profileUrlInput.value = profileUrl;
    copyFeedback.textContent = '';
    shareDialog.showModal();
    profileUrlInput.focus();
    profileUrlInput.select();
  }

  shareButton.hidden = false;
  shareButton.addEventListener('click', async () => {
    shareButton.disabled = true;
    try {
      if (typeof navigator.share === 'function') {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
        }
      }
      showShareDialog();
    } finally {
      shareButton.disabled = false;
    }
  });

  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    try {
      await navigator.clipboard.writeText(profileUrl);
      shareDialog.close();
      announce('Profile link copied');
    } catch (error) {
      profileUrlInput.focus();
      profileUrlInput.select();
      copyFeedback.textContent = 'Select and copy the link above using your device’s copy command.';
    } finally {
      copyButton.disabled = false;
    }
  });

  document.getElementById('close-share').addEventListener('click', () => shareDialog.close());
  shareDialog.addEventListener('close', () => shareButton.focus());
  shareDialog.addEventListener('click', (event) => {
    const bounds = shareDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (event.target === shareDialog && outside) shareDialog.close();
  });
})();
