# Raciocínio Lógico · Equivalências e negações

Item do edital: *"equivalências e implicações lógicas"* e *"negação de proposições"*. É a continuação direta da aula de lógica sentencial (18/09) — ela montou as tabelas-verdade; esta usa as tabelas para **reescrever** frases sem mudar o sentido e para **negar** frases sem errar.

Por que é o item mais rentável de RL: a FGV pergunta isso de duas formas só, sempre com o mesmo enunciado — *"é logicamente equivalente a"* ou *"a negação da proposição é"*. Quem tem as quatro tabelas na ponta da língua resolve em 40 segundos, sem desenhar nada.

---

## Parte 0 — Os dois conceitos, antes de qualquer fórmula

### 0.1 Equivalência: dizer a mesma coisa com outras palavras

> Duas proposições são **logicamente equivalentes** quando têm **exatamente a mesma tabela-verdade** — mesma coluna final, linha por linha.

Escreve-se `p ≡ q` (ou `p ⇔ q`). Equivalência não é "parecido", não é "quase igual": é **idêntico em todos os cenários possíveis**. Se existir **uma única linha** em que uma é V e a outra é F, elas não são equivalentes — e é exatamente nessa linha que a banca monta o distrator.

Comparando com o que você já conhece de código: equivalência é uma **refatoração**. `if (!(a && b))` e `if (!a || !b)` são o mesmo programa, escrito de dois jeitos. Nada muda no comportamento.

### 0.2 Negação: dizer o contrário exato

> A **negação** de uma proposição é a proposição que é **falsa sempre que a original é verdadeira, e verdadeira sempre que a original é falsa**.

Negação é a coluna **invertida**, não uma coluna "mais forte" ou "mais contrária". Isso dá um teste de conferência que vale ouro na prova:

> **Teste da convivência:** se as duas frases puderem ser verdadeiras ao mesmo tempo, uma **não** é a negação da outra.

Exemplo: *"Todos foram aprovados"* e *"Ninguém foi aprovado"* não podem ser verdadeiras juntas — mas podem ser **falsas juntas** (se 3 de 10 foram aprovados, as duas são falsas). Negação exige que **uma** seja V e a **outra** F, sempre. Logo "ninguém" não nega "todos". Você já viu isso com quantificadores; aqui o mesmo cuidado aparece com conectivos.

### 0.3 Os três nomes que a banca usa no enunciado

| Termo | Significado | O que a questão pede |
|---|---|---|
| **Tautologia** | sempre V, em todas as linhas | "assinale a proposição sempre verdadeira" |
| **Contradição** | sempre F, em todas as linhas | "assinale a que é sempre falsa" |
| **Contingência** | às vezes V, às vezes F | é o caso comum, raramente cobrado |

E a ligação entre os dois conceitos da aula: **`p ≡ q` se e somente se `p ↔ q` for uma tautologia.** Ou seja, equivalência é bicondicional que nunca falha. Guarde isso: quando a questão pergunta *"a proposição `X ↔ Y` é uma tautologia?"*, ela está perguntando *"X e Y são equivalentes?"*.

### 0.4 A diferença entre implicação e equivalência

O edital cita "equivalências **e implicações**". A distinção:

- **Implicação** (`p ⇒ q`): sempre que p é V, q também é V. Mão única.
- **Equivalência** (`p ≡ q`): implicação nos **dois** sentidos. Mão dupla.

*"Todo analista é servidor"* implica *"se João é analista, é servidor"*, mas não o contrário. Toda equivalência é uma implicação dupla; nem toda implicação é equivalência. Na prova, "implica" é fraco e "equivale" é forte — leia o verbo do enunciado com atenção.

---

## Parte 1 — O grupo 1: De Morgan (negar "e" e negar "ou")

As duas regras mais usadas de toda a lógica:

```
~(p ∧ q)  ≡  ~p ∨ ~q        negou o "e"  → virou "ou"
~(p ∨ q)  ≡  ~p ∧ ~q        negou o "ou" → virou "e"
```

**A regra em uma frase:** *nega as duas partes e troca o conectivo.*

### 1.1 Por que "e" vira "ou" — a intuição, não a tabela

Considere: *"Ana estuda lógica **e** português."*

Para essa frase ser **falsa**, o que basta? Basta **uma** das duas falhar. Se ela não estudou lógica, a frase já caiu; se não estudou português, já caiu. Não é preciso que falhe nas duas. Logo a negação é:

