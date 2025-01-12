/*!
 * Custom Javascript to redirect user based on language settings.
 */

import { currentLanguage } from '/js/getCurrentLanguage.js';

document.addEventListener("DOMContentLoaded", function() {
  // Get current path
  const currentPath = window.location.pathname;
  // Check if the user is on the base URL (root path)
  const isBaseURL = currentPath === '/' || currentPath === '';

  // Redirect only if on the base URL and not already on a localized URL
  if (isBaseURL) {
    const lang = currentLanguage()
    window.location.href = `/${lang}/`;
  }
});