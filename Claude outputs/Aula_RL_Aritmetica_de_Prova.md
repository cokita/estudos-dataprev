# Raciocínio Lógico · Aritmética de prova

Itens do edital: *"problemas aritméticos"* e *"raciocínio numérico"* — porcentagem, razão e proporção, regra de três, médias e juros. É o tópico `rl-aritmeticos` do seu mapa, prioridade alta e sem material até agora.

---

## Parte 0 — Antes de estudar, olhe o que a banca de fato cobrou

Fui ver as **6 questões de Raciocínio Lógico Matemático da prova real** (FGV, DataPrev 2024, Analista de TI · Desenvolvimento de Software, questões 25 a 30):

| Q | Assunto | Do que se trata |
|---|---|---|
| 25 | **Divisão proporcional** | prejuízo repartido na proporção do capital investido |
| 26 | **Média ponderada** | pesos 1, 2, 3, 4 e soma mínima para aprovação |
| 27 | Identidade algébrica | soma e soma dos quadrados → diferença |
| 28 | Lógica sentencial | equivalente de um "se… então" (contrapositiva) |
| 29 | Contagem de pares | estradas ligando vilarejos dois a dois |
| 30 | **Percentuais sucessivos** | dois aumentos e a *taxa média* mensal |

**Cinco das seis eram problema numérico. Uma era lógica.**

Vale dizer isso com clareza, porque muda a conta do seu plano: na prova de 2024, a lógica sentencial — que tem três blocos de material e quatro simulados no seu app — valeu **uma** questão, e a aritmética valeu **cinco**. Uma amostra de um ano não é lei, e a banca pode mudar a mão em 2026. Mas quando o histórico e o edital apontam para o mesmo lado, é razoável tratar esta aula como a mais rentável de Raciocínio Lógico, e não como o rodapé do bloco. Você fez 3/6 aqui: dá para subir bastante, porque é conteúdo fechado.

**Duas condições da prova que mudam como se estuda isto:**

1. **Não há calculadora.** Toda conta tem que fechar na mão. Por isso a Parte 8, de cálculo mental, não é enfeite — é parte da matéria.
2. **São 5 questões em ~20 minutos.** Quatro minutos por questão. O caminho curto vale mais que o caminho certo e longo.

---

## Parte 1 — Razão, proporção e divisão proporcional

### 1.1 O vocabulário, do zero

- **Razão** entre dois números é a divisão de um pelo outro: a razão entre 12 e 25 é `12/25`. É "quanto um representa do outro".
- **Proporção** é a igualdade entre duas razões: `a/b = c/d`.
- **Propriedade fundamental:** numa proporção, o **produto dos meios é igual ao produto dos extremos** — de `a/b = c/d` vem `a·d = b·c`. É a multiplicação em cruz, e é disso que a regra de três é feita.

### 1.2 Divisão proporcional — o modelo da questão 25

> Dois sócios entraram com R$ 12.000 e R$ 13.000. Perderam R$ 50.000. Quanto cabe ao primeiro?

O método, em três passos que servem para qualquer questão do tipo:

1. **Some as partes:** 12.000 + 13.000 = **25.000** (esse é o "todo" da proporção).
2. **Escreva a fração de quem você quer:** 12.000/25.000 = **12/25**.
3. **Aplique sobre o valor a repartir:** 50.000 × 12/25 = **24.000**.

> **Confira sempre pela outra ponta.** O outro sócio fica com 13/25 × 50.000 = 26.000, e 24.000 + 26.000 = 50.000. Fecha. Essa conferência custa cinco segundos e pega erro de fração invertida — que é o erro nº 1 do assunto.

**A armadilha:** a banca oferece como alternativa o valor do *outro* sócio (26.000) e a *média* simples (25.000). Se você inverter a fração ou dividir ao meio, encontra uma alternativa esperando por você.

### 1.3 Quando a proporção é inversa

*"Repartir R$ 60.000 em partes **inversamente** proporcionais a 2 e 3"* significa usar `1/2` e `1/3` como pesos:

- Soma dos pesos: 1/2 + 1/3 = 5/6
- Primeira parte: 60.000 × (1/2)/(5/6) = 60.000 × 6/10 = **36.000**
- Segunda: 60.000 × (1/3)/(5/6) = 60.000 × 4/10 = **24.000**

