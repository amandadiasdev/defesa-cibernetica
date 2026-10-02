// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages publica em https://<usuario>.github.io/<repositorio>/.
 * Ajuste `site` para o dono do repositório e `base` para o nome do repositório.
 * Se o repositório se chamar `<usuario>.github.io`, troque `base` por '/'.
 *
 * Em desenvolvimento local o valor de BASE_PATH pode ser sobrescrito:
 *   BASE_PATH=/ npm run dev
 */
const SITE = process.env.SITE_URL ?? 'https://amandadiasdev.github.io';
const BASE = process.env.BASE_PATH ?? '/site-silvio-quincozes';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  redirects: {
    '/sobre': '/perfil',
    '/pesquisa': '/projetos',
    '/ensino': '/perfil',
  },
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
