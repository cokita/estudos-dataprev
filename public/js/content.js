// ARQUIVO GERADO AUTOMATICAMENTE por scripts/build-content.mjs
// NÃO edite à mão — edite os arquivos em conteudo/ e rode: node scripts/build-content.mjs

window.CONTENT = {
  "assuntos": [
    {
      "id": "portugues",
      "nome": "Língua Portuguesa",
      "icon": "ti-language",
      "descricao": "12 questões no Módulo I. Base gramatical e interpretação no estilo FGV: classes de palavras, coesão, pontuação, concordância, regência, crase e reescrita.",
      "materias": [
        {
          "id": "classes-palavras",
          "nome": "Classes de palavras e morfossintaxe",
          "icon": "ti-abc",
          "descricao": "A base de tudo em Português: o que cada palavra é (classe) e o que ela faz na frase (função). Sem isso, crase, concordância e regência viram decoreba solta.",
          "resumo": [
            {
              "titulo": "De onde veio: as partes do discurso",
              "html": "\n<p>Por volta do <b>século II a.C.</b>, em Alexandria, <b>Dionísio Trácio</b> escreveu a primeira gramática do Ocidente. O problema dele era prático: ensinar grego a estrangeiros. A solução foi agrupar as palavras em <b>8 “partes do discurso”</b> — categorias de <i>comportamento</i>, não de significado.</p>\n<p>Roma copiou o sistema, retirou o <b>artigo</b> (o latim não tem) e acrescentou a <b>interjeição</b>. O português herdou tudo isso e fechou em <b>10 classes</b>.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Guarde a intenção original: classe de palavra é uma <b>etiqueta de comportamento</b>. Não é “o que a palavra significa”, é <b>“como ela se comporta na frase”</b>.</div>\n"
            },
            {
              "titulo": "Morfossintaxe: toda palavra tem dois rótulos",
              "html": "\n<p>Toda palavra carrega <b>dois rótulos ao mesmo tempo</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Morfologia (classe)</span> o que a palavra é sozinha, no dicionário — substantivo, verbo, advérbio…</div>\n  <div class=\"def\"><span class=\"def-t\">Sintaxe (função)</span> o papel que ela exerce naquela frase — sujeito, objeto, adjunto…</div>\n</div>\n<p>Exemplo: <i>“Aquele candidato estuda bastante.”</i></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Aquele</span> classe: pronome demonstrativo · função: adjunto adnominal</div>\n  <div class=\"def\"><span class=\"def-t\">candidato</span> classe: substantivo · função: núcleo do sujeito</div>\n  <div class=\"def\"><span class=\"def-t\">estuda</span> classe: verbo · função: núcleo do predicado</div>\n  <div class=\"def\"><span class=\"def-t\">bastante</span> classe: advérbio · função: adjunto adverbial</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Analogia de dev: a <b>classe</b> é o <i>tipo</i> (String, int) e a <b>função</b> é o <i>papel na chamada</i> (parâmetro, retorno, chave). A diferença é que em português <b>até o tipo muda</b> conforme o contexto — e é aí que a FGV arma a pegadinha.</div>\n"
            },
            {
              "titulo": "O que significa “concordar”",
              "html": "\n<p><b>Concordar</b>, em gramática, quer dizer <b>combinar na forma</b> — a palavra muda de terminação para bater com outra em <b>gênero</b> (masculino/feminino) e <b>número</b> (singular/plural). Nada a ver com “estar de acordo”: é acompanhar a forma.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Teste: se você mexe no gênero ou no número de uma palavra e a outra é <b>obrigada a mudar junto</b>, então a segunda <b>concorda com</b> a primeira.</div>\n<p><b>Com o adjetivo</b> (que sempre concorda com o substantivo):</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">relatório claro → relatórios claros</span> virou plural → o adjetivo mudou junto</div>\n  <div class=\"def\"><span class=\"def-t\">relatório claro → nota clara</span> virou feminino → o adjetivo virou “clara”</div>\n</div>\n<p>Não existe “relatório clara” nem “notas claro” — soa quebrado justamente porque a concordância falhou.</p>\n<div class=\"warn\"><b>É isto que separa numeral de advérbio no “meio”:</b> em “<b>meia</b> dúzia / <b>meio</b> quilo” a palavra muda conforme o substantivo → <b>concorda</b> → numeral. Em “ela ficou <b>meio</b> nervosa / elas ficaram <b>meio</b> nervosas” ela não muda → <b>não concorda</b> → advérbio.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Regra de identificação: se a palavra é <b>forçada a mudar de forma</b> junto com outra, ela é da família <b>nominal</b> (adjetivo, artigo, numeral, pronome). Se fica <b>travada na mesma forma</b> aconteça o que acontecer, é <b>invariável</b> (advérbio, preposição, conjunção).</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> Analogia de dev: concordância é como <b>tipagem que precisa casar</b>. Se o “container” (substantivo) é feminino plural, o “conteúdo” (adjetivo) tem de ser feminino plural também — senão a gramática acusa erro, como um compilador.</div>\n<p>Esse conceito reaparece o tempo todo: <b>concordância nominal</b> (adjetivo/artigo com o substantivo), <b>concordância verbal</b> (verbo com o núcleo do sujeito) e até na <b>crase</b> (que depende de haver artigo concordando com o substantivo).</p>\n"
            },
            {
              "titulo": "As 10 classes em 3 famílias",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Nominais (variáveis)</span> substantivo, artigo, adjetivo, numeral e pronome — giram em torno do substantivo e flexionam em gênero e número</div>\n  <div class=\"def\"><span class=\"def-t\">Verbo</span> a única classe que varia em tempo, modo e pessoa</div>\n  <div class=\"def\"><span class=\"def-t\">Invariáveis</span> advérbio, preposição, conjunção e interjeição — nunca mudam de forma</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Teste de família: se a palavra <b>tem plural ou feminino</b>, é nominal ou verbo. Se <b>nunca muda de forma</b>, é invariável.</div>\n"
            },
            {
              "titulo": "1. Substantivo",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Classe que <b>nomeia</b>: seres, objetos, lugares, sentimentos, ideias, ações e qualidades tomadas como coisa. É o centro em torno do qual as outras classes nominais giram.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Cabe um <b>artigo</b> na frente (<i>o, a, um</i>) e aceita plural. É a palavra que os adjetivos caracterizam e que funciona como <b>núcleo</b> do sujeito ou do objeto.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“A <b>coragem</b> da <b>candidata</b> impressionou o <b>fiscal</b>.”</i> — três substantivos, todos precedidos de artigo.</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Qualquer palavra <b>substantiva</b> quando ganha artigo: “o <b>jantar</b>”, “o <b>não</b> dela foi firme”, “os <b>porquês</b> da decisão”.</div>\n"
            },
            {
              "titulo": "2. Artigo",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra que <b>determina</b> o substantivo, indicando se ele é conhecido (definido: <i>o, a, os, as</i>) ou genérico (indefinido: <i>um, uma, uns, umas</i>).</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Vem <b>sempre antes</b> de um substantivo e <b>concorda</b> com ele em gênero e número. Se você conseguir tirar a palavra e a frase continuar de pé com sentido genérico, era artigo.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“<b>O</b> candidato leu <b>um</b> edital.”</i> — “o” aponta um candidato específico; “um” apresenta um edital qualquer.</div>\n</div>\n<div class=\"warn\"><b>Alta relevância para crase:</b> a crase só existe quando há preposição <i>a</i> + <b>artigo</b> <i>a</i>. É por isso que “a partir de” nunca tem crase: não há artigo ali.</div>\n"
            },
            {
              "titulo": "3. Adjetivo",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Classe que <b>caracteriza</b> o substantivo, atribuindo-lhe qualidade, estado, aparência, origem ou defeito.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> <b>Concorda</b> com o substantivo em gênero e número (edital extenso / provas extensas) e cabe no molde “<i>algo é muito ___</i>”. Vem antes ou depois do substantivo.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Edital <b>extenso</b>, prova <b>difícil</b>, candidata <b>paraibana</b>.”</i></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Locução adjetiva</b> = preposição + substantivo com valor de adjetivo: “relógio <b>de ouro</b>” (áureo), “amor <b>de mãe</b>” (materno). A FGV adora pedir o adjetivo equivalente.</div>\n"
            },
            {
              "titulo": "4. Numeral",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Indica <b>quantidade exata</b>, ordem, múltiplo ou fração. Cardinal (dois), ordinal (segundo), multiplicativo (dobro), fracionário (metade).</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Pode ser <b>trocado por outro número</b> sem quebrar a frase. Diferente do pronome indefinido, ele é preciso: “vários” não é numeral, “três” é.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Ficou em <b>segundo</b> lugar entre os <b>duzentos</b> inscritos.”</i></div>\n</div>\n<div class=\"warn\"><b>Pegadinha:</b> “Comprei <b>um</b> livro” = artigo indefinido (introduz vagamente). “Comprei <b>um</b>, não dois” = numeral (quantifica com precisão). O contraste com outro número é o sinal.</div>\n"
            },
            {
              "titulo": "5. Pronome",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra que <b>substitui ou acompanha</b> o substantivo, situando-o em relação às três pessoas do discurso.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Aponta para alguém ou algo <b>sem nomear</b>. Se a palavra ocupa o lugar de um substantivo já dito (ou dispensa dizê-lo), é pronome.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“<b>Ele</b> entregou <b>seu</b> relatório <b>àquele</b> fiscal <b>que</b> chegou cedo.”</i></div>\n</div>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Pessoais</span> eu, tu, ele; me, te, se, lhe, o, a; mim, comigo</div>\n  <div class=\"def\"><span class=\"def-t\">Possessivos</span> meu, teu, seu, nosso, vosso</div>\n  <div class=\"def\"><span class=\"def-t\">Demonstrativos</span> este, esse, aquele, isto, isso, aquilo</div>\n  <div class=\"def\"><span class=\"def-t\">Indefinidos</span> algum, nenhum, todo, muito, pouco, vários, bastante, qualquer</div>\n  <div class=\"def\"><span class=\"def-t\">Interrogativos</span> que, quem, qual, quanto (em pergunta)</div>\n  <div class=\"def\"><span class=\"def-t\">Relativos</span> que, quem, onde, cujo, o qual — retomam um termo anterior</div>\n  <div class=\"def\"><span class=\"def-t\">De tratamento</span> você, senhor, Vossa Excelência</div>\n</div>\n<div class=\"destaque\">Os <b>relativos</b> e os <b>demonstrativos</b> são a espinha dorsal da <b>coesão por referenciação</b> — o tema que a FGV mais cobra em interpretação de texto.</div>\n"
            },
            {
              "titulo": "6. Verbo",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Exprime <b>ação</b> (correr), <b>estado</b> (ser, estar, parecer) ou <b>fenômeno</b> (chover), sempre situando o fato no tempo.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> É a <b>única classe que se conjuga</b>. Teste: tente pôr a palavra no molde “<i>eu ___, ele ___, ontem ele ___</i>”. Se ela mudar de forma, é verbo.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Ela <b>estudou</b> muito, <b>está</b> cansada e ontem <b>choveu</b>.”</i></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Verbos de <b>estado</b> (ser, estar, ficar, parecer, permanecer, continuar) são <b>de ligação</b>: não indicam ação, apenas ligam o sujeito a uma característica. Reconhecê-los é o que permite achar o predicativo do sujeito.</div>\n"
            },
            {
              "titulo": "7. Advérbio",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra <b>invariável</b> que modifica <b>verbo</b>, <b>adjetivo</b> ou <b>outro advérbio</b>, exprimindo uma circunstância.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Responde a <b>onde, quando, como, quanto, por quê</b> — e <b>não flexiona</b>. Se a palavra parece adjetivo mas não concorda com ninguém, é advérbio.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Chegou <b>cedo</b>, resolveu a questão <b>muito</b> rápido e saiu <b>bem</b> devagar.”</i></div>\n</div>\n<div class=\"warn\"><b>A pegadinha nº 1 da banca:</b> “Ela ficou <b>meio</b> nervosa” — advérbio, invariável. Nunca “meia nervosa”. Só concorda quando é numeral: meia dúzia, meia hora, duas e meia.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Advérbio é invariável, mas admite <b>grau</b>: cedo → cedinho; muito → muitíssimo. Isso não é flexão de gênero/número, então a regra continua valendo.</div>\n"
            },
            {
              "titulo": "8. Preposição",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra <b>invariável</b> que <b>liga</b> dois termos, criando entre eles uma relação de dependência (o segundo completa o primeiro).</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Fica <b>entre dois termos</b> e <b>não pode ser retirada</b> sem quebrar a frase. Vale decorar a lista fechada — ela é curta.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Gosto <b>de</b> música.” / “Viagem <b>a</b> Recife.” / “Confio <b>em</b> você.”</i></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Lista completa:</b> a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás. São só 17 — decore, porque regência e crase vivem delas.</div>\n"
            },
            {
              "titulo": "9. Conjunção",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra <b>invariável</b> que liga <b>orações</b> (ou termos de mesma função), estabelecendo a relação lógica entre elas.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Se a palavra pode ser <b>trocada por outra conjunção do mesmo sentido</b> e está no meio de duas orações, é conjunção. Preposição liga <i>palavras</i>; conjunção liga <i>orações</i>.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Estudou muito, <b>mas</b> não passou.” / “Não passou <b>porque</b> não treinou questões.”</i></div>\n</div>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Coordenativas</span> e, nem (aditiva) · mas, porém, contudo, todavia, entretanto (adversativa) · ou (alternativa) · logo, portanto, pois <i>posposto</i> (conclusiva) · pois <i>anteposto</i>, porque (explicativa)</div>\n  <div class=\"def\"><span class=\"def-t\">Subordinativas</span> que, se (integrantes) · porque, como, já que (causal) · embora, ainda que (concessiva) · se, caso (condicional) · quando, enquanto (temporal) · para que, a fim de que (final)</div>\n</div>\n<div class=\"warn\"><b>Confusão clássica:</b> <i>para</i> é preposição (“estudo <b>para</b> o concurso”); <i>para que</i> é conjunção final (“estudo <b>para que</b> eu passe” — introduz oração com verbo).</div>\n"
            },
            {
              "titulo": "10. Interjeição",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra ou expressão que exprime uma <b>emoção súbita</b> — surpresa, alívio, dor, alegria. Não se liga sintaticamente ao resto da frase.</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Vem <b>isolada</b>, normalmente com ponto de exclamação, e pode ser retirada sem afetar a estrutura da oração. É invariável.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“<b>Ufa!</b> Terminei.” / “<b>Puxa</b>, que prova difícil!”</i></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> É a classe menos cobrada da prova — reconheça e siga adiante. Se aparecer, costuma ser em questão de pontuação (vocativo × interjeição).</div>\n"
            },
            {
              "titulo": "Três testes que resolvem quase tudo",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Aceita artigo antes?</span> se cabe <i>o</i>, <i>a</i>, <i>um</i> na frente, é <b>substantivo</b> — “o <b>andar</b> do prédio”, “o <b>jantar</b> estava frio”</div>\n  <div class=\"def\"><span class=\"def-t\">2. Caracteriza um substantivo e concorda com ele?</span> é <b>adjetivo</b> — “relatório <b>claro</b>”, “questões <b>difíceis</b>”</div>\n  <div class=\"def\"><span class=\"def-t\">3. Modifica verbo, adjetivo ou outro advérbio e não flexiona?</span> é <b>advérbio</b> — “falou <b>claro</b>”, “<b>meio</b> nervosa”</div>\n</div>\n"
            },
            {
              "titulo": "A pegadinha nº 1: a classe depende do contexto",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O jantar estava frio</span> substantivo (tem artigo antes)</div>\n  <div class=\"def\"><span class=\"def-t\">Vamos jantar cedo</span> verbo</div>\n  <div class=\"def\"><span class=\"def-t\">Ela está meio cansada</span> advérbio — <b>invariável</b>, nunca “meia cansada”</div>\n  <div class=\"def\"><span class=\"def-t\">Comprei meia dúzia</span> numeral — concorda com “dúzia”</div>\n  <div class=\"def\"><span class=\"def-t\">Ele chegou bastante tarde</span> advérbio (modifica “tarde”), invariável</div>\n  <div class=\"def\"><span class=\"def-t\">Havia bastantes motivos</span> pronome indefinido — acompanha substantivo e <b>flexiona</b></div>\n  <div class=\"def\"><span class=\"def-t\">Comprei um livro</span> artigo indefinido</div>\n  <div class=\"def\"><span class=\"def-t\">Comprei um, não dois</span> numeral</div>\n</div>\n<div class=\"warn\"><b>Erro clássico:</b> “Ela ficou <b>meia</b> irritada” está errado. Quando “meio” significa <i>um pouco</i>, é advérbio e não flexiona: “Ela ficou <b>meio</b> irritada”. Só concorda quando é numeral: “meia dúzia”, “meia hora”, “duas e meia”.</div>\n"
            },
            {
              "titulo": "Por que isso destrava crase, concordância e regência",
              "html": "\n<p>A FGV quase nunca pergunta “que classe é esta palavra?” de forma direta. Ela pergunta crase, concordância, regência e pontuação — e <b>todas essas regras são escritas em termos de classe</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Crase</span> = <b>preposição</b> a + <b>artigo</b> a. Sem enxergar preposição e artigo, a regra não roda</div>\n  <div class=\"def\"><span class=\"def-t\">Concordância verbal</span> o verbo concorda com o <b>núcleo do sujeito</b>, e núcleo é sempre substantivo ou pronome (ou palavra substantivada)</div>\n  <div class=\"def\"><span class=\"def-t\">Regência</span> é a <b>preposição</b> que aquele verbo ou nome exige</div>\n  <div class=\"def\"><span class=\"def-t\">Colocação pronominal</span> as palavras atrativas que puxam próclise são definidas por classe: advérbio de negação, pronome relativo, conjunção subordinativa</div>\n</div>\n<div class=\"destaque\">Domine este módulo e os outros deixam de ser decoreba: viram aplicação de regra sobre uma base que você enxerga.</div>\n"
            }
          ],
          "flashcards": [
            {
              "tema": "Origem",
              "pergunta": "Quem criou o sistema de classes de palavras e por quê?",
              "resposta": "Dionísio Trácio, século II a.C., em Alexandria. Criou as 8 'partes do discurso' para ensinar grego a estrangeiros — categorias de comportamento, não de significado."
            },
            {
              "tema": "Origem",
              "pergunta": "Por que o português tem 10 classes e o latim não tinha artigo?",
              "resposta": "Roma herdou as 8 partes gregas, retirou o artigo (inexistente em latim) e acrescentou a interjeição. O português reincorporou o artigo e chegou a 10 classes."
            },
            {
              "tema": "Morfossintaxe",
              "pergunta": "Qual a diferença entre morfologia e sintaxe?",
              "resposta": "Morfologia estuda a CLASSE (o que a palavra é sozinha, no dicionário). Sintaxe estuda a FUNÇÃO (o papel que ela exerce naquela frase específica)."
            },
            {
              "tema": "Morfossintaxe",
              "pergunta": "Toda palavra carrega quantos rótulos numa frase?",
              "resposta": "Dois: a classe (morfologia) e a função sintática. Ex.: 'candidato' é substantivo (classe) e núcleo do sujeito (função)."
            },
            {
              "tema": "Classes",
              "pergunta": "Quais são as 10 classes de palavras?",
              "resposta": "Substantivo, artigo, adjetivo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição."
            },
            {
              "tema": "Classes",
              "pergunta": "Quais são as classes INVARIÁVEIS?",
              "resposta": "Advérbio, preposição, conjunção e interjeição. Nunca flexionam em gênero ou número."
            },
            {
              "tema": "Classes",
              "pergunta": "Quais são as classes nominais (variáveis)?",
              "resposta": "Substantivo, artigo, adjetivo, numeral e pronome — giram em torno do substantivo e flexionam em gênero e número."
            },
            {
              "tema": "Classes",
              "pergunta": "Qual é a única classe que varia em tempo, modo e pessoa?",
              "resposta": "O verbo."
            },
            {
              "tema": "Testes",
              "pergunta": "Teste rápido para identificar um substantivo.",
              "resposta": "Se cabe um artigo antes (o, a, um), é substantivo. Ex.: 'o andar do prédio', 'o jantar estava frio'."
            },
            {
              "tema": "Testes",
              "pergunta": "Teste rápido para diferenciar adjetivo de advérbio.",
              "resposta": "Adjetivo caracteriza substantivo e concorda com ele ('relatório claro'). Advérbio modifica verbo, adjetivo ou outro advérbio e não flexiona ('falou claro')."
            },
            {
              "tema": "Testes",
              "pergunta": "Como saber se uma palavra é de classe invariável?",
              "resposta": "Se ela nunca muda de forma (sem plural nem feminino), é invariável: advérbio, preposição, conjunção ou interjeição."
            },
            {
              "tema": "Pegadinha",
              "pergunta": "'Ela ficou meio nervosa' ou 'meia nervosa'?",
              "resposta": "'Meio nervosa'. Quando significa 'um pouco', 'meio' é ADVÉRBIO e não flexiona. Só concorda quando é numeral: meia dúzia, meia hora, duas e meia."
            },
            {
              "tema": "Pegadinha",
              "pergunta": "Qual a classe de 'bastante' em 'Ele chegou bastante tarde' e em 'Havia bastantes motivos'?",
              "resposta": "No primeiro é advérbio (modifica 'tarde', invariável). No segundo é pronome indefinido (acompanha substantivo e flexiona)."
            },
            {
              "tema": "Pegadinha",
              "pergunta": "Qual a classe de 'um' em 'Comprei um livro' e em 'Comprei um, não dois'?",
              "resposta": "No primeiro é artigo indefinido. No segundo é numeral (opõe-se a 'dois')."
            },
            {
              "tema": "Pegadinha",
              "pergunta": "Qual a classe de 'jantar' em 'O jantar estava frio' e em 'Vamos jantar cedo'?",
              "resposta": "No primeiro é substantivo (tem artigo antes). No segundo é verbo."
            },
            {
              "tema": "Aplicação",
              "pergunta": "Por que classes de palavras é pré-requisito para crase?",
              "resposta": "Crase é a fusão da PREPOSIÇÃO 'a' com o ARTIGO 'a'. Sem identificar essas duas classes na frase, a regra não pode ser aplicada."
            },
            {
              "tema": "Aplicação",
              "pergunta": "Com o que o verbo concorda na concordância verbal?",
              "resposta": "Com o núcleo do sujeito — que é sempre um substantivo, um pronome ou uma palavra substantivada."
            },
            {
              "tema": "Aplicação",
              "pergunta": "O que é regência, em termos de classe?",
              "resposta": "É a preposição que um verbo ou um nome exige para se ligar ao seu complemento."
            },
            {
              "tema": "Aplicação",
              "pergunta": "Quais classes funcionam como palavras atrativas (puxam próclise)?",
              "resposta": "Advérbio (sobretudo de negação), pronome relativo, pronome indefinido e conjunção subordinativa."
            },
            {
              "tema": "Aplicação",
              "pergunta": "Em 'Os dados do relatório mensal foram revisados', qual é o núcleo do sujeito?",
              "resposta": "'dados'. Por isso o verbo vai para o plural ('foram'). 'relatório' está dentro do adjunto adnominal e não comanda a concordância."
            },
            {
              "tema": "Substantivo",
              "pergunta": "Como identificar um substantivo?",
              "resposta": "Cabe artigo na frente (o, a, um) e aceita plural. É o núcleo do sujeito ou do objeto e é o que os adjetivos caracterizam."
            },
            {
              "tema": "Artigo",
              "pergunta": "Como identificar um artigo?",
              "resposta": "Vem sempre antes de um substantivo e concorda com ele. Definidos: o, a, os, as. Indefinidos: um, uma, uns, umas. É o artigo que forma a crase junto com a preposição 'a'."
            },
            {
              "tema": "Adjetivo",
              "pergunta": "Como identificar um adjetivo?",
              "resposta": "Caracteriza o substantivo e CONCORDA com ele em gênero e número. Cabe no molde 'algo é muito ___'."
            },
            {
              "tema": "Adjetivo",
              "pergunta": "O que é locução adjetiva?",
              "resposta": "Preposição + substantivo com valor de adjetivo: 'de ouro' = áureo, 'de mãe' = materno, 'de cidade' = urbano."
            },
            {
              "tema": "Numeral",
              "pergunta": "Como diferenciar numeral de pronome indefinido?",
              "resposta": "Numeral é preciso ('três', 'segundo'); pronome indefinido é vago ('vários', 'alguns'). Numeral pode ser trocado por outro número."
            },
            {
              "tema": "Pronome",
              "pergunta": "Quais são os sete tipos de pronome?",
              "resposta": "Pessoais, possessivos, demonstrativos, indefinidos, interrogativos, relativos e de tratamento."
            },
            {
              "tema": "Pronome",
              "pergunta": "Quais pronomes sustentam a coesão por referenciação?",
              "resposta": "Os relativos (que, quem, onde, cujo, o qual) e os demonstrativos (este, esse, aquele, isto, isso, aquilo) — tema campeão de incidência na FGV."
            },
            {
              "tema": "Verbo",
              "pergunta": "Qual o teste infalível para identificar um verbo?",
              "resposta": "Tentar conjugar: 'eu ___, ele ___, ontem ele ___'. Se a palavra muda de forma, é verbo. É a única classe que se conjuga."
            },
            {
              "tema": "Verbo",
              "pergunta": "Quais são os principais verbos de ligação?",
              "resposta": "Ser, estar, ficar, parecer, permanecer, continuar. Não indicam ação — ligam o sujeito a uma característica (predicativo do sujeito)."
            },
            {
              "tema": "Advérbio",
              "pergunta": "Como identificar um advérbio?",
              "resposta": "Modifica verbo, adjetivo ou outro advérbio; responde onde, quando, como, quanto ou por quê; e NÃO flexiona. Se parece adjetivo mas não concorda com ninguém, é advérbio."
            },
            {
              "tema": "Preposição",
              "pergunta": "Quais são as 17 preposições essenciais?",
              "resposta": "A, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás."
            },
            {
              "tema": "Preposição",
              "pergunta": "Como identificar uma preposição?",
              "resposta": "Fica entre dois termos, criando dependência do segundo em relação ao primeiro, e não pode ser retirada sem quebrar a frase."
            },
            {
              "tema": "Conjunção",
              "pergunta": "Qual a diferença prática entre preposição e conjunção?",
              "resposta": "Preposição liga PALAVRAS ('estudo para o concurso'); conjunção liga ORAÇÕES, ou seja, traz outro verbo ('estudo para que eu passe')."
            },
            {
              "tema": "Conjunção",
              "pergunta": "Quais as principais conjunções adversativas?",
              "resposta": "Mas, porém, contudo, todavia, entretanto, no entanto. Todas indicam contraste e são coordenativas."
            },
            {
              "tema": "Conjunção",
              "pergunta": "Como 'pois' muda de classificação conforme a posição?",
              "resposta": "Anteposto ao verbo é explicativo ('Estude, pois a prova é difícil'); posposto ao verbo é conclusivo ('A prova é difícil; estude, pois')."
            },
            {
              "tema": "Interjeição",
              "pergunta": "Como identificar uma interjeição?",
              "resposta": "Vem isolada, exprime emoção súbita, costuma ter ponto de exclamação e pode ser retirada sem afetar a estrutura da oração."
            },
            {
              "tema": "Concordância",
              "pergunta": "O que significa “concordar” em gramática?",
              "resposta": "Combinar na forma: a palavra muda de terminação para bater com outra em gênero (masc./fem.) e número (sing./plural). Não é “estar de acordo”."
            },
            {
              "tema": "Concordância",
              "pergunta": "Qual o teste para saber se uma palavra concorda com outra?",
              "resposta": "Mudar o gênero ou o número de uma; se a outra for obrigada a mudar junto, ela concorda. Se ficar travada, não concorda (é invariável)."
            },
            {
              "tema": "Concordância",
              "pergunta": "Como a concordância distingue numeral de advérbio no caso de “meio”?",
              "resposta": "'Meia dúzia / meio quilo' muda com o substantivo (concorda) = numeral. 'Meio nervosa / meio nervosas' não muda = advérbio."
            }
          ],
          "simulados": [
            {
              "id": "classes-palavras-01",
              "nome": "Classes de palavras — identificação e contexto",
              "descricao": "Identificar a classe de uma palavra pelo contexto, distinguir classe de função e aplicar os três testes básicos.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Advérbio · pegadinha do 'meio'",
                  "text": "Em “Ela ficou meio nervosa antes da prova”, a palavra destacada pertence à classe:",
                  "options": [
                    "numeral",
                    "adjetivo",
                    "advérbio",
                    "substantivo"
                  ],
                  "answer": 2,
                  "exp": "Advérbio. Aqui “meio” significa “um pouco” e modifica o adjetivo “nervosa” — logo é advérbio e é INVARIÁVEL. Por isso “meia nervosa” está errado. “Meio” só concorda quando é numeral: meia dúzia, meia hora, duas e meia."
                },
                {
                  "type": "mc",
                  "tag": "Pronome indefinido · 'bastante'",
                  "text": "Em “Havia bastantes candidatos na sala”, a palavra destacada pertence à classe:",
                  "options": [
                    "advérbio",
                    "pronome indefinido",
                    "adjetivo",
                    "numeral"
                  ],
                  "answer": 1,
                  "exp": "Pronome indefinido. Ele acompanha o substantivo “candidatos”, quantificando-o, e por isso FLEXIONA (bastantes). Quando “bastante” modifica verbo ou adjetivo, é advérbio e não flexiona: “Ele chegou bastante tarde”."
                },
                {
                  "type": "mc",
                  "tag": "Substantivo · teste do artigo",
                  "text": "Em “O andar do prédio estava vazio”, a palavra destacada pertence à classe:",
                  "options": [
                    "verbo",
                    "substantivo",
                    "advérbio",
                    "adjetivo"
                  ],
                  "answer": 1,
                  "exp": "Substantivo. O teste é o artigo: há “O” imediatamente antes, o que substantiva a palavra. Em “Ele começou a andar devagar”, a mesma palavra seria verbo. A classe depende do contexto."
                },
                {
                  "type": "mc",
                  "tag": "Preposição × artigo",
                  "text": "Assinale a frase em que a palavra “a” funciona como PREPOSIÇÃO:",
                  "options": [
                    "A prova foi adiada.",
                    "Entreguei a prova ao fiscal.",
                    "Referiu-se a questões difíceis.",
                    "A candidata chegou cedo."
                  ],
                  "answer": 2,
                  "exp": "Em “Referiu-se a questões difíceis”, o “a” é exigido pela regência de “referir-se a” — é preposição. Nas demais, “a” antecede substantivo e o determina: é artigo definido. Distinguir os dois é o que torna possível resolver crase."
                },
                {
                  "type": "mc",
                  "tag": "Conjunção",
                  "text": "Em “Trabalhamos muito, mas o resultado foi fraco”, a palavra destacada pertence à classe:",
                  "options": [
                    "advérbio",
                    "preposição",
                    "conjunção",
                    "pronome"
                  ],
                  "answer": 2,
                  "exp": "Conjunção (coordenativa adversativa). Ela liga duas orações estabelecendo contraste. Conjunção é classe invariável — nunca flexiona."
                },
                {
                  "type": "mc",
                  "tag": "Núcleo do sujeito",
                  "text": "Em “Os dados do relatório mensal foram revisados”, o núcleo do sujeito é:",
                  "options": [
                    "dados",
                    "relatório",
                    "mensal",
                    "revisados"
                  ],
                  "answer": 0,
                  "exp": "“dados”. O sujeito é “Os dados do relatório mensal”, e seu núcleo é o substantivo “dados” — por isso o verbo vai para o plural (“foram”). “relatório” está dentro do adjunto adnominal e não comanda a concordância: é a armadilha clássica da FGV."
                },
                {
                  "type": "ce",
                  "tag": "Morfossintaxe",
                  "text": "A classe de uma palavra é fixa e independe do contexto em que ela aparece.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. A classe depende do uso: “jantar” é substantivo em “O jantar estava frio” e verbo em “Vamos jantar cedo”. Essa mobilidade é a principal fonte de pegadinha da banca."
                },
                {
                  "type": "ce",
                  "tag": "Classes invariáveis",
                  "text": "Advérbio, preposição, conjunção e interjeição são classes invariáveis.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Nenhuma delas flexiona em gênero ou número. Esse é o teste rápido de família: se a palavra nunca muda de forma, está em um desses quatro grupos."
                },
                {
                  "type": "ce",
                  "tag": "Pegadinha do 'meio'",
                  "text": "Em “Ela chegou meia atrasada”, o emprego de “meia” está correto, pois concorda com o sujeito feminino.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. “Meio” aqui equivale a “um pouco”, modifica o adjetivo “atrasada” e é advérbio — portanto invariável. O correto é “meio atrasada”."
                },
                {
                  "type": "mc",
                  "tag": "Numeral × artigo",
                  "text": "Em “Comprei um, não dois”, a palavra destacada pertence à classe:",
                  "options": [
                    "artigo indefinido",
                    "numeral",
                    "pronome indefinido",
                    "substantivo"
                  ],
                  "answer": 1,
                  "exp": "Numeral. A oposição com “dois” mostra que a palavra indica quantidade exata. Em “Comprei um livro”, a mesma palavra seria artigo indefinido, pois apenas introduz o substantivo de modo vago."
                },
                {
                  "type": "ce",
                  "tag": "Adjetivo × advérbio",
                  "text": "Na frase “O relatório é claro”, “claro” é adjetivo; já em “Ele falou claro”, “claro” é advérbio.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. No primeiro caso caracteriza o substantivo “relatório” e concorda com ele (relatórios claros). No segundo, modifica o verbo “falou” e fica invariável (eles falaram claro)."
                },
                {
                  "type": "mc",
                  "tag": "Pronome indefinido",
                  "text": "Em “Todos os candidatos aprovados receberão o resultado”, a palavra destacada pertence à classe:",
                  "options": [
                    "artigo",
                    "pronome indefinido",
                    "numeral",
                    "advérbio"
                  ],
                  "answer": 1,
                  "exp": "Pronome indefinido. “Todos” refere-se ao substantivo “candidatos” de modo impreciso quanto à identidade e flexiona (todos / todas). Não é artigo: quem determina o substantivo aqui é “os”."
                },
                {
                  "type": "ce",
                  "tag": "Morfologia × sintaxe",
                  "text": "A morfologia estuda a função que a palavra exerce na frase, enquanto a sintaxe estuda a classe a que ela pertence.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. Está invertido. Morfologia estuda a CLASSE (o que a palavra é); sintaxe estuda a FUNÇÃO (o papel na frase). A junção das duas análises é a morfossintaxe."
                },
                {
                  "type": "ce",
                  "tag": "Núcleo do sujeito",
                  "text": "O núcleo do sujeito é sempre um substantivo, um pronome ou uma palavra substantivada.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Por isso identificar substantivos e pronomes é pré-requisito para acertar concordância verbal: o verbo concorda com esse núcleo, e não com o termo mais próximo dele."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "legislacao",
      "nome": "Legislação",
      "icon": "ti-gavel",
      "descricao": "Segurança da Informação e Proteção de Dados: LGPD, LAI, Marco Civil e Delitos Informáticos (recorte do edital DataPrev/FGV).",
      "materias": [
        {
          "id": "lgpd",
          "nome": "LGPD — Lei nº 13.709/2018",
          "icon": "ti-shield-lock",
          "descricao": "Lei Geral de Proteção de Dados Pessoais. Protege liberdade e privacidade no tratamento de dados pessoais.",
          "resumo": [
            {
              "titulo": "O que é e por que surgiu",
              "html": "\n                <p><b>O que é.</b> A LGPD define como os dados pessoais — qualquer informação que identifique uma pessoa: nome, CPF, e-mail, telefone, localização, histórico de navegação, hábitos de compra — podem ser coletados, usados, guardados e compartilhados por empresas e órgãos públicos. Em uma frase: ela devolve ao cidadão o controle sobre as próprias informações e impõe regras a quem as utiliza.</p>\n                <p><b>Por que surgiu.</b> Com a internet e a economia digital, os dados pessoais viraram um ativo valioso (o \"novo petróleo\"). Empresas passaram a coletar e negociar informações em larga escala, muitas vezes sem o cidadão saber ou consentir. No Brasil, a proteção era esparsa (regras soltas no CDC, no Marco Civil etc.). Escândalos como o caso Cambridge Analytica (2018) escancararam a necessidade de regras claras.</p>\n                <p><b>De onde veio.</b> Foi fortemente inspirada no GDPR europeu (em vigor desde 2018). Isso também permite ao Brasil trocar dados com países que exigem nível equivalente de proteção.</p>\n                <p><b>Linha do tempo.</b> Sancionada em 2018, entrou em vigor em setembro de 2020, e as sanções passaram a valer em agosto de 2021.</p>\n                <p><b>O espírito da lei.</b> Equilibrar o direito à privacidade e o desenvolvimento econômico e tecnológico. A LGPD não proíbe usar dados — permite, desde que com base legal, finalidade definida, transparência e responsabilidade.</p>\n              "
            },
            {
              "titulo": "Os personagens da LGPD — exemplo da Loja X",
              "html": "\n                <p>Você compra no site da \"Loja X\" e informa nome, CPF e endereço. Cada personagem tem um papel:</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Titular = você</span> A pessoa de quem são os dados; a dona da informação.</div>\n                  <div class=\"def\"><span class=\"def-t\">Controlador = a Loja X</span> Quem decide por que e como usar seus dados. É o \"cérebro\" do tratamento e responde pelas decisões.</div>\n                  <div class=\"def\"><span class=\"def-t\">Operador = terceiro contratado</span> Empresa que só executa ordens do controlador (ex.: e-mail marketing, servidor de nuvem). Trata dados em nome do controlador, sem decidir nada sozinho.</div>\n                  <div class=\"def\"><span class=\"def-t\">Encarregado (DPO) = o contato de privacidade</span> Pessoa/setor indicado pela própria empresa para ser a ponte de comunicação. <b>Não é do governo.</b></div>\n                  <div class=\"def\"><span class=\"def-t\">ANPD = o regulador</span> A Agência Nacional de Proteção de Dados, que fiscaliza e pune quem descumpre a LGPD. Fala com a empresa através do encarregado. <b>Cuidado:</b> NÃO é \"órgão\" — é autarquia de natureza especial (ver a seção sobre ANPD e CNPD).</div>\n                </div>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Controlador <b>decide</b> · Operador <b>executa</b> · Encarregado é a <b>ponte</b>. Detalhe de prova: controlador e operador são os \"agentes de tratamento\"; o encarregado NÃO é agente de tratamento.</div>\n              "
            },
            {
              "titulo": "Conceitos que a FGV adora",
              "html": "\n                <p><b>Dado pessoal sensível:</b> origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético ou biométrico.</p>\n                <p><b>Dado anonimizado</b> em regra não é dado pessoal — salvo se a anonimização puder ser revertida com esforços razoáveis.</p>\n                <p><b>A LGPD não se aplica a:</b> uso exclusivamente particular; fins jornalísticos, artísticos ou acadêmicos; segurança pública, defesa nacional e investigação/repressão penal.</p>\n              "
            },
            {
              "titulo": "Bases legais (art. 7º) — 10 hipóteses",
              "html": "\n                <p>O <b>consentimento é só UMA</b> delas. As outras nove: obrigação legal; políticas públicas; estudos por órgão de pesquisa; execução de contrato; exercício de direitos em processo; proteção da vida; tutela da saúde; legítimo interesse; proteção do crédito.</p>\n                <div class=\"destaque\"><b>Pegadinha clássica:</b> o \"legítimo interesse\" vale só para dados comuns (art. 7º). Dados <b>sensíveis</b> têm lista própria e mais restrita (art. 11) — e ali NÃO cabe legítimo interesse.</div>\n              "
            },
            {
              "titulo": "Princípios (art. 6º) e direitos do titular (art. 18)",
              "html": "\n                <p><b>Princípios (art. 6º):</b> finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas (além da boa-fé).</p>\n                <p><b>Direitos do titular (art. 18):</b> confirmação de tratamento, acesso, correção, anonimização/bloqueio/eliminação, portabilidade, eliminação dos dados tratados com consentimento, informação sobre compartilhamento e revogação do consentimento.</p>\n              "
            },
            {
              "titulo": "Sanções administrativas (art. 52) — o que a FGV cobra nos parágrafos",
              "html": "\n                <p><b>O rol de sanções:</b> advertência (I); <b>multa simples</b> (II) de até 2% do faturamento no Brasil no último exercício, excluídos tributos, <b>limitada a R$ 50 milhões por infração</b>; multa diária (III); publicização da infração (IV); bloqueio dos dados (V); eliminação dos dados (VI); suspensão parcial do funcionamento do banco de dados (X) e suspensão da atividade de tratamento (XI), ambas por até 6 meses prorrogáveis; e proibição parcial ou total das atividades de tratamento (XII).</p>\n                <div class=\"destaque\"><b>Só se aplica sanção com processo administrativo</b> que assegure contraditório, ampla defesa e direito de recurso. Não existe sanção sumária, nem para \"violador contumaz\".</div>\n                <p><b>§1º — critérios de dosimetria (a banca lista errado de propósito):</b> gravidade e natureza da infração, boa-fé do infrator, vantagem auferida, condição econômica, reincidência, grau do dano, cooperação, adoção reiterada de mecanismos internos de mitigação, política de boas práticas e governança, pronta adoção de medidas corretivas e proporcionalidade. <b>Nacionalidade do infrator NÃO é critério.</b></p>\n                <div class=\"warn\"><b>§3º — pegadinha de ouro:</b> a órgãos e entidades públicas só podem ser aplicadas as sanções dos incisos <b>I, IV, V, VI, X, XI e XII</b> — ou seja, <b>órgão público não leva multa</b> (nem simples nem diária) com base na LGPD.</div>\n                <p><b>§5º:</b> o produto das multas vai para o <b>Fundo de Defesa de Direitos Difusos</b> — nunca diretamente ao titular lesado. <b>§6º:</b> as sanções X, XI e XII só podem ser aplicadas depois de já imposta ao menos uma das sanções II a VI no mesmo caso. <b>§7º:</b> vazamentos individuais podem ser objeto de <b>conciliação direta</b> entre controlador e titular; não havendo acordo, aplicam-se as penalidades.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Art. 55-K:</b> a aplicação das sanções da LGPD compete <b>EXCLUSIVAMENTE à ANPD</b>, e suas competências prevalecem sobre as de outros órgãos no que toca à proteção de dados.</div>\n              "
            },
            {
              "titulo": "ANPD e CNPD — o desenho institucional",
              "html": "\n                <p>São <b>duas figuras diferentes</b> e a FGV adora trocá-las. Guarde a lógica: a <b>ANPD executa</b> (regula, fiscaliza, pune); o <b>CNPD aconselha</b> (propõe, sugere, estuda, dissemina). E, curiosamente, o CNPD <b>integra a estrutura da ANPD</b>.</p>\n                <h3>ANPD — Agência Nacional de Proteção de Dados</h3>\n                <div class=\"warn\"><b>ATUALIZAÇÃO IMPORTANTE — Lei nº 15.352, de 25/02/2026</b> (conversão da MP 1.317/2025): a ANPD deixou de ser \"<b>Autoridade</b>\" e passou a ser \"<b>Agência</b> Nacional de Proteção de Dados\". Pelo novo art. 55-A, é <b>autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública</b> (antes era vinculada à Presidência da República), com autonomia funcional, técnica, decisória, administrativa e financeira, patrimônio próprio e sede no DF — e foi <b>incluída no rol das agências reguladoras</b> da Lei nº 13.848/2019.</div>\n                <p><b>Linha do tempo da natureza jurídica</b> (é assim que a pegadinha nasce):</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">2019 (Lei 13.853)</span> órgão da administração pública federal, integrante da Presidência da República — natureza <b>transitória</b></div>\n                  <div class=\"def\"><span class=\"def-t\">2022 (Lei 14.460)</span> transformada em <b>autarquia de natureza especial</b>, vinculada à Presidência da República</div>\n                  <div class=\"def\"><span class=\"def-t\">2026 (Lei 15.352)</span> passa a ser <b>Agência</b>, autarquia de natureza especial vinculada ao <b>Ministério da Justiça e Segurança Pública</b></div>\n                </div>\n                <div class=\"destaque\">Se a alternativa disser que a ANPD é \"<b>órgão</b> da administração pública federal\", está <b>errada</b> — essa redação foi revogada em 2022.</div>\n                <p><b>Estrutura (art. 55-C):</b> Conselho Diretor (órgão máximo de direção), CNPD, Corregedoria, Ouvidoria, Procuradoria, Auditoria e unidades administrativas e especializadas.</p>\n                <p><b>Conselho Diretor (art. 55-D):</b> <b>5 diretores</b>, incluído o Diretor-Presidente, escolhidos e nomeados pelo <b>Presidente da República após aprovação do Senado Federal</b>; mandato de <b>4 anos</b>. Pelo <b>art. 55-E</b>, só perdem o cargo por <b>renúncia, condenação judicial transitada em julgado ou demissão por processo administrativo disciplinar</b>.</p>\n                <p><b>Competências (art. 55-J), em blocos:</b> zelar pela proteção de dados e pelos segredos comercial e industrial; elaborar diretrizes da Política Nacional; <b>fiscalizar e aplicar sanções</b>; apreciar petições de titular (após reclamação não resolvida pelo controlador); editar regulamentos e normas (precedidos de consulta e audiência públicas e de análise de impacto regulatório); realizar auditorias; celebrar compromisso com agentes de tratamento; e deliberar em caráter terminativo, na esfera administrativa, sobre a interpretação da Lei.</p>\n                <h3>CNPD — Conselho Nacional de Proteção de Dados Pessoais e da Privacidade</h3>\n                <p><b>Composição (art. 58-A): 23 representantes</b>, titulares e suplentes — 5 do Poder Executivo federal; 1 do Senado; 1 da Câmara; 1 do CNJ; 1 do CNMP; 1 do Comitê Gestor da Internet no Brasil; 3 da sociedade civil; 3 de instituições científicas, tecnológicas e de inovação; 3 de confederações sindicais do setor produtivo; 2 do setor empresarial de tratamento de dados; e 2 do setor laboral.</p>\n                <p>Os representantes da sociedade civil e demais entidades têm mandato de <b>2 anos, permitida 1 recondução</b>, e não podem ser membros do CGI.br. A participação é <b>prestação de serviço público relevante, NÃO remunerada</b>.</p>\n                <p><b>Competências (art. 58-B):</b> propor diretrizes estratégicas e subsídios para a Política Nacional e para a atuação da ANPD; elaborar relatórios anuais de avaliação; <b>sugerir ações a serem realizadas pela ANPD</b>; elaborar estudos, debates e audiências públicas; e <b>disseminar o conhecimento sobre proteção de dados à população</b>.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> O CNPD <b>não fiscaliza e não aplica sanção</b> — todos os seus verbos são consultivos: propor, elaborar, sugerir, disseminar. Quem pune é só a ANPD (art. 55-K).</div>\n                <div class=\"warn\"><b>Não confunda os números:</b> Conselho <b>Diretor</b> da ANPD = <b>5</b> diretores, mandato de <b>4</b> anos. <b>CNPD</b> = <b>23</b> representantes, mandato de <b>2</b> anos. E a garantia de só perder o cargo por renúncia/condenação/PAD é do <b>Conselho Diretor</b> (art. 55-E), não dos conselheiros do CNPD.</div>\n              "
            }
          ],
          "flashcards": [
            {
              "tema": "LGPD",
              "pergunta": "O que é a LGPD, em uma frase?",
              "resposta": "A lei que regula como dados pessoais podem ser coletados, usados, armazenados e compartilhados por empresas e órgãos públicos, devolvendo ao cidadão o controle sobre as próprias informações."
            },
            {
              "tema": "LGPD",
              "pergunta": "Por que a LGPD surgiu?",
              "resposta": "Porque, na economia digital, dados pessoais viraram um ativo valioso e passaram a ser usados sem transparência; faltava no Brasil uma lei geral. Foi inspirada no GDPR europeu e impulsionada por casos como Cambridge Analytica (2018)."
            },
            {
              "tema": "LGPD",
              "pergunta": "A LGPD se aplica a quê?",
              "resposta": "A qualquer tratamento de dados pessoais, por pessoa natural ou jurídica, de direito público ou privado, em meio físico ou digital, para proteger os direitos de liberdade e privacidade."
            },
            {
              "tema": "LGPD",
              "pergunta": "Em que casos a LGPD NÃO se aplica?",
              "resposta": "Fins exclusivamente particulares; fins jornalísticos, artísticos ou acadêmicos; e segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal."
            },
            {
              "tema": "LGPD",
              "pergunta": "O que é dado pessoal sensível?",
              "resposta": "Dado sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical ou a organização religiosa/filosófica/política, saúde ou vida sexual, dado genético ou biométrico."
            },
            {
              "tema": "LGPD",
              "pergunta": "Diferença entre controlador e operador.",
              "resposta": "Controlador toma as decisões sobre o tratamento; operador realiza o tratamento em nome do controlador."
            },
            {
              "tema": "LGPD",
              "pergunta": "Quem é o encarregado (DPO)?",
              "resposta": "Pessoa indicada pelo controlador/operador para ser o canal de comunicação entre o controlador, os titulares e a ANPD."
            },
            {
              "tema": "LGPD",
              "pergunta": "O encarregado (DPO) é órgão do governo?",
              "resposta": "Não. É indicado pela própria empresa (controlador) e trabalha para ela. Quem é do governo é a ANPD, que fiscaliza."
            },
            {
              "tema": "LGPD",
              "pergunta": "Quem são os 'agentes de tratamento'?",
              "resposta": "O controlador e o operador. O encarregado NÃO é agente de tratamento — ele apenas faz a comunicação."
            },
            {
              "tema": "LGPD",
              "pergunta": "O consentimento é a única base legal para tratar dados?",
              "resposta": "Não. Existem 10 hipóteses legais (art. 7º); o consentimento é apenas uma delas."
            },
            {
              "tema": "LGPD",
              "pergunta": "Cite 5 das 10 bases legais (art. 7º).",
              "resposta": "Consentimento; obrigação legal; políticas públicas; execução de contrato; legítimo interesse. (Demais: estudos por órgão de pesquisa, exercício de direitos em processo, proteção da vida, tutela da saúde, proteção do crédito.)"
            },
            {
              "tema": "LGPD",
              "pergunta": "Quais são os princípios da LGPD (art. 6º)?",
              "resposta": "Finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas (além da boa-fé)."
            },
            {
              "tema": "LGPD",
              "pergunta": "O que exige o tratamento de dados de crianças e adolescentes?",
              "resposta": "Consentimento específico e em destaque de pelo menos um dos pais ou responsável, sempre no melhor interesse da criança/adolescente."
            },
            {
              "tema": "LGPD",
              "pergunta": "Cite direitos do titular (art. 18).",
              "resposta": "Confirmação de tratamento; acesso; correção; anonimização/bloqueio/eliminação; portabilidade; eliminação dos dados tratados com consentimento; informação sobre compartilhamento; e revogação do consentimento."
            },
            {
              "tema": "LGPD",
              "pergunta": "Qual a multa simples do art. 52?",
              "resposta": "Até 2% do faturamento no Brasil no último exercício (excluídos tributos), limitada a R$ 50 milhões por infração."
            },
            {
              "tema": "LGPD",
              "pergunta": "O que é a ANPD e qual sua natureza jurídica hoje?",
              "resposta": "Agência Nacional de Proteção de Dados: autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública, com autonomia funcional, técnica, decisória, administrativa e financeira (art. 55-A, com a redação da Lei nº 15.352/2026). ATENÇÃO: dizer que é 'órgão da administração pública federal' está errado — essa redação foi revogada em 2022."
            },
            {
              "tema": "LGPD",
              "pergunta": "Como evoluiu a natureza jurídica da ANPD?",
              "resposta": "2019 (Lei 13.853): órgão da Presidência da República, de natureza transitória. 2022 (Lei 14.460): autarquia de natureza especial vinculada à Presidência. 2026 (Lei 15.352): passa a ser Agência, autarquia de natureza especial vinculada ao Ministério da Justiça e Segurança Pública, integrando o rol das agências reguladoras da Lei 13.848/2019."
            },
            {
              "tema": "LGPD",
              "pergunta": "Qual a composição do Conselho Diretor da ANPD e o mandato?",
              "resposta": "5 diretores, incluído o Diretor-Presidente, escolhidos e nomeados pelo Presidente da República após aprovação do Senado Federal, com mandato de 4 anos (art. 55-D)."
            },
            {
              "tema": "LGPD",
              "pergunta": "Em que hipóteses os membros do Conselho Diretor da ANPD perdem o cargo?",
              "resposta": "Somente por renúncia, condenação judicial transitada em julgado ou pena de demissão decorrente de processo administrativo disciplinar (art. 55-E). Essa garantia é do Conselho Diretor — não dos conselheiros do CNPD."
            },
            {
              "tema": "LGPD",
              "pergunta": "Como é composto o CNPD e como é a participação?",
              "resposta": "23 representantes, titulares e suplentes (5 do Executivo federal; 1 Senado; 1 Câmara; 1 CNJ; 1 CNMP; 1 CGI.br; 3 sociedade civil; 3 instituições científicas e de inovação; 3 confederações sindicais do setor produtivo; 2 setor empresarial; 2 setor laboral). Mandato de 2 anos, permitida 1 recondução, e a participação é serviço público relevante NÃO remunerado (art. 58-A)."
            },
            {
              "tema": "LGPD",
              "pergunta": "Quais são as competências do CNPD (art. 58-B)?",
              "resposta": "Propor diretrizes estratégicas e subsídios para a Política Nacional e para a atuação da ANPD; elaborar relatórios anuais de avaliação; sugerir ações a serem realizadas pela ANPD; elaborar estudos, debates e audiências públicas; e disseminar o conhecimento sobre proteção de dados à população. Todos os verbos são consultivos — o CNPD não fiscaliza nem aplica sanção."
            },
            {
              "tema": "LGPD",
              "pergunta": "Quem pode aplicar as sanções da LGPD?",
              "resposta": "Exclusivamente a ANPD, cujas competências prevalecem sobre as correlatas de outros órgãos e entidades no que se refere à proteção de dados (art. 55-K)."
            },
            {
              "tema": "LGPD",
              "pergunta": "Órgão público pode levar multa com base na LGPD?",
              "resposta": "Não. Pelo art. 52, §3º, a entidades e órgãos públicos só se aplicam as sanções dos incisos I, IV, V, VI, X, XI e XII — ficam de fora a multa simples (II) e a multa diária (III)."
            },
            {
              "tema": "LGPD",
              "pergunta": "Para onde vai o dinheiro das multas aplicadas pela ANPD?",
              "resposta": "Para o Fundo de Defesa de Direitos Difusos (art. 52, §5º) — nunca diretamente para o titular lesado."
            },
            {
              "tema": "LGPD",
              "pergunta": "O que a LGPD prevê para vazamentos individuais?",
              "resposta": "Podem ser objeto de conciliação direta entre controlador e titular; não havendo acordo, o controlador fica sujeito às penalidades do art. 52 (art. 52, §7º)."
            },
            {
              "tema": "LGPD",
              "pergunta": "O que fazer diante de incidente de segurança relevante?",
              "resposta": "Comunicar à ANPD e ao titular a ocorrência do incidente que possa acarretar risco ou dano relevante."
            },
            {
              "tema": "LGPD",
              "pergunta": "Dado anonimizado é dado pessoal?",
              "resposta": "Em regra, não — pois não permite identificar o titular. Exceção: se a anonimização puder ser revertida ou permitir reidentificação com esforços razoáveis."
            }
          ],
          "simulados": [
            {
              "id": "lgpd-01",
              "nome": "Conceitos, personagens e bases legais",
              "descricao": "Definições do art. 5º, agentes de tratamento e bases legais dos arts. 7º e 11.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "ce",
                  "tag": "Conceito · art. 5º, II",
                  "text": "Dado pessoal sensível é aquele sobre origem racial ou étnica, convicção religiosa, opinião política, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. É a definição literal do art. 5º, II. A chave é a natureza do dado (o que ele revela) — e ele só é 'pessoal' sensível quando vinculado a uma pessoa natural."
                },
                {
                  "type": "ce",
                  "tag": "Personagens · art. 5º, VIII e art. 41",
                  "text": "O encarregado (DPO) é um agente público nomeado pela ANPD para fiscalizar as empresas.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. O encarregado é indicado pelo próprio controlador/operador (é da empresa, não do governo). Ele atua como canal de comunicação entre o controlador, os titulares e a ANPD. Quem fiscaliza é a ANPD."
                },
                {
                  "type": "ce",
                  "tag": "Conceito · art. 5º, III e art. 12",
                  "text": "A anonimização, uma vez feita, é sempre irreversível: dados anonimizados nunca voltam a ser considerados dados pessoais.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. Se a anonimização puder ser revertida com meios próprios ou razoáveis, o dado volta a ser dado pessoal (art. 12). 'Sempre' e 'nunca' costumam ser pegadinha."
                },
                {
                  "type": "ce",
                  "tag": "Bases legais · art. 7º",
                  "text": "O consentimento é a única base legal que autoriza o tratamento de dados pessoais na LGPD.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. O art. 7º traz 10 hipóteses (bases legais). O consentimento é só uma delas — há também obrigação legal, execução de contrato, legítimo interesse, proteção do crédito, etc."
                },
                {
                  "type": "ce",
                  "tag": "Personagens · art. 5º, XIX e art. 55-J",
                  "text": "A ANPD é o órgão responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. A Autoridade Nacional de Proteção de Dados é o órgão do governo que zela, fiscaliza e aplica sanções. É o único 'personagem' público da cadeia."
                },
                {
                  "type": "ce",
                  "tag": "Personagens · art. 5º, VI e VII",
                  "text": "Controlador e operador são sempre a mesma pessoa jurídica dentro de uma organização.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. O controlador decide sobre o tratamento (o 'dono' da decisão); o operador trata os dados em nome do controlador, seguindo suas instruções. Podem ser entidades distintas."
                },
                {
                  "type": "mc",
                  "tag": "Conceito · art. 5º, X",
                  "text": "Toda operação realizada com dados pessoais — coleta, produção, classificação, utilização, acesso, armazenamento, eliminação, transferência — é definida pela LGPD como:",
                  "options": [
                    "Anonimização",
                    "Tratamento",
                    "Uso compartilhado de dados",
                    "Consentimento",
                    "Compartilhamento"
                  ],
                  "answer": 1,
                  "exp": "Tratamento (art. 5º, X) é o conceito guarda-chuva: qualquer operação com o dado. Anonimização e consentimento são coisas específicas dentro desse universo."
                },
                {
                  "type": "mc",
                  "tag": "Personagens · art. 5º, V",
                  "text": "A pessoa natural a quem se referem os dados pessoais objeto de tratamento é o:",
                  "options": [
                    "Controlador",
                    "Operador",
                    "Titular",
                    "Encarregado",
                    "Agente de tratamento"
                  ],
                  "answer": 2,
                  "exp": "Titular (art. 5º, V). É sempre pessoa natural (física). Controlador e operador são os 'agentes de tratamento'; o encarregado é o canal de comunicação."
                },
                {
                  "type": "mc",
                  "tag": "Bases legais · art. 11 (dados sensíveis)",
                  "text": "O tratamento de dados pessoais SENSÍVEIS segue hipóteses próprias do art. 11. Qual das opções NÃO é base legal para dados sensíveis?",
                  "options": [
                    "Consentimento do titular, de forma específica e destacada",
                    "Cumprimento de obrigação legal ou regulatória pelo controlador",
                    "Tutela da saúde, por profissionais de saúde ou autoridade sanitária",
                    "Legítimo interesse do controlador",
                    "Proteção da vida ou da incolumidade física do titular ou de terceiro"
                  ],
                  "answer": 3,
                  "exp": "Legítimo interesse NÃO vale para dados sensíveis — ele existe só no art. 7º (dados comuns). Essa é a pegadinha clássica: dado sensível tem lista mais restrita."
                },
                {
                  "type": "mc",
                  "tag": "Bases legais · art. 7º",
                  "text": "São bases legais (hipóteses de tratamento) previstas no art. 7º da LGPD, EXCETO:",
                  "options": [
                    "Cumprimento de obrigação legal ou regulatória",
                    "Execução de contrato do qual o titular seja parte",
                    "Proteção do crédito",
                    "Realização de estudos por órgão de pesquisa",
                    "Obtenção do lucro máximo pela empresa controladora"
                  ],
                  "answer": 4,
                  "exp": "'Lucro máximo' não existe na lei — é distrator. As outras quatro estão todas no art. 7º. Lucro pode até vir do 'legítimo interesse', mas isso é outra base, com requisitos próprios."
                },
                {
                  "type": "mc",
                  "tag": "Personagens · art. 5º, VI e VII",
                  "text": "A Loja X coleta dados de clientes e decide como usá-los; contrata a Empresa Y, que apenas processa a folha de pagamento seguindo as instruções da Loja X. Nessa relação:",
                  "options": [
                    "Loja X é operadora e Empresa Y é controladora",
                    "Loja X é controladora e Empresa Y é operadora",
                    "Ambas são controladoras",
                    "Empresa Y é a encarregada",
                    "Loja X é titular dos dados"
                  ],
                  "answer": 1,
                  "exp": "Quem decide é controlador (Loja X); quem executa seguindo instruções é operador (Empresa Y). Titular seriam os clientes."
                },
                {
                  "type": "mc",
                  "tag": "Conceito · art. 5º, I",
                  "text": "Segundo a LGPD, dado pessoal é:",
                  "options": [
                    "Apenas informações como CPF, RG e nome completo",
                    "Informação relacionada a pessoa natural identificada ou identificável",
                    "Qualquer informação, inclusive de pessoas jurídicas",
                    "Somente os dados sensíveis",
                    "Informação que já foi tornada pública"
                  ],
                  "answer": 1,
                  "exp": "Art. 5º, I: informação relacionada a pessoa natural identificada ou identificável. O conceito é amplo (não só CPF/RG) e não abrange pessoa jurídica."
                }
              ]
            }
          ]
        },
        {
          "id": "lai",
          "nome": "LAI — Lei nº 12.527/2011",
          "icon": "ti-file-search",
          "descricao": "Lei de Acesso à Informação. Regra de ouro: o acesso é a regra; o sigilo, a exceção.",
          "resumo": [
            {
              "titulo": "De onde veio e o espírito da lei",
              "html": "\n                <p>Nasceu para concretizar o direito constitucional de acesso à informação pública (art. 5º, XXXIII, da CF), obrigando o Estado a ser transparente com o cidadão sobre o que faz e como gasta.</p>\n                <p>Publicada em 18/11/2011, entrou em vigor após <b>vacatio legis de 180 dias</b>, em <b>16/05/2012</b>.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Regra de ouro: <b>acesso é a regra, sigilo é a exceção.</b></div>\n              "
            },
            {
              "titulo": "A quem se aplica e conceitos-chave",
              "html": "\n                <p><b>Abrangência (art. 1º e 2º):</b> todos os entes (União, Estados, DF, Municípios) e todos os Poderes; administração direta e indireta — incluindo autarquias, fundações, empresas públicas e sociedades de economia mista.</p>\n                <p><b>Entidades privadas sem fins lucrativos</b> que recebem recursos públicos também se sujeitam, mas <b>só quanto à parcela de recursos públicos recebidos</b>.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> A DataPrev é empresa pública federal — logo, está integralmente sujeita à LAI.</div>\n                <div class=\"warn\"><b>NOVIDADE — Lei nº 15.141/2025</b> (alta chance de cair): incluiu os arts. <b>8º-A</b> e <b>8º-B</b>. Os <b>serviços sociais autônomos</b> (Sistema S) que recebam contribuições ou recursos públicos federais por contrato de gestão devem divulgar plano de cargos e salários, quantitativo de empregados por cargo e faixa salarial (com nome e cargo), parcelas remuneratórias e indenizatórias e funções gratificadas. Os <b>conselhos de fiscalização profissional</b> devem divulgar, de forma nominal e individualizada, as parcelas remuneratórias e indenizatórias de seus empregados.</div>\n                <p><b>Conceitos do art. 4º (cobrados na literalidade):</b></p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Autenticidade</span> QUEM produziu/expediu/modificou a informação</div>\n                  <div class=\"def\"><span class=\"def-t\">Integridade</span> informação NÃO modificada (origem, trânsito, destino)</div>\n                  <div class=\"def\"><span class=\"def-t\">Primariedade</span> coletada na FONTE, com máximo detalhamento, sem modificação</div>\n                  <div class=\"def\"><span class=\"def-t\">Disponibilidade</span> pode ser conhecida e usada por quem é autorizado</div>\n                </div>\n              "
            },
            {
              "titulo": "Transparência, prazos e sigilo",
              "html": "\n                <p><b>Transparência ativa</b> (divulgação espontânea, na internet) x <b>passiva</b> (resposta a pedido). O pedido <b>não exige justificativa</b> (é vedado exigir os motivos).</p>\n                <p><b>Prazo de resposta:</b> imediato; se não for possível, até <b>20 dias</b>, prorrogáveis por mais <b>10</b> (total 30) mediante justificativa expressa.</p>\n                <p><b>Atenção: o sigilo é um ato da própria Administração, não do cidadão.</b> Uma autoridade classifica o documento como perigoso à segurança do Estado; o prazo abaixo é o tempo <b>máximo</b> que a informação fica escondida — vencido o prazo, ela vira pública automaticamente. Se você pedir acesso a algo classificado, o acesso é negado enquanto o sigilo durar (mas cabe recurso e pedido de desclassificação — ver seção seguinte).</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Ultrassecreta</span> até 25 anos (só ela prorroga: + 25, teto de 50)</div>\n                  <div class=\"def\"><span class=\"def-t\">Secreta</span> até 15 anos</div>\n                  <div class=\"def\"><span class=\"def-t\">Reservada</span> até 5 anos</div>\n                  <div class=\"def\"><span class=\"def-t\">Informações pessoais</span> caso à parte — NÃO são classificadas: ficam restritas por até 100 anos para proteger a intimidade/vida privada; quem libera é a própria pessoa (consentimento) ou a lei em hipóteses específicas</div>\n                </div>\n                <p><b>Decretos:</b> 7.724 regulamenta a LAI no Executivo federal; 7.845 trata de informação classificada e credenciamento de segurança (institui o NSC).</p>\n              "
            },
            {
              "titulo": "Procedimento, recursos e instâncias",
              "html": "\n                <p><b>SIC</b> (Serviço de Informação ao Cidadão) recebe os pedidos. O serviço é <b>gratuito</b>, salvo o custo de reprodução dos materiais.</p>\n                <p>Negado o acesso, cabe <b>recurso à autoridade hierarquicamente superior</b> (10 dias para recorrer; 5 dias para decidir). No âmbito federal, mantida a negativa, recurso à <b>CGU</b> (mesmos 10 → 5). Desprovido pela CGU, recurso à <b>CMRI</b> (Comissão Mista de Reavaliação de Informações).</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Macete <b>10 → 5</b>: recorre em 10 dias, decide em 5 dias.</div>\n                <div class=\"warn\"><b>Nunca podem ser negadas (art. 21):</b> informação necessária à tutela de direitos fundamentais e informações sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos.</div>\n              "
            },
            {
              "titulo": "Classificação, competência e desclassificação",
              "html": "\n                <p>São classificáveis as informações <b>imprescindíveis à segurança da sociedade ou do Estado</b> (art. 23). A classificação deve usar o critério <b>menos restritivo</b> possível; o prazo pode ser por data ou por <b>evento</b> (ex.: até a conclusão de uma obra).</p>\n                <p><b>Quem coloca o sigilo (art. 27):</b> Ultrassecreta — Presidente, Vice, Ministros, Comandantes das Forças e Chefes de Missão Diplomática; Secreta — as anteriores + titulares de autarquias, fundações, empresas públicas e sociedades de economia mista; Reservada — as anteriores + funções de direção/chefia (DAS 101.5 ou superior).</p>\n                <p><b>Pedi acesso e o documento é sigiloso — e agora?</b> O acesso é negado enquanto o sigilo durar, mas você não fica sem saída: pode <b>recorrer</b> (autoridade superior → CGU → CMRI) e pode <b>pedir a reavaliação</b>, com vistas à desclassificação ou à redução do prazo.</p>\n                <p><b>Quem derruba o sigilo (desclassifica):</b> a própria autoridade que classificou (ou uma superior), de ofício ou por provocação; e, no âmbito federal, a <b>CMRI</b>, que reavalia as classificações ultrassecretas e secretas — e é a única que pode prorrogar o sigilo ultrassecreto.</p>\n                <div class=\"warn\"><b>Prorrogação:</b> só a <b>ultrassecreta</b> se prorroga — uma única vez, por até + 25 anos (teto de 50), por decisão da CMRI (art. 35, §1º, III e §2º). Secreta e reservada NÃO se prorrogam.</div>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Cuidado com o \"prazo máximo\":</b> a própria lei chama 25/15/5 de \"prazos máximos\" (art. 24, §1º). Se o enunciado reproduz esse artigo, é CERTO — a prorrogação está em outro artigo e só entra na conta quando a questão falar em prorrogar, renovar ou citar a CMRI.</div>\n                <p><b>Detalhes que a banca adora:</b> a delegação para classificar como ultrassecreta e secreta é permitida, <b>vedada a subdelegação</b> (art. 27, §1º); a classificação ultrassecreta feita por Comandantes das Forças e Chefes de Missão deve ser <b>ratificada pelo Ministro de Estado</b> (art. 27, §2º); informações que ponham em risco a segurança do Presidente e do Vice e de seus cônjuges e filhos são classificadas como <b>RESERVADAS</b> e ficam sob sigilo até o fim do mandato (art. 24, §2º); e, se a CMRI não deliberar sobre a revisão no prazo, ocorre a <b>desclassificação automática</b> (art. 35, §4º).</p>\n              "
            },
            {
              "titulo": "Responsabilidades e pegadinhas da FGV",
              "html": "\n                <p><b>Condutas ilícitas (art. 32):</b> recusar/retardar informação, fornecê-la incompleta ou incorreta de propósito, destruir ou ocultar documentos, impor sigilo para proveito próprio ou ocultar ilegalidade. São, no mínimo, infrações administrativas (puníveis com suspensão) e podem configurar improbidade.</p>\n                <p><b>Mais cobrado pela FGV:</b></p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Motivação</span> é VEDADO exigir o motivo do pedido</div>\n                  <div class=\"def\"><span class=\"def-t\">Prazos de sigilo</span> 25 / 15 / 5 (trocar a ordem é a pegadinha clássica)</div>\n                  <div class=\"def\"><span class=\"def-t\">Pessoal ≠ sigilosa</span> pessoal = até 100 anos e independe de classificação</div>\n                  <div class=\"def\"><span class=\"def-t\">Municípios até 10 mil hab.</span> dispensados da divulgação obrigatória na internet, mas mantêm a transparência passiva</div>\n                </div>\n              "
            }
          ],
          "flashcards": [
            {
              "tema": "LAI",
              "pergunta": "Qual a regra geral da LAI?",
              "resposta": "O acesso à informação é a regra e o sigilo é a exceção (publicidade como preceito geral)."
            },
            {
              "tema": "LAI",
              "pergunta": "Diferença entre transparência ativa e passiva.",
              "resposta": "Ativa: divulgação espontânea de informações de interesse coletivo, independentemente de pedido. Passiva: fornecimento em resposta a solicitação do cidadão."
            },
            {
              "tema": "LAI",
              "pergunta": "O pedido de acesso à informação precisa de justificativa?",
              "resposta": "Não. É vedado exigir os motivos do pedido de acesso."
            },
            {
              "tema": "LAI",
              "pergunta": "Prazo para resposta ao pedido de acesso.",
              "resposta": "Imediato, se disponível; caso contrário, até 20 dias, prorrogáveis por mais 10 mediante justificativa."
            },
            {
              "tema": "LAI",
              "pergunta": "Graus de sigilo e prazos de classificação.",
              "resposta": "Ultrassecreta: 25 anos; Secreta: 15 anos; Reservada: 5 anos."
            },
            {
              "tema": "LAI",
              "pergunta": "Por quanto tempo ficam restritas as informações pessoais (intimidade/vida privada)?",
              "resposta": "Até 100 anos, independentemente de classificação."
            },
            {
              "tema": "LAI",
              "pergunta": "O que regulam os Decretos 7.724/2012 e 7.845/2012?",
              "resposta": "O 7.724 regulamenta a LAI no Poder Executivo federal; o 7.845 trata do credenciamento de segurança e do tratamento de informação classificada (institui o NSC)."
            },
            {
              "tema": "LAI",
              "pergunta": "As entidades privadas sem fins lucrativos estão sujeitas à LAI?",
              "resposta": "Sim, quando recebem recursos públicos — mas a obrigação se limita à parcela dos recursos públicos recebidos."
            },
            {
              "tema": "LAI",
              "pergunta": "Diferencie autenticidade, integridade e primariedade (art. 4º).",
              "resposta": "Autenticidade = quem produziu/expediu/modificou; Integridade = informação não modificada; Primariedade = coletada na fonte, com máximo detalhamento, sem modificação."
            },
            {
              "tema": "LAI",
              "pergunta": "Quais os prazos de recurso na LAI (interpor e decidir)?",
              "resposta": "10 dias para recorrer e 5 dias para decidir, tanto no recurso à autoridade superior quanto no recurso à CGU (macete 10 → 5)."
            },
            {
              "tema": "LAI",
              "pergunta": "Qual órgão julga o recurso quando a CGU nega acesso alegando sigilo?",
              "resposta": "A CMRI — Comissão Mista de Reavaliação de Informações."
            },
            {
              "tema": "LAI",
              "pergunta": "Qual grau de sigilo pode ter o prazo prorrogado, e por quanto?",
              "resposta": "Apenas a ultrassecreta, uma única vez, por até mais 25 anos (teto de 50). Secreta e reservada não se prorrogam."
            },
            {
              "tema": "LAI",
              "pergunta": "Que informações nunca podem ser objeto de restrição de acesso (art. 21)?",
              "resposta": "As necessárias à tutela de direitos fundamentais e as sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos ou a mando de autoridades."
            },
            {
              "tema": "LAI",
              "pergunta": "Quem pode classificar uma informação como ultrassecreta?",
              "resposta": "Presidente e Vice-Presidente da República, Ministros de Estado e equiparados, Comandantes das Forças Armadas e Chefes de Missões Diplomáticas e Consulares permanentes."
            },
            {
              "tema": "LAI",
              "pergunta": "O serviço de acesso à informação é gratuito?",
              "resposta": "Sim; só pode ser cobrado o custo dos serviços e materiais de reprodução, ressalvado quem declara situação de pobreza."
            },
            {
              "tema": "LAI",
              "pergunta": "Se a ultrassecreta pode ser prorrogada, por que 25 anos é chamado de \"prazo máximo\"?",
              "resposta": "Porque é a redação literal do art. 24, §1º, que nomeia 25/15/5 como os prazos máximos de restrição. A prorrogação está em outro dispositivo (art. 35, §1º, III e §2º), é da CMRI, exclusiva da ultrassecreta e limitada a uma única renovação (teto de 50 anos). Na prova: enunciado que reproduz o art. 24, §1º é CERTO."
            },
            {
              "tema": "LAI",
              "pergunta": "Como são classificadas as informações que põem em risco a segurança do Presidente e do Vice?",
              "resposta": "Como RESERVADAS, ficando sob sigilo até o término do mandato em exercício ou do último mandato, em caso de reeleição (art. 24, §2º). Abrange também cônjuges e filhos."
            },
            {
              "tema": "LAI",
              "pergunta": "O que a Lei nº 15.141/2025 acrescentou à LAI?",
              "resposta": "Os arts. 8º-A e 8º-B: serviços sociais autônomos (Sistema S) que recebam recursos públicos federais por contrato de gestão devem divulgar plano de cargos e salários, quantitativo de empregados e remunerações; e os conselhos de fiscalização profissional devem divulgar, de forma nominal e individualizada, as parcelas remuneratórias de seus empregados."
            },
            {
              "tema": "LAI",
              "pergunta": "Na LAI, quem precisa apresentar justificativa: o requerente ou o órgão?",
              "resposta": "O órgão. O requerente NUNCA justifica o pedido (art. 10, §3º — é vedado exigir os motivos). Já a Administração precisa de justificativa expressa para prorrogar o prazo de resposta de 20 para 30 dias, e apenas cientifica o requerente (art. 11, §2º)."
            },
            {
              "tema": "LAI",
              "pergunta": "Quem impõe o sigilo a uma informação — o cidadão que pede ou a Administração?",
              "resposta": "A própria Administração. Uma autoridade (art. 27) classifica o documento como imprescindível à segurança do Estado/sociedade. O cidadão nunca pede sigilo; ele pede acesso."
            },
            {
              "tema": "LAI",
              "pergunta": "Pedi acesso a um documento classificado e foi negado. O que posso fazer?",
              "resposta": "O acesso fica negado enquanto durar o sigilo, mas cabe recurso (autoridade superior → CGU → CMRI) e pedido de reavaliação, com vistas à desclassificação ou à redução do prazo."
            },
            {
              "tema": "LAI",
              "pergunta": "A decisão que classifica uma informação como sigilosa é pública?",
              "resposta": "Não. Ela é mantida no MESMO grau de sigilo da informação classificada (art. 28, parágrafo único) — afinal, contém o assunto, o fundamento, o prazo e a autoridade. O que é público (art. 30) é outra coisa: o rol dos documentos classificados em cada grau, o rol dos desclassificados nos últimos 12 meses e o relatório estatístico. Resumo: a EXISTÊNCIA do sigilo é transparente; o CONTEÚDO da decisão, não."
            },
            {
              "tema": "LAI",
              "pergunta": "O que cada órgão deve publicar anualmente sobre informações sigilosas (art. 30)?",
              "resposta": "Rol das informações desclassificadas nos últimos 12 meses; rol de documentos classificados em cada grau de sigilo, com identificação para referência futura; e relatório estatístico com a quantidade de pedidos recebidos, atendidos e indeferidos."
            },
            {
              "tema": "LAI",
              "pergunta": "Quem pode desclassificar (derrubar) o sigilo de uma informação?",
              "resposta": "A própria autoridade que classificou ou uma superior, de ofício ou por provocação; e, no federal, a CMRI, que reavalia ultrassecretas e secretas e é a única que pode prorrogar o sigilo ultrassecreto."
            }
          ],
          "simulados": [
            {
              "id": "lai-01",
              "nome": "Fundamentos, prazos e sigilo",
              "descricao": "Regra geral, abrangência, pedido de acesso, prazos, recursos e classificação da informação.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "ce",
                  "tag": "Regra geral · art. 3º, I",
                  "text": "Na Lei de Acesso à Informação, o sigilo é o preceito geral da Administração Pública, e a publicidade, a exceção.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. É exatamente o inverso: a LAI adota a observância da publicidade como preceito geral e do sigilo como exceção (art. 3º, I). Sempre que a questão inverter essa relação, está errada."
                },
                {
                  "type": "ce",
                  "tag": "Pedido de acesso · art. 10, §3º",
                  "text": "O órgão público pode condicionar o atendimento do pedido à apresentação, pelo requerente, dos motivos determinantes da solicitação.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. São vedadas quaisquer exigências relativas aos motivos do pedido (art. 10, §3º). O cidadão não precisa justificar por que quer a informação — exigir justificativa é ilegal."
                },
                {
                  "type": "ce",
                  "tag": "Prazos · art. 11",
                  "text": "Não sendo possível conceder o acesso imediato, o órgão deve responder em até 20 dias, prazo prorrogável por mais 10 dias mediante justificativa expressa e cientificação do requerente.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. É a regra do art. 11: resposta imediata quando a informação estiver disponível; caso contrário, 20 dias + 10 de prorrogação (total máximo de 30 dias). ATENÇÃO À PEGADINHA: a justificativa expressa é do ÓRGÃO, para poder prorrogar o prazo — não do requerente. O requerente apenas é cientificado (art. 11, §2º). Não confunda com o art. 10, §3º, que veda exigir do cidadão os motivos do pedido: quem nunca justifica é quem pede; quem justifica a prorrogação é a Administração. Pista no enunciado: se o requerente é 'cientificado', não é ele quem justifica."
                },
                {
                  "type": "ce",
                  "tag": "Classificação · art. 24, §1º",
                  "text": "Os prazos máximos de restrição de acesso são de 25 anos para a informação ultrassecreta, 15 anos para a secreta e 5 anos para a reservada.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. É a redação literal do art. 24, §1º — é a PRÓPRIA LEI que chama 25/15/5 de 'prazos máximos de restrição de acesso'. E a prorrogação? Ela está em OUTRO artigo (art. 35, §1º, III e §2º): é competência da CMRI, exclusiva da ultrassecreta, limitada a uma única renovação de até mais 25 anos (teto de 50). REGRA PRÁTICA: se o enunciado reproduz o art. 24, §1º, marque Certo; a prorrogação só entra na conta quando a questão falar expressamente em prorrogar, renovar ou citar a CMRI. Lembre ainda que o prazo pode ser vinculado à ocorrência de um evento, em vez de uma data (art. 24, §3º), e que, vencido o prazo, a informação se torna automaticamente pública (art. 24, §4º)."
                },
                {
                  "type": "ce",
                  "tag": "Prorrogação do sigilo · art. 35, §1º, III e §2º",
                  "text": "O prazo de sigilo da informação classificada como secreta pode ser prorrogado uma única vez, enquanto perdurar o risco à segurança da sociedade e do Estado.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. A prorrogação é exclusiva da informação ULTRASSECRETA, uma única vez, por até mais 25 anos (teto de 50), e é competência da CMRI. Secreta e reservada não se prorrogam."
                },
                {
                  "type": "ce",
                  "tag": "Informação pessoal · art. 31, §1º, I",
                  "text": "As informações pessoais relativas à intimidade, vida privada, honra e imagem terão acesso restrito pelo prazo máximo de 100 anos, independentemente de classificação de sigilo.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Informação pessoal não se confunde com informação classificada: ela não passa pelo procedimento de classificação e sua restrição é de até 100 anos a contar da produção, para proteger a intimidade da pessoa — e não a segurança do Estado."
                },
                {
                  "type": "mc",
                  "tag": "Abrangência · art. 2º",
                  "text": "Uma associação privada sem fins lucrativos recebe recursos públicos por meio de termo de parceria com a União. A respeito da aplicação da LAI a essa entidade, é correto afirmar que a lei incide:",
                  "options": [
                    "sobre a integralidade das atividades da entidade, inclusive as custeadas com recursos próprios.",
                    "apenas sobre a parcela dos recursos públicos recebidos.",
                    "somente se a entidade for declarada de utilidade pública federal.",
                    "não incide, por se tratar de pessoa jurídica de direito privado."
                  ],
                  "answer": 1,
                  "exp": "Alternativa B. O art. 2º estende as obrigações da LAI às entidades privadas sem fins lucrativos que recebam recursos públicos, mas a publicidade se refere à parcela dos recursos públicos recebidos e à sua destinação — não às atividades custeadas com recursos próprios."
                },
                {
                  "type": "mc",
                  "tag": "Recursos · art. 15",
                  "text": "Negado o acesso à informação, o interessado pode interpor recurso à autoridade hierarquicamente superior à que proferiu a decisão. Os prazos para interpor o recurso e para a autoridade decidir são, respectivamente, de:",
                  "options": [
                    "10 dias e 5 dias.",
                    "5 dias e 10 dias.",
                    "15 dias e 10 dias.",
                    "30 dias e 15 dias."
                  ],
                  "answer": 0,
                  "exp": "Alternativa A. O recurso é interposto em 10 dias contados da ciência da decisão e apreciado em 5 dias pela autoridade superior (art. 15 e parágrafo único). Macete: 10 → 5. O mesmo par de prazos vale para o recurso à CGU (art. 16)."
                },
                {
                  "type": "mc",
                  "tag": "Restrições · art. 21",
                  "text": "Assinale a informação que, nos termos da LAI, NÃO pode ser objeto de restrição de acesso:",
                  "options": [
                    "Informação cuja divulgação possa pôr em risco a defesa e a soberania nacionais.",
                    "Informação referente a conduta que implique violação de direitos humanos praticada por agente público.",
                    "Informação que possa comprometer atividades de inteligência em curso.",
                    "Informação que ofereça risco à estabilidade financeira e monetária do País."
                  ],
                  "answer": 1,
                  "exp": "Alternativa B. O art. 21, parágrafo único, é expresso: informações ou documentos sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos ou a mando de autoridades públicas não poderão ser objeto de restrição de acesso. As demais alternativas são hipóteses típicas de classificação (art. 23)."
                },
                {
                  "type": "mc",
                  "tag": "Competência para classificar · art. 27, I",
                  "text": "A competência para classificar uma informação no grau ULTRASSECRETO cabe a:",
                  "options": [
                    "qualquer servidor ocupante de cargo efetivo que detenha a informação.",
                    "Presidente e Vice-Presidente da República, Ministros de Estado, Comandantes da Marinha, do Exército e da Aeronáutica e Chefes de Missões Diplomáticas e Consulares permanentes.",
                    "exclusivamente ao Presidente da República, sendo vedada qualquer delegação.",
                    "titulares de autarquias, fundações, empresas públicas e sociedades de economia mista."
                  ],
                  "answer": 1,
                  "exp": "Alternativa B. É o rol do art. 27, I. A competência para classificar como ultrassecreta e secreta pode ser delegada pela autoridade responsável a agente público, inclusive em missão no exterior, vedada a subdelegação (art. 27, §1º) — por isso a alternativa C erra ao dizer que é vedada qualquer delegação. Os titulares citados na alternativa D podem classificar como secreta e reservada, não ultrassecreta. Detalhe: a classificação como ultrassecreta feita pelos Comandantes das Forças e pelos Chefes de Missão precisa ser ratificada pelo respectivo Ministro de Estado (art. 27, §2º)."
                },
                {
                  "type": "mc",
                  "tag": "Desclassificação · arts. 29 e 35",
                  "text": "A respeito da possibilidade de derrubar o sigilo de uma informação classificada no âmbito federal, é correto afirmar que a desclassificação pode ser feita:",
                  "options": [
                    "apenas pelo Poder Judiciário, mediante ação judicial proposta pelo interessado.",
                    "pela autoridade que classificou a informação ou por autoridade superior, de ofício ou mediante provocação, e ainda pela CMRI.",
                    "somente pelo requerente, mediante consentimento expresso do órgão detentor.",
                    "exclusivamente pela Controladoria-Geral da União, após o decurso de metade do prazo de sigilo."
                  ],
                  "answer": 1,
                  "exp": "Alternativa B. A classificação é reavaliada de ofício ou mediante provocação pela autoridade classificadora ou superior (art. 29), e a CMRI tem competência para rever a classificação de informações ultrassecretas e secretas, podendo desclassificá-las, reduzir o prazo ou prorrogar o sigilo ultrassecreto (art. 35). Não depende de decisão judicial."
                },
                {
                  "type": "mc",
                  "tag": "Transparência ativa · art. 8º, §4º",
                  "text": "Quanto à divulgação obrigatória de informações em sítios oficiais na internet, os municípios com população de até 10.000 habitantes:",
                  "options": [
                    "ficam dispensados da divulgação obrigatória na internet, mantidas as demais obrigações da lei, inclusive a transparência passiva.",
                    "ficam integralmente dispensados do cumprimento da LAI.",
                    "devem divulgar apenas as informações relativas a despesas com pessoal.",
                    "não possuem qualquer dispensa, sujeitando-se às mesmas regras dos demais entes."
                  ],
                  "answer": 0,
                  "exp": "Alternativa A. O art. 8º, §4º dispensa esses municípios da divulgação obrigatória na internet, mas eles continuam obrigados ao atendimento de pedidos (transparência passiva) e à divulgação em tempo real de informações de execução orçamentária e financeira, na forma da Lei de Responsabilidade Fiscal."
                }
              ]
            }
          ]
        },
        {
          "id": "marco-civil",
          "nome": "Marco Civil da Internet — Lei nº 12.965/2014",
          "icon": "ti-world-www",
          "descricao": "A 'constituição da internet' brasileira: princípios, direitos e deveres no uso da rede.",
          "resumo": [
            {
              "titulo": "De onde veio",
              "html": "\n                <p>É a \"constituição da internet\" brasileira (2014), criada para garantir direitos dos usuários e regras claras — neutralidade de rede, privacidade e liberdade de expressão — num ambiente que até então não tinha lei própria.</p>\n                <p><b>Fundamentos (art. 2º):</b> o respeito à liberdade de expressão, além do reconhecimento da escala mundial da rede, dos direitos humanos, da pluralidade, da livre iniciativa e da finalidade social da rede.</p>\n                <p><b>Princípios (art. 3º):</b> liberdade de expressão; proteção da privacidade; proteção dos dados pessoais; preservação e garantia da neutralidade de rede; preservação da estabilidade, segurança e funcionalidade da rede; responsabilização dos agentes conforme suas atividades; preservação da natureza participativa da rede; e liberdade dos modelos de negócios.</p>\n              "
            },
            {
              "titulo": "Pontos que mais caem",
              "html": "\n                <p><b>Neutralidade de rede (art. 9º):</b> tratar todos os pacotes de forma isonômica, sem distinção por conteúdo, origem, destino, serviço, terminal ou aplicação. A discriminação só é lícita por requisitos técnicos indispensáveis ou priorização de serviços de emergência — e nunca pode causar dano, ser anticoncorrencial ou implicar conteúdo pago.</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Registros de conexão</span> guarda por <b>1 ano</b>, obrigatória, pelo provedor de conexão (art. 13)</div>\n                  <div class=\"def\"><span class=\"def-t\">Registros de acesso a aplicações</span> guarda por <b>6 meses</b>, pelo provedor de aplicações (art. 15)</div>\n                </div>\n                <div class=\"warn\"><b>Pegadinha:</b> o provedor de CONEXÃO é <b>proibido</b> de guardar registros de acesso a aplicações (art. 14). E a autoridade policial ou administrativa pode requerer <b>cautelarmente</b> a guarda por prazo maior, mas o <b>acesso ao conteúdo dos registros só com ordem judicial</b> (arts. 10, 13, §2º, e 15, §3º).</div>\n                <p><b>Direitos do usuário (art. 7º):</b> inviolabilidade da intimidade e vida privada; inviolabilidade e sigilo do fluxo das comunicações e das comunicações privadas armazenadas (salvo ordem judicial); não suspensão da conexão salvo débito; manutenção da qualidade contratada; informações claras nos contratos; não fornecimento de dados a terceiros sem consentimento livre, expresso e informado; e exclusão definitiva dos dados ao término da relação.</p>\n              "
            },
            {
              "titulo": "Responsabilidade por conteúdo de terceiros — e o que o STF decidiu em 2025",
              "html": "\n                <p><b>A regra original (art. 19):</b> o provedor de aplicações só responde civilmente por conteúdo gerado por terceiro se, <b>após ordem judicial específica</b>, não tornar o conteúdo indisponível. O objetivo declarado era proteger a liberdade de expressão e impedir a censura privada.</p>\n                <p><b>A exceção do art. 21:</b> em caso de divulgação não autorizada de <b>imagens de nudez ou de atos sexuais de caráter privado</b>, basta a <b>notificação extrajudicial</b> do participante ou seu representante — não precisa de ordem judicial.</p>\n                <div class=\"warn\"><b>ATUALIZAÇÃO DECISIVA — STF, 26/06/2025</b> (Temas 987 e 533 de repercussão geral, RE 1.037.396 e RE 1.057.258). Por <b>8 votos a 3</b>, o STF declarou o art. 19 <b>parcialmente inconstitucional</b>, por proteção deficiente (omissão parcial) de bens constitucionais relevantes. <b>O artigo continua no texto da lei</b> — o que mudou foi a interpretação, válida <b>enquanto não sobrevier nova legislação</b>.</div>\n                <p><b>Como ficou o regime, em blocos:</b></p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Regra geral agora é o art. 21</span> o provedor responde por conteúdo de terceiro que configure crime ou ato ilícito a partir de <b>notificação extrajudicial</b>, sem necessidade de ordem judicial (vale também para contas denunciadas como inautênticas)</div>\n                  <div class=\"def\"><span class=\"def-t\">Crimes contra a honra</span> <b>continua valendo o art. 19</b> (exige ordem judicial), sem prejuízo de remoção por notificação extrajudicial</div>\n                  <div class=\"def\"><span class=\"def-t\">Replicação de conteúdo já julgado ilícito</span> deve ser removido por todos os provedores, independentemente de nova decisão, a partir de notificação judicial ou extrajudicial</div>\n                  <div class=\"def\"><span class=\"def-t\">Presunção de responsabilidade</span> em <b>anúncios e impulsionamentos pagos</b> e em <b>redes artificiais de distribuição (bots)</b> — responde independentemente de notificação, salvo se comprovar atuação diligente</div>\n                  <div class=\"def\"><span class=\"def-t\">Dever de cuidado (falha sistêmica)</span> deve indisponibilizar <b>imediatamente</b> conteúdos de um rol taxativo de crimes graves: atos antidemocráticos, terrorismo, induzimento ao suicídio/automutilação, incitação à discriminação, condutas homofóbicas e transfóbicas, crimes contra a mulher, crimes sexuais contra vulneráveis e pornografia infantil, e tráfico de pessoas</div>\n                  <div class=\"def\"><span class=\"def-t\">Marketplaces</span> respondem pelo <b>Código de Defesa do Consumidor</b></div>\n                </div>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Dois detalhes que a banca pode explorar: a <b>falha sistêmica</b> exige circulação massiva — conteúdo ilícito <b>isolado e atomizado</b> não basta (aí incide o art. 21); e <b>não há responsabilidade objetiva</b> na aplicação da tese. Ficam ressalvadas ainda a legislação eleitoral e os atos do TSE.</div>\n              "
            },
            {
              "titulo": "Sanções (art. 12) e aplicação da lei brasileira (art. 11)",
              "html": "\n                <p><b>Art. 11:</b> aplica-se a lei brasileira a qualquer operação de coleta, armazenamento, guarda e tratamento de registros, dados pessoais ou comunicações por provedores, desde que <b>ao menos um dos atos ocorra em território nacional</b> — inclusive se a atividade for feita por empresa com sede no exterior, bastando que oferte serviço ao público brasileiro ou integre grupo econômico com presença no Brasil.</p>\n                <p><b>Art. 12 — sanções</b>, aplicadas de forma <b>isolada ou cumulativa</b>, sem prejuízo das demais sanções cíveis, criminais ou administrativas:</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">I — Advertência</span> <b>com indicação de prazo para adoção de medidas corretivas</b> (tem, portanto, face repressiva e corretiva)</div>\n                  <div class=\"def\"><span class=\"def-t\">II — Multa</span> de <b>até 10%</b> do faturamento do grupo econômico no Brasil no <b>seu último exercício</b>, excluídos os tributos, considerados a condição econômica do infrator e a proporcionalidade</div>\n                  <div class=\"def\"><span class=\"def-t\">III — Suspensão temporária</span> das atividades que envolvam os atos do art. 11</div>\n                  <div class=\"def\"><span class=\"def-t\">IV — Proibição</span> de exercício das atividades que envolvam os atos do art. 11</div>\n                </div>\n                <div class=\"destaque\"><b>Três pegadinhas clássicas aqui:</b> a multa é de <b>até</b> 10% (não é fixa em 10%); o cálculo usa o <b>último exercício</b> (não a média de três anos); e a lei <b>não</b> tem vácuo quanto a empresas estrangeiras — pelo parágrafo único do art. 12, a filial, sucursal, escritório ou estabelecimento situado no País <b>responde solidariamente</b> pelo pagamento da multa.</div>\n              "
            }
          ],
          "flashcards": [
            {
              "tema": "Marco Civil",
              "pergunta": "O que é o Marco Civil da Internet?",
              "resposta": "Lei 12.965/2014 — estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "O que é neutralidade de rede (art. 9º)?",
              "resposta": "O responsável pela transmissão deve tratar de forma isonômica todos os pacotes de dados, sem distinção por conteúdo, origem, destino, serviço, terminal ou aplicação. A discriminação só se admite por requisitos técnicos indispensáveis ou priorização de serviços de emergência."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Prazo de guarda dos registros de CONEXÃO.",
              "resposta": "1 ano, sob sigilo, em ambiente controlado e de segurança, pelo provedor de conexão (art. 13)."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Prazo de guarda dos registros de ACESSO A APLICAÇÕES.",
              "resposta": "6 meses, mantido pelo provedor de aplicações constituído como pessoa jurídica com fins econômicos (art. 15)."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "O provedor de conexão pode guardar registros de acesso a aplicações?",
              "resposta": "Não. É expressamente vedado (art. 14). E o acesso ao conteúdo dos registros, em qualquer caso, depende de ordem judicial."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Qual era a regra do art. 19 sobre responsabilidade por conteúdo de terceiros?",
              "resposta": "O provedor de aplicações só respondia civilmente se, após ordem judicial específica, não tornasse indisponível o conteúdo gerado por terceiro."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "O que o STF decidiu sobre o art. 19 do Marco Civil?",
              "resposta": "Em 26/06/2025 (Temas 987 e 533; RE 1.037.396 e RE 1.057.258), por 8x3, declarou o art. 19 PARCIALMENTE INCONSTITUCIONAL por proteção deficiente. O artigo segue no texto da lei, mas passa a ser interpretado de outro modo enquanto não vier nova legislação: a regra geral passa a ser o art. 21 — responsabilidade a partir de notificação extrajudicial."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Após a decisão do STF, em que caso ainda se exige ordem judicial?",
              "resposta": "Nos crimes contra a honra, em que continua a se aplicar o art. 19 — sem prejuízo da possibilidade de remoção por notificação extrajudicial."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Em que hipóteses o STF fixou presunção de responsabilidade do provedor?",
              "resposta": "Em anúncios e impulsionamentos pagos e em redes artificiais de distribuição (chatbots ou robôs). Nesses casos responde independentemente de notificação, salvo se comprovar que atuou diligentemente e em tempo razoável."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "O que é 'falha sistêmica' na tese do STF?",
              "resposta": "Deixar de adotar medidas adequadas de prevenção ou remoção de conteúdos de um rol taxativo de crimes graves (atos antidemocráticos, terrorismo, induzimento ao suicídio, incitação à discriminação, homofobia/transfobia, crimes contra a mulher, crimes sexuais contra vulneráveis e pornografia infantil, tráfico de pessoas). Conteúdo ilícito isolado e atomizado não configura falha sistêmica — nesse caso incide o art. 21."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "O que prevê o art. 21 do Marco Civil?",
              "resposta": "Responsabilidade subsidiária do provedor de aplicações pela divulgação não autorizada de imagens de nudez ou atos sexuais de caráter privado quando, após NOTIFICAÇÃO EXTRAJUDICIAL do participante ou representante, não remover o conteúdo — sem necessidade de ordem judicial."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Quais as sanções do art. 12 do Marco Civil?",
              "resposta": "Advertência com prazo para medidas corretivas; multa de até 10% do faturamento do grupo econômico no Brasil no último exercício, excluídos tributos; suspensão temporária das atividades; e proibição do exercício das atividades. Podem ser aplicadas isolada ou cumulativamente."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "E se a infratora for empresa estrangeira?",
              "resposta": "Não há lacuna: pelo parágrafo único do art. 12, a filial, sucursal, escritório ou estabelecimento situado no País responde solidariamente pelo pagamento da multa."
            },
            {
              "tema": "Marco Civil",
              "pergunta": "Cite direitos do usuário (art. 7º).",
              "resposta": "Inviolabilidade da intimidade e vida privada; sigilo do fluxo das comunicações e das comunicações privadas armazenadas (salvo ordem judicial); não suspensão da conexão salvo débito; qualidade contratada; informações claras nos contratos; não fornecimento de dados a terceiros sem consentimento; e exclusão definitiva dos dados ao término da relação."
            }
          ],
          "simulados": []
        },
        {
          "id": "delitos-informaticos",
          "nome": "Lei de Delitos Informáticos — Lei nº 12.737/2012",
          "icon": "ti-lock-access",
          "descricao": "A 'Lei Carolina Dieckmann'. Criou o crime de invasão de dispositivo informático (art. 154-A do CP).",
          "resumo": [
            {
              "titulo": "De onde veio",
              "html": "\n                <p>Surgiu após o vazamento de fotos íntimas da atriz Carolina Dieckmann (2012), quando se percebeu que não havia crime específico para punir a invasão de dispositivos e o roubo de dados. O art. 2º inseriu os arts. <b>154-A</b> e <b>154-B</b> no Código Penal; o art. 3º alterou os arts. <b>266</b> (interrupção de serviço telemático ou de informação de utilidade pública) e <b>298</b> (equiparou o cartão de crédito ou débito a documento particular, para fins de falsificação).</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> A lei é de 2012, mas a redação que vale hoje é a da <b>Lei nº 14.155/2021</b>, que endureceu as penas e ampliou o tipo. Estudar a redação antiga é o erro mais caro nessa matéria.</div>\n              "
            },
            {
              "titulo": "O tipo penal do art. 154-A (redação da Lei 14.155/2021)",
              "html": "\n                <p><b>Caput:</b> \"Invadir dispositivo informático <b>de uso alheio</b>, <b>conectado ou não</b> à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do <b>usuário</b> do dispositivo, ou de instalar vulnerabilidades para obter vantagem ilícita.\" <b>Pena: reclusão, de 1 a 4 anos, e multa.</b></p>\n                <div class=\"warn\"><b>O que a Lei 14.155/2021 mudou no caput — e é onde a banca ataca:</b><br>1) A pena saiu de <b>detenção de 3 meses a 1 ano</b> para <b>reclusão de 1 a 4 anos</b>.<br>2) <b>Caiu a elementar \"mediante violação indevida de mecanismo de segurança\"</b> — hoje o crime existe ainda que o dispositivo não tivesse proteção alguma.<br>3) Trocou \"dispositivo alheio\" por \"de uso alheio\" e \"titular\" por \"<b>usuário</b>\" do dispositivo.</div>\n                <div class=\"destaque\"><b>Duas pegadinhas de ouro:</b> (1) o dispositivo <b>não precisa estar conectado</b> à rede — \"conectado ou não\" está no tipo; (2) é <b>crime formal</b>: basta invadir <b>com o fim de</b> obter, adulterar ou destruir. <b>Não</b> se exige que os dados sejam efetivamente obtidos ou adulterados.</div>\n                <p><b>§1º — equiparação:</b> incorre na mesma pena quem <b>produz, oferece, distribui, vende ou difunde</b> dispositivo ou programa de computador com o intuito de permitir a prática da conduta do caput.</p>\n                <p><b>§2º — aumento:</b> aumenta-se a pena de <b>1/3 a 2/3</b> se da invasão resulta <b>prejuízo econômico</b>.</p>\n                <p><b>§3º — forma qualificada:</b> se da invasão resultar a obtenção de conteúdo de comunicações eletrônicas privadas, segredos comerciais ou industriais, informações sigilosas assim definidas em lei, ou o controle remoto não autorizado do dispositivo. <b>Pena: reclusão, de 2 a 5 anos, e multa.</b></p>\n                <p><b>§4º — aumento sobre a qualificada:</b> na hipótese do §3º, aumenta-se de <b>1/3 a 2/3</b> se houver <b>divulgação, comercialização ou transmissão a terceiro</b> dos dados obtidos.</p>\n                <p><b>§5º — aumento pela vítima:</b> aumenta-se de <b>1/3 à metade</b> se o crime for praticado contra: I — Presidente da República, governadores e prefeitos; II — Presidente do STF; III — Presidente da Câmara dos Deputados, do Senado, de Assembleia Legislativa, da Câmara Legislativa do DF ou de Câmara Municipal; IV — dirigente máximo da administração direta e indireta federal, estadual, municipal ou do DF.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Repare que o §5º fala em <b>PRESIDENTE</b> das casas legislativas. Vice-presidente de Câmara, por exemplo, <b>não</b> está no rol — o aumento não incide. É exatamente esse tipo de troca que a FGV usa.</div>\n              "
            },
            {
              "titulo": "Ação penal (art. 154-B) — o ponto que a FGV já cobrou",
              "html": "\n                <p>Nos crimes do art. 154-A, procede-se <b>mediante representação</b> (ação penal pública condicionada), <b>salvo</b> se o crime for cometido contra a <b>administração pública direta ou indireta</b> de qualquer dos Poderes da União, Estados, DF ou Municípios, <b>ou contra empresas concessionárias de serviços públicos</b> — nesses casos, ação penal pública <b>incondicionada</b>.</p>\n                <div class=\"destaque\"><b>Consequência prática:</b> em nenhuma hipótese o art. 154-A admite <b>queixa-crime</b> (que é o instrumento da ação penal <b>privada</b>). A vítima particular <b>representa</b>; o Ministério Público é quem <b>denuncia</b>. Se a questão narrar um ofendido ajuizando queixa-crime, a deflagração está errada.</div>\n              "
            },
            {
              "titulo": "Os outros crimes eletrônicos da Lei 14.155/2021",
              "html": "\n                <p>A mesma lei que endureceu o art. 154-A criou duas figuras que costumam aparecer coladas a ele:</p>\n                <div class=\"defs\">\n                  <div class=\"def\"><span class=\"def-t\">Furto por meio eletrônico (art. 155, §4º-B)</span> furto mediante fraude cometido por dispositivo eletrônico ou informático, conectado ou não à rede, com ou sem violação de mecanismo de segurança ou uso de programa malicioso — <b>reclusão de 4 a 8 anos</b> e multa</div>\n                  <div class=\"def\"><span class=\"def-t\">Fraude eletrônica (art. 171, §2º-A)</span> estelionato cometido com informações fornecidas pela vítima ou por terceiro induzido a erro por redes sociais, contatos telefônicos ou e-mail fraudulento — <b>reclusão de 4 a 8 anos</b> e multa</div>\n                </div>\n                <p><b>Aumentos:</b> no furto eletrônico, de 1/3 a 2/3 se usado servidor mantido <b>fora do território nacional</b>, e de 1/3 ao dobro se praticado <b>contra idoso ou vulnerável</b> (§4º-C). Na fraude eletrônica, de 1/3 a 2/3 pelo servidor no exterior (§2º-B); e o estelionato contra idoso ou vulnerável aumenta de 1/3 ao dobro (§4º).</p>\n                <p><b>Competência (CPP, art. 70, §4º):</b> nos estelionatos praticados mediante depósito, cheque sem fundos ou transferência de valores, a competência é definida pelo <b>domicílio da vítima</b>; havendo pluralidade de vítimas, firma-se pela <b>prevenção</b>.</p>\n              "
            }
          ],
          "flashcards": [
            {
              "tema": "Delitos Informáticos",
              "pergunta": "O que a Lei 12.737/2012 fez no Código Penal?",
              "resposta": "Inseriu os arts. 154-A e 154-B (invasão de dispositivo informático e ação penal) e alterou os arts. 266 (interrupção de serviço telemático) e 298 (equiparou cartão de crédito/débito a documento particular). É a 'Lei Carolina Dieckmann'."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Descreva o crime do art. 154-A na redação atual.",
              "resposta": "Invadir dispositivo informático de uso alheio, conectado ou não à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do usuário do dispositivo, ou de instalar vulnerabilidades para obter vantagem ilícita."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Pena atual do caput do art. 154-A.",
              "resposta": "Reclusão de 1 a 4 anos e multa (Lei 14.155/2021). Antes era detenção de 3 meses a 1 ano."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Ainda é preciso violar mecanismo de segurança para configurar o art. 154-A?",
              "resposta": "Não. A Lei 14.155/2021 REMOVEU a elementar 'mediante violação indevida de mecanismo de segurança'. Hoje o crime se configura ainda que o dispositivo não tivesse proteção."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "O dispositivo precisa estar conectado à rede para haver crime?",
              "resposta": "Não. O tipo diz expressamente 'conectado ou não à rede de computadores'."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "É preciso que os dados sejam efetivamente obtidos ou adulterados?",
              "resposta": "Não. É crime formal: basta invadir COM O FIM de obter, adulterar ou destruir dados, ou de instalar vulnerabilidades. O resultado não precisa se consumar."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "O que prevê o §1º do art. 154-A?",
              "resposta": "Incorre na mesma pena quem produz, oferece, distribui, vende ou difunde dispositivo ou programa de computador com o intuito de permitir a prática da conduta do caput."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Qualificadora do §3º do art. 154-A.",
              "resposta": "Se da invasão resultar obtenção de conteúdo de comunicações eletrônicas privadas, segredos comerciais ou industriais, informações sigilosas definidas em lei, ou controle remoto não autorizado do dispositivo: reclusão de 2 a 5 anos e multa."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Quais são as causas de aumento do art. 154-A?",
              "resposta": "§2º: 1/3 a 2/3 se da invasão resulta prejuízo econômico. §4º: 1/3 a 2/3 na hipótese do §3º se houver divulgação, comercialização ou transmissão a terceiro dos dados. §5º: 1/3 à metade se praticado contra determinadas autoridades."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Contra quais autoridades incide o aumento do §5º do art. 154-A?",
              "resposta": "Presidente da República, governadores e prefeitos; Presidente do STF; Presidente da Câmara dos Deputados, do Senado, de Assembleia Legislativa, da Câmara Legislativa do DF ou de Câmara Municipal; e dirigente máximo da administração direta e indireta federal, estadual, municipal ou do DF. Atenção: só os PRESIDENTES das casas — vice-presidente não está no rol."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Como se procede a ação penal (art. 154-B)?",
              "resposta": "Mediante representação (ação penal pública condicionada), salvo se o crime for cometido contra a administração pública direta ou indireta de qualquer dos Poderes da União, Estados, DF ou Municípios, ou contra empresas concessionárias de serviços públicos — aí é ação penal pública incondicionada."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Cabe queixa-crime no art. 154-A?",
              "resposta": "Não. A queixa-crime é instrumento da ação penal privada, e o art. 154-A é sempre ação penal pública (condicionada à representação ou incondicionada). Quem deflagra é o Ministério Público."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "O que é o furto por meio eletrônico (art. 155, §4º-B)?",
              "resposta": "Furto mediante fraude cometido por meio de dispositivo eletrônico ou informático, conectado ou não à rede, com ou sem violação de mecanismo de segurança ou uso de programa malicioso: reclusão de 4 a 8 anos e multa (Lei 14.155/2021)."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "O que é a fraude eletrônica (art. 171, §2º-A)?",
              "resposta": "Estelionato cometido com informações fornecidas pela vítima ou por terceiro induzido a erro por meio de redes sociais, contatos telefônicos ou e-mail fraudulento: reclusão de 4 a 8 anos e multa."
            },
            {
              "tema": "Delitos Informáticos",
              "pergunta": "Qual o foro competente no estelionato por transferência ou depósito?",
              "resposta": "O do domicílio da vítima (CPP, art. 70, §4º, incluído pela Lei 14.155/2021); havendo pluralidade de vítimas, a competência firma-se pela prevenção."
            }
          ],
          "simulados": []
        }
      ]
    },
    {
      "id": "banco-fgv",
      "nome": "Banco de Questões FGV",
      "icon": "ti-target-arrow",
      "descricao": "Questões de provas reais aplicadas pela FGV, transcritas na íntegra, com gabarito oficial da banca e referência da prova de origem.",
      "materias": [
        {
          "id": "fgv-lai",
          "nome": "LAI — questões FGV",
          "icon": "ti-file-search",
          "descricao": "Questões de LAI extraídas de provas reais aplicadas pela FGV, com gabarito oficial e referência da prova.",
          "resumo": [
            {
              "titulo": "Como usar este bloco",
              "html": "\n                <p>As questões aqui são <b>reproduções literais de provas reais da FGV</b>, com o gabarito conferido contra o gabarito definitivo publicado pela banca. Cada questão traz, na etiqueta, a prova e o número original.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Use este bloco depois de estudar a teoria da matéria — aqui o objetivo é calibrar o <b>estilo</b> da banca, não aprender o conteúdo pela primeira vez.</div>\n                <p><b>O que observar no padrão FGV:</b> enunciados longos e contextualizados; alternativas que trocam uma única palavra do texto legal; e uso frequente de artigos correlatos (a resposta certa costuma ser a literalidade de um parágrafo específico).</p>\n              "
            }
          ],
          "flashcards": [],
          "simulados": [
            {
              "id": "fgv-lai-01",
              "nome": "FGV · DataPrev 2024",
              "descricao": "Questão de LAI da prova FGV para Analista de TI — Desenvolvimento de Software (DataPrev, Edital 01/2024, aplicada em 17/11/2024, Tipo 1). Gabarito definitivo da banca.",
              "nivel": "Prova real",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q36",
                  "text": "A Lei nº 12.527, de 18 de novembro de 2011, dispõe sobre as restrições de acesso à informação. Nesses termos, a lei traz diversos temas que permeiam a classificação da informação. Sobre esse assunto, é correto afirmar que",
                  "options": [
                    "as informações podem ser classificadas como ultrassigilosas, sigilosas ou reservadas, sendo certo que a decisão respectiva é discricionária, porquanto a lei não prevê balizas.",
                    "a decisão de classificação de uma informação é pública e de acesso a qualquer interessado, independentemente de demonstração de interesse, embora classificada a informação.",
                    "findo o prazo de classificação ou ocorrido o evento constituidor do termo final, para que o acesso se torne público são necessários procedimento próprio e decisão específica.",
                    "a informação que verse sobre conduta que implique violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas não pode ser objeto de restrição de acesso.",
                    "a lei permite a desclassificação, mas não a redução de prazo de informação classificada, devendo a reavaliação ser feita pela autoridade classificadora ou outra superior, mediante provocação ou de ofício."
                  ],
                  "answer": 3,
                  "exp": "Gabarito oficial: D. É a literalidade do art. 21, parágrafo único, da LAI. Por que as outras erram: (A) os graus são ultrassecreta, secreta e reservada — e a classificação NÃO é livre: o art. 24, §5º impõe observar o interesse público e usar o critério menos restritivo possível; (B) ARMADILHA MAIS FINA DA QUESTÃO: a decisão de classificação é mantida no mesmo grau de sigilo da informação classificada (art. 28, parágrafo único), logo não é pública. Faz sentido, porque essa decisão contém o assunto, o fundamento, o prazo e a autoridade (art. 28) — se fosse pública, entregaria justamente o que se quis esconder. Cuidado para não confundir: existe SIM publicidade em torno do sigilo, mas ela é outra — pelo art. 30, o órgão publica anualmente o rol dos documentos classificados em cada grau, o rol dos desclassificados nos últimos 12 meses e um relatório estatístico. Guarde assim: a EXISTÊNCIA do sigilo é transparente; o CONTEÚDO da decisão que o criou, não; (C) transcorrido o prazo ou consumado o evento, a informação torna-se AUTOMATICAMENTE de acesso público (art. 24, §4º), sem necessidade de procedimento ou decisão; (E) o art. 29 admite tanto a desclassificação QUANTO a redução do prazo de sigilo — o erro está no 'mas não a redução de prazo'."
                }
              ]
            }
          ]
        },
        {
          "id": "fgv-lgpd",
          "nome": "LGPD — questões FGV",
          "icon": "ti-shield-lock",
          "descricao": "Questões de LGPD extraídas de provas reais aplicadas pela FGV, com gabarito oficial e referência da prova.",
          "resumo": [
            {
              "titulo": "Como usar este bloco",
              "html": "\n                <p>As questões aqui são <b>reproduções literais de provas reais da FGV</b>, com o gabarito conferido contra o gabarito definitivo publicado pela banca. Cada questão traz, na etiqueta, a prova e o número original.</p>\n                <div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Repare que a FGV cobra muito os <b>parágrafos</b> da LGPD (art. 52, §§) e a arquitetura institucional (ANPD x CNPD) — não só os conceitos do art. 5º.</div>\n              "
            }
          ],
          "flashcards": [],
          "simulados": [
            {
              "id": "fgv-lgpd-01",
              "nome": "FGV · DataPrev 2024",
              "descricao": "Questões de LGPD da prova FGV para Analista de TI — Desenvolvimento de Software (DataPrev, Edital 01/2024, aplicada em 17/11/2024, Tipo 1). Gabarito definitivo da banca.",
              "nivel": "Prova real",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q39",
                  "text": "As sanções administrativas estão positivadas na Lei nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais - LGPD), em capítulo intitulado de fiscalização. Com relação ao quadro legal sancionatório mencionado, é correto afirmar que",
                  "options": [
                    "é possível a aplicação de sanções sem a formalização de processo administrativo correspondente, em caso no qual se constate que o agente de tratamento de dados é violador contumaz da citada lei.",
                    "a lei contempla expressamente diversos parâmetros e critérios a serem considerados na aplicação da sanção, como, por exemplo, a gravidade da infração, a boa fé e o fato de o infrator ter nacionalidade estrangeira.",
                    "eventual aplicação da sanção de multa simples a órgão público deverá considerar a arrecadação tributária do ente federativo a que pertença e o orçamento afetado para o desenvolvimento de suas atividades.",
                    "o produto da arrecadação das multas aplicadas pela Autoridade Nacional de Proteção de Dados, inscritas ou não em dívida ativa, será destinado diretamente às pessoas naturais cujo direito à proteção de dados foi violado.",
                    "em caso de vazamento individual, a lei contempla a possibilidade de conciliação direta entre controlador e titular, estando aquele, na hipótese de inexistência de acordo, sujeito à aplicação das penalidades previstas no capítulo mencionado."
                  ],
                  "answer": 4,
                  "exp": "Gabarito oficial: E. É a literalidade do art. 52, §7º da LGPD: os vazamentos individuais ou os acessos não autorizados poderão ser objeto de conciliação direta entre controlador e titular e, caso não haja acordo, o controlador estará sujeito às penalidades do artigo. Por que as outras erram: (A) o art. 52 exige processo administrativo que possibilite a ampla defesa — não há sanção sem processo; (B) a nacionalidade estrangeira do infrator NÃO é critério legal; os parâmetros do art. 52, §1º são gravidade e natureza da infração, boa-fé, vantagem auferida, condição econômica, reincidência, grau do dano, cooperação, adoção de política de boas práticas, entre outros; (C) a lei não prevê essa dosimetria com base em arrecadação tributária do ente ou orçamento afetado; (D) o produto da arrecadação das multas é destinado ao Fundo de Defesa de Direitos Difusos (art. 52, §5º), e não diretamente aos titulares lesados."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q40",
                  "text": "A Lei nº 13.709, de 14 de agosto de 2018, trouxe ao ordenamento jurídico duas figuras jurídicas importantes no sistema de proteção de dados pessoais. Sobre o desenho legal da Autoridade Nacional de Proteção de Dados e o Conselho Nacional de Proteção de Dados Pessoais e da Privacidade, é correto afirmar que",
                  "options": [
                    "atualmente, Conselho Nacional de Proteção de Dados Pessoais e da Privacidade possui natureza de empresa pública federal e a Autoridade Nacional de Proteção de Dados é órgão da administração pública federal.",
                    "o Conselho Diretor é composto de representantes, titulares e suplentes, da Câmara dos Deputados, do Comitê Gestor da Internet do Brasil, do Senado Federal, do Conselho Nacional de Justiça e do Conselho Nacional do Ministério Público.",
                    "o Conselho Nacional de Proteção de Dados Pessoais e da Privacidade possui atribuição de sugerir ações a serem realizadas pela Autoridade Nacional de Proteção de Dados e disseminar o conhecimento sobre a proteção de dados pessoais e da privacidade à população.",
                    "os membros do Conselho Nacional de Proteção de Dados Pessoais e da Privacidade somente perderão seus cargos em virtude de renúncia, condenação judicial transitada em julgado ou pena de demissão decorrente de processo administrativo disciplinar.",
                    "a Autoridade Nacional de Proteção de Dados é uma das integrantes do Conselho Nacional de Proteção de Dados Pessoais e da Privacidade, figurando como conselheira presidente, na hipótese de nomeação pelo Presidente da República."
                  ],
                  "answer": 2,
                  "exp": "Gabarito oficial: C. São atribuições do CNPD previstas no art. 58-B, III e V, da LGPD: sugerir ações a serem realizadas pela ANPD e disseminar o conhecimento sobre a proteção de dados pessoais e da privacidade à população. Por que as outras erram: (A) a ANPD não é mero órgão — é autarquia de natureza especial (a Lei nº 14.460/2022 revogou a redação que a definia como órgão) — e o CNPD não é empresa pública; (B) essa composição descrita é a do PRÓPRIO CNPD (art. 58-A), e não a do Conselho Diretor da ANPD, formado por 5 diretores (art. 55-D); (D) a garantia de só perder o cargo por renúncia, condenação transitada em julgado ou PAD é dos membros do CONSELHO DIRETOR DA ANPD (art. 55-E), não dos conselheiros do CNPD; (E) não há previsão legal de a ANPD integrar o CNPD como conselheira presidente. ATUALIZE SEU REPERTÓRIO: a Lei nº 15.352/2026 rebatizou a ANPD de 'Autoridade' para 'AGÊNCIA' Nacional de Proteção de Dados e a vinculou ao Ministério da Justiça e Segurança Pública (antes, à Presidência da República). O gabarito da questão não muda — a ANPD continua não sendo 'órgão' —, mas em 2026 a banca pode cobrar a nova redação."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