Repare que quem tinha o número **menor** ficou com a parte **maior** — é o que "inversamente" quer dizer. Truque: inverter os números e depois tratar como proporção direta.

---

## Parte 2 — Porcentagem: o fator multiplicativo resolve quase tudo

### 2.1 O que é

*Por cento* = por cem. `30% = 30/100 = 0,30`. E **"de" significa multiplicar**: 30% de 80 é `0,30 × 80 = 24`.

> **Consequência útil:** porcentagem **comuta**. 30% de 80 = 80% de 30 = 24. Quando a conta estiver feia, troque os dois de lugar — às vezes vira uma conta trivial.

### 2.2 O fator: a ferramenta mais importante da aula

Em vez de calcular a parte e depois somar, trabalhe com **um número só**:

| Operação | Fator | Exemplo |
|---|---|---|
| aumento de 20% | **× 1,20** | 500 → 600 |
| aumento de 7% | × 1,07 | 200 → 214 |
| desconto de 20% | **× 0,80** | 500 → 400 |
| desconto de 35% | × 0,65 | 200 → 130 |
| aumento de 100% | × 2,00 | dobrou |
| desconto de 100% | × 0 | zerou |

**A regra:** aumento de *x*% → fator `1 + x/100`. Desconto de *x*% → fator `1 − x/100`.

### 2.3 Variações sucessivas: fatores se MULTIPLICAM

Este é o item que a FGV cobrou em 2024 e que mais aparece em qualquer banca.

> Dois aumentos consecutivos, de 30% e de 10%. Qual o aumento no período?

**Não é 40%.** É `1,30 × 1,10 = 1,43` → **43%**.

Por quê: o segundo aumento incide sobre o valor **já aumentado**, não sobre o original. Os 10% do segundo mês são 10% de 130, não de 100.

E a contrapartida, que surpreende quem nunca viu:

> Um aumento de 20% seguido de um desconto de 20% **não** volta ao preço original.

`1,20 × 0,80 = 0,96` → o preço final é **4% menor** que o inicial. O desconto de 20% incidiu sobre um valor maior do que o aumento.

> **Regra prática:** **aumento e desconto de mesma taxa sempre terminam abaixo do valor inicial.** E a ordem não importa — `1,2 × 0,8` = `0,8 × 1,2`.

### 2.4 Desfazer uma variação

> Depois de um desconto de 20%, de quanto tem que ser o aumento para voltar ao preço original?

Não são 20%. O fator do desconto foi 0,80; para desfazer, precisa do **inverso**: `1/0,80 = 1,25` → aumento de **25%**.

| Desconto aplicado | Aumento para voltar |
|---|---|
| 10% (×0,9) | 11,1% (1/0,9) |
| 20% (×0,8) | **25%** |
| 25% (×0,75) | 33,3% |
| 50% (×0,5) | **100%** |

A intuição: descer 50% é perder metade; subir de volta é **dobrar**. Descida e subida nunca têm a mesma taxa, porque a base mudou.

### 2.5 Variação percentual: o "de quanto aumentou?"

```
variação % = (valor final − valor inicial) / valor inicial × 100
```

O denominador é **sempre o valor inicial** — é onde se erra. De 40 para 50: `(50−40)/40 = 0,25` → aumento de **25%**. De 50 para 40: `(40−50)/50 = −0,20` → queda de **20%**. Mesma diferença absoluta, percentuais diferentes, porque a base é outra.

### 2.6 Ponto percentual x por cento

Confusão clássica, e a banca explora:

> A taxa de aprovação subiu de 20% para 25%.

- Subiu **5 pontos percentuais** (p.p.) — a diferença entre as taxas.
- Subiu **25 por cento** — porque 5 é 25% de 20.

Se o enunciado diz "p.p.", é subtração. Se diz "%", é a fórmula da variação.

---

## Parte 3 — Taxa média de variação (a questão 30)

> O preço sofreu dois aumentos mensais consecutivos, de 30% e 10%. Qual a **taxa média mensal** de aumento?

