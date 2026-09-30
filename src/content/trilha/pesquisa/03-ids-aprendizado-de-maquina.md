---
area: pesquisa
ordem: 3
titulo: Como perceber o ataque? IDS e aprendizado de máquina
pergunta: Como um programa aprende a separar tráfego normal de tráfego malicioso?
resumo: Um sistema de detecção de intrusão observa o tráfego e dispara um alarme quando algo foge do esperado. Com aprendizado de máquina, ele aprende esse "esperado" a partir de exemplos rotulados.
prerequisitos: [Degrau 1, Degrau 2]
resultado: Treinar e avaliar um classificador simples em um dataset de tráfego, reportando precisão, revocação e F1 por classe, e explicar o que é um falso alarme.
tempo: 4 a 8 horas
tags: [IDS, aprendizado de máquina, métricas]
---

## Antes de começar

Ter lido os degraus 1 e 2. Vai ajudar saber o básico de Python e ter rodado um notebook alguma vez.

## Ideia principal

Um **sistema de detecção de intrusão** (*Intrusion Detection System*, IDS) é um vigia. Ele olha cada mensagem que passa e responde: normal ou ataque? Há duas formas de ensinar esse vigia:

- **Por assinatura:** uma lista de padrões conhecidos de ataque. Rápido, mas cego para ataques novos.
- **Por aprendizado de máquina:** mostramos milhares de exemplos rotulados ("este pacote era normal", "este era ataque") e um algoritmo aprende a fronteira entre eles.

O grupo trabalha com a segunda forma. O ingrediente principal é um **dataset** rotulado, e é por isso que o degrau 2 insistiu no ERENO: sem dados realistas, o vigia aprende com exemplos que não parecem a subestação de verdade.

## Um exemplo para guardar na cabeça

Suponha 1.000 mensagens, das quais 50 são ataques. Um modelo preguiçoso que responde "normal" para tudo acerta 950 vezes: 95% de acurácia, e não detectou ataque nenhum. Por isso a acurácia sozinha engana em dados desbalanceados. As perguntas certas são:

| Métrica | Pergunta que responde |
| --- | --- |
| Revocação (recall) da classe ataque | De todos os ataques, quantos o modelo pegou? |
| Precisão da classe ataque | De todos os alarmes, quantos eram ataques de verdade? |
| F1 | Um equilíbrio entre as duas anteriores |
| Matriz de confusão | Quantos ataques passaram (falsos negativos) e quantos alarmes falsos houve (falsos positivos) |

Um ataque que passa é perigoso; um alarme falso demais faz o operador ignorar o vigia. O trabalho é equilibrar os dois.

## Protocolo mínimo de um experimento

1. Defina a pergunta, o dataset, a tarefa (binária ou multiclasse) e a métrica antes de treinar.
2. Separe treino, validação e teste antes de qualquer transformação; o teste só é usado no final.
3. Comece com um modelo simples como linha de base.
4. Reporte métricas por classe, contagens e a matriz de confusão.
5. Registre versão do código, sementes, hiperparâmetros e divisão dos dados.

## O que você vai conseguir fazer depois

- Explicar a diferença entre falso positivo e falso negativo em um IDS.
- Treinar um classificador de linha de base e produzir a matriz de confusão.
- Justificar por que acurácia não basta em dados desbalanceados.

## Para ir além

- No glossário, leia: IDS, classificação, dataset rotulado, validação, matriz de confusão, F1.
- O modelo de registro de experimento usado pelo grupo fica nos repositórios dos bolsistas.

## Próximo degrau

Degrau 4: como confiar no alarme, com inteligência artificial explicável.