> *"Ana **não** estuda lógica **ou não** estuda português."*

E o erro clássico — *"Ana não estuda lógica e não estuda português"* — é **muito mais forte** do que o necessário: exige que ela abandone as duas matérias. Aplique o teste da convivência: se Ana estuda lógica mas não português, a original é F e essa suposta negação também é F. Duas falsas juntas → não é negação.

Agora o inverso: *"Ana estuda lógica **ou** português."*

Para essa cair, não basta uma falhar — se ela estudou pelo menos uma, a frase resiste. É preciso derrubar as **duas**:

> *"Ana **não** estuda lógica **e não** estuda português."*

> **A imagem que fixa:** o "e" é uma corrente — arrebenta num elo só. O "ou" é um feixe de cordas — só cai cortando todas.

Em código é a mesma identidade que você usa sem pensar:

```js
!(a && b)  ===  !a || !b
!(a || b)  ===  !a && !b
```

### 1.2 As tabelas, para você conferir uma vez e confiar depois

| p | q | p ∧ q | **~(p ∧ q)** | ~p | ~q | **~p ∨ ~q** |
|---|---|---|---|---|---|---|
| V | V | V | **F** | F | F | **F** |
| V | F | F | **V** | F | V | **V** |
| F | V | F | **V** | V | F | **V** |
| F | F | F | **V** | V | V | **V** |

Colunas em negrito idênticas → equivalentes. A de `~(p ∨ q) ≡ ~p ∧ ~q` se monta do mesmo jeito; faça uma vez no papel e não precisa repetir nunca mais.

### 1.3 Cuidado com o "ou" da linguagem

Na prova, *"ou"* é **inclusivo** por padrão (`∨`): admite que as duas aconteçam. O **exclusivo** (`⊻`, "ou um ou outro, mas não ambos") aparece marcado com a fórmula *"ou… ou…, mas não ambos"*. De Morgan vale para o `∨` inclusivo. Para o exclusivo, a regra é outra e vem na Parte 4:

```
~(p ⊻ q)  ≡  p ↔ q
```

---

## Parte 2 — O grupo 2: as três faces da condicional

Este é **o** ponto da aula. A condicional `p → q` (*"se p, então q"*) tem duas reescritas equivalentes, e a banca vive oferecendo as duas que **não** são.

```
p → q   ≡   ~q → ~p        ← CONTRAPOSITIVA (inverte a ordem E nega as duas)
p → q   ≡   ~p ∨ q         ← forma disjuntiva (tira o "se", vira "ou")
```

### 2.1 A contrapositiva, e as duas armadilhas ao lado dela

Quatro frases se formam a partir de `p → q`. Só uma equivale:

| Nome | Fórmula | Equivale a `p → q`? |
|---|---|---|
| Original | `p → q` | — |
| **Contrapositiva** | `~q → ~p` | ✅ **sim** |
| Recíproca (ou conversa) | `q → p` | ❌ não |
| Inversa | `~p → ~q` | ❌ não |

Exemplo concreto — *"Se chove, a rua fica molhada"*:

- **Contrapositiva:** *"Se a rua não está molhada, não choveu."* ✅ Verdadeiro junto com a original, sempre. Se a rua estivesse seca tendo chovido, a regra original estaria quebrada.
- **Recíproca:** *"Se a rua está molhada, choveu."* ❌ Pode ter passado o caminhão-pipa.
- **Inversa:** *"Se não chove, a rua não fica molhada."* ❌ Mesmo caminhão-pipa.

> **A regra mecânica:** contrapositiva = **inverte a ordem e nega os dois lados**. Meia operação não serve: só inverter dá a recíproca (errado); só negar dá a inversa (errado). As duas juntas, sim.
>
> Repare que recíproca e inversa são contrapositivas **uma da outra** — por isso as duas erram juntas, e por isso a banca costuma colocar as duas entre as alternativas: quem cai numa cairia na outra.

### 2.2 A forma disjuntiva: `p → q ≡ ~p ∨ q`

Essa é a que aparece quando a alternativa correta está escrita com "ou" e você procura um "se". A tradução mecânica:

> **Nega o antecedente e troca o "se… então" por "ou".**

*"Se o candidato falta, é eliminado"* ≡ *"O candidato **não** falta **ou** é eliminado."*

Por que funciona: a condicional só é falsa num cenário (`V → F`). Dizer *"não p ou q"* proíbe exatamente esse mesmo cenário — se p é V e q é F, "não p" é F e "q" é F, e a disjunção cai. Mesmas linhas, mesma proposição.

| p | q | **p → q** | ~p | **~p ∨ q** |
|---|---|---|---|---|
| V | V | **V** | F | **V** |
| V | F | **F** | F | **F** |
| F | V | **V** | V | **V** |
| F | F | **V** | V | **V** |

> **Na prova:** se a questão pede equivalente de uma condicional e nenhuma alternativa tem "se", procure o "ou" — e confira se o **antecedente está negado** e o **consequente não**. `p ∨ ~q` é o distrator.

### 2.3 O caminho de volta

Também é cobrado: dada uma disjunção, escrever a condicional.

```
~p ∨ q  ≡  p → q            (nega o primeiro termo, ele vira antecedente)
p ∨ q   ≡  ~p → q           (também vale: ~q → p)
```

*"Ou o edital é retificado, ou o prazo é prorrogado"* ≡ *"Se o edital não é retificado, o prazo é prorrogado."* Uma disjunção sempre pode ser lida como *"se um dos dois falhar, o outro tem que valer"*.

---

## Parte 3 — O grupo 3: negação da condicional (o mais cobrado de todos)

```
~(p → q)  ≡  p ∧ ~q
```

> **A regra em uma frase:** **mantém o antecedente e nega o consequente, ligando com "e".**

E repare no que **não** acontece: a negação de uma condicional **não é uma condicional**. É uma conjunção. Se a alternativa começa com "se", ela está errada por construção.

### 3.1 De onde vem

Duas linhas, usando o que você já tem:

```
~(p → q)  ≡  ~(~p ∨ q)        [Parte 2.2: condicional é disjunção]
          ≡  ~(~p) ∧ ~q       [De Morgan: negou o "ou", virou "e"]
          ≡  p ∧ ~q           [dupla negação]
```

### 3.2 A intuição — e ela é melhor que a fórmula

*"Se o candidato falta à prova, ele é eliminado."* Quando é que essa promessa é **quebrada**? Quando aparece alguém que **faltou e não foi eliminado**. Um único caso assim derruba a regra. É literalmente `p ∧ ~q`.

Pense como um teste que falha: a condicional é a especificação, e a negação é o **caso de teste que a viola** — a entrada acontece (`p`) e a saída esperada não vem (`~q`).

### 3.3 Os três distratores que a FGV oferece

Original: *"Se chove, a rua fica molhada."*

| Alternativa oferecida | Fórmula | O que é |
|---|---|---|
| *"Chove e a rua não fica molhada"* | `p ∧ ~q` | ✅ **a negação** |
| *"Se chove, a rua não fica molhada"* | `p → ~q` | ❌ negou só o consequente — continua condicional |
| *"Se não chove, a rua não fica molhada"* | `~p → ~q` | ❌ é a inversa |
| *"Não chove ou a rua fica molhada"* | `~p ∨ q` | ❌ é a **equivalente**, não a negação |

O último é o distrator mais traiçoeiro: quem estudou a Parte 2 reconhece a forma e marca por reflexo. Leia sempre se o enunciado pediu **equivalente** ou **negação** — a banca usa o mesmo par de proposições nas duas perguntas.

### 3.4 Quando o antecedente já é negativo

Aqui muita gente escorrega. *"Se **não** houver greve, a prova será aplicada no domingo."*

O antecedente é *"não houver greve"* — e a regra diz **manter o antecedente como está**. Então:

> Negação: *"**Não** houve greve **e** a prova **não** foi aplicada no domingo."*

Errado seria *"Houve greve e a prova não foi aplicada"* — isso negou o antecedente, que é justamente o que não se faz.

---

## Parte 4 — O grupo 4: bicondicional e ou-exclusivo

Menos cobrados, mas caem — e são baratos de memorizar.

```
p ↔ q   ≡  (p → q) ∧ (q → p)         "se e somente se" = as duas condicionais
p ↔ q   ≡  (p ∧ q) ∨ (~p ∧ ~q)       ou os dois valem, ou nenhum vale
~(p ↔ q) ≡  p ⊻ q                    negar bicondicional = ou-exclusivo
~(p ↔ q) ≡  (p ∧ ~q) ∨ (~p ∧ q)      um vale e o outro não
~(p ↔ q) ≡  p ↔ ~q   ≡  ~p ↔ q       negar UM lado já nega a bicondicional
~(p ⊻ q) ≡  p ↔ q                    e o caminho de volta
```

A lógica por trás: o bicondicional pergunta apenas *"os dois têm o mesmo valor?"*. Negá-lo é dizer *"eles são diferentes"* — que é exatamente o ou-exclusivo.

> **A pegadinha desse grupo:** `~p ↔ ~q` é **equivalente** a `p ↔ q`, não a negação dela. Negar os **dois** lados mantém a igualdade ("continuam iguais"); negar **um** é que inverte. É a única família de conectivos em que negar tudo não muda nada.

---

## Parte 5 — Equivalências auxiliares (leia, não decore)

Aparecem como alternativa em questões de reescrita e valem o reconhecimento:

| Nome | Fórmula | Em palavras |
|---|---|---|
| Dupla negação | `~(~p) ≡ p` | "não é verdade que não…" = afirmação |
| Comutativa | `p ∧ q ≡ q ∧ p` · `p ∨ q ≡ q ∨ p` | ordem não importa em "e"/"ou" |
| Associativa | `(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)` | idem para `∨` |
| Distributiva | `p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)` | "e" distribui sobre "ou" |
| Distributiva | `p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)` | e "ou" sobre "e" |
| Idempotência | `p ∧ p ≡ p` · `p ∨ p ≡ p` | repetir não acrescenta |
| Absorção | `p ∨ (p ∧ q) ≡ p` · `p ∧ (p ∨ q) ≡ p` | o termo solto manda |
| **Exportação** | `(p ∧ q) → r ≡ p → (q → r)` | duas condições viram condição encaixada |

A **exportação** é a única com cara de pegadinha e já foi cobrada:

> *"Se o usuário está autenticado **e** tem permissão, o acesso é liberado"*
> ≡ *"Se o usuário está autenticado, então: se tem permissão, o acesso é liberado."*

Duas exigências em série ou uma dentro da outra — mesma regra. É o mesmo que aninhar dois `if` em vez de usar `&&`.

Atenção à **condicional que NÃO distribui nem comuta**: `p → q` não é `q → p` (já vimos), e `(p → q) → r` **não** é `p → (q → r)`. Ali os parênteses mudam tudo.

---

## Parte 6 — Como resolver na prova, em três passos

**Passo 1 — Leia o verbo do enunciado.** "Equivalente" ou "negação"? São perguntas opostas com as mesmas alternativas. Circule a palavra antes de olhar as opções.

**Passo 2 — Traduza a frase para símbolos.** Nomeie as proposições simples com letras e escreva a fórmula. Cuidado especial com *"somente se"* (condição necessária → consequente), *"a menos que"* (`~q → p`), *"mas"* e *"embora"* (são `∧`). Essa parte é a aula de 18/09; se travar aqui, o problema não é equivalência.

**Passo 3 — Aplique a regra mecânica** e procure a alternativa. Se duas alternativas parecerem candidatas, use o **teste da linha única**: invente um cenário (p = V, q = F, por exemplo) e calcule as duas. Se derem valores diferentes, você já sabe qual descartar — não precisa da tabela inteira.

### Exemplo de aplicação do passo 3

*Qual a negação de "Se a proposta é aprovada, o contrato é assinado"?*

Candidatas na prova: (A) `p ∧ ~q` e (B) `p → ~q`. Teste com **p = F**:
- (A) `F ∧ ...` = **F**
- (B) `F → ...` = **V**

Valores diferentes → são proposições distintas. Qual é a negação? Com p = F, a original `p → q` é **V** — e a negação tem que ser **F**. Logo (A). Feito em dez segundos, sem tabela.

> **Atalho de ouro para as questões de negação:** ache uma linha em que a original é **V** e teste as alternativas — a negação é a única que dá **F** nessa linha.

---

## Parte 7 — Erros que derrubam candidato