A resposta **não é 20%** (a média das taxas). Taxa média é aquela que, **aplicada as duas vezes, dá o mesmo resultado final**:

```
(1 + i)² = 1,30 × 1,10 = 1,43
1 + i = √1,43 ≈ 1,1958
i ≈ 19,58%  →  "maior que 19% e menor que 20%"
```

É a **média geométrica** dos fatores, não a aritmética. E tem uma regra que economiza a raiz:

> **A taxa média é sempre MENOR que a média aritmética das taxas** (só empata se as taxas forem iguais).

Então, sem calcular nada: as taxas eram 30% e 10%, média aritmética 20% → a resposta tem que ser **um pouco abaixo de 20%**. Na prova de 2024 isso já eliminava quatro das cinco alternativas. As outras duas armadilhas na mesma questão eram 43% (que é o total do período, não a média) e 21,5% (média de 30 e 10 feita errado).

Para *n* períodos: `(1 + i)ⁿ = fator total`, ou seja, `i = ⁿ√(fator total) − 1`.

> **Como estimar raiz quadrada sem calculadora:** procure o quadrado conhecido mais próximo. Para √1,43: sei que 1,2² = 1,44, quase exatamente o valor. Logo a raiz é um tiquinho **abaixo** de 1,2 → a taxa é um pouco menor que 20%. Não precisa de mais precisão do que isso para escolher a alternativa.

---

## Parte 4 — Regra de três

### 4.1 Simples direta

Duas grandezas **crescem juntas**. Monte a proporção alinhando as mesmas unidades e multiplique em cruz.

> 3 servidores processam 150 lotes. Quantos lotes processam 5 servidores?
> `3/5 = 150/x` → `3x = 750` → `x = 250`

### 4.2 Simples inversa

Uma grandeza cresce e a outra **diminui**. Aqui não se multiplica em cruz: **multiplica-se em linha** (ou se inverte uma das frações).

> 4 servidores fazem o trabalho em 6 horas. Em quanto tempo 3 servidores fazem?
> Mais servidores → menos tempo. Então `4 × 6 = 3 × x` → `x = 8 horas`.

> **Como decidir direta ou inversa sem decorar:** pergunte *"se eu aumentar esta, a outra sobe ou desce?"*. Sobe → direta (cruz). Desce → inversa (linha). Preço e quantidade: direta. Trabalhadores e tempo, velocidade e tempo: inversa.

### 4.3 Composta — e o atalho que dispensa a montagem

Com três ou mais grandezas, em vez de montar a tabela, calcule a **produtividade unitária**. É mais seguro e mais rápido:

> 4 servidores processam 600 lotes em 3 horas. Quantas horas 5 servidores levam para processar 1.000 lotes?

1. **Quanto faz um servidor em uma hora?** `600 ÷ (4 × 3) = 50 lotes`.
2. **Quanto fazem 5 servidores em uma hora?** `5 × 50 = 250 lotes`.
3. **Tempo para 1.000:** `1.000 ÷ 250 = 4 horas`.

Três divisões, nenhuma proporção montada, nenhum risco de inverter grandeza. Use sempre que o problema falar de gente/máquinas produzindo alguma coisa em algum tempo.

---

## Parte 5 — Médias

### 5.1 Aritmética

Soma dividida pela quantidade. `(6 + 7 + 8) / 3 = 7`.

### 5.2 Ponderada — a da questão 26

Cada valor tem um **peso**; multiplica-se cada um pelo seu peso, soma-se tudo e divide-se pela **soma dos pesos**.

> Notas 6,0 · 7,0 · 8,0 com pesos 1 · 2 · 3:
> `(6×1 + 7×2 + 8×3) / (1+2+3) = (6 + 14 + 24) / 6 = 44/6 ≈ 7,33`

Repare que o resultado puxa para o 8,0 — o valor de maior peso. É o que a questão 26 explorava: com pesos 1, 2, 3, 4, **onde cai a nota baixa muda tudo**. Uma nota ruim no peso 1 quase não machuca; a mesma nota no peso 4 elimina.

