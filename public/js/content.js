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
              "titulo": "Sujeito e núcleo do sujeito",
              "html": "\n<p>O <b>sujeito</b> é o termo sobre quem a frase declara algo — em geral quem pratica ou protagoniza a ação do verbo. Ele costuma ser um <b>grupo de palavras</b>, não uma só. O <b>núcleo</b> é a palavra <b>principal</b> desse grupo: a que carrega o sentido central e <b>comanda a concordância</b> do verbo. O resto (artigos, adjetivos, complementos) são acessórios pendurados nesse núcleo.</p>\n<p>Exemplo: <i>“<b>Os dados do relatório mensal</b> foram revisados.”</i></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Sujeito (grupo todo)</span> Os dados do relatório mensal</div>\n  <div class=\"def\"><span class=\"def-t\">Núcleo</span> dados</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Como achar o núcleo: pergunte <b>“o quê / quem”</b> antes do verbo e reduza o grupo à palavra que <b>não dá pra tirar</b>. “Foram revisados o quê? → dados.” Tira “Os” e “do relatório mensal” e a frase se sustenta (“Dados foram revisados”); tira “dados” e desmonta.</div>\n<p>O núcleo do sujeito é <b>sempre</b> um substantivo, um pronome ou uma palavra substantivada — por isso enxergar classes é pré-requisito para achá-lo.</p>\n<div class=\"warn\"><b>Pegadinha nº 1 da FGV:</b> o verbo concorda com o <b>núcleo</b>, não com a palavra mais próxima dele. Em “Os <b>dados</b> do relatório mensal <b>foram</b> revisados”, a banca gruda “relatório” (singular) no verbo para induzir você a escrever “foi”. Quem manda é <b>dados</b> → <b>foram</b>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> Analogia de dev: o sujeito é um <b>objeto com vários campos</b>; o núcleo é a <b>chave primária</b>. Adjetivos e complementos são atributos secundários — o verbo só “olha” para a chave primária ao decidir entre singular e plural.</div>\n"
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
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que é</span> Palavra <b>invariável</b> que <b>liga</b> dois termos, criando entre eles uma relação de dependência (o segundo completa o primeiro).</div>\n  <div class=\"def\"><span class=\"def-t\">Como identificar</span> Fica <b>entre dois termos</b> e <b>não pode ser retirada</b> sem quebrar a frase. Vale decorar a lista fechada — ela é curta.</div>\n  <div class=\"def\"><span class=\"def-t\">Exemplo</span> <i>“Gosto <b>de</b> música.” / “Viagem <b>a</b> Recife.” / “Confio <b>em</b> você.”</i></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Lista completa:</b> a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás. São só 17 — decore, porque regência e crase vivem delas.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-music\"></i> <b>Macete das 4 batidas:</b> recite como um rap, batendo a mão em 4 tempos (4+4+4+5 = 17):<br><b>1)</b> a · ante · após · até<br><b>2)</b> com · contra · de · desde<br><b>3)</b> em · entre · para · perante<br><b>4)</b> por · sem · sob · sobre · trás<br>Os sons se puxam: <b>de→desde</b> e <b>sob→sobre</b> são “curta→esticada”; <b>em/entre</b> e <b>para/perante</b> rimam dentro da batida. Se contar menos de 17, faltou uma.</div>\n"
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
            },
            {
              "tema": "Sintaxe",
              "pergunta": "O que é o sujeito de uma frase?",
              "resposta": "O termo sobre quem se declara algo — em geral quem pratica ou protagoniza a ação do verbo. Costuma ser um grupo de palavras."
            },
            {
              "tema": "Sintaxe",
              "pergunta": "O que é o núcleo do sujeito?",
              "resposta": "A palavra principal do grupo que forma o sujeito — a que carrega o sentido central e comanda a concordância do verbo. É sempre substantivo, pronome ou palavra substantivada."
            },
            {
              "tema": "Sintaxe",
              "pergunta": "Como identificar o núcleo do sujeito?",
              "resposta": "Pergunte 'o quê / quem' antes do verbo e reduza o grupo à palavra que não pode ser retirada sem desmontar a frase."
            },
            {
              "tema": "Sintaxe",
              "pergunta": "Com o que o verbo concorda: com o núcleo do sujeito ou com a palavra mais próxima?",
              "resposta": "Com o núcleo. Em 'Os dados do relatório mensal foram revisados', o verbo vai ao plural por causa de 'dados', não do 'relatório' que está mais perto."
            },
            {
              "tema": "Preposição",
              "pergunta": "Macete para decorar as 17 preposições.",
              "resposta": "Recite em 4 batidas (4+4+4+5): (1) a/ante/após/até (2) com/contra/de/desde (3) em/entre/para/perante (4) por/sem/sob/sobre/trás."
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
                  "text": "Em “Ela ficou **meio** nervosa antes da prova”, a palavra destacada pertence à classe:",
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
                  "text": "Em “Havia **bastantes** candidatos na sala”, a palavra destacada pertence à classe:",
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
                  "text": "Em “O **andar** do prédio estava vazio”, a palavra destacada pertence à classe:",
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
                  "text": "Em “Trabalhamos muito, **mas** o resultado foi fraco”, a palavra destacada pertence à classe:",
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
                  "text": "Em “Os **dados** do relatório mensal foram revisados”, o núcleo do sujeito é:",
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
                  "text": "Em “Comprei **um**, não dois”, a palavra destacada pertence à classe:",
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
                  "text": "Em “**Todos** os candidatos aprovados receberão o resultado”, a palavra destacada pertence à classe:",
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
      "id": "raciocinio-logico",
      "nome": "Raciocínio Lógico",
      "icon": "ti-math-symbols",
      "descricao": "5 questões no Módulo I. Estruturas lógicas, argumentação, lógica sentencial (proposições, tabelas-verdade, equivalências e diagramas), lógica de 1ª ordem e problemas aritméticos, geométricos e matriciais.",
      "materias": [
        {
          "id": "logica-sentencial",
          "nome": "Lógica sentencial: proposições, conectivos e o condicional",
          "icon": "ti-logic-and",
          "descricao": "A base do Raciocínio Lógico da FGV: o que é proposição, os conectivos, tabela-verdade e o “se… então” por inteiro — disfarces, contrapositiva, negação e as duas armadilhas clássicas.",
          "resumo": [
            {
              "titulo": "De onde veio: lógica é julgar frases, não fazer contas",
              "html": "\n<p>Por volta do <b>século IV a.C.</b>, <b>Aristóteles</b> percebeu algo que mudou tudo: certos raciocínios são corretos por causa da <b>forma</b>, não do assunto. “Todo A é B; C é A; logo C é B” funciona com qualquer A, B e C — sejam gregos, cachorros ou servidores da DataPrev.</p>\n<p>Em <b>1847</b>, <b>George Boole</b> traduziu essa ideia para álgebra: cada frase vira uma variável que só pode valer <b>1 (verdadeiro)</b> ou <b>0 (falso)</b>. É literalmente a base do <code>if</code> e do circuito digital.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> Vantagem de quem programa: você já faz isso todo dia em <code>if (a &amp;&amp; !b)</code>. Raciocínio lógico de concurso é a mesma máquina, com as frases escritas em português.</div>\n"
            },
            {
              "titulo": "O que é uma proposição",
              "html": "\n<p><b>Proposição é toda frase que dá para julgar como verdadeira ou falsa.</b> Esse é o teste inteiro: leia a frase e pergunte “dá para dizer se isso é verdade ou mentira?”.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">É proposição</span> “A DataPrev é uma empresa pública” · “2 + 2 = 5” (falsa, mas julgável) · “Nenhum candidato foi aprovado” (negativa, mas julgável)</div>\n  <div class=\"def\"><span class=\"def-t\">Não é proposição</span> <b>ordem</b> (“Estude duas horas por dia”) · <b>pergunta</b> (“Que horas são?”) · <b>exclamação</b> (“Que prova difícil!”) · <b>sentença aberta</b> (“y − 1 = 9”, porque o y é desconhecido)</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Decore o descarte: <b>ordem, pergunta, exclamação e frase com incógnita ficam de fora</b>. O resto é proposição.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Ser negativa não desqualifica: “Nenhum candidato foi aprovado” <b>é</b> proposição. Ela só pode ser falsa — e poder ser falsa é justamente o que define uma proposição.</div>\n"
            },
            {
              "titulo": "Letras e valor lógico",
              "html": "\n<p>Na prova as frases são compridas. Para não se perder, apelide cada uma com uma letra: <b>p, q, r, s</b>. É a mesma ideia de guardar um valor numa variável.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p</span> “Ana estuda”</div>\n  <div class=\"def\"><span class=\"def-t\">q</span> “Ana é aprovada”</div>\n</div>\n<p>Toda proposição tem <b>um</b> valor lógico, nunca os dois: <b>V</b> (verdadeira) ou <b>F</b> (falsa). Não existe meio-termo.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Hábito que evita quase todo erro:</b> antes de responder qualquer questão, escreva no rascunho o que é p e o que é q, com as palavras do enunciado. Frase comprida com dois sujeitos diferentes é onde os termos se embolam.</div>\n"
            },
            {
              "titulo": "Tabela-verdade: todos os cenários de uma vez",
              "html": "\n<p>A prova quase nunca diz se p é verdadeira ou falsa. Então testamos <b>todos os cenários possíveis</b>. É só isso que uma tabela-verdade é: a lista de mundos possíveis.</p>\n<p>Com duas proposições existem 4 cenários: (V,V), (V,F), (F,V), (F,F). Cada linha é um mundo.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Número de linhas</span> <b>2ⁿ</b>, onde n é a quantidade de proposições simples diferentes. 2 frases → 4 linhas · 3 frases → 8 linhas · 4 frases → 16 linhas</div>\n  <div class=\"def\"><span class=\"def-t\">Precedência</span> primeiro <b>~</b>, depois <b>∧</b> e <b>∨</b>, depois <b>→</b>, por último <b>↔</b>. Parênteses mandam em tudo.</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> É a mesma conta de bits: cada proposição é um bit, e 2ⁿ é o número de combinações.</div>\n"
            },
            {
              "titulo": "Os conectivos e suas regras",
              "html": "\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~p (negação)</span> inverte. Se p é V, ~p é F. <b>Negar duas vezes volta ao original</b> (“não é verdade que Ana não estuda” = “Ana estuda”), igual a <code>!!x</code>.</div>\n  <div class=\"def\"><span class=\"def-t\">p ∧ q (e)</span> só é <b>V</b> quando as <b>duas</b> são V. É o cadeado: falhou uma, falhou tudo.</div>\n  <div class=\"def\"><span class=\"def-t\">p ∨ q (ou)</span> só é <b>F</b> quando as <b>duas</b> são F. Basta uma verdadeira para salvar a frase.</div>\n  <div class=\"def\"><span class=\"def-t\">ou p ou q (ou exclusivo)</span> V quando os valores são <b>diferentes</b>; exige exatamente um dos dois.</div>\n  <div class=\"def\"><span class=\"def-t\">p → q (se… então)</span> só é <b>F</b> no caso <b>V → F</b>. Nos outros três, V.</div>\n  <div class=\"def\"><span class=\"def-t\">p ↔ q (se e somente se)</span> V quando os dois valores são <b>iguais</b>.</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Disfarces do “e”:</b> <i>mas, porém, contudo, todavia, entretanto, embora, ainda que, apesar de</i> — todos viram <b>∧</b>. A FGV troca a palavra só para ver se você percebe que a regra é a mesma. “Ana estuda, <b>mas</b> não é aprovada” = <b>p ∧ ~q</b>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Conferência dos “nãos”:</b> conte quantos “não” a frase tem em português e confira se a sua tradução tem a mesma quantidade de <b>~</b>. Sumir com um “não” é o erro de tradução mais comum.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> O <b>ou</b> da lógica é <b>inclusivo</b> — aceita os dois ao mesmo tempo. Só vira exclusivo quando a frase abre com a estrutura “<b>ou</b>… <b>ou</b>…”.</div>\n"
            },
            {
              "titulo": "O condicional é uma promessa",
              "html": "\n<p>Em <b>p → q</b>, quem vem depois do “se” é o <b>antecedente</b> (a condição) e quem vem depois do “então” é o <b>consequente</b> (o resultado).</p>\n<p><b>A ideia central: um condicional é uma promessa. E a única forma de uma promessa ser falsa é prometer e não cumprir.</b></p>\n<p>Exemplo: “Se chover, então eu levo guarda-chuva”.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Choveu e levei (V,V)</span> cumpri → <b>V</b></div>\n  <div class=\"def\"><span class=\"def-t\">Choveu e não levei (V,F)</span> menti → <b>F</b> · única linha falsa da tabela</div>\n  <div class=\"def\"><span class=\"def-t\">Não choveu e levei (F,V)</span> exagero não é mentira → <b>V</b></div>\n  <div class=\"def\"><span class=\"def-t\">Não choveu e não levei (F,F)</span> promessa não testada → <b>V</b></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Método rápido na prova: <b>procure o padrão V → F</b>. Achou, é falso. Não achou, é verdadeiro.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Quando o antecedente é <b>falso</b>, a promessa <b>não foi testada</b> — e frase não testada é <b>verdadeira</b>. É contraintuitivo e é exatamente onde a banca derruba candidato.</div>\n"
            },
            {
              "titulo": "O condicional disfarçado",
              "html": "\n<p>A FGV raramente escreve “se… então” com essas palavras. Todas as formas abaixo são <b>p → q</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Se p, então q</span> Se chove, então levo guarda-chuva</div>\n  <div class=\"def\"><span class=\"def-t\">Quando p, q</span> Quando chove, levo guarda-chuva</div>\n  <div class=\"def\"><span class=\"def-t\">Sempre que p, q</span> Sempre que chove, levo guarda-chuva</div>\n  <div class=\"def\"><span class=\"def-t\">Toda vez que p, q</span> Toda vez que chove, levo guarda-chuva</div>\n  <div class=\"def\"><span class=\"def-t\">q, se p</span> Levo guarda-chuva, se chove</div>\n  <div class=\"def\"><span class=\"def-t\">Todo A é B</span> Todo analista da DataPrev é servidor público</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> A <b>ordem em que as partes aparecem não define quem é o p</b>. Quem define é a palavra <b>se</b>: o que estiver colado nela é sempre o antecedente, esteja no começo ou no fim da frase.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> “<b>Todo A é B</b>” vira “<b>se</b> é A, <b>então</b> é B”. No diagrama de Venn, é o círculo de A inteirinho dentro do círculo de B.</div>\n"
            },
            {
              "titulo": "As quatro versões: recíproca, inversa e contrapositiva",
              "html": "\n<p>Partindo de <b>p → q</b> dá para fabricar mais três frases. <b>Só uma</b> significa a mesma coisa:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Direta · p → q</span> Se chove, levo guarda-chuva</div>\n  <div class=\"def\"><span class=\"def-t\">Recíproca · q → p</span> Se levo guarda-chuva, então chove — <b>NÃO</b> equivale</div>\n  <div class=\"def\"><span class=\"def-t\">Inversa · ~p → ~q</span> Se não chove, não levo guarda-chuva — <b>NÃO</b> equivale</div>\n  <div class=\"def\"><span class=\"def-t\">Contrapositiva · ~q → ~p</span> Se não levo guarda-chuva, então não chove — <b>EQUIVALE</b></div>\n</div>\n<p>A contrapositiva é feita com <b>duas mexidas ao mesmo tempo</b>: inverte a ordem <b>e</b> nega os dois lados. Fazer só uma das duas coisas produz uma das armadilhas.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Recíproca e inversa são equivalentes <b>entre si</b> — as duas erradas erram juntas. Se as duas aparecerem como alternativas, nenhuma pode ser a resposta.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Condicional é <b>via de mão única</b>. “Se chove, levo guarda-chuva” não autoriza “se levo guarda-chuva, está chovendo” — posso estar levando por precaução.</div>\n"
            },
            {
              "titulo": "Negar um condicional",
              "html": "\n<p><b>Negar p → q é afirmar p ∧ ~q.</b> O antecedente fica <b>do jeito que estava</b>; só o consequente é negado. E a seta <b>desaparece</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Frase</span> Se o sistema falhar, então o alerta é disparado</div>\n  <div class=\"def\"><span class=\"def-t\">Negação</span> O sistema <b>falhou</b> e o alerta <b>não</b> foi disparado</div>\n</div>\n<p>Por que o p continua afirmado: para flagrar a promessa sendo quebrada, a <b>condição precisa ter acontecido</b>. Num dia em que o sistema nem falhou, não há como acusar ninguém de mentira.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A negação vem sempre em par, ligado por “e”.</b> Se a sua resposta tem um fato só (“o alerta não foi disparado”), faltou metade — e a FGV oferece essa metade como alternativa.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Dois sinais visuais que separam tudo: <b>negação nunca tem seta</b> (vira “e”); <b>contrapositiva sempre tem seta</b> (com dois “nãos” e a ordem trocada).</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Teste infalível de negação:</b> a negação tem de ser <b>falsa</b> exatamente quando a original é <b>verdadeira</b>. Se você conseguir imaginar um cenário em que as duas são verdadeiras ao mesmo tempo, a sua “negação” está errada.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Olhe o verbo do enunciado: <b>“equivalente a” → contrapositiva</b> (com seta). <b>“negação de” ou “é falsa” → p ∧ ~q</b> (com “e”).</div>\n"
            },
            {
              "titulo": "Os quatro raciocínios: dois válidos e duas armadilhas",
              "html": "\n<p>Com a promessa <b>p → q</b> valendo, só existem quatro coisas que você pode descobrir:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Descobriu que p aconteceu</span> conclui <b>q</b> — <b>válido</b> (modus ponens)</div>\n  <div class=\"def\"><span class=\"def-t\">Descobriu que q NÃO aconteceu</span> conclui <b>~p</b> — <b>válido</b> (modus tollens)</div>\n  <div class=\"def\"><span class=\"def-t\">Descobriu que p NÃO aconteceu</span> <b>nada se conclui</b> — armadilha (negar o antecedente)</div>\n  <div class=\"def\"><span class=\"def-t\">Descobriu que q aconteceu</span> <b>nada se conclui</b> — armadilha (afirmar o consequente)</div>\n</div>\n<p>O desenho: você só conclui indo <b>para frente com a condição ligada</b>, ou <b>para trás com o resultado desligado</b>. Qualquer outro caminho é armadilha.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> No Venn: “Todo analista é servidor”. Quem está <b>fora</b> do círculo grande está obrigatoriamente fora do pequeno (<b>conclui</b>). Quem está <b>dentro</b> do grande pode estar no miolo ou não (<b>nada se conclui</b>).</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> “Não sei” é resposta certa em lógica. Nas duas armadilhas, a alternativa correta costuma ser “nada se pode concluir” — e o candidato erra porque quer que a frase diga mais do que ela diz.</div>\n"
            },
            {
              "titulo": "Premissa é lei — e condicional não é causa",
              "html": "\n<p>Duas confusões que travam quase todo mundo no começo:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">A premissa é lei</span> Se o enunciado apresenta uma frase, você a <b>aceita como verdadeira</b> e trabalha dentro desse mundo, mesmo que ela seja irrealista. “Se Ana estuda, então Ana é aprovada” é falsa no mundo real — mas, se a questão manda tratá-la como verdadeira, o caso “estudou e não passou” simplesmente não existe ali.</div>\n  <div class=\"def\"><span class=\"def-t\">Condicional é companhia, não causa</span> “Se A, então B” diz que onde há A há B. <b>Não</b> diz que B acontece <i>por causa</i> de A. “Se chove, o chão está molhado” tem como contrapositiva “se o chão não está molhado, não está chovendo” — e ninguém diria que o chão seco causou a ausência de chuva.</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Quando a conclusão parecer estranha, troque o exemplo por um obviamente verdadeiro: “Se é cachorro, então é mamífero” → “se não é mamífero, não é cachorro”. A mecânica é a mesma; o que incomodava era a qualidade da premissa.</div>\n"
            },
            {
              "titulo": "Tabela de negações e equivalências (com os apelidos)",
              "html": "\n<p><b>Regra que unifica tudo:</b> em toda <b>negação</b>, o conectivo troca de time — o <b>e</b> vira <b>ou</b>, o <b>ou</b> vira <b>e</b>, e a <b>seta vira e</b>. Se você negou e o conectivo continuou o mesmo, errou.</p>\n<p><b>Negações</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~(p ∧ q) = ~p ∨ ~q · NENE</span> nega as duas partes e o <b>E vira OU</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p ∨ q) = ~p ∧ ~q · NENE</span> nega as duas partes e o <b>OU vira E</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p → q) = p ∧ ~q · MANÉ</span> <b>MA</b>ntém a 1ª, <b>NE</b>ga a 2ª, a seta vira <b>E</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p ↔ q) = p ↔ ~q</span> nega <b>só um</b> dos lados</div>\n  <div class=\"def\"><span class=\"def-t\">~(~p) = p</span> negar duas vezes volta ao original</div>\n</div>\n<p><b>Equivalências</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p → q = ~q → ~p · contrapositiva</span> inverte a ordem <b>e</b> nega os dois; a seta continua</div>\n  <div class=\"def\"><span class=\"def-t\">p → q = ~p ∨ q · NEMA</span> <b>NE</b>ga a 1ª, <b>MA</b>ntém a 2ª, a seta vira <b>OU</b></div>\n  <div class=\"def\"><span class=\"def-t\">p ↔ q = (p → q) ∧ (q → p)</span> bicondicional é ida <b>e</b> volta</div>\n  <div class=\"def\"><span class=\"def-t\">NÃO equivalem</span> recíproca (q → p) e inversa (~p → ~q) — as duas armadilhas</div>\n</div>\n<p><b>Quantificadores</b> — negar o exigente gera o folgado</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Todo A é B → Algum A NÃO é B</span> basta <b>um</b> contraexemplo para derrubar um “todo”</div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B → Nenhum A é B</span> para derrubar “algum”, tem de zerar todos</div>\n  <div class=\"def\"><span class=\"def-t\">Nenhum A é B → Algum A é B</span> basta <b>um</b> caso para derrubar um “nenhum”</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>MANÉ e NEMA são as mesmas sílabas invertidas</b> — é onde todo mundo troca. Leia o apelido da esquerda para a direita: ele diz o que acontece com a <b>1ª parte</b> e depois com a <b>2ª</b>. <b>MA-NÉ</b>: mantém, nega → é a <b>negação</b>, resultado com <b>E</b>. <b>NE-MA</b>: nega, mantém → é a <b>equivalência</b>, resultado com <b>OU</b>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Conferidor de reserva: <b>negação vira “e”</b> (exigente: precisa dos dois fatos para acusar a mentira); <b>equivalência vira “ou”</b> (folgada: só reescreve a promessa).</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Teste universal de negação:</b> tente imaginar um cenário em que a frase original e a sua resposta sejam verdadeiras <b>ao mesmo tempo</b>. Se conseguir, a sua “negação” está errada.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> Por que a negação do condicional é MANÉ e não uma regra à parte: <code>p → q</code> equivale a <code>~p ∨ q</code> (NEMA); aplicando De Morgan, <code>~(~p ∨ q) = p ∧ ~q</code>. É De Morgan aplicado — não há nada novo para decorar.</div>\n"
            }
          ],
          "flashcards": [
            {
              "tema": "Proposições",
              "pergunta": "O que é uma proposição?",
              "resposta": "Toda frase que dá para julgar como verdadeira ou falsa. Ficam de fora: ordens, perguntas, exclamações e sentenças abertas (com incógnita)."
            },
            {
              "tema": "Proposições",
              "pergunta": "“y − 1 = 9” é proposição?",
              "resposta": "Não. É sentença aberta: enquanto o y for desconhecido, não dá para julgar se é V ou F."
            },
            {
              "tema": "Proposições",
              "pergunta": "“Nenhum candidato foi aprovado” é proposição?",
              "resposta": "Sim. Ser negativa não desqualifica — dá para julgar como V ou F."
            },
            {
              "tema": "Conectivos",
              "pergunta": "Quando p ∧ q (e) é verdadeira?",
              "resposta": "Só quando as duas são verdadeiras. Falhou uma, falhou tudo."
            },
            {
              "tema": "Conectivos",
              "pergunta": "Quando p ∨ q (ou) é falsa?",
              "resposta": "Só quando as duas são falsas. Basta uma verdadeira para a frase toda ser verdadeira."
            },
            {
              "tema": "Conectivos",
              "pergunta": "Quais palavras equivalem ao “e” (∧) na prova?",
              "resposta": "mas, porém, contudo, todavia, entretanto, embora, ainda que, apesar de."
            },
            {
              "tema": "Conectivos",
              "pergunta": "Como traduzir “Ana estuda, mas não é aprovada”?",
              "resposta": "p ∧ ~q. “Mas” é ∧ e o “não” obriga o ~ no q."
            },
            {
              "tema": "Tabela-verdade",
              "pergunta": "Quantas linhas tem a tabela-verdade de uma expressão com n proposições simples?",
              "resposta": "2ⁿ. Com 2 frases → 4 linhas; 3 → 8; 4 → 16."
            },
            {
              "tema": "Tabela-verdade",
              "pergunta": "Qual a ordem de precedência dos conectivos?",
              "resposta": "~ primeiro; depois ∧ e ∨; depois →; por último ↔. Parênteses mandam em tudo."
            },
            {
              "tema": "Condicional",
              "pergunta": "Quando p → q é falsa?",
              "resposta": "Somente no caso V → F: antecedente verdadeiro e consequente falso. Nos outros três casos é verdadeira."
            },
            {
              "tema": "Condicional",
              "pergunta": "Por que p → q é verdadeira quando p é falsa?",
              "resposta": "Porque a promessa não foi testada. Sem a condição, não há como quebrar o compromisso — e promessa não quebrada é verdadeira."
            },
            {
              "tema": "Condicional",
              "pergunta": "Quais são os disfarces de “se… então”?",
              "resposta": "quando, sempre que, toda vez que, “q, se p” e “todo A é B”."
            },
            {
              "tema": "Condicional",
              "pergunta": "Em “Levo guarda-chuva, se chove”, quem é o antecedente?",
              "resposta": "“Chove”. Quem define o antecedente é a palavra “se”, não a ordem em que as partes aparecem."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Qual é a contrapositiva de p → q?",
              "resposta": "~q → ~p. Inverte a ordem E nega os dois lados. É a única das três variações que equivale à original."
            },
            {
              "tema": "Equivalências",
              "pergunta": "A recíproca (q → p) e a inversa (~p → ~q) equivalem à original?",
              "resposta": "Não. Elas equivalem entre si, mas nenhuma das duas equivale a p → q."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Qual a equivalente de “Todo analista da DataPrev é servidor público”?",
              "resposta": "“Quem não é servidor público não é analista da DataPrev” (contrapositiva)."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual é a negação de p → q?",
              "resposta": "p ∧ ~q. O antecedente fica afirmado, o consequente é negado, e a seta desaparece."
            },
            {
              "tema": "Negações",
              "pergunta": "A frase “Se o sistema falhar, o alerta é disparado” é falsa. O que aconteceu?",
              "resposta": "O sistema falhou E o alerta não foi disparado. Condicional falso entrega os dois fatos com certeza."
            },
            {
              "tema": "Negações",
              "pergunta": "Como testar se uma frase é mesmo a negação de outra?",
              "resposta": "Se existe um cenário em que as duas são verdadeiras ao mesmo tempo, não é negação. A negação tem de ser falsa exatamente quando a original é verdadeira."
            },
            {
              "tema": "Argumentação",
              "pergunta": "O que é modus ponens?",
              "resposta": "Sabendo que p → q é verdadeira e que p aconteceu, conclui-se q. É o único caminho válido “para frente”."
            },
            {
              "tema": "Argumentação",
              "pergunta": "O que é modus tollens?",
              "resposta": "Sabendo que p → q é verdadeira e que q NÃO aconteceu, conclui-se ~p. É o caminho válido “para trás”, negando."
            },
            {
              "tema": "Argumentação",
              "pergunta": "Sei que p → q é verdadeira e que p NÃO aconteceu. O que concluo?",
              "resposta": "Nada. É a falácia de negar o antecedente — a frase fica calada quando a condição não ocorre."
            },
            {
              "tema": "Argumentação",
              "pergunta": "Sei que p → q é verdadeira e que q aconteceu. O que concluo sobre p?",
              "resposta": "Nada. É a falácia de afirmar o consequente."
            },
            {
              "tema": "Método",
              "pergunta": "Como não confundir os termos numa questão de condicional?",
              "resposta": "Antes de responder, escreva no rascunho “p = …” e “q = …” com as palavras do enunciado, e só depois monte a resposta."
            },
            {
              "tema": "Método",
              "pergunta": "“Equivalente a” e “negação de” pedem a mesma coisa?",
              "resposta": "Não. “Equivalente a” → contrapositiva (~q → ~p, com seta). “Negação de” ou “é falsa” → p ∧ ~q (com “e”, sem seta)."
            },
            {
              "tema": "Mnemônicos",
              "pergunta": "NENE — o que é?",
              "resposta": "Negação de “e” e de “ou” (De Morgan): NEga as duas partes e troca o conectivo. ~(p ∧ q) = ~p ∨ ~q e ~(p ∨ q) = ~p ∧ ~q."
            },
            {
              "tema": "Mnemônicos",
              "pergunta": "MANÉ — o que é?",
              "resposta": "Negação do condicional: MAntém o antecedente, NEga o consequente, e a seta vira “e”. ~(p → q) = p ∧ ~q."
            },
            {
              "tema": "Mnemônicos",
              "pergunta": "NEMA — o que é?",
              "resposta": "Equivalência do condicional em disjunção: NEga o antecedente, MAntém o consequente, e a seta vira “ou”. p → q = ~p ∨ q."
            },
            {
              "tema": "Mnemônicos",
              "pergunta": "Como não trocar MANÉ com NEMA?",
              "resposta": "Leia da esquerda para a direita: o apelido diz o que acontece com a 1ª parte e depois com a 2ª. MA-NÉ (mantém, nega) é a NEGAÇÃO e dá “e”. NE-MA (nega, mantém) é a EQUIVALÊNCIA e dá “ou”."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual a regra que vale para toda negação?",
              "resposta": "O conectivo troca de time: o “e” vira “ou”, o “ou” vira “e” e a seta vira “e”. Se você negou e o conectivo continuou igual, errou."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual a negação de “O sistema é rápido ou é seguro”?",
              "resposta": "“O sistema não é rápido e não é seguro”. Para derrubar um “ou”, é preciso derrubar as duas partes."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual a negação de “Ana estuda e trabalha”?",
              "resposta": "“Ana não estuda ou não trabalha”. Basta uma das duas falhar para desmentir um “e”."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual a negação de p ↔ q?",
              "resposta": "p ↔ ~q — nega só um dos lados. Equivale ao “ou exclusivo”."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Qual a negação de “Todo A é B”?",
              "resposta": "“Algum A NÃO é B”. Não é “nenhum A é B” — basta um contraexemplo para derrubar um “todo”."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Qual a negação de “Algum A é B”? E de “Nenhum A é B”?",
              "resposta": "A negação de “algum A é B” é “nenhum A é B”. A negação de “nenhum A é B” é “algum A é B”."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Como transformar p → q num “ou”?",
              "resposta": "Negue o antecedente e mantenha o consequente: ~p ∨ q (NEMA). “Se chove, levo guarda-chuva” = “ou não chove, ou levo guarda-chuva”."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Como escrever p ↔ q com condicionais?",
              "resposta": "(p → q) ∧ (q → p) — a bicondicional é ida E volta."
            }
          ],
          "simulados": [
            {
              "id": "logica-sentencial-01",
              "nome": "Aula 1 · Proposições, conectivos e condicional",
              "descricao": "Os exercícios trabalhados na aula, na ordem em que foram vistos: identificar proposições, traduzir para símbolos, calcular valor lógico e dominar o “se… então” (modus ponens, modus tollens, as duas falácias, contrapositiva e negação).",
              "nivel": "Base",
              "questoes": [
                {
                  "type": "ce",
                  "tag": "Proposições",
                  "text": "A frase “Estude duas horas por dia” é uma proposição.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. É uma ORDEM, e ordem não pode ser julgada como verdadeira ou falsa — ninguém consegue dizer “isso é mentira”. Ficam de fora do conceito de proposição: ordens, perguntas, exclamações e sentenças abertas."
                },
                {
                  "type": "ce",
                  "tag": "Proposições",
                  "text": "A frase “y − 1 = 9” é uma proposição.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. É uma SENTENÇA ABERTA: enquanto o y for desconhecido, não dá para julgar se é V ou F. Se o enunciado dissesse quanto vale y, aí sim viraria proposição."
                },
                {
                  "type": "ce",
                  "tag": "Proposições",
                  "text": "A frase “Nenhum candidato foi aprovado” é uma proposição.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Ser negativa não desqualifica. O teste é único: dá para dizer se é verdade ou mentira? Dá. Logo, é proposição (podendo ser falsa)."
                },
                {
                  "type": "mc",
                  "tag": "Tradução · disfarces do “e”",
                  "text": "Sendo p = “Ana estuda” e q = “Ana é aprovada”, a tradução de “Ana estuda, mas não é aprovada” é",
                  "options": [
                    "p ∧ q",
                    "p ∧ ~q",
                    "p ∨ ~q",
                    "~p ∧ q",
                    "p → ~q"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Fatie a frase: “Ana estuda” = p; “mas” = ∧ (mas, porém, contudo, embora e afins são todos “e”); “não é aprovada” = ~q. Resultado: p ∧ ~q. Conferência que evita o erro mais comum: conte os “nãos” do português e veja se a sua resposta tem a mesma quantidade de ~."
                },
                {
                  "type": "mc",
                  "tag": "Valor lógico",
                  "text": "Sendo p verdadeira e q falsa, o valor lógico de ~p ∧ q é",
                  "options": [
                    "Verdadeiro",
                    "Falso"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B (falso). Passo a passo, sempre trocando as letras pelos valores ANTES de decidir: ~p = o contrário de V = F. Substituindo: F ∧ F. A regra do “e” exige os dois verdadeiros, e aqui nenhum é. Logo, F. Cuidado: a expressão não é p, é ~p — o ~ age antes do ∧."
                },
                {
                  "type": "mc",
                  "tag": "Valor lógico",
                  "text": "Sendo p verdadeira e q falsa, o valor lógico de p ∨ q é",
                  "options": [
                    "Verdadeiro",
                    "Falso"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. Substituindo: V ∨ F. O “ou” só é falso quando as DUAS partes são falsas; basta uma verdadeira para salvar a frase inteira."
                },
                {
                  "type": "mc",
                  "tag": "Modus ponens",
                  "text": "A proposição “Se Ana estuda, então Ana é aprovada” é verdadeira. Sabe-se que Ana estudou. Conclui-se que",
                  "options": [
                    "Ana foi aprovada",
                    "Ana não foi aprovada",
                    "Ana pode ou não ter sido aprovada",
                    "a proposição inicial é falsa",
                    "Ana estudou pouco"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. A condição (antecedente) aconteceu, então a promessa foi acionada e o consequente TEM de ocorrer. Esse é o modus ponens — o único caminho válido “para frente”."
                },
                {
                  "type": "mc",
                  "tag": "Falácia · negar o antecedente",
                  "text": "A proposição “Se Ana estuda, então Ana é aprovada” é verdadeira. Sabe-se que Ana NÃO estudou. Sobre a aprovação, conclui-se que",
                  "options": [
                    "Ana não foi aprovada",
                    "Ana foi aprovada",
                    "nada se pode concluir",
                    "a proposição inicial é falsa",
                    "Ana foi reprovada por falta"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Armadilha de NEGAR O ANTECEDENTE. A frase só promete o que acontece QUANDO Ana estuda; ela não promete nada sobre o caso de Ana não estudar. Ana pode ter sido aprovada mesmo sem estudar (sorte, conhecimento prévio) e isso não desmente a frase — são as linhas (F,V) e (F,F), ambas verdadeiras. Em lógica, “não sei” é resposta certa."
                },
                {
                  "type": "mc",
                  "tag": "Condicional falso",
                  "text": "A proposição “Se eu passar no concurso, eu viajo” é FALSA. Então, necessariamente,",
                  "options": [
                    "eu não passei no concurso",
                    "eu passei no concurso e não viajei",
                    "eu não passei e não viajei",
                    "eu viajei sem passar no concurso",
                    "eu passei e viajei"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Só existe UM jeito de um condicional ser falso: V → F (antecedente verdadeiro, consequente falso). Se eu não tivesse passado, a promessa nem teria sido testada e a frase seria verdadeira — o que contraria o enunciado. Repare que um condicional falso é generoso: entrega os dois fatos com certeza."
                },
                {
                  "type": "mc",
                  "tag": "Valor lógico · condicional",
                  "text": "Sendo p verdadeira, q falsa e r verdadeira, a única proposição FALSA entre as opções é",
                  "options": [
                    "p → q",
                    "q → p",
                    "p → r",
                    "~p → q",
                    "q → r"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. Substitua e procure o padrão V → F. (A) V → F = FALSA. (B) F → V = V. (C) V → V = V. (D) ~p vira F, então F → F = V. (E) F → V = V. Guarde o método: achou V → F, é falso; não achou, é verdadeiro."
                },
                {
                  "type": "mc",
                  "tag": "Modus tollens · “todo”",
                  "text": "É verdade que “Todo analista da DataPrev é servidor público”. Sabe-se que João não é servidor público. Conclui-se que",
                  "options": [
                    "João é analista da DataPrev",
                    "João não é analista da DataPrev",
                    "nada se pode concluir sobre João",
                    "João é servidor de outro órgão",
                    "João foi aprovado em outro concurso"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. “Todo A é B” é o condicional “se é analista, então é servidor”. Descobrimos que o CONSEQUENTE falhou (~q), e o caminho válido para trás conclui ~p — é o modus tollens. Prova pelo absurdo: se João fosse analista, teríamos V → F, que tornaria a premissa falsa, contrariando o enunciado. No diagrama de Venn: quem está fora do círculo grande está obrigatoriamente fora do círculo pequeno."
                },
                {
                  "type": "ce",
                  "tag": "Falácia · afirmar o consequente",
                  "text": "É verdade que “Todo analista da DataPrev é servidor público”. Sabe-se que Maria é servidora pública. Logo, Maria é analista da DataPrev.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. Armadilha de AFIRMAR O CONSEQUENTE. Saber que o q ocorreu não diz nada sobre o p. No Venn, Maria está dentro do círculo grande (servidores), mas esse círculo tem duas regiões: o miolo (analistas da DataPrev) e todo o resto (professores, médicos do SUS, auditores). O enunciado não diz em qual delas ela está. Atenção à precisão: servidora pública ela É — o que não se pode afirmar é que seja analista."
                },
                {
                  "type": "mc",
                  "tag": "Negação do condicional",
                  "text": "A negação de “Se Ana for aprovada, então Ana se muda para João Pessoa” é",
                  "options": [
                    "Se Ana não for aprovada, então Ana não se muda para João Pessoa",
                    "Se Ana não se muda para João Pessoa, então Ana não foi aprovada",
                    "Ana foi aprovada e não se mudou para João Pessoa",
                    "Ana não foi aprovada e se mudou para João Pessoa",
                    "Ana não foi aprovada ou se mudou para João Pessoa"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Negar p → q é afirmar p ∧ ~q: o antecedente fica DO JEITO QUE ESTAVA e só o consequente é negado — e a seta desaparece. As opções A e B ainda têm seta: A é a inversa e B é a contrapositiva (que, aliás, diz o MESMO que a original, e não o contrário)."
                },
                {
                  "type": "mc",
                  "tag": "Negação do condicional",
                  "text": "A proposição “Se o sistema falhar, então o alerta é disparado” é FALSA. Então",
                  "options": [
                    "o sistema não falhou",
                    "o alerta não foi disparado",
                    "o sistema falhou e o alerta não foi disparado",
                    "o sistema não falhou e o alerta foi disparado",
                    "o sistema falhou e o alerta foi disparado"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Condicional falso = p ∧ ~q. Duas armadilhas aqui: (1) a opção B está certa pela METADE e por isso é tentadora — mas a negação de um condicional sempre entrega DOIS fatos ligados por “e”; se a sua resposta tem um fato só, faltou pedaço. (2) A opção D inverte tudo: se o sistema não tivesse falhado, a promessa não teria sido testada e a frase seria VERDADEIRA. Confira sempre pelo mundo real: um monitoramento decepciona quando dá pau e ninguém é avisado."
                },
                {
                  "type": "mc",
                  "tag": "Tradução · “sempre que”",
                  "text": "Sendo p = “chove” e q = “levo guarda-chuva”, a tradução de “Sempre que chove, levo guarda-chuva” é",
                  "options": [
                    "p ∧ q",
                    "p ∨ q",
                    "p → q",
                    "q → p",
                    "~p → ~q"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. “Sempre que” é um dos disfarces do “se… então”, junto com “quando”, “toda vez que” e “todo A é B”. O disfarce muda a palavra, não a estrutura."
                },
                {
                  "type": "mc",
                  "tag": "Tradução",
                  "text": "Sendo p = “chove” e q = “levo guarda-chuva”, a tradução de “Choveu e eu não levei guarda-chuva” é",
                  "options": [
                    "p ∧ ~q",
                    "~p ∧ q",
                    "p → ~q",
                    "~(p ∧ q)",
                    "p ∨ ~q"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. E repare: essa frase é exatamente a NEGAÇÃO de “sempre que chove, levo guarda-chuva” (p → q). Negar um condicional produz um “e”."
                },
                {
                  "type": "mc",
                  "tag": "Inversa",
                  "text": "Sendo p = “chove” e q = “levo guarda-chuva”, a tradução de “Se não chove, não levo guarda-chuva” é",
                  "options": [
                    "p → q",
                    "~q → ~p",
                    "~p → ~q",
                    "p ∧ ~q",
                    "~(p → q)"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Essa é a INVERSA de p → q — e atenção: ela NÃO significa o mesmo que “se chove, levo guarda-chuva”. A primeira promete sobre dias de chuva; a segunda promete sobre dias de sol. Eu posso levar guarda-chuva num dia seco por precaução: isso quebra a inversa e não quebra a original."
                },
                {
                  "type": "mc",
                  "tag": "Contrapositiva",
                  "text": "A contrapositiva de “Se Ana estuda, então Ana é aprovada” é",
                  "options": [
                    "Se Ana é aprovada, então Ana estuda",
                    "Se Ana não estuda, então Ana não é aprovada",
                    "Se Ana não é aprovada, então Ana não estuda",
                    "Ana estuda e não é aprovada",
                    "Ana não estuda ou é aprovada"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Contrapositiva = ~q → ~p: inverte a ordem E nega os dois lados, as duas mexidas juntas. A opção A é a recíproca e a B é a inversa — nenhuma das duas equivale à original (mas equivalem entre si)."
                },
                {
                  "type": "mc",
                  "tag": "Equivalência",
                  "text": "Qual proposição é equivalente a “Se o sistema falha, o alerta é disparado”?",
                  "options": [
                    "Se o alerta é disparado, o sistema falhou",
                    "Se o sistema não falha, o alerta não é disparado",
                    "Se o alerta não é disparado, o sistema não falhou",
                    "O sistema falha e o alerta não é disparado",
                    "O sistema não falha e o alerta é disparado"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C, a contrapositiva. A é a recíproca e B é a inversa — as duas armadilhas plantadas de propósito. D é a NEGAÇÃO (diz o contrário, não o mesmo). Olhe sempre o verbo do enunciado: “equivalente a” pede contrapositiva (com seta); “negação de” pede p ∧ ~q (com “e”)."
                }
              ]
            },
            {
              "id": "logica-sentencial-02",
              "nome": "Aula 1 · Treino extra do condicional",
              "descricao": "Oito questões novas focadas nos pontos que mais derrubam: manter o antecedente afirmado ao negar, não trocar os termos de lugar e separar contrapositiva (equivalente) de negação (contrária) e de inversa (armadilha).",
              "nivel": "Treino",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Negação do condicional",
                  "text": "A negação de “Se o backup falhar, então o sistema envia e-mail ao administrador” é",
                  "options": [
                    "Se o backup não falhar, o sistema não envia e-mail ao administrador",
                    "O backup falhou e o sistema não enviou e-mail ao administrador",
                    "O backup não falhou e o sistema enviou e-mail ao administrador",
                    "Se o sistema não envia e-mail, então o backup não falhou",
                    "O backup falhou ou o sistema não enviou e-mail"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Negar p → q é afirmar p ∧ ~q — o antecedente permanece AFIRMADO e só o consequente é negado. Teste de conferência: existe cenário em que a original e a opção C sejam verdadeiras ao mesmo tempo? Sim (backup ok e e-mail enviado por outro motivo) — logo C não pode ser a negação. Já a opção D é a contrapositiva: diz o MESMO que a original, não o contrário."
                },
                {
                  "type": "mc",
                  "tag": "Contrapositiva",
                  "text": "A proposição equivalente a “Todo servidor da DataPrev possui matrícula funcional” é",
                  "options": [
                    "Quem possui matrícula funcional é servidor da DataPrev",
                    "Quem não é servidor da DataPrev não possui matrícula funcional",
                    "Quem não possui matrícula funcional não é servidor da DataPrev",
                    "Existe servidor da DataPrev sem matrícula funcional",
                    "Todo quem possui matrícula funcional é servidor público"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. “Todo A é B” é o condicional “se é servidor da DataPrev, então possui matrícula”. A equivalente é a contrapositiva ~q → ~p: inverte a ordem e nega os dois lados. A opção A é a recíproca e a B é a inversa — as duas erram juntas."
                },
                {
                  "type": "mc",
                  "tag": "Modus tollens",
                  "text": "Sabe-se que “Se chove, a rua fica molhada” é verdadeira e que a rua NÃO está molhada. Conclui-se que",
                  "options": [
                    "está chovendo",
                    "não está chovendo",
                    "nada se pode concluir",
                    "a rua secou rápido",
                    "a proposição inicial é falsa"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. O consequente falhou (~q), então o antecedente também tinha de ter falhado (~p). É o modus tollens, o único caminho válido “para trás”. Prova pelo absurdo: se estivesse chovendo com a rua seca, teríamos V → F e a premissa seria falsa."
                },
                {
                  "type": "mc",
                  "tag": "Falácia · afirmar o consequente",
                  "text": "Sabe-se que “Se chove, a rua fica molhada” é verdadeira e que a rua ESTÁ molhada. Conclui-se que",
                  "options": [
                    "está chovendo",
                    "não está chovendo",
                    "nada se pode concluir sobre a chuva",
                    "choveu há pouco tempo",
                    "a proposição inicial é falsa"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Armadilha de afirmar o consequente. A rua pode estar molhada por um caminhão-pipa, por uma mangueira ou por um cano estourado. O condicional é via de mão única: “se chove, molha” não autoriza “se molhou, choveu”."
                },
                {
                  "type": "mc",
                  "tag": "Recíproca e inversa",
                  "text": "Considere “Se o candidato zerar uma disciplina, então ele é eliminado”. A proposição que NÃO é equivalente a ela é",
                  "options": [
                    "Se o candidato não é eliminado, então ele não zerou nenhuma disciplina",
                    "Quem não foi eliminado não zerou disciplina alguma",
                    "Se o candidato é eliminado, então ele zerou uma disciplina",
                    "Não é possível zerar uma disciplina sem ser eliminado",
                    "Zerar uma disciplina é suficiente para ser eliminado"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Essa é a RECÍPROCA (q → p), e recíproca não equivale à original — o candidato pode ser eliminado por outros motivos, como não atingir os 57,5 pontos. As opções A e B são a contrapositiva escrita de dois jeitos, e D e E são reformulações da própria original."
                },
                {
                  "type": "ce",
                  "tag": "Valor lógico",
                  "text": "Sendo p verdadeira, q falsa e r falsa, a proposição (p → q) ∨ r é falsa.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Resolva de dentro para fora, trocando as letras pelos valores antes de decidir: (p → q) = V → F = F. Substituindo: F ∨ F. O “ou” só é falso quando as duas partes são falsas — é o caso. Logo, a expressão é FALSA e a afirmação está correta."
                },
                {
                  "type": "mc",
                  "tag": "Contrapositiva com negação",
                  "text": "A contrapositiva de “Se Ana não estudar, então Ana não será aprovada” é",
                  "options": [
                    "Se Ana estudar, então Ana será aprovada",
                    "Se Ana for aprovada, então Ana estudou",
                    "Se Ana não for aprovada, então Ana não estudou",
                    "Ana não estudou e foi aprovada",
                    "Ana estudou ou não foi aprovada"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Aqui p = “Ana não estuda” e q = “Ana não é aprovada” — os dois já vêm negados. A contrapositiva ~q → ~p nega os dois de novo, e negar duas vezes volta ao original: ~q = “Ana é aprovada”, ~p = “Ana estudou”. Resultado: “Se Ana for aprovada, então Ana estudou”. A opção A é a inversa e não equivale."
                },
                {
                  "type": "ce",
                  "tag": "Validade de argumento",
                  "text": "O argumento a seguir é válido: “Se o alerta dispara, o time de plantão é acionado. O time de plantão não foi acionado. Logo, o alerta não disparou.”",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. É modus tollens em forma de argumento: da premissa p → q e do fato ~q conclui-se ~p. Compare com a versão INVÁLIDA, que a banca costuma oferecer no lugar: “o alerta não disparou, logo o time não foi acionado” — essa nega o antecedente e não conclui nada, pois o time pode ter sido acionado por outro motivo."
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
        },
        {
          "id": "fgv-rlm",
          "nome": "Raciocínio Lógico — questões FGV",
          "icon": "ti-math-symbols",
          "descricao": "Questões de Raciocínio Lógico Matemático extraídas de provas reais da FGV, transcritas na íntegra, com o gabarito definitivo da banca e a resolução comentada.",
          "resumo": [
            {
              "titulo": "Como usar este bloco",
              "html": "\n<p>As questões aqui são <b>reproduções literais de provas reais da FGV</b>, conferidas contra o gabarito definitivo publicado pela banca. A etiqueta de cada questão traz a prova e o número original.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Use este bloco <b>depois</b> da teoria. Aqui o objetivo é calibrar o <b>estilo</b> da banca: enunciado curto, uma armadilha bem plantada e alternativas próximas.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O que a FGV cobrou em RLM na DataPrev 2024:</b> das 6 questões, <b>1 foi de lógica sentencial</b> (equivalência de condicional) e <b>5 foram de problemas aritméticos</b> — proporção, média ponderada, álgebra, contagem e porcentagem. Ou seja: a parte “matemática” do nome pesa mais do que parece. No edital de 2026 são 5 questões.</div>\n"
            }
          ],
          "flashcards": [
            {
              "tema": "FGV · padrão",
              "pergunta": "Qual foi a divisão real das 6 questões de RLM na prova FGV/DataPrev 2024?",
              "resposta": "1 de lógica sentencial (equivalência de “se… então”) e 5 de problemas aritméticos: divisão proporcional, média ponderada, álgebra com soma e soma de quadrados, contagem de pares e porcentagem composta."
            },
            {
              "tema": "Proporção",
              "pergunta": "Como se divide um prejuízo entre sócios?",
              "resposta": "Proporcionalmente ao capital investido. Some os capitais, ache a fração de cada um e aplique sobre o valor total. Ex.: 12.000 de 25.000 = 12/25 do prejuízo."
            },
            {
              "tema": "Álgebra",
              "pergunta": "Identidade útil quando o enunciado dá a soma e a soma dos quadrados de dois números",
              "resposta": "(x − y)² = 2(x² + y²) − (x + y)². Ela entrega a diferença sem precisar descobrir os números."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Dois aumentos sucessivos de 30% e 10% equivalem a quanto de aumento total? E qual a taxa média mensal?",
              "resposta": "Total: 1,30 × 1,10 = 1,43, ou seja, 43%. A taxa média NÃO é a média aritmética: é a raiz quadrada de 1,43 ≈ 1,1958, ou seja, cerca de 19,58% ao mês."
            },
            {
              "tema": "Contagem",
              "pergunta": "Quantas estradas ligam x vilarejos dois a dois?",
              "resposta": "C(x,2) = x(x−1)/2. Acrescentando 2 vilarejos, o número de novas estradas é C(x+2,2) − C(x,2) = 2x + 1."
            }
          ],
          "simulados": [
            {
              "id": "fgv-rlm-01",
              "nome": "FGV · DataPrev 2024 · RLM completo",
              "descricao": "As 6 questões de Raciocínio Lógico Matemático da prova FGV para Analista de TI — Desenvolvimento de Software (DataPrev, Edital 01/2024, aplicada em 17/11/2024, Tipo 1 — Branca), questões 25 a 30. Gabarito definitivo da banca.",
              "nivel": "Prova real",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q25",
                  "text": "Arnaldo e Bernaldo associaram-se em um determinado negócio. Arnaldo entrou com R$ 12.000,00 e Bernaldo com R$ 13.000,00. Se perderem R$ 50.000,00, caberá a Arnaldo o prejuízo de",
                  "options": [
                    "R$ 18.000,00",
                    "R$ 20.000,00",
                    "R$ 24.000,00",
                    "R$ 26.000,00",
                    "R$ 28.000,00"
                  ],
                  "answer": 2,
                  "exp": "Gabarito oficial: C. O prejuízo é dividido na mesma proporção do capital investido. Capital total: 12.000 + 13.000 = 25.000. A parte de Arnaldo é 12.000/25.000 = 12/25. Aplicando sobre o prejuízo: 50.000 × 12/25 = 24.000. Confira pela outra ponta: Bernaldo fica com 50.000 × 13/25 = 26.000, e 24.000 + 26.000 = 50.000. A opção D (26.000) é a parte do Bernaldo, plantada para quem troca os sócios."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q26",
                  "text": "Uma determinada escola adota o sistema de pesos por bimestre para o cálculo da média anual. O primeiro bimestre tem peso 1, o segundo, 2, o terceiro, 3, e o quarto, 4. Assim, para calcular a média anual, um estudante deve efetuar a soma de cada uma de suas notas bimestrais multiplicadas pelos seus respectivos pesos e dividir por 10. Para ser aprovado, um aluno precisa ter média anual, no mínimo, igual a 7,0. Arnaldo tirou notas 4,0; 6,0; 8,0; 8,0 nos 4 bimestres, não necessariamente nessa ordem. Para que Arnaldo seja aprovado, a sua menor nota deve ter sido tirada no",
                  "options": [
                    "1º bimestre, necessariamente",
                    "1º ou 2º bimestres, necessariamente",
                    "2º bimestre, necessariamente",
                    "3º bimestre, necessariamente",
                    "3º ou 4º bimestre, necessariamente"
                  ],
                  "answer": 1,
                  "exp": "Gabarito oficial: B. Média ≥ 7,0 com divisor 10 significa soma ponderada ≥ 70. A ideia é que a MENOR nota (4,0) precisa cair num peso pequeno. Testando onde colocar o 4,0: no peso 1 → dá para chegar a 70 e até 72 (4×1 + 8×2 + 6×3 + 8×4 = 70; ou 4×1 + 6×2 + 8×3 + 8×4 = 72). No peso 2 → o melhor arranjo dá exatamente 70 (6×1 + 4×2 + 8×3 + 8×4 = 70), ainda aprova. No peso 3 → o melhor arranjo chega só a 66. No peso 4 → no máximo 62. Logo, o 4,0 tem de estar no 1º ou no 2º bimestre. Atenção ao “necessariamente”: a questão pede onde a menor nota PODE ter caído para que a aprovação seja possível."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q27",
                  "text": "Dois sistemas monitoram a variação de temperatura dos servidores em um data center. Um sistema registra variações positivas (aquecimento) e o outro registra variações negativas (resfriamento). Certo dia, a soma dessas variações foi de 1 grau Celsius, indicando que o ambiente se manteve praticamente estável. No entanto, a soma dos quadrados dessas variações foi de 313, o que revela uma diferença significativa entre o maior valor positivo e o menor valor negativo registrados. A diferença entre esses valores é",
                  "options": [
                    "20",
                    "25",
                    "30",
                    "35",
                    "40"
                  ],
                  "answer": 1,
                  "exp": "Gabarito oficial: B. Chame os valores de x e y, com x + y = 1 e x² + y² = 313. Use a identidade (x − y)² = 2(x² + y²) − (x + y)² = 2×313 − 1² = 626 − 1 = 625. Logo x − y = 25. Truque que economiza tempo: não é preciso descobrir x e y separadamente (seriam 13 e −12). Sempre que o enunciado der a soma e a soma dos quadrados, essa identidade entrega a diferença direto."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q28",
                  "text": "A proposição logicamente equivalente à proposição “Se Cesar é fã de futebol então ele assiste a muitos jogos” é",
                  "options": [
                    "Cesar é fã de futebol e assiste a muitos jogos",
                    "Cesar gosta de futebol porque assiste a muitos jogos",
                    "Cesar gosta de assistir jogos por ser fã de futebol",
                    "Se Cesar não assiste a muitos jogos então ele não é fã de futebol",
                    "Se Cesar não é fã de futebol então ele não assiste a muitos jogos"
                  ],
                  "answer": 3,
                  "exp": "Gabarito oficial: D. É a CONTRAPOSITIVA: de p → q para ~q → ~p, invertendo a ordem e negando os dois lados. A opção E é a inversa (~p → ~q), a armadilha principal — parece a mesma ideia dita ao contrário, mas não é. A opção A é uma conjunção (nem equivale nem nega corretamente). B e C introduzem CAUSA (“porque”, “por ser”), e condicional lógico não afirma causa nenhuma, apenas que onde há p há q. Esta foi a única questão de lógica sentencial das seis de RLM da prova."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q29",
                  "text": "Numa certa região há alguns vilarejos de maneira que cada dupla de vilarejos possui uma única estrada que os conecta. (A prova traz uma figura com cinco vilarejos ligados dois a dois.) Considere que nessa região há inicialmente x vilarejos e que 2 novos vilarejos estejam se desenvolvendo. Por essa razão, 17 novas estradas estão sendo construídas. Nessas condições, o número x vale",
                  "options": [
                    "6",
                    "7",
                    "8",
                    "9",
                    "10"
                  ],
                  "answer": 2,
                  "exp": "Gabarito oficial: C. Com n vilarejos ligados dois a dois, o número de estradas é a combinação C(n,2) = n(n−1)/2. As novas estradas são C(x+2,2) − C(x,2) = [(x+2)(x+1) − x(x−1)]/2 = (4x + 2)/2 = 2x + 1. Igualando: 2x + 1 = 17 → x = 8. Conferindo: com 8 vilarejos há 28 estradas; com 10, há 45; a diferença é 17. Atalho para a prova: acrescentar 2 pontos sempre gera 2x + 1 ligações novas."
                },
                {
                  "type": "mc",
                  "tag": "FGV · DataPrev 2024 · ATI Desenv. de Software · Q30",
                  "text": "O preço de venda de certo item de consumo sofreu dois aumentos mensais consecutivos, sendo o primeiro de 30% e o segundo de 10%. Sobre a taxa média de aumento mensal nesse período, é correto afirmar que",
                  "options": [
                    "é maior que 19% e menor que 20%",
                    "é igual a 20%",
                    "é maior que 20% e menor que 21%",
                    "é igual a 21,5%",
                    "é igual a 43%"
                  ],
                  "answer": 0,
                  "exp": "Gabarito oficial: A. Aumentos sucessivos se MULTIPLICAM, não se somam: 1,30 × 1,10 = 1,43, isto é, 43% no período (por isso a opção E é o total, não a média). A taxa média mensal i é aquela que, aplicada duas vezes, dá o mesmo resultado: (1 + i)² = 1,43 → 1 + i = √1,43 ≈ 1,1958 → i ≈ 19,58%. Está entre 19% e 20%. A armadilha é a opção B: a média aritmética de 30% e 10% é 20%, e ela é sempre MAIOR que a média real (geométrica) — decore que a taxa média fica sempre um pouco abaixo da média aritmética."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "mapa": {
    "atualizadoEm": "2026-08-07",
    "prova": {
      "banca": "FGV",
      "edital": "001/2026",
      "cargo": "Analista de TI — Perfil 3: Desenvolvimento de Software",
      "local": "João Pessoa / PB",
      "data": "11/10/2026",
      "questoes": 70,
      "pontosMax": 115,
      "corte": 57.5,
      "regra": "Mínimo de 57,5 pontos E não zerar nenhuma disciplina."
    },
    "legenda": {
      "prioridade": {
        "alta": "Muito cobrado e/ou você tende a ter lacuna — comece por aqui.",
        "media": "Importante, mas de retorno menor ou já parcialmente dominado.",
        "baixa": "Você provavelmente já domina — mantenha por questões, não por teoria."
      },
      "status": {
        "nao-iniciado": "Ainda não estudei",
        "estudando": "Estou estudando agora",
        "revisar": "Estudei, mas preciso revisar",
        "dominado": "Domino — só manter por questões"
      },
      "esforco": "Estimativa em sessões de ~1h (bloco de estudo)."
    },
    "modulos": [
      {
        "id": "modulo-1",
        "nome": "Módulo I — Conhecimentos Gerais",
        "resumo": "40 questões, peso 1 = 40 pontos. É aqui que você ganha classificação: as específicas já estão quase no teto.",
        "questoes": 40,
        "peso": 1,
        "pontos": 40,
        "disciplinas": [
          {
            "id": "d-portugues",
            "nome": "Língua Portuguesa",
            "icon": "ti-language",
            "questoes": 12,
            "pontos": 12,
            "prioridade": "alta",
            "assuntoId": "portugues",
            "nota": "No simulado 2024 você fez 4/12. Maior volume de pontos do Módulo I e o que mais elimina candidato técnico. Ganho lento, mas obrigatório.",
            "topicos": [
              {
                "id": "pt-interpretacao",
                "nome": "Interpretação e compreensão de textos",
                "prioridade": "alta",
                "esforco": 4,
                "oQueCai": "O maior bloco. FGV usa textos longos de opinião/jornalismo e pergunta tese, intenção do autor, inferência e o que NÃO se depreende do texto. Treine marcar a tese antes de olhar as alternativas."
              },
              {
                "id": "pt-significacao",
                "nome": "Significação das palavras (semântica)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Sinonímia, antonímia, polissemia, conotação x denotação e substituição de palavra no contexto sem mudar o sentido. Aparece quase sempre colada à interpretação."
              },
              {
                "id": "pt-coesao",
                "nome": "Coesão e coerência: referenciação e conectores",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "A queridinha da FGV: a que termo o pronome/‘isso’/‘tal’ se refere, e qual a relação lógica do conectivo (concessão, oposição, causa, conclusão). Vale mais que decorar gramática."
              },
              {
                "id": "pt-classes",
                "nome": "Classes de palavras e morfossintaxe",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "O que cada palavra é (classe) e o que faz na frase (função). É a base de crase, concordância e regência — sem isso o resto vira decoreba.",
                "materiaId": "classes-palavras"
              },
              {
                "id": "pt-sintaxe",
                "nome": "Termos da oração: sujeito, predicado, complementos",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Identificar sujeito, objeto direto/indireto, predicativo, adjunto e complemento nominal. Pré-requisito direto de concordância e regência."
              },
              {
                "id": "pt-periodo",
                "nome": "Coordenação e subordinação (período composto)",
                "prioridade": "media",
                "esforco": 3,
                "oQueCai": "Classificar orações (substantivas, adjetivas, adverbiais) e reconhecer a relação de sentido. FGV cobra junto com pontuação e reescrita."
              },
              {
                "id": "pt-pontuacao",
                "nome": "Pontuação",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Vírgula em oração adjetiva explicativa x restritiva, aposto, adjunto deslocado, ponto e vírgula e dois-pontos. Erro clássico: vírgula entre sujeito e verbo."
              },
              {
                "id": "pt-concordancia",
                "nome": "Concordância verbal e nominal",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Sujeito composto e posposto, partícula ‘se’, verbos impessoais, ‘haver’ x ‘fazer’, expressões partitivas, ‘é proibido’, ‘anexo’, ‘bastante’. Muito cobrada."
              },
              {
                "id": "pt-regencia",
                "nome": "Regência verbal e nominal",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Verbos que mudam de sentido com a preposição (assistir, aspirar, visar, implicar, preferir, obedecer) e regência de nomes. Casa direto com crase."
              },
              {
                "id": "pt-crase",
                "nome": "Crase",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Casos obrigatórios, proibidos e facultativos; ‘à distância’, ‘à moda de’, pronomes, nomes de lugar. Item de altíssima frequência e fácil de blindar."
              },
              {
                "id": "pt-colocacao",
                "nome": "Colocação pronominal",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Próclise, mesóclise e ênclise: palavras atrativas, futuro, verbos no infinitivo e locuções. Poucas regras, retorno rápido."
              },
              {
                "id": "pt-reescrita",
                "nome": "Reescrita de frases e equivalência",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Reescrever mantendo sentido e correção: voz passiva/ativa, nominalização, troca de conectivo. É onde tudo o que você estudou é cobrado junto."
              },
              {
                "id": "pt-ortografia",
                "nome": "Ortografia e acentuação",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "Menos frequente na FGV, mas aparece em item de ‘erro de grafia’. Foque em acentuação de oxítonas/paroxítonas/proparoxítonas, hiatos e monossílabos."
              }
            ]
          },
          {
            "id": "d-ingles",
            "nome": "Língua Inglesa",
            "icon": "ti-abc",
            "questoes": 12,
            "pontos": 12,
            "prioridade": "media",
            "nota": "Você fez 8/12 — é ponto forte. Não precisa de teoria pesada: mantenha com leitura técnica e questões para não perder o que já tem.",
            "topicos": [
              {
                "id": "en-estrategias",
                "nome": "Estratégias de leitura (skimming, scanning, main idea)",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "FGV pergunta ideia principal, propósito do autor e informação específica. Treine achar a resposta sem traduzir o texto inteiro."
              },
              {
                "id": "en-inferencia",
                "nome": "Inferência e vocabulário pelo contexto",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Itens do tipo ‘the word X in line N can be replaced by’. Deduzir sentido a partir do entorno é mais eficiente que decorar listas."
              },
              {
                "id": "en-vocabtec",
                "nome": "Vocabulário técnico de TI e falsos cognatos",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Textos costumam ser sobre tecnologia, dados, IA e segurança — seu campo. Cuidado com falsos cognatos (actually, eventually, comprehensive, library, policy)."
              },
              {
                "id": "en-tempos",
                "nome": "Tempos verbais e voz passiva",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Present/past perfect, continuous e passive voice — cobrados como ‘qual a forma correta’ ou ‘o que a frase indica’."
              },
              {
                "id": "en-modais",
                "nome": "Verbos modais",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Can/could, may/might, must/should/have to: grau de certeza, obrigação e recomendação. Muda o sentido da alternativa inteira."
              },
              {
                "id": "en-conectivos",
                "nome": "Conectivos e marcadores de discurso",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "However, therefore, although, whereas, moreover: identificar a relação lógica é o que resolve a questão."
              },
              {
                "id": "en-referencia",
                "nome": "Referência pronominal",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "‘It’, ‘they’, ‘this’, ‘which’ retomam o quê? Mesma lógica da coesão em Português."
              },
              {
                "id": "en-relativas",
                "nome": "Orações relativas e condicionais",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "Which/who/whose/that e os three conditionals. Aparece em item gramatical isolado."
              },
              {
                "id": "en-wordform",
                "nome": "Formação de palavras (prefixos e sufixos)",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "un-, dis-, -less, -ful, -ize, -ment: ajuda a inferir vocabulário desconhecido e resolve itens de completar lacuna."
              }
            ]
          },
          {
            "id": "d-rlm",
            "nome": "Raciocínio Lógico Matemático",
            "icon": "ti-math-symbols",
            "questoes": 5,
            "pontos": 5,
            "prioridade": "alta",
            "nota": "Você fez 3/6. Conteúdo fechado e muito treinável — em poucas semanas dá para dobrar o acerto.",
            "topicos": [
              {
                "id": "rl-proposicoes",
                "nome": "Proposições e conectivos lógicos",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Base de tudo: negação, conjunção, disjunção (inclusiva e exclusiva), condicional e bicondicional. Sem isso nada mais funciona.",
                "materiaId": "logica-sentencial"
              },
              {
                "id": "rl-tabelas",
                "nome": "Tabelas-verdade",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Montar a tabela, classificar em tautologia/contradição/contingência. É o método bruto que salva quando a lógica trava.",
                "materiaId": "logica-sentencial"
              },
              {
                "id": "rl-equivalencias",
                "nome": "Equivalências e negações (De Morgan)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Negar ‘se…então’, negar ‘e’/‘ou’, contrapositiva. É o item mais cobrado de RLM em qualquer banca — vale ouro nas 5 questões.",
                "materiaId": "logica-sentencial"
              },
              {
                "id": "rl-argumentos",
                "nome": "Argumentação: validade, dedução e inferência",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Validade de argumento, modus ponens/tollens, silogismos e analogias. FGV gosta de argumento em texto corrido.",
                "materiaId": "logica-sentencial"
              },
              {
                "id": "rl-diagramas",
                "nome": "Diagramas lógicos e quantificadores",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "‘Todo’, ‘algum’, ‘nenhum’ e suas negações, com diagramas de Venn. Pega candidato que responde pelo senso comum."
              },
              {
                "id": "rl-primeira-ordem",
                "nome": "Lógica de primeira ordem",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Quantificadores universal e existencial aplicados a predicados. Recorte explícito do edital, cobrança leve."
              },
              {
                "id": "rl-aritmeticos",
                "nome": "Problemas aritméticos",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Porcentagem, razão e proporção, regra de três, média, juros simples e problemas de raciocínio numérico. É o que mais cai dentro de ‘problemas’."
              },
              {
                "id": "rl-geometricos",
                "nome": "Problemas geométricos",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Áreas, perímetros, volumes e raciocínio espacial simples. Baixa frequência, mas está no edital."
              },
              {
                "id": "rl-matriciais",
                "nome": "Problemas matriciais e sequências",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Operações com matrizes, tabelas de dupla entrada, sequências numéricas e de figuras. Costuma ser questão de associação lógica."
              }
            ]
          },
          {
            "id": "d-atualidades",
            "nome": "Atualidades e Inteligência Artificial",
            "icon": "ti-news",
            "questoes": 6,
            "pontos": 6,
            "prioridade": "alta",
            "nota": "Você fez 1/5 — o pior desempenho relativo. A parte de IA é terreno seu como dev; atualidades exige rotina de leitura, não estudo em bloco.",
            "topicos": [
              {
                "id": "at-tecnologia",
                "nome": "Atualidades: tecnologia e transformação digital",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Gov.br, identidade digital, Pix, computação em nuvem soberana, cabos submarinos, 5G/6G, data centers. A FGV liga o tema ao setor público."
              },
              {
                "id": "at-seguranca",
                "nome": "Atualidades: segurança pública e cibersegurança",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Vazamentos de dados, ataques a órgãos públicos, fraudes digitais, crime organizado. Faz ponte com a Legislação do Módulo I."
              },
              {
                "id": "at-economia",
                "nome": "Atualidades: economia",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Inflação, juros, arcabouço fiscal, reforma tributária, mercado de trabalho e previdência — o tema previdenciário é quase certo numa prova da DataPrev."
              },
              {
                "id": "at-politica",
                "nome": "Atualidades: política nacional",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Eleições 2026, principais pautas do Congresso e decisões do STF com repercussão. Fatos, não opinião."
              },
              {
                "id": "at-internacional",
                "nome": "Atualidades: relações internacionais",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Conflitos em curso, BRICS, G20, Mercosul, acordos comerciais e tarifas. Foque no que envolve o Brasil."
              },
              {
                "id": "at-saude",
                "nome": "Atualidades: saúde",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "SUS, campanhas de vacinação, arboviroses, saúde digital e telemedicina."
              },
              {
                "id": "at-ambiente",
                "nome": "Atualidades: meio ambiente e clima",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "COPs, metas climáticas, Amazônia, energia renovável, eventos extremos e transição energética."
              },
              {
                "id": "ia-conceitos",
                "nome": "IA: conceitos e fundamentos",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "IA simbólica x conexionista, IA fraca x forte, agentes, histórico. Terreno confortável para quem é da área — garanta o ponto fácil."
              },
              {
                "id": "ia-ml",
                "nome": "IA: aprendizado de máquina",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Supervisionado, não supervisionado e por reforço; treino/validação/teste; overfitting; métricas. Cobrado em nível conceitual."
              },
              {
                "id": "ia-generativa",
                "nome": "IA: modelos generativos e de linguagem (LLMs)",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Transformers, tokens, embeddings, prompt, RAG, fine-tuning, alucinação, multimodalidade. Tema quentíssimo em 2026."
              },
              {
                "id": "ia-etica",
                "nome": "IA: ética, viés e transparência",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Viés algorítmico, explicabilidade, discriminação, deepfakes, impacto no trabalho e responsabilização. A FGV adora esse recorte."
              },
              {
                "id": "ia-governanca",
                "nome": "IA: governança e regulação",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "PL 2.338/2023 no Brasil, AI Act europeu, níveis de risco, princípios da OCDE/UNESCO e ISO/IEC 42001."
              },
              {
                "id": "ia-privacidade",
                "nome": "IA: privacidade e proteção de dados",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Uso de dados pessoais em treinamento, base legal, anonimização, decisão automatizada e revisão (art. 20 da LGPD). Casa com Legislação."
              }
            ]
          },
          {
            "id": "d-legislacao",
            "nome": "Legislação — Segurança da Informação e Proteção de Dados",
            "icon": "ti-gavel",
            "questoes": 5,
            "pontos": 5,
            "prioridade": "alta",
            "assuntoId": "legislacao",
            "nota": "Você fez 1/5. Conteúdo curto, fechado e de literalidade — é o maior retorno por hora de toda a prova.",
            "topicos": [
              {
                "id": "leg-lgpd",
                "nome": "LGPD — Lei 13.709/2018 (caps. I, II, III, IV, VII, VIII e IX)",
                "prioridade": "alta",
                "esforco": 5,
                "oQueCai": "Fundamentos, conceitos, bases legais (art. 7º e 11), dados sensíveis, direitos do titular, agentes de tratamento, poder público, segurança e boas práticas, ANPD e sanções. É a lei mais cobrada do bloco.",
                "materiaId": "lgpd"
              },
              {
                "id": "leg-lai",
                "nome": "LAI — Lei 12.527/2011 (caps. I a V) + Dec. 7.724 e 7.845",
                "prioridade": "alta",
                "esforco": 4,
                "oQueCai": "Publicidade como regra, transparência ativa e passiva, prazos de resposta e recurso, graus de sigilo (reservado/secreto/ultrassecreto) e suas autoridades classificadoras.",
                "materiaId": "lai"
              },
              {
                "id": "leg-marco-civil",
                "nome": "Marco Civil da Internet — Lei 12.965/2014 (cap. II §I; cap. III §§I e II)",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Direitos e garantias do usuário, neutralidade de rede, guarda de registros de conexão (1 ano) e de acesso a aplicações (6 meses), e responsabilidade de provedores (art. 19 — confira o entendimento atual do STF).",
                "materiaId": "marco-civil"
              },
              {
                "id": "leg-delitos",
                "nome": "Delitos Informáticos — Lei 12.737/2012, art. 2º",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Invasão de dispositivo informático (art. 154-A do CP): conduta, pena atual pela Lei 14.155/2021, qualificadoras, causas de aumento e ação penal.",
                "materiaId": "delitos-informaticos"
              }
            ]
          }
        ]
      },
      {
        "id": "modulo-2",
        "nome": "Módulo II — Conhecimentos Específicos (Perfil 3)",
        "resumo": "30 questões, peso 2,5 = 75 pontos (65% da prova). Você fez 25/30 no simulado: o objetivo aqui é fechar as lacunas de largura, não reestudar código.",
        "questoes": 30,
        "peso": 2.5,
        "pontos": 75,
        "disciplinas": [
          {
            "id": "d-desenvolvimento",
            "nome": "Desenvolvimento de Sistemas",
            "icon": "ti-code",
            "prioridade": "media",
            "nota": "Sua área. O maior bloco do edital em extensão, mas o de menor ganho marginal — exceto UX/acessibilidade, métricas (Ponto de Função), requisitos e arquitetura distribuída, onde dev sênior costuma escorregar.",
            "topicos": [
              {
                "id": "ds-java",
                "nome": "Java 6+ e JavaEE/JakartaEE",
                "prioridade": "baixa",
                "esforco": 2,
                "oQueCai": "Sintaxe, coleções, streams, concorrência e a stack Jakarta (Servlet, CDI, EJB, JAX-RS). Você domina — resolva questões e siga."
              },
              {
                "id": "ds-jpa",
                "nome": "JPA 2+ e Hibernate",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Anotações de mapeamento, ciclo de vida da entidade, tipos de relacionamento, lazy x eager, JPQL e cache. FGV cobra detalhe de anotação."
              },
              {
                "id": "ds-spring",
                "nome": "Spring, Spring Boot e Spring Cloud",
                "prioridade": "baixa",
                "esforco": 2,
                "oQueCai": "Injeção de dependência, escopos, starters, autoconfiguração, perfis e os componentes do Cloud (config, discovery, gateway, circuit breaker)."
              },
              {
                "id": "ds-jsf",
                "nome": "JSF e PrimeFaces",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Ciclo de vida das 6 fases, managed beans, escopos e navegação. Tecnologia legada, mas está no edital e a DataPrev usa."
              },
              {
                "id": "ds-js",
                "nome": "JavaScript",
                "prioridade": "baixa",
                "esforco": 2,
                "oQueCai": "ES6+, escopo, closures, promises/async, DOM e manipulação de eventos."
              },
              {
                "id": "ds-frontend",
                "nome": "Frontend web: HTML, CSS e Ajax",
                "prioridade": "baixa",
                "esforco": 2,
                "oQueCai": "Semântica HTML5, box model, flex/grid, responsividade e requisições assíncronas (fetch/XHR)."
              },
              {
                "id": "ds-spa",
                "nome": "Frameworks SPA: Vue, Angular, React · SPA e PWA",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Componentes, estado, ciclo de vida, roteamento; o que caracteriza SPA e PWA (service worker, manifest, offline)."
              },
              {
                "id": "ds-ux",
                "nome": "UX, usabilidade, acessibilidade, arquitetura da informação, CMS e workflow",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Heurísticas de Nielsen, WCAG e eMAG, e-MAG do governo, wireframe x protótipo. Bloco que dev sênior costuma errar por não estudar."
              },
              {
                "id": "ds-mobile",
                "nome": "Desenvolvimento mobile (Android e iOS)",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Ciclo de vida de Activity/ViewController, nativo x híbrido x multiplataforma, publicação nas lojas."
              },
              {
                "id": "ds-lowcode",
                "nome": "Low-code e no-code",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Conceito, quando faz sentido, governança, riscos e citizen development. Item novo e conceitual — fácil de garantir."
              },
              {
                "id": "ds-cleancode",
                "nome": "Clean code e análise estática (SonarQube)",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Nomes, funções pequenas, SOLID, code smells, dívida técnica e as métricas do SonarQube (cobertura, duplicação, quality gate)."
              },
              {
                "id": "ds-arquitetura",
                "nome": "Arquitetura e design de software",
                "prioridade": "media",
                "esforco": 3,
                "oQueCai": "Estilos arquiteturais (camadas, cliente-servidor, monolito x distribuído), atributos de qualidade e visões arquiteturais."
              },
              {
                "id": "ds-hexagonal",
                "nome": "Arquitetura hexagonal (ports & adapters)",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Domínio no centro, portas e adaptadores, inversão de dependência e comparação com clean architecture."
              },
              {
                "id": "ds-microsservicos",
                "nome": "Microsserviços: orquestração e API gateway",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Decomposição, comunicação síncrona x assíncrona, service discovery, API gateway, orquestração x coreografia, observabilidade e padrões (circuit breaker, sidecar)."
              },
              {
                "id": "ds-containers",
                "nome": "Containers e orquestração",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Docker (imagem, camada, registry), Kubernetes (pod, deployment, service, ingress) e diferença para virtualização."
              },
              {
                "id": "ds-transacoes",
                "nome": "Transações distribuídas",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Two-phase commit, padrão Saga, consistência eventual, idempotência e o teorema CAP aplicado a serviços."
              },
              {
                "id": "ds-soa",
                "nome": "SOA, interoperabilidade e web services",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Princípios de SOA, ESB, contrato de serviço, SOAP x REST e o padrão e-PING de interoperabilidade do governo."
              },
              {
                "id": "ds-mensageria",
                "nome": "Mensageria",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Fila x tópico, publish/subscribe, garantias de entrega, JMS, AMQP, RabbitMQ e Kafka."
              },
              {
                "id": "ds-api",
                "nome": "API REST, Swagger/OpenAPI e JSON",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Verbos HTTP, códigos de status, idempotência, HATEOAS, níveis de maturidade de Richardson, versionamento e documentação OpenAPI."
              },
              {
                "id": "ds-xml",
                "nome": "XML, XSLT e UDDI",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "XML bem-formado x válido, XSD, transformação com XSLT e o papel do UDDI no trio SOAP/WSDL/UDDI."
              },
              {
                "id": "ds-oo",
                "nome": "Orientação a objetos",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "Encapsulamento, herança, polimorfismo, abstração, composição x herança e coesão/acoplamento."
              },
              {
                "id": "ds-servidores",
                "nome": "Servidores de aplicação e servidores web",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Tomcat, JBoss/WildFly, WebSphere, Apache e Nginx: diferença entre container web e servidor de aplicação, proxy reverso e balanceamento."
              },
              {
                "id": "ds-internet",
                "nome": "Internet, intranet, extranet e portais",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "Conceitos básicos e o papel de um portal corporativo. Questão fácil que não pode escapar."
              },
              {
                "id": "ds-https",
                "nome": "HTTPS, SSL/TLS",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Handshake TLS, certificados digitais, cadeia de confiança, versões seguras, HSTS e ataques comuns. Faz ponte com Segurança."
              },
              {
                "id": "ds-devops",
                "nome": "DevOps e CI/CD",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Cultura DevOps, pipeline, integração e entrega contínua, infraestrutura como código, estratégias de deploy (blue-green, canário) e DevSecOps."
              },
              {
                "id": "ds-git",
                "nome": "Git e controle de versão",
                "prioridade": "baixa",
                "esforco": 1,
                "oQueCai": "Comandos essenciais, branch, merge x rebase, pull request, conflitos e fluxos (GitFlow, trunk-based)."
              },
              {
                "id": "ds-testes",
                "nome": "Testes de software: unitário, integração, automatizado, TDD",
                "prioridade": "media",
                "esforco": 3,
                "oQueCai": "Pirâmide de testes, JUnit, mocks, TDD (red-green-refactor), testes de usabilidade e ágeis, cobertura e ciclo de vida do teste."
              },
              {
                "id": "ds-rpa",
                "nome": "RPA — automação robótica de processos",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Conceito, tipos de bot (atendido/desatendido), quando usar RPA em vez de integração por API e riscos de governança."
              },
              {
                "id": "ds-agil",
                "nome": "Métodos ágeis: Scrum, Kanban e XP",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Manifesto ágil, papéis/eventos/artefatos do Scrum, WIP e fluxo no Kanban, práticas do XP (pair programming, refatoração, integração contínua)."
              },
              {
                "id": "ds-metricas",
                "nome": "Ponto de Função e Story Points",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "APF: tipos de função (ALI, AIE, EE, SE, CE), contagem, fator de ajuste; e a lógica relativa dos Story Points, planning poker e velocity. Muito cobrado e pouco estudado por dev."
              },
              {
                "id": "ds-requisitos",
                "nome": "Engenharia de Requisitos",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Classificação (funcional/não funcional), processo (elicitação, análise, especificação, validação, gerência), técnicas de elicitação, rastreabilidade e user stories."
              },
              {
                "id": "ds-blockchain",
                "nome": "Blockchain",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Bloco, hash encadeado, consenso (PoW/PoS), smart contracts, permissionada x pública e casos de uso no setor público."
              },
              {
                "id": "ds-ia-dados",
                "nome": "Conceitos de IA, Análise de Dados e Big Data",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "5 Vs, pipeline de dados, ciência de dados x análise, aprendizado de máquina aplicado e ferramentas do ecossistema (Hadoop, Spark)."
              }
            ]
          },
          {
            "id": "d-seguranca",
            "nome": "Segurança da Informação",
            "icon": "ti-shield-lock",
            "prioridade": "alta",
            "nota": "Uma das três frentes de maior ganho para o seu perfil. Normas ISO e OWASP são decoreba estruturada — rende rápido.",
            "topicos": [
              {
                "id": "si-politicas",
                "nome": "Políticas e procedimentos de segurança da informação",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "PSI: estrutura, papéis e responsabilidades, normas e procedimentos derivados, conscientização e ciclo de revisão."
              },
              {
                "id": "si-cid",
                "nome": "Princípios: confidencialidade, integridade e disponibilidade",
                "prioridade": "alta",
                "esforco": 1,
                "oQueCai": "A tríade CID mais autenticidade, não repúdio e legalidade. Base conceitual de todas as outras questões do bloco."
              },
              {
                "id": "si-27001",
                "nome": "ISO/IEC 27001:2022 — SGSI",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Estrutura da norma, ciclo PDCA, contexto e partes interessadas, declaração de aplicabilidade (SoA), auditoria e certificação; Anexo A com 93 controles."
              },
              {
                "id": "si-27002",
                "nome": "ISO/IEC 27002:2022 — controles",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Os 4 temas (organizacional, pessoas, físico, tecnológico), atributos dos controles e as principais mudanças em relação à versão 2013."
              },
              {
                "id": "si-cripto",
                "nome": "Mecanismos de segurança: criptografia, hash, assinatura e PKI",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Simétrica x assimétrica, AES/RSA, funções hash (SHA-2), assinatura e certificado digital, ICP-Brasil e infraestrutura de chaves públicas."
              },
              {
                "id": "si-acesso",
                "nome": "Controle de acesso e autenticação",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Identificação, autenticação e autorização; modelos DAC/MAC/RBAC/ABAC; privilégio mínimo, segregação de funções e MFA."
              },
              {
                "id": "si-oauth",
                "nome": "OAuth 2.0, OpenID Connect e SSO",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Papéis (resource owner, client, authorization server), fluxos (authorization code, client credentials), token x id_token, SAML e federação. Cai com frequência."
              },
              {
                "id": "si-riscos",
                "nome": "Gestão de riscos de segurança",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Ativo, ameaça, vulnerabilidade, impacto e probabilidade; identificação, análise, avaliação e tratamento (mitigar, transferir, aceitar, evitar); ISO 27005 e risco residual."
              },
              {
                "id": "si-sdl",
                "nome": "SDL — ciclo de desenvolvimento seguro",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Security by design, modelagem de ameaças (STRIDE), requisitos de segurança, revisão de código e gates ao longo do SDLC."
              },
              {
                "id": "si-owasp",
                "nome": "OWASP Top 10",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "As dez categorias, o que causa cada uma e como mitigar — em especial injeção, quebra de controle de acesso, falhas criptográficas e SSRF."
              },
              {
                "id": "si-sast",
                "nome": "Análise estática e dinâmica de código (SAST, DAST, SCA)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "O que cada técnica encontra e em que fase do pipeline entra; falso positivo x falso negativo; IAST e análise de dependências."
              }
            ]
          },
          {
            "id": "d-banco-dados",
            "nome": "Banco de Dados",
            "icon": "ti-database",
            "prioridade": "alta",
            "nota": "Você já usa BD no dia a dia, mas a FGV cobra teoria (normalização, dimensional, NoSQL, ACID) que a prática não ensina.",
            "topicos": [
              {
                "id": "bd-modelagem",
                "nome": "Modelagem conceitual, lógica e física",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "MER e DER (entidade, atributo, cardinalidade, generalização), transformação para o modelo relacional e decisões físicas. Base de todo o bloco."
              },
              {
                "id": "bd-relacional",
                "nome": "Modelo relacional e álgebra relacional",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Relação, tupla, domínio, chaves (primária, candidata, estrangeira) e operadores (seleção, projeção, junção)."
              },
              {
                "id": "bd-normalizacao",
                "nome": "Normalização",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "1FN a 3FN e Boyce-Codd, dependência funcional, anomalias e quando desnormalizar. Item clássico da FGV."
              },
              {
                "id": "bd-integridade",
                "nome": "Integridade referencial e restrições",
                "prioridade": "alta",
                "esforco": 1,
                "oQueCai": "Chave estrangeira, ações on delete/update (cascade, restrict, set null), integridade de entidade e de domínio."
              },
              {
                "id": "bd-sql",
                "nome": "SQL: DDL, DML e consultas",
                "prioridade": "alta",
                "esforco": 4,
                "oQueCai": "CREATE/ALTER/DROP, INSERT/UPDATE/DELETE, joins (inner, left, full), GROUP BY/HAVING, subconsultas, views e funções de janela. A FGV cobra leitura de código SQL."
              },
              {
                "id": "bd-sgbd",
                "nome": "SGBD: arquitetura, transações e desempenho",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Propriedades ACID, níveis de isolamento, bloqueios e deadlock, log e recuperação, índices (B-tree, hash) e plano de execução."
              },
              {
                "id": "bd-dimensional",
                "nome": "Modelagem dimensional e multidimensional",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Fato e dimensão, esquema estrela x floco de neve, granularidade, tabela fato agregada e dimensões degeneradas/lentamente mutáveis (SCD)."
              },
              {
                "id": "bd-metadados",
                "nome": "Metadados e dicionário de dados",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Metadado técnico, de negócio e operacional; catálogo de dados, linhagem e governança de dados."
              },
              {
                "id": "bd-nosql",
                "nome": "NoSQL",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Os quatro tipos (chave-valor, documento, colunar, grafo), teorema CAP, BASE x ACID e quando escolher cada um. Muito cobrado e pouco dominado."
              },
              {
                "id": "bd-memoria",
                "nome": "Bancos de dados em memória",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Redis, Memcached, SAP HANA: uso como cache, persistência opcional, TTL e trade-off de durabilidade."
              },
              {
                "id": "bd-datalake",
                "nome": "Data lakes e Big Data",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Data lake x data warehouse x lakehouse, zonas do lake, schema-on-read x schema-on-write e risco de data swamp."
              },
              {
                "id": "bd-tipos-dados",
                "nome": "Dados estruturados, semiestruturados e não estruturados",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Definições, exemplos e implicação no armazenamento e no processamento. Questão conceitual fácil."
              },
              {
                "id": "bd-avaliacao",
                "nome": "Avaliação e qualidade de modelos de dados",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Critérios de qualidade (completude, consistência, acurácia), revisão de modelo e adequação ao requisito."
              },
              {
                "id": "bd-etl",
                "nome": "Integração e ingestão de dados (ETL/ELT)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "ETL x ELT, batch x streaming, CDC, staging, transferência de arquivos, qualidade e deduplicação na carga."
              }
            ]
          },
          {
            "id": "d-bi",
            "nome": "Inteligência de Negócios (BI)",
            "icon": "ti-chart-histogram",
            "prioridade": "alta",
            "nota": "Conteúdo fechado, conceitual e provavelmente longe do seu dia a dia — alto retorno por hora.",
            "topicos": [
              {
                "id": "bi-conceitos",
                "nome": "BI: conceitos, técnicas e métodos",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "O que é BI, cadeia dado → informação → conhecimento → decisão, indicadores e KPIs, BI operacional x estratégico e self-service BI."
              },
              {
                "id": "bi-ssd",
                "nome": "Sistemas de suporte à decisão (SSD/DSS)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "SSD, SIG/MIS, EIS e sistemas especialistas: para quem serve cada um e em que nível da organização. Questão conceitual recorrente."
              },
              {
                "id": "bi-dw",
                "nome": "Data warehouse: arquitetura e modelagem",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Características de Inmon (não volátil, integrado, orientado a assunto, histórico), Inmon x Kimball, data mart, ODS e staging area."
              },
              {
                "id": "bi-etl",
                "nome": "ETL no contexto de BI",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Extração, transformação e carga; carga incremental x full; tratamento de dimensões lentamente mutáveis; janela de carga e qualidade."
              },
              {
                "id": "bi-olap",
                "nome": "OLAP: cubos e operações",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "OLTP x OLAP, ROLAP/MOLAP/HOLAP e as operações drill-down, roll-up, slice, dice e pivot. Item quase certo na prova."
              },
              {
                "id": "bi-mining",
                "nome": "Data mining",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "CRISP-DM, tarefas (classificação, agrupamento, associação, regressão, detecção de anomalia) e algoritmos típicos (árvore, k-means, Apriori)."
              },
              {
                "id": "bi-visualizacao",
                "nome": "Visualização de dados",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Escolha do gráfico conforme o objetivo, dashboards, storytelling com dados e boas práticas/erros de visualização."
              },
              {
                "id": "bi-fontes",
                "nome": "Mapeamento e coleta de fontes de dados",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Levantamento de fontes internas e externas, matriz barramento (bus matrix), profiling e documentação da origem."
              },
              {
                "id": "bi-arquitetura",
                "nome": "Arquitetura de BI",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Camadas de fonte, integração, armazenamento, apresentação e acesso; BI moderno com data lake, ELT e ferramentas de mercado."
              }
            ]
          },
          {
            "id": "d-governanca",
            "nome": "Gestão e Governança de TI",
            "icon": "ti-sitemap",
            "prioridade": "alta",
            "nota": "ITIL, COBIT, PMBOK e BPMN: decoreba estruturada, muito cobrada e tipicamente negligenciada por quem vem do código. Frente de maior ganho.",
            "topicos": [
              {
                "id": "gv-projetos",
                "nome": "Gerenciamento de projetos: áreas de conhecimento",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "As áreas do PMBOK (escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições, partes interessadas, integração) e seus principais artefatos."
              },
              {
                "id": "gv-portfolio",
                "nome": "Projeto, programa e portfólio",
                "prioridade": "alta",
                "esforco": 1,
                "oQueCai": "O que distingue cada nível, escritório de projetos (PMO) e alinhamento estratégico. Questão conceitual fácil e frequente."
              },
              {
                "id": "gv-processos",
                "nome": "Processos e grupos de processos",
                "prioridade": "media",
                "esforco": 2,
                "oQueCai": "Iniciação, planejamento, execução, monitoramento e controle, encerramento — e o que acontece em cada um."
              },
              {
                "id": "gv-abordagens",
                "nome": "Abordagens tradicional, híbrida e ágil",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Preditivo x adaptativo, quando usar cada um, modelos híbridos e o ciclo de vida do projeto."
              },
              {
                "id": "gv-scrum",
                "nome": "Scrum (Guia Scrum)",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "3 pilares, 5 valores, 3 responsabilidades, 5 eventos e 3 artefatos com seus compromissos. Estude pela literalidade do Guia — a FGV cobra assim."
              },
              {
                "id": "gv-lean-kanban",
                "nome": "Lean e Kanban",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Princípios lean, os 7 desperdícios, quadro Kanban, limite de WIP, lead time x cycle time e Lei de Little."
              },
              {
                "id": "gv-riscos-proj",
                "nome": "Gestão de riscos em projetos",
                "prioridade": "alta",
                "esforco": 2,
                "oQueCai": "Identificação, análise qualitativa e quantitativa, matriz probabilidade x impacto, respostas a ameaças e oportunidades, e reservas."
              },
              {
                "id": "gv-itil",
                "nome": "ITIL v4",
                "prioridade": "alta",
                "esforco": 4,
                "oQueCai": "Sistema de valor de serviço (SVS), cadeia de valor, 4 dimensões, 7 princípios orientadores e as práticas mais cobradas (incidente, problema, mudança, nível de serviço). Bloco de alto retorno."
              },
              {
                "id": "gv-cobit",
                "nome": "COBIT 2019",
                "prioridade": "alta",
                "esforco": 4,
                "oQueCai": "Princípios do sistema de governança e do framework, os 40 objetivos em EDM/APO/BAI/DSS/MEA, componentes, fatores de design e níveis de capacidade."
              },
              {
                "id": "gv-bpmn",
                "nome": "BPMN e gestão de processos",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Elementos da notação (evento, atividade, gateway, pool, lane, fluxo de mensagem), BPM como ciclo (BPM CBOK) e modelagem AS-IS x TO-BE."
              }
            ]
          }
        ]
      }
    ]
  }
};
