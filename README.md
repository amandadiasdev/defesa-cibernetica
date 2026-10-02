# Defesa Cibernética · site do grupo

Site do grupo de pesquisa Defesa Cibernética (subgrupo do AI Horizon Labs; Unipampa, UFU e UFSM), coordenado pelo professor Silvio Ereno Quincozes. Reúne projetos, orientandos com trilhas de estudo, publicações, sistemas e o perfil do coordenador.

Site estático gerado com [Astro](https://astro.build) e publicado no GitHub Pages. Sem servidor, sem banco de dados.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/defesa-cibernetica/` (o caminho `/defesa-cibernetica` vem do `base` em `astro.config.mjs`; para testar na raiz use `BASE_PATH=/ npm run dev`).

Outros comandos: `npm run build` gera a pasta `dist/`; `npm run preview` serve o build; `npm run check` roda a verificação de tipos.

## Publicar no GitHub Pages

1. Em `astro.config.mjs`, confira `site` (dono do repositório) e `base` (nome do repositório).
2. No GitHub, em **Settings → Pages**, escolha **GitHub Actions** como fonte.
3. Todo push na branch `main` roda `.github/workflows/deploy.yml` e publica.

## Onde cada coisa fica

| Quero mudar... | Arquivo |
| --- | --- |
| Dados do grupo, laboratório, redes e projetos | `src/data/grupo.ts` |
| Dados do coordenador (formação, sala, e-mail, perfis) | `src/data/professor.ts` |
| Publicações em destaque | `src/data/publicacoes.ts` |
| Links de sistemas (Codefólio, datasets, ferramentas) | `src/data/sistemas.ts` |
| Um bolsista | `src/content/bolsistas/<nome>.md` (copie `_modelo.md`) |
| Um degrau de trilha | `src/content/trilha/<area>/0N-nome.md` (áreas: pesquisa, extensao, outros) |
| Nome e descrição de uma área | `src/data/areas.ts` |
| Glossário | `src/content/glossario.json` |
| Cores, raios, fontes (brandkit E4) | `src/styles/tokens.css` |
| Textos de menu, botões e rodapé (para o inglês) | `src/i18n/ui.ts` |

Valores escritos como `{{A_CONFIRMAR}}` aparecem no site com uma marca amarela "a confirmar". Eles somem quando o valor real é colocado no arquivo de dados.

## Brandkit

As variáveis de `src/styles/tokens.css` seguem a estrutura do kit "E4 · Alto contraste" do Figma, adaptada à marca do grupo: preto, branco e o dourado do logo `#C09C48` (com `#6E5512` para links sobre fundo claro), Gabarito nos títulos e Familjen Grotesk no corpo, botões em pílula e cartões com raio de 12 px. O logo está em `public/logo-dc.png`. O modo escuro segue a preferência do sistema e pode ser trocado no botão do menu.

## Fontes dos dados

Página institucional do professor, cadastro de docente da Unipampa, página "Trabalhe comigo" e Google Scholar, conferidos em 29/09/2026. Lattes, ORCID e LinkedIn não puderam ser lidos automaticamente; os dados que dependeriam deles estão marcados como a confirmar.

## Inglês

A estrutura já separa textos de interface (`src/i18n/ui.ts`) e conteúdo (`src/content`, `src/data`). Para ativar o inglês: preencher `ui.en`, criar `src/pages/en/` com as páginas traduzidas e, se quiser, duplicar as coleções de conteúdo por idioma.