> **Atalho de prova:** quando o enunciado diz *"divida por 10"* e os pesos são 1+2+3+4 = 10, ele está dizendo que a soma dos pesos é 10. Média ≥ 7,0 vira **soma ponderada ≥ 70** — trabalhe com a soma, não com a média. Números inteiros são muito mais rápidos de testar.

### 5.3 A armadilha da média de médias

> Equipe A: 10 pessoas, média de 6 chamados por pessoa.
> Equipe B: 40 pessoas, média de 8 chamados.
> Qual a média geral?

**Não é 7.** As equipes têm tamanhos diferentes, então é uma média **ponderada pelo número de pessoas**:

```
(10 × 6 + 40 × 8) / 50 = (60 + 320) / 50 = 7,6
```

> **Média de médias só vale quando os grupos têm o mesmo tamanho.** Sempre que o enunciado der dois grupos com quantidades diferentes e pedir a média geral, volte aos **totais**: some tudo, divida pelo total de elementos.

### 5.4 Geométrica (só o necessário)

Média geométrica de *n* valores é a raiz *n*-ésima do produto. Você já a usou na Parte 3: **taxa média de variação é média geométrica**. Fora disso, raramente aparece.

---

## Parte 6 — Juros

### 6.1 Simples

Os juros incidem **sempre sobre o capital inicial**. Crescimento linear.

```
J = C · i · t          (juros)
M = C · (1 + i·t)      (montante = capital + juros)
```

`C` = capital, `i` = taxa **em decimal**, `t` = tempo **na mesma unidade da taxa**.

> R$ 4.000 a 1,5% ao mês por 8 meses:
> `J = 4.000 × 0,015 × 8 = 480` → montante R$ 4.480.

### 6.2 Compostos (para reconhecer)

Os juros incidem sobre o montante acumulado — é o fator multiplicativo da Parte 2 repetido:

```
M = C · (1 + i)^t
```

> Os mesmos R$ 4.000 a 1,5% por 8 meses: `4.000 × 1,015⁸ ≈ 4.506` — cerca de R$ 26 a mais que no simples.

**As duas pegadinhas de unidade**, que valem mais que as fórmulas:

1. **Taxa e tempo têm que estar na mesma unidade.** 12% ao ano com prazo em meses: ou você usa 1% ao mês, ou converte o prazo para anos. No juro **simples**, dividir a taxa anual por 12 é correto; no **composto**, não é (12% ao ano ≠ 1% ao mês composto).
2. **Taxa em decimal.** 1,5% é 0,015, não 1,5. Errar aqui dá um resultado 100 vezes maior, e a banca coloca esse valor entre as alternativas.

---

## Parte 7 — Raciocínio numérico: duas ferramentas que a FGV usou

Duas das seis questões de 2024 (a 27 e a 29) não eram porcentagem nem média — eram truques. Valem cinco minutos cada.

### 7.1 As identidades do quadrado da soma

```
(a + b)² = a² + 2ab + b²
(a − b)² = a² − 2ab + b²
```

Delas sai a jogada: **se o enunciado der a soma e a soma dos quadrados, ele deu o produto.**

> Soma = 10, soma dos quadrados = 58. Qual o produto?
> `(a+b)² = a² + 2ab + b²` → `100 = 58 + 2ab` → `ab = 21`

E a versão da questão 27, com a diferença:

> `x + y = 1` e `x² + y² = 313`. Quanto vale `x − y`?
> `(x − y)² = 2(x² + y²) − (x + y)² = 626 − 1 = 625` → `x − y = 25`

Não foi preciso descobrir x e y (são 13 e −12). **Quando a pergunta é sobre soma, diferença ou produto, dá para responder sem achar os números.** Tentar resolver o sistema completo custa cinco minutos e leva ao mesmo lugar.

### 7.2 Contagem de pares

Quantas ligações existem se **cada par** de elementos se liga uma vez? É a combinação de *n* dois a dois:

```
C(n,2) = n(n−1)/2
```

Aparece disfarçada de: estradas entre cidades, apertos de mão numa reunião, partidas num campeonato de turno único, cabos entre servidores, chaves de um handshake.

> 45 cumprimentos numa reunião → `n(n−1)/2 = 45` → `n(n−1) = 90` → **n = 10** (10 × 9 = 90).

