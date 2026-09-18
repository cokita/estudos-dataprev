# Raciocínio Lógico · Argumentação, diagramas lógicos e quantificadores

Próximo item da fila: os tópicos `rl-argumentos`, `rl-diagramas` e `rl-primeira-ordem` do seu mapa de estudos — os três sem material até agora. No edital: *"Lógica de argumentação: analogias, inferências, deduções e conclusões"*, *"diagramas lógicos"* e *"lógica de primeira ordem"*.

É a segunda metade do Raciocínio Lógico. A primeira (lógica sentencial) trata frases como blocos fechados; esta olha **dentro** das frases.

---

## Parte 0 — Por que os conectivos não bastam

Olhe este raciocínio:

> Todo analista da DataPrev é servidor público.
> João é analista da DataPrev.
> Logo, João é servidor público.

Qualquer pessoa vê que a conclusão está certa. Mas tente representar com o que você já sabe:

> *p*: Todo analista da DataPrev é servidor público.
> *q*: João é analista da DataPrev.
> *r*: João é servidor público.

Fica `(p ∧ q) → r` — e **isso não é uma tautologia**. Pela lógica sentencial, nada garante a conclusão. O raciocínio se perdeu, porque as três frases viraram blocos isolados e a ligação entre elas (a palavra *analista*, que aparece em duas) sumiu.

A saída é abrir a frase e olhar seus componentes: de **quem** se fala (*João*, *os analistas*) e **o que** se diz deles (*é servidor público*). Isso se chama **lógica de primeira ordem** (ou lógica de predicados), e a ferramenta visual para resolvê-la na prova é o **diagrama lógico**.

Dois nomes para o vocabulário:

- **Predicado** — a característica atribuída: *"é servidor público"*, *"conhece lógica"*. Escreve-se `S(x)`, que se lê *"x é servidor público"*.
- **Quantificador** — a palavra que diz **de quantos** se fala: *todo, algum, nenhum, existe, pelo menos um*.

---

## Parte 1 — Argumento: premissas, conclusão e a diferença entre válido e verdadeiro

### 1.1 As peças

**Argumento** é um conjunto de proposições em que algumas (as **premissas**) são apresentadas como razão para aceitar outra (a **conclusão**).

> Toda prova da FGV tem questão de lógica. ← premissa
> A prova da DataPrev é da FGV. ← premissa
> **Logo**, a prova da DataPrev tem questão de lógica. ← conclusão

**Palavras que anunciam a conclusão:** *logo, portanto, então, assim, conclui-se que, segue-se que, por isso*.
**Palavras que anunciam premissa:** *pois, porque, já que, visto que, dado que, uma vez que*.

Na prova, ache primeiro a conclusão. O resto é premissa.

### 1.2 A distinção que decide as questões: validade x verdade

Este é **o** conceito da parte de argumentação, e é contraintuitivo:

> **Um argumento é válido quando é impossível que as premissas sejam verdadeiras e a conclusão falsa.**

Repare no que a definição **não** exige: ela não pede que as premissas sejam verdadeiras de fato. Validade é uma propriedade da **estrutura**, não do conteúdo.

> Todo peixe voa.
> Baleia é peixe.
> Logo, baleia voa.

As duas premissas são falsas, a conclusão é falsa — e o argumento é **perfeitamente válido**. A forma está correta: *se* aquilo fosse verdade, isso se seguiria.

E o contrário também existe:

> Todo servidor recebe salário.
> Ana recebe salário.
> Logo, Ana é servidora.

Premissas verdadeiras, conclusão possivelmente verdadeira — e o argumento é **inválido**. Ana pode receber salário da iniciativa privada. A conclusão pode ser verdadeira **por acaso**, e isso não salva o argumento.

| Premissas | Conclusão | O argumento pode ser válido? |
|---|---|---|
| V | V | Sim |
| V | **F** | **Não — é exatamente o caso impossível** |
| F | V | Sim |
| F | F | Sim |

É a mesma tabela da condicional, e não por acaso: um argumento válido é uma condicional que nunca cai no padrão V → F.

> **Regra de ouro da prova: premissa é lei.** Por mais absurda que seja (*"todos os gatos são advogados"*), na resolução ela é verdade absoluta. A banca usa premissas absurdas de propósito, para separar quem raciocina de quem responde pelo senso comum.

