---
ordem: 4
titulo: Como confiar no alarme? Inteligência artificial explicável
pergunta: O modelo disse "ataque". Por quê? E dá para confiar nesse porquê?
resumo: A inteligência artificial explicável (XAI) mostra quais características do tráfego pesaram na decisão do modelo. Isso permite auditar o alarme, achar atalhos indevidos e escolher melhor as características.
prerequisitos: [Degrau 3]
resultado: Gerar uma explicação local e uma global para um IDS treinado, interpretá-las com vocabulário do domínio e apontar uma característica suspeita de vazamento.
tempo: 4 a 8 horas
tags: [XAI, SHAP, seleção de características]
---

## Antes de começar

Ter feito o degrau 3, com um modelo treinado em mãos.

## Ideia principal

Um modelo de aprendizado de máquina pode acertar pelos motivos errados. Se todo pacote de ataque do dataset veio do mesmo endereço, o modelo aprende "este endereço = ataque" e parece ótimo no teste, mas falha na subestação real. **XAI** (*Explainable Artificial Intelligence*, inteligência artificial explicável) é o conjunto de métodos que abre a caixa e mostra o que o modelo está usando.

Há dois níveis de explicação:

- **Local:** por que *esta* mensagem foi marcada como ataque? (Por exemplo: o contador de sequência saltou e o tempo entre mensagens caiu.)
- **Global:** no conjunto todo, quais características mais influenciam o modelo?

Métodos comuns atribuem a cada característica um valor de contribuição para a decisão. Um dos mais usados é o SHAP, que distribui a "responsabilidade" da previsão entre as características.

## Um exemplo para guardar na cabeça

O modelo marcou uma mensagem GOOSE como ataque. A explicação local diz que 70% da decisão veio do campo *sqNum* fora de ordem e 20% do intervalo entre mensagens. Um engenheiro de proteção olha e concorda: é exatamente o que uma injeção causa. A explicação fez sentido no domínio físico. Se a explicação dissesse que a decisão veio do "número da linha no arquivo", você teria achado um vazamento: uma característica que só existe no dataset, não na rede.

## Cuidados que o grupo segue

- Importância de característica explica o **modelo**, não necessariamente a causa do ataque.
- Identificadores, marcas de tempo e campos derivados do rótulo são suspeitos de atalho; investigue a origem antes de remover.
- Se a explicação motivar uma nova seleção de características ou ajuste do modelo, faça isso com treino e validação; o teste final continua intocado.

## O que você vai conseguir fazer depois

- Produzir uma explicação local e uma global para o seu IDS.
- Traduzir a explicação para o vocabulário do IEC 61850 (o que aquele campo significa na subestação).
- Usar a explicação para propor uma seleção de características e testar sem contaminar o conjunto de teste.

## Para ir além

- O professor é coautor de um levantamento (2024) sobre protocolos de IoT, desafios de segurança e o papel da IA explicável; está no perfil do Google Scholar.
- No glossário, leia: XAI, explicação local, explicação global, SHAP, vazamento de dados, seleção de características.

## Próximo degrau

Degrau 5: o que cada bolsista faz e como o seu tema se encaixa.
