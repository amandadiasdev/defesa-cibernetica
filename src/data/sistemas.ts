/**
 * Sistemas, ferramentas e recursos do grupo. Links marcados como A_CONFIRMAR
 * ainda não foram verificados; trocar pelo endereço real antes de publicar.
 */
import { A_CONFIRMAR } from './professor';

export type Sistema = {
  nome: string;
  descricao: string;
  url: string;
  categoria: 'grupo' | 'dados' | 'perfil' | 'ferramenta';
  publico: Array<'novo' | 'atual' | 'externo'>;
  acesso?: string;
};

export const sistemas: Sistema[] = [
  {
    nome: 'Codefólio',
    descricao: '{{O_QUE_E_O_CODEFOLIO}}',
    url: A_CONFIRMAR,
    categoria: 'grupo',
    publico: ['novo', 'atual'],
    acesso: 'Acesso definido pelo grupo',
  },
  {
    nome: 'Repositórios dos bolsistas',
    descricao: 'Cada bolsista mantém um repositório com código, registros de experimento e leituras. A lista fica na página Bolsistas.',
    url: '/bolsistas/',
    categoria: 'grupo',
    publico: ['novo', 'atual'],
  },
  {
    nome: 'ERENO (framework e datasets)',
    descricao: 'Gera tráfego IEC 61850 realista, com cenários normais e de ataque, para treinar e avaliar sistemas de detecção de intrusão.',
    url: A_CONFIRMAR,
    categoria: 'dados',
    publico: ['novo', 'atual'],
    acesso: 'Público (confirmar endereço do repositório)',
  },
  {
    nome: 'Google Scholar',
    descricao: 'Lista completa de publicações e citações do professor.',
    url: 'https://scholar.google.com/citations?user=1eDPdn8AAAAJ&hl=pt-BR',
    categoria: 'perfil',
    publico: ['externo', 'novo'],
  },
  {
    nome: 'Currículo Lattes',
    descricao: 'Currículo acadêmico completo na plataforma do CNPq.',
    url: 'http://lattes.cnpq.br/9401130360785458',
    categoria: 'perfil',
    publico: ['externo'],
  },
  {
    nome: 'ORCID',
    descricao: 'Identificador único de pesquisador com a lista de trabalhos.',
    url: 'https://orcid.org/0000-0001-6793-4033',
    categoria: 'perfil',
    publico: ['externo'],
  },
  {
    nome: 'Agenda para reuniões',
    descricao: 'Marque um horário com o professor pela agenda pública.',
    url: 'https://calendar.app.google/k996aUwgi9tfUbgj7',
    categoria: 'ferramenta',
    publico: ['atual', 'externo'],
  },
];