Não monte equação de segundo grau: procure **dois inteiros consecutivos cujo produto seja o dobro do total**. É mais rápido e não erra sinal.

A versão de 2024 pedia o **acréscimo**: entrando 2 novos elementos, quantas ligações novas? `C(x+2,2) − C(x,2) = 2x + 1`. Com 17 novas estradas: `2x + 1 = 17` → `x = 8`.

---

## Parte 8 — Calcular sem calculadora

Não é dica de autoajuda: metade dos erros de aritmética em prova é conta errada, não conceito errado.

### 8.1 A base: 10% e 1%

- **10%** → vírgula uma casa para a esquerda. 10% de 340 = 34.
- **1%** → duas casas. 1% de 340 = 3,4.
- Tudo se monta a partir daí: **5%** = metade de 10% · **15%** = 10% + 5% · **30%** = 10% × 3 · **2%** = 1% × 2.

> 35% de 240 = 24 (10%) × 3 = 72, mais 12 (5%) = **84**.

### 8.2 Porcentagens que são divisões

Decore estas — transformam multiplicação em divisão simples:

| % | Divida por | | % | Divida por |
|---|---|---|---|---|
| 50% | 2 | | 20% | 5 |
| 25% | 4 | | 12,5% | 8 |
| 33,3% | 3 | | 10% | 10 |
| 75% | 4 e ×3 | | 40% | 5 e ×2 |

### 8.3 Três hábitos que salvam tempo

1. **Comute o "de".** 18% de 50 é feio; **50% de 18 = 9** é instantâneo.
2. **Trabalhe com a soma, não com a média.** Enunciado de média com divisor conhecido → multiplique e trabalhe em inteiros.
3. **Estime antes de calcular e olhe as alternativas.** Muita questão da FGV se resolve por ordem de grandeza: se você sabe que a resposta está "um pouco abaixo de 20%", as outras quatro alternativas já morreram. Conta exata só quando duas alternativas sobrarem.

---

## Parte 9 — Erros que derrubam candidato

1. **Somar percentuais sucessivos.** 30% e 10% dão 43%, não 40%. Fatores se multiplicam.
2. **Achar que aumento e desconto iguais se cancelam.** `1,2 × 0,8 = 0,96`: sempre termina abaixo.
3. **Confundir taxa média com média das taxas.** Taxa média é geométrica e é sempre **menor**.
4. **Usar o valor final como base da variação.** O denominador é sempre o valor **inicial**.
5. **Trocar ponto percentual por por cento.** De 20% para 25% são 5 p.p. **ou** 25%, nunca as duas coisas.
6. **Inverter a fração na divisão proporcional.** Confira somando as partes.
7. **Multiplicar em cruz numa regra de três inversa.** Pergunte "sobe ou desce?" antes.
8. **Média de médias com grupos de tamanhos diferentes.** Volte aos totais.
9. **Taxa em percentual dentro da fórmula de juros.** 1,5% é 0,015.
10. **Resolver o sistema inteiro quando a identidade bastava.** Soma + soma dos quadrados já dá o produto.

---

## Checklist do dia

- [ ] Parte 0 — ler o quadro da prova de 2024 (2 min) ← **é o que justifica o tempo gasto aqui**
- [ ] Parte 1 — divisão proporcional, com a conferência pela outra ponta (10 min)
- [ ] Parte 2 — o fator multiplicativo e as sucessivas (15 min) ← **o coração da aula**
- [ ] Parte 3 — taxa média e a regra do "sempre menor" (10 min)
- [ ] Parte 4 — regra de três, e o atalho da produtividade unitária (10 min)
- [ ] Parte 5 — ponderada e a armadilha da média de médias (10 min)
- [ ] Parte 6 — juros simples e as duas pegadinhas de unidade (5 min)
- [ ] Parte 7 — as identidades e o C(n,2) (10 min)
- [ ] Parte 8 — fazer as contas da Parte 8 de cabeça, sem escrever (5 min)
- [ ] 10 questões estilo FGV + correção
- [ ] Caderno de erros: escrever *por que* errou cada uma
- [ ] Treino fixo: 6 questões de Português da FGV + 1 texto técnico em inglês
- [ ] 15 min de Anki (Legislação)

