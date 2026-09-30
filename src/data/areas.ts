/**
 * Áreas da área dos bolsistas. Cada área tem a própria trilha
 * (src/content/trilha/<id>/) e os próprios bolsistas (campo `area`).
 */
export type AreaId = 'pesquisa' | 'extensao' | 'outros';

export type Area = {
  id: AreaId;
  nome: string;
  titulo: string;
  descricao: string;
  /** Uma frase sobre o que o bolsista faz nessa área. */
  papel: string;
  /** Quando a trilha ainda está sendo escrita. */
  emConstrucao?: boolean;
};

export const areas: Area[] = [
  {
    id: 'pesquisa',
    nome: 'Pesquisa',
    titulo: 'Bolsistas de pesquisa',
    descricao:
      'Iniciação científica, mestrado e doutorado no projeto XAIID: detecção de intrusão em sistemas ciberfísicos com aprendizado de máquina e IA explicável.',
    papel: 'Formula uma pergunta, roda experimentos com dados realistas e registra o que funcionou e o que não funcionou.',
  },
  {
    id: 'extensao',
    nome: 'Extensão',
    titulo: 'Bolsistas de extensão',
    descricao:
      'Projetos que levam o conhecimento do grupo para fora da universidade e trazem de volta as necessidades da comunidade e das organizações parceiras.',
    papel: 'Planeja e executa ações com público externo, registra as atividades e produz materiais e relatórios.',
    emConstrucao: true,
  },
  {
    id: 'outros',
    nome: 'Outros programas',
    titulo: 'Monitoria, TCC, estágio e outros programas',
    descricao:
      'Quem trabalha com o professor em disciplinas, trabalhos de conclusão de curso, estágios e programas institucionais que não são pesquisa nem extensão.',
    papel: 'Apoia disciplinas e alunos, ou desenvolve um trabalho de conclusão sob orientação, com acompanhamento regular.',
    emConstrucao: true,
  },
];

export const areaById = (id: string): Area | undefined => areas.find((a) => a.id === id);

/** Separa o id de um degrau ("pesquisa/01-nome") em área e slug. */
export function splitTrilhaId(id: string): { area: string; slug: string } {
  const [area, ...rest] = id.split('/');
  return { area, slug: rest.join('/') };
}
