/*!
 * Custom Javascript to return the language of the user's settings.
 */

function currentLanguage() {
    // Get browser language
    const userLang = navigator.language || navigator.userLanguage;
    // Extract primary language code (e.g., 'en' from 'en-US')
    const langCode = userLang.split('-')[0];

    // Define supported languages and their paths
    // Fallback to 'fr' if no match
    const supportedLanguages = ['fr', 'en', 'de'];
    const lang = (supportedLanguages.includes(langCode) ? langCode : 'fr')

    return lang;
}

export { currentLanguage };