---

# Questões — estilo FGV

Sem calculadora. Escreva a conta no papel: o objetivo é treinar o caminho curto, não acertar de qualquer jeito.

---

**1.** Dois sócios investiram R$ 15.000,00 e R$ 25.000,00 em um negócio. Ao fim do exercício, o lucro de R$ 32.000,00 foi dividido em partes diretamente proporcionais ao capital investido. O sócio que investiu menos recebeu

(A) R$ 10.000,00
(B) R$ 12.000,00
(C) R$ 13.500,00
(D) R$ 16.000,00
(E) R$ 20.000,00

---

**2.** O preço de um equipamento sofreu um aumento de 20% e, no mês seguinte, um desconto de 20%. Em relação ao preço inicial, o preço final é

(A) igual.
(B) 4% menor.
(C) 4% maior.
(D) 2% menor.
(E) 5% menor.

---

**3.** Após conceder um desconto de 20% sobre o preço de tabela, uma empresa decide voltar ao preço original. O aumento que deve ser aplicado sobre o preço com desconto é de

(A) 20%
(B) 22%
(C) 25%
(D) 30%
(E) 80%

---

**4.** O número de acessos a um sistema cresceu 21% ao longo de dois meses. Supondo que o crescimento mensal tenha sido o mesmo nos dois meses, essa taxa mensal foi de

(A) 10%
(B) 10,5%
(C) 11%
(D) 21%
(E) 42%

---

**5.** Quatro servidores processam 600 lotes de dados em 3 horas. Mantido o mesmo desempenho por servidor, o tempo necessário para que 5 servidores processem 1.000 lotes é de

(A) 3 horas
(B) 3 horas e 30 minutos
(C) 4 horas
(D) 4 horas e 30 minutos
(E) 5 horas

---

**6.** Em uma avaliação, a nota final é a média ponderada de três provas, com pesos 2, 3 e 5, respectivamente. Um candidato obteve 6,0 na primeira e 7,0 na segunda. A menor nota que ele precisa obter na terceira prova para alcançar nota final 7,0 é

(A) 7,0
(B) 7,2
(C) 7,4
(D) 7,5
(E) 8,0

---

**7.** Em um mutirão de atendimento, a equipe A tem 10 atendentes, que resolveram em média 6 chamados cada, e a equipe B tem 40 atendentes, que resolveram em média 8 chamados cada. A média de chamados resolvidos por atendente, considerando as duas equipes, é

(A) 7,0
(B) 7,2
(C) 7,5
(D) 7,6
(E) 8,0

---

**8.** Um capital de R$ 4.000,00 foi aplicado a juros simples, à taxa de 1,5% ao mês, durante 8 meses. Os juros produzidos nesse período foram de

(A) R$ 400,00
(B) R$ 450,00
(C) R$ 480,00
(D) R$ 520,00
(E) R$ 600,00

---

**9.** Em uma reunião, cada participante cumprimentou cada um dos demais exatamente uma vez, totalizando 45 cumprimentos. O número de participantes da reunião era

(A) 9
(B) 10
(C) 12
(D) 15
(E) 45

---

**10.** A soma de dois números é 10 e a soma de seus quadrados é 58. O produto desses dois números é

(A) 16
(B) 18
(C) 21
(D) 24
(E) 42

---

## Gabarito comentado

**1 — (B)** Capital total: 15.000 + 25.000 = 40.000. A fração de quem investiu menos é 15/40 = 3/8. Aplicando: `32.000 × 3/8 = 12.000`.

Conferindo pela outra ponta: o outro sócio recebe 25/40 = 5/8 → 20.000, e 12.000 + 20.000 = 32.000. Fecha. A opção (E) é justamente a parte do **outro** sócio — é o que você marca se inverter a fração, e é a alternativa que a banca sempre oferece. A (D) é a metade do lucro, de quem dividiu igualmente.

**2 — (B)** Fatores se multiplicam: `1,20 × 0,80 = 0,96`. O preço final é 96% do inicial, ou seja, **4% menor**.