### 1.3 Dedução, indução e analogia

O edital cita os três nomes:

| Tipo | Vai de | Conclusão | Exemplo |
|---|---|---|---|
| **Dedução** | geral → particular | **garantida** pelas premissas | *Todo servidor tem matrícula; João é servidor; logo João tem matrícula.* |
| **Indução** | particular → geral | apenas **provável** | *Os 30 servidores que vi têm matrícula; logo todo servidor tem.* |
| **Analogia** | particular → particular | apenas **provável** | *A prova da DataPrev será como a do BNDES, pois a banca é a mesma.* |

Só a **dedução** produz argumentos válidos no sentido estrito. Indução e analogia produzem conclusões plausíveis, nunca garantidas — e a FGV às vezes pede exatamente que você identifique isso.

---

## Parte 2 — Os padrões de argumento com "se… então" (revisão rápida)

Você já viu isso na matéria de lógica sentencial; aqui vai a tabela para reconhecer no meio de um texto. Considere *"Se chove, a rua fica molhada"* (`p → q`).

| Padrão | Estrutura | Vale? | Exemplo |
|---|---|---|---|
| **Modus ponens** (afirmar o antecedente) | `p → q`, `p` ⊢ `q` | ✅ **válido** | Choveu → logo a rua está molhada |
| **Modus tollens** (negar o consequente) | `p → q`, `~q` ⊢ `~p` | ✅ **válido** | A rua não está molhada → logo não choveu |
| **Negar o antecedente** | `p → q`, `~p` ⊢ `~q` | ❌ **falácia** | Não choveu → *logo a rua está seca*? Pode ter passado um caminhão-pipa |
| **Afirmar o consequente** | `p → q`, `q` ⊢ `p` | ❌ **falácia** | A rua está molhada → *logo choveu*? Mesmo caminhão-pipa |
| **Silogismo hipotético** | `p → q`, `q → r` ⊢ `p → r` | ✅ **válido** | Encadeamento |
| **Silogismo disjuntivo** | `p ∨ q`, `~p` ⊢ `q` | ✅ **válido** | Ou é A ou é B; não é A; logo é B |

> **O resumo:** com a condicional você pode **caminhar para a frente afirmando** (ponens) ou **para trás negando** (tollens). As duas outras combinações são armadilhas.

---

## Parte 3 — Quantificadores: todo, algum, nenhum

### 3.1 As quatro proposições categóricas

Frase categórica = **quantificador + sujeito + verbo de ligação + predicado**. Existem quatro formas, e a prova gira em torno delas:

| Forma | Nome técnico | Estrutura | Exemplo |
|---|---|---|---|
| **A** | universal afirmativa | Todo A é B | *Todo analista é servidor.* |
| **E** | universal negativa | Nenhum A é B | *Nenhum analista é estagiário.* |
| **I** | particular afirmativa | Algum A é B | *Algum analista é gestor.* |
| **O** | particular negativa | Algum A não é B | *Algum analista não é gestor.* |

Universal = fala de **todos**. Particular = fala de **pelo menos um**.

### 3.2 As três armadilhas de vocabulário

**1. "Algum" significa "pelo menos um" — e não exclui "todos".**

Se todos os 100 candidatos foram aprovados, a frase *"algum candidato foi aprovado"* é **verdadeira**. No dia a dia, "alguns" sugere "nem todos"; em lógica, **não sugere nada disso**. Essa diferença entre o português corrente e o lógico é fonte de erro garantido.

Sinônimos de *algum* na prova: *existe, há, pelo menos um, alguns, certo(s), determinado(s), nem todos... (cuidado com este)*.

**2. "Todo A é B" não diz nada sobre quem não é A.**

*"Todo analista é servidor"* não impede que existam servidores que não são analistas. É a mesma lógica do condicional: `A → B` não é `B → A`.

**3. "Todo A é B" não garante que exista algum A.**

*"Todo unicórnio é branco"* é considerada verdadeira mesmo sem unicórnios — de novo o antecedente falso da condicional. A FGV raramente explora isso, mas explica por que "todo" vira `→`, como você verá na Parte 5.

---

## Parte 4 — Diagramas lógicos: a ferramenta de resolução

A ideia: cada conjunto vira um círculo, e a posição dos círculos traduz a frase. Depois é só **olhar o desenho**.

### 4.1 Como desenhar cada uma das quatro formas

**Todo A é B** → A **dentro** de B.

```
   ┌───────────────────┐
   │         B         │
   │     ┌───────┐     │
   │     │   A   │     │
   │     └───────┘     │
   └───────────────────┘
```

**Nenhum A é B** → círculos **separados**, sem nenhum ponto em comum.

```
   ┌───────┐     ┌───────┐
   │   A   │     │   B   │
   └───────┘     └───────┘
```

**Algum A é B** → círculos **cruzados**, com um **X** na parte comum (o X marca "aqui existe pelo menos um").

```
   ┌───────┬───┬───────┐
   │   A   │ X │   B   │
   └───────┴───┴───────┘
```

**Algum A não é B** → o **X** fica na parte de A **fora** de B.

```
   ┌───┬───┬───┬───────┐
   │ X │ A │   │   B   │
   └───┴───┴───┴───────┘
```

> **O X é o detalhe que ninguém usa e que resolve a questão.** "Todo" e "nenhum" desenham **fronteiras**; "algum" afirma **existência**, e existência se marca com um X. Sem o X você esquece que aquela região tem que ter gente dentro.

### 4.2 O método para testar uma conclusão

**Uma conclusão só é válida se for verdadeira em TODOS os desenhos possíveis das premissas.** Se você conseguir desenhar **um único** cenário em que as premissas valem e a conclusão falha, o argumento é **inválido**. Esse cenário se chama **contraexemplo**.

Então o roteiro na prova é:

1. Desenhe as premissas.
2. Pergunte: **"dá para desenhar de outro jeito?"** — quase sempre dá, e é aí que a banca ganha.
3. Teste a conclusão em cada desenho.
4. Se falhou em algum, não decorre.

### 4.3 As combinações clássicas (decore o resultado)

| Premissas | Conclusão testada | Vale? | Por quê |
|---|---|---|---|
| Todo A é B · Todo B é C | Todo A é C | ✅ | A dentro de B dentro de C |
| Todo A é B · Nenhum B é C | Nenhum A é C | ✅ | A está dentro de B, e B está longe de C |
| Todo A é B · Algum A é C | Algum B é C | ✅ | o C que é A já está dentro de B |
| Algum A é B · Todo B é C | Algum A é C | ✅ | o X da interseção foi arrastado para dentro de C |
| **Todo A é B · Algum B é C** | Algum A é C | ❌ | o C pode estar na parte de B que sobra fora de A |
| **Algum A é B · Algum B é C** | Algum A é C | ❌ | podem ser dois grupos diferentes de B |
| **Todo A é B** | Todo B é A | ❌ | é a recíproca, e recíproca não se sustenta |
| **Nenhum A é B** | Nenhum B é A | ✅ | "nenhum" é a única que funciona nos dois sentidos |

As duas linhas em negrito com ❌ são **as questões mais cobradas do assunto**. Guarde o contraexemplo da segunda:

> *Algum médico é professor. Algum professor é português. Logo, algum médico é português?*
> **Não.** Os professores-médicos podem ser todos brasileiros, e os professores-portugueses podem não ser médicos. Dois grupos diferentes de professores.

---

## Parte 5 — Negação dos quantificadores (o item mais cobrado)

Negar uma frase com quantificador **não é** trocar o verbo por "não". Vale uma regra mecânica de duas trocas:

> **Troque o quantificador (universal ↔ particular) e inverta a afirmação (afirmativo ↔ negativo).**

| Proposição | Negação correta | Negação **errada** que a banca oferece |
|---|---|---|
| **Todo** A é B | **Algum** A **não** é B | ~~Nenhum A é B~~ |
| **Algum** A é B | **Nenhum** A é B | ~~Algum A não é B~~ |
| **Nenhum** A é B | **Algum** A é B | ~~Todo A é B~~ |
| **Algum** A **não** é B | **Todo** A é B | ~~Nenhum A é B~~ |

**Por que "nenhum" não nega "todo":** pense em *"Todos os candidatos foram aprovados"*. Para essa frase ser falsa, basta **um** reprovado — não é preciso que todos reprovem. Portanto a negação é *"algum candidato não foi aprovado"*.

> **A imagem que fixa:** derrubar um "todo" exige **um** contraexemplo; derrubar um "algum" exige **varrer o conjunto inteiro**. Por isso a negação de "todo" é fraquinha (algum) e a de "algum" é forte (nenhum).

Na sua cabeça de dev, é a mesma coisa de `every` e `some`: `!arr.every(f)` é `arr.some(x => !f(x))`. Idêntico.

---

## Parte 6 — Lógica de primeira ordem: a notação

O edital cobra o item, e a FGV costuma pedir a **tradução** entre frase e fórmula. São dois símbolos:

- **∀** — quantificador universal: *"para todo x"*
- **∃** — quantificador existencial: *"existe x tal que"*

E a regra de tradução que você precisa ter automática:

| Frase | Fórmula | Conectivo interno |
|---|---|---|
| Todo A é B | `∀x (A(x) → B(x))` | **condicional** |
| Algum A é B | `∃x (A(x) ∧ B(x))` | **conjunção** |
| Nenhum A é B | `∀x (A(x) → ~B(x))` | condicional |
| Algum A não é B | `∃x (A(x) ∧ ~B(x))` | conjunção |

> **Por que "todo" usa → e "algum" usa ∧** — vale entender, porque a banca troca os dois de propósito:
> - *"Todo analista é servidor"* não afirma que existe analista; afirma uma **regra**: *se* for analista, *então* é servidor. Regra é condicional.
> - *"Algum analista é servidor"* afirma que **existe alguém** que é as duas coisas ao mesmo tempo. Duas coisas ao mesmo tempo é conjunção.
>
> Se você escrever *algum* com `→`, a fórmula fica verdadeira de graça — bastaria existir alguém que **não** é analista para satisfazê-la. É por isso que `∃x (A(x) → B(x))` é sempre um distrator errado.

**Negação em notação** (é a Parte 5 escrita com símbolos):

```
~∀x P(x)  =  ∃x ~P(x)      "nem todo x é P" = "existe x que não é P"
~∃x P(x)  =  ∀x ~P(x)      "não existe x que é P" = "todo x não é P"
```

Regra prática: **o ~ entra, o quantificador vira o outro.**

---

## Parte 7 — Erros que derrubam candidato

1. **Negar "todo" com "nenhum".** A negação de *todo* é *algum... não*.
2. **Achar que "algum" exclui "todos".** Algum = pelo menos um, podendo ser todos.
3. **Inverter "todo A é B" em "todo B é A".** Só "nenhum" admite inversão.
4. **Desenhar um único diagrama.** Se a conclusão não vale em *todos* os desenhos possíveis, ela não decorre.
5. **Esquecer o X.** Sem marcar onde há existência, "algum" vira fronteira e você conclui demais.
6. **Confundir validade com verdade.** Premissa absurda com forma correta = argumento válido.
7. **Traduzir "algum" com →** em lógica de primeira ordem. Algum sempre pede `∧`.

---

## Checklist do dia

- [ ] Parte 1 — argumento, validade x verdade (15 min) ← **entender, não decorar**
- [ ] Parte 2 — tabela dos padrões condicionais (5 min, é revisão)
- [ ] Parte 3 — as quatro formas categóricas e as três armadilhas (10 min)
- [ ] Parte 4 — desenhar as quatro formas **à mão, no papel** (10 min)
- [ ] Parte 5 — tabela de negações, até sair automático (10 min)
- [ ] Parte 6 — notação ∀ / ∃ e as duas traduções (10 min)
- [ ] 6 questões estilo FGV + correção
- [ ] Caderno de erros: escrever *por que* errou cada uma
- [ ] Treino fixo: 6 questões de Português da FGV + 1 texto técnico em inglês
- [ ] 15 min de Anki (Legislação)

---

# Questões — estilo FGV

Faça sem olhar o gabarito. Desenhe — não tente resolver de cabeça.

---

**1.** A negação da proposição *"Todos os servidores da DataPrev usam crachá"* é:

(A) Nenhum servidor da DataPrev usa crachá.
(B) Todos os servidores da DataPrev não usam crachá.
(C) Pelo menos um servidor da DataPrev não usa crachá.
(D) Nenhum servidor da DataPrev deixa de usar crachá.
(E) Alguns servidores da DataPrev usam crachá.

---

**2.** Considere verdadeiras as afirmações:

> I. Todo programador conhece lógica.
> II. Algum programador trabalha na DataPrev.

Conclui-se corretamente que:

(A) Todos os que trabalham na DataPrev conhecem lógica.
(B) Alguém que trabalha na DataPrev conhece lógica.
(C) Todo o que conhece lógica é programador.
(D) Algum programador não conhece lógica.
(E) Nenhum programador deixa de trabalhar na DataPrev.

---

**3.** São verdadeiras as premissas: *"Todo analista é servidor"* e *"Algum servidor é gestor"*.

Assinale a afirmativa que **não** pode ser deduzida dessas premissas.

(A) Algum analista é gestor.
(B) Algum servidor é analista ou não há analistas.
(C) Pode existir gestor que não é analista.
(D) Todo analista é servidor.
(E) Existe pelo menos um gestor que é servidor.

---

**4.** A negação da proposição *"Algum candidato foi eliminado"* é:

(A) Algum candidato não foi eliminado.
(B) Todos os candidatos foram eliminados.
(C) Nem todos os candidatos foram eliminados.
(D) Nenhum candidato foi eliminado.
(E) Poucos candidatos foram eliminados.

---

**5.** Considere: *C(x)*: "x é candidato" e *A(x)*: "x foi aprovado".

A proposição *"Algum candidato não foi aprovado"* é corretamente representada por:

(A) `∀x (C(x) → ~A(x))`
(B) `∃x (C(x) → ~A(x))`
(C) `∃x (C(x) ∧ ~A(x))`
(D) `~∃x (C(x) ∧ A(x))`
(E) `∀x (C(x) ∧ ~A(x))`

---

**6.** Um argumento tem as premissas *"Se o sistema falha, o alerta é disparado"* e *"O alerta não foi disparado"*, e a conclusão *"O sistema não falhou"*.

Sobre esse argumento, é correto afirmar que:

(A) é inválido, pois comete a falácia de negar o antecedente.
(B) é inválido, pois comete a falácia de afirmar o consequente.
(C) é válido, por modus ponens.
(D) é válido, por modus tollens.
(E) é válido apenas se as premissas forem de fato verdadeiras.

---

## Gabarito comentado

**1 — (C)** A negação de *"todo A é B"* é *"algum A não é B"* — e *"pelo menos um"* é sinônimo exato de *"algum"*. Para derrubar um "todos", basta **um** contraexemplo.

A (A) é o distrator principal: *"nenhum usa crachá"* é muito mais forte do que o necessário — ela nega a frase original, mas também seria falsa numa situação em que a original é falsa (99 usam, 1 não usa). Negação tem que ser **exatamente** o contrário: quando uma é V, a outra é F, sempre. A (B) diz a mesma coisa que a (A) com outras palavras. A (D) *reforça* a frase original. A (E) é compatível com a original, e não o contrário dela.

**2 — (B)** Desenhe: o círculo dos programadores está **dentro** do círculo de quem conhece lógica (premissa I). A premissa II põe um **X** na interseção entre programadores e DataPrev. Esse X está, necessariamente, dentro do círculo da lógica — logo existe alguém que trabalha na DataPrev e conhece lógica.

As erradas mostram o erro típico de "concluir demais": (A) exigiria que *todo* o pessoal da DataPrev fosse programador, e nada diz isso — pode haver um contador na DataPrev que nunca viu uma tabela-verdade. (C) é a recíproca da premissa I. (D) contradiz a premissa I. (E) inventa informação.

**3 — (A)** Aqui a ordem foi invertida de propósito: *todo analista é servidor* põe analistas **dentro** de servidores; *algum servidor é gestor* põe um **X** na interseção servidor/gestor — e esse X pode cair na parte de "servidor" que está **fora** de analistas. Contraexemplo em uma frase: a DataPrev pode ter gestores que vieram da área administrativa, nenhum deles analista. Logo *"algum analista é gestor"* **não decorre**.

As demais decorrem ou são compatíveis: (D) é a própria premissa; (E) é a premissa II reescrita (*algum servidor é gestor* = existe gestor que é servidor); (C) afirma apenas uma possibilidade, que o diagrama admite; (B) é uma reformulação inofensiva.

> Este é o par que a FGV mais cobra: **"todo A é B" + "algum B é C" nunca conclui nada sobre A.** O X pode sempre fugir para a região de B que sobra.

**4 — (D)** A negação de *"algum A é B"* é *"nenhum A é B"*. Para derrubar um "existe pelo menos um", é preciso varrer o conjunto inteiro e não achar nenhum.

A (A) é a armadilha: *"algum candidato não foi eliminado"* pode ser verdadeira **junto** com a original (alguns eliminados, outros não) — e duas proposições que podem ser verdadeiras ao mesmo tempo nunca são negação uma da outra. Este é o teste de conferência que vale para qualquer questão de negação: **se as duas puderem ser verdadeiras juntas, uma não é a negação da outra.**

**5 — (C)** *Algum* afirma **existência** → `∃`. E "é candidato **e** não foi aprovado" são duas coisas na mesma pessoa → `∧`. Logo `∃x (C(x) ∧ ~A(x))`.

A (B) é o distrator clássico: com `→` dentro do `∃`, a fórmula ficaria verdadeira só por existir alguém que **não é candidato** (antecedente falso torna a condicional verdadeira) — ou seja, ela não diz nada sobre candidatos. Guarde o par: **∀ anda com →, ∃ anda com ∧.** A (A) diz "nenhum candidato foi aprovado", bem mais forte. A (D) diz a mesma coisa que a (A). A (E) diria que *tudo* que existe é um candidato não aprovado.

**6 — (D)** Estrutura: `p → q`, `~q`, conclusão `~p`. É **modus tollens** — negar o consequente e concluir a negação do antecedente. Válido.

A (A) descreve outro padrão (*"o sistema não falhou, logo o alerta não disparou"*), que não é o caso. A (E) é a pegadinha conceitual da aula: **validade não depende da verdade das premissas**, só da estrutura. Um argumento válido continua válido com premissas falsas.

---

## Para o caderno de erros

- Q1: "Neguei 'todo' com 'nenhum' — esqueci que basta um contraexemplo."
- Q2: "Conclui demais: transformei 'algum' em 'todo'."
- Q3: "Não testei um segundo desenho — deixei o X na região que me convinha."
- Q4: "Confundi a negação de 'algum' com 'algum... não'."
- Q5: "Usei → dentro do ∃."
- Q6: "Confundi modus tollens com falácia, ou misturei validade com verdade das premissas."

---

## Cartão de memorização (releia antes da prova)

```
NEGAÇÕES
~(Todo A é B)      = Algum A não é B
~(Algum A é B)     = Nenhum A é B
~(Nenhum A é B)    = Algum A é B
~(Algum A não é B) = Todo A é B
regra: troca o quantificador E inverte a afirmação

TRADUÇÃO
Todo A é B   →  ∀x (A(x) → B(x))     ∀ anda com →
Algum A é B  →  ∃x (A(x) ∧ B(x))     ∃ anda com ∧
~∀x P(x) = ∃x ~P(x)   ·   ~∃x P(x) = ∀x ~P(x)

ARGUMENTOS
p→q, p  ⊢ q     modus ponens      VÁLIDO
p→q, ~q ⊢ ~p    modus tollens     VÁLIDO
p→q, ~p ⊢ ~q    negar antecedente FALÁCIA
p→q, q  ⊢ p     afirmar consequente FALÁCIA

DIAGRAMAS
Todo A é B + Algum B é C  ⊢ algum A é C?  NÃO
Algum A é B + Algum B é C ⊢ algum A é C?  NÃO
Todo A é B + Todo B é C   ⊢ todo A é C?   SIM
Algum A é B + Todo B é C  ⊢ algum A é C?  SIM
válido = vale em TODOS os desenhos possíveis
```

---

**Próximo item de RL:** problemas aritméticos de prova (porcentagem, proporção, regra de três, médias, juros simples) e os matriciais/sequências — o último bloco do edital de Raciocínio Lógico que ainda não tem material.
