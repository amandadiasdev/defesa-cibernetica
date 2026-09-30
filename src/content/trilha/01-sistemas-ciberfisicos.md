---
ordem: 1
titulo: Por que proteger um sistema ciberfísico?
pergunta: O que é um sistema ciberfísico e o que quebra quando ele é atacado?
resumo: Um sistema ciberfísico é um computador que mexe no mundo físico. Quando alguém o engana, a consequência não é uma tela travada, é um disjuntor que abre ou uma bomba que para.
prerequisitos: []
resultado: Explicar com suas palavras o que é um sistema ciberfísico, dar um exemplo de rede elétrica e dizer por que um ataque a ele é diferente de um ataque a um site.
tempo: 1 a 2 horas
tags: [CPS, smart grid, subestação]
---

## Antes de começar

Nada. Este é o primeiro degrau. Você só precisa saber que um computador recebe dados, decide algo e produz uma saída.

## Ideia principal

Um **sistema ciberfísico** (em inglês, *cyber-physical system*, CPS) é um sistema em que a parte digital (software, rede, sensores) controla uma parte física (motores, válvulas, disjuntores). Pense em um termostato: ele lê a temperatura (sensor), compara com o valor desejado (software) e liga ou desliga o ar-condicionado (atuador). Agora troque a casa por uma **subestação de energia**: os sensores medem tensão e corrente, o software decide se algo está errado e o atuador é um disjuntor que desliga uma linha inteira.

A diferença para um site comum é a consequência. Se um site é derrubado, alguém deixa de ver uma página. Se um atacante faz a subestação acreditar que há um curto-circuito, um disjuntor abre e uma cidade pode ficar sem luz. Por isso a segurança aqui protege coisas físicas, não só dados.

## Um exemplo para guardar na cabeça

Imagine dois equipamentos da subestação conversando pela rede:

    sensor de corrente  --->  "corrente normal"  --->  relé de proteção
    sensor de corrente  --->  "CURTO-CIRCUITO!"  --->  relé abre o disjuntor

Um ataque de **injeção de mensagens** faz o relé receber a segunda mensagem sem que exista curto-circuito nenhum. O relé obedece, porque a mensagem parece legítima. O degrau 2 mostra a "língua" em que essas mensagens são escritas; o degrau 3 mostra como um sistema pode perceber que a mensagem é falsa.

## O que você vai conseguir fazer depois

- Definir sistema ciberfísico em uma frase e dar dois exemplos.
- Apontar, em um diagrama simples de subestação, onde estão sensores, software e atuadores.
- Explicar por que "disponibilidade" e "integridade" das mensagens importam mais aqui do que em um site.

## Para ir além

- O termo *smart grid* (rede elétrica inteligente) aparece nas publicações do grupo; procure no perfil do professor o artigo sobre sistemas de detecção e prevenção de intrusão em subestações digitais (2021), que faz um panorama da área.
- No glossário, leia: CPS, smart grid, subestação digital, IED.

## Próximo degrau

Degrau 2: onde essas mensagens moram e como é o padrão IEC 61850.