A (A) é a resposta intuitiva e errada: o desconto de 20% incidiu sobre um valor já aumentado, maior que o original, então tirou mais do que o aumento tinha posto. Vale guardar a regra geral: **aumento e desconto de mesma taxa sempre terminam abaixo do valor inicial** — e a ordem das duas operações não muda nada, porque a multiplicação é comutativa.

**3 — (C)** O desconto multiplicou por 0,80. Para desfazer é preciso o fator inverso: `1/0,80 = 1,25` → aumento de **25%**.

A (A) é a armadilha: subir 20% sobre um valor menor não recupera o que se perdeu. Testando com 100: desconto de 20% → 80; aumento de 20% sobre 80 → 96, não 100. Já 80 × 1,25 = 100. A intuição que resolve qualquer caso: descer 50% é perder metade, e para voltar é preciso **dobrar** (100%) — descida e subida nunca têm a mesma taxa, porque a base mudou.

**4 — (A)** Taxa média não é a taxa total dividida pelo número de meses. É a taxa que, aplicada duas vezes, dá o resultado do período:

```
(1 + i)² = 1,21  →  1 + i = 1,1  →  i = 10%
```

A (B) é o distrator principal: 21% ÷ 2 = 10,5%. Ela ignora que no segundo mês o crescimento incide sobre o valor já crescido. Confira: `1,10 × 1,10 = 1,21` ✓, enquanto `1,105 × 1,105 = 1,221`, que dá 22,1% e não 21%. A (D) repete a taxa do período e a (E) a dobra.

> Sem fazer conta: a taxa média é **sempre menor** que a média aritmética das taxas mensais, então já se sabia que a resposta ficaria abaixo de 10,5%.

**5 — (C)** Pelo caminho da produtividade unitária, sem montar regra de três:

1. Um servidor em uma hora: `600 ÷ (4 × 3) = 50 lotes`.
2. Cinco servidores em uma hora: `5 × 50 = 250 lotes`.
3. Tempo para 1.000 lotes: `1.000 ÷ 250 = 4 horas`.

A (E) é de quem tratou a relação servidores/tempo como direta em algum passo. Note que o trabalho aumentou 66,7% (de 600 para 1.000) e a equipe só 25% (de 4 para 5), então o tempo **tinha** que subir — sair de 3 horas para menos que isso é impossível, o que já elimina a (A).

**6 — (C)** Soma dos pesos: 2 + 3 + 5 = 10. Nota final 7,0 significa soma ponderada igual a 70:

```
6×2 + 7×3 + x×5 ≥ 70
12 + 21 + 5x ≥ 70  →  5x ≥ 37  →  x ≥ 7,4
```

A (A) é o erro de quem calcula a média simples das notas em vez da ponderada. Repare no atalho: **trabalhar com a soma (70) em vez da média (7,0)** dispensa fração e deixa a conta em números inteiros — é o mesmo movimento que a questão 26 da prova real pedia.

**7 — (D)** As equipes têm tamanhos diferentes, então a média geral é ponderada pelo número de atendentes — o caminho seguro é voltar aos totais:

```
Equipe A: 10 × 6 = 60 chamados
Equipe B: 40 × 8 = 320 chamados
Média = (60 + 320) / 50 = 380/50 = 7,6
```

A (A) é a média das médias, que só valeria se as duas equipes tivessem o **mesmo** número de pessoas. Como a equipe maior é justamente a de melhor desempenho, o resultado tinha que ficar perto de 8, não no meio do caminho.

**8 — (C)** `J = C · i · t = 4.000 × 0,015 × 8 = 480`.

Atenção às duas fontes de erro que a banca explora: a taxa entra em **decimal** (1,5% = 0,015, não 1,5), e o tempo tem que estar na **mesma unidade** da taxa — aqui os dois estão em meses, então não há conversão. Se a questão pedisse o montante, a resposta seria 4.480.

**9 — (B)** Cada par se liga uma vez → `C(n,2) = n(n−1)/2 = 45` → `n(n−1) = 90`. Procure dois inteiros consecutivos cujo produto seja 90: **10 × 9**. Logo n = **10**.

A (A) é o erro de contar 9 (quem esquece que o total de pares cresce mais rápido que o número de pessoas). A (E) confunde o número de cumprimentos com o de participantes. Vale reconhecer o padrão: estradas entre cidades, apertos de mão, partidas de turno único, cabos entre servidores — é sempre `n(n−1)/2`.

