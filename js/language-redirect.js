// js/language-redirect.js

document.addEventListener("DOMContentLoaded", function() {
  // Get browser language
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.split('-')[0]; // Extract primary language code (e.g., 'en' from 'en-US')

  // Define supported languages and their paths
  // Fallback to 'fr' if no match
  const supportedLanguages = ['fr', 'en', 'de'];
  const lang = (supportedLanguages.includes(langCode) ? langCode : 'fr')
  
  // Get current path
  const currentPath = window.location.pathname;
  // Check if the user is on the base URL (root path)
  const isBaseURL = currentPath === '/' || currentPath === '';

  // Redirect only if on the base URL and not already on a localized URL
  if (isBaseURL) {
      window.location.href = `/${lang}/`;
  }
});