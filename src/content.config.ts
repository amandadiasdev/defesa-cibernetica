import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const areaEnum = z.enum(['pesquisa', 'extensao', 'outros']);

/**
 * Degraus das trilhas de estudo. Um arquivo por degrau, dentro da pasta da
 * área: src/content/trilha/<area>/NN-nome.md. O id vira "<area>/NN-nome".
 */
const trilha = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/trilha' }),
  schema: z.object({
    area: areaEnum,
    ordem: z.number().int().min(1),
    titulo: z.string(),
    pergunta: z.string(),
    resumo: z.string(),
    prerequisitos: z.array(z.string()).default([]),
    resultado: z.string(),
    tempo: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

/** Bolsistas e ex-bolsistas (um arquivo por pessoa; _modelo.md é ignorado). */
const bolsistas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/bolsistas' }),
  schema: z.object({
    nome: z.string(),
    nivel: z.enum(['Iniciação científica', 'TCC', 'Mestrado', 'Doutorado', 'Extensão', 'Monitoria', 'Estágio']),
    area: areaEnum.default('pesquisa'),
    status: z.enum(['atual', 'egresso']).default('atual'),
    tema: z.string(),
    pergunta: z.string().optional(),
    inicio: z.string().optional(),
    repositorio: z.object({ url: z.string(), privado: z.boolean().default(false) }).optional(),
    tags: z.array(z.string()).default([]),
    degrau: z.number().int().min(1).optional(),
  }),
});

/** Glossário (JSON): termo, sigla e explicação curta; `degrau` aponta para a trilha da área. */
const glossario = defineCollection({
  loader: file('./src/content/glossario.json'),
  schema: z.object({
    id: z.string(),
    termo: z.string(),
    sigla: z.string().optional(),
    explicacao: z.string(),
    area: areaEnum.default('pesquisa'),
    degrau: z.number().int().min(1),
  }),
});

export const collections = { trilha, bolsistas, glossario };
