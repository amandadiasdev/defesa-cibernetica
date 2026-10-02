/**
 * Dados do grupo de pesquisa Defesa Cibernética (DC).
 * Fontes: Instagram @defesacibernetica.dc (bio, lida em 02/10/2026) e
 * mensagens do professor em 01/10/2026. O que não foi confirmado fica como
 * A_CONFIRMAR e aparece marcado no site.
 */
import { A_CONFIRMAR } from './professor';

export const grupo = {
  nome: 'Defesa Cibernética',
  sigla: 'DC',
  desde: '2022',
  tagline: 'Grupo de pesquisa em cibersegurança e inteligência artificial aplicada',
  descricaoCurta:
    'Grupo de pesquisa em Defesa Cibernética, com pesquisadores da Unipampa, da UFU e da UFSM. Investiga detecção de intrusões, explicabilidade de modelos, dados para IA e agentes aplicados a sistemas ciberfísicos, e leva esse conhecimento à comunidade por extensão.',
  laboratorio: {
    nome: 'AI Horizon Labs',
    descricao: 'O Defesa Cibernética é um subgrupo do AI Horizon Labs.',
    url: A_CONFIRMAR,
  },
  instituicoes: ['Unipampa', 'FACOM · UFU', 'UFSM'],
  redes: [
    { nome: 'Instagram', url: 'https://www.instagram.com/defesacibernetica.dc/', handle: '@defesacibernetica.dc' },
  ],
  eventos: ['SBSeg · Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais'],
  coordenador: 'Silvio Ereno Quincozes',
} as const;

export type Projeto = {
  id: string;
  sigla: string;
  titulo: string;
  resumo: string;
  agencia?: string;
  codigo?: string;
  periodo?: string;
  status: 'em andamento' | 'concluído' | 'a confirmar';
  temas: string[];
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    id: 'safegrid',
    sigla: 'SAFEGRID',
    titulo: 'Agentes de inteligência artificial para a segurança de subestações',
    resumo:
      'Projeto financiado pela FAPERGS sobre agentes de IA aplicados à segurança de subestações de energia: detecção, explicação e resposta a ataques em redes IEC 61850. Título oficial, edital e equipe: a confirmar.',
    agencia: 'FAPERGS',
    codigo: A_CONFIRMAR,
    periodo: A_CONFIRMAR,
    status: 'em andamento',
    temas: ['Agentes de IA', 'Subestações', 'IEC 61850', 'IDS'],
    destaque: true,
  },
  {
    id: 'xaiid',
    sigla: 'XAIID',
    titulo: 'Detecção de intrusão em sistemas ciberfísicos com aprendizado de máquina e inteligência artificial explicável',
    resumo:
      'Projeto institucional da Unipampa que combina detecção de intrusão, aprendizado de máquina, explicabilidade (XAI), otimização de hiperparâmetros e seleção de características, com dados realistas gerados pelo framework ERENO.',
    agencia: 'Unipampa',
    codigo: '2023.PE.AL.2578',
    status: 'em andamento',
    temas: ['IDS', 'XAI', 'Smart grids', 'ERENO'],
  },
  {
    id: 'outros',
    sigla: 'Outros',
    titulo: 'Outros projetos do grupo',
    resumo: 'Projetos de pesquisa, extensão e ensino em andamento ou concluídos. Lista a confirmar com o professor.',
    status: 'a confirmar',
    temas: [],
  },
];