1. **Negar "e" com "e".** `~(p ∧ q)` é `~p ∨ ~q`. Troca o conectivo, sempre.
2. **Negar a condicional com outra condicional.** `~(p → q)` é `p ∧ ~q` — nunca começa com "se".
3. **Negar o antecedente na negação da condicional.** O antecedente **fica como está**, inclusive quando já é negativo.
4. **Confundir contrapositiva com recíproca ou inversa.** Contrapositiva faz as **duas** operações: inverte e nega.
5. **Marcar a equivalente quando pediram a negação** (e vice-versa). O par `~p ∨ q` / `p ∧ ~q` vive nas duas questões.
6. **Achar que `~p ↔ ~q` nega `p ↔ q`.** Negar os dois lados mantém a equivalência.
7. **Esquecer que "ou" é inclusivo** por padrão e aplicar a regra do exclusivo.
8. **Montar tabela de 16 linhas quando uma linha resolvia.** Tempo é nota: 20 minutos para 5 questões de RL.

---

## Checklist do dia

- [ ] Parte 0 — o que é equivalência, o que é negação, teste da convivência (10 min)
- [ ] Parte 1 — De Morgan, com a imagem da corrente e do feixe (10 min)
- [ ] Parte 2 — contrapositiva x recíproca x inversa; `p → q ≡ ~p ∨ q` (15 min) ← **o coração da aula**
- [ ] Parte 3 — `~(p → q) ≡ p ∧ ~q`, até sair automático (10 min)
- [ ] Parte 4 — bicondicional e ou-exclusivo (5 min)
- [ ] Parte 5 — leitura das auxiliares, atenção à exportação (5 min)
- [ ] Monte **no papel** a tabela de `p → q ≡ ~p ∨ q` uma vez, para nunca mais duvidar
- [ ] 8 questões estilo FGV + correção
- [ ] Caderno de erros: escrever *por que* errou cada uma
- [ ] Treino fixo: 6 questões de Português da FGV + 1 texto técnico em inglês
- [ ] 15 min de Anki (Legislação)

---

# Questões — estilo FGV

Faça sem olhar o gabarito. Antes de ler as alternativas, escreva a fórmula da frase do enunciado.

---

**1.** A negação da proposição *"Se o candidato faltar à prova, ele será eliminado"* é:

(A) Se o candidato faltar à prova, ele não será eliminado.
(B) Se o candidato não faltar à prova, ele não será eliminado.
(C) O candidato não faltará à prova ou será eliminado.
(D) O candidato faltará à prova e não será eliminado.
(E) O candidato não faltará à prova e não será eliminado.

---

**2.** Assinale a proposição logicamente equivalente a *"Se o sistema está fora do ar, então o alerta foi enviado"*.

(A) Se o alerta foi enviado, então o sistema está fora do ar.
(B) Se o sistema não está fora do ar, então o alerta não foi enviado.
(C) Se o alerta não foi enviado, então o sistema não está fora do ar.
(D) O sistema está fora do ar e o alerta foi enviado.
(E) Se o alerta não foi enviado, então o sistema está fora do ar.

---

**3.** A negação da proposição *"Ana estuda lógica e português"* é:

(A) Ana não estuda lógica e não estuda português.
(B) Ana não estuda lógica ou não estuda português.
(C) Ana estuda lógica ou português.
(D) Se Ana estuda lógica, então não estuda português.
(E) Ana não estuda lógica nem português.

---

**4.** Considere a proposição *"O edital será retificado ou o prazo será prorrogado"*. Sua negação é:

(A) O edital não será retificado ou o prazo não será prorrogado.
(B) O edital será retificado e o prazo não será prorrogado.
(C) O edital não será retificado e o prazo não será prorrogado.
(D) Se o edital não for retificado, o prazo será prorrogado.
(E) O edital será retificado ou o prazo não será prorrogado.

---

**5.** A proposição `~(p ∧ ~q)` é logicamente equivalente a:

(A) `p ∧ q`
(B) `~p ∧ q`
(C) `p → q`
(D) `q → p`
(E) `p ∨ ~q`

---

**6.** A negação da proposição *"A proposta é aprovada se e somente se o orçamento é suficiente"* é:

(A) Se a proposta é aprovada, então o orçamento é suficiente.
(B) A proposta é aprovada e o orçamento não é suficiente, ou o orçamento é suficiente e a proposta não é aprovada.
(C) A proposta não é aprovada se e somente se o orçamento não é suficiente.
(D) A proposta não é aprovada e o orçamento não é suficiente.
(E) Se o orçamento é suficiente, então a proposta é aprovada.

---

**7.** A proposição *"Se o usuário está autenticado e possui permissão, então o acesso é liberado"* é logicamente equivalente a:

(A) Se o usuário está autenticado, então, se possui permissão, o acesso é liberado.
(B) Se o usuário está autenticado ou possui permissão, então o acesso é liberado.
(C) Se o acesso é liberado, então o usuário está autenticado e possui permissão.
(D) O usuário está autenticado e possui permissão e o acesso é liberado.
(E) Se o usuário não está autenticado, então o acesso não é liberado.

---

**8.** A negação da proposição *"Se não houver greve, a prova será aplicada no domingo"* é:

(A) Houve greve e a prova não foi aplicada no domingo.
(B) Não houve greve e a prova não foi aplicada no domingo.
(C) Se houver greve, a prova não será aplicada no domingo.
(D) Houve greve ou a prova foi aplicada no domingo.
(E) Se não houver greve, a prova não será aplicada no domingo.

---

## Gabarito comentado

**1 — (D)** `p`: falta à prova; `q`: será eliminado. A frase é `p → q`, e `~(p → q) ≡ p ∧ ~q`: **mantém o antecedente, nega o consequente, liga com "e"**.

As erradas são o catálogo completo de armadilhas do assunto. A (A) é `p → ~q`: negou só o consequente e deixou a condicional — e a negação de uma condicional nunca é condicional. A (B) é a inversa (`~p → ~q`), proposição diferente da original e também diferente da negação. A (C) é `~p ∨ q`, que é a **equivalente** da original (Parte 2.2) — se você marcou esta, leu "negação" e respondeu "equivalente". A (E) é De Morgan aplicado no lugar errado.

**2 — (C)** É a **contrapositiva**: inverteu a ordem *e* negou os dois lados. A única das quatro faces que equivale.

A (A) é a recíproca (`q → p`) — o alerta pode ter sido enviado por outro motivo, um teste de rotina. A (B) é a inversa (`~p → ~q`). Note que (A) e (B) são contrapositivas uma da outra, ou seja, equivalentes **entre si** e ambas erradas — quando você vê esse par nas alternativas, pode descartar as duas de saída. A (D) troca a condicional por conjunção, afirmando que os dois fatos ocorrem, o que a original não faz. A (E) mantém a inversão mas negou só um lado.

**3 — (B)** De Morgan: negou o "e", virou "ou", com as duas partes negadas. Para a original cair, **basta uma** das duas atividades não acontecer.

A (A) é o erro clássico — exige que ela abandone as duas matérias, condição muito mais forte do que negar a frase. Teste da convivência: se Ana estuda lógica e não estuda português, a original é F **e** a (A) é F; duas falsas juntas nunca são negação uma da outra. A (E) diz o mesmo que a (A) ("nem" = "e não"). A (C) é compatível com a original, não o contrário dela. A (D) é `p → ~q`, que nem sequer nega a frase quando Ana não estuda lógica.

**4 — (C)** De Morgan do "ou": negou o "ou", virou "e", as duas partes negadas. Uma disjunção só cai quando **as duas** parcelas caem.

A (A) troca o conectivo na direção errada (é a regra do "e", aplicada ao "ou"). A (D) é `~p → q`, que é **equivalente** à original (Parte 2.3) — de novo o par equivalente/negação na mesma questão. A (B) e a (E) negam apenas uma parcela.

**5 — (C)** Duas aplicações em sequência:

```
~(p ∧ ~q)  ≡  ~p ∨ ~(~q)      [De Morgan]
           ≡  ~p ∨ q          [dupla negação]
           ≡  p → q           [forma disjuntiva da condicional, lida de volta]
```

Se preferir conferir por linha: `p ∧ ~q` é V só quando `p = V` e `q = F`; portanto `~(p ∧ ~q)` é F **só** nessa linha — que é exatamente a única linha em que `p → q` é falsa. Mesma coluna, mesma proposição.

Repare que `p ∧ ~q` é a negação da condicional (Parte 3) e aqui ele aparece **negado**: negar a negação devolve a original. A (E) `p ∨ ~q` é o distrator para quem esqueceu de negar o antecedente na volta.

**6 — (B)** Negar um bicondicional é afirmar que os dois lados **diferem** — o ou-exclusivo, que escrito por extenso é `(p ∧ ~q) ∨ (~p ∧ q)`.

