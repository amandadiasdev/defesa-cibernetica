import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Degraus da trilha de estudo dos bolsistas (Markdown, um arquivo por degrau). */
const trilha = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/trilha' }),
  schema: z.object({
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

/** Bolsistas e ex-bolsistas (Markdown, um arquivo por pessoa; _modelo.md é ignorado). */
const bolsistas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/bolsistas' }),
  schema: z.object({
    nome: z.string(),
    nivel: z.enum(['Iniciação científica', 'TCC', 'Mestrado', 'Doutorado']),
    status: z.enum(['atual', 'egresso']).default('atual'),
    tema: z.string(),
    pergunta: z.string().optional(),
    inicio: z.string().optional(),
    repositorio: z.object({ url: z.string(), privado: z.boolean().default(false) }).optional(),
    tags: z.array(z.string()).default([]),
    degrau: z.number().int().min(1).max(5).optional(),
  }),
});

/** Glossário (JSON): termo, sigla e explicação curta. */
const glossario = defineCollection({
  loader: file('./src/content/glossario.json'),
  schema: z.object({
    id: z.string(),
    termo: z.string(),
    sigla: z.string().optional(),
    explicacao: z.string(),
    degrau: z.number().int().min(1).max(5),
  }),
});

export const collections = { trilha, bolsistas, glossario };