**10 — (C)** Pela identidade do quadrado da soma:

```
(a + b)² = a² + 2ab + b²
10² = 58 + 2ab  →  100 − 58 = 2ab  →  ab = 21
```

A (E) é 100 − 58 sem dividir por 2 — o esquecimento mais comum. Não é preciso descobrir os números (são 3 e 7): **quando o enunciado dá a soma e a soma dos quadrados, ele deu o produto**, e tentar resolver o sistema completo só gasta tempo.

---

## Para o caderno de erros

- Q1: "Inverti a fração da divisão proporcional / dividi o lucro ao meio."
- Q2: "Achei que aumento e desconto iguais se cancelam."
- Q3: "Usei a mesma taxa para voltar, esquecendo que a base mudou."
- Q4: "Dividi a taxa do período pelo número de meses."
- Q5: "Tratei servidores e tempo como grandezas diretas."
- Q6: "Usei média simples onde havia pesos / trabalhei com a média em vez da soma."
- Q7: "Tirei média de médias com grupos de tamanhos diferentes."
- Q8: "Usei a taxa em percentual, não em decimal / errei a unidade de tempo."
- Q9: "Não reconheci a contagem de pares n(n−1)/2."
- Q10: "Esqueci de dividir o 2ab por 2 / tentei resolver o sistema inteiro."

---

## Cartão de memorização (releia antes da prova)

```
FATOR MULTIPLICATIVO
aumento de x% ....... × (1 + x/100)
desconto de x% ...... × (1 − x/100)
sucessivas .......... MULTIPLICA os fatores (nunca soma)
   +30% e +10% → 1,3 × 1,1 = 1,43 → 43%
   +20% e −20% → 0,96 → 4% MENOR (nunca volta ao inicial)
desfazer −20% ....... 1/0,8 = 1,25 → +25%
variação % .......... (final − inicial) / INICIAL
p.p. ≠ % ............ 20%→25% é +5 p.p. E +25%

TAXA MÉDIA (média geométrica)
(1 + i)ⁿ = fator total     →  i = ⁿ√(fator total) − 1
21% em 2 meses → (1+i)² = 1,21 → i = 10%
regra: taxa média é SEMPRE MENOR que a média das taxas

DIVISÃO PROPORCIONAL
soma as partes → fração de quem se quer → aplica no total
12.000 e 13.000 de 50.000 → 12/25 × 50.000 = 24.000
confira somando as partes · inversamente = inverta e trate como direta

REGRA DE TRÊS
sobe junto → direta (multiplica em cruz)
sobe/desce → inversa (multiplica em linha)
composta → produtividade unitária: 1 por 1 → n por 1 → tempo

MÉDIAS
ponderada = Σ(valor × peso) / Σpesos
média ≥ 7 com pesos somando 10 → soma ponderada ≥ 70
média de médias SÓ com grupos iguais — senão, volte aos totais

JUROS
simples ..... J = C·i·t · M = C(1 + i·t)
composto .... M = C(1 + i)^t
taxa em DECIMAL · taxa e tempo na MESMA unidade

RACIOCÍNIO NUMÉRICO
(a+b)² = a² + 2ab + b²      soma + soma dos quadrados → PRODUTO
(a−b)² = 2(a²+b²) − (a+b)²
C(n,2) = n(n−1)/2           pares: estradas, cumprimentos, cabos
+2 elementos → 2x + 1 ligações novas

CÁLCULO MENTAL
10% vírgula 1 casa · 1% duas casas · 5% = metade de 10%
20% = ÷5 · 25% = ÷4 · 12,5% = ÷8 · 33,3% = ÷3
"de" comuta: 18% de 50 = 50% de 18 = 9
estime e elimine alternativas ANTES de calcular
```

---

**Próxima aula de RL:** sequências numéricas e de figuras, tabelas de dupla entrada e operações com matrizes (`rl-matriciais`) — e, se sobrar tempo no plano, uma passada curta em áreas, perímetros e volumes (`rl-geometricos`), o único tópico do edital que ficaria sem material.
