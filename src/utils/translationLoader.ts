
// Utilitaire pour charger les traductions de manière modulaire
export const loadTranslations = async (language: string) => {
  try {
    // Chargement du fichier principal de traduction pour la compatibilité
    const mainTranslations = await import(`../translations/${language}.json`);
    return mainTranslations.default;
  } catch (error) {
    console.warn(`Translations for ${language} not found, falling back to French`);
    const frTranslations = await import('../translations/fr.json');
    return frTranslations.default;
  }
};

// Fonction pour fusionner plusieurs fichiers de traduction (pour utilisation future)
export const mergeTranslations = (...translationObjects: any[]) => {
  return translationObjects.reduce((merged, current) => {
    return { ...merged, ...current };
  }, {});
};
