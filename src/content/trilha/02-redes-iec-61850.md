---
ordem: 2
titulo: Onde as mensagens moram? Redes e o padrão IEC 61850
pergunta: Como os equipamentos de uma subestação conversam entre si?
resumo: O IEC 61850 é a "gramática" que os equipamentos de uma subestação digital usam para trocar mensagens pela rede. Conhecer os tipos de mensagem é o que permite saber quando uma delas é estranha.
prerequisitos: [Degrau 1]
resultado: Reconhecer os principais tipos de mensagem do IEC 61850, saber o que é um IED e ler os campos básicos de um pacote de rede.
tempo: 2 a 4 horas
tags: [redes, IEC 61850, GOOSE, IED]
---

## Antes de começar

Ter lido o degrau 1. Ajuda saber o que é um endereço de rede e o que é um pacote (um pedaço de informação que viaja pelo cabo), mas você aprende o essencial aqui.

## Ideia principal

Em uma subestação digital, os equipamentos chamados **IED** (*Intelligent Electronic Device*, dispositivo eletrônico inteligente) são pequenos computadores ligados a uma rede local. Para que um relé de um fabricante entenda um sensor de outro, todos falam a mesma língua: o padrão **IEC 61850**.

Pense no padrão como o formato de um bilhete: quem escreve, quem recebe, um número de sequência e o conteúdo. Alguns bilhetes são urgentes e vão direto para todos na sala; outros são relatórios periódicos. No IEC 61850, os mais relevantes para detecção de intrusão são:

| Tipo de mensagem | Para que serve | Por que importa para segurança |
| --- | --- | --- |
| GOOSE | Avisos rápidos de evento (por exemplo, "abra o disjuntor"), enviados para todos na rede | É a mensagem que um atacante mais quer forjar |
| Sampled Values (SV) | Medições contínuas de tensão e corrente | Medições falsas enganam a proteção |
| MMS | Comandos e leituras cliente-servidor, mais lentos | Usada para configurar e supervisionar equipamentos |

## Um exemplo para guardar na cabeça

Uma mensagem GOOSE carrega um contador de estado (*stNum*) e um contador de sequência (*sqNum*). Em operação normal, eles crescem de forma previsível. Se de repente chega uma mensagem com contadores fora de ordem, ou com um evento que não bate com as medições, algo está errado. Regras assim são o começo de um detector, e é isso que o degrau 3 automatiza com aprendizado de máquina.

## O que você vai conseguir fazer depois

- Dizer o que é um IED e listar três tipos de mensagem do IEC 61850.
- Abrir uma captura de tráfego (por exemplo, em uma ferramenta de análise de pacotes) e identificar uma mensagem GOOSE.
- Explicar por que um dataset de tráfego precisa conter cenários normais e de ataque.

## Para ir além

- O framework ERENO, desenvolvido com participação do professor, gera tráfego IEC 61850 realista com cenários normais e de ataque justamente para treinar detectores. O artigo de 2023 sobre o ERENO está no perfil do Google Scholar.
- No glossário, leia: IEC 61850, GOOSE, Sampled Values, MMS, dataset.

## Próximo degrau

Degrau 3: como perceber um ataque automaticamente.
