
type Language = 'fr' | 'en' | 'es' | 'it' | 'de' | 'pt' | 'nl' | 'sv' | 'no' | 'da' | 'zh-CN' | 'ja' | 'ru';

export const loadTranslations = async (language: Language): Promise<Record<string, any>> => {
  try {
    // Try to load modular translations first
    try {
      const [common, hero, pages, forms] = await Promise.all([
        import(`../translations/${language}/common.json`),
        import(`../translations/${language}/hero.json`),
        import(`../translations/${language}/pages.json`),
        import(`../translations/${language}/forms.json`)
      ]);

      // Merge all modular translations
      return {
        ...common.default,
        ...hero.default,
        ...pages.default,
        ...forms.default
      };
    } catch (modularError) {
      console.log(`Modular translations not available for ${language}, falling back to monolithic file`);
      
      // Fallback to monolithic translation file
      const monolithicTranslation = await import(`../translations/${language}.json`);
      return monolithicTranslation.default;
    }
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    throw error;
  }
};
