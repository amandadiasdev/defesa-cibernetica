/**
 * Publicações em destaque. Títulos e contagens copiados do Google Scholar em
 * 29/09/2026 (perfil user=1eDPdn8AAAAJ). A lista completa e atualizada fica no
 * próprio Scholar e no ORCID; esta página é só uma vitrine.
 */
export type Publicacao = {
  titulo: string;
  ano: number;
  citacoes: number;
  tema: string[];
  destaque?: string;
};

export const dataConferida = '29/09/2026';

export const publicacoesDestaque: Publicacao[] = [
  {
    titulo: 'A survey on intrusion detection and prevention systems in digital substations',
    ano: 2021,
    citacoes: 156,
    tema: ['IDS', 'Subestações digitais'],
    destaque: 'Panorama dos sistemas de detecção e prevenção de intrusão em subestações digitais.',
  },
  {
    titulo: 'MQTT protocol: fundamentals, tools and future directions',
    ano: 2019,
    citacoes: 155,
    tema: ['IoT', 'Protocolos'],
    destaque: 'Fundamentos do protocolo MQTT, usado em Internet das Coisas.',
  },
  {
    titulo: 'A survey on IoT application layer protocols, security challenges, and the role of explainable AI in IoT',
    ano: 2024,
    citacoes: 63,
    tema: ['IoT', 'XAI', 'Segurança'],
    destaque: 'Liga protocolos de IoT, desafios de segurança e o papel da IA explicável.',
  },
  {
    titulo: 'Toward a distributed approach for detection and mitigation of denial-of-service attacks within industrial Internet of Things',
    ano: 2020,
    citacoes: 61,
    tema: ['IIoT', 'DoS'],
    destaque: 'Detecção e mitigação distribuídas de ataques de negação de serviço em IoT industrial.',
  },
  {
    titulo: 'ERENO: A framework for generating realistic IEC-61850 intrusion detection datasets for smart grids',
    ano: 2023,
    citacoes: 58,
    tema: ['ERENO', 'IEC 61850', 'Datasets'],
    destaque: 'Framework que gera conjuntos de dados realistas de tráfego IEC 61850 para treinar e avaliar IDS.',
  },
];
