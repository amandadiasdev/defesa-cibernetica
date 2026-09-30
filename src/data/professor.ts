/**
 * Dados sobre o professor com a fonte de cada fato.
 * Regra: nada aqui foi inventado. O que não foi verificado fica como
 * `A_CONFIRMAR` e aparece marcado no site até alguém confirmar.
 *
 * Fontes consultadas em 29/09/2026:
 *  [1] https://sites.unipampa.edu.br/silvioquincozes/sobre/
 *  [2] https://unipampa.edu.br/alegrete/docente/19095/dados-gerais
 *  [3] https://sites.unipampa.edu.br/silvioquincozes/trabalhe-comigo/
 *  [4] https://scholar.google.com/citations?user=1eDPdn8AAAAJ&hl=pt-BR
 */

export const A_CONFIRMAR = '{{A_CONFIRMAR}}';

export const sources = {
  sobre: { id: 1, label: 'Página institucional (Sobre)', url: 'https://sites.unipampa.edu.br/silvioquincozes/sobre/' },
  docente: { id: 2, label: 'Cadastro de docente da Unipampa', url: 'https://unipampa.edu.br/alegrete/docente/19095/dados-gerais' },
  trabalhe: { id: 3, label: 'Página "Trabalhe comigo"', url: 'https://sites.unipampa.edu.br/silvioquincozes/trabalhe-comigo/' },
  scholar: { id: 4, label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=1eDPdn8AAAAJ&hl=pt-BR' },
  grupo: { id: 5, label: 'Informação do grupo de pesquisa (30/09/2026); página do PPGES', url: 'https://cursos.unipampa.edu.br/cursos/ppges/professores/' },
} as const;

export const dataConferida = '29/09/2026';

export const professor = {
  nome: 'Silvio Ereno Quincozes',
  nomeCurto: 'Silvio Quincozes',
  cargo: 'Professor na Universidade Federal do Pampa (Unipampa) e na Universidade Federal de Uberlândia (UFU)',
  coordenacao: { valor: 'Coordenador do Programa de Pós-Graduação em Engenharia de Software (PPGES) da Unipampa', curto: 'Coordenador do PPGES (Unipampa)', fonte: sources.grupo },
  posGraduacao: [
    { sigla: 'PPGES', nome: 'Programa de Pós-Graduação em Engenharia de Software', instituicao: 'Unipampa', fonte: sources.sobre },
    { sigla: 'PPGCO', nome: 'Programa de Pós-Graduação em Ciência da Computação', instituicao: 'UFU', fonte: sources.sobre },
  ],
  campus: { valor: 'Campus Alegrete', fonte: sources.docente },
  classe: { valor: 'Classe A · Adjunto A · Nível 1', fonte: sources.docente },
  sala: { valor: 'Sala 1A-332', fonte: sources.sobre },
  email: { valor: 'silvioquincozes@unipampa.edu.br', fonte: sources.docente },
  formacao: [
    { titulo: 'Doutorado em Ciência da Computação', instituicao: 'Universidade Federal Fluminense (UFF)', ano: '2022', detalhe: 'Concluído em fevereiro de 2022', fonte: sources.sobre },
    { titulo: 'Doutorado sanduíche', instituicao: 'University of Pittsburgh (PITT), Estados Unidos', ano: '2020', detalhe: 'Período encerrado em dezembro de 2020', fonte: sources.sobre },
    { titulo: 'Mestrado em Ciência da Computação', instituicao: 'Universidade Federal de Santa Maria (UFSM)', ano: '2018', detalhe: 'Concluído em fevereiro de 2018', fonte: sources.sobre },
    { titulo: 'Bacharelado em Engenharia de Software', instituicao: 'Universidade Federal do Pampa (Unipampa)', ano: A_CONFIRMAR, detalhe: 'Ano de conclusão não informado na fonte', fonte: sources.sobre },
  ],
  disciplinas: [
    { nome: 'Banco de Dados', nivel: 'Graduação', fonte: sources.sobre },
    { nome: 'Resolução de Problemas IV (RP IV)', nivel: 'Graduação', fonte: sources.sobre },
    { nome: 'Engenharia de Software Seguro', nivel: 'Graduação', fonte: sources.sobre },
  ],
  areas: [
    { nome: 'Sistemas de detecção de intrusão (IDS)', fonte: sources.sobre },
    { nome: 'Subestações digitais', fonte: sources.sobre },
    { nome: 'Dispositivos eletrônicos inteligentes (IEDs)', fonte: sources.sobre },
    { nome: 'Padrão IEC 61850', fonte: sources.sobre },
  ],
  interessesScholar: ['Cyber Security', 'Machine Learning', 'Intrusion Detection', 'IEC-61850', 'Internet of Things'],
  parcerias: { valor: ['UFSM', 'UFF', 'UFU', 'University of Pittsburgh'], fonte: sources.trabalhe },
  metricasScholar: {
    citacoes: 945,
    indiceH: 14,
    data: dataConferida,
    fonte: sources.scholar,
    aviso: 'Valores mudam com o tempo; consulte o perfil para o número atual.',
  },
  perfis: [
    { nome: 'Lattes', url: 'http://lattes.cnpq.br/9401130360785458', descricao: 'Currículo completo (CNPq)' },
    { nome: 'ORCID', url: 'https://orcid.org/0000-0001-6793-4033', descricao: 'Identificador de pesquisador' },
    { nome: 'Google Scholar', url: 'https://scholar.google.com/citations?user=1eDPdn8AAAAJ&hl=pt-BR', descricao: 'Publicações e citações' },
    { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/sequincozes/', descricao: 'Perfil profissional' },
    { nome: 'Página institucional', url: 'https://sites.unipampa.edu.br/silvioquincozes/', descricao: 'Site na Unipampa' },
  ],
  trabalheComigo: {
    fonte: sources.trabalhe,
    niveis: [
      { nivel: 'Graduação (Unipampa)', oferta: 'Iniciação científica e trabalho de conclusão de curso' },
      { nivel: 'Mestrado e doutorado', oferta: 'Pesquisa pelo PPGES (Unipampa) e pelo PPGCO (UFU)' },
    ],
    interesses: 'Cibersegurança e inteligência artificial aplicada, com abertura para propostas de temas diversos.',
    perfilEsperado: 'Comprometimento e ambição de fazer pesquisa de excelência e/ou produzir soluções de cunho inovador.',
  },
} as const;

export const projeto = {
  sigla: 'XAIID',
  codigo: '2023.PE.AL.2578',
  titulo: 'Detecção de intrusão em sistemas ciberfísicos com aprendizado de máquina e inteligência artificial explicável',
  resumo:
    'O projeto investiga sistemas de detecção de intrusão (IDS) para sistemas ciberfísicos, combinando aprendizado de máquina, inteligência artificial explicável (XAI), otimização de hiperparâmetros e seleção de características. O contexto inicial são as redes elétricas inteligentes (smart grids) e o padrão IEC 61850, com apoio do framework ERENO para geração de dados realistas.',
  linhas: [
    { nome: 'Detecção de intrusão (IDS)', descricao: 'Modelos que observam o tráfego da rede e sinalizam comportamentos anômalos ou ataques conhecidos.' },
    { nome: 'Aprendizado de máquina', descricao: 'Classificadores treinados com dados rotulados de tráfego normal e de ataque, avaliados com métricas por classe.' },
    { nome: 'Inteligência artificial explicável (XAI)', descricao: 'Métodos que mostram quais características pesaram na decisão do modelo, para que um analista consiga confiar e auditar o alarme.' },
    { nome: 'Otimização de hiperparâmetros (HPO)', descricao: 'Busca sistemática pelas configurações do modelo que melhoram detecção sem inflar falsos alarmes.' },
    { nome: 'Seleção de características', descricao: 'Escolha do subconjunto de atributos do tráfego que mantém o desempenho com menos custo e mais interpretabilidade.' },
  ],
  contexto: ['Smart grids', 'IEC 61850', 'Subestações digitais', 'ERENO', 'Agentic AI'],
} as const;
