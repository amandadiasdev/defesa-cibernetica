/**
 * Textos de interface por idioma. O conteúdo das páginas (Markdown e dados)
 * fica em src/content e src/data; aqui ficam só rótulos de menu, botões e
 * rodapé, para que a versão em inglês seja adicionada sem mexer nos componentes.
 *
 * Para ativar o inglês: preencher `en`, criar páginas em src/pages/en/ e
 * trocar `defaultLang` se for o caso.
 */
export const languages = {
  'pt-BR': 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt-BR';

export const ui = {
  'pt-BR': {
    'site.name': 'Silvio Quincozes',
    'site.tagline': 'Detecção de intrusão explicável em sistemas ciberfísicos',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.research': 'Pesquisa',
    'nav.teaching': 'Ensino',
    'nav.students': 'Bolsistas',
    'nav.systems': 'Sistemas',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contato',
    'nav.menu': 'Menu',
    'nav.close': 'Fechar',
    'skip.main': 'Pular para o conteúdo',
    'theme.toggle': 'Alternar tema claro/escuro',
    'theme.light': 'Tema claro',
    'theme.dark': 'Tema escuro',
    'footer.institution': 'Universidade Federal do Pampa (Unipampa) · Campus Alegrete',
    'footer.profiles': 'Perfis',
    'footer.sections': 'Seções',
    'footer.source': 'Fonte dos dados',
    'footer.updated': 'Dados conferidos em',
    'footer.rights': 'Conteúdo mantido pelo grupo de pesquisa.',
    'cta.research': 'Conhecer a pesquisa',
    'cta.students': 'Área dos bolsistas',
    'cta.contact': 'Entrar em contato',
    'cta.scholar': 'Ver publicações no Google Scholar',
    'cta.startTrail': 'Começar a trilha',
    'cta.openSystems': 'Abrir sistemas',
    'cta.about': 'Sobre o professor',
    'label.new': 'Novo',
    'label.current': 'Atual',
    'label.external': 'Externo',
    'label.toConfirm': 'a confirmar',
    'label.step': 'Degrau',
    'label.readingTime': 'leitura',
  },
  en: {
    // TODO: traduzir quando a versão em inglês for ativada.
    'site.name': 'Silvio Quincozes',
    'site.tagline': 'Explainable intrusion detection for cyber-physical systems',
  },
} as const;

type Keys = keyof (typeof ui)['pt-BR'];

/** Devolve uma função t(chave) que cai para pt-BR quando a chave não existe no idioma. */
export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: Keys): string {
    const dict = ui[lang] as Partial<Record<Keys, string>>;
    return dict[key] ?? ui[defaultLang][key];
  };
}
