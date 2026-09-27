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
        },
        {
          "id": "termos-oracao",
          "nome": "Termos da oração: sujeito, predicado e complementos",
          "icon": "ti-sitemap",
          "descricao": "Do zero: a diferença entre o que a palavra É e o que ela FAZ na frase. Sujeito, predicado, objetos, complemento nominal, adjuntos e apostos — com o teste que separa adjunto adnominal de complemento nominal, que é onde a FGV pega quase todo mundo.",
          "resumo": [
            {
              "titulo": "Antes de tudo: as duas identidades de cada palavra",
              "html": "\n<p>Toda palavra dentro de uma frase tem <b>duas identidades ao mesmo tempo</b>, e confundir as duas é o que faz análise sintática parecer difícil.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">O que ela É</span> a classe de palavra: substantivo, adjetivo, verbo, pronome… Isso é <b>morfologia</b>.</div>\n  <div class=\"def\"><span class=\"def-t\">O que ela FAZ ali</span> a função dentro daquela frase: sujeito, objeto, adjunto… Isso é <b>sintaxe</b>.</div>\n</div>\n<p><b>Morfossintaxe</b> é justamente olhar as duas juntas. Veja a mesma palavra em duas frases:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">A <b>casa</b> é grande</span> “casa” é substantivo (o que é) e <b>sujeito</b> (o que faz)</div>\n  <div class=\"def\"><span class=\"def-t\">Comprei a <b>casa</b></span> continua substantivo, mas agora é <b>objeto direto</b></div>\n</div>\n<p class=\"mnemonic\">Classe é fixa, função depende da frase. A classe é a profissão da pessoa (ela é médica); a função é o papel dela naquela reunião (ela é a presidente da mesa).</p>\n<p>Por que isso importa para a prova: <b>crase, concordância e regência são regras escritas em cima de funções</b>. “O verbo concorda com o sujeito”, “o adjetivo concorda com o substantivo a que se refere”, “crase é preposição + artigo”. Se você não identifica sujeito, objeto e adjunto, essas regras viram decoreba solta.</p>"
            },
            {
              "titulo": "A régua de tudo: o que é uma oração",
              "html": "\n<p><b>Oração é todo enunciado que tem verbo.</b> Um verbo, uma oração. Dois verbos, duas orações. Simples assim — e é a ferramenta mais útil que existe em análise sintática.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Estudei.</span> 1 verbo → 1 oração → <b>período simples</b></div>\n  <div class=\"def\"><span class=\"def-t\">Estudei porque quero passar.</span> 3 verbos (estudei, quero, passar) → 3 orações → <b>período composto</b></div>\n</div>\n<p>Locuções verbais contam como <b>um</b> verbo só: <i>vou estudar</i>, <i>tenho estudado</i>, <i>preciso estudar</i> — são um bloco, uma oração.</p>\n<p class=\"destaque\">Sempre comece contando verbos. Antes de classificar qualquer coisa, saiba quantas orações existem na frase — muita questão da FGV se resolve só com isso.</p>"
            },
            {
              "titulo": "Sujeito: como achar e os cinco tipos",
              "html": "\n<p><b>Sujeito</b> é o termo com o qual o verbo concorda. Para achar, pergunte <b>“quem?”</b> ou <b>“o quê?”</b> <i>antes</i> do verbo — nunca depois, porque depois vira objeto.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Os candidatos fizeram a prova.</span> Quem fez? <i>Os candidatos</i> → sujeito. Fez o quê? <i>a prova</i> → objeto.</div>\n</div>\n<p>O <b>núcleo</b> do sujeito é a palavra principal dele, normalmente um substantivo ou pronome: em <i>os novos candidatos aprovados</i>, o núcleo é <i>candidatos</i>. É com o núcleo que o verbo concorda.</p>\n<p>São cinco tipos, e os quatro últimos são exatamente onde a banca arma as pegadinhas:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Simples</span> um só núcleo — <i><b>A prova</b> será em outubro.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Composto</span> dois ou mais núcleos — <i><b>A prova e o resultado</b> foram adiados.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Oculto (desinencial)</span> não aparece escrito, mas a terminação do verbo revela — <i><b>Estudamos</b> muito.</i> (= nós)</div>\n  <div class=\"def\"><span class=\"def-t\">Indeterminado</span> existe alguém, mas não se diz quem — <i><b>Roubaram</b> meu celular.</i> (verbo na 3ª pessoa do plural sem referente) ou <i>Precisa-<b>se</b> de servidores.</i> (verbo + SE, com preposição)</div>\n  <div class=\"def\"><span class=\"def-t\">Inexistente (oração sem sujeito)</span> não há sujeito nenhum — <i><b>Há</b> vagas.</i> / <i><b>Chove</b> muito.</i> / <i><b>Faz</b> dois anos.</i></div>\n</div>\n<p class=\"destaque\"><b>A pegadinha campeã:</b> em <i>Havia muitos candidatos</i>, “muitos candidatos” <b>não é sujeito</b> — é objeto direto. O verbo <i>haver</i> no sentido de <i>existir</i> não tem sujeito, e por isso fica sempre no singular: <i>Havia muitos candidatos</i>, nunca “Haviam”. O mesmo vale para <i>fazer</i> de tempo: <i>Faz dois anos</i>, nunca “Fazem dois anos”.</p>"
            },
            {
              "titulo": "Predicado: os três tipos",
              "html": "\n<p><b>Predicado</b> é tudo o que se declara sobre o sujeito — na prática, o verbo e o que vem com ele. O que muda entre os três tipos é <b>onde está a informação principal</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Verbal</span> o núcleo é um verbo de ação: <i>O candidato <b>chegou</b> cedo.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Nominal</span> o núcleo é um NOME, ligado por verbo de ligação: <i>O candidato <b>está cansado</b>.</i> A informação está em “cansado”, não em “está”.</div>\n  <div class=\"def\"><span class=\"def-t\">Verbo-nominal</span> tem os dois — ação e característica: <i>O candidato <b>chegou cansado</b>.</i></div>\n</div>\n<p>Os <b>verbos de ligação</b> são poucos e vale reconhecê-los de cara: <i>ser, estar, parecer, ficar, permanecer, continuar, tornar-se, andar</i> (no sentido de estado). Eles não indicam ação — só ligam o sujeito a uma característica.</p>\n<p class=\"mnemonic\">Teste rápido: se você puder trocar o verbo por “ser” sem perder o sentido geral, ele é de ligação. <i>Ele anda triste</i> → <i>Ele está triste</i> → ligação. <i>Ele anda pela praia</i> → “está pela praia” não fecha → verbo de ação.</p>"
            },
            {
              "titulo": "Predicativo: do sujeito e do objeto",
              "html": "\n<p><b>Predicativo</b> é o termo que atribui uma qualidade ou estado <i>através do verbo</i>. Não confunda com adjetivo: adjetivo é a classe, predicativo é a função.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Predicativo do sujeito</span> a qualidade recai sobre o sujeito — <i>A prova parece <b>difícil</b>.</i> / <i>Os candidatos chegaram <b>nervosos</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Predicativo do objeto</span> a qualidade recai sobre o objeto — <i>Considero a prova <b>difícil</b>.</i> (difícil é “a prova”, que é objeto direto)</div>\n</div>\n<p>Como separar do adjunto adnominal, que também é uma qualidade: o <b>adjunto adnominal cola no substantivo</b> (<i>a prova <b>difícil</b> começou</i>), enquanto o <b>predicativo depende do verbo</b> (<i>a prova está <b>difícil</b></i>). Tire o verbo e o predicativo perde o apoio.</p>"
            },
            {
              "titulo": "Termos integrantes: objeto direto e objeto indireto",
              "html": "\n<p>Chamam-se “integrantes” porque <b>integram</b> — completam — o sentido de uma palavra que sozinha fica pela metade. <i>Comprei</i> pede resposta: comprei o quê?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Objeto direto</span> completa o verbo <b>sem preposição</b> — <i>Li <b>o edital</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Objeto indireto</span> completa o verbo <b>com preposição obrigatória</b> — <i>Preciso <b>do edital</b>.</i> / <i>Obedeço <b>às normas</b>.</i></div>\n</div>\n<p>Repare que quem manda na preposição é o verbo — isso é exatamente a <b>regência verbal</b>. <i>Assistir</i> no sentido de ver pede “a” (<i>assisti <b>ao</b> filme</i>); <i>obedecer</i> pede “a”; <i>gostar</i> pede “de”. Por isso os dois assuntos andam juntos.</p>\n<p class=\"mnemonic\">Teste do pronome: se dá para trocar por <b>o / a / os / as</b>, é objeto direto (<i>Li o edital → Li-<b>o</b></i>). Se dá para trocar por <b>lhe / lhes</b>, é objeto indireto (<i>Obedeço às normas → Obedeço-<b>lhes</b></i>).</p>"
            },
            {
              "titulo": "Complemento nominal: quando quem pede é um nome",
              "html": "\n<p>Verbo não é a única palavra que fica pela metade. <b>Nomes</b> também pedem complemento — e aí o termo se chama <b>complemento nominal</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Completa um substantivo</span> <i>Tenho necessidade <b>de descanso</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Completa um adjetivo</span> <i>Ela é favorável <b>à proposta</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Completa um advérbio</span> <i>Agiu favoravelmente <b>ao servidor</b>.</i></div>\n</div>\n<p>Duas marcas sempre presentes: vem <b>com preposição</b> e o termo é o <b>alvo</b> (quem sofre) da ideia expressa pelo nome.</p>\n<p class=\"destaque\">Guarde este atalho, porque resolve metade das questões: <b>se o termo se liga a um adjetivo ou a um advérbio, é sempre complemento nominal</b> — adjunto adnominal só existe junto de substantivo.</p>"
            },
            {
              "titulo": "Agente da passiva",
              "html": "\n<p>Na voz passiva, o sujeito <i>sofre</i> a ação em vez de praticá-la. Quem pratica aparece introduzido por <b>por</b> (ou, mais raro, <b>de</b>) e se chama <b>agente da passiva</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Voz ativa</span> <i>A FGV publicou o edital.</i> — “A FGV” é sujeito e pratica.</div>\n  <div class=\"def\"><span class=\"def-t\">Voz passiva</span> <i>O edital foi publicado <b>pela FGV</b>.</i> — “O edital” é sujeito e sofre; “pela FGV” é agente da passiva.</div>\n</div>\n<p>Como reconhecer de longe: <b>verbo SER + particípio</b> (foi publicado, será analisado, é assinado) e, logo depois, um termo com <i>por / pelo / pela</i>.</p>\n<p class=\"mnemonic\">O agente da passiva é o único termo preposicionado que vira SUJEITO quando você passa a frase para a voz ativa. Esse é o teste definitivo.</p>"
            },
            {
              "titulo": "Termos acessórios: adjuntos, aposto e vocativo",
              "html": "\n<p>São “acessórios” porque acrescentam informação sem serem exigidos por ninguém — dá para tirar e a frase continua de pé.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Adjunto adnominal</span> acompanha um <b>substantivo</b>, caracterizando-o. Pode ser artigo, adjetivo, pronome, numeral ou locução com preposição: <i><b>O meu segundo</b> filho <b>caçula</b></i> — os quatro são adjuntos adnominais de “filho”.</div>\n  <div class=\"def\"><span class=\"def-t\">Adjunto adverbial</span> indica circunstância (tempo, lugar, modo, causa, intensidade, finalidade) e se liga ao <b>verbo</b>: <i>A prova será <b>em outubro</b>, <b>em João Pessoa</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Aposto</span> explica ou especifica outro termo, normalmente entre vírgulas: <i>A FGV, <b>banca do concurso</b>, divulgou o edital.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Vocativo</span> chama o interlocutor e NÃO pertence à estrutura da oração: <i><b>Candidatos</b>, leiam o edital.</i></div>\n</div>\n<p class=\"destaque\">Aposto x vocativo é questão fácil que muita gente erra: o <b>aposto</b> se refere a um termo da frase e pode ser trocado por ele (<i>a banca do concurso divulgou</i>); o <b>vocativo</b> chama alguém de fora da frase e não pode substituir nada.</p>"
            },
            {
              "titulo": "O teste que decide: adjunto adnominal x complemento nominal",
              "html": "\n<p>Esta é <b>a</b> distinção do assunto. Os dois vêm depois de um substantivo, os dois vêm com preposição, e a diferença é só uma: <b>quem faz e quem sofre a ação</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">a leitura <b>do edital</b></span> transforme em verbo: <i>o edital é lido</i> → o edital SOFRE → paciente → <b>complemento nominal</b></div>\n  <div class=\"def\"><span class=\"def-t\">a leitura <b>do candidato</b></span> transforme em verbo: <i>o candidato lê</i> → o candidato PRATICA → agente → <b>adjunto adnominal</b></div>\n</div>\n<p>O procedimento, passo a passo, para usar na prova:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. A que palavra o termo se liga?</span> Se for adjetivo ou advérbio → complemento nominal, acabou. Se for substantivo, siga.</div>\n  <div class=\"def\"><span class=\"def-t\">2. Esse substantivo é abstrato, derivado de verbo?</span> (<i>leitura, combate, respeito, construção, análise</i>) Se não for, quase sempre é adjunto adnominal (posse, qualidade, origem).</div>\n  <div class=\"def\"><span class=\"def-t\">3. Transforme em oração com verbo.</span> O termo virou quem pratica → adjunto adnominal. Virou quem sofre → complemento nominal.</div>\n</div>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">o combate <b>ao crime</b></span> combate-se o crime → sofre → complemento nominal</div>\n  <div class=\"def\"><span class=\"def-t\">o combate <b>da polícia</b></span> a polícia combate → pratica → adjunto adnominal</div>\n  <div class=\"def\"><span class=\"def-t\">a casa <b>do vizinho</b></span> ninguém “casa” nada; é posse → adjunto adnominal</div>\n</div>\n<p class=\"destaque\">Quando os dois aparecem na mesma frase, é sinal claro de que a questão está testando exatamente isto: <i>O respeito <b>dos servidores</b> <b>às normas</b></i> — os servidores respeitam (agente, adjunto adnominal), as normas são respeitadas (paciente, complemento nominal).</p>"
            },
            {
              "titulo": "Como a FGV pergunta isso",
              "html": "\n<p>Os formatos se repetem. Reconhecer o formato já adianta meia questão:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">“O termo sublinhado exerce a função de…”</span> pede a função sintática. Faça os testes; não responda pela classe da palavra.</div>\n  <div class=\"def\"><span class=\"def-t\">“Os termos X e Y têm, respectivamente, as funções de…”</span> quase sempre é o par adjunto adnominal x complemento nominal.</div>\n  <div class=\"def\"><span class=\"def-t\">“Assinale a frase em que o sujeito é indeterminado / a oração não tem sujeito”</span> procure <i>haver</i> = existir, <i>fazer</i> de tempo, fenômeno da natureza, verbo na 3ª pessoa do plural sem referente e o SE com preposição.</div>\n  <div class=\"def\"><span class=\"def-t\">“A palavra destacada classifica-se morfologicamente como… e sintaticamente como…”</span> é a morfossintaxe pura: duas respostas na mesma alternativa, e basta uma estar errada para a opção cair.</div>\n</div>\n<p class=\"mnemonic\">Ordem de ataque em qualquer questão de sintaxe: 1) conte os verbos; 2) ache o sujeito perguntando “quem?” antes do verbo; 3) veja se o que sobrou completa um VERBO (objeto) ou um NOME (complemento nominal); 4) o resto é adjunto, aposto ou vocativo.</p>"
            }
          ],
          "flashcards": [
            {
              "tema": "Base",
              "pergunta": "Qual a diferença entre morfologia e sintaxe?",
              "resposta": "Morfologia é o que a palavra É (a classe: substantivo, verbo, adjetivo…). Sintaxe é o que ela FAZ naquela frase (a função: sujeito, objeto, adjunto…). Morfossintaxe é olhar as duas juntas."
            },
            {
              "tema": "Base",
              "pergunta": "Como se conta o número de orações de um período?",
              "resposta": "Contando verbos: um verbo, uma oração. Locução verbal (vou estudar, tenho estudado) conta como um verbo só."
            },
            {
              "tema": "Sujeito",
              "pergunta": "Qual a pergunta certa para achar o sujeito?",
              "resposta": "“Quem?” ou “o quê?” ANTES do verbo. Depois do verbo a resposta é objeto, não sujeito."
            },
            {
              "tema": "Sujeito",
              "pergunta": "Quais são os cinco tipos de sujeito?",
              "resposta": "Simples, composto, oculto (desinencial), indeterminado e inexistente (oração sem sujeito)."
            },
            {
              "tema": "Sujeito",
              "pergunta": "Em “Havia muitos candidatos”, qual a função de “muitos candidatos”?",
              "resposta": "Objeto direto. “Haver” no sentido de existir não tem sujeito, então fica sempre no singular: “Havia”, nunca “Haviam”."
            },
            {
              "tema": "Sujeito",
              "pergunta": "Quais são as duas formas clássicas de sujeito indeterminado?",
              "resposta": "Verbo na 3ª pessoa do plural sem referente (“Roubaram meu celular”) e verbo na 3ª do singular + SE com preposição (“Precisa-se de servidores”)."
            },
            {
              "tema": "Predicado",
              "pergunta": "Quais são os três tipos de predicado?",
              "resposta": "Verbal (núcleo é verbo de ação), nominal (núcleo é um nome, com verbo de ligação) e verbo-nominal (tem os dois)."
            },
            {
              "tema": "Predicado",
              "pergunta": "Cite os verbos de ligação mais cobrados.",
              "resposta": "Ser, estar, parecer, ficar, permanecer, continuar, tornar-se e andar (no sentido de estado)."
            },
            {
              "tema": "Predicado",
              "pergunta": "Como distinguir predicativo de adjunto adnominal?",
              "resposta": "O adjunto adnominal cola no substantivo (“a prova difícil começou”); o predicativo depende do verbo (“a prova está difícil”). Tire o verbo e o predicativo perde o apoio."
            },
            {
              "tema": "Complementos",
              "pergunta": "Qual a diferença entre objeto direto e objeto indireto?",
              "resposta": "O direto completa o verbo sem preposição (“Li o edital”); o indireto completa com preposição obrigatória, exigida pela regência (“Obedeço às normas”)."
            },
            {
              "tema": "Complementos",
              "pergunta": "Qual o teste do pronome para separar OD de OI?",
              "resposta": "Se cabe o/a/os/as, é objeto direto (Li-o). Se cabe lhe/lhes, é objeto indireto (Obedeço-lhes)."
            },
            {
              "tema": "Complementos",
              "pergunta": "O que é complemento nominal?",
              "resposta": "O termo preposicionado que completa um NOME — substantivo, adjetivo ou advérbio — e é o alvo (paciente) da ideia desse nome. Ex.: “necessidade de descanso”, “favorável à proposta”."
            },
            {
              "tema": "Complementos",
              "pergunta": "Qual o atalho que resolve metade dos casos de complemento nominal?",
              "resposta": "Se o termo se liga a um ADJETIVO ou a um ADVÉRBIO, é sempre complemento nominal — adjunto adnominal só existe junto de substantivo."
            },
            {
              "tema": "Complementos",
              "pergunta": "Como identificar o agente da passiva?",
              "resposta": "Verbo SER + particípio (foi publicado) seguido de termo com por/pelo/pela. Teste: ao passar para a voz ativa, ele vira o sujeito."
            },
            {
              "tema": "Acessórios",
              "pergunta": "O que pode ser adjunto adnominal?",
              "resposta": "Artigo, adjetivo, pronome, numeral e locução adjetiva — tudo que acompanha e caracteriza um substantivo. Ex.: “O meu segundo filho caçula”."
            },
            {
              "tema": "Acessórios",
              "pergunta": "Qual a diferença entre aposto e vocativo?",
              "resposta": "O aposto se refere a um termo da frase e pode substituí-lo (“A FGV, banca do concurso, divulgou”). O vocativo chama alguém e não pertence à estrutura da oração (“Candidatos, leiam o edital”)."
            },
            {
              "tema": "AA x CN",
              "pergunta": "Qual é o teste que separa adjunto adnominal de complemento nominal?",
              "resposta": "Transformar em oração com verbo: se o termo PRATICA a ação, é adjunto adnominal (agente); se SOFRE, é complemento nominal (paciente)."
            },
            {
              "tema": "AA x CN",
              "pergunta": "Classifique: “a leitura do edital” e “a leitura do candidato”.",
              "resposta": "“do edital” é complemento nominal (o edital é lido — paciente). “do candidato” é adjunto adnominal (o candidato lê — agente)."
            },
            {
              "tema": "AA x CN",
              "pergunta": "Classifique “dos servidores” e “às normas” em “O respeito dos servidores às normas”.",
              "resposta": "“dos servidores” é adjunto adnominal (eles respeitam); “às normas” é complemento nominal (elas são respeitadas)."
            },
            {
              "tema": "Prova",
              "pergunta": "Qual a ordem de ataque numa questão de sintaxe?",
              "resposta": "1) conte os verbos; 2) ache o sujeito perguntando “quem?” antes do verbo; 3) veja se o termo completa um VERBO (objeto) ou um NOME (complemento nominal); 4) o resto é adjunto, aposto ou vocativo."
            }
          ],
          "simulados": [
            {
              "id": "termos-oracao-01",
              "nome": "Termos da oração — do sujeito ao complemento nominal",
              "descricao": "Morfologia x sintaxe, tipos de sujeito e predicado, objetos, adjuntos e o par adjunto adnominal x complemento nominal.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Conceito · morfologia x sintaxe",
                  "text": "A diferença entre morfologia e sintaxe está em que:",
                  "options": [
                    "a morfologia estuda a função da palavra na frase, e a sintaxe, a classe a que ela pertence;",
                    "a morfologia estuda a classe da palavra, e a sintaxe, a função que ela exerce na frase;",
                    "ambas estudam a função da palavra, diferindo apenas quanto ao nível de análise;",
                    "a morfologia se aplica apenas a substantivos e verbos, e a sintaxe, às demais classes."
                  ],
                  "answer": 1,
                  "exp": "Morfologia = o que a palavra É (classe: substantivo, verbo, adjetivo…). Sintaxe = o que ela FAZ naquela frase (função: sujeito, objeto, adjunto…). A classe é fixa; a função muda conforme a frase — “casa” é sempre substantivo, mas é sujeito em “A casa é grande” e objeto direto em “Comprei a casa”."
                },
                {
                  "type": "mc",
                  "tag": "Termos · objeto direto",
                  "text": "Em “Comprei a casa”, o termo “a casa” exerce a função sintática de:",
                  "options": [
                    "sujeito;",
                    "objeto direto;",
                    "predicativo do sujeito;",
                    "complemento nominal;",
                    "adjunto adverbial."
                  ],
                  "answer": 1,
                  "exp": "A pergunta do sujeito é feita ANTES do verbo (“quem comprou?” = eu, sujeito oculto). Depois do verbo a resposta é objeto: comprei o quê? a casa. Sem preposição → objeto direto."
                },
                {
                  "type": "mc",
                  "tag": "Período · contagem de orações",
                  "text": "O período “Estudei porque quero passar” é formado por:",
                  "options": [
                    "uma oração;",
                    "duas orações;",
                    "três orações;",
                    "quatro orações."
                  ],
                  "answer": 2,
                  "exp": "A régua é contar verbos: estudei, quero, passar → três verbos, três orações. Atenção: “quero passar” aqui não é locução verbal (querer não é auxiliar de tempo/modo), então conta como dois verbos."
                },
                {
                  "type": "ce",
                  "tag": "Sujeito · verbo haver",
                  "text": "Em “Havia muitos candidatos na sala”, o termo “muitos candidatos” exerce a função de sujeito da oração.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. “Haver” no sentido de existir é impessoal: a oração NÃO tem sujeito, e “muitos candidatos” é objeto direto. É exatamente por isso que o verbo fica no singular — “Havia muitos candidatos”, nunca “Haviam”."
                },
                {
                  "type": "mc",
                  "tag": "Sujeito · indeterminado",
                  "text": "Assinale a opção em que o sujeito é INDETERMINADO:",
                  "options": [
                    "Chove muito em João Pessoa.",
                    "Precisa-se de servidores qualificados.",
                    "Faz dois anos que estudo para o concurso.",
                    "Há vagas para o cargo de analista.",
                    "Os candidatos chegaram cedo."
                  ],
                  "answer": 1,
                  "exp": "Sujeito indeterminado existe, mas não se identifica. Aqui a marca é o verbo na 3ª pessoa do singular + SE, com o complemento preposicionado (“de servidores”). Nas opções A, C e D a oração é SEM SUJEITO (fenômeno da natureza, “fazer” de tempo e “haver” = existir); em E o sujeito é simples."
                },
                {
                  "type": "mc",
                  "tag": "Predicado · tipos",
                  "text": "Em “O candidato chegou cansado”, o predicado classifica-se como:",
                  "options": [
                    "verbal;",
                    "nominal;",
                    "verbo-nominal;",
                    "verbal, com adjunto adverbial de modo."
                  ],
                  "answer": 2,
                  "exp": "Há duas informações: a ação (chegou) e o estado do sujeito (cansado, predicativo do sujeito). Predicado com verbo de ação + predicativo = verbo-nominal. Se fosse só “O candidato chegou”, seria verbal; se fosse “O candidato está cansado”, nominal."
                },
                {
                  "type": "mc",
                  "tag": "Predicativo · do objeto",
                  "text": "Em “Considero a prova difícil”, o termo “difícil” exerce a função de:",
                  "options": [
                    "adjunto adnominal;",
                    "predicativo do sujeito;",
                    "predicativo do objeto;",
                    "complemento nominal;",
                    "objeto direto."
                  ],
                  "answer": 2,
                  "exp": "A qualidade recai sobre “a prova”, que é objeto direto de “considero” → predicativo do objeto. Não é adjunto adnominal porque não está colado ao substantivo caracterizando-o (“a prova difícil”), e sim atribuído através do verbo."
                },
                {
                  "type": "mc",
                  "tag": "Termos · objeto indireto",
                  "text": "Em “Obedeço às normas do edital”, o termo “às normas” classifica-se como:",
                  "options": [
                    "objeto direto;",
                    "objeto indireto;",
                    "complemento nominal;",
                    "adjunto adverbial;",
                    "agente da passiva."
                  ],
                  "answer": 1,
                  "exp": "Quem completa um VERBO é objeto; com preposição obrigatória, objeto indireto. A preposição vem da regência de “obedecer”, que é verbo transitivo indireto (obedecer A alguma coisa). Teste do pronome: “obedeço-lhes” → objeto indireto."
                },
                {
                  "type": "mc",
                  "tag": "Termos · complemento nominal",
                  "text": "Em “Ela é favorável à proposta”, o termo “à proposta” exerce a função de:",
                  "options": [
                    "objeto indireto;",
                    "adjunto adnominal;",
                    "complemento nominal;",
                    "adjunto adverbial;",
                    "predicativo do sujeito."
                  ],
                  "answer": 2,
                  "exp": "Quem pede a preposição é o ADJETIVO “favorável”, não um verbo — logo, complemento nominal, e não objeto indireto. Vale o atalho: termo ligado a adjetivo ou advérbio é sempre complemento nominal, porque adjunto adnominal só existe junto de substantivo."
                },
                {
                  "type": "mc",
                  "tag": "AA x CN · agente e paciente",
                  "text": "Em “O respeito dos servidores às normas foi elogiado pelo diretor”, os termos destacados “dos servidores”, “às normas” e “pelo diretor” classificam-se, respectivamente, como:",
                  "options": [
                    "adjunto adnominal, complemento nominal e agente da passiva;",
                    "complemento nominal, adjunto adnominal e agente da passiva;",
                    "adjunto adnominal, objeto indireto e adjunto adverbial;",
                    "complemento nominal, complemento nominal e agente da passiva;",
                    "adjunto adnominal, complemento nominal e adjunto adverbial."
                  ],
                  "answer": 0,
                  "exp": "Transforme em verbo: “os servidores respeitam” → praticam → adjunto adnominal; “as normas são respeitadas” → sofrem → complemento nominal. “Pelo diretor” vem depois de SER + particípio (foi elogiado) → agente da passiva. Objeto indireto está fora porque o termo completa um NOME, não um verbo."
                },
                {
                  "type": "mc",
                  "tag": "AA x CN · teste do verbo",
                  "text": "Em “o combate ao crime” e “o combate da polícia”, os termos preposicionados classificam-se, respectivamente, como:",
                  "options": [
                    "complemento nominal e adjunto adnominal;",
                    "adjunto adnominal e complemento nominal;",
                    "objeto indireto e agente da passiva;",
                    "complemento nominal e complemento nominal;",
                    "adjunto adnominal e adjunto adnominal."
                  ],
                  "answer": 0,
                  "exp": "“Combate-se o crime” → o crime sofre a ação → paciente → complemento nominal. “A polícia combate” → pratica a ação → agente → adjunto adnominal. Mesmo substantivo, mesma preposição, classificações opostas: o que decide é quem faz e quem sofre."
                },
                {
                  "type": "mc",
                  "tag": "Voz passiva · agente",
                  "text": "Em “O edital foi publicado pela FGV”, o termo “pela FGV” classifica-se como:",
                  "options": [
                    "adjunto adverbial de meio;",
                    "agente da passiva;",
                    "objeto indireto;",
                    "complemento nominal;",
                    "adjunto adnominal."
                  ],
                  "answer": 1,
                  "exp": "A estrutura SER + particípio (foi publicado) marca a voz passiva, e quem pratica a ação aparece com “por/pela” → agente da passiva. Teste definitivo: ao passar para a voz ativa, ele vira o sujeito — “A FGV publicou o edital”."
                },
                {
                  "type": "ce",
                  "tag": "Vocativo",
                  "text": "Em “Candidatos, leiam o edital”, o termo “Candidatos” exerce a função de sujeito da oração.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. “Candidatos” é VOCATIVO: chama o interlocutor e não pertence à estrutura da oração. O sujeito é oculto (vocês), revelado pela desinência de “leiam”. O vocativo é o único termo que fica de fora da análise sintática da oração."
                },
                {
                  "type": "mc",
                  "tag": "Aposto",
                  "text": "Em “A FGV, banca do concurso, divulgou o edital”, o termo “banca do concurso” classifica-se como:",
                  "options": [
                    "vocativo;",
                    "aposto;",
                    "predicativo do sujeito;",
                    "adjunto adnominal;",
                    "complemento nominal."
                  ],
                  "answer": 1,
                  "exp": "O termo explica “A FGV” e pode substituí-lo na frase (“A banca do concurso divulgou o edital”) → aposto explicativo. Não é vocativo, que chama alguém de fora da frase e não substitui nenhum termo; nem predicativo, que dependeria de um verbo para atribuir a característica."
                }
              ]
            }
          ]
        },
        {
          "id": "periodo-composto",
          "nome": "Período composto: coordenação e subordinação",
          "icon": "ti-git-branch",
          "descricao": "Do zero: como as orações se ligam. Coordenadas (as cinco sindéticas), substantivas com o truque do “isso”, adjetivas restritivas x explicativas e as nove adverbiais — mais as cinco caras do “que”, que é a pegadinha preferida da FGV.",
          "resumo": [
            {
              "titulo": "Ponto de partida: período simples e período composto",
              "html": "\n<p>Antes de classificar qualquer coisa, a régua de sempre: <b>oração é enunciado com verbo</b>. Um verbo, uma oração.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Período simples</span> uma única oração — <i>A prova será em outubro.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Período composto</span> duas ou mais orações — <i>Estudei porque quero passar.</i> (3 verbos → 3 orações)</div>\n</div>\n<p>Quando o período é composto, as orações se ligam de <b>dois jeitos possíveis</b>, e o assunto inteiro se resume a saber qual dos dois:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Coordenação</span> orações <b>independentes</b>, lado a lado. Cada uma tem sentido próprio e nenhuma é termo da outra.</div>\n  <div class=\"def\"><span class=\"def-t\">Subordinação</span> uma oração é <b>termo sintático</b> da outra. Ela exerce, dentro do período, a função de sujeito, objeto, adjunto, adjetivo…</div>\n</div>\n<p class=\"mnemonic\">Coordenação é sociedade entre iguais; subordinação é empresa com chefe e funcionário — o funcionário é <i>parte</i> da estrutura do chefe.</p>\n<p>Como decidir na prática: tente <b>ler a segunda oração sozinha</b>. Se ela faz sentido por si (<i>não passei</i>), é coordenada. Se ela fica pendurada, esperando a outra (<i>que você estude</i>), é subordinada.</p>"
            },
            {
              "titulo": "Coordenadas: assindéticas e sindéticas",
              "html": "\n<p>“Síndeto” é o nome grego da conjunção. Daí saem os dois grupos:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Assindética</span> sem conjunção, só vírgula — <i>Cheguei, sentei, comecei a prova.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Sindética</span> com conjunção coordenativa — <i>Cheguei <b>e</b> comecei a prova.</i></div>\n</div>\n<p>Note que a primeira oração de um período coordenado nunca é classificada: só as que vêm ligadas recebem nome. Em <i>Estudei, mas não passei</i>, temos a oração inicial (principal do ponto de vista prático) e uma <b>coordenada sindética adversativa</b>.</p>"
            },
            {
              "titulo": "As cinco coordenadas sindéticas",
              "html": "\n<p>São cinco relações de sentido, e a conjunção entrega qual é.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Aditiva — soma</span> <i>e, nem, não só… mas também, bem como</i> — <i>Estudei <b>e</b> descansei.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Adversativa — oposição</span> <i>mas, porém, contudo, todavia, entretanto, no entanto</i> — <i>Estudei, <b>mas</b> não passei.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Alternativa — escolha</span> <i>ou, ou… ou, ora… ora, quer… quer, seja… seja</i> — <i><b>Ou</b> estudo <b>ou</b> durmo.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Conclusiva — conclusão</span> <i>logo, portanto, por isso, assim, pois</i> (depois do verbo) — <i>Estudei muito; <b>portanto</b>, passei.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Explicativa — justificativa</span> <i>porque, pois</i> (antes do verbo)<i>, que, porquanto</i> — <i>Estude, <b>pois</b> a prova é amanhã.</i></div>\n</div>\n<p class=\"destaque\"><b>A pegadinha do “pois”:</b> antes do verbo é <b>explicativa</b> (<i>Não saia, <b>pois</b> está chovendo</i>); deslocado para depois do verbo, entre vírgulas, é <b>conclusiva</b> (<i>Está chovendo; não saia, <b>pois</b></i>). A mesma palavra, duas classificações — e a posição é o único sinal.</p>\n<p class=\"mnemonic\">Para gravar a ordem: <b>A</b>ditiva, <b>A</b>dversativa, <b>A</b>lternativa, <b>C</b>onclusiva, <b>E</b>xplicativa. Três “A” e depois “CE”.</p>"
            },
            {
              "titulo": "Subordinadas substantivas e o truque do “isso”",
              "html": "\n<p>Subordinada <b>substantiva</b> é a oração que faz o papel de um substantivo dentro do período. São introduzidas pelas <b>conjunções integrantes que e se</b>.</p>\n<div class=\"destaque\"><b>O truque do “isso”:</b> substitua a oração inteira por <b>isso</b>. Se couber, ela é substantiva — e a função que “isso” exerce <i>é</i> a classificação da oração.</div>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">É necessário <b>que você estude</b></span> → <i>É necessário <b>isso</b></i> → “isso” é sujeito → <b>subjetiva</b></div>\n  <div class=\"def\"><span class=\"def-t\">Quero <b>que você estude</b></span> → <i>Quero <b>isso</b></i> → “isso” é objeto direto → <b>objetiva direta</b></div>\n</div>\n<p>As seis possíveis, que são as seis funções de um substantivo:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Subjetiva</span> faz de sujeito — <i>Convém <b>que você leia o edital</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Objetiva direta</span> faz de objeto direto — <i>Sei <b>que a prova é difícil</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Objetiva indireta</span> faz de objeto indireto (verbo com preposição) — <i>Preciso de <b>que me ajudem</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Completiva nominal</span> completa um NOME (preposição vem do nome) — <i>Tenho certeza de <b>que passarei</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Predicativa</span> vem depois de verbo de ligação — <i>Meu desejo é <b>que eu passe</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Apositiva</span> funciona como aposto, quase sempre após dois-pontos — <i>Só quero uma coisa: <b>que a prova seja justa</b>.</i></div>\n</div>\n<p class=\"mnemonic\">Sempre que o período começar com <b>é + adjetivo</b> (é necessário, é preciso, é claro, é indispensável) ou com <b>convém, importa, consta, parece</b>, a oração seguinte é <b>subjetiva</b>. Esse padrão sozinho já resolve muita questão.</p>"
            },
            {
              "titulo": "Subordinadas adjetivas: o pronome relativo",
              "html": "\n<p>Subordinada <b>adjetiva</b> é a oração que faz o papel de um adjetivo: caracteriza um substantivo anterior, chamado <b>antecedente</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Candidatos <b>que estudam</b> passam.</span> equivale a <i>Candidatos <b>estudiosos</b> passam.</i></div>\n</div>\n<p>Elas são introduzidas por <b>pronome relativo</b>: <i>que, quem, o qual, cujo, onde, quanto</i>. O pronome relativo tem duas marcas: retoma um termo anterior e, ao mesmo tempo, exerce uma função dentro da própria oração.</p>\n<p>Duas espécies — e a diferença é só a vírgula, mas ela muda o sentido da frase:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Restritiva (sem vírgula)</span> delimita um subgrupo — <i>Os candidatos <b>que estudaram</b> passaram.</i> → só uma parte passou.</div>\n  <div class=\"def\"><span class=\"def-t\">Explicativa (entre vírgulas)</span> acrescenta informação sobre a totalidade — <i>Os candidatos, <b>que estudaram</b>, passaram.</i> → todos estudaram e todos passaram.</div>\n</div>\n<p class=\"destaque\">É por isso que a FGV cobra pontuação e sintaxe na mesma questão: a vírgula não é enfeite, é informação. Quando o antecedente é <b>único no mundo</b> (a LGPD, o Brasil, minha mãe), a adjetiva só pode ser explicativa — não há de quem distingui-lo.</p>"
            },
            {
              "titulo": "Subordinadas adverbiais: as nove",
              "html": "\n<p>Subordinada <b>adverbial</b> é a oração que faz o papel de um advérbio: indica uma circunstância em relação à oração principal. São nove, e cada uma tem conjunções típicas.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Causal — causa</span> <i>porque, como</i> (no início)<i>, já que, visto que, uma vez que</i> — <i><b>Como choveu</b>, cheguei atrasada.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Consecutiva — consequência</span> <i>que</i> (depois de tão, tanto, tal)<i>, de modo que</i> — <i>Estudou <b>tanto que adoeceu</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Comparativa — comparação</span> <i>como, do que, assim como</i> — <i>Estuda <b>como quem tem sede</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Condicional — condição</span> <i>se, caso, desde que, contanto que, salvo se</i> — <i><b>Se você estudar</b>, passará.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Concessiva — quebra de expectativa</span> <i>embora, ainda que, mesmo que, conquanto, apesar de</i> — <i><b>Embora tenha estudado</b>, não passei.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Conformativa — conformidade</span> <i>conforme, segundo, como, consoante</i> — <i><b>Conforme prevê o edital</b>, a prova é em outubro.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Final — finalidade</span> <i>para que, a fim de que, que</i> — <i>Estudo <b>para que eu passe</b>.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Proporcional — proporção</span> <i>à medida que, ao passo que, quanto mais… mais</i> — <i><b>À medida que estudava</b>, ficava mais confiante.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Temporal — tempo</span> <i>quando, enquanto, assim que, logo que, antes que, depois que</i> — <i><b>Quando a prova acabar</b>, descanso.</i></div>\n</div>\n<p class=\"mnemonic\">A FGV raramente pede o nome puro: ela costuma pedir a <b>troca do conectivo sem alterar o sentido</b>. Então o que interessa é saber agrupar: embora / ainda que / mesmo que / conquanto são todas concessivas; se / caso / desde que são condicionais; conforme / segundo / consoante são conformativas.</p>"
            },
            {
              "titulo": "A confusão mais comum: causal x explicativa",
              "html": "\n<p>As duas usam <i>porque</i>, mas uma é <b>subordinada</b> e a outra é <b>coordenada</b> — classificação completamente diferente.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Causal (subordinada adverbial)</span> a primeira oração é <b>efeito real</b> da segunda: <i>A rua está molhada <b>porque choveu</b>.</i> — chover molhou a rua de fato.</div>\n  <div class=\"def\"><span class=\"def-t\">Explicativa (coordenada sindética)</span> a segunda justifica uma <b>suposição, conselho ou ordem</b> da primeira: <i>Choveu, <b>porque</b> a rua está molhada.</i> — a rua molhada é a minha PROVA de que choveu, não a causa da chuva.</div>\n</div>\n<p class=\"destaque\">Regra prática infalível: se a primeira oração estiver no <b>imperativo</b> (<i>Estude, pois…</i> / <i>Corra, que…</i> / <i>Não saia, porque…</i>), é <b>explicativa</b>. Sempre. Ordem não tem causa — tem justificativa.</p>"
            },
            {
              "titulo": "Orações reduzidas",
              "html": "\n<p>Quando a subordinada <b>não</b> vem introduzida por conjunção e o verbo está numa <b>forma nominal</b> — infinitivo (-ar, -er, -ir), gerúndio (-ndo) ou particípio (-ado, -ido) — ela é chamada de <b>reduzida</b>.</p>\n<p>Classificar é simples: <b>desdobre</b> a oração, devolvendo a conjunção e o verbo conjugado. A classificação da forma desenvolvida é a mesma da reduzida.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\"><b>Ao chegar</b> em casa, estudei.</span> reduzida de infinitivo → <i>Quando cheguei</i> → adverbial <b>temporal</b></div>\n  <div class=\"def\"><span class=\"def-t\"><b>Estudando</b> muito, você passa.</span> reduzida de gerúndio → <i>Se estudar muito</i> → adverbial <b>condicional</b></div>\n  <div class=\"def\"><span class=\"def-t\"><b>Terminada</b> a prova, saí.</span> reduzida de particípio → <i>Depois que a prova terminou</i> → adverbial <b>temporal</b></div>\n  <div class=\"def\"><span class=\"def-t\">É preciso <b>estudar</b>.</span> reduzida de infinitivo → <i>que se estude</i> → substantiva <b>subjetiva</b></div>\n</div>\n<p class=\"mnemonic\">Reduzida também existe em substantiva e adjetiva, não só adverbial. O nome completo junta os dois dados: “oração subordinada adverbial temporal reduzida de infinitivo”.</p>"
            },
            {
              "titulo": "As cinco caras do “que”",
              "html": "\n<p>A FGV vive dessa palavra, porque ela pode ser cinco coisas — às vezes duas delas na mesma frase.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Pronome relativo</span> tem <b>antecedente</b> e aceita a troca por <i>o qual / a qual</i>: <i>O edital <b>que</b> li é longo.</i> → introduz oração <b>adjetiva</b>.</div>\n  <div class=\"def\"><span class=\"def-t\">2. Conjunção integrante</span> NÃO tem antecedente; a oração inteira cabe em “isso”: <i>Sei <b>que</b> o edital é longo</i> → <i>Sei isso</i> → introduz oração <b>substantiva</b>.</div>\n  <div class=\"def\"><span class=\"def-t\">3. Conjunção consecutiva</span> vem depois de <i>tão, tanto, tamanho, tal</i>: <i>É <b>tão</b> longo <b>que</b> cansa.</i></div>\n  <div class=\"def\"><span class=\"def-t\">4. Conjunção explicativa ou causal</span> equivale a <i>porque</i>: <i>Corra, <b>que</b> está atrasada.</i></div>\n  <div class=\"def\"><span class=\"def-t\">5. Partícula expletiva (de realce)</span> pode ser <b>apagada</b> sem prejuízo, quase sempre em “é que”: <i>Nós <b>é que</b> estudamos</i> → <i>Nós estudamos.</i></div>\n</div>\n<div class=\"destaque\"><b>O teste que resolve quase tudo:</b> troque por <i>o qual</i>. Se couber → pronome relativo (oração adjetiva). Se não couber, tente trocar a oração inteira por <i>isso</i> → conjunção integrante (oração substantiva).</div>\n<p>Exemplo com as duas na mesma frase: <i>Os técnicos <b>que</b> a empresa contratou concluíram <b>que</b> o prazo era insuficiente.</i> O primeiro tem antecedente (“os técnicos”) → relativo, adjetiva restritiva. O segundo cabe em “isso” (<i>concluíram isso</i>) → integrante, substantiva objetiva direta.</p>"
            },
            {
              "titulo": "Roteiro de classificação para a prova",
              "html": "\n<p>Um caminho fixo, na ordem, para não travar:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Conte os verbos</span> saiba quantas orações existem antes de qualquer coisa.</div>\n  <div class=\"def\"><span class=\"def-t\">2. A oração faz sentido sozinha?</span> Sim → coordenada, e a conjunção diz o tipo. Não → subordinada, siga.</div>\n  <div class=\"def\"><span class=\"def-t\">3. Cabe “isso” no lugar dela?</span> Sim → substantiva; a função de “isso” dá o nome.</div>\n  <div class=\"def\"><span class=\"def-t\">4. Tem antecedente e cabe “o qual”?</span> Sim → adjetiva; a vírgula diz se é restritiva ou explicativa.</div>\n  <div class=\"def\"><span class=\"def-t\">5. Sobrou circunstância?</span> É adverbial; a conjunção diz qual das nove.</div>\n</div>\n<p class=\"mnemonic\">Três testes cobrem o assunto inteiro: <b>“isso”</b> para substantiva, <b>“o qual”</b> para adjetiva e <b>o sentido da conjunção</b> para adverbial e coordenada.</p>"
            }
          ],
          "flashcards": [
            {
              "tema": "Base",
              "pergunta": "Qual a diferença de fundo entre coordenação e subordinação?",
              "resposta": "Na coordenação as orações são independentes — cada uma tem sentido próprio. Na subordinação, uma oração é termo sintático da outra: exerce função de sujeito, objeto, adjunto ou adjetivo dentro do período."
            },
            {
              "tema": "Base",
              "pergunta": "Qual o teste rápido para saber se a oração é coordenada?",
              "resposta": "Leia a segunda oração sozinha. Se faz sentido por si (“não passei”), é coordenada. Se fica pendurada esperando a outra (“que você estude”), é subordinada."
            },
            {
              "tema": "Coordenadas",
              "pergunta": "Qual a diferença entre coordenada assindética e sindética?",
              "resposta": "Assindética não tem conjunção, só vírgula (“Cheguei, sentei, comecei”). Sindética vem com conjunção coordenativa (“Cheguei e comecei”)."
            },
            {
              "tema": "Coordenadas",
              "pergunta": "Quais são as cinco coordenadas sindéticas?",
              "resposta": "Aditiva (e, nem), adversativa (mas, porém, contudo), alternativa (ou, ora…ora), conclusiva (logo, portanto, por isso) e explicativa (porque, pois, que)."
            },
            {
              "tema": "Coordenadas",
              "pergunta": "Como classificar o “pois”?",
              "resposta": "Antes do verbo é explicativa (“Não saia, pois está chovendo”). Deslocado para depois do verbo, entre vírgulas, é conclusiva (“Está chovendo; não saia, pois”)."
            },
            {
              "tema": "Substantivas",
              "pergunta": "Qual é o truque do “isso”?",
              "resposta": "Substituir a oração inteira por “isso”. Se couber, a oração é substantiva — e a função que “isso” exerce é a classificação dela."
            },
            {
              "tema": "Substantivas",
              "pergunta": "Quais são as seis subordinadas substantivas?",
              "resposta": "Subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva — as seis funções que um substantivo pode exercer."
            },
            {
              "tema": "Substantivas",
              "pergunta": "Que estrutura indica quase sempre uma oração subjetiva?",
              "resposta": "Período iniciado por “é + adjetivo” (é necessário, é preciso, é indispensável) ou por convém, importa, consta, parece. A oração seguinte é subjetiva."
            },
            {
              "tema": "Substantivas",
              "pergunta": "Quais são as conjunções integrantes?",
              "resposta": "“Que” e “se”. Elas introduzem orações substantivas e, diferentemente do pronome relativo, não têm antecedente nem função dentro da própria oração."
            },
            {
              "tema": "Adjetivas",
              "pergunta": "O que introduz uma oração subordinada adjetiva?",
              "resposta": "Um pronome relativo: que, quem, o qual, cujo, onde, quanto. Ele retoma um antecedente e exerce função dentro da própria oração."
            },
            {
              "tema": "Adjetivas",
              "pergunta": "Qual a diferença entre adjetiva restritiva e explicativa?",
              "resposta": "A restritiva vem sem vírgula e delimita um subgrupo (“Os candidatos que estudaram passaram” — só uma parte). A explicativa vem entre vírgulas e fala da totalidade (“Os candidatos, que estudaram, passaram” — todos)."
            },
            {
              "tema": "Adjetivas",
              "pergunta": "Quando a adjetiva só pode ser explicativa?",
              "resposta": "Quando o antecedente é único no mundo (a LGPD, o Brasil, minha mãe) — não há de quem distingui-lo, então a informação só pode acrescentar."
            },
            {
              "tema": "Adverbiais",
              "pergunta": "Quais são as nove subordinadas adverbiais?",
              "resposta": "Causal, consecutiva, comparativa, condicional, concessiva, conformativa, final, proporcional e temporal."
            },
            {
              "tema": "Adverbiais",
              "pergunta": "Quais conjunções são concessivas?",
              "resposta": "Embora, ainda que, mesmo que, conquanto, apesar de (que), se bem que. Todas marcam quebra de expectativa e são intercambiáveis entre si."
            },
            {
              "tema": "Adverbiais",
              "pergunta": "Quais conjunções são conformativas?",
              "resposta": "Conforme, segundo, consoante e “como” no sentido de conformidade — indicam que algo ocorre de acordo com o que foi dito."
            },
            {
              "tema": "Adverbiais",
              "pergunta": "“À medida que” e “ao passo que” indicam que relação?",
              "resposta": "Proporção (oração subordinada adverbial proporcional): duas coisas variando juntas."
            },
            {
              "tema": "Causal x explicativa",
              "pergunta": "Como distinguir causal de explicativa?",
              "resposta": "Na causal (subordinada), a primeira oração é efeito real da segunda: “A rua está molhada porque choveu”. Na explicativa (coordenada), a segunda justifica uma suposição ou ordem: “Choveu, porque a rua está molhada”."
            },
            {
              "tema": "Causal x explicativa",
              "pergunta": "Qual a regra prática infalível para identificar a explicativa?",
              "resposta": "Se a primeira oração está no imperativo (“Estude, pois…”, “Corra, que…”), é explicativa. Sempre — ordem não tem causa, tem justificativa."
            },
            {
              "tema": "Reduzidas",
              "pergunta": "O que é uma oração reduzida?",
              "resposta": "A subordinada que não vem com conjunção e tem o verbo em forma nominal: infinitivo, gerúndio ou particípio. Para classificar, desdobre-a devolvendo a conjunção."
            },
            {
              "tema": "Reduzidas",
              "pergunta": "Classifique: “Estudando muito, você passa.”",
              "resposta": "Reduzida de gerúndio. Desdobrando: “Se estudar muito” → oração subordinada adverbial condicional reduzida de gerúndio."
            },
            {
              "tema": "O “que”",
              "pergunta": "Quais são as cinco funções possíveis do “que”?",
              "resposta": "Pronome relativo (adjetiva), conjunção integrante (substantiva), conjunção consecutiva (após tão/tanto/tal), conjunção explicativa ou causal (= porque) e partícula expletiva de realce (é que)."
            },
            {
              "tema": "O “que”",
              "pergunta": "Qual o teste para separar pronome relativo de conjunção integrante?",
              "resposta": "Troque por “o qual”: se couber, é pronome relativo e a oração é adjetiva. Se não couber, troque a oração inteira por “isso”: cabendo, é conjunção integrante e a oração é substantiva."
            },
            {
              "tema": "Prova",
              "pergunta": "Qual o roteiro de classificação do período composto?",
              "resposta": "1) conte os verbos; 2) a oração faz sentido sozinha? → coordenada; 3) cabe “isso”? → substantiva; 4) tem antecedente e cabe “o qual”? → adjetiva; 5) sobrou circunstância? → adverbial."
            }
          ],
          "simulados": [
            {
              "id": "periodo-composto-01",
              "nome": "Período composto — coordenação e subordinação",
              "descricao": "Classificar orações coordenadas, substantivas, adjetivas e adverbiais, com as pegadinhas do “pois”, do “porque” e do “que”.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Coordenadas · adversativa",
                  "text": "Em “Estudei, mas não passei”, a oração “mas não passei” classifica-se como:",
                  "options": [
                    "coordenada sindética aditiva;",
                    "coordenada sindética adversativa;",
                    "subordinada adverbial concessiva;",
                    "coordenada assindética;",
                    "subordinada adverbial condicional."
                  ],
                  "answer": 1,
                  "exp": "“Mas” marca oposição entre duas orações independentes — cada uma faz sentido sozinha. Cuidado com a concessiva (embora, ainda que): ela também quebra expectativa, mas é SUBORDINADA e vem em oração dependente, o que não é o caso aqui."
                },
                {
                  "type": "mc",
                  "tag": "Coordenadas · explicativa",
                  "text": "Em “Estude com atenção, pois a prova exigirá interpretação”, a oração destacada classifica-se como:",
                  "options": [
                    "coordenada sindética conclusiva;",
                    "coordenada sindética explicativa;",
                    "subordinada adverbial causal;",
                    "subordinada adverbial final;",
                    "subordinada substantiva objetiva direta."
                  ],
                  "answer": 1,
                  "exp": "Dois sinais decisivos: a primeira oração está no IMPERATIVO (“Estude”) e a segunda justifica o conselho — não é causa real de nada. Ordem ou conselho seguido de pois/porque é sempre explicativa, nunca causal. A conclusiva exigiria “pois” depois do verbo."
                },
                {
                  "type": "ce",
                  "tag": "Coordenadas · o “pois” deslocado",
                  "text": "Em “Está chovendo; não saia, pois”, o conectivo “pois” tem valor conclusivo.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. A posição é o único sinal: “pois” ANTES do verbo é explicativo (“Não saia, pois está chovendo”); deslocado para DEPOIS do verbo, entre vírgulas, passa a ser conclusivo, equivalendo a “portanto”."
                },
                {
                  "type": "mc",
                  "tag": "Substantivas · subjetiva",
                  "text": "Em “É indispensável que os candidatos confiram os dados da inscrição”, a oração “que os candidatos confiram os dados da inscrição” exerce a função de:",
                  "options": [
                    "objeto direto;",
                    "complemento nominal;",
                    "sujeito;",
                    "aposto;",
                    "predicativo do sujeito."
                  ],
                  "answer": 2,
                  "exp": "Truque do “isso”: “É indispensável ISSO”. “Isso” é o sujeito de “é indispensável” → oração subordinada substantiva SUBJETIVA. Padrão que resolve várias questões: período iniciado por “é + adjetivo” (é necessário, é preciso, é claro) ou por convém, importa, consta pede oração subjetiva."
                },
                {
                  "type": "mc",
                  "tag": "Substantivas · objetiva direta",
                  "text": "Em “Quero que você estude todos os dias”, a oração destacada classifica-se como subordinada substantiva:",
                  "options": [
                    "subjetiva;",
                    "objetiva direta;",
                    "completiva nominal;",
                    "predicativa;",
                    "apositiva."
                  ],
                  "answer": 1,
                  "exp": "“Quero ISSO” — “isso” é objeto direto de “quero”, verbo transitivo direto, sem preposição. Logo, substantiva objetiva direta. A função que “isso” exerce é sempre a classificação da oração."
                },
                {
                  "type": "mc",
                  "tag": "Substantivas · completiva nominal",
                  "text": "Em “Tenho certeza de que passarei”, a oração destacada classifica-se como subordinada substantiva:",
                  "options": [
                    "objetiva indireta;",
                    "subjetiva;",
                    "completiva nominal;",
                    "apositiva;",
                    "predicativa."
                  ],
                  "answer": 2,
                  "exp": "A preposição “de” é exigida pelo NOME “certeza” (certeza DE algo), não pelo verbo “ter” — por isso é completiva nominal, e não objetiva indireta. É o mesmo raciocínio de complemento nominal x objeto indireto, agora em forma de oração."
                },
                {
                  "type": "mc",
                  "tag": "Adjetivas · restritiva x explicativa",
                  "text": "Assinale a opção em que a oração adjetiva é EXPLICATIVA:",
                  "options": [
                    "Os servidores que trabalham no setor receberam o treinamento.",
                    "A lei que regula a proteção de dados entrou em vigor em 2020.",
                    "A LGPD, que regula a proteção de dados, entrou em vigor em 2020.",
                    "Os candidatos que não comparecerem serão eliminados.",
                    "O documento que você enviou está incompleto."
                  ],
                  "answer": 2,
                  "exp": "É a única com a oração entre vírgulas — a marca da adjetiva explicativa — e faz sentido semanticamente: a LGPD é única, não há outra da qual precise ser distinguida, então a informação só acrescenta. Nas demais a oração restringe: só os servidores daquele setor, só aquela lei, só quem faltar, só aquele documento."
                },
                {
                  "type": "ce",
                  "tag": "Adjetivas · efeito da vírgula",
                  "text": "Em “Os candidatos, que estudaram, passaram”, entende-se que todos os candidatos estudaram.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. Entre vírgulas, a adjetiva é explicativa e fala da totalidade: todos estudaram e todos passaram. Sem as vírgulas (“Os candidatos que estudaram passaram”), a oração seria restritiva e delimitaria um subgrupo — só os que estudaram passaram. A vírgula não é enfeite: é informação."
                },
                {
                  "type": "mc",
                  "tag": "Adverbiais · concessiva",
                  "text": "Em “Embora o sistema estivesse atualizado, houve falhas no atendimento”, a substituição de “Embora” que preserva a relação lógica é:",
                  "options": [
                    "Porque;",
                    "Ainda que;",
                    "Portanto;",
                    "À medida que;",
                    "Conforme."
                  ],
                  "answer": 1,
                  "exp": "“Embora” é concessiva: marca quebra de expectativa — esperava-se que, com o sistema atualizado, não houvesse falhas. O único equivalente concessivo é “ainda que” (assim como mesmo que, conquanto, se bem que). As demais são causal, conclusiva, proporcional e conformativa."
                },
                {
                  "type": "mc",
                  "tag": "Adverbiais · consecutiva",
                  "text": "Em “Estudou tanto que adoeceu”, a oração “que adoeceu” classifica-se como subordinada adverbial:",
                  "options": [
                    "causal;",
                    "consecutiva;",
                    "comparativa;",
                    "final;",
                    "conformativa."
                  ],
                  "answer": 1,
                  "exp": "O “que” precedido de tão, tanto, tal ou tamanho indica CONSEQUÊNCIA de uma intensidade → oração consecutiva. O sinal está na palavra intensificadora antes do “que”: sem o “tanto”, a classificação mudaria."
                },
                {
                  "type": "mc",
                  "tag": "Adverbiais · proporcional",
                  "text": "Em “À medida que estudava, ficava mais confiante”, a oração destacada classifica-se como subordinada adverbial:",
                  "options": [
                    "temporal;",
                    "proporcional;",
                    "condicional;",
                    "conformativa;",
                    "causal."
                  ],
                  "answer": 1,
                  "exp": "“À medida que” e “ao passo que” indicam duas coisas variando JUNTAS — proporção. Há um componente de tempo, mas o que a locução marca é a simultaneidade proporcional, não o momento. Pegadinha frequente: “à medida que” (proporção) x “na medida em que” (causa)."
                },
                {
                  "type": "mc",
                  "tag": "Reduzidas · particípio",
                  "text": "Em “Terminada a prova, saí da sala”, a oração “Terminada a prova” classifica-se como:",
                  "options": [
                    "subordinada adverbial causal reduzida de particípio;",
                    "subordinada adverbial temporal reduzida de particípio;",
                    "subordinada adjetiva reduzida de particípio;",
                    "subordinada substantiva subjetiva reduzida de infinitivo;",
                    "coordenada assindética."
                  ],
                  "answer": 1,
                  "exp": "Reduzida é a subordinada sem conjunção e com verbo em forma nominal — aqui, particípio. Para classificar, desdobre: “Depois que a prova terminou, saí da sala” → adverbial temporal. O nome completo junta os dois dados: adverbial temporal reduzida de particípio."
                },
                {
                  "type": "mc",
                  "tag": "O “que” · relativo x integrante",
                  "text": "Em “Os técnicos que a empresa contratou concluíram que o prazo era insuficiente”, sobre as duas ocorrências de “que” é correto afirmar que:",
                  "options": [
                    "ambas são conjunções integrantes e introduzem orações substantivas;",
                    "ambas são pronomes relativos e introduzem orações adjetivas;",
                    "a primeira é pronome relativo e a segunda, conjunção integrante;",
                    "a primeira é conjunção integrante e a segunda, pronome relativo;",
                    "a primeira é partícula expletiva e a segunda, pronome relativo."
                  ],
                  "answer": 2,
                  "exp": "O primeiro “que” tem antecedente (“Os técnicos”) e aceita a troca por “os quais” → pronome relativo, oração adjetiva restritiva. O segundo não tem antecedente e a oração cabe em “isso” (“concluíram isso”) → conjunção integrante, oração substantiva objetiva direta. Mesmo vocábulo, duas classificações, na mesma frase."
                },
                {
                  "type": "mc",
                  "tag": "Causal x explicativa",
                  "text": "Assinale a opção em que a oração introduzida por “porque” é EXPLICATIVA (coordenada), e não causal:",
                  "options": [
                    "A rua está molhada porque choveu.",
                    "Não saia agora, porque está chovendo.",
                    "Cheguei atrasada porque perdi o ônibus.",
                    "O sistema caiu porque houve sobrecarga.",
                    "Ele foi eliminado porque zerou uma disciplina."
                  ],
                  "answer": 1,
                  "exp": "A primeira oração está no imperativo (“Não saia”) — e ordem não tem causa, tem justificativa: a chuva justifica o conselho, não o provoca. Nas demais, a segunda oração é a causa real do fato enunciado na primeira → subordinada adverbial causal."
                }
              ]
            }
          ]
        },
        {
          "id": "crase",
          "nome": "Crase",
          "icon": "ti-grave",
          "descricao": "Do zero: o que são preposição, artigo e regência, e como isso vira uma regra só. Seis blocos de regras, do mais simples ao mais cobrado, com os testes prontos para usar na prova.",
          "resumo": [
            {
              "titulo": "Antes de tudo: as 4 palavras que travam o assunto",
              "html": "\n<p>Quase ninguém erra crase por não decorar a regra. Erra porque a regra é escrita com termos que ficaram para trás na escola. Então vamos reconstruir os quatro, devagar, porque <b>sem eles nada do resto faz sentido</b>.</p>\n\n<p><b>1. Substantivo</b> — é o nome das coisas: <i>prova</i>, <i>diretora</i>, <i>casa</i>, <i>relatório</i>. Tem gênero: <i>prova</i> é feminino, <i>relatório</i> é masculino. Guarde o gênero, porque a crase só acontece no feminino.</p>\n\n<p><b>2. Artigo</b> — é a palavrinha que vem antes do substantivo e diz se ele é <i>conhecido</i> ou <i>qualquer um</i>. Compare:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Vi <b>a</b> diretora</span> artigo DEFINIDO: aquela diretora, a que nós dois sabemos qual é</div>\n  <div class=\"def\"><span class=\"def-t\">Vi <b>uma</b> diretora</span> artigo INDEFINIDO: alguma diretora, não importa qual</div>\n  <div class=\"def\"><span class=\"def-t\">Vi diretoras</span> sem artigo: diretoras em geral, sem especificar</div>\n</div>\n<p>Repare: o artigo definido feminino é <b>“a”</b> (e no plural, <b>“as”</b>). Essa é a primeira das duas vogais que vão se fundir.</p>\n\n<p><b>3. Preposição</b> — é a palavrinha que <i>liga</i> duas partes da frase e que <b>não é escolhida por você</b>: ela é exigida pela palavra anterior. Você não decide dizer “gosto <i>de</i> música”; o verbo <i>gostar</i> é que obriga o <i>de</i>. As preposições mais comuns são <i>de, em, para, com, por</i> e — a nossa — <b>“a”</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">gostar</span> exige <b>de</b> → gosto <b>de</b> música</div>\n  <div class=\"def\"><span class=\"def-t\">acreditar</span> exige <b>em</b> → acredito <b>em</b> você</div>\n  <div class=\"def\"><span class=\"def-t\">obedecer</span> exige <b>a</b> → obedeço <b>a</b> alguém</div>\n</div>\n\n<p><b>4. Regência</b> — é só o nome técnico disso: <i>qual preposição cada palavra exige</i>. “A regência de <i>obedecer</i> é <i>a</i>” quer dizer “<i>obedecer</i> pede a preposição <i>a</i>”. Nada além disso.</p>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Fixe esta imagem: na frase, o <b>artigo olha para a frente</b> (pertence ao substantivo que vem depois) e a <b>preposição olha para trás</b> (foi exigida pela palavra que veio antes). A crase é o ponto onde os dois se encontram e viram uma letra só.</div>"
            },
            {
              "titulo": "O que é crase (e por que não é acento)",
              "html": "\n<p>A palavra vem do grego <b>krâsis</b>, que significa “mistura, fusão”. Os gregos usavam o termo para o encontro de duas vogais que se fundiam numa só. É exatamente o que acontece aqui.</p>\n\n<p>Imagine a frase se montando em câmera lenta:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">passo 1</span> <i>Entreguei o relatório</i> — o verbo <i>entregar</i> exige a preposição: entregar algo <b>a</b> alguém</div>\n  <div class=\"def\"><span class=\"def-t\">passo 2</span> a quem? <i>a diretora</i> — e “diretora” é uma pessoa conhecida, então pede o artigo: <b>a</b> diretora</div>\n  <div class=\"def\"><span class=\"def-t\">passo 3</span> agora há DUAS letras “a” coladas: <i>Entreguei o relatório <b>a + a</b> diretora</i></div>\n  <div class=\"def\"><span class=\"def-t\">passo 4</span> o português não escreve duas vogais iguais assim. Ele funde as duas e marca a fusão com o acento grave: <i>Entreguei o relatório <b>à</b> diretora</i></div>\n</div>\n\n<p>Ou seja: <b>crase é o fenômeno</b> — a fusão. O <b>acento grave (à)</b> é só o <i>sinal</i> que registra que ali houve fusão. São coisas diferentes, como a febre e o termômetro.</p>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Por isso o edital não fala em “acento de crase”: fala em <b>“emprego do sinal indicativo de crase”</b>. Se uma alternativa da FGV chamar o acento grave de “crase”, ela pode estar sendo testada exatamente nessa confusão.</div>"
            },
            {
              "titulo": "A regra-mãe: só existe UMA",
              "html": "\n<p>Depois de tudo isso, a regra inteira cabe numa linha:</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">preposição “a”</span> exigida pelo termo <b>anterior</b> (um verbo, um substantivo, um adjetivo ou uma locução)</div>\n  <div class=\"def\"><span class=\"def-t\">+ artigo “a(s)”</span> admitido pela palavra <b>posterior</b>, que precisa ser feminina</div>\n  <div class=\"def\"><span class=\"def-t\">= à(s)</span> crase</div>\n</div>\n\n<p>E a consequência prática é a parte mais importante deste resumo inteiro:</p>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Se faltar qualquer um dos dois, não há crase.</b> Não existe crase “só com preposição”. Não existe crase “só com artigo”. Toda a lista de casos proibidos que você vai ver adiante não é uma lista de exceções decoradas: é só a mesma regra, em situações onde <b>um dos dois ingredientes não existe</b>.</div>\n\n<p>Veja as três possibilidades numa frase só, trocando o verbo:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Entreguei <b>à</b> diretora</span> preposição (entregar a) + artigo (a diretora) = crase</div>\n  <div class=\"def\"><span class=\"def-t\">Vi <b>a</b> diretora</span> “ver” não pede preposição — só há artigo → sem crase</div>\n  <div class=\"def\"><span class=\"def-t\">Refiro-me <b>a</b> diretoras experientes</span> há preposição, mas não há artigo (fala-se de diretoras em geral) → sem crase</div>\n</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Se você trabalha com código, pense num <b>join</b>: precisa de registro nos dois lados. Um lado vazio, resultado vazio. A maior parte dos erros de crase é gente acentuando com um lado só.</div>"
            },
            {
              "titulo": "Como saber se existe a PREPOSIÇÃO",
              "html": "\n<p>Esta é a metade que trava mais gente, porque a preposição é invisível: ela só aparece se você souber o que o verbo pede. O jeito de descobrir é <b>perguntar ao verbo</b>.</p>\n\n<p>Depois do verbo, faça a pergunta e veja como ela sai naturalmente:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Vi…</span> vi <b>o quê</b>? → pergunta sem preposição → o verbo <b>não</b> traz preposição</div>\n  <div class=\"def\"><span class=\"def-t\">Obedeci…</span> obedeci <b>a quem</b>? → a pergunta já vem com “a” → o verbo <b>traz</b> a preposição</div>\n  <div class=\"def\"><span class=\"def-t\">Assisti (= vi)…</span> assisti <b>a quê</b>? → traz “a”</div>\n  <div class=\"def\"><span class=\"def-t\">Comprei…</span> comprei <b>o quê</b>? → não traz</div>\n</div>\n\n<p>Se a pergunta natural inclui o “a”, a preposição existe. Se a pergunta é seca (“o quê?”, “quem?”), não existe — e aí <b>já pode parar: não vai haver crase</b>, não importa o que venha depois.</p>\n\n<p>E não é só verbo. <b>Substantivos e adjetivos também exigem preposição</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">obediência</span> obediência <b>a</b> algo → obediência <b>à</b> lei</div>\n  <div class=\"def\"><span class=\"def-t\">referência</span> referência <b>a</b> algo → referência <b>à</b> norma</div>\n  <div class=\"def\"><span class=\"def-t\">acesso</span> acesso <b>a</b> algo → acesso <b>à</b> informação</div>\n  <div class=\"def\"><span class=\"def-t\">favorável</span> favorável <b>a</b> algo → favorável <b>à</b> proposta</div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Guarde isto agora e releia no dia da prova: <b>a FGV quase nunca pergunta crase “pura”</b>. Ela esconde o item de crase dentro de um item de regência. Se você errar qual preposição o verbo pede, erra o acento por consequência — e vai achar que errou crase, quando errou o verbo.</div>"
            },
            {
              "titulo": "Como saber se existe o ARTIGO",
              "html": "\n<p>Aqui são duas checagens, nessa ordem.</p>\n\n<p><b>Checagem 1: a palavra é feminina?</b> Se for masculina, acabou — não existe artigo “a” para masculino, existe “o”. Por isso não há crase em <i>a pé</i>, <i>a prazo</i>, <i>a lápis</i>, <i>a cavalo</i>, <i>a bordo</i>, <i>a pedido de</i>. (Há uma única exceção, a do “à moda de”, que você vê mais adiante.)</p>\n\n<p><b>Checagem 2: a palavra admite o artigo?</b> Nem toda palavra feminina aceita “a” na frente. O jeito de testar é tentar dizer a palavra sozinha com o artigo e ver se soa natural:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">a diretora</span> soa natural → admite artigo</div>\n  <div class=\"def\"><span class=\"def-t\">a ela</span> ninguém diz isso → pronome pessoal <b>não</b> admite artigo</div>\n  <div class=\"def\"><span class=\"def-t\">a esta</span> ninguém diz isso → demonstrativo <b>não</b> admite artigo</div>\n  <div class=\"def\"><span class=\"def-t\">a Vossa Senhoria</span> não se diz → tratamento com “Vossa” <b>não</b> admite</div>\n  <div class=\"def\"><span class=\"def-t\">a senhora</span> soa natural → <b>admite</b> (por isso “à senhora” tem crase!)</div>\n</div>\n\n<p>E tem um terceiro caso, o mais sutil: a palavra <b>admite</b> o artigo, mas naquela frase ele <b>não está lá</b>, porque você está falando genericamente. Compare com calma:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Refiro-me <b>a</b> pessoas mal-intencionadas</span> pessoas em geral, quaisquer — sem artigo → sem crase</div>\n  <div class=\"def\"><span class=\"def-t\">Refiro-me <b>às</b> pessoas mal-intencionadas</span> aquelas pessoas, as que já mencionamos — com artigo → crase</div>\n</div>\n<p>As duas frases estão <b>corretas</b>. Elas simplesmente dizem coisas diferentes. Guarde isso: é uma questão clássica de banca, e a resposta quase nunca é “uma está errada”.</p>"
            },
            {
              "titulo": "O teste do masculino, passo a passo",
              "html": "\n<p>Você não vai fazer essa análise toda em prova — leva tempo demais. Na prova você usa um atalho que faz as duas checagens de uma vez: <b>troque a palavra feminina por uma masculina equivalente</b>.</p>\n\n<p>Funciona porque o masculino <b>separa</b> o que o feminino esconde: <i>ao</i> é visivelmente <i>a + o</i>. Se o masculino junta, o feminino também junta.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">deu “ao”</span> preposição + artigo → <b>há crase</b></div>\n  <div class=\"def\"><span class=\"def-t\">deu “o”</span> só artigo, sem preposição → <b>sem crase</b></div>\n  <div class=\"def\"><span class=\"def-t\">deu “a” sozinho</span> só preposição, sem artigo → <b>sem crase</b></div>\n</div>\n\n<p>Quatro exemplos, feitos inteiros:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Assisti __ peça</span> troco “peça” por “filme”: <i>assisti <b>ao</b> filme</i> → deu “ao” → <b>Assisti à peça</b></div>\n  <div class=\"def\"><span class=\"def-t\">Vi __ peça</span> <i>vi <b>o</b> filme</i> → deu só “o” → <b>Vi a peça</b></div>\n  <div class=\"def\"><span class=\"def-t\">Refiro-me __ questões difíceis</span> <i>refiro-me <b>a</b> problemas difíceis</i> → deu “a” sozinho → <b>a questões difíceis</b></div>\n  <div class=\"def\"><span class=\"def-t\">Obedeça __ normas</span> <i>obedeça <b>aos</b> regulamentos</i> → deu “aos” → <b>Obedeça às normas</b></div>\n</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Dica de execução: escolha um masculino do mesmo “tipo” da palavra original (peça→filme, normas→regulamentos, diretora→diretor). Se você trocar por algo muito diferente, a frase muda de regência e o teste mente.</div>"
            },
            {
              "titulo": "Regra 1 — onde NUNCA há crase",
              "html": "\n<p>Comece por aqui, porque é a regra que mais elimina alternativa rápido. Em todos estes casos falta um dos dois ingredientes, e você nem precisa analisar o resto da frase.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Palavra masculina</span> não existe artigo “a” masculino → <i>a pé, a prazo, a lápis, a cavalo, a bordo, a critério de, a pedido de</i></div>\n  <div class=\"def\"><span class=\"def-t\">Verbo</span> verbo não aceita artigo → <i>a partir de, a fim de, começou a chover, passou a estudar</i></div>\n  <div class=\"def\"><span class=\"def-t\">Artigo indefinido “uma”</span> “a” não se funde com “uma” → <i>a uma conclusão, a uma amiga</i></div>\n  <div class=\"def\"><span class=\"def-t\">Pronome pessoal</span> não admite artigo → <i>a ela, a mim, a ti, a você</i></div>\n  <div class=\"def\"><span class=\"def-t\">Pronome de tratamento com “Vossa/Sua”</span> → <i>a Vossa Excelência, a Sua Senhoria</i></div>\n  <div class=\"def\"><span class=\"def-t\">Demonstrativo “esta/essa”</span> → <i>a esta hora, a essa altura</i> <b>(mas: àquela hora — veja a Regra 5)</b></div>\n  <div class=\"def\"><span class=\"def-t\">Palavra repetida</span> a repetição não admite artigo → <i>um a um, cara a cara, dia a dia, gota a gota, frente a frente</i></div>\n  <div class=\"def\"><span class=\"def-t\">Plural genérico</span> artigo singular não cobre plural → <i>refiro-me a questões difíceis</i> (nunca “à questões”)</div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Os dois erros mais comuns da vida real estão aqui: <b>“à partir de”</b> (verbo — nunca) e <b>“à pedido de”</b> (masculino — nunca). Se você só corrigir esses dois, já escreve melhor que a maioria.</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> O par que mais cai junto na mesma alternativa: <b>à vista</b> (vista é feminino → crase) × <b>a prazo</b> (prazo é masculino → sem crase).</div>"
            },
            {
              "titulo": "Regra 2 — locuções femininas: crase obrigatória",
              "html": "\n<p><b>Locução</b> é um conjunto de palavras que funciona como se fosse uma só. Quando essa locução começa com “a” e é formada por palavra <b>feminina</b>, a crase é obrigatória. Há três famílias, e ajuda saber o que cada uma faz na frase:</p>\n\n<p><b>Locução adverbial</b> — responde <i>quando? como? onde?</i></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">tempo</span> à noite, à tarde, às vezes, à época, às 8h</div>\n  <div class=\"def\"><span class=\"def-t\">modo</span> às pressas, às escondidas, à toa, à força, à vontade, à risca, à mão, à vista</div>\n  <div class=\"def\"><span class=\"def-t\">lugar</span> à direita, à esquerda, à frente</div>\n</div>\n\n<p><b>Locução prepositiva</b> — liga a um complemento, sempre com “de” no fim</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">exemplos</span> à espera de, à procura de, à beira de, à custa de, à frente de, à mercê de</div>\n</div>\n\n<p><b>Locução conjuntiva</b> — liga duas orações; são só duas e indicam progressão simultânea</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">exemplos</span> à medida que, à proporção que</div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Cuidado com o par <i>“à medida que”</i> × <i>“na medida em que”</i>. O primeiro é proporção (“à medida que estudava, melhorava”); o segundo é causa (“na medida em que não há provas, arquiva-se”). Escrever “à medida em que” é erro.</div>"
            },
            {
              "titulo": "Regra 3 — horas",
              "html": "\n<p>Hora determinada é locução adverbial feminina (a palavra escondida é <i>hora</i>, feminina). Logo, <b>crase obrigatória</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">com crase</span> às 8h · às 15h30 · <b>à</b> uma da tarde · à meia-noite em ponto</div>\n</div>\n\n<p>Mas há três situações em que a hora aparece <b>sem</b> artigo, e aí não há crase:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">hora indefinida</span> <i>A que horas você chega?</i> — não se sabe qual hora, não há artigo</div>\n  <div class=\"def\"><span class=\"def-t\">tempo futuro com “daqui”</span> <i>Daqui a uma hora</i> — “uma” é artigo indefinido</div>\n  <div class=\"def\"><span class=\"def-t\">correlação “de… a…”</span> <i>de 8h a 17h</i> — o primeiro termo não recebe artigo</div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Na correlação, ou você usa artigo nos <b>dois</b> lados (<i>das 8h às 17h</i>) ou em <b>nenhum</b> (<i>de 8h a 17h</i>). Misturar — <i>“de às 8h às 17h”</i> — é erro, e é distrator frequente.</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Teste do masculino também funciona aqui: <i>chego <b>ao</b> meio-dia</i> → <i>chego <b>à</b> uma</i>. Se cabe “ao meio-dia”, cabe a crase.</div>"
            },
            {
              "titulo": "Regra 4 (faixa preta) — nomes de lugar",
              "html": "\n<p>Aqui o teste do masculino não ajuda: cidades e países não têm par masculino. O problema é outro — <b>alguns nomes de lugar admitem artigo e outros não</b>, e isso é arbitrário, você não deduz, você testa.</p>\n\n<p>O teste é trocar o verbo de ida por um verbo de volta, que exige a preposição <b>“de”</b>. Se o artigo existir, ele aparece grudado no “de”:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Volto <b>DA</b></span> “de + a” → o artigo existe → <b>Vou À</b></div>\n  <div class=\"def\"><span class=\"def-t\">Volto <b>DE</b></span> só a preposição → não há artigo → <b>Vou A</b></div>\n</div>\n\n<p>Aplicando:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Bahia</span> volto <b>da</b> Bahia → <b>Vou à Bahia</b></div>\n  <div class=\"def\"><span class=\"def-t\">Paraíba</span> volto <b>da</b> Paraíba → <b>Vou à Paraíba</b></div>\n  <div class=\"def\"><span class=\"def-t\">Portugal</span> volto <b>de</b> Portugal → <b>Vou a Portugal</b></div>\n  <div class=\"def\"><span class=\"def-t\">São Paulo</span> volto <b>de</b> São Paulo → <b>Vou a São Paulo</b></div>\n  <div class=\"def\"><span class=\"def-t\">Recife</span> volto <b>do</b> Recife → masculino → <b>Vou ao Recife</b></div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> A virada que a banca adora: <b>basta determinar o nome para o artigo aparecer</b>. “Vou a São Paulo”, mas “Vou <b>à</b> São Paulo dos anos 1950”. O modificador (“dos anos 1950”, “de Saramago”, “que eu conheci”) puxa o artigo junto — e com ele, a crase.</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Macete de sala de aula: <b>“Quem vem DA, vai À. Quem vem DE, vai A.”</b></div>"
            },
            {
              "titulo": "Regra 5 — àquele, àquela, àquilo e à qual",
              "html": "\n<p>A preposição “a” também se funde com o <b>a</b> inicial dos demonstrativos <b>aquele, aquela, aquilo</b> (e de <b>a qual, as quais</b>). O mecanismo é o mesmo: duas vogais iguais viram uma, com acento grave.</p>\n\n<p>Como decidir? Repita a pergunta ao verbo:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">verbo pede “a”</span> refiro-me <b>àquele</b> processo · obedeça <b>àquela</b> norma · assisti <b>àquilo</b> perplexo</div>\n  <div class=\"def\"><span class=\"def-t\">verbo não pede</span> vi <b>aquele</b> filme · comprei <b>aquele</b> livro · li <b>aquilo</b> ontem</div>\n</div>\n\n<p>Repare que o teste do masculino <b>não serve</b> aqui — “aquele” já é masculino. Use este no lugar: <b>troque por “a este”</b>. Se couber <i>“refiro-me a este processo”</i>, então cabe <i>“àquele processo”</i>.</p>\n\n<p>Com o pronome relativo funciona igual, e aí o teste do masculino volta a valer:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">a empresa <b>à qual</b> me referi</span> teste: o processo <b>ao qual</b> me referi → deu “ao” → crase</div>\n  <div class=\"def\"><span class=\"def-t\">a empresa <b>a qual</b> visitei</span> teste: o processo <b>o qual</b> visitei → só artigo → sem crase</div>\n</div>"
            },
            {
              "titulo": "Regra 6 — os três casos facultativos",
              "html": "\n<p>Facultativo quer dizer: <b>as duas formas estão certas</b>. Se uma questão apresenta um desses casos e a alternativa diz “há erro”, a alternativa está errada. São só três, e vale decorar:</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Nome próprio feminino de PESSOA</span> Entreguei o convite <b>a</b> Maria / <b>à</b> Maria</div>\n  <div class=\"def\"><span class=\"def-t\">2. Pronome possessivo feminino SINGULAR</span> Referiu-se <b>a</b> minha irmã / <b>à</b> minha irmã</div>\n  <div class=\"def\"><span class=\"def-t\">3. Depois de “até”</span> Foi <b>até a</b> porta / <b>até à</b> porta</div>\n</div>\n\n<p>A lógica dos três é a mesma: nesses contextos o artigo é <b>opcional</b> em português. Você pode dizer “Maria chegou” ou “A Maria chegou”; “minha irmã ligou” ou “a minha irmã ligou”. Se o artigo é opcional, a crase também é.</p>\n\n<p>No caso do “até”, o motivo é outro: “até” já funciona sozinho como preposição, mas também aceita vir reforçado pela preposição “a”. Com reforço, há crase; sem, não.</p>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> A facultatividade do possessivo vale no <b>singular</b>. E atenção ao item 1: é nome de <b>pessoa</b>. Nome de cidade, de estado ou de empresa segue a Regra 4, não esta.</div>"
            },
            {
              "titulo": "A única crase diante de palavra masculina",
              "html": "\n<p>Se a crase exige o artigo feminino, como explicar <i>“bife à milanesa”</i>, <i>“vestiu-se à Luís XV”</i>, <i>“escreve à Machado de Assis”</i>?</p>\n\n<p>Porque ali há uma palavra <b>escondida</b>, e ela é feminina: <b>moda</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">o que se diz</span> Vestiu-se <b>à</b> Luís XV.</div>\n  <div class=\"def\"><span class=\"def-t\">o que está escrito por baixo</span> Vestiu-se <b>à [moda de]</b> Luís XV.</div>\n</div>\n<p>O artigo feminino concorda com <i>moda</i>, não com <i>Luís XV</i>. Chama-se <b>crase por elipse</b> (elipse = palavra omitida que se entende pelo contexto).</p>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Teste prático: se você conseguir inserir “à moda de” / “à maneira de” sem estragar o sentido, a crase é legítima. <i>“Vestiu-se à moda de Luís XV”</i> — cabe. <i>“Foi à moda de pé”</i> — não cabe, logo “a pé” é sem crase.</div>"
            },
            {
              "titulo": "Casa, terra, distância — as três armadilhas",
              "html": "\n<p>Estas três palavras têm um comportamento próprio: <b>só recebem artigo quando vêm determinadas</b>, isto é, quando algo na frase especifica <i>qual</i>.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">casa = o próprio lar</span> sem determinante → <i>Voltei <b>a</b> casa depois do expediente.</i></div>\n  <div class=\"def\"><span class=\"def-t\">casa determinada</span> → <i>Voltei <b>à</b> casa de meus pais.</i></div>\n  <div class=\"def\"><span class=\"def-t\">terra = oposto de bordo</span> → <i>Os marinheiros desceram <b>a</b> terra.</i></div>\n  <div class=\"def\"><span class=\"def-t\">terra = planeta ou determinada</span> → <i>Voltou <b>à</b> Terra.</i> / <i>Chegou <b>à</b> terra de seus avós.</i></div>\n  <div class=\"def\"><span class=\"def-t\">distância sem medida</span> → <i>Acompanhou tudo <b>a</b> distância.</i></div>\n  <div class=\"def\"><span class=\"def-t\">distância especificada</span> → <i>Parou <b>à</b> distância de dois metros.</i></div>\n</div>\n\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Sobre “ensino a distância”: dicionários modernos já registram também “à distância” sem especificação, e no uso real as duas circulam. Em prova de concurso, porém, siga a <b>regra da determinação</b> — é ela que a banca cobra.</div>"
            },
            {
              "titulo": "A lista de regência que resolve metade das questões",
              "html": "\n<p>Como a crase nasce da preposição, decorar estes verbos vale mais do que decorar a lista de exceções. Vários deles <b>mudam de regência quando mudam de sentido</b> — é exatamente aí que a banca monta a pegadinha.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">assistir</span> = ver → pede “a”: assisti <b>à</b> sessão · = prestar assistência → não pede: o médico assistiu <b>a</b> vítima</div>\n  <div class=\"def\"><span class=\"def-t\">visar</span> = almejar → pede “a”: visamos <b>à</b> aprovação · = mirar / pôr visto → não pede: visou o alvo, visou o cheque</div>\n  <div class=\"def\"><span class=\"def-t\">aspirar</span> = desejar → pede “a”: aspira <b>ao</b> cargo · = sorver → não pede: aspirou o ar</div>\n  <div class=\"def\"><span class=\"def-t\">obedecer / desobedecer</span> sempre pede “a”: obedeça <b>às</b> normas</div>\n  <div class=\"def\"><span class=\"def-t\">preferir</span> prefere-se X <b>a</b> Y, nunca “do que”: prefiro o método antigo <b>ao</b> novo</div>\n  <div class=\"def\"><span class=\"def-t\">implicar</span> = acarretar → NÃO pede “em”: a decisão implicou <b>mudanças</b></div>\n  <div class=\"def\"><span class=\"def-t\">chegar / ir</span> pedem “a”, não “em”: cheguei <b>à</b> repartição</div>\n  <div class=\"def\"><span class=\"def-t\">pagar / perdoar</span> paga-se algo <b>a</b> alguém: paguei a conta <b>à</b> funcionária</div>\n</div>\n\n<p>E os nomes, que caem tanto quanto os verbos: <i>obediência <b>à</b> lei</i>, <i>referência <b>à</b> norma</i>, <i>respeito <b>à</b> decisão</i>, <i>acesso <b>à</b> informação</i>, <i>favorável <b>à</b> proposta</i>.</p>"
            },
            {
              "titulo": "Checklist de 60 segundos",
              "html": "\n<p>Na prova, rode nesta ordem. As três primeiras perguntas matam a maioria das alternativas em segundos.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1</span> A palavra depois do “a” é <b>masculina</b>? → sem crase, a menos que caiba “à moda de”.</div>\n  <div class=\"def\"><span class=\"def-t\">2</span> É <b>verbo</b>, <b>pronome pessoal</b> ou <b>“uma”</b>? → sem crase.</div>\n  <div class=\"def\"><span class=\"def-t\">3</span> É <b>palavra repetida</b> (um a um, dia a dia)? → sem crase.</div>\n  <div class=\"def\"><span class=\"def-t\">4</span> É <b>locução feminina</b> (à noite, à espera de, à medida que) ou <b>hora determinada</b>? → crase obrigatória.</div>\n  <div class=\"def\"><span class=\"def-t\">5</span> É <b>nome de pessoa</b>, <b>possessivo singular</b> ou vem depois de <b>até</b>? → facultativa: as duas formas estão certas.</div>\n  <div class=\"def\"><span class=\"def-t\">6</span> É <b>nome de lugar</b>? → teste “volto DA / volto DE”. E veja se o nome está determinado.</div>\n  <div class=\"def\"><span class=\"def-t\">7</span> Nos demais casos → <b>troque pelo masculino</b>. Deu “ao”, é “à”.</div>\n</div>\n\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Se sobrar tempo numa questão de crase, <b>releia o verbo, não o acento</b>. O erro plantado pela banca costuma estar na regência — e é lá que se ganha ou se perde o ponto.</div>"
            }
          ],
          "flashcards": [
            {
              "tema": "Base",
              "pergunta": "O que é uma PREPOSIÇÃO, em uma frase?",
              "resposta": "É a palavrinha de ligação que NÃO é escolhida por você: quem a exige é a palavra anterior. Gostar exige “de”, acreditar exige “em”, obedecer exige “a”."
            },
            {
              "tema": "Base",
              "pergunta": "O que é o ARTIGO definido, e qual é o feminino?",
              "resposta": "É a palavra que diz se o substantivo é conhecido ou qualquer um. Definido feminino: “a” (plural “as”) — “vi A diretora” (aquela) × “vi UMA diretora” (qualquer)."
            },
            {
              "tema": "Base",
              "pergunta": "O que quer dizer “regência”?",
              "resposta": "É só o nome técnico de “qual preposição cada palavra exige”. Dizer que a regência de obedecer é “a” significa que obedecer pede a preposição “a”."
            },
            {
              "tema": "Base",
              "pergunta": "Como descobrir se o verbo traz a preposição “a”?",
              "resposta": "Pergunte depois do verbo. Se a pergunta natural já sai com “a” (obedeci A QUEM? assisti A QUÊ?), a preposição existe. Se sai seca (vi O QUÊ? comprei O QUÊ?), não existe — e sem ela não há crase."
            },
            {
              "tema": "Base",
              "pergunta": "Por que a lista de “casos proibidos” não precisa ser decorada?",
              "resposta": "Porque não são exceções: são situações em que falta um dos dois ingredientes. Masculino e pronome não têm artigo; verbo não aceita artigo; “ver” e “comprar” não trazem preposição."
            },
            {
              "tema": "Locuções",
              "pergunta": "“À medida que” ou “à medida em que”?",
              "resposta": "“À medida que” (proporção): à medida que estudava, melhorava. “Na medida em que” é outra coisa — indica causa. “À medida em que” não existe."
            },
            {
              "tema": "Conceito",
              "pergunta": "Qual a diferença entre “crase” e “acento grave”?",
              "resposta": "Crase é o FENÔMENO: a fusão de duas vogais idênticas (preposição a + artigo a). O acento grave (à) é apenas o SINAL que registra essa fusão. Por isso o edital fala em “sinal indicativo de crase”."
            },
            {
              "tema": "Regra-mãe",
              "pergunta": "Quais são os dois ingredientes obrigatórios da crase?",
              "resposta": "Preposição “a” (exigida pelo termo ANTERIOR) + artigo definido feminino “a(s)” (admitido pela palavra POSTERIOR). Faltando qualquer um dos dois, não há crase."
            },
            {
              "tema": "Teste",
              "pergunta": "Como funciona o teste do masculino?",
              "resposta": "Troque a palavra feminina por um masculino equivalente. Deu “ao” → há crase. Deu só “o” (artigo) ou só “a” (preposição) → não há crase."
            },
            {
              "tema": "Teste",
              "pergunta": "Qual o teste para nomes de lugar?",
              "resposta": "“Volto DA” → o nome admite artigo → “Vou À”. “Volto DE” → não admite → “Vou A”. Ex.: volto da Bahia → vou à Bahia; volto de Portugal → vou a Portugal."
            },
            {
              "tema": "Lugar",
              "pergunta": "“Vou a São Paulo” ou “Vou à São Paulo”?",
              "resposta": "“Vou a São Paulo” — volto DE São Paulo, logo não há artigo. Mas com determinação o artigo aparece: “Vou à São Paulo dos anos 1950”."
            },
            {
              "tema": "Obrigatório",
              "pergunta": "Cite quatro locuções adverbiais femininas que exigem crase.",
              "resposta": "À noite, às pressas, à vontade, à vista, à toa, à mão, às escondidas, à força, às vezes, à risca."
            },
            {
              "tema": "Obrigatório",
              "pergunta": "Quais locuções conjuntivas levam crase?",
              "resposta": "À medida que e à proporção que. Ambas são femininas e indicam progressão simultânea."
            },
            {
              "tema": "Obrigatório",
              "pergunta": "Quando há crase diante de palavra MASCULINA?",
              "resposta": "Só no caso de “à moda de” / “à maneira de” com a palavra “moda” elíptica: vestiu-se à Luís XV, escreve à Machado de Assis, bife à milanesa."
            },
            {
              "tema": "Horas",
              "pergunta": "Quando a indicação de horas leva crase?",
              "resposta": "Quando a hora é determinada: às 8h, à uma da tarde, às 15h30. Não leva em “a que horas?”, “daqui a uma hora”, “de 8h a 17h”."
            },
            {
              "tema": "Proibido",
              "pergunta": "Por que “a partir de” nunca leva crase?",
              "resposta": "Porque “partir” é verbo, e verbo não admite artigo. Sem artigo, não há fusão. Mesma lógica de “a fim de”."
            },
            {
              "tema": "Proibido",
              "pergunta": "“À vista” ou “a vista”? E “à prazo” ou “a prazo”?",
              "resposta": "À vista (vista é feminino, locução adverbial → crase) e a prazo (prazo é masculino → sem crase). É o par mais cobrado em prova."
            },
            {
              "tema": "Proibido",
              "pergunta": "Há crase diante de pronome pessoal?",
              "resposta": "Não: a ela, a mim, a você, a Vossa Senhoria. Pronome pessoal e pronome de tratamento com “Vossa/Sua” não admitem artigo."
            },
            {
              "tema": "Proibido",
              "pergunta": "E diante de “senhora”, “dona”, “senhorita”?",
              "resposta": "Aí HÁ crase, porque essas palavras admitem artigo: dirigiu-se à senhora, entregou à dona Maria, referiu-se à senhorita."
            },
            {
              "tema": "Proibido",
              "pergunta": "Por que “um a um” e “cara a cara” não levam crase?",
              "resposta": "Expressões formadas pela repetição da mesma palavra não admitem artigo — o “a” ali é só preposição. Também: dia a dia, gota a gota, frente a frente."
            },
            {
              "tema": "Facultativo",
              "pergunta": "Quais são os três casos de crase facultativa?",
              "resposta": "1) Nome próprio feminino de pessoa (a/à Maria); 2) pronome possessivo feminino singular (a/à minha irmã); 3) depois de “até” (até a/até à porta)."
            },
            {
              "tema": "Armadilha",
              "pergunta": "Quando “casa” leva crase?",
              "resposta": "Só quando vem determinada. “Voltei a casa” (meu lar, sem determinante) × “Voltei à casa de meus pais” (determinada)."
            },
            {
              "tema": "Armadilha",
              "pergunta": "Quando “terra” leva crase?",
              "resposta": "Sem crase quando é o oposto de “bordo” (os marinheiros desceram a terra). Com crase quando é o planeta ou vem determinada (voltou à Terra; chegou à terra de seus avós)."
            },
            {
              "tema": "Armadilha",
              "pergunta": "“A distância” ou “à distância”?",
              "resposta": "Sem especificação, “a distância” (acompanhou tudo a distância). Especificada, crase obrigatória: “à distância de dois metros”. Em prova, siga a regra da determinação."
            },
            {
              "tema": "Demonstrativos",
              "pergunta": "Quando se escreve “àquele / àquela / àquilo”?",
              "resposta": "Quando o termo anterior exige a preposição “a”: refiro-me àquele processo, obedeça àquela norma. Sem preposição, fica “aquele”: vi aquele filme, comprei aquele livro."
            },
            {
              "tema": "Relativo",
              "pergunta": "“A empresa a qual me referi” está correto?",
              "resposta": "Não — “referir-se” exige preposição, que se funde com o artigo: “a empresa À QUAL me referi”. Teste: “o processo AO QUAL me referi”."
            },
            {
              "tema": "Regência",
              "pergunta": "Qual a regência de “assistir”?",
              "resposta": "No sentido de ver/presenciar, é transitivo indireto: assisti À sessão. No sentido de prestar assistência, é transitivo direto: o médico assistiu A vítima (sem crase)."
            },
            {
              "tema": "Regência",
              "pergunta": "Qual a regência de “visar” e “aspirar”?",
              "resposta": "No sentido de almejar/desejar, ambos são transitivos indiretos: visamos À aprovação, aspira AO cargo. No sentido concreto, são diretos: visou o cheque, aspirou o ar."
            },
            {
              "tema": "Regência",
              "pergunta": "“Implicar em mudanças” está correto?",
              "resposta": "Não. No sentido de acarretar, “implicar” é transitivo DIRETO: a decisão implicou mudanças. Sem preposição, não há crase possível."
            },
            {
              "tema": "Regência",
              "pergunta": "Como se usa “preferir”?",
              "resposta": "Prefere-se X A Y — nunca “do que”: prefiro o método antigo AO novo, prefiro a teoria À prática."
            },
            {
              "tema": "Plural",
              "pergunta": "“Refiro-me a pessoas” e “refiro-me às pessoas”: qual está errada?",
              "resposta": "Nenhuma. Sem artigo, o sentido é genérico; com artigo, o referente é determinado. O que é sempre errado é “à pessoas” — artigo singular com substantivo plural."
            },
            {
              "tema": "Pegadinha",
              "pergunta": "Por que “a pedido de” e “a critério de” não levam crase?",
              "resposta": "Porque “pedido” e “critério” são substantivos masculinos — não há artigo feminino a fundir. Mesma lógica de “a bordo de”, “a lápis”, “a cavalo”."
            },
            {
              "tema": "Estratégia",
              "pergunta": "Numa questão de crase da FGV, o que reler primeiro?",
              "resposta": "O VERBO (ou o nome) que vem antes. O erro plantado pela banca quase sempre está na regência, não no acento — sem preposição, o acento é impossível."
            }
          ],
          "simulados": [
            {
              "id": "crase-01",
              "nome": "Crase — fundamentos e casos clássicos",
              "descricao": "A regra-mãe, os três testes e a lista de obrigatórios, proibidos e facultativos.",
              "nivel": "Introdutório",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Conceito · crase × acento grave",
                  "text": "Em gramática, dá-se o nome de CRASE:",
                  "options": [
                    "ao acento grave colocado sobre a vogal “a”;",
                    "à fusão de duas vogais idênticas, geralmente a preposição “a” com o artigo “a”;",
                    "à preposição exigida pela regência de certos verbos;",
                    "ao artigo definido feminino quando antecede substantivo determinado."
                  ],
                  "answer": 1,
                  "exp": "Crase é o FENÔMENO da fusão (do grego krâsis, “mistura”). O acento grave é apenas o SINAL que a indica na escrita — por isso o edital fala em “emprego do sinal indicativo de crase”, e não em “acento de crase”."
                },
                {
                  "type": "mc",
                  "tag": "Regra-mãe · os dois ingredientes",
                  "text": "Assinale a frase em que o sinal indicativo de crase foi empregado corretamente:",
                  "options": [
                    "Entreguei o relatório à diretora.",
                    "Cheguei à Brasília na terça-feira.",
                    "Todos começaram à trabalhar mais cedo.",
                    "Refiro-me à uma proposta antiga."
                  ],
                  "answer": 0,
                  "exp": "Em (a) há os dois ingredientes: “entregar algo A alguém” (preposição) + “a diretora” (artigo). Teste: “entreguei ao diretor”. Em (b), Brasília não admite artigo (volto DE Brasília). Em (c), não há crase antes de verbo. Em (d), “uma” é artigo indefinido e não se funde com a preposição."
                },
                {
                  "type": "mc",
                  "tag": "Teste do masculino · regência de “assistir”",
                  "text": "Aplicando o teste do masculino à lacuna de “Assisti __ peça ontem”, conclui-se que:",
                  "options": [
                    "o correto é “Assisti a peça”, pois “assistir” é sempre transitivo direto;",
                    "o correto é “Assisti à peça”, pois “assistir”, no sentido de ver, exige a preposição “a”;",
                    "o correto é “Assisti há peça”, forma que indica tempo decorrido;",
                    "as duas primeiras formas são igualmente aceitáveis."
                  ],
                  "answer": 1,
                  "exp": "“Assisti AO filme” → logo, “assisti À peça”. No sentido de ver/presenciar, assistir é transitivo INDIRETO. Só é transitivo direto no sentido de prestar assistência (“o médico assistiu a vítima”) ou de caber/pertencer (“não lhe assiste esse direito”)."
                },
                {
                  "type": "mc",
                  "tag": "Crase diante de masculino · “à moda de”",
                  "text": "Assinale a única frase em que o sinal indicativo de crase é obrigatório, apesar de a palavra seguinte ser MASCULINA:",
                  "options": [
                    "Ele redigiu o texto à computador.",
                    "Vestiu-se à Luís XV para a festa.",
                    "Fomos à pé até a esquina.",
                    "Ela trabalha à noite e dorme à tarde."
                  ],
                  "answer": 1,
                  "exp": "“À Luís XV” = “à MODA DE Luís XV”: o artigo feminino concorda com a palavra elíptica “moda”. É o único caso de crase diante de masculino. Em (a) e (c) não há crase (“a computador”, “a pé”). Em (d) a crase existe, mas as palavras são femininas — não atende ao enunciado."
                },
                {
                  "type": "ce",
                  "tag": "Proibido · antes de verbo",
                  "text": "Na frase “À partir de amanhã, o sistema ficará indisponível”, o sinal indicativo de crase está corretamente empregado.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. “Partir” é verbo, e verbo não admite artigo — sem artigo, não há fusão. Escreve-se sempre “a partir de”. Mesma lógica de “a fim de”."
                },
                {
                  "type": "mc",
                  "tag": "Horas",
                  "text": "Assinale a opção INCORRETA quanto ao emprego da crase na indicação de horas:",
                  "options": [
                    "A prova começa às 13h.",
                    "As inscrições serão aceitas a partir das 13h.",
                    "Ele chegou por volta das 14h.",
                    "O expediente vai de às 8h às 17h."
                  ],
                  "answer": 3,
                  "exp": "Na correlação “de… a…”, o primeiro termo não recebe artigo: escreve-se “das 8h às 17h” ou “de 8h a 17h”, nunca “de às”. Horas determinadas pedem crase (às 13h), e as demais opções estão corretas."
                },
                {
                  "type": "mc",
                  "tag": "Proibidos · masculino, pronome e numeral",
                  "text": "Assinale a frase CORRETA quanto ao emprego do sinal indicativo de crase:",
                  "options": [
                    "Pagou o carro à prazo.",
                    "Pagou o carro à vista.",
                    "Entregou o relatório à ela.",
                    "Ficou à cinco metros do portão."
                  ],
                  "answer": 1,
                  "exp": "“Vista” é feminino e forma locução adverbial → à vista. “Prazo” é masculino → a prazo, sem crase. Em (c), pronome pessoal não admite artigo (“a ela”). Em (d), numeral sem artigo também não gera crase (“a cinco metros”)."
                },
                {
                  "type": "mc",
                  "tag": "Pronomes de tratamento",
                  "text": "Assinale a frase em que o uso do sinal indicativo de crase está correto:",
                  "options": [
                    "Refiro-me à Vossa Senhoria com o devido respeito.",
                    "Dirigiu-se à senhora com o devido respeito.",
                    "Entreguei o documento à ela em mãos.",
                    "Cheguei à esta conclusão ontem à noite."
                  ],
                  "answer": 1,
                  "exp": "Pronomes de tratamento iniciados por “Vossa/Sua” não admitem artigo → sem crase. Já “senhora”, “senhorita”, “dona” e “madame” admitem → “à senhora”. Pronome pessoal (“ela”) e demonstrativo (“esta”) também não admitem artigo."
                },
                {
                  "type": "mc",
                  "tag": "Nomes de lugar · teste do “volto de/da”",
                  "text": "“Vou __ Bahia e depois __ Portugal.” Aplicando o teste “volto DA / volto DE”, as lacunas devem ser preenchidas, respectivamente, por:",
                  "options": [
                    "a – a",
                    "à – a",
                    "a – à",
                    "à – à"
                  ],
                  "answer": 1,
                  "exp": "“Volto DA Bahia” → o nome admite artigo → “Vou À Bahia”. “Volto DE Portugal” → não admite artigo → “Vou A Portugal”. Se houver determinação, o artigo aparece: “Vou à Portugal de Saramago”."
                },
                {
                  "type": "mc",
                  "tag": "Demonstrativos · àquele/àquela",
                  "text": "Assinale a frase em que a crase com o pronome demonstrativo está corretamente indicada:",
                  "options": [
                    "Obedeça aquele regulamento sem discutir.",
                    "Referiu-se àquela norma já revogada.",
                    "Comprei àquele livro na feira de domingo.",
                    "Vi àquela cena por acaso."
                  ],
                  "answer": 1,
                  "exp": "Quem se refere, refere-se A algo: a + aquela = àquela. Em (a) falta a crase — “obedecer” também é transitivo indireto e exigiria “àquele regulamento”. Em (c) e (d), “comprar” e “ver” são transitivos diretos: sem preposição, não há crase."
                },
                {
                  "type": "ce",
                  "tag": "Proibido · palavras repetidas",
                  "text": "Em “Analisaram os contratos um à um e discutiram tudo cara à cara”, o sinal indicativo de crase está corretamente empregado.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 1,
                  "exp": "Errado. Expressões formadas pela repetição da mesma palavra não admitem artigo — o “a” é apenas preposição: um a um, cara a cara, dia a dia, gota a gota, frente a frente."
                },
                {
                  "type": "mc",
                  "tag": "Facultativo",
                  "text": "O emprego do sinal indicativo de crase é FACULTATIVO em:",
                  "options": [
                    "Entreguei o convite à Maria.",
                    "Fomos à praia no domingo.",
                    "Atendemos ao público às segundas-feiras.",
                    "Ele agiu à revelia da chefia."
                  ],
                  "answer": 0,
                  "exp": "Diante de nome próprio feminino de PESSOA a crase é facultativa (a/à Maria) — assim como diante de possessivo feminino singular (a/à minha irmã) e depois de “até” (até a/até à porta). Nas demais opções há locução adverbial ou hora determinada: crase obrigatória."
                },
                {
                  "type": "mc",
                  "tag": "Locuções",
                  "text": "Assinale a opção em que TODAS as expressões exigem o sinal indicativo de crase:",
                  "options": [
                    "à noite – à toa – à medida que",
                    "à noite – a pé – à medida que",
                    "à vista – a prazo – à custa de",
                    "às pressas – a partir de – à beira de"
                  ],
                  "answer": 0,
                  "exp": "Em (a) há uma locução adverbial, outra adverbial e uma conjuntiva — todas femininas, todas com crase obrigatória. Nas demais aparece pelo menos uma expressão masculina (“a pé”, “a prazo”) ou formada com verbo (“a partir de”)."
                },
                {
                  "type": "mc",
                  "tag": "Armadilhas · casa, terra, nome de cidade",
                  "text": "Assinale a frase em que a crase é OBRIGATÓRIA:",
                  "options": [
                    "Voltei a casa depois do expediente.",
                    "Voltei à casa de meus pais no fim de semana.",
                    "Os marinheiros desceram a terra ao amanhecer.",
                    "Chegamos a Roma de madrugada."
                  ],
                  "answer": 1,
                  "exp": "“Casa” e “terra” só recebem crase quando vêm DETERMINADAS. “Voltei a casa” (= ao meu lar) não tem determinante; “à casa de meus pais” tem. “Terra” oposta a “bordo” dispensa artigo. “Roma” não admite artigo (volto DE Roma)."
                }
              ]
            },
            {
              "id": "crase-02",
              "nome": "Crase — nível FGV",
              "descricao": "Crase escondida dentro de regência, reescrita e sequências de lacunas, no formato de cinco alternativas da banca.",
              "nivel": "Nível prova",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Identificação do erro",
                  "text": "Assinale a opção em que o sinal indicativo de crase está INCORRETAMENTE empregado.",
                  "options": [
                    "A reunião foi adiada devido à greve dos servidores.",
                    "O candidato respondeu à todas as questões da prova.",
                    "Encaminhei o processo à Procuradoria na sexta-feira.",
                    "Ele se opôs à decisão do colegiado.",
                    "Estamos à espera de novas instruções."
                  ],
                  "answer": 1,
                  "exp": "Não se usa artigo antes do pronome indefinido “todas”: escreve-se “a todas as questões”. Nas demais, os dois ingredientes existem: “devido a” + “a greve”; “encaminhar a” + “a Procuradoria”; “opor-se a” + “a decisão”; e “à espera de” é locução prepositiva feminina."
                },
                {
                  "type": "mc",
                  "tag": "Regência verbal · a origem da crase",
                  "text": "Assinale a opção em que o emprego da crase decorre corretamente da regência do verbo.",
                  "options": [
                    "Aspiramos à uma vida melhor.",
                    "Visamos à ampliação do atendimento.",
                    "O médico assistiu à vítima até a chegada do socorro.",
                    "Preferimos o método antigo à o novo.",
                    "A medida implicou à uma série de mudanças."
                  ],
                  "answer": 1,
                  "exp": "“Visar”, no sentido de ter por objetivo, é transitivo indireto: visamos À ampliação. Em (a), artigo indefinido não admite crase (“a uma vida”). Em (c), “assistir” como prestar assistência é transitivo direto (“assistiu a vítima”). Em (d), o correto é “ao novo”. Em (e), “implicar” = acarretar é transitivo direto (“implicou uma série de mudanças”)."
                },
                {
                  "type": "mc",
                  "tag": "Regência + crase · “obedecer”",
                  "text": "Sobre a frase “O relatório obedeceu as normas internas”, é correto afirmar que:",
                  "options": [
                    "está correta, pois “obedecer” é transitivo direto;",
                    "há erro de regência e de crase: o correto é “obedeceu às normas internas”;",
                    "há erro apenas de concordância verbal;",
                    "o sinal indicativo de crase seria facultativo nesse contexto;",
                    "o sinal indicativo de crase é proibido, porque “normas” está no plural."
                  ],
                  "answer": 1,
                  "exp": "“Obedecer” é transitivo indireto: obedece-se A algo. Com o artigo exigido por “as normas internas”, a preposição funde-se com ele → “às normas”. O plural não impede a crase: impede apenas quando não há artigo (“não obedeço a normas impostas”)."
                },
                {
                  "type": "mc",
                  "tag": "Plural · artigo e sentido",
                  "text": "Considere: (I) “Não me refiro a pessoas mal-intencionadas.” e (II) “Não me refiro às pessoas mal-intencionadas.” A relação entre as duas frases é a seguinte:",
                  "options": [
                    "a primeira está errada, pois “referir-se” exige sempre a crase;",
                    "ambas estão corretas: em (I) fala-se de pessoas em sentido genérico; em (II), de um grupo já determinado;",
                    "ambas são equivalentes, pois o plural torna a crase facultativa;",
                    "a segunda está errada, pois não há crase diante de palavra no plural;",
                    "a diferença é apenas de registro: a segunda é mais formal."
                  ],
                  "answer": 1,
                  "exp": "A preposição “a” é exigida nos dois casos — quem varia é o ARTIGO. Sem ele, o sentido é genérico; com ele, o referente é definido. Por isso, diante de plural, a crase depende do sentido. O que nunca se admite é artigo singular com substantivo plural (“à pessoas”)."
                },
                {
                  "type": "mc",
                  "tag": "Armadilha · a/à distância",
                  "text": "Assinale a opção em que a expressão “a distância” deveria receber o sinal indicativo de crase.",
                  "options": [
                    "Ele acompanhou o julgamento a distância.",
                    "Ele parou a distância de dois metros do balcão.",
                    "O curso é oferecido a distância.",
                    "Manteve os curiosos a distância.",
                    "Ficou a distância, observando tudo em silêncio."
                  ],
                  "answer": 1,
                  "exp": "Sem especificação, “a distância” dispensa a crase. Quando a distância vem ESPECIFICADA (“de dois metros”), o artigo aparece e a crase passa a ser obrigatória: “à distância de dois metros”. Observação: dicionários modernos já registram “à distância” mesmo sem especificação, mas em prova siga a regra da determinação."
                },
                {
                  "type": "mc",
                  "tag": "Facultativo · depois de “até”",
                  "text": "Em “Acompanhou o processo até __ decisão final”, o preenchimento da lacuna:",
                  "options": [
                    "admite tanto “a” quanto “à”, pois depois de “até” a crase é facultativa;",
                    "exige “à”, por se tratar de locução adverbial feminina;",
                    "exige “a”, porque “até” já é preposição e dispensa outra;",
                    "exige “à”, porque “decisão” está determinada por “final”;",
                    "exige “a”, porque “até” nunca admite artigo depois de si."
                  ],
                  "answer": 0,
                  "exp": "“Até” pode funcionar sozinho como preposição ou vir reforçado pela preposição “a” (até a / até à). Por isso a crase é facultativa. Os outros dois casos facultativos são o nome próprio feminino de pessoa e o pronome possessivo feminino singular."
                },
                {
                  "type": "mc",
                  "tag": "Pronome relativo · à qual",
                  "text": "Assinale a frase correta:",
                  "options": [
                    "A empresa a qual me referi encerrou as atividades.",
                    "A empresa à qual me referi encerrou as atividades.",
                    "A empresa que me referi encerrou as atividades.",
                    "A empresa cuja me referi encerrou as atividades.",
                    "A empresa aonde me referi encerrou as atividades."
                  ],
                  "answer": 1,
                  "exp": "“Referir-se A” exige a preposição, que se funde com o artigo do relativo “a qual” → “à qual”. O teste do masculino confirma: “o processo AO QUAL me referi”. As demais formas rompem a regência do verbo."
                },
                {
                  "type": "ce",
                  "tag": "Crase por elipse",
                  "text": "Em “Ela dança à Isadora Duncan”, o sinal indicativo de crase justifica-se pela elipse da palavra “moda”.",
                  "options": [
                    "Certo",
                    "Errado"
                  ],
                  "answer": 0,
                  "exp": "Certo. É a crase por elipse: “à [moda de] Isadora Duncan”. É o mecanismo que permite a crase até diante de palavra masculina — “escrever à Machado de Assis”, “bife à Osvaldo Aranha”."
                },
                {
                  "type": "mc",
                  "tag": "Sequência de lacunas",
                  "text": "“O documento foi entregue __ diretoria __ 15h, __ pedido da presidência.” As lacunas devem ser preenchidas, na ordem, por:",
                  "options": [
                    "a – as – a",
                    "à – às – a",
                    "à – às – à",
                    "a – às – a",
                    "à – as – à"
                  ],
                  "answer": 1,
                  "exp": "“Entregar A” + “a diretoria” → à. Hora determinada → às 15h. Terceira lacuna é a pegadinha: “pedido” é substantivo MASCULINO, logo “a pedido da presidência”, sem crase — como em “a critério de” e “a bordo de”."
                },
                {
                  "type": "mc",
                  "tag": "Nome de cidade determinado",
                  "text": "Assinale a opção em que a crase está corretamente empregada diante de nome de lugar.",
                  "options": [
                    "Chegamos à São Paulo na sexta-feira.",
                    "Voltaremos à Belo Horizonte amanhã.",
                    "Referiu-se à São Paulo dos anos 1950.",
                    "Iremos à Salvador de carro.",
                    "Fomos à Recife visitar a família."
                  ],
                  "answer": 2,
                  "exp": "Nomes de cidade em geral não admitem artigo (volto DE São Paulo → vou A São Paulo). Mas, quando o nome vem DETERMINADO por um modificador, o artigo aparece: “à São Paulo dos anos 1950”. Recife é masculino (volto DO Recife), logo “ao Recife”."
                },
                {
                  "type": "mc",
                  "tag": "Reescrita · determinação do complemento",
                  "text": "Partindo de “Nunca me submeti a ordens absurdas”, a reescrita que determina o complemento SEM quebrar a correção é:",
                  "options": [
                    "Nunca me submeti a as ordens absurdas daquele chefe.",
                    "Nunca me submeti às ordens absurdas daquele chefe.",
                    "Nunca me submeti à ordens absurdas daquele chefe.",
                    "Nunca me submeti as ordens absurdas daquele chefe.",
                    "Nunca me submeti a ordens absurdas daquele chefe, sendo a crase facultativa."
                  ],
                  "answer": 1,
                  "exp": "“Submeter-se A” exige a preposição; ao determinar o complemento (“daquele chefe”), entra o artigo “as” → a + as = às. A forma “à ordens” é impossível (artigo singular com substantivo plural), e “as ordens” perde a preposição exigida pelo verbo."
                },
                {
                  "type": "mc",
                  "tag": "Locuções × palavra repetida",
                  "text": "Assinale a opção que completa corretamente, quanto à crase, as expressões “Saímos ___”, “Ele chegou ___” (= no período da tarde) e “Ficaram ___ com o chefe”.",
                  "options": [
                    "às pressas – a tarde – frente a frente",
                    "às pressas – à tarde – frente a frente",
                    "as pressas – à tarde – frente à frente",
                    "às pressas – à tarde – frente à frente",
                    "as pressas – a tarde – frente a frente"
                  ],
                  "answer": 1,
                  "exp": "“Às pressas” e “à tarde” são locuções adverbiais femininas → crase obrigatória. “Frente a frente” repete a mesma palavra e não admite artigo → sem crase. Atenção ao par “chegou à tarde” (no período da tarde) × “chegou a tarde” (aí “a tarde” é o sujeito de “chegar”)."
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
          "descricao": "A base do Raciocínio Lógico da FGV: o que é proposição, os conectivos, tabela-verdade e o “se… então” por inteiro — disfarces, contrapositiva, negação e as duas armadilhas clássicas. Inclui as equivalências e negações cobradas em prova: De Morgan, forma disjuntiva, bicondicional e ou-exclusivo, exportação.",
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
              "titulo": "Suficiente, necessário e o “somente se”",
              "html": "<p>Todo condicional <b>p → q</b> diz duas coisas ao mesmo tempo, com nomes que a FGV cobra direto:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p é suficiente para q</span> <b>basta</b> p acontecer para garantir q. O antecedente é a condição suficiente.</div>\n  <div class=\"def\"><span class=\"def-t\">q é necessário para p</span> <b>sem</b> q, p não pode ocorrer. O consequente é a condição necessária.</div>\n</div>\n<p>Exemplo: “Se é analista da DataPrev, então é servidor público”. Ser analista <b>basta</b> para ser servidor (suficiente). Ser servidor é <b>indispensável</b> para ser analista (necessário) — mas não basta, há outros servidores.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A armadilha do “somente se”:</b> o que vem depois de <i>somente se</i> é a condição <b>necessária</b> — e condição necessária é o <b>consequente</b>. “Serei aprovada <b>somente se</b> estudar” = <b>aprovada → estudou</b>. A banca oferece o inverso (estudou → aprovada) como distrator, e ele diz outra coisa: estudar não garante aprovação.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>“se” sozinho puxa o antecedente; “somente se” puxa o consequente.</b> “a <b>se</b> b” = b → a · “a <b>somente se</b> b” = a → b</div>\n<p><b>Tabela de traduções — decore esta lista, ela resolve questão sozinha:</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Se p, então q · p implica q · q, se p</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">p somente se q · p só se q</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">Quando p, q · Sempre que p, q · Caso p, q</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">Todo p é q</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">p é suficiente para q</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">q é necessário para p</span> p → q</div>\n  <div class=\"def\"><span class=\"def-t\">p, a menos que q · p, exceto se q · p, salvo se q</span> ~q → p</div>\n  <div class=\"def\"><span class=\"def-t\">p é necessário e suficiente para q</span> p ↔ q</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>“A menos que” = “se não”.</b> “Vou à praia, <b>a menos que</b> chova” = “se <b>não</b> chover, vou à praia” (~q → p). O erro comum é traduzir como se fosse “se chover”.</div>"
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
              "titulo": "De Morgan por dentro: por que o E vira OU",
              "html": "<p>A regra você já tem (<b>NENE</b>): nega as duas partes e troca o conectivo. Falta o <b>porquê</b> — e é ele que impede o erro na hora da prova.</p>\n<p>Pegue <i>“Ana estuda lógica <b>e</b> português”</i>. Para essa frase ser <b>falsa</b>, o que basta? Basta <b>uma</b> das duas falhar. Se ela não estudou lógica, a frase já caiu; se não estudou português, já caiu. Não é preciso que as duas falhem. Por isso a negação é <i>“não estuda lógica <b>ou</b> não estuda português”</i>.</p>\n<p>Agora <i>“Ana estuda lógica <b>ou</b> português”</i>. Aqui uma falha não derruba nada: se ela estudou pelo menos uma, a frase resiste. É preciso derrubar as <b>duas</b> — e a negação vira <i>“não estuda lógica <b>e</b> não estuda português”</i>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~(p ∧ q) = ~p ∨ ~q</span> o <b>e</b> é uma <b>corrente</b>: arrebenta num elo só</div>\n  <div class=\"def\"><span class=\"def-t\">~(p ∨ q) = ~p ∧ ~q</span> o <b>ou</b> é um <b>feixe de cordas</b>: só cai cortando todas</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O erro clássico é negar o “e” com “e”.</b> “Ana não estuda lógica e não estuda português” exige que ela abandone as duas matérias — muito mais forte do que negar a frase. Confira pelo teste da convivência: se Ana estuda lógica e não estuda português, a original é <b>falsa</b> e essa “negação” também é <b>falsa</b>. Duas falsas juntas nunca são negação uma da outra.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Na prova o <b>“ou” é inclusivo</b> por padrão (admite que os dois aconteçam). O exclusivo só aparece quando a frase diz <i>“ou… ou…, mas não ambos”</i> — e aí a regra é outra: <code>~(p ⊻ q) = p ↔ q</code>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> É a mesma identidade que você usa sem pensar no código: <code>!(a &amp;&amp; b) === !a || !b</code> e <code>!(a || b) === !a &amp;&amp; !b</code>.</div>"
            },
            {
              "titulo": "Quando o antecedente já é negativo",
              "html": "<p>A regra do MANÉ manda <b>manter a primeira parte do jeito que ela está</b> — e é aqui que quase todo mundo escorrega, porque o antecedente às vezes já vem com um “não”.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Frase</span> Se <b>não</b> houver greve, a prova será aplicada no domingo</div>\n  <div class=\"def\"><span class=\"def-t\">Negação</span> <b>Não</b> houve greve <b>e</b> a prova <b>não</b> foi aplicada no domingo</div>\n  <div class=\"def\"><span class=\"def-t\">Errado</span> <i>Houve</i> greve e a prova não foi aplicada — isso negou o antecedente, que é justamente o que não se faz</div>\n</div>\n<p>Se a frase confundir, escreva em letras antes de negar: chamando <code>g</code> de “houve greve” e <code>d</code> de “prova no domingo”, a original é <code>~g → d</code> e a negação é <code>~g ∧ ~d</code>. Com os símbolos na frente dos olhos, o “não” do antecedente para de atrapalhar.</p>\n<p><b>O catálogo de distratores</b> que a banca oferece para <i>“Se chove, a rua fica molhada”</i>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Chove e a rua não fica molhada</span> ✅ é a <b>negação</b> (p ∧ ~q)</div>\n  <div class=\"def\"><span class=\"def-t\">Se chove, a rua não fica molhada</span> ❌ negou só o consequente — e continua condicional</div>\n  <div class=\"def\"><span class=\"def-t\">Se não chove, a rua não fica molhada</span> ❌ é a inversa</div>\n  <div class=\"def\"><span class=\"def-t\">Não chove ou a rua fica molhada</span> ❌ é a <b>equivalente</b> (NEMA), não a negação</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O último é o mais traiçoeiro:</b> quem estudou equivalência reconhece a forma e marca por reflexo. A FGV usa o mesmo par de proposições nas duas perguntas — por isso o primeiro passo é sempre circular o verbo do enunciado: <b>equivalente</b> ou <b>negação</b>?</div>"
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
              "titulo": "Bicondicional e ou-exclusivo: negar os dois lados não nega nada",
              "html": "<p>O bicondicional <code>p ↔ q</code> pergunta uma coisa só: <b>os dois lados têm o mesmo valor?</b> Tudo nesse grupo sai daí.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p ↔ q = (p → q) ∧ (q → p)</span> ida <b>e</b> volta</div>\n  <div class=\"def\"><span class=\"def-t\">p ↔ q = (p ∧ q) ∨ (~p ∧ ~q)</span> ou os dois valem, ou nenhum vale — sem setas</div>\n  <div class=\"def\"><span class=\"def-t\">~(p ↔ q) = p ⊻ q</span> negar é dizer que eles <b>diferem</b> — é o ou-exclusivo</div>\n  <div class=\"def\"><span class=\"def-t\">~(p ↔ q) = (p ∧ ~q) ∨ (~p ∧ q)</span> a mesma coisa escrita por extenso</div>\n  <div class=\"def\"><span class=\"def-t\">~(p ↔ q) = p ↔ ~q = ~p ↔ q</span> negar <b>um</b> lado já inverte tudo</div>\n  <div class=\"def\"><span class=\"def-t\">~(p ⊻ q) = p ↔ q</span> o caminho de volta</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A pegadinha do grupo:</b> <code>~p ↔ ~q</code> é <b>equivalente</b> a <code>p ↔ q</code>, não a negação dela. “Os dois são falsos juntos” continua sendo um caso de “os dois têm o mesmo valor”. É a única família de conectivos em que negar tudo não muda nada — para negar de verdade, negue <b>só um</b> lado.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Na alternativa, <i>“A é aprovada se e somente se B é suficiente”</i> tem como negação <i>“A é aprovada e B não é suficiente, <b>ou</b> B é suficiente e A não é aprovada”</i>. Se a alternativa mantém o “se e somente se” com os dois lados negados, ela está repetindo a frase original com outras palavras.</div>"
            },
            {
              "titulo": "Exportação e as equivalências de apoio",
              "html": "<p>Uma última família, de reconhecimento — você não precisa decorar, precisa não se assustar quando ela aparecer na alternativa.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Exportação · (p ∧ q) → r = p → (q → r)</span> duas condições exigidas juntas = uma condição dentro da outra</div>\n  <div class=\"def\"><span class=\"def-t\">Dupla negação · ~(~p) = p</span> “não é verdade que não…” é afirmação</div>\n  <div class=\"def\"><span class=\"def-t\">Distributiva · p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r)</span> o <b>e</b> distribui sobre o <b>ou</b></div>\n  <div class=\"def\"><span class=\"def-t\">Distributiva · p ∨ (q ∧ r) = (p ∨ q) ∧ (p ∨ r)</span> e o <b>ou</b> sobre o <b>e</b></div>\n  <div class=\"def\"><span class=\"def-t\">Absorção · p ∨ (p ∧ q) = p</span> o termo solto manda (idem p ∧ (p ∨ q) = p)</div>\n</div>\n<p>A exportação é a única com cara de pegadinha e já foi cobrada: <i>“Se o usuário está autenticado <b>e</b> tem permissão, o acesso é liberado”</i> equivale a <i>“Se o usuário está autenticado, então: se tem permissão, o acesso é liberado”</i>. Em código, é a diferença entre um <code>if (a &amp;&amp; b)</code> e dois <code>if</code> aninhados — mesma regra.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A condicional não comuta nem associa:</b> <code>p → q</code> não é <code>q → p</code>, e <code>(p → q) → r</code> <b>não</b> é <code>p → (q → r)</code>. No “e” e no “ou” os parênteses podem andar; na seta, não.</div>"
            },
            {
              "titulo": "Tabela de negações e equivalências (com os apelidos)",
              "html": "\n<p><b>Regra que unifica tudo:</b> em toda <b>negação</b>, o conectivo troca de time — o <b>e</b> vira <b>ou</b>, o <b>ou</b> vira <b>e</b>, e a <b>seta vira e</b>. Se você negou e o conectivo continuou o mesmo, errou.</p>\n<p><b>Negações</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~(p ∧ q) = ~p ∨ ~q · NENE</span> nega as duas partes e o <b>E vira OU</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p ∨ q) = ~p ∧ ~q · NENE</span> nega as duas partes e o <b>OU vira E</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p → q) = p ∧ ~q · MANÉ</span> <b>MA</b>ntém a 1ª, <b>NE</b>ga a 2ª, a seta vira <b>E</b></div>\n  <div class=\"def\"><span class=\"def-t\">~(p ↔ q) = p ↔ ~q</span> nega <b>só um</b> dos lados</div>\n  <div class=\"def\"><span class=\"def-t\">~(~p) = p</span> negar duas vezes volta ao original</div>\n</div>\n<p><b>Equivalências</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p → q = ~q → ~p · contrapositiva</span> inverte a ordem <b>e</b> nega os dois; a seta continua</div>\n  <div class=\"def\"><span class=\"def-t\">p → q = ~p ∨ q · NEMA</span> <b>NE</b>ga a 1ª, <b>MA</b>ntém a 2ª, a seta vira <b>OU</b></div>\n  <div class=\"def\"><span class=\"def-t\">p ↔ q = (p → q) ∧ (q → p)</span> bicondicional é ida <b>e</b> volta</div>\n  <div class=\"def\"><span class=\"def-t\">NÃO equivalem</span> recíproca (q → p) e inversa (~p → ~q) — as duas armadilhas</div>\n</div>\n<p><b>Quantificadores</b> — negar o exigente gera o folgado</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Todo A é B → Algum A NÃO é B</span> basta <b>um</b> contraexemplo para derrubar um “todo”</div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B → Nenhum A é B</span> para derrubar “algum”, tem de zerar todos</div>\n  <div class=\"def\"><span class=\"def-t\">Nenhum A é B → Algum A é B</span> basta <b>um</b> caso para derrubar um “nenhum”</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>MANÉ e NEMA são as mesmas sílabas invertidas</b> — é onde todo mundo troca. Leia o apelido da esquerda para a direita: ele diz o que acontece com a <b>1ª parte</b> e depois com a <b>2ª</b>. <b>MA-NÉ</b>: mantém, nega → é a <b>negação</b>, resultado com <b>E</b>. <b>NE-MA</b>: nega, mantém → é a <b>equivalência</b>, resultado com <b>OU</b>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Conferidor de reserva: <b>negação vira “e”</b> (exigente: precisa dos dois fatos para acusar a mentira); <b>equivalência vira “ou”</b> (folgada: só reescreve a promessa).</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Teste universal de negação:</b> tente imaginar um cenário em que a frase original e a sua resposta sejam verdadeiras <b>ao mesmo tempo</b>. Se conseguir, a sua “negação” está errada.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> Por que a negação do condicional é MANÉ e não uma regra à parte: <code>p → q</code> equivale a <code>~p ∨ q</code> (NEMA); aplicando De Morgan, <code>~(~p ∨ q) = p ∧ ~q</code>. É De Morgan aplicado — não há nada novo para decorar.</div>\n"
            },
            {
              "titulo": "Método do valor forçado: valorar sem montar a tabela",
              "html": "<p>Na prova você tem cerca de 4 minutos por questão de RL. Montar 8 linhas é luxo caro. Quando o enunciado <b>dá o valor da proposição composta</b>, comece pelo conectivo que só admite <b>uma</b> possibilidade — daí tudo se determina sozinho.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Condicional FALSA</span> só existe um caso: antecedente <b>V</b> e consequente <b>F</b>.</div>\n  <div class=\"def\"><span class=\"def-t\">Conjunção (e) VERDADEIRA</span> as duas partes são <b>V</b>.</div>\n  <div class=\"def\"><span class=\"def-t\">Disjunção (ou) FALSA</span> as duas partes são <b>F</b>.</div>\n</div>\n<p><b>Exemplo resolvido.</b> Sabe-se que <b>(p ∧ q) → (r ∨ s)</b> é <b>falsa</b>. Quais são os valores?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Condicional falsa</span> antecedente V, consequente F</div>\n  <div class=\"def\"><span class=\"def-t\">2. p ∧ q = V</span> conjunção só é V com as duas V → <b>p = V, q = V</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. r ∨ s = F</span> disjunção só é F com as duas F → <b>r = F, s = F</b></div>\n</div>\n<p>Três passos, nenhuma tabela, os quatro valores determinados. É o formato mais comum de questão de valoração da FGV.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Pense como teste unitário: o enunciado te deu o <b>resultado esperado</b> e você está descobrindo qual é a <b>única entrada</b> que produz aquele resultado.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> O caminho inverso <b>não</b> força nada: condicional <b>verdadeira</b>, disjunção <b>verdadeira</b> e conjunção <b>falsa</b> admitem três linhas cada uma. Nesses casos, teste as alternativas em vez de tentar deduzir.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Depois de achar os valores, cuidado ao conferir as alternativas: <b>F ↔ F é VERDADEIRO</b>. O bicondicional só pergunta se os dois lados são <b>iguais</b>, não se são verdadeiros.</div>"
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
            },
            {
              "tema": "Condicional",
              "pergunta": "Em p → q, quem é a condição suficiente e quem é a necessária?",
              "resposta": "p (antecedente) é suficiente para q; q (consequente) é necessário para p. Basta p para garantir q; sem q, p não ocorre."
            },
            {
              "tema": "Condicional",
              "pergunta": "Como se traduz “p somente se q”?",
              "resposta": "p → q. O que vem depois de “somente se” é a condição necessária, e condição necessária é o consequente. Cuidado: “p se q” é o contrário (q → p)."
            },
            {
              "tema": "Condicional",
              "pergunta": "Como se traduz “p, a menos que q”?",
              "resposta": "~q → p. “A menos que” equivale a “se não”: “vou à praia, a menos que chova” = “se não chover, vou à praia”."
            },
            {
              "tema": "Valoração",
              "pergunta": "Se uma condicional é FALSA, o que se conclui sobre as partes?",
              "resposta": "Antecedente V e consequente F — é a única linha falsa da condicional, então tudo fica determinado."
            },
            {
              "tema": "Valoração",
              "pergunta": "Se uma conjunção é verdadeira e se uma disjunção é falsa, o que se conclui?",
              "resposta": "Conjunção V → as duas partes são V. Disjunção F → as duas partes são F. São os outros dois casos que “forçam” valor."
            },
            {
              "tema": "Conectivos",
              "pergunta": "Qual o valor de F ↔ F?",
              "resposta": "Verdadeiro. O bicondicional é V sempre que os dois lados têm o MESMO valor — inclusive quando os dois são falsos."
            },
            {
              "tema": "Negações",
              "pergunta": "Qual a negação de “Se não houver greve, a prova será aplicada no domingo”?",
              "resposta": "“Não houve greve E a prova não foi aplicada no domingo.” O antecedente é mantido como está — inclusive quando já é negativo. Negar o antecedente (“houve greve e…”) é o erro mais comum do assunto."
            },
            {
              "tema": "Equivalências",
              "pergunta": "~p ↔ ~q é a negação de p ↔ q ou é equivalente a ela?",
              "resposta": "É EQUIVALENTE. Negar os dois lados mantém a igualdade — “os dois falsos” continua sendo “os dois com o mesmo valor”. Para negar, negue só UM lado: ~(p ↔ q) = p ↔ ~q."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Como escrever p ↔ q sem usar nenhuma seta?",
              "resposta": "(p ∧ q) ∨ (~p ∧ ~q) — ou os dois valem, ou nenhum vale. E a negação é o ou-exclusivo: (p ∧ ~q) ∨ (~p ∧ q)."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Qual a relação entre o bicondicional e o ou-exclusivo?",
              "resposta": "São negação um do outro: ~(p ↔ q) = p ⊻ q e ~(p ⊻ q) = p ↔ q. O bicondicional diz “iguais”; o exclusivo diz “diferentes”."
            },
            {
              "tema": "Equivalências",
              "pergunta": "O que diz a lei da exportação?",
              "resposta": "(p ∧ q) → r = p → (q → r). Duas condições exigidas juntas equivalem a uma condição dentro da outra — o mesmo que trocar um if (a && b) por dois if aninhados."
            },
            {
              "tema": "Equivalências",
              "pergunta": "(p → q) → r equivale a p → (q → r)?",
              "resposta": "NÃO. A condicional não associa nem comuta: só a exportação (com ∧ no antecedente) vale. Nos parênteses da seta, posição muda tudo."
            },
            {
              "tema": "Equivalências",
              "pergunta": "Como transformar “p ou q” numa condicional?",
              "resposta": "p ∨ q = ~p → q (e também ~q → p). Uma disjunção é sempre “se um dos dois falhar, o outro tem que valer”. É o NEMA lido de trás para a frente."
            },
            {
              "tema": "Negações",
              "pergunta": "Por que a negação de “Ana estuda lógica e português” não é “não estuda lógica e não estuda português”?",
              "resposta": "Porque essa é forte demais: para a original cair basta UMA das duas falhar. Teste — se Ana estuda lógica e não estuda português, a original é F e essa “negação” também é F; duas falsas juntas não são negação uma da outra."
            },
            {
              "tema": "Método",
              "pergunta": "Duas alternativas parecem candidatas. Como decidir sem montar a tabela inteira?",
              "resposta": "Teste UMA linha: invente um cenário (p = V, q = F, por exemplo) e calcule as duas. Se derem valores diferentes, já dá para descartar uma. Tabela completa só quando a linha única não separar."
            },
            {
              "tema": "Método",
              "pergunta": "Qual o atalho para questão de negação?",
              "resposta": "Ache uma linha em que a proposição original é VERDADEIRA e teste as alternativas nessa linha: a negação é a única que dá FALSO ali. Resolve em segundos, sem tabela."
            },
            {
              "tema": "Método",
              "pergunta": "O que significa, em termos de tabela, dizer que duas proposições são equivalentes?",
              "resposta": "Que têm a mesma coluna final, linha por linha — e, equivalentemente, que p ↔ q é uma TAUTOLOGIA. Se existir uma única linha em que discordam, não são equivalentes: é nessa linha que a banca monta o distrator."
            },
            {
              "tema": "Mnemônicos",
              "pergunta": "Que imagem ajuda a lembrar De Morgan?",
              "resposta": "O “e” é uma CORRENTE: arrebenta num elo só, então basta negar uma parte (vira “ou”). O “ou” é um FEIXE de cordas: só cai cortando todas, então é preciso negar as duas (vira “e”)."
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
            },
            {
              "id": "logica-sentencial-03",
              "nome": "Aula 2 · Tabela-verdade, traduções e valoração",
              "descricao": "Seis questões no padrão FGV sobre a base da lógica sentencial: tradução do português (o “mas” e o “somente se”), valoração com valores dados, tautologia, método do valor forçado e ordem de precedência dos conectivos.",
              "nivel": "Treino",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Tradução · disfarces do “e”",
                  "text": "Considere p: “O sistema está atualizado” e q: “Houve falhas no atendimento”. A frase “O sistema está atualizado, mas houve falhas no atendimento” é corretamente representada por",
                  "options": [
                    "p → q",
                    "p ∧ q",
                    "p ∨ q",
                    "p ↔ q",
                    "~p ∧ q"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. “Mas” é adversativa no Português, mas em lógica é CONJUNÇÃO: a frase afirma as duas coisas ao mesmo tempo. Vale para toda a família — mas, porém, contudo, todavia, entretanto, embora, ainda que, apesar de: todos viram ∧. A opção E acrescenta uma negação que não existe na frase (“o sistema NÃO está atualizado”)."
                },
                {
                  "type": "mc",
                  "tag": "Valoração",
                  "text": "Sabendo que p é verdadeira, q é falsa e r é verdadeira, assinale a proposição composta que é FALSA.",
                  "options": [
                    "(p ∧ ~q) → r",
                    "(q ∨ r) ↔ p",
                    "~(p → q)",
                    "(p ↔ q) ∨ ~r",
                    "~q → (p ∨ r)"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. Substituindo p=V, q=F, r=V: (A) (V ∧ V) → V = V → V = V. (B) (F ∨ V) ↔ V = V ↔ V = V. (C) ~(V → F) = ~F = V. (D) (V ↔ F) ∨ ~V = F ∨ F = F ← resposta. (E) ~F → (V ∨ V) = V → V = V. O tropeço típico é em C: quem calcula V → F como verdadeiro marca C. Lembre que V → F é o ÚNICO caso falso da condicional."
                },
                {
                  "type": "mc",
                  "tag": "Tautologia",
                  "text": "A proposição composta (p → q) ∨ (q → p) é",
                  "options": [
                    "uma contradição",
                    "uma tautologia",
                    "uma contingência, verdadeira apenas quando p e q são verdadeiras",
                    "uma contingência, falsa apenas quando p é verdadeira e q é falsa",
                    "equivalente a p ∧ q"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Nas quatro linhas o resultado é V: (V,V) V∨V · (V,F) F∨V · (F,V) V∨F · (F,F) V∨V. A razão é intuitiva: uma condicional só falha no padrão V → F, e p e q não podem estar nesse padrão nos DOIS sentidos ao mesmo tempo. Logo pelo menos uma das condicionais é sempre verdadeira — e basta uma para a disjunção ser V."
                },
                {
                  "type": "mc",
                  "tag": "Tradução · somente se",
                  "text": "Considere a: “O candidato será aprovado” e b: “O candidato acerta 60% da prova”. A frase “O candidato será aprovado somente se acertar 60% da prova” é representada por",
                  "options": [
                    "b → a",
                    "a → b",
                    "a ∧ b",
                    "a ↔ b",
                    "~a → b"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. “Somente se” introduz a condição NECESSÁRIA, e a condição necessária ocupa o consequente: a → b (se foi aprovado, então acertou 60%). A opção A é o distrator principal e diz outra coisa — que acertar 60% GARANTE a aprovação, o que a frase não afirma (num concurso concorrido, 60% pode não bastar). Guarde o par: “a se b” = b → a · “a somente se b” = a → b."
                },
                {
                  "type": "mc",
                  "tag": "Valor forçado",
                  "text": "Sabe-se que a proposição (p ∧ q) → (r ∨ s) é FALSA. Nessas condições, é VERDADEIRA a proposição",
                  "options": [
                    "p → r",
                    "q ∧ s",
                    "~r → ~p",
                    "s ∨ ~q",
                    "r ↔ s"
                  ],
                  "answer": 4,
                  "exp": "Gabarito: E. Condicional falsa → antecedente V e consequente F. Então p ∧ q = V force p=V e q=V; r ∨ s = F força r=F e s=F. Conferindo: (A) V → F = F. (B) V ∧ F = F. (C) ~F → ~V = V → F = F. (D) F ∨ F = F. (E) F ↔ F = V ← resposta. A E é descartada por quem esquece que bicondicional com os DOIS lados falsos é verdadeiro: ele só pergunta se os valores são iguais."
                },
                {
                  "type": "mc",
                  "tag": "Tabela-verdade · precedência",
                  "text": "Uma proposição composta é formada pelas proposições simples p, q, r e s. O número de linhas da tabela-verdade dessa proposição e o conectivo que deve ser resolvido POR ÚLTIMO em ~p ∨ q → r ∧ s são, respectivamente,",
                  "options": [
                    "8 e ∨",
                    "8 e →",
                    "16 e ∧",
                    "16 e →",
                    "16 e ~"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. Linhas: 4 proposições simples distintas → 2⁴ = 16. Último conectivo: pela precedência (~, depois ∧ e ∨, depois →, por último ↔), resolve-se ~p, depois ~p ∨ q, depois r ∧ s e, por fim, a CONDICIONAL — que é o conectivo principal. Com parênteses explícitos: ((~p) ∨ q) → (r ∧ s). Quem marca C confundiu “o que aparece por último escrito” com “o que se resolve por último”."
                }
              ]
            },
            {
              "id": "logica-sentencial-04",
              "nome": "Aula 3 · Equivalências e negações (De Morgan)",
              "descricao": "Oito questões no padrão FGV sobre negar o “e” e o “ou”, as três faces da condicional (contrapositiva, recíproca e inversa), a negação do condicional com antecedente negativo, bicondicional e exportação.",
              "nivel": "Treino",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Negação do condicional",
                  "text": "A negação da proposição “Se o candidato faltar à prova, ele será eliminado” é",
                  "options": [
                    "Se o candidato faltar à prova, ele não será eliminado",
                    "Se o candidato não faltar à prova, ele não será eliminado",
                    "O candidato não faltará à prova ou será eliminado",
                    "O candidato faltará à prova e não será eliminado",
                    "O candidato não faltará à prova e não será eliminado"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. A frase é p → q e ~(p → q) = p ∧ ~q — MANÉ: mantém o antecedente, nega o consequente, a seta vira “e”. As erradas são o catálogo completo do assunto: A é p → ~q (negou só o consequente e continuou condicional — a negação de uma condicional NUNCA é condicional); B é a inversa; C é ~p ∨ q, que é a EQUIVALENTE da original (NEMA) — se você marcou esta, leu “negação” e respondeu “equivalente”, que é exatamente o par que a banca usa nas duas perguntas; E aplicou De Morgan onde não cabia."
                },
                {
                  "type": "mc",
                  "tag": "Contrapositiva",
                  "text": "Assinale a proposição logicamente equivalente a “Se o sistema está fora do ar, então o alerta foi enviado”.",
                  "options": [
                    "Se o alerta foi enviado, então o sistema está fora do ar",
                    "Se o sistema não está fora do ar, então o alerta não foi enviado",
                    "Se o alerta não foi enviado, então o sistema não está fora do ar",
                    "O sistema está fora do ar e o alerta foi enviado",
                    "Se o alerta não foi enviado, então o sistema está fora do ar"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. É a contrapositiva: inverteu a ordem E negou os dois lados — a única das quatro faces que equivale. A é a recíproca (o alerta pode ter sido enviado por um teste de rotina) e B é a inversa. Repare que recíproca e inversa são contrapositivas uma da outra, ou seja, equivalentes ENTRE SI: quando esse par aparece nas alternativas, pode descartar as duas de saída, porque duas alternativas equivalentes não podem ser ambas a resposta. A D troca a condicional por conjunção, afirmando que os dois fatos ocorreram. A E inverteu a ordem mas negou só um lado."
                },
                {
                  "type": "mc",
                  "tag": "Negação do “e” · De Morgan",
                  "text": "A negação da proposição “Ana estuda lógica e português” é",
                  "options": [
                    "Ana não estuda lógica e não estuda português",
                    "Ana não estuda lógica ou não estuda português",
                    "Ana estuda lógica ou português",
                    "Se Ana estuda lógica, então não estuda português",
                    "Ana não estuda lógica nem português"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. De Morgan (NENE): negou o “e”, virou “ou”, com as duas partes negadas. Para a original cair basta UMA das duas atividades não acontecer. A opção A é o erro clássico — exige que ela abandone as duas matérias, condição muito mais forte do que negar a frase; pelo teste da convivência, se Ana estuda lógica e não estuda português, a original é F e a A também é F, e duas falsas juntas nunca são negação uma da outra. A E diz o mesmo que a A (“nem” = “e não”). A C convive com a original. A D é p → ~q, que nem chega a negá-la."
                },
                {
                  "type": "mc",
                  "tag": "Negação do “ou” · De Morgan",
                  "text": "Considere a proposição “O edital será retificado ou o prazo será prorrogado”. Sua negação é",
                  "options": [
                    "O edital não será retificado ou o prazo não será prorrogado",
                    "O edital será retificado e o prazo não será prorrogado",
                    "O edital não será retificado e o prazo não será prorrogado",
                    "Se o edital não for retificado, o prazo será prorrogado",
                    "O edital será retificado ou o prazo não será prorrogado"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. De Morgan do “ou”: o conectivo vira “e” e as duas partes são negadas. Uma disjunção é um feixe de cordas — só cai quando TODAS as parcelas caem. A opção A aplicou a regra na direção errada (é o que se faz com o “e”). A D é ~p → q, que é EQUIVALENTE à original, não a negação — de novo o par equivalente/negação na mesma questão. B e E negam apenas uma das parcelas."
                },
                {
                  "type": "mc",
                  "tag": "Equivalência · dupla negação",
                  "text": "A proposição ~(p ∧ ~q) é logicamente equivalente a",
                  "options": [
                    "p ∧ q",
                    "~p ∧ q",
                    "p → q",
                    "q → p",
                    "p ∨ ~q"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Duas aplicações em sequência: ~(p ∧ ~q) = ~p ∨ ~(~q) por De Morgan, = ~p ∨ q pela dupla negação, = p → q pelo NEMA lido de volta. Conferindo por linha: p ∧ ~q só é V quando p = V e q = F, logo ~(p ∧ ~q) só é F nessa linha — exatamente a única linha em que p → q é falsa. Repare que p ∧ ~q é a negação da condicional, e aqui ele aparece negado: negar a negação devolve a original. A opção E é o distrator de quem esqueceu de negar o antecedente na volta."
                },
                {
                  "type": "mc",
                  "tag": "Negação do bicondicional",
                  "text": "A negação da proposição “A proposta é aprovada se e somente se o orçamento é suficiente” é",
                  "options": [
                    "Se a proposta é aprovada, então o orçamento é suficiente",
                    "A proposta é aprovada e o orçamento não é suficiente, ou o orçamento é suficiente e a proposta não é aprovada",
                    "A proposta não é aprovada se e somente se o orçamento não é suficiente",
                    "A proposta não é aprovada e o orçamento não é suficiente",
                    "Se o orçamento é suficiente, então a proposta é aprovada"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Negar um bicondicional é afirmar que os dois lados DIFEREM — o ou-exclusivo, que escrito por extenso é (p ∧ ~q) ∨ (~p ∧ q). A opção C é o distrator principal: ~p ↔ ~q é EQUIVALENTE a p ↔ q, não a negação dela, porque “os dois falsos” continua sendo “os dois com o mesmo valor”; para negar é preciso negar só UM lado (p ↔ ~q também seria resposta correta). A e E são as duas metades da bicondicional original — cada uma é implicada por ela e nenhuma a nega. A D descreve um cenário que SATISFAZ a original."
                },
                {
                  "type": "mc",
                  "tag": "Exportação",
                  "text": "A proposição “Se o usuário está autenticado e possui permissão, então o acesso é liberado” é logicamente equivalente a",
                  "options": [
                    "Se o usuário está autenticado, então, se possui permissão, o acesso é liberado",
                    "Se o usuário está autenticado ou possui permissão, então o acesso é liberado",
                    "Se o acesso é liberado, então o usuário está autenticado e possui permissão",
                    "O usuário está autenticado e possui permissão e o acesso é liberado",
                    "Se o usuário não está autenticado, então o acesso não é liberado"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. É a exportação: (p ∧ q) → r = p → (q → r). Duas condições exigidas juntas equivalem a uma condição dentro da outra — dois if aninhados em vez de um &&. A opção B trocou ∧ por ∨ no antecedente e enfraqueceu a exigência: passaria a liberar acesso para quem apenas está autenticado. A C é a recíproca, a E é a inversa e a D transformou a regra em afirmação de fato."
                },
                {
                  "type": "mc",
                  "tag": "Negação com antecedente negativo",
                  "text": "A negação da proposição “Se não houver greve, a prova será aplicada no domingo” é",
                  "options": [
                    "Houve greve e a prova não foi aplicada no domingo",
                    "Não houve greve e a prova não foi aplicada no domingo",
                    "Se houver greve, a prova não será aplicada no domingo",
                    "Houve greve ou a prova foi aplicada no domingo",
                    "Se não houver greve, a prova não será aplicada no domingo"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. A regra manda manter o antecedente EXATAMENTE como está — e aqui ele já é negativo (“não houver greve”). Em símbolos, com g = “houve greve” e d = “prova no domingo”, a original é ~g → d e a negação é ~g ∧ ~d. A opção A é a que a maioria marca: negou o antecedente por reflexo, só porque ele já vinha com “não”. C e E continuam condicionais, e a negação de uma condicional nunca é condicional. A D não tem relação com a negação pedida."
                }
              ]
            }
          ]
        },
        {
          "id": "diagramas-quantificadores",
          "nome": "Argumentação, diagramas lógicos e quantificadores",
          "icon": "ti-circles-relation",
          "descricao": "A segunda metade do Raciocínio Lógico: o que torna um argumento válido, todo/algum/nenhum, diagramas de conjuntos, negação de quantificadores e a notação ∀/∃ da lógica de primeira ordem.",
          "resumo": [
            {
              "titulo": "Por que os conectivos não bastam",
              "html": "<p>Olhe este raciocínio: <i>“Todo analista da DataPrev é servidor público. João é analista da DataPrev. Logo, João é servidor público.”</i> Qualquer pessoa vê que está certo — mas tente representá-lo com o que você já sabe.</p>\n<p>Chamando as três frases de p, q e r, sobra <b>(p ∧ q) → r</b>, que <b>não é tautologia</b>. O raciocínio se perdeu: as frases viraram blocos isolados e a ligação entre elas — a palavra <i>analista</i>, que aparece em duas — sumiu.</p>\n<p>A saída é abrir a frase e olhar seus componentes: de <b>quem</b> se fala e <b>o que</b> se diz dele. Isso é a <b>lógica de primeira ordem</b> (ou de predicados), e a ferramenta para resolvê-la na prova é o <b>diagrama lógico</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Predicado</span> a característica atribuída: “é servidor público”, “conhece lógica”. Escreve-se <b>S(x)</b> — “x é servidor público”.</div>\n  <div class=\"def\"><span class=\"def-t\">Quantificador</span> a palavra que diz de <b>quantos</b> se fala: todo, algum, nenhum, existe, pelo menos um.</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> É a diferença entre tratar a lista inteira como um valor e iterar sobre os elementos: a lógica sentencial vê <code>lista</code>; a de primeira ordem vê <code>lista.every(...)</code> e <code>lista.some(...)</code>.</div>"
            },
            {
              "titulo": "Argumento: premissas, conclusão e o que é validade",
              "html": "<p><b>Argumento</b> é um conjunto de proposições em que algumas (as <b>premissas</b>) são apresentadas como razão para aceitar outra (a <b>conclusão</b>).</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Anunciam a CONCLUSÃO</span> logo, portanto, então, assim, conclui-se que, segue-se que, por isso</div>\n  <div class=\"def\"><span class=\"def-t\">Anunciam PREMISSA</span> pois, porque, já que, visto que, dado que, uma vez que</div>\n</div>\n<p>Na prova, ache primeiro a conclusão; o resto é premissa.</p>\n<p><b>A definição que decide as questões:</b> um argumento é <b>válido</b> quando é <b>impossível</b> que as premissas sejam verdadeiras e a conclusão falsa.</p>\n<p>Repare no que a definição <b>não</b> exige: que as premissas sejam verdadeiras de fato. Validade é propriedade da <b>estrutura</b>, não do conteúdo.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Premissas F, conclusão F</span> <i>“Todo peixe voa; baleia é peixe; logo baleia voa.”</i> Tudo falso — e o argumento é <b>válido</b>. A forma está correta.</div>\n  <div class=\"def\"><span class=\"def-t\">Premissas V, conclusão V</span> <i>“Todo servidor recebe salário; Ana recebe salário; logo Ana é servidora.”</i> Conclusão até pode ser verdadeira — e o argumento é <b>inválido</b>: Ana pode trabalhar na iniciativa privada.</div>\n</div>\n<p>O único caso impossível num argumento válido é <b>premissas V com conclusão F</b> — exatamente o padrão V → F da condicional.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Premissa é lei.</b> Por mais absurda que seja (“todos os gatos são advogados”), na resolução ela vale como verdade absoluta. A banca usa premissas absurdas de propósito, para separar quem raciocina de quem responde pelo senso comum.</div>"
            },
            {
              "titulo": "Dedução, indução e analogia",
              "html": "<p>O edital cita os três nomes na linha “analogias, inferências, deduções e conclusões”.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Dedução (geral → particular)</span> conclusão <b>garantida</b> pelas premissas. <i>Todo servidor tem matrícula; João é servidor; logo João tem matrícula.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Indução (particular → geral)</span> conclusão apenas <b>provável</b>. <i>Os 30 servidores que vi têm matrícula; logo todo servidor tem.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Analogia (particular → particular)</span> conclusão apenas <b>provável</b>. <i>A prova da DataPrev será como a do BNDES, pois a banca é a mesma.</i></div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Só a <b>dedução</b> produz argumento válido no sentido estrito. Indução e analogia dão conclusões plausíveis, nunca garantidas — e a FGV às vezes pede exatamente que você identifique isso.</div>"
            },
            {
              "titulo": "Os padrões de argumento com “se… então”",
              "html": "<p>Revisão do que você já viu em lógica sentencial, agora para reconhecer dentro de um texto. Base: <i>“Se chove, a rua fica molhada”</i> (p → q).</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Modus ponens · p → q, p ⊢ q</span> <b>VÁLIDO</b> — choveu, logo a rua está molhada</div>\n  <div class=\"def\"><span class=\"def-t\">Modus tollens · p → q, ~q ⊢ ~p</span> <b>VÁLIDO</b> — a rua não está molhada, logo não choveu</div>\n  <div class=\"def\"><span class=\"def-t\">Negar o antecedente · p → q, ~p ⊢ ~q</span> <b>FALÁCIA</b> — não choveu, mas pode ter passado um caminhão-pipa</div>\n  <div class=\"def\"><span class=\"def-t\">Afirmar o consequente · p → q, q ⊢ p</span> <b>FALÁCIA</b> — rua molhada não prova chuva</div>\n  <div class=\"def\"><span class=\"def-t\">Silogismo hipotético · p → q, q → r ⊢ p → r</span> <b>VÁLIDO</b> — encadeamento</div>\n  <div class=\"def\"><span class=\"def-t\">Silogismo disjuntivo · p ∨ q, ~p ⊢ q</span> <b>VÁLIDO</b> — ou é A ou é B; não é A; logo é B</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Com a condicional dá para caminhar <b>para a frente afirmando</b> (ponens) ou <b>para trás negando</b> (tollens). As outras duas combinações são armadilhas.</div>"
            },
            {
              "titulo": "Todo, algum, nenhum: as quatro formas",
              "html": "<p>Frase categórica = <b>quantificador + sujeito + verbo de ligação + predicado</b>. Existem quatro formas, e a prova gira em torno delas.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Todo A é B (universal afirmativa)</span> <i>Todo analista é servidor.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Nenhum A é B (universal negativa)</span> <i>Nenhum analista é estagiário.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B (particular afirmativa)</span> <i>Algum analista é gestor.</i></div>\n  <div class=\"def\"><span class=\"def-t\">Algum A não é B (particular negativa)</span> <i>Algum analista não é gestor.</i></div>\n</div>\n<p><b>Universal</b> fala de todos; <b>particular</b> fala de pelo menos um.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>“Algum” = pelo menos um — e NÃO exclui “todos”.</b> Se os 100 candidatos foram aprovados, “algum candidato foi aprovado” é <b>verdadeira</b>. No português do dia a dia “alguns” sugere “nem todos”; em lógica, não sugere nada disso. Sinônimos: existe, há, pelo menos um, alguns, certo(s).</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>“Todo A é B” não diz nada sobre quem não é A.</b> Podem existir servidores que não são analistas. É a mesma lógica do condicional: A → B não é B → A.</div>"
            },
            {
              "titulo": "Diagramas: como desenhar cada frase",
              "html": "<p>Cada conjunto vira um círculo, e a posição dos círculos traduz a frase. Depois é só <b>olhar o desenho</b>.</p>\n<p><b>Todo A é B</b> — A dentro de B.</p><svg viewBox=\"0 0 200 100\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:10px auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n<circle cx=\"100\" cy=\"50\" r=\"44\"/><circle cx=\"90\" cy=\"50\" r=\"22\"/>\n<text x=\"90\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">A</text>\n<text x=\"150\" y=\"54\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">B</text></svg>\n<p><b>Nenhum A é B</b> — círculos separados, sem ponto em comum.</p><svg viewBox=\"0 0 200 100\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:10px auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n<circle cx=\"58\" cy=\"50\" r=\"32\"/><circle cx=\"142\" cy=\"50\" r=\"32\"/>\n<text x=\"58\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">A</text>\n<text x=\"142\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">B</text></svg>\n<p><b>Algum A é B</b> — círculos cruzados, com um <b>X</b> na parte comum.</p><svg viewBox=\"0 0 200 100\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:10px auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n<circle cx=\"72\" cy=\"50\" r=\"36\"/><circle cx=\"128\" cy=\"50\" r=\"36\"/>\n<text x=\"48\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">A</text>\n<text x=\"152\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">B</text>\n<text x=\"100\" y=\"56\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" stroke=\"none\" fill=\"currentColor\">X</text></svg>\n<p><b>Algum A não é B</b> — o <b>X</b> na parte de A que fica fora de B.</p><svg viewBox=\"0 0 200 100\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:10px auto\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n<circle cx=\"72\" cy=\"50\" r=\"36\"/><circle cx=\"128\" cy=\"50\" r=\"36\"/>\n<text x=\"55\" y=\"34\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">A</text>\n<text x=\"152\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" stroke=\"none\" fill=\"currentColor\">B</text>\n<text x=\"52\" y=\"60\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"bold\" stroke=\"none\" fill=\"currentColor\">X</text></svg>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>O X é o detalhe que resolve a questão.</b> “Todo” e “nenhum” desenham <b>fronteiras</b>; “algum” afirma <b>existência</b>, e existência se marca com um X. Sem o X você esquece que aquela região tem que ter gente dentro.</div>"
            },
            {
              "titulo": "O método do contraexemplo e as combinações clássicas",
              "html": "<p><b>Uma conclusão só é válida se for verdadeira em TODOS os desenhos possíveis das premissas.</b> Se você conseguir desenhar <b>um único</b> cenário em que as premissas valem e a conclusão falha, o argumento é inválido. Esse cenário é o <b>contraexemplo</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1</span> Desenhe as premissas.</div>\n  <div class=\"def\"><span class=\"def-t\">2</span> Pergunte: <b>“dá para desenhar de outro jeito?”</b> — quase sempre dá, e é aí que a banca ganha.</div>\n  <div class=\"def\"><span class=\"def-t\">3</span> Teste a conclusão em cada desenho. Falhou em algum, não decorre.</div>\n</div>\n<p><b>Os resultados que vale decorar:</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Todo A é B + Todo B é C ⊢ Todo A é C</span> <b>VÁLIDO</b></div>\n  <div class=\"def\"><span class=\"def-t\">Todo A é B + Nenhum B é C ⊢ Nenhum A é C</span> <b>VÁLIDO</b></div>\n  <div class=\"def\"><span class=\"def-t\">Todo A é B + Algum A é C ⊢ Algum B é C</span> <b>VÁLIDO</b></div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B + Todo B é C ⊢ Algum A é C</span> <b>VÁLIDO</b></div>\n  <div class=\"def\"><span class=\"def-t\">Todo A é B + Algum B é C ⊢ Algum A é C</span> <b>INVÁLIDO</b> — o C pode estar na parte de B que sobra fora de A</div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B + Algum B é C ⊢ Algum A é C</span> <b>INVÁLIDO</b> — podem ser dois grupos diferentes de B</div>\n  <div class=\"def\"><span class=\"def-t\">Todo A é B ⊢ Todo B é A</span> <b>INVÁLIDO</b> — é a recíproca</div>\n  <div class=\"def\"><span class=\"def-t\">Nenhum A é B ⊢ Nenhum B é A</span> <b>VÁLIDO</b> — “nenhum” é a única que funciona nos dois sentidos</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O contraexemplo que vale ouro:</b> <i>“Algum médico é professor. Algum professor é português. Logo algum médico é português?”</i> <b>Não.</b> Os professores-médicos podem ser todos brasileiros, e os professores-portugueses podem não ser médicos. São dois grupos diferentes de professores.</div>"
            },
            {
              "titulo": "Negação dos quantificadores",
              "html": "<p>Negar uma frase com quantificador <b>não é</b> trocar o verbo por “não”. A regra é mecânica, com duas trocas: <b>troque o quantificador (universal ↔ particular) e inverta a afirmação (afirmativo ↔ negativo)</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~(Todo A é B)</span> = <b>Algum A não é B</b> · errado: ~~nenhum A é B~~</div>\n  <div class=\"def\"><span class=\"def-t\">~(Algum A é B)</span> = <b>Nenhum A é B</b> · errado: ~~algum A não é B~~</div>\n  <div class=\"def\"><span class=\"def-t\">~(Nenhum A é B)</span> = <b>Algum A é B</b> · errado: ~~todo A é B~~</div>\n  <div class=\"def\"><span class=\"def-t\">~(Algum A não é B)</span> = <b>Todo A é B</b></div>\n</div>\n<p><b>Por que “nenhum” não nega “todo”:</b> para <i>“todos os candidatos foram aprovados”</i> ser falsa, basta <b>um</b> reprovado — não é preciso que todos reprovem.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Derrubar um “todo” exige <b>um</b> contraexemplo; derrubar um “algum” exige <b>varrer o conjunto inteiro</b>. Por isso a negação de “todo” é fraquinha (algum) e a de “algum” é forte (nenhum).</div>\n<div class=\"mnemonic\"><i class=\"ti ti-code\"></i> É idêntico ao JavaScript: <code>!arr.every(f)</code> equivale a <code>arr.some(x =&gt; !f(x))</code>.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Teste de conferência de qualquer negação:</b> se as duas frases puderem ser verdadeiras ao mesmo tempo, uma <b>não</b> é a negação da outra. “Algum foi eliminado” e “algum não foi eliminado” convivem — logo não são negação uma da outra.</div>"
            },
            {
              "titulo": "Lógica de primeira ordem: ∀ e ∃",
              "html": "<p>O edital cobra o item, e a FGV costuma pedir a <b>tradução</b> entre frase e fórmula. São dois símbolos: <b>∀</b> (“para todo x”) e <b>∃</b> (“existe x tal que”).</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Todo A é B</span> ∀x (A(x) <b>→</b> B(x))</div>\n  <div class=\"def\"><span class=\"def-t\">Algum A é B</span> ∃x (A(x) <b>∧</b> B(x))</div>\n  <div class=\"def\"><span class=\"def-t\">Nenhum A é B</span> ∀x (A(x) <b>→</b> ~B(x))</div>\n  <div class=\"def\"><span class=\"def-t\">Algum A não é B</span> ∃x (A(x) <b>∧</b> ~B(x))</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>∀ anda com → · ∃ anda com ∧.</b> Nunca se misturam.</div>\n<p><b>Por quê:</b> “todo analista é servidor” não afirma que existe analista — afirma uma <b>regra</b> (se for analista, então é servidor), e regra é condicional. Já “algum analista é servidor” afirma que <b>existe alguém</b> que é as duas coisas ao mesmo tempo, e duas coisas ao mesmo tempo é conjunção.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Se você escrever “algum” com →, a fórmula fica verdadeira de graça: bastaria existir alguém que <b>não</b> é analista para satisfazê-la (antecedente falso). Por isso <b>∃x (A(x) → B(x))</b> é sempre distrator errado.</div>\n<p><b>Negação em notação</b> — é a regra das duas trocas, com símbolos:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">~∀x P(x)</span> = ∃x ~P(x) · “nem todo x é P” = “existe x que não é P”</div>\n  <div class=\"def\"><span class=\"def-t\">~∃x P(x)</span> = ∀x ~P(x) · “não existe x que é P” = “todo x não é P”</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> O <b>~</b> entra e o quantificador <b>vira o outro</b>.</div>"
            }
          ],
          "flashcards": [
            {
              "tema": "Argumentação",
              "pergunta": "Quando um argumento é válido?",
              "resposta": "Quando é impossível ter premissas verdadeiras e conclusão falsa. Validade é da estrutura, não do conteúdo — premissas falsas podem formar argumento válido."
            },
            {
              "tema": "Argumentação",
              "pergunta": "Um argumento com premissas falsas pode ser válido?",
              "resposta": "Pode. “Todo peixe voa; baleia é peixe; logo baleia voa” é válido. O único caso impossível num argumento válido é premissas V com conclusão F."
            },
            {
              "tema": "Argumentação",
              "pergunta": "Qual a diferença entre dedução, indução e analogia?",
              "resposta": "Dedução vai do geral ao particular e garante a conclusão. Indução vai do particular ao geral e só a torna provável. Analogia vai de particular a particular, também só provável."
            },
            {
              "tema": "Argumentação",
              "pergunta": "Quais são os dois padrões VÁLIDOS com condicional e as duas falácias?",
              "resposta": "Válidos: modus ponens (p→q, p ⊢ q) e modus tollens (p→q, ~q ⊢ ~p). Falácias: negar o antecedente (p→q, ~p ⊢ ~q) e afirmar o consequente (p→q, q ⊢ p)."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "“Algum” exclui “todos”?",
              "resposta": "Não. Algum = pelo menos um, podendo ser todos. Se os 100 candidatos foram aprovados, “algum candidato foi aprovado” é verdadeira."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Qual a negação de “Todo A é B”?",
              "resposta": "“Algum A não é B” (pelo menos um). NÃO é “nenhum A é B” — para derrubar um “todo” basta um contraexemplo."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Qual a negação de “Algum A é B”?",
              "resposta": "“Nenhum A é B”. Para derrubar um “existe pelo menos um” é preciso varrer o conjunto inteiro."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Qual a regra geral para negar quantificador?",
              "resposta": "Troque o quantificador (universal ↔ particular) e inverta a afirmação (afirmativo ↔ negativo)."
            },
            {
              "tema": "Quantificadores",
              "pergunta": "Como saber se uma frase é mesmo a negação de outra?",
              "resposta": "Se as duas puderem ser verdadeiras ao mesmo tempo, uma não é a negação da outra. A negação tem que ser V exatamente quando a original é F."
            },
            {
              "tema": "Diagramas",
              "pergunta": "Como se desenha cada uma das quatro formas categóricas?",
              "resposta": "Todo A é B: A dentro de B. Nenhum A é B: círculos separados. Algum A é B: círculos cruzados com X na interseção. Algum A não é B: X na parte de A fora de B."
            },
            {
              "tema": "Diagramas",
              "pergunta": "Quando uma conclusão é válida no método dos diagramas?",
              "resposta": "Quando vale em TODOS os desenhos possíveis das premissas. Se existe um desenho em que as premissas valem e a conclusão falha (contraexemplo), o argumento é inválido."
            },
            {
              "tema": "Diagramas",
              "pergunta": "“Todo A é B” + “Algum B é C” permite concluir “algum A é C”?",
              "resposta": "Não. O C pode estar na parte de B que sobra fora de A. É a combinação mais cobrada da banca."
            },
            {
              "tema": "Diagramas",
              "pergunta": "“Algum A é B” + “Algum B é C” permite concluir “algum A é C”?",
              "resposta": "Não. Podem ser dois grupos diferentes de B. Contraexemplo: algum médico é professor, algum professor é português, e nenhum médico é português."
            },
            {
              "tema": "Diagramas",
              "pergunta": "Qual a única forma categórica que pode ser invertida?",
              "resposta": "“Nenhum A é B” equivale a “nenhum B é A”. “Todo A é B” NÃO equivale a “todo B é A” (isso é a recíproca)."
            },
            {
              "tema": "1ª ordem",
              "pergunta": "Como se escrevem “Todo A é B” e “Algum A é B” em lógica de primeira ordem?",
              "resposta": "∀x (A(x) → B(x)) e ∃x (A(x) ∧ B(x)). ∀ anda com →, ∃ anda com ∧ — nunca se misturam."
            },
            {
              "tema": "1ª ordem",
              "pergunta": "Por que “algum” não pode ser escrito com →?",
              "resposta": "Porque ∃x (A(x) → B(x)) fica verdadeira de graça: basta existir alguém que não é A (antecedente falso). Ela não diz nada sobre os A."
            },
            {
              "tema": "1ª ordem",
              "pergunta": "Como negar ∀x P(x) e ∃x P(x)?",
              "resposta": "~∀x P(x) = ∃x ~P(x); ~∃x P(x) = ∀x ~P(x). O ~ entra e o quantificador vira o outro."
            }
          ],
          "simulados": [
            {
              "id": "diagramas-quantificadores-01",
              "nome": "Aula 1 · Negações, diagramas e validade",
              "descricao": "Seis questões no padrão FGV sobre negação de quantificadores, conclusões que decorrem (e as que não decorrem) de premissas com todo/algum, tradução para ∀/∃ e identificação de modus tollens.",
              "nivel": "Treino",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Negação de “todo”",
                  "text": "A negação da proposição “Todos os servidores da DataPrev usam crachá” é",
                  "options": [
                    "Nenhum servidor da DataPrev usa crachá",
                    "Todos os servidores da DataPrev não usam crachá",
                    "Pelo menos um servidor da DataPrev não usa crachá",
                    "Nenhum servidor da DataPrev deixa de usar crachá",
                    "Alguns servidores da DataPrev usam crachá"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. A negação de “todo A é B” é “algum A não é B”, e “pelo menos um” é sinônimo exato de “algum”: para derrubar um “todos” basta UM contraexemplo. A opção A é o distrator principal — “nenhum usa crachá” é muito mais forte do que o necessário: num cenário com 99 usando e 1 sem crachá, a original é falsa e a A também, e negação tem que ser V exatamente quando a original é F. A B diz o mesmo que a A com outras palavras, a D reforça a original e a E convive com ela."
                },
                {
                  "type": "mc",
                  "tag": "Diagramas · o que decorre",
                  "text": "Considere verdadeiras as afirmações: I. Todo programador conhece lógica. II. Algum programador trabalha na DataPrev. Conclui-se corretamente que",
                  "options": [
                    "Todos os que trabalham na DataPrev conhecem lógica",
                    "Alguém que trabalha na DataPrev conhece lógica",
                    "Todo o que conhece lógica é programador",
                    "Algum programador não conhece lógica",
                    "Nenhum programador deixa de trabalhar na DataPrev"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Desenhe: o círculo dos programadores fica DENTRO do círculo de quem conhece lógica (premissa I); a premissa II põe um X na interseção programador/DataPrev. Esse X está necessariamente dentro do círculo da lógica — logo existe alguém da DataPrev que conhece lógica. As erradas concluem demais: A exigiria que todo o pessoal da DataPrev fosse programador (pode haver um contador lá); C é a recíproca da premissa I; D contradiz a I; E inventa informação."
                },
                {
                  "type": "mc",
                  "tag": "Diagramas · o que NÃO decorre",
                  "text": "São verdadeiras as premissas “Todo analista é servidor” e “Algum servidor é gestor”. Assinale a afirmativa que NÃO pode ser deduzida dessas premissas.",
                  "options": [
                    "Algum analista é gestor",
                    "Algum servidor é analista ou não há analistas",
                    "Pode existir gestor que não é analista",
                    "Todo analista é servidor",
                    "Existe pelo menos um gestor que é servidor"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. “Todo analista é servidor” põe analistas DENTRO de servidores; “algum servidor é gestor” põe um X na interseção servidor/gestor — e esse X pode cair na parte de servidor que está FORA de analistas. Contraexemplo: a DataPrev pode ter gestores vindos da área administrativa, nenhum deles analista. As demais decorrem: D é a própria premissa, E é a premissa II reescrita, C é uma possibilidade que o diagrama admite e B é reformulação inofensiva. Guarde o padrão: “todo A é B” + “algum B é C” NUNCA conclui nada sobre A."
                },
                {
                  "type": "mc",
                  "tag": "Negação de “algum”",
                  "text": "A negação da proposição “Algum candidato foi eliminado” é",
                  "options": [
                    "Algum candidato não foi eliminado",
                    "Todos os candidatos foram eliminados",
                    "Nem todos os candidatos foram eliminados",
                    "Nenhum candidato foi eliminado",
                    "Poucos candidatos foram eliminados"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. A negação de “algum A é B” é “nenhum A é B”: para derrubar um “existe pelo menos um” é preciso varrer o conjunto inteiro e não achar nenhum. A opção A é a armadilha — “algum não foi eliminado” pode ser verdadeira JUNTO com a original (alguns eliminados, outros não), e duas proposições que convivem nunca são negação uma da outra. Esse é o teste de conferência para qualquer questão de negação."
                },
                {
                  "type": "mc",
                  "tag": "Lógica de 1ª ordem",
                  "text": "Considere C(x): “x é candidato” e A(x): “x foi aprovado”. A proposição “Algum candidato não foi aprovado” é corretamente representada por",
                  "options": [
                    "∀x (C(x) → ~A(x))",
                    "∃x (C(x) → ~A(x))",
                    "∃x (C(x) ∧ ~A(x))",
                    "~∃x (C(x) ∧ A(x))",
                    "∀x (C(x) ∧ ~A(x))"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. “Algum” afirma existência (∃), e “é candidato E não foi aprovado” são duas coisas na mesma pessoa (∧). A opção B é o distrator clássico: com → dentro do ∃, bastaria existir alguém que NÃO é candidato para a fórmula ficar verdadeira (antecedente falso), ou seja, ela não diz nada sobre candidatos. Guarde: ∀ anda com →, ∃ anda com ∧. As opções A e D afirmam que nenhum candidato foi aprovado, bem mais forte que a original."
                },
                {
                  "type": "mc",
                  "tag": "Validade · modus tollens",
                  "text": "Um argumento tem as premissas “Se o sistema falha, o alerta é disparado” e “O alerta não foi disparado”, e a conclusão “O sistema não falhou”. Sobre esse argumento, é correto afirmar que",
                  "options": [
                    "é inválido, pois comete a falácia de negar o antecedente",
                    "é inválido, pois comete a falácia de afirmar o consequente",
                    "é válido, por modus ponens",
                    "é válido, por modus tollens",
                    "é válido apenas se as premissas forem de fato verdadeiras"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. A estrutura é p → q, ~q, portanto ~p: negar o consequente e concluir a negação do antecedente — modus tollens, válido. A opção A descreveria outro argumento (“o sistema não falhou, logo o alerta não disparou”). A opção E é a pegadinha conceitual: validade NÃO depende da verdade das premissas, só da estrutura — um argumento válido continua válido com premissas falsas."
                }
              ]
            }
          ]
        },
        {
          "id": "problemas-aritmeticos",
          "nome": "Aritmética de prova: porcentagem, proporção, médias e juros",
          "icon": "ti-percentage",
          "descricao": "O bloco de “problemas” do Raciocínio Lógico da FGV — e, olhando a prova de 2024, o mais rentável da disciplina: divisão proporcional, o fator multiplicativo da porcentagem, variações sucessivas e taxa média, regra de três, médias ponderadas, juros e os truques de cálculo sem calculadora.",
          "resumo": [
            {
              "titulo": "Antes de estudar: o que a banca cobrou de fato",
              "html": "<p>Vale começar por aqui, porque muda o tamanho do esforço que este bloco merece. Nas <b>6 questões de Raciocínio Lógico Matemático da prova real</b> — FGV, DataPrev 2024, Analista de TI · Desenvolvimento de Software, questões 25 a 30 — foi isto que apareceu:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Q25 · divisão proporcional</span> um prejuízo repartido na proporção do capital que cada sócio investiu</div>\n  <div class=\"def\"><span class=\"def-t\">Q26 · média ponderada</span> bimestres com pesos 1, 2, 3 e 4 e a soma mínima para ser aprovado</div>\n  <div class=\"def\"><span class=\"def-t\">Q27 · identidade algébrica</span> soma e soma dos quadrados, pedindo a diferença</div>\n  <div class=\"def\"><span class=\"def-t\">Q28 · lógica sentencial</span> a equivalente de um “se… então” (era a contrapositiva)</div>\n  <div class=\"def\"><span class=\"def-t\">Q29 · contagem de pares</span> estradas ligando vilarejos dois a dois</div>\n  <div class=\"def\"><span class=\"def-t\">Q30 · percentuais sucessivos</span> dois aumentos e a <i>taxa média</i> mensal</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Cinco das seis eram problema numérico. Uma era lógica.</b> Uma amostra de um ano não é lei e a banca pode mudar a mão em 2026 — mas quando o histórico e o edital apontam para o mesmo lado, este é o bloco mais rentável de Raciocínio Lógico, não o rodapé dele.</div>\n<p>E há duas condições da prova que mudam o <i>modo</i> de estudar isto:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Não há calculadora</span> toda conta precisa fechar na mão — por isso a última seção, de cálculo mental, é matéria e não enfeite</div>\n  <div class=\"def\"><span class=\"def-t\">5 questões em ~20 minutos</span> quatro minutos por questão: o caminho curto vale mais do que o caminho certo e longo</div>\n</div>"
            },
            {
              "titulo": "Fração, razão e proporção — o vocabulário do zero",
              "html": "<p>Tudo neste bloco nasce de uma ideia só: <b>comparar dois números dividindo um pelo outro</b>. Os três nomes que a banca usa são apenas camadas dessa mesma ideia.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fração</span> uma parte de um todo. Em 12/25, o <b>25 é o todo</b> (quantas partes existem) e o <b>12 é quanto se tomou</b> dele</div>\n  <div class=\"def\"><span class=\"def-t\">Razão</span> a mesma divisão, usada para comparar duas quantidades: a razão entre 12 e 25 é 12/25 = 0,48 — “um é 48% do outro”</div>\n  <div class=\"def\"><span class=\"def-t\">Proporção</span> a igualdade entre duas razões: a/b = c/d. É a frase “esses dois se comparam do mesmo jeito que aqueles dois”</div>\n</div>\n<p><b>A propriedade fundamental</b> — a que faz a regra de três funcionar: numa proporção, <b>o produto dos meios é igual ao produto dos extremos</b>.</p>\n<p>De <code>a/b = c/d</code> sai <code>a · d = b · c</code>. E não é mágica: é só multiplicar os dois lados da igualdade por <code>b</code> e por <code>d</code>. Se dois números são iguais e você multiplica os dois pela mesma coisa, eles continuam iguais — a “multiplicação em cruz” é esse passo feito de uma vez.</p>\n<p><b>Exemplo resolvido.</b> Três licenças de um software custam R$ 450,00. Quanto custam sete licenças?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Monte a proporção</span> 3/450 = 7/x — <b>licenças em cima, reais embaixo, nos dois lados</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Multiplique em cruz</span> 3x = 450 × 7 = 3.150</div>\n  <div class=\"def\"><span class=\"def-t\">3. Isole o x</span> x = 3.150 ÷ 3 = <b>R$ 1.050,00</b></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>O único cuidado da montagem:</b> a mesma grandeza tem de ficar na mesma posição nas duas frações. Se licenças estão em cima à esquerda, licenças ficam em cima à direita. Misturar posição é o erro que mais gera resposta absurda — e, nesse caso, dá para perceber: sete licenças não podem custar <i>menos</i> que três.</div>"
            },
            {
              "titulo": "Divisão proporcional, passo a passo",
              "html": "<p>É o assunto da questão 25, e o enunciado é sempre o mesmo esqueleto: <i>um valor tem de ser repartido entre pessoas que entraram com quantias diferentes</i>. Repartir “proporcionalmente” quer dizer: <b>quem entrou com mais, leva mais, na mesma medida</b>.</p>\n<p><b>Exemplo resolvido 1 — a questão da prova.</b> Dois sócios entraram com R$ 12.000 e R$ 13.000. Perderam R$ 50.000. Quanto cabe ao primeiro?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Some as partes</span> 12.000 + 13.000 = 25.000 — esse é o <b>todo</b>, o denominador de todas as frações</div>\n  <div class=\"def\"><span class=\"def-t\">2. Escreva a fração de quem você quer</span> 12.000/25.000 = 12/25 — “ele representa 12 de cada 25 do capital”</div>\n  <div class=\"def\"><span class=\"def-t\">3. Aplique no valor a repartir</span> 50.000 × 12/25 = 50.000 ÷ 25 × 12 = 2.000 × 12 = <b>24.000</b></div>\n  <div class=\"def\"><span class=\"def-t\">4. Confira pela outra ponta</span> o outro fica com 13/25 → 26.000, e 24.000 + 26.000 = 50.000 ✔</div>\n</div>\n<p>Repare no passo 3: <b>divida primeiro, multiplique depois</b>. 50.000 ÷ 25 = 2.000 é uma conta de cabeça; 50.000 × 12 = 600.000 para depois dividir por 25 também dá certo, mas é conta grande sem necessidade.</p>\n<p><b>Exemplo resolvido 2 — três partes.</b> Repartir R$ 90.000 em partes proporcionais a 2, 3 e 4.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Some</span> 2 + 3 + 4 = <b>9 partes</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Valor de uma parte</span> 90.000 ÷ 9 = <b>10.000</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Multiplique cada um</span> 20.000 · 30.000 · 40.000 — e a soma dá 90.000 ✔</div>\n</div>\n<p>Quando os números são pequenos, é mais rápido pensar em “<b>quanto vale uma parte</b>” do que montar fração.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — no exemplo 1:\n<br><b>Errado:</b> 50.000 ÷ 2 = 25.000 para cada. É dividir <i>igualmente</i>, ignorando que um entrou com mais. A banca coloca 25.000 entre as alternativas.\n<br><b>Errado:</b> 50.000 × 13/25 = 26.000. A fração foi <i>invertida</i> — é a parte do outro sócio, e essa também está entre as alternativas.\n<br><b>Certo:</b> 50.000 × 12/25 = 24.000, com a conferência somando 24.000 + 26.000 = 50.000.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> A conferência pela outra ponta custa cinco segundos e pega os dois erros acima. Faça sempre: <b>as partes têm de somar o total</b>.</div>"
            },
            {
              "titulo": "Quando a proporção é inversa",
              "html": "<p><i>“Inversamente proporcional”</i> significa: <b>quanto maior o número, menor a parte</b>. Aparece em rateio de prêmio por número de faltas, divisão por tempo gasto, distribuição que pune quem tem mais de algo.</p>\n<p><b>A regra prática:</b> inverta os números e trate como proporção direta. Em vez dos pesos 2 e 3, use <b>1/2 e 1/3</b>.</p>\n<p><b>Exemplo resolvido.</b> Repartir R$ 60.000 em partes inversamente proporcionais a 2 e 3.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Inverta</span> pesos 1/2 e 1/3</div>\n  <div class=\"def\"><span class=\"def-t\">2. Some os pesos</span> 1/2 + 1/3 = 3/6 + 2/6 = <b>5/6</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Primeira parte</span> 60.000 × (1/2) ÷ (5/6) = 60.000 × 3/5 = <b>36.000</b></div>\n  <div class=\"def\"><span class=\"def-t\">4. Segunda parte</span> 60.000 × (1/3) ÷ (5/6) = 60.000 × 2/5 = <b>24.000</b></div>\n</div>\n<p>Somando: 36.000 + 24.000 = 60.000 ✔ E <b>quem tinha o número menor (o 2) ficou com a parte maior</b> — é assim que se confere se você entendeu \"inversamente\" e não trocou os lados.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Atalho para duas partes: inverter 2 e 3 e somar dá o mesmo que usar <b>3 e 2</b> como pesos diretos (3/5 e 2/5). Com dois números, “inversamente proporcional a 2 e 3” é simplesmente “diretamente proporcional a 3 e 2”. Com três ou mais, não vale o truque — aí some as frações mesmo.</div>"
            },
            {
              "titulo": "Porcentagem: o que o símbolo quer dizer",
              "html": "<p><i>Por cento</i> é literalmente <b>por cem</b>. O símbolo % é uma abreviação de “/100”. Então <code>30% = 30/100 = 0,30</code>, e é só isso: porcentagem é fração com denominador fixo.</p>\n<p>A segunda peça: em matemática de prova, a palavra <b>“de” significa multiplicar</b>. “30% de 80” é <code>0,30 × 80 = 24</code>.</p>\n<p>Com essas duas peças, as <b>três perguntas possíveis</b> de porcentagem se resolvem todas. Vale reconhecer as três, porque a banca alterna entre elas:</p>\n<p><b>1. Quanto é x% de N?</b> (dão a taxa e o todo, pedem a parte)</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Quanto é 15% de 240?</span> 0,15 × 240 = <b>36</b></div>\n  <div class=\"def\"><span class=\"def-t\">De cabeça</span> 10% de 240 = 24; 5% é a metade = 12; 24 + 12 = 36</div>\n</div>\n<p><b>2. N é quantos por cento de M?</b> (dão parte e todo, pedem a taxa) — <b>divida a parte pelo todo</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">48 é quantos % de 320?</span> 48 ÷ 320 = 0,15 = <b>15%</b></div>\n  <div class=\"def\"><span class=\"def-t\">O cuidado</span> o todo vai no <b>denominador</b>. Dividir 320 por 48 dá 6,67, que não é resposta de porcentagem nenhuma — se o resultado passar de 1, você inverteu</div>\n</div>\n<p><b>3. Se x% é N, qual o todo?</b> (dão taxa e parte, pedem o todo) — <b>divida a parte pela taxa</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Se 30% de um valor é 60, qual o valor?</span> 60 ÷ 0,30 = <b>200</b></div>\n  <div class=\"def\"><span class=\"def-t\">Confira</span> 30% de 200 = 60 ✔ — e note que o todo é <b>maior</b> que a parte, como tem de ser</div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Porcentagem comuta,</b> porque é multiplicação: 30% de 80 = 80% de 30 = 24. Use quando a conta estiver feia — <b>18% de 50</b> é chato, mas <b>50% de 18 = 9</b> é instantâneo.</div>"
            },
            {
              "titulo": "O fator multiplicativo: a ferramenta central",
              "html": "<p>Quase todo mundo calcula aumento em dois passos: acha a parte, depois soma. Funciona, mas gasta tempo e não encadeia. O caminho da prova é <b>um número só</b>, o fator.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">aumento de x%</span> multiplique por <b>1 + x/100</b> — aumento de 20% é × 1,20</div>\n  <div class=\"def\"><span class=\"def-t\">desconto de x%</span> multiplique por <b>1 − x/100</b> — desconto de 35% é × 0,65</div>\n</div>\n<p>De onde vem o 1: o valor inteiro é <b>100% de si mesmo</b>, ou seja, 1. Aumentar 20% é ficar com 100% + 20% = 120% = 1,20 do que se tinha. Dar 35% de desconto é ficar com 65% = 0,65. O fator é a <b>fração do valor original que sobra no fim</b>.</p>\n<p><b>Exemplo resolvido 1.</b> Um equipamento de R$ 850,00 sofre aumento de 12%.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fator</span> 1 + 0,12 = 1,12</div>\n  <div class=\"def\"><span class=\"def-t\">Conta</span> 850 × 1,12 = 850 + 102 = <b>R$ 952,00</b></div>\n</div>\n<p><b>Exemplo resolvido 2.</b> Um contrato de R$ 1.200,00 com desconto de 15%.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fator</span> 1 − 0,15 = 0,85</div>\n  <div class=\"def\"><span class=\"def-t\">Conta</span> 1.200 × 0,85 = <b>R$ 1.020,00</b></div>\n  <div class=\"def\"><span class=\"def-t\">Conferência de cabeça</span> 10% são 120, 5% são 60 → desconto de 180 → 1.200 − 180 = 1.020 ✔</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — no exemplo 2:\n<br><b>Errado:</b> 1.200 + 180 = 1.380. Calculou os 15% corretamente e <b>somou onde devia subtrair</b> — é o erro de quem lê rápido e não olha se o enunciado diz aumento ou desconto. O valor 1.380 costuma estar entre as alternativas.\n<br><b>Errado:</b> 1.200 × 0,15 = 180 e marcar 180. Respondeu <b>o desconto</b>, não <b>o preço com desconto</b>. Volte sempre ao que a pergunta pediu.\n<br><b>Certo:</b> 1.200 × 0,85 = 1.020.</div>\n<p><b>Variação percentual</b> — a pergunta “de quanto aumentou?”, que é a segunda pergunta da seção anterior aplicada a uma mudança:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">(final − inicial) ÷ INICIAL</span> o denominador é <b>sempre</b> o valor de onde se partiu</div>\n  <div class=\"def\"><span class=\"def-t\">40 → 50</span> 10 ÷ 40 = 0,25 → aumento de <b>25%</b></div>\n  <div class=\"def\"><span class=\"def-t\">50 → 40</span> −10 ÷ 50 = −0,20 → queda de <b>20%</b></div>\n</div>\n<p>Mesma diferença de 10 unidades, percentuais diferentes — porque a base mudou. Subir de 40 para 50 é subir um quarto; cair de 50 para 40 é perder um quinto.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Ponto percentual não é por cento.</b> Se a taxa de aprovação sobe de 20% para 25%: subiu <b>5 pontos percentuais</b> (a subtração simples) <b>ou</b> subiu <b>25 por cento</b> (porque 5 é um quarto de 20). As duas leituras são corretas, mas dizem coisas diferentes — e nunca valem juntas. “p.p.” no enunciado é subtração; “%” é a fórmula da variação.</div>"
            },
            {
              "titulo": "Variações sucessivas: fatores se multiplicam",
              "html": "<p>Aqui está a questão 30 da prova e o erro mais caro de toda a aritmética de concurso.</p>\n<p><b>Duas variações seguidas não se somam — os fatores se multiplicam.</b> A razão é simples: a segunda variação incide sobre o valor <b>já alterado</b>, não sobre o original.</p>\n<p><b>Exemplo resolvido 1.</b> Dois aumentos consecutivos, de 30% e de 10%. Qual o aumento no período?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fatores</span> 1,30 e 1,10</div>\n  <div class=\"def\"><span class=\"def-t\">Fator do período</span> 1,30 × 1,10 = <b>1,43</b> → aumento de <b>43%</b></div>\n  <div class=\"def\"><span class=\"def-t\">Vendo com números</span> partindo de 100: sobe para 130; os 10% seguintes são <b>10% de 130 = 13</b>, não 10 → 143</div>\n</div>\n<p>Os 3% de sobra são exatamente “os 10% incidindo também sobre os 30 que subiram”.</p>\n<p><b>Exemplo resolvido 2 — três variações.</b> Três aumentos de 10%:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fator</span> 1,1 × 1,1 × 1,1 = 1,331 → <b>33,1%</b>, e não 30%</div>\n  <div class=\"def\"><span class=\"def-t\">Com números</span> 100 → 110 → 121 → 133,10</div>\n</div>\n<p><b>Exemplo resolvido 3 — dois descontos.</b> Desconto de 10% seguido de desconto de 20%:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Fator</span> 0,90 × 0,80 = <b>0,72</b> → desconto total de <b>28%</b>, e não 30%</div>\n  <div class=\"def\"><span class=\"def-t\">Por quê</span> os 20% incidiram sobre um valor já reduzido, então tiraram <i>menos</i> em reais</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Aumento e desconto de mesma taxa nunca se cancelam.</b>\n<br><b>Errado:</b> “+20% e depois −20% volta ao preço inicial”. Parece óbvio e é falso.\n<br><b>Certo:</b> 1,20 × 0,80 = <b>0,96</b> → o preço final é <b>4% MENOR</b>. Com números: 100 → 120 → 120 − 24 = 96. O aumento pôs 20 e o desconto tirou 24, porque tirou de uma base maior.\n<br>E a <b>ordem não importa</b>: 0,80 × 1,20 dá o mesmo 0,96. Começando por 100: 80 → 96.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Guarde como regra geral: <b>subir e descer a mesma taxa sempre termina abaixo do valor inicial</b>. Nunca marque “igual ao inicial” nesse tipo de questão.</div>"
            },
            {
              "titulo": "Desfazer uma variação",
              "html": "<p>Pergunta clássica: <i>depois de um desconto de 20%, de quanto tem de ser o aumento para voltar ao preço original?</i> A resposta intuitiva — 20% — está errada, pelo mesmo motivo da seção anterior: a base mudou.</p>\n<p><b>O raciocínio:</b> se o desconto multiplicou por 0,80, para desfazer é preciso multiplicar pelo <b>inverso</b> de 0,80. E o inverso de 0,80 é <code>1 ÷ 0,80 = 1,25</code> → aumento de <b>25%</b>.</p>\n<p><b>Exemplo resolvido.</b> Um produto de R$ 200,00 recebe 25% de desconto e depois volta ao preço de tabela.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Preço com desconto</span> 200 × 0,75 = <b>150</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Que fator leva 150 de volta a 200?</span> 200 ÷ 150 = 4/3 ≈ <b>1,333</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Logo o aumento é</span> <b>33,3%</b> — e não os 25% do desconto</div>\n</div>\n<p>A tabela dos casos que mais aparecem:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">desconto de 10% (×0,9)</span> para voltar: <b>+11,1%</b> (1 ÷ 0,9)</div>\n  <div class=\"def\"><span class=\"def-t\">desconto de 20% (×0,8)</span> para voltar: <b>+25%</b></div>\n  <div class=\"def\"><span class=\"def-t\">desconto de 25% (×0,75)</span> para voltar: <b>+33,3%</b></div>\n  <div class=\"def\"><span class=\"def-t\">desconto de 50% (×0,5)</span> para voltar: <b>+100%</b></div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — desconto de 20% sobre 100:\n<br><b>Errado:</b> 80 × 1,20 = <b>96</b>. Aplicou a mesma taxa e ficou 4 abaixo.\n<br><b>Certo:</b> 80 × 1,25 = <b>100</b>.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> A imagem que resolve qualquer caso sem conta: <b>descer 50% é perder metade; para voltar é preciso dobrar, ou seja, subir 100%</b>. Se descida e subida tivessem a mesma taxa, metade mais metade daria o inteiro — e não dá, porque a segunda metade é calculada sobre o que sobrou.</div>"
            },
            {
              "titulo": "Taxa média de variação",
              "html": "<p>Esta é a parte da questão 30 que derrubou mais gente. Atenção à diferença entre <b>três coisas</b> que o enunciado pode pedir e que quase se confundem:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">taxa do período</span> a variação total, do começo ao fim (no caso da prova, <b>43%</b>)</div>\n  <div class=\"def\"><span class=\"def-t\">média das taxas</span> a média aritmética das taxas mensais — (30 + 10)/2 = 20%. <b>Não é o que se pede</b></div>\n  <div class=\"def\"><span class=\"def-t\">taxa média</span> a taxa que, <b>aplicada em todos os meses</b>, levaria ao mesmo resultado final</div>\n</div>\n<p>A definição da terceira é o que importa: procura-se um único <code>i</code> tal que aplicá-lo <i>n</i> vezes dê o fator total.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">A fórmula</span> (1 + i)ⁿ = fator total → i = ⁿ√(fator total) − 1</div>\n  <div class=\"def\"><span class=\"def-t\">O nome disso</span> é a <b>média geométrica</b> dos fatores — média de coisas que se multiplicam se faz com raiz, não com soma</div>\n</div>\n<p><b>Exemplo resolvido 1 — números limpos.</b> Os acessos cresceram 21% em dois meses, com a mesma taxa nos dois. Qual a taxa mensal?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Fator total</span> 1,21</div>\n  <div class=\"def\"><span class=\"def-t\">2. Raiz quadrada (dois meses)</span> √1,21 = 1,1 — porque 1,1 × 1,1 = 1,21</div>\n  <div class=\"def\"><span class=\"def-t\">3. Taxa</span> 1,1 − 1 = 0,1 = <b>10%</b></div>\n</div>\n<p><b>Exemplo resolvido 2 — a questão da prova.</b> Aumentos de 30% e 10%; qual a taxa média mensal?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Fator total</span> 1,30 × 1,10 = 1,43</div>\n  <div class=\"def\"><span class=\"def-t\">2. Raiz</span> √1,43 ≈ 1,1958</div>\n  <div class=\"def\"><span class=\"def-t\">3. Taxa</span> ≈ <b>19,58%</b> → “maior que 19% e menor que 20%”</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>As três contas erradas que a própria questão 30 oferecia:</b>\n<br><b>Errado:</b> (30 + 10) ÷ 2 = <b>20%</b> — média das taxas, não taxa média.\n<br><b>Errado:</b> <b>43%</b> — é a variação do período inteiro, não a mensal.\n<br><b>Errado:</b> <b>21,5%</b> — média feita sobre os fatores somados, sem sentido.\n<br><b>Certo:</b> ≈ 19,58%.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>A regra que dispensa a raiz:</b> a taxa média é <b>sempre MENOR</b> que a média aritmética das taxas (empata só se as taxas forem iguais). Sabendo que a média aritmética era 20%, a resposta tinha de ficar <b>um pouco abaixo de 20%</b> — e isso já eliminava quatro das cinco alternativas, sem nenhuma conta.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Raiz quadrada sem calculadora:</b> procure o quadrado que você conhece mais perto. Para √1,43: 1,2² = 1,44, quase o mesmo número — então a raiz é um tiquinho <b>abaixo</b> de 1,2, ou seja, a taxa fica pouco abaixo de 20%. Mais precisão que isso a alternativa não exige.</div>"
            },
            {
              "titulo": "Regra de três: direta e inversa",
              "html": "<p>Regra de três é a propriedade fundamental da proporção usada para achar <b>um valor desconhecido entre quatro</b>. Três você tem; o quarto sai da multiplicação em cruz. A única decisão real é: <b>direta ou inversa?</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Direta</span> as duas grandezas <b>sobem juntas</b> → multiplica em <b>cruz</b></div>\n  <div class=\"def\"><span class=\"def-t\">Inversa</span> uma sobe e a outra <b>desce</b> → multiplica em <b>linha</b></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Como decidir sem decorar:</b> pergunte “<i>se eu aumentar esta, a outra sobe ou desce?</i>”. Sobe → direta. Desce → inversa. Preço e quantidade: direta. <b>Trabalhadores e tempo</b>, <b>velocidade e tempo</b>, <b>máquinas e prazo</b>: inversas — mais gente trabalhando, menos tempo.</div>\n<p><b>Exemplo resolvido 1 — direta.</b> Três servidores processam 150 lotes. Quantos lotes processam 5 servidores?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Mais servidores, mais lotes → direta</span> 3/5 = 150/x</div>\n  <div class=\"def\"><span class=\"def-t\">Em cruz</span> 3x = 750 → x = <b>250 lotes</b></div>\n</div>\n<p><b>Exemplo resolvido 2 — inversa.</b> Seis impressoras terminam um lote em 4 horas. Em quanto tempo 8 impressoras terminam?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Mais impressoras, menos tempo → inversa</span> multiplica em linha: 6 × 4 = 8 × x</div>\n  <div class=\"def\"><span class=\"def-t\">Resolvendo</span> 24 = 8x → x = <b>3 horas</b></div>\n  <div class=\"def\"><span class=\"def-t\">O sentido confere?</span> Sim: mais impressoras deram <b>menos</b> tempo (4h → 3h) ✔</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — no exemplo 2:\n<br><b>Errado:</b> montar 6/8 = 4/x e cruzar → 6x = 32 → x ≈ <b>5,33 horas</b>. Tratou como direta.\n<br><b>Como perceber na hora:</b> o resultado diz que <b>mais</b> impressoras levariam <b>mais</b> tempo. É absurdo — e esse absurdo é o seu alarme. Sempre olhe se a resposta andou para o lado certo.\n<br><b>Certo:</b> 6 × 4 = 8x → x = 3 horas.</div>\n<p>Por que na inversa se multiplica em linha: se 6 impressoras levam 4 horas, o trabalho total é de <b>24 “impressoras-hora”</b>. Esse total não muda — então 8 impressoras precisam de 24 ÷ 8 = 3 horas. A multiplicação em linha é só isso: <b>o produto das duas grandezas é constante</b>.</p>"
            },
            {
              "titulo": "Regra de três composta pela produtividade unitária",
              "html": "<p>Quando entram três grandezas — gente, trabalho e tempo — montar a tabela de regra de três composta é onde mais se erra, porque é preciso decidir <i>para cada coluna</i> se ela é direta ou inversa. Há um caminho que dispensa essa decisão inteira: descobrir <b>quanto UM faz em UMA hora</b> e seguir dali.</p>\n<p><b>Exemplo resolvido 1.</b> Quatro servidores processam 600 lotes em 3 horas. Quanto tempo 5 servidores levam para processar 1.000 lotes?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Um servidor, uma hora</span> 600 ÷ (4 × 3) = 600 ÷ 12 = <b>50 lotes</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Cinco servidores, uma hora</span> 5 × 50 = <b>250 lotes por hora</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Tempo para 1.000 lotes</span> 1.000 ÷ 250 = <b>4 horas</b></div>\n</div>\n<p>Três divisões simples, nenhuma proporção montada, nenhum risco de inverter grandeza.</p>\n<p><b>Exemplo resolvido 2.</b> Três desenvolvedores entregam 12 funcionalidades em 8 dias. Em quantos dias 4 desenvolvedores entregam 24 funcionalidades?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Um dev, um dia</span> 12 ÷ (3 × 8) = <b>0,5 funcionalidade</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Quatro devs, um dia</span> 4 × 0,5 = <b>2 por dia</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Tempo para 24</span> 24 ÷ 2 = <b>12 dias</b></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>A conferência de plausibilidade</b>, que vale para toda questão desse tipo: o trabalho <b>dobrou</b> (12 → 24) e a equipe cresceu só um terço (3 → 4). Então o prazo tinha de <b>aumentar</b> — 12 dias contra os 8 originais faz sentido. Se sua resposta tivesse dado menos de 8 dias, estaria errada sem precisar reconferir a conta.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O erro típico:</b> fazer uma regra de três só com o que salta aos olhos — “3 devs, 8 dias; 4 devs, x dias” → x = 6 — e <b>esquecer que o trabalho também mudou</b>. Em problema com três grandezas, as três entram. A produtividade unitária obriga você a usar todas.</div>"
            },
            {
              "titulo": "Médias: aritmética e ponderada",
              "html": "<p><b>Média é o valor que, repetido em todos os elementos, daria a mesma soma.</b> Essa definição — e não a fórmula — é o que resolve as questões, porque quase sempre a banca dá a média e pede um dos valores.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Aritmética</span> soma ÷ quantidade. (6 + 7 + 8) ÷ 3 = <b>7</b></div>\n  <div class=\"def\"><span class=\"def-t\">Ponderada</span> Σ(valor × peso) ÷ Σpesos — cada valor conta mais de uma vez, conforme seu peso</div>\n</div>\n<p><b>Exemplo resolvido 1 — ponderada direta.</b> Notas 6,0 · 7,0 · 8,0 com pesos 1 · 2 · 3.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Multiplique</span> 6×1 = 6 · 7×2 = 14 · 8×3 = 24</div>\n  <div class=\"def\"><span class=\"def-t\">2. Some</span> 6 + 14 + 24 = <b>44</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Divida pela soma dos PESOS</span> 1 + 2 + 3 = 6 → 44 ÷ 6 ≈ <b>7,33</b></div>\n</div>\n<p>Repare que o resultado puxa para o <b>8,0</b>, o valor de maior peso. É como se a nota 8 tivesse sido tirada três vezes. Por isso, numa avaliação com pesos 1, 2, 3 e 4 — como na questão 26 —, <b>onde cai a nota baixa muda tudo</b>: um 4,0 no peso 1 quase não machuca; o mesmo 4,0 no peso 4 elimina.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O erro de dividir por 3:</b> no exemplo acima, 44 ÷ 3 = 14,67 — uma “nota” acima de 10, absurda. O divisor da ponderada é a <b>soma dos pesos</b>, não a quantidade de notas. Quando o resultado sai fora da escala possível, foi isso.</div>\n<p><b>Exemplo resolvido 2 — o problema invertido, que é o formato de prova.</b> Três provas com pesos 2, 3 e 5. O candidato tirou 6,0 e 7,0 nas duas primeiras. Quanto precisa na terceira para fechar 7,0?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Soma dos pesos</span> 2 + 3 + 5 = <b>10</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Troque média por SOMA</span> média 7,0 com pesos somando 10 → soma ponderada = <b>70</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Some o que ele já tem</span> 6×2 + 7×3 = 12 + 21 = <b>33</b></div>\n  <div class=\"def\"><span class=\"def-t\">4. Falta</span> 70 − 33 = 37, que valem 5 pesos → 37 ÷ 5 = <b>7,4</b></div>\n</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>O atalho do passo 2 é a técnica do assunto:</b> transformar a média exigida na <b>soma</b> exigida. A conta sai toda em números inteiros, sem fração e sem decimal até o último passo. Foi exatamente o que a questão 26 pedia quando dizia “divida por 10”.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — no exemplo 2:\n<br><b>Errado:</b> ignorar os pesos → (6 + 7 + x) ÷ 3 = 7 → x = <b>8,0</b>.\n<br><b>Certo:</b> com os pesos, <b>7,4</b> — menos do que 8,0, porque a nota que falta vale <b>metade</b> da avaliação (peso 5 de 10) e as duas notas baixas estão nos pesos pequenos.\n<br>O 8,0 está sempre entre as alternativas.</div>"
            },
            {
              "titulo": "A armadilha da média de médias",
              "html": "<p>É a questão que parece trivial e derruba: <b>duas médias não se somam e dividem por dois</b>, a menos que os grupos tenham o mesmo tamanho.</p>\n<p><b>Exemplo resolvido.</b> A equipe A tem 10 atendentes, que resolveram em média 6 chamados cada. A equipe B tem 40 atendentes, com média de 8. Qual a média por atendente nas duas equipes juntas?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Volte aos totais — equipe A</span> 10 × 6 = <b>60 chamados</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Equipe B</span> 40 × 8 = <b>320 chamados</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Total de chamados e de gente</span> 380 chamados · 50 atendentes</div>\n  <div class=\"def\"><span class=\"def-t\">4. Média</span> 380 ÷ 50 = <b>7,6</b></div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa:</b>\n<br><b>Errado:</b> (6 + 8) ÷ 2 = <b>7,0</b>. É a média das médias, que trata 10 pessoas e 40 pessoas como se pesassem igual.\n<br><b>Certo:</b> 7,6 — ponderando pelo tamanho de cada equipe.\n<br><b>Como perceber sem fazer a conta:</b> a equipe <b>maior</b> é justamente a de melhor desempenho, e ela tem 40 dos 50 atendentes. Então o resultado tem de ficar <b>perto de 8</b>, não no meio do caminho entre 6 e 8.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>A regra:</b> média de médias só vale com grupos do <b>mesmo tamanho</b>. Sempre que o enunciado der quantidades diferentes, volte aos <b>totais</b> — some tudo e divida pelo total de elementos. É o mesmo movimento da média ponderada, com o número de pessoas no lugar do peso.</div>"
            },
            {
              "titulo": "Juros simples",
              "html": "<p>O vocabulário primeiro, porque as questões são curtas e todo o risco está em confundir os nomes:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Capital (C)</span> o valor aplicado ou emprestado no início — também chamado de principal</div>\n  <div class=\"def\"><span class=\"def-t\">Taxa (i)</span> o percentual cobrado <b>por período</b> — 1,5% ao mês, 12% ao ano</div>\n  <div class=\"def\"><span class=\"def-t\">Tempo (t)</span> quantos períodos, na <b>mesma unidade</b> da taxa</div>\n  <div class=\"def\"><span class=\"def-t\">Juros (J)</span> só o rendimento</div>\n  <div class=\"def\"><span class=\"def-t\">Montante (M)</span> capital <b>+</b> juros — o total no fim</div>\n</div>\n<p>Em <b>juros simples</b>, os juros incidem sempre sobre o <b>capital inicial</b>: todo mês rende o mesmo valor em reais. É crescimento em linha reta.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">J = C · i · t</span> os juros</div>\n  <div class=\"def\"><span class=\"def-t\">M = C · (1 + i·t)</span> o montante</div>\n</div>\n<p><b>Exemplo resolvido 1.</b> R$ 4.000,00 a juros simples de 1,5% ao mês, por 8 meses.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Taxa em decimal</span> 1,5% = <b>0,015</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Juros</span> 4.000 × 0,015 × 8 = 60 × 8 = <b>R$ 480,00</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Montante, se pedirem</span> 4.000 + 480 = <b>R$ 4.480,00</b></div>\n</div>\n<p>O caminho de cabeça: 1,5% de 4.000 são <b>60 por mês</b>; oito meses, 480. Em juros simples dá para pensar sempre assim — “quanto rende por mês” × “quantos meses”.</p>\n<p><b>Exemplo resolvido 2 — quando as unidades não batem.</b> R$ 2.500,00 a 12% ao ano, por 8 meses, juros simples.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Caminho A · converter a taxa</span> 12% ao ano ÷ 12 = 1% ao mês → 2.500 × 0,01 × 8 = <b>R$ 200,00</b></div>\n  <div class=\"def\"><span class=\"def-t\">Caminho B · converter o tempo</span> 8 meses = 8/12 de ano → 2.500 × 0,12 × 2/3 = <b>R$ 200,00</b></div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>As duas contas erradas, ao lado da certa:</b>\n<br><b>Errado:</b> 2.500 × 0,12 × 8 = <b>2.400</b> — usou taxa <b>anual</b> com tempo em <b>meses</b>. O resultado é doze vezes maior que o certo, e está entre as alternativas.\n<br><b>Errado:</b> 2.500 × 12 × (8/12) = <b>20.000</b> — esqueceu de pôr a taxa em decimal. Rendimento maior que o capital deveria acender a luz vermelha.\n<br><b>Certo:</b> R$ 200,00.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Antes de multiplicar, confira duas coisas em voz baixa: <b>a taxa está em decimal?</b> e <b>taxa e tempo estão na mesma unidade?</b> São as duas únicas armadilhas do assunto — a fórmula em si não erra ninguém.</div>"
            },
            {
              "titulo": "Juros compostos: só o necessário",
              "html": "<p>Em <b>juros compostos</b>, os juros de cada período passam a render também. É exatamente o <b>fator multiplicativo</b> da seção de porcentagem, aplicado várias vezes:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">M = C · (1 + i)^t</span> montante</div>\n  <div class=\"def\"><span class=\"def-t\">J = M − C</span> os juros saem por subtração</div>\n</div>\n<p><b>Comparando os dois regimes</b> com os mesmos números do exemplo anterior — R$ 4.000 a 1,5% ao mês por 8 meses:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Simples</span> 4.000 × (1 + 0,015 × 8) = <b>4.480,00</b></div>\n  <div class=\"def\"><span class=\"def-t\">Composto</span> 4.000 × 1,015⁸ ≈ <b>4.505,97</b> — cerca de R$ 26 a mais</div>\n</div>\n<p>A diferença é pequena em oito meses e cresce rápido com o prazo: é o efeito de “juros sobre juros”. <b>No mesmo prazo e taxa, o composto é sempre maior</b> que o simples (para prazos maiores que um período) — o que já serve para eliminar alternativa.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A pegadinha que só existe no composto:</b> dividir a taxa anual por 12 para achar a mensal <b>é correto no juro simples e errado no composto</b>. 12% ao ano composto não é 1% ao mês — 1,01¹² ≈ 1,1268, ou seja, 12,68% ao ano. A conversão correta no composto exige raiz, e por isso a FGV raramente cobra: se a questão pedir conversão de taxa composta, desconfie e releia.</div>"
            },
            {
              "titulo": "Raciocínio numérico: as duas identidades",
              "html": "<p>A questão 27 de 2024 não era porcentagem nem média: era um truque algébrico que se aprende em cinco minutos e economiza cinco na prova. Ele mora nos <b>produtos notáveis</b>:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">(a + b)² = a² + 2ab + b²</span> o quadrado da soma</div>\n  <div class=\"def\"><span class=\"def-t\">(a − b)² = a² − 2ab + b²</span> o quadrado da diferença</div>\n</div>\n<p>Repare no que as duas têm em comum: os pedaços são <b>a² + b²</b> (a soma dos quadrados) e <b>2ab</b> (o dobro do produto). Daí sai a leitura que resolve as questões:</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Se o enunciado dá a soma dos números e a soma dos quadrados, ele já deu o produto — e a diferença.</b> Você nunca precisa descobrir os números.</div>\n<p><b>Exemplo resolvido 1.</b> A soma de dois números é 10 e a soma de seus quadrados é 58. Qual o produto?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Escreva a identidade</span> (a + b)² = a² + b² + 2ab</div>\n  <div class=\"def\"><span class=\"def-t\">2. Substitua o que foi dado</span> 10² = 58 + 2ab → 100 = 58 + 2ab</div>\n  <div class=\"def\"><span class=\"def-t\">3. Isole</span> 2ab = 42 → ab = <b>21</b></div>\n  <div class=\"def\"><span class=\"def-t\">Conferindo</span> os números eram 3 e 7: somam 10, os quadrados somam 9 + 49 = 58, e o produto é 21 ✔</div>\n</div>\n<p><b>Exemplo resolvido 2.</b> Soma 12, soma dos quadrados 80. Produto?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Direto</span> 144 = 80 + 2ab → 2ab = 64 → ab = <b>32</b> (os números eram 4 e 8)</div>\n</div>\n<p><b>Exemplo resolvido 3 — a questão da prova, que pedia a diferença.</b> x + y = 1 e x² + y² = 313. Quanto vale x − y?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. A identidade útil</span> (x − y)² = 2(x² + y²) − (x + y)²</div>\n  <div class=\"def\"><span class=\"def-t\">2. Substitua</span> 2 × 313 − 1² = 626 − 1 = <b>625</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Tire a raiz</span> x − y = √625 = <b>25</b></div>\n  <div class=\"def\"><span class=\"def-t\">Conferindo</span> eram 13 e −12: somam 1, os quadrados somam 169 + 144 = 313, e a diferença é 25 ✔</div>\n</div>\n<p>De onde vem a identidade do passo 1: somando <code>(x+y)² = x² + 2xy + y²</code> com <code>(x−y)² = x² − 2xy + y²</code>, o <code>2xy</code> se cancela e sobra <code>(x+y)² + (x−y)² = 2(x² + y²)</code>. É só isolar o termo que interessa.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada mais comum:</b> parar em 100 − 58 = <b>42</b> e marcar 42 como produto, esquecendo que aquilo é <b>2ab</b> e falta dividir por 2. O 42 está entre as alternativas.\n<br><b>O outro erro</b> é de estratégia, não de conta: montar o sistema completo (a + b = 10 e a² + b² = 58), cair numa equação de segundo grau e gastar cinco minutos para chegar ao mesmo 21.</div>"
            },
            {
              "titulo": "Raciocínio numérico: contagem de pares",
              "html": "<p>A questão 29 falava de estradas ligando vilarejos dois a dois. O mesmo problema aparece como apertos de mão numa reunião, partidas de um campeonato de turno único, cabos entre servidores, chaves trocadas entre pares. A fórmula é uma só:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">C(n,2) = n(n−1)/2</span> o número de pares que se podem formar com n elementos</div>\n</div>\n<p><b>De onde ela vem</b> — e vale entender, porque é o que evita o erro de fator 2: cada uma das <b>n</b> pessoas cumprimenta as <b>n−1</b> outras, o que dá <code>n(n−1)</code> cumprimentos. Mas assim cada aperto de mão foi contado <b>duas vezes</b>, uma por cada pessoa do par — então divide-se por 2.</p>\n<p><b>Exemplo resolvido 1 — fórmula direta.</b> Seis servidores ligados dois a dois por cabo. Quantos cabos?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Conta</span> 6 × 5 ÷ 2 = <b>15 cabos</b></div>\n</div>\n<p><b>Exemplo resolvido 2 — o caminho inverso, que é o formato de prova.</b> Numa reunião houve 45 cumprimentos, cada par se cumprimentando uma vez. Quantas pessoas havia?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Monte</span> n(n−1)/2 = 45 → n(n−1) = <b>90</b></div>\n  <div class=\"def\"><span class=\"def-t\">2. Não resolva a equação de 2º grau</span> procure <b>dois inteiros consecutivos cujo produto seja 90</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Teste rápido</span> 9×8 = 72 (pouco) · <b>10×9 = 90</b> ✔ · 11×10 = 110 (muito)</div>\n  <div class=\"def\"><span class=\"def-t\">Resposta</span> n = <b>10 pessoas</b></div>\n</div>\n<p><b>Exemplo resolvido 3 — a questão da prova, que pedia o acréscimo.</b> Havia x vilarejos ligados dois a dois; entraram 2 novos e foram construídas 17 novas estradas. Quanto vale x?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Estradas novas</span> C(x+2, 2) − C(x, 2)</div>\n  <div class=\"def\"><span class=\"def-t\">2. Desenvolvendo</span> [(x+2)(x+1) − x(x−1)] ÷ 2 = (4x + 2) ÷ 2 = <b>2x + 1</b></div>\n  <div class=\"def\"><span class=\"def-t\">3. Igualando</span> 2x + 1 = 17 → x = <b>8</b></div>\n  <div class=\"def\"><span class=\"def-t\">Conferindo</span> 8 vilarejos → 28 estradas; 10 vilarejos → 45; a diferença é 17 ✔</div>\n</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A conta errada ao lado da certa</b> — no exemplo 2:\n<br><b>Errado:</b> n(n−1) = 45 → testar e não achar inteiro, ou responder <b>9</b> porque 9 é “quase” a raiz de 90. Esqueceu a divisão por 2 em algum ponto.\n<br><b>Errado:</b> marcar <b>45</b>, confundindo o número de cumprimentos com o de pessoas.\n<br><b>Certo:</b> 10 pessoas — e a conferência é imediata: 10 × 9 ÷ 2 = 45 ✔</div>"
            },
            {
              "titulo": "Calcular sem calculadora",
              "html": "<p>Metade dos erros de aritmética em prova é conta errada, não conceito errado — e na prova da DataPrev não há calculadora. Esta seção é treino, não teoria: faça as contas abaixo <b>de cabeça</b>, sem escrever.</p>\n<p><b>Tudo se monta a partir de dois valores:</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">10%</span> vírgula uma casa para a esquerda — 10% de 340 = <b>34</b></div>\n  <div class=\"def\"><span class=\"def-t\">1%</span> duas casas — 1% de 340 = <b>3,4</b></div>\n</div>\n<p>E o resto é soma e metade:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">5%</span> metade de 10% — 5% de 340 = 17</div>\n  <div class=\"def\"><span class=\"def-t\">15%</span> 10% + 5% — 15% de 240 = 24 + 12 = <b>36</b></div>\n  <div class=\"def\"><span class=\"def-t\">30%</span> 10% × 3 — 30% de 240 = 72</div>\n  <div class=\"def\"><span class=\"def-t\">35%</span> 30% + 5% — 72 + 12 = <b>84</b></div>\n  <div class=\"def\"><span class=\"def-t\">2%</span> 1% × 2 · <b>3%</b> 1% × 3</div>\n</div>\n<p><b>Porcentagens que são divisões</b> — decore estas seis e muita multiplicação desaparece:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">50% = ÷2</span> · <b>25% = ÷4</b> · <b>20% = ÷5</b></div>\n  <div class=\"def\"><span class=\"def-t\">12,5% = ÷8</span> · <b>33,3% = ÷3</b> · <b>10% = ÷10</b></div>\n  <div class=\"def\"><span class=\"def-t\">75% = ÷4 e ×3</span> · <b>40% = ÷5 e ×2</b> · <b>60% = ÷5 e ×3</b></div>\n</div>\n<p>Exemplos para fazer agora: <b>12,5% de 480</b> = 480 ÷ 8 = 60. <b>40% de 350</b> = 70 × 2 = 140. <b>75% de 320</b> = 80 × 3 = 240.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Comute o “de”:</b> 18% de 50 é chato, mas 50% de 18 = <b>9</b> é imediato. Sempre que um dos dois números for 50, 25, 20 ou 10, ponha esse número no lugar da porcentagem.</div>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> <b>Divida antes de multiplicar.</b> Em 50.000 × 12/25, dividir primeiro (50.000 ÷ 25 = 2.000) deixa a conta trivial; multiplicar primeiro gera 600.000 para depois dividir. O resultado é o mesmo, o risco de erro não.</div>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O hábito que mais economiza tempo:</b> estime e olhe as alternativas <b>antes</b> de calcular. Boa parte das questões da FGV se resolve por ordem de grandeza — se você já sabe que a resposta fica “um pouco abaixo de 20%”, as outras quatro alternativas morreram e não há conta a fazer. Conta exata só quando sobrarem duas.</div>"
            },
            {
              "titulo": "A cola explicada · 1 — porcentagem, taxa média e proporção",
              "html": "<p>Esta seção e a seguinte são o <b>cartão de memorização comentado</b>: cada linha da cola, o que ela quer dizer, um exemplo e a armadilha. Serve para a última semana, quando o cartão seco já não diz mais nada sozinho.</p>\n\n<p><b>FATOR MULTIPLICATIVO</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">aumento de x% → × (1 + x/100)</span> desconto de x% → × (1 − x/100)</div>\n</div>\n<p><b>De onde vem o “1”:</b> todo valor é <b>100% de si mesmo</b>, e 100% é 1. Aumentar 6,5% é ficar com 106,5% = <b>1,065</b> do que se tinha; dar 12% de desconto é ficar com 88% = <b>0,88</b>. O fator é <i>a fração do valor original que sobra no fim</i>.</p>\n<p><b>Exemplo.</b> Salário de R$ 3.200 com reajuste de 6,5% → <code>3.200 × 1,065 = 3.408</code>. Pelo caminho longo: 6,5% de 3.200 = 208, depois 3.200 + 208. Mesma resposta em duas contas — e esse caminho <b>não encadeia</b> quando vêm duas variações seguidas.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A armadilha:</b> responder <b>208</b> quando perguntaram o salário novo, ou o valor do desconto quando perguntaram o preço com desconto. O fator já entrega o valor final; o caminho longo entrega a parte, e é fácil parar nela.</div>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">sucessivas → MULTIPLICA os fatores, nunca soma</span> +30% e +10% → 1,3 × 1,1 = 1,43 → <b>43%</b></div>\n</div>\n<p><b>Por quê:</b> a segunda variação incide sobre o valor <b>já alterado</b>. De 100 sobe para 130; os 10% seguintes são 10% <b>de 130</b> = 13, não 10 → 143. Os 3 de sobra são “os 10% incidindo também sobre os 30 que subiram”.</p>\n<p><b>Exemplo — inflação acumulada.</b> Três meses de 2%: <code>1,02 × 1,02 × 1,02 = 1,061208</code> → <b>6,12%</b> no trimestre, e não 6%. Se as alternativas forem “6%” e “6,12%”, quem somou marca a errada.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">+20% e −20% → 0,96</span> termina <b>4% MENOR</b> — nunca volta ao inicial</div>\n</div>\n<p><b>Com dinheiro:</b> uma ação a R$ 100 sobe 20% (vai a 120) e cai 20% no dia seguinte. A queda é 20% <b>de 120</b> = 24 → fecha em <b>96</b>.</p>\n<p><b>O caso que impressiona mais:</b> cai 50% e depois sobe 50% → <code>100 → 50 → 75</code>. Perdeu 25%, porque a subida foi calculada sobre 50.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Regra geral: <b>subir e descer a mesma taxa sempre termina abaixo do valor inicial</b>. Nunca marque “volta ao preço original”.</div>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">desfazer −20% → 1/0,8 = 1,25 → +25%</span> para voltar, use o fator <b>inverso</b></div>\n</div>\n<p><b>Exemplo.</b> Um investimento caiu 40% — fator 0,60. Para voltar: <code>1 ÷ 0,60 = 1,667</code> → precisa subir <b>66,7%</b>. Caiu 40 e precisa subir quase 67, porque agora sobe a partir de uma base menor.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> A imagem que dispensa a conta: perder metade (−50%) exige <b>dobrar</b> (+100%) para voltar.</div>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">variação % → (final − inicial) ÷ INICIAL</span> o denominador é sempre o ponto de partida</div>\n</div>\n<p><b>Exemplo.</b> Salário de 3.200 para 3.408 → <code>208 ÷ 3.200 = 6,5%</code>. Você está medindo quanto cresceu <b>em relação ao que era</b> — usar o valor final como base responde outra pergunta. De 40 para 50 é +25%; de 50 para 40 é −20%: mesma diferença de 10, percentuais diferentes.</p>\n\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">p.p. ≠ %</span> 20% → 25% é <b>+5 p.p.</b> E <b>+25%</b></div>\n</div>\n<p><b>Exemplo real.</b> A Selic passa de 10,5% para 11,25%: subiu <b>0,75 ponto percentual</b> (a subtração) ou <b>7,14 por cento</b> (porque 0,75 é 7,14% de 10,5). As duas leituras estão certas e dizem coisas diferentes.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> Quando o número que varia <b>já é</b> uma porcentagem, dizer “subiu 5%” é ambíguo — foi para isso que se inventou “ponto percentual”. Se o enunciado diz <b>p.p.</b>, é subtração; se diz <b>%</b>, é a fórmula da variação.</div>\n\n<p><b>TAXA MÉDIA</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">(1 + i)ⁿ = fator total → i = ⁿ√(fator total) − 1</span> 21% em 2 meses → (1+i)² = 1,21 → <b>i = 10%</b></div>\n</div>\n<p>É a taxa que, <b>aplicada em todos os períodos</b>, chegaria ao mesmo lugar. O <code>ⁿ</code> é o número de períodos: dois períodos, raiz quadrada; três, raiz cúbica.</p>\n<p><b>Exemplo limpo.</b> Faturamento cresceu 44% em 2 anos → <code>√1,44 = 1,2</code> → <b>20% ao ano</b> (e não 22%, que seria 44 ÷ 2). Confira: 1,2 × 1,2 = 1,44 ✔</p>\n<p><b>Com três períodos.</b> 33,1% em 3 meses → raiz cúbica de 1,331 = 1,1 → <b>10% ao mês</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">regra: a taxa média é SEMPRE menor que a média das taxas</span> (empata só se as taxas forem iguais)</div>\n</div>\n<p><b>O exemplo que mostra o porquê de forma gritante:</b> um ativo sobe 100% e depois cai 50% → <code>2,0 × 0,5 = 1,0</code>: você terminou exatamente onde começou, taxa média <b>0%</b>. A média aritmética das taxas diria <code>(100 − 50) ÷ 2 = +25%</code>. Média de coisas que se <b>multiplicam</b> não se faz somando.</p>\n<div class=\"mnemonic\"><i class=\"ti ti-bulb\"></i> Na prova isso vale ponto sem conta: sabendo a média aritmética das taxas, a resposta fica <b>um pouco abaixo</b> dela — o que costuma eliminar quase todas as alternativas.</div>\n\n<p><b>DIVISÃO PROPORCIONAL</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">some as partes → fração de quem se quer → aplique no total</span> 12.000 e 13.000 de 50.000 → 12/25 × 50.000 = <b>24.000</b></div>\n  <div class=\"def\"><span class=\"def-t\">confira somando as partes</span> inversamente = inverta os números e trate como direta</div>\n</div>\n<p><b>Exemplo com três pessoas.</b> Bônus de R$ 21.000 conforme as horas trabalhadas — 30h, 40h e 50h:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Some</span> 30 + 40 + 50 = 120 horas</div>\n  <div class=\"def\"><span class=\"def-t\">2. Quanto vale UMA hora</span> 21.000 ÷ 120 = 175</div>\n  <div class=\"def\"><span class=\"def-t\">3. Multiplique</span> 5.250 · 7.000 · 8.750 — que somam 21.000 ✔</div>\n</div>\n<p>Com três ou mais partes, pensar em “quanto vale uma unidade” é mais rápido que montar fração para cada um. E a conferência do passo 3 não é zelo: é o que pega o erro nº 1, entregar a parte do outro por ter invertido a fração.</p>\n<p><b>Inversamente.</b> R$ 6.000 inversamente proporcional a 2, 3 e 6 — imagine um prêmio em que menos faltas dá mais dinheiro:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Pesos invertidos</span> 1/2, 1/3, 1/6 → somam 3/6 + 2/6 + 1/6 = 1</div>\n  <div class=\"def\"><span class=\"def-t\">Partes</span> 3.000 · 2.000 · 1.000</div>\n</div>\n<p>Quem tinha o <b>menor</b> número ficou com a <b>maior</b> parte — é assim que se confere que “inversamente” foi aplicado e os lados não foram trocados.</p>"
            },
            {
              "titulo": "A cola explicada · 2 — regra de três, médias, juros e cálculo mental",
              "html": "<p><b>REGRA DE TRÊS</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">sobe junto → direta</span> multiplica em <b>cruz</b></div>\n  <div class=\"def\"><span class=\"def-t\">sobe/desce → inversa</span> multiplica em <b>linha</b></div>\n</div>\n<p>Como decidir sem decorar: <i>“se eu aumentar esta grandeza, a outra sobe ou desce?”</i>.</p>\n<p><b>Direta.</b> 4 caixas de papel custam R$ 92; quanto custam 7? <code>4/7 = 92/x → 4x = 644 → x = 161</code>. Mais caixas, mais reais.</p>\n<p><b>Inversa.</b> 5 pedreiros levam 12 dias numa obra; e 6 pedreiros? <code>5 × 12 = 6 × x → x = 10 dias</code>. Mais pedreiros, menos dias.</p>\n<p><b>Por que “em linha” na inversa</b> — e é isto que tira a decoreba: 5 pedreiros por 12 dias são <b>60 diárias de trabalho</b>. Esse total é o tamanho da obra e <b>não muda</b>; então 6 pedreiros precisam de 60 ÷ 6 = 10 dias. Multiplicar em linha é só dizer que <b>o produto das duas grandezas é constante</b>.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>O alarme:</b> se a resposta disser que <b>mais</b> pedreiros levam <b>mais</b> tempo, você cruzou onde devia alinhar. Olhe sempre se o resultado andou para o lado certo.</div>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">composta → produtividade unitária</span> 1 por 1 → n por 1 → tempo</div>\n</div>\n<p><b>Exemplo.</b> 8 atendentes resolvem 320 chamados em 5 dias. Quantos dias 6 atendentes levam para 360 chamados?</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">1. Um atendente, um dia</span> 320 ÷ (8 × 5) = 8 chamados</div>\n  <div class=\"def\"><span class=\"def-t\">2. Seis atendentes, um dia</span> 6 × 8 = 48</div>\n  <div class=\"def\"><span class=\"def-t\">3. Tempo para 360</span> 360 ÷ 48 = <b>7,5 dias</b></div>\n</div>\n<p>Três divisões, nenhuma tabela, nenhuma decisão de direta/inversa por coluna. E confere: o trabalho cresceu e a equipe encolheu, então o prazo tinha de subir (5 → 7,5) ✔</p>\n\n<p><b>MÉDIAS</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">ponderada = Σ(valor × peso) ÷ Σpesos</span> cada valor conta conforme seu peso</div>\n</div>\n<p><b>O exemplo que mais interessa é a sua própria prova.</b> Na DataPrev, as 40 questões do Módulo I valem peso 1 e as 30 específicas valem peso 2,5. Duas pessoas acertam 40 questões cada:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">20 gerais + 20 específicas</span> 20×1 + 20×2,5 = <b>70 pontos</b></div>\n  <div class=\"def\"><span class=\"def-t\">30 gerais + 10 específicas</span> 30×1 + 10×2,5 = <b>55 pontos</b></div>\n</div>\n<p>Mesmo número de acertos, <b>15 pontos de diferença</b>. É isso que “peso” significa: cada específica conta como duas e meia.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">média ≥ 7 com pesos somando 10 → soma ponderada ≥ 70</span> troque a média pela soma</div>\n</div>\n<p>Quando você sabe a soma dos pesos, trabalhar com a <b>soma</b> deixa tudo em números inteiros: 70 é inteiro, 7,0 vira fração no meio do caminho.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">média de médias SÓ com grupos iguais</span> senão, volte aos totais</div>\n</div>\n<p><b>Exemplo com o seu treino.</b> Você fez 30 questões de Legislação com 80% de acerto e 10 de Lógica com 40%. Qual o percentual geral?</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Errado:</b> (80 + 40) ÷ 2 = <b>60%</b>.\n<br><b>Certo:</b> acertos = 0,8×30 + 0,4×10 = 24 + 4 = 28 → 28 ÷ 40 = <b>70%</b>.\n<br>Os 80% valem por 30 questões e os 40% por apenas 10 — não podem pesar igual.</div>\n\n<p><b>JUROS</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">simples</span> J = C·i·t · M = C(1 + i·t)</div>\n  <div class=\"def\"><span class=\"def-t\">composto</span> M = C(1 + i)^t</div>\n</div>\n<p><b>Exemplo comparando.</b> R$ 1.800 a 2% ao mês por 6 meses:</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">Simples</span> J = 1.800 × 0,02 × 6 = <b>216</b> → montante 2.016</div>\n  <div class=\"def\"><span class=\"def-t\">Composto</span> M = 1.800 × 1,02⁶ = <b>2.027,09</b> → juros de 227,09</div>\n</div>\n<p><b>A diferença em uma frase:</b> no simples rende sempre R$ 36 por mês, porque a base é sempre o capital inicial. No composto, os juros de cada mês passam a render também — é o fator multiplicativo aplicado seis vezes.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">taxa em DECIMAL</span> 2% é 0,02 — escrever 2 dá resultado 100 vezes maior</div>\n  <div class=\"def\"><span class=\"def-t\">taxa e tempo na MESMA unidade</span> 24% ao ano com prazo em meses não se multiplica direto</div>\n</div>\n<p>Convertendo: <code>24% ao ano ÷ 12 = 2% ao mês → 1.800 × 0,02 × 3 = R$ 108</code> para três meses.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>A ressalva que só existe no composto:</b> dividir a taxa anual por 12 funciona no juro <b>simples</b>. No composto não — 1% ao mês durante 12 meses dá <b>12,68%</b> ao ano, não 12%.</div>\n\n<p><b>RACIOCÍNIO NUMÉRICO</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">(a+b)² = a² + 2ab + b²</span> soma + soma dos quadrados → <b>PRODUTO</b></div>\n  <div class=\"def\"><span class=\"def-t\">(a−b)² = 2(a²+b²) − (a+b)²</span> → e daí a <b>diferença</b>, por raiz</div>\n</div>\n<p><b>Para cálculo mental:</b> <code>41² = (40+1)² = 1.600 + 80 + 1 = 1.681</code>.</p>\n<p><b>Para questão de prova:</b> dois números somam 9 e a soma dos quadrados é 53; qual o produto? <code>81 = 53 + 2ab → ab = 14</code>. Eram 2 e 7 — mas você nunca precisou descobrir isso.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">C(n,2) = n(n−1)/2</span> pares: estradas, cumprimentos, cabos, jogos de turno único</div>\n  <div class=\"def\"><span class=\"def-t\">+2 elementos → 2x + 1 ligações novas</span> foi a questão 29 de 2024</div>\n</div>\n<p><b>Por que a fórmula é essa:</b> cada um dos <code>n</code> elementos se liga aos outros <code>n−1</code>, o que dá <code>n(n−1)</code> — mas cada ligação foi contada <b>duas vezes</b>, uma por ponta, então divide por 2.</p>\n<p><b>Exemplo.</b> Campeonato com 8 times, turno único: <code>8 × 7 ÷ 2 = 28 jogos</code>.</p>\n\n<p><b>CÁLCULO MENTAL</b></p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">10% vírgula 1 casa · 1% duas casas · 5% metade de 10%</span> tudo se monta a partir destes</div>\n</div>\n<p><b>7% de 1.400:</b> 1% é 14, então 7% é 14 × 7 = <b>98</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">20% = ÷5 · 25% = ÷4 · 12,5% = ÷8 · 33,3% = ÷3</span> divisão é mais rápida de cabeça que multiplicação</div>\n</div>\n<p>20% de 1.350 = <b>270</b> · 25% de 3.200 = <b>800</b> · 12,5% de 2.400 = <b>300</b>.</p>\n<div class=\"defs\">\n  <div class=\"def\"><span class=\"def-t\">“de” comuta</span> 18% de 50 = 50% de 18 = <b>9</b></div>\n</div>\n<p>Porque “de” é multiplicação, e multiplicação comuta. Outro caso: 16% de 25 é chato, mas <b>25% de 16 = 4</b> sai na hora. A regra prática: se um dos dois números for 50, 25, 20 ou 10, jogue <b>esse</b> para o lugar da porcentagem.</p>\n<div class=\"destaque\"><i class=\"ti ti-alert-triangle\"></i> <b>Estime e elimine alternativas ANTES de calcular.</b> São 5 questões de RL em cerca de 20 minutos, sem calculadora. Se você já sabe que a taxa média fica “pouco abaixo de 20%” e as alternativas são 19,58% · 20% · 21,5% · 43% · 50%, acabou. Conta exata só quando sobrarem duas.</div>"
            }
          ],
          "flashcards": [
            {
              "tema": "Porcentagem",
              "pergunta": "Qual o fator multiplicativo de um aumento de x% e de um desconto de x%?",
              "resposta": "Aumento: × (1 + x/100). Desconto: × (1 − x/100). Trabalhar com o fator dispensa calcular a parte e somar depois — e é o que permite encadear variações."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Dois aumentos consecutivos de 30% e 10% dão quanto no período?",
              "resposta": "43%, não 40%: os fatores se MULTIPLICAM (1,30 × 1,10 = 1,43). O segundo aumento incide sobre o valor já aumentado — os 10% são de 130, não de 100."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Um aumento de 20% seguido de um desconto de 20% volta ao preço original?",
              "resposta": "Não. 1,20 × 0,80 = 0,96 → o preço final é 4% MENOR. Aumento e desconto de mesma taxa sempre terminam abaixo do valor inicial, e a ordem não muda nada."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Depois de um desconto de 20%, de quanto deve ser o aumento para voltar ao preço original?",
              "resposta": "25%, porque é preciso o fator inverso: 1/0,80 = 1,25. Testando com 100: 100 → 80 → 80 × 1,25 = 100. Descer 50% exige dobrar (+100%) para voltar."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Qual a fórmula da variação percentual, e onde se erra?",
              "resposta": "(final − inicial) / INICIAL. O denominador é sempre o valor inicial: de 40 para 50 é +25%, mas de 50 para 40 é −20%. Mesma diferença absoluta, percentuais diferentes."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "A taxa subiu de 20% para 25%. Subiu 5% ou 25%?",
              "resposta": "Subiu 5 PONTOS PERCENTUAIS (a subtração) ou 25 POR CENTO (porque 5 é 25% de 20). “p.p.” no enunciado é subtração; “%” é a fórmula da variação. Nunca as duas coisas ao mesmo tempo."
            },
            {
              "tema": "Porcentagem",
              "pergunta": "Por que 30% de 80 é igual a 80% de 30?",
              "resposta": "Porque “de” é multiplicação, e a multiplicação comuta: 0,3 × 80 = 0,8 × 30 = 24. Serve de atalho — 18% de 50 é chato, 50% de 18 = 9 é instantâneo."
            },
            {
              "tema": "Taxa média",
              "pergunta": "O que é a taxa média de variação, e como se calcula?",
              "resposta": "É a taxa que, aplicada em todos os períodos, dá o mesmo resultado final: (1 + i)ⁿ = fator total, logo i = ⁿ√(fator total) − 1. É média GEOMÉTRICA dos fatores, não aritmética das taxas."
            },
            {
              "tema": "Taxa média",
              "pergunta": "Os acessos cresceram 21% em dois meses. Qual a taxa média mensal?",
              "resposta": "10%: (1 + i)² = 1,21 → 1 + i = 1,1. Não é 10,5% (21 ÷ 2) — confira: 1,105² = 1,221, que daria 22,1%."
            },
            {
              "tema": "Taxa média",
              "pergunta": "Qual a regra que dispensa calcular a raiz numa questão de taxa média?",
              "resposta": "A taxa média é SEMPRE MENOR que a média aritmética das taxas (empata só se as taxas forem iguais). Com taxas de 30% e 10%, a resposta fica um pouco abaixo de 20% — o que já elimina quase todas as alternativas."
            },
            {
              "tema": "Proporção",
              "pergunta": "Como resolver uma divisão proporcional em três passos?",
              "resposta": "1) Some as partes (o “todo”). 2) Escreva a fração de quem você quer. 3) Aplique sobre o valor a repartir. Com 12.000 e 13.000 de um prejuízo de 50.000: 12/25 × 50.000 = 24.000."
            },
            {
              "tema": "Proporção",
              "pergunta": "Qual a conferência obrigatória numa divisão proporcional?",
              "resposta": "Calcular a outra parte e somar: tem de dar o total. Pega o erro nº 1 do assunto, a fração invertida — e a banca oferece justamente a parte do outro como alternativa."
            },
            {
              "tema": "Proporção",
              "pergunta": "Como repartir em partes INVERSAMENTE proporcionais a 2 e 3?",
              "resposta": "Use 1/2 e 1/3 como pesos (inverta os números e trate como direta). De 60.000: 36.000 e 24.000 — quem tinha o número menor fica com a parte maior."
            },
            {
              "tema": "Regra de três",
              "pergunta": "Como saber se a regra de três é direta ou inversa?",
              "resposta": "Pergunte “se eu aumentar esta, a outra sobe ou desce?”. Sobe → direta (multiplica em cruz). Desce → inversa (multiplica em linha). Trabalhadores × tempo e velocidade × tempo são inversas."
            },
            {
              "tema": "Regra de três",
              "pergunta": "Qual o atalho para regra de três composta?",
              "resposta": "Produtividade unitária: descubra quanto UM faz em UMA unidade de tempo, multiplique pela nova quantidade e divida o trabalho novo por isso. 600 lotes ÷ (4×3) = 50; 5 × 50 = 250; 1.000 ÷ 250 = 4 horas."
            },
            {
              "tema": "Médias",
              "pergunta": "Como se calcula a média ponderada?",
              "resposta": "Σ(valor × peso) ÷ Σpesos. O resultado puxa para o valor de maior peso — por isso, numa avaliação com pesos 1, 2, 3, 4, onde cai a nota baixa muda tudo."
            },
            {
              "tema": "Médias",
              "pergunta": "Qual o atalho quando os pesos somam 10 e a média exigida é 7,0?",
              "resposta": "Trabalhar com a SOMA ponderada ≥ 70 em vez da média. Números inteiros, sem fração — era exatamente o que a questão 26 da prova de 2024 pedia."
            },
            {
              "tema": "Médias",
              "pergunta": "Equipe A: 10 pessoas, média 6. Equipe B: 40 pessoas, média 8. Qual a média geral?",
              "resposta": "7,6, não 7. Grupos de tamanhos diferentes exigem ponderar pelo número de elementos: (10×6 + 40×8)/50 = 380/50. Média de médias só vale com grupos iguais — volte sempre aos totais."
            },
            {
              "tema": "Juros",
              "pergunta": "Quais as fórmulas de juros simples e compostos?",
              "resposta": "Simples: J = C·i·t e M = C(1 + i·t) — incidem sempre sobre o capital inicial. Compostos: M = C(1 + i)^t — incidem sobre o montante acumulado."
            },
            {
              "tema": "Juros",
              "pergunta": "Quais as duas pegadinhas de unidade em juros?",
              "resposta": "1) A taxa entra em DECIMAL: 1,5% é 0,015, não 1,5 (errar dá resultado 100× maior, e ele está entre as alternativas). 2) Taxa e tempo na MESMA unidade — e dividir a taxa anual por 12 só vale no juro simples."
            },
            {
              "tema": "Raciocínio numérico",
              "pergunta": "O enunciado dá a soma de dois números e a soma dos seus quadrados. O que ele deu de graça?",
              "resposta": "O produto — e a diferença. De (a+b)² = a² + 2ab + b²: com soma 10 e quadrados 58, 100 = 58 + 2ab → ab = 21. E (a−b)² = 2(a²+b²) − (a+b)². Não resolva o sistema."
            },
            {
              "tema": "Raciocínio numérico",
              "pergunta": "Quantas ligações existem quando cada par de elementos se liga uma vez?",
              "resposta": "C(n,2) = n(n−1)/2. Vem disfarçada de estradas entre cidades, apertos de mão, partidas de turno único, cabos entre servidores. 45 cumprimentos → n(n−1) = 90 → n = 10."
            },
            {
              "tema": "Raciocínio numérico",
              "pergunta": "Entrando 2 novos elementos num grupo de x ligados dois a dois, quantas ligações novas surgem?",
              "resposta": "2x + 1, porque C(x+2,2) − C(x,2) = (4x+2)/2. Era a questão 29 de 2024: 17 novas estradas → 2x + 1 = 17 → x = 8."
            },
            {
              "tema": "Cálculo mental",
              "pergunta": "Como montar qualquer porcentagem a partir de 10% e 1%?",
              "resposta": "10% = vírgula uma casa à esquerda; 1% = duas casas. Daí: 5% é metade de 10%, 15% = 10% + 5%, 30% = 10% × 3, 2% = 1% × 2. Ex.: 35% de 240 = 72 + 12 = 84."
            },
            {
              "tema": "Cálculo mental",
              "pergunta": "Quais porcentagens é melhor tratar como divisão?",
              "resposta": "50% = ÷2 · 25% = ÷4 · 20% = ÷5 · 12,5% = ÷8 · 33,3% = ÷3 · 10% = ÷10 · 75% = ÷4 e ×3 · 40% = ÷5 e ×2."
            },
            {
              "tema": "Método",
              "pergunta": "Qual a ordem de trabalho numa questão de aritmética sem calculadora?",
              "resposta": "Estimar primeiro e olhar as alternativas: muita questão da FGV se resolve por ordem de grandeza. Conta exata só quando sobrarem duas alternativas. São 5 questões em ~20 minutos — o caminho curto vale mais que o caminho certo e longo."
            }
          ],
          "simulados": [
            {
              "id": "problemas-aritmeticos-01",
              "nome": "Aula 1 · Porcentagem, proporção, médias e juros",
              "descricao": "Dez questões no padrão FGV sobre divisão proporcional, variações percentuais sucessivas, taxa média de crescimento, regra de três composta, média ponderada, média de médias, juros simples e os dois truques de raciocínio numérico que a banca usou em 2024.",
              "nivel": "Treino",
              "questoes": [
                {
                  "type": "mc",
                  "tag": "Divisão proporcional",
                  "text": "Dois sócios investiram R$ 15.000,00 e R$ 25.000,00 em um negócio. Ao fim do exercício, o lucro de R$ 32.000,00 foi dividido em partes diretamente proporcionais ao capital investido. O sócio que investiu menos recebeu",
                  "options": [
                    "R$ 10.000,00",
                    "R$ 12.000,00",
                    "R$ 13.500,00",
                    "R$ 16.000,00",
                    "R$ 20.000,00"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Capital total: 15.000 + 25.000 = 40.000. A fração de quem investiu menos é 15/40 = 3/8, e 32.000 × 3/8 = 12.000. Conferindo pela outra ponta: o outro sócio fica com 5/8 → 20.000, e 12.000 + 20.000 = 32.000, fecha. A opção E é justamente a parte do OUTRO sócio — é o que se marca ao inverter a fração, e a banca sempre a oferece. A D é a metade do lucro, de quem dividiu igualmente ignorando a proporção."
                },
                {
                  "type": "mc",
                  "tag": "Variações sucessivas",
                  "text": "O preço de um equipamento sofreu um aumento de 20% e, no mês seguinte, um desconto de 20%. Em relação ao preço inicial, o preço final é",
                  "options": [
                    "igual",
                    "4% menor",
                    "4% maior",
                    "2% menor",
                    "5% menor"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Os fatores se multiplicam: 1,20 × 0,80 = 0,96, ou seja, o preço final é 96% do inicial — 4% MENOR. A opção A é a resposta intuitiva e errada: o desconto de 20% incidiu sobre um valor já aumentado, maior que o original, então tirou mais do que o aumento havia posto. Guarde a regra: aumento e desconto de mesma taxa sempre terminam ABAIXO do valor inicial, e a ordem das operações não muda nada porque a multiplicação é comutativa."
                },
                {
                  "type": "mc",
                  "tag": "Desfazer uma variação",
                  "text": "Após conceder um desconto de 20% sobre o preço de tabela, uma empresa decide voltar ao preço original. O aumento que deve ser aplicado sobre o preço com desconto é de",
                  "options": [
                    "20%",
                    "22%",
                    "25%",
                    "30%",
                    "80%"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. O desconto multiplicou por 0,80; para desfazer é preciso o fator INVERSO: 1/0,80 = 1,25, isto é, aumento de 25%. A opção A é a armadilha — subir 20% sobre um valor menor não recupera o que se perdeu: 100 → 80 → 80 × 1,20 = 96, e não 100; já 80 × 1,25 = 100. A intuição que resolve qualquer caso: descer 50% é perder metade, e para voltar é preciso DOBRAR (+100%). Descida e subida nunca têm a mesma taxa, porque a base mudou."
                },
                {
                  "type": "mc",
                  "tag": "Taxa média de crescimento",
                  "text": "O número de acessos a um sistema cresceu 21% ao longo de dois meses. Supondo que o crescimento mensal tenha sido o mesmo nos dois meses, essa taxa mensal foi de",
                  "options": [
                    "10%",
                    "10,5%",
                    "11%",
                    "21%",
                    "42%"
                  ],
                  "answer": 0,
                  "exp": "Gabarito: A. Taxa média não é a taxa do período dividida pelo número de meses: é a taxa que, aplicada duas vezes, dá o mesmo resultado. (1 + i)² = 1,21 → 1 + i = 1,1 → i = 10%. A opção B é o distrator principal (21 ÷ 2 = 10,5%), que ignora que no segundo mês o crescimento incide sobre o valor já crescido — confira: 1,105² = 1,221, ou 22,1%, e não 21%. A D repete a taxa do período e a E a dobra. Atalho: a taxa média é SEMPRE menor que a média aritmética das taxas, então já se sabia que a resposta ficaria abaixo de 10,5%."
                },
                {
                  "type": "mc",
                  "tag": "Regra de três composta",
                  "text": "Quatro servidores processam 600 lotes de dados em 3 horas. Mantido o mesmo desempenho por servidor, o tempo necessário para que 5 servidores processem 1.000 lotes é de",
                  "options": [
                    "3 horas",
                    "3 horas e 30 minutos",
                    "4 horas",
                    "4 horas e 30 minutos",
                    "5 horas"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Pela produtividade unitária, sem montar regra de três: um servidor faz 600 ÷ (4 × 3) = 50 lotes por hora; cinco servidores fazem 250 por hora; 1.000 ÷ 250 = 4 horas. A opção E é de quem tratou servidores e tempo como grandezas diretas em algum passo. Note que o trabalho cresceu 66,7% (de 600 para 1.000) e a equipe só 25% (de 4 para 5), então o tempo TINHA de subir — o que já elimina a A de saída."
                },
                {
                  "type": "mc",
                  "tag": "Média ponderada",
                  "text": "Em uma avaliação, a nota final é a média ponderada de três provas, com pesos 2, 3 e 5, respectivamente. Um candidato obteve 6,0 na primeira e 7,0 na segunda. A menor nota que ele precisa obter na terceira prova para alcançar nota final 7,0 é",
                  "options": [
                    "7,0",
                    "7,2",
                    "7,4",
                    "7,5",
                    "8,0"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Os pesos somam 2 + 3 + 5 = 10, então nota final 7,0 equivale a soma ponderada 70: 6×2 + 7×3 + 5x ≥ 70 → 12 + 21 + 5x ≥ 70 → 5x ≥ 37 → x ≥ 7,4. A opção A é o erro de quem calcula a média simples das notas em vez da ponderada. Repare no atalho: trabalhar com a SOMA (70) em vez da média (7,0) deixa a conta em números inteiros — é o mesmo movimento que a questão 26 da prova real exigia."
                },
                {
                  "type": "mc",
                  "tag": "Média de médias",
                  "text": "Em um mutirão de atendimento, a equipe A tem 10 atendentes, que resolveram em média 6 chamados cada, e a equipe B tem 40 atendentes, que resolveram em média 8 chamados cada. A média de chamados resolvidos por atendente, considerando as duas equipes, é",
                  "options": [
                    "7,0",
                    "7,2",
                    "7,5",
                    "7,6",
                    "8,0"
                  ],
                  "answer": 3,
                  "exp": "Gabarito: D. As equipes têm tamanhos diferentes, então a média geral é ponderada pelo número de atendentes — e o caminho seguro é voltar aos totais: 10 × 6 = 60 chamados, 40 × 8 = 320, total 380 em 50 atendentes → 380/50 = 7,6. A opção A é a média das médias, que só valeria se as duas equipes tivessem o MESMO número de pessoas. Como a equipe maior é justamente a de melhor desempenho, o resultado tinha de ficar perto de 8, não no meio do caminho."
                },
                {
                  "type": "mc",
                  "tag": "Juros simples",
                  "text": "Um capital de R$ 4.000,00 foi aplicado a juros simples, à taxa de 1,5% ao mês, durante 8 meses. Os juros produzidos nesse período foram de",
                  "options": [
                    "R$ 400,00",
                    "R$ 450,00",
                    "R$ 480,00",
                    "R$ 520,00",
                    "R$ 600,00"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. J = C · i · t = 4.000 × 0,015 × 8 = 480. Duas fontes de erro que a banca explora: a taxa entra em DECIMAL (1,5% = 0,015, não 1,5) e o tempo precisa estar na mesma unidade da taxa — aqui ambos estão em meses, sem conversão. Se a questão pedisse o montante, seria 4.000 + 480 = 4.480."
                },
                {
                  "type": "mc",
                  "tag": "Contagem de pares",
                  "text": "Em uma reunião, cada participante cumprimentou cada um dos demais exatamente uma vez, totalizando 45 cumprimentos. O número de participantes da reunião era",
                  "options": [
                    "9",
                    "10",
                    "12",
                    "15",
                    "45"
                  ],
                  "answer": 1,
                  "exp": "Gabarito: B. Cada par se cumprimenta uma vez, então o total é C(n,2) = n(n−1)/2 = 45 → n(n−1) = 90. Em vez de montar equação de segundo grau, procure dois inteiros consecutivos cujo produto seja 90: 10 × 9. Logo n = 10. A opção E confunde o número de cumprimentos com o de participantes. Reconheça o padrão — estradas entre cidades, apertos de mão, partidas de turno único, cabos entre servidores: é sempre n(n−1)/2, e foi assim que a FGV montou a questão 29 de 2024."
                },
                {
                  "type": "mc",
                  "tag": "Identidade algébrica",
                  "text": "A soma de dois números é 10 e a soma de seus quadrados é 58. O produto desses dois números é",
                  "options": [
                    "16",
                    "18",
                    "21",
                    "24",
                    "42"
                  ],
                  "answer": 2,
                  "exp": "Gabarito: C. Pela identidade (a + b)² = a² + 2ab + b²: 10² = 58 + 2ab → 100 − 58 = 2ab → ab = 21. A opção E é 100 − 58 sem dividir por 2, o esquecimento mais comum. Não é preciso descobrir os números (são 3 e 7): quando o enunciado dá a soma e a soma dos quadrados, ele já deu o produto — tentar resolver o sistema completo só gasta tempo. Foi o mecanismo da questão 27 de 2024, lá com a diferença: (x − y)² = 2(x² + y²) − (x + y)²."
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
                "oQueCai": "Identificar sujeito, objeto direto/indireto, predicativo, adjunto e complemento nominal. Pré-requisito direto de concordância e regência.",
                "materiaId": "termos-oracao"
              },
              {
                "id": "pt-periodo",
                "nome": "Coordenação e subordinação (período composto)",
                "prioridade": "media",
                "esforco": 3,
                "oQueCai": "Classificar orações (substantivas, adjetivas, adverbiais) e reconhecer a relação de sentido. FGV cobra junto com pontuação e reescrita.",
                "materiaId": "periodo-composto"
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
                "oQueCai": "Casos obrigatórios, proibidos e facultativos; ‘à distância’, ‘à moda de’, pronomes, nomes de lugar. Item de altíssima frequência e fácil de blindar.",
                "materiaId": "crase"
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
                "oQueCai": "‘Todo’, ‘algum’, ‘nenhum’ e suas negações, com diagramas de Venn. Pega candidato que responde pelo senso comum.",
                "materiaId": "diagramas-quantificadores"
              },
              {
                "id": "rl-primeira-ordem",
                "nome": "Lógica de primeira ordem",
                "prioridade": "media",
                "esforco": 1,
                "oQueCai": "Quantificadores universal e existencial aplicados a predicados. Recorte explícito do edital, cobrança leve.",
                "materiaId": "diagramas-quantificadores"
              },
              {
                "id": "rl-aritmeticos",
                "nome": "Problemas aritméticos",
                "prioridade": "alta",
                "esforco": 3,
                "oQueCai": "Porcentagem, razão e proporção, regra de três, média, juros simples e problemas de raciocínio numérico. É o que mais cai dentro de ‘problemas’.",
                "materiaId": "problemas-aritmeticos"
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