A (C) é o distrator principal e o ponto da Parte 4: `~p ↔ ~q` é **equivalente** a `p ↔ q`, não a negação dela. "Os dois são falsos juntos" continua sendo um caso de "os dois têm o mesmo valor". Para negar um bicondicional é preciso negar **um** lado só (`p ↔ ~q` também serviria como resposta correta). A (A) e a (E) são as duas metades da bicondicional original — cada uma é implicada por ela, e nenhuma a nega. A (D) é `~p ∧ ~q`, que na verdade **satisfaz** a original.

**7 — (A)** É a **exportação**: `(p ∧ q) → r ≡ p → (q → r)`. Duas condições exigidas juntas equivalem a uma condição dentro da outra — dois `if` aninhados em vez de um `&&`.

A (B) trocou `∧` por `∨` no antecedente, o que enfraquece a exigência: passaria a liberar acesso para quem só está autenticado. A (C) é a recíproca. A (D) transformou a regra em afirmação de fato. A (E) é a inversa, com o mesmo erro da questão 2.

**8 — (B)** A regra manda **manter o antecedente exatamente como está** — e aqui o antecedente já é negativo (*"não houver greve"*). Então a negação é *"não houve greve **e** a prova não foi aplicada no domingo"*.

A (A) é a resposta que a maioria marca: negou o antecedente por reflexo, porque ele já vinha com "não". A (C) e a (E) continuam condicionais. A (D) é `p ∨ q` com sinais trocados, sem relação com a negação pedida.

> Se errou esta, vale escrever a frase inteira em símbolos antes de negar: `~g → d`, logo a negação é `~g ∧ ~d`. Com letras na frente dos olhos, o "não" do antecedente para de confundir.

---

## Para o caderno de erros

Escreva o **porquê**, não a resposta certa:

- Q1: "Neguei a condicional com outra condicional / marquei a equivalente em vez da negação."
- Q2: "Confundi contrapositiva com recíproca — só inverti, não neguei."
- Q3: "Neguei o 'e' com 'e'; esqueci de trocar o conectivo."
- Q4: "Apliquei a regra do 'e' num 'ou'."
- Q5: "Esqueci a dupla negação / não reconheci `~p ∨ q` como condicional."
- Q6: "Achei que negar os dois lados do bicondicional negava a frase."
- Q7: "Não reconheci a exportação / troquei `∧` por `∨` no antecedente."
- Q8: "Neguei o antecedente que já era negativo."

---

## Cartão de memorização (releia antes da prova)

```
DE MORGAN
~(p ∧ q) = ~p ∨ ~q        nega as duas partes E troca o conectivo
~(p ∨ q) = ~p ∧ ~q
   "e" é corrente: cai com um elo
   "ou" é feixe: cai só cortando todas

CONDICIONAL — as três faces
p → q  =  ~q → ~p         CONTRAPOSITIVA (inverte E nega)  ✅
p → q  =  ~p ∨ q          forma "ou" (nega o antecedente)  ✅
p → q  ≠  q → p           recíproca                        ❌
p → q  ≠  ~p → ~q         inversa                          ❌
   recíproca e inversa são equivalentes entre si → erram juntas

NEGAÇÃO DA CONDICIONAL
~(p → q) = p ∧ ~q         mantém o antecedente, nega o consequente
   nunca é condicional · antecedente negativo continua negativo
   distratores: p → ~q · ~p → ~q · ~p ∨ q (esta é a EQUIVALENTE)

BICONDICIONAL
p ↔ q   = (p → q) ∧ (q → p) = (p ∧ q) ∨ (~p ∧ ~q)
~(p ↔ q) = p ⊻ q = (p ∧ ~q) ∨ (~p ∧ q) = p ↔ ~q
~(p ⊻ q) = p ↔ q
   ~p ↔ ~q é EQUIVALENTE a p ↔ q, não a negação

OUTRAS
~(~p) = p
p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r)
p ∨ (q ∧ r) = (p ∨ q) ∧ (p ∨ r)
(p ∧ q) → r = p → (q → r)        exportação

MÉTODO
1. o enunciado pediu EQUIVALENTE ou NEGAÇÃO?
2. traduza em letras antes de ler as alternativas
3. duas candidatas? teste UMA linha e compare
atalho: ache linha onde a original é V — a negação é a única F ali
teste da convivência: podem ser V juntas? então não é negação
```

---

**Próxima aula de RL:** aritmética de prova — porcentagem, proporção, regra de três, médias, juros simples, sequências e problemas matriciais. É o último bloco do edital de Raciocínio Lógico sem material, e fecha a disciplina.
