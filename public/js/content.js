// ============================================================
//  Conteúdo — Estudos DataPrev
//  Assunto -> Matéria -> (resumo + flashcards + simulados)
//
//  Cada MATÉRIA tem:
//   - resumo:     [ { titulo, html } ]   -> material de estudo
//   - flashcards: [ { tema, pergunta, resposta } ]
//   - simulados:  [ { id, nome, descricao, nivel, questoes:[...] } ]
//
//  Cada QUESTÃO: type ("ce" ou "mc"), tag, text, options, answer, exp.
//   - answer é o ÍNDICE (posição, começando em 0) da alternativa correta.
// ============================================================

window.CONTENT = {
  assuntos: [
    {
      id: "legislacao",
      nome: "Legislação",
      icon: "ti-gavel",
      descricao: "Segurança da Informação e Proteção de Dados: LGPD, LAI, Marco Civil e Delitos Informáticos (recorte do edital DataPrev/FGV).",
      materias: [
        {
          id: "lgpd",
          nome: "LGPD — Lei nº 13.709/2018",
          icon: "ti-shield-lock",
          descricao: "Lei Geral de Proteção de Dados Pessoais. Protege liberdade e privacidade no tratamento de dados pessoais.",
          resumo: [
            {
              titulo: "O que é e por que surgiu",
              html: `
                <p><b>O que é.</b> A LGPD define como os dados pessoais — qualquer informação que identifique uma pessoa: nome, CPF, e-mail, telefone, localização, histórico de navegação, hábitos de compra — podem ser coletados, usados, guardados e compartilhados por empresas e órgãos públicos. Em uma frase: ela devolve ao cidadão o controle sobre as próprias informações e impõe regras a quem as utiliza.</p>
                <p><b>Por que surgiu.</b> Com a internet e a economia digital, os dados pessoais viraram um ativo valioso (o "novo petróleo"). Empresas passaram a coletar e negociar informações em larga escala, muitas vezes sem o cidadão saber ou consentir. No Brasil, a proteção era esparsa (regras soltas no CDC, no Marco Civil etc.). Escândalos como o caso Cambridge Analytica (2018) escancararam a necessidade de regras claras.</p>
                <p><b>De onde veio.</b> Foi fortemente inspirada no GDPR europeu (em vigor desde 2018). Isso também permite ao Brasil trocar dados com países que exigem nível equivalente de proteção.</p>
                <p><b>Linha do tempo.</b> Sancionada em 2018, entrou em vigor em setembro de 2020, e as sanções passaram a valer em agosto de 2021.</p>
                <p><b>O espírito da lei.</b> Equilibrar o direito à privacidade e o desenvolvimento econômico e tecnológico. A LGPD não proíbe usar dados — permite, desde que com base legal, finalidade definida, transparência e responsabilidade.</p>
              `
            },
            {
              titulo: "Os personagens da LGPD — exemplo da Loja X",
              html: `
                <p>Você compra no site da "Loja X" e informa nome, CPF e endereço. Cada personagem tem um papel:</p>
                <div class="defs">
                  <div class="def"><span class="def-t">Titular = você</span> A pessoa de quem são os dados; a dona da informação.</div>
                  <div class="def"><span class="def-t">Controlador = a Loja X</span> Quem decide por que e como usar seus dados. É o "cérebro" do tratamento e responde pelas decisões.</div>
                  <div class="def"><span class="def-t">Operador = terceiro contratado</span> Empresa que só executa ordens do controlador (ex.: e-mail marketing, servidor de nuvem). Trata dados em nome do controlador, sem decidir nada sozinho.</div>
                  <div class="def"><span class="def-t">Encarregado (DPO) = o contato de privacidade</span> Pessoa/setor indicado pela própria empresa para ser a ponte de comunicação. <b>Não é do governo.</b></div>
                  <div class="def"><span class="def-t">ANPD = o governo</span> Órgão público federal que fiscaliza e pune quem descumpre a LGPD. Fala com a empresa através do encarregado.</div>
                </div>
                <div class="mnemonic"><i class="ti ti-bulb"></i> Controlador <b>decide</b> · Operador <b>executa</b> · Encarregado é a <b>ponte</b>. Detalhe de prova: controlador e operador são os "agentes de tratamento"; o encarregado NÃO é agente de tratamento.</div>
              `
            },
            {
              titulo: "Conceitos que a FGV adora",
              html: `
                <p><b>Dado pessoal sensível:</b> origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético ou biométrico.</p>
                <p><b>Dado anonimizado</b> em regra não é dado pessoal — salvo se a anonimização puder ser revertida com esforços razoáveis.</p>
                <p><b>A LGPD não se aplica a:</b> uso exclusivamente particular; fins jornalísticos, artísticos ou acadêmicos; segurança pública, defesa nacional e investigação/repressão penal.</p>
              `
            },
            {
              titulo: "Bases legais (art. 7º) — 10 hipóteses",
              html: `
                <p>O <b>consentimento é só UMA</b> delas. As outras nove: obrigação legal; políticas públicas; estudos por órgão de pesquisa; execução de contrato; exercício de direitos em processo; proteção da vida; tutela da saúde; legítimo interesse; proteção do crédito.</p>
                <div class="destaque"><b>Pegadinha clássica:</b> o "legítimo interesse" vale só para dados comuns (art. 7º). Dados <b>sensíveis</b> têm lista própria e mais restrita (art. 11) — e ali NÃO cabe legítimo interesse.</div>
              `
            },
            {
              titulo: "Princípios (art. 6º) e direitos do titular (art. 18)",
              html: `
                <p><b>Princípios (art. 6º):</b> finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas (além da boa-fé).</p>
                <p><b>Direitos do titular (art. 18):</b> confirmação de tratamento, acesso, correção, anonimização/bloqueio/eliminação, portabilidade, eliminação dos dados tratados com consentimento, informação sobre compartilhamento e revogação do consentimento.</p>
              `
            },
            {
              titulo: "Sanções (art. 52) e ANPD",
              html: `
                <p><b>Multa simples:</b> até 2% do faturamento da empresa/grupo no Brasil, limitada a R$ 50 milhões por infração. Também há advertência, multa diária, publicização, bloqueio e eliminação dos dados.</p>
                <p><b>ANPD:</b> autoridade que zela, implementa e fiscaliza a LGPD. Incidente de segurança relevante deve ser comunicado à ANPD e ao titular.</p>
              `
            }
          ],
          flashcards: [
            { tema: "LGPD", pergunta: "O que é a LGPD, em uma frase?", resposta: "A lei que regula como dados pessoais podem ser coletados, usados, armazenados e compartilhados por empresas e órgãos públicos, devolvendo ao cidadão o controle sobre as próprias informações." },
            { tema: "LGPD", pergunta: "Por que a LGPD surgiu?", resposta: "Porque, na economia digital, dados pessoais viraram um ativo valioso e passaram a ser usados sem transparência; faltava no Brasil uma lei geral. Foi inspirada no GDPR europeu e impulsionada por casos como Cambridge Analytica (2018)." },
            { tema: "LGPD", pergunta: "A LGPD se aplica a quê?", resposta: "A qualquer tratamento de dados pessoais, por pessoa natural ou jurídica, de direito público ou privado, em meio físico ou digital, para proteger os direitos de liberdade e privacidade." },
            { tema: "LGPD", pergunta: "Em que casos a LGPD NÃO se aplica?", resposta: "Fins exclusivamente particulares; fins jornalísticos, artísticos ou acadêmicos; e segurança pública, defesa nacional, segurança do Estado e investigação/repressão penal." },
            { tema: "LGPD", pergunta: "O que é dado pessoal sensível?", resposta: "Dado sobre origem racial/étnica, convicção religiosa, opinião política, filiação sindical ou a organização religiosa/filosófica/política, saúde ou vida sexual, dado genético ou biométrico." },
            { tema: "LGPD", pergunta: "Diferença entre controlador e operador.", resposta: "Controlador toma as decisões sobre o tratamento; operador realiza o tratamento em nome do controlador." },
            { tema: "LGPD", pergunta: "Quem é o encarregado (DPO)?", resposta: "Pessoa indicada pelo controlador/operador para ser o canal de comunicação entre o controlador, os titulares e a ANPD." },
            { tema: "LGPD", pergunta: "O encarregado (DPO) é órgão do governo?", resposta: "Não. É indicado pela própria empresa (controlador) e trabalha para ela. Quem é do governo é a ANPD, que fiscaliza." },
            { tema: "LGPD", pergunta: "Quem são os 'agentes de tratamento'?", resposta: "O controlador e o operador. O encarregado NÃO é agente de tratamento — ele apenas faz a comunicação." },
            { tema: "LGPD", pergunta: "O consentimento é a única base legal para tratar dados?", resposta: "Não. Existem 10 hipóteses legais (art. 7º); o consentimento é apenas uma delas." },
            { tema: "LGPD", pergunta: "Cite 5 das 10 bases legais (art. 7º).", resposta: "Consentimento; obrigação legal; políticas públicas; execução de contrato; legítimo interesse. (Demais: estudos por órgão de pesquisa, exercício de direitos em processo, proteção da vida, tutela da saúde, proteção do crédito.)" },
            { tema: "LGPD", pergunta: "Quais são os princípios da LGPD (art. 6º)?", resposta: "Finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas (além da boa-fé)." },
            { tema: "LGPD", pergunta: "O que exige o tratamento de dados de crianças e adolescentes?", resposta: "Consentimento específico e em destaque de pelo menos um dos pais ou responsável, sempre no melhor interesse da criança/adolescente." },
            { tema: "LGPD", pergunta: "Cite direitos do titular (art. 18).", resposta: "Confirmação de tratamento; acesso; correção; anonimização/bloqueio/eliminação; portabilidade; eliminação dos dados tratados com consentimento; informação sobre compartilhamento; e revogação do consentimento." },
            { tema: "LGPD", pergunta: "Qual a multa simples do art. 52?", resposta: "Até 2% do faturamento no Brasil no último exercício (excluídos tributos), limitada a R$ 50 milhões por infração." },
            { tema: "LGPD", pergunta: "O que é a ANPD?", resposta: "Autoridade Nacional de Proteção de Dados — órgão responsável por zelar, implementar e fiscalizar o cumprimento da LGPD." },
            { tema: "LGPD", pergunta: "O que fazer diante de incidente de segurança relevante?", resposta: "Comunicar à ANPD e ao titular a ocorrência do incidente que possa acarretar risco ou dano relevante." },
            { tema: "LGPD", pergunta: "Dado anonimizado é dado pessoal?", resposta: "Em regra, não — pois não permite identificar o titular. Exceção: se a anonimização puder ser revertida ou permitir reidentificação com esforços razoáveis." }
          ],
          simulados: [
            {
              id: "lgpd-01",
              nome: "Conceitos, personagens e bases legais",
              descricao: "Definições do art. 5º, agentes de tratamento e bases legais dos arts. 7º e 11.",
              nivel: "Introdutório",
              questoes: [
                { type: "ce", tag: "Conceito · art. 5º, II", text: "Dado pessoal sensível é aquele sobre origem racial ou étnica, convicção religiosa, opinião política, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.", options: ["Certo", "Errado"], answer: 0, exp: "Certo. É a definição literal do art. 5º, II. A chave é a natureza do dado (o que ele revela) — e ele só é 'pessoal' sensível quando vinculado a uma pessoa natural." },
                { type: "ce", tag: "Personagens · art. 5º, VIII e art. 41", text: "O encarregado (DPO) é um agente público nomeado pela ANPD para fiscalizar as empresas.", options: ["Certo", "Errado"], answer: 1, exp: "Errado. O encarregado é indicado pelo próprio controlador/operador (é da empresa, não do governo). Ele atua como canal de comunicação entre o controlador, os titulares e a ANPD. Quem fiscaliza é a ANPD." },
                { type: "ce", tag: "Conceito · art. 5º, III e art. 12", text: "A anonimização, uma vez feita, é sempre irreversível: dados anonimizados nunca voltam a ser considerados dados pessoais.", options: ["Certo", "Errado"], answer: 1, exp: "Errado. Se a anonimização puder ser revertida com meios próprios ou razoáveis, o dado volta a ser dado pessoal (art. 12). 'Sempre' e 'nunca' costumam ser pegadinha." },
                { type: "ce", tag: "Bases legais · art. 7º", text: "O consentimento é a única base legal que autoriza o tratamento de dados pessoais na LGPD.", options: ["Certo", "Errado"], answer: 1, exp: "Errado. O art. 7º traz 10 hipóteses (bases legais). O consentimento é só uma delas — há também obrigação legal, execução de contrato, legítimo interesse, proteção do crédito, etc." },
                { type: "ce", tag: "Personagens · art. 5º, XIX e art. 55-J", text: "A ANPD é o órgão responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional.", options: ["Certo", "Errado"], answer: 0, exp: "Certo. A Autoridade Nacional de Proteção de Dados é o órgão do governo que zela, fiscaliza e aplica sanções. É o único 'personagem' público da cadeia." },
                { type: "ce", tag: "Personagens · art. 5º, VI e VII", text: "Controlador e operador são sempre a mesma pessoa jurídica dentro de uma organização.", options: ["Certo", "Errado"], answer: 1, exp: "Errado. O controlador decide sobre o tratamento (o 'dono' da decisão); o operador trata os dados em nome do controlador, seguindo suas instruções. Podem ser entidades distintas." },
                { type: "mc", tag: "Conceito · art. 5º, X", text: "Toda operação realizada com dados pessoais — coleta, produção, classificação, utilização, acesso, armazenamento, eliminação, transferência — é definida pela LGPD como:", options: ["Anonimização", "Tratamento", "Uso compartilhado de dados", "Consentimento", "Compartilhamento"], answer: 1, exp: "Tratamento (art. 5º, X) é o conceito guarda-chuva: qualquer operação com o dado. Anonimização e consentimento são coisas específicas dentro desse universo." },
                { type: "mc", tag: "Personagens · art. 5º, V", text: "A pessoa natural a quem se referem os dados pessoais objeto de tratamento é o:", options: ["Controlador", "Operador", "Titular", "Encarregado", "Agente de tratamento"], answer: 2, exp: "Titular (art. 5º, V). É sempre pessoa natural (física). Controlador e operador são os 'agentes de tratamento'; o encarregado é o canal de comunicação." },
                { type: "mc", tag: "Bases legais · art. 11 (dados sensíveis)", text: "O tratamento de dados pessoais SENSÍVEIS segue hipóteses próprias do art. 11. Qual das opções NÃO é base legal para dados sensíveis?", options: ["Consentimento do titular, de forma específica e destacada", "Cumprimento de obrigação legal ou regulatória pelo controlador", "Tutela da saúde, por profissionais de saúde ou autoridade sanitária", "Legítimo interesse do controlador", "Proteção da vida ou da incolumidade física do titular ou de terceiro"], answer: 3, exp: "Legítimo interesse NÃO vale para dados sensíveis — ele existe só no art. 7º (dados comuns). Essa é a pegadinha clássica: dado sensível tem lista mais restrita." },
                { type: "mc", tag: "Bases legais · art. 7º", text: "São bases legais (hipóteses de tratamento) previstas no art. 7º da LGPD, EXCETO:", options: ["Cumprimento de obrigação legal ou regulatória", "Execução de contrato do qual o titular seja parte", "Proteção do crédito", "Realização de estudos por órgão de pesquisa", "Obtenção do lucro máximo pela empresa controladora"], answer: 4, exp: "'Lucro máximo' não existe na lei — é distrator. As outras quatro estão todas no art. 7º. Lucro pode até vir do 'legítimo interesse', mas isso é outra base, com requisitos próprios." },
                { type: "mc", tag: "Personagens · art. 5º, VI e VII", text: "A Loja X coleta dados de clientes e decide como usá-los; contrata a Empresa Y, que apenas processa a folha de pagamento seguindo as instruções da Loja X. Nessa relação:", options: ["Loja X é operadora e Empresa Y é controladora", "Loja X é controladora e Empresa Y é operadora", "Ambas são controladoras", "Empresa Y é a encarregada", "Loja X é titular dos dados"], answer: 1, exp: "Quem decide é controlador (Loja X); quem executa seguindo instruções é operador (Empresa Y). Titular seriam os clientes." },
                { type: "mc", tag: "Conceito · art. 5º, I", text: "Segundo a LGPD, dado pessoal é:", options: ["Apenas informações como CPF, RG e nome completo", "Informação relacionada a pessoa natural identificada ou identificável", "Qualquer informação, inclusive de pessoas jurídicas", "Somente os dados sensíveis", "Informação que já foi tornada pública"], answer: 1, exp: "Art. 5º, I: informação relacionada a pessoa natural identificada ou identificável. O conceito é amplo (não só CPF/RG) e não abrange pessoa jurídica." }
              ]
            }
          ]
        },

        {
          id: "lai",
          nome: "LAI — Lei nº 12.527/2011",
          icon: "ti-file-search",
          descricao: "Lei de Acesso à Informação. Regra de ouro: o acesso é a regra; o sigilo, a exceção.",
          resumo: [
            {
              titulo: "De onde veio e o espírito da lei",
              html: `
                <p>Nasceu para concretizar o direito constitucional de acesso à informação pública (art. 5º, XXXIII, da CF), obrigando o Estado a ser transparente com o cidadão sobre o que faz e como gasta.</p>
                <div class="mnemonic"><i class="ti ti-bulb"></i> Regra de ouro: <b>acesso é a regra, sigilo é a exceção.</b></div>
              `
            },
            {
              titulo: "Transparência, prazos e sigilo",
              html: `
                <p><b>Transparência ativa</b> (divulgação espontânea, na internet) x <b>passiva</b> (resposta a pedido). O pedido <b>não exige justificativa</b>.</p>
                <p><b>Prazo de resposta:</b> imediato; se não for possível, até 20 dias, prorrogáveis por mais 10.</p>
                <div class="defs">
                  <div class="def"><span class="def-t">Ultrassecreta</span> 25 anos</div>
                  <div class="def"><span class="def-t">Secreta</span> 15 anos</div>
                  <div class="def"><span class="def-t">Reservada</span> 5 anos</div>
                  <div class="def"><span class="def-t">Informações pessoais (intimidade/vida privada)</span> restritas por até 100 anos, independentemente de classificação</div>
                </div>
                <p><b>Decretos:</b> 7.724 regulamenta a LAI no Executivo federal; 7.845 trata de informação classificada e credenciamento de segurança (institui o NSC).</p>
              `
            }
          ],
          flashcards: [
            { tema: "LAI", pergunta: "Qual a regra geral da LAI?", resposta: "O acesso à informação é a regra e o sigilo é a exceção (publicidade como preceito geral)." },
            { tema: "LAI", pergunta: "Diferença entre transparência ativa e passiva.", resposta: "Ativa: divulgação espontânea de informações de interesse coletivo, independentemente de pedido. Passiva: fornecimento em resposta a solicitação do cidadão." },
            { tema: "LAI", pergunta: "O pedido de acesso à informação precisa de justificativa?", resposta: "Não. É vedado exigir os motivos do pedido de acesso." },
            { tema: "LAI", pergunta: "Prazo para resposta ao pedido de acesso.", resposta: "Imediato, se disponível; caso contrário, até 20 dias, prorrogáveis por mais 10 mediante justificativa." },
            { tema: "LAI", pergunta: "Graus de sigilo e prazos de classificação.", resposta: "Ultrassecreta: 25 anos; Secreta: 15 anos; Reservada: 5 anos." },
            { tema: "LAI", pergunta: "Por quanto tempo ficam restritas as informações pessoais (intimidade/vida privada)?", resposta: "Até 100 anos, independentemente de classificação." },
            { tema: "LAI", pergunta: "O que regulam os Decretos 7.724/2012 e 7.845/2012?", resposta: "O 7.724 regulamenta a LAI no Poder Executivo federal; o 7.845 trata do credenciamento de segurança e do tratamento de informação classificada (institui o NSC)." }
          ],
          simulados: []
        },

        {
          id: "marco-civil",
          nome: "Marco Civil da Internet — Lei nº 12.965/2014",
          icon: "ti-world-www",
          descricao: "A 'constituição da internet' brasileira: princípios, direitos e deveres no uso da rede.",
          resumo: [
            {
              titulo: "De onde veio",
              html: `
                <p>É a "constituição da internet" brasileira (2014), criada para garantir direitos dos usuários e regras claras — neutralidade de rede, privacidade e liberdade de expressão — num ambiente que até então não tinha lei própria.</p>
              `
            },
            {
              titulo: "Pontos que mais caem",
              html: `
                <p><b>Neutralidade de rede (art. 9º):</b> tratar todos os pacotes de forma isonômica, sem distinção por conteúdo, origem, destino, serviço, terminal ou aplicação.</p>
                <div class="defs">
                  <div class="def"><span class="def-t">Registros de conexão</span> guarda por 1 ano (provedor de conexão, art. 13)</div>
                  <div class="def"><span class="def-t">Registros de acesso a aplicações</span> guarda por 6 meses (provedor de aplicações, art. 15)</div>
                </div>
                <p><b>Responsabilidade (art. 19):</b> em regra, o provedor de aplicações só responde por conteúdo de terceiro se, após ordem judicial específica, não o remover.</p>
                <div class="destaque"><i class="ti ti-alert-triangle"></i> <b>Atenção:</b> o regime do art. 19 foi objeto de decisão do STF em 2025 — confira o entendimento mais recente antes da prova.</div>
                <p><b>Direitos do usuário (art. 7º):</b> inviolabilidade da intimidade e vida privada; sigilo das comunicações (salvo ordem judicial); não suspensão da conexão salvo débito; informações claras nos contratos; não repasse de dados a terceiros sem consentimento.</p>
              `
            }
          ],
          flashcards: [
            { tema: "Marco Civil", pergunta: "O que é o Marco Civil da Internet?", resposta: "Lei 12.965/2014 — estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil." },
            { tema: "Marco Civil", pergunta: "O que é neutralidade de rede (art. 9º)?", resposta: "O responsável pela transmissão deve tratar de forma isonômica todos os pacotes de dados, sem distinção por conteúdo, origem, destino, serviço, terminal ou aplicação." },
            { tema: "Marco Civil", pergunta: "Prazo de guarda dos registros de CONEXÃO.", resposta: "1 ano, sob sigilo, mantido pelo provedor de conexão (art. 13)." },
            { tema: "Marco Civil", pergunta: "Prazo de guarda dos registros de ACESSO A APLICAÇÕES.", resposta: "6 meses, mantido pelo provedor de aplicações (art. 15)." },
            { tema: "Marco Civil", pergunta: "Quando o provedor de aplicações responde por conteúdo de terceiro (art. 19)?", resposta: "Em regra, só se, após ordem judicial específica, não remover o conteúdo. (Atenção: o art. 19 foi objeto de decisão do STF em 2025 — confira o entendimento atual.)" },
            { tema: "Marco Civil", pergunta: "Cite direitos do usuário (art. 7º).", resposta: "Inviolabilidade da intimidade e vida privada; sigilo das comunicações (salvo ordem judicial); não suspensão da conexão salvo débito; informações claras nos contratos; não repasse de dados a terceiros sem consentimento." }
          ],
          simulados: []
        },

        {
          id: "delitos-informaticos",
          nome: "Lei de Delitos Informáticos — Lei nº 12.737/2012",
          icon: "ti-lock-access",
          descricao: "A 'Lei Carolina Dieckmann'. Criou o crime de invasão de dispositivo informático (art. 154-A do CP).",
          resumo: [
            {
              titulo: "De onde veio",
              html: `
                <p>Surgiu após o vazamento de fotos íntimas da atriz Carolina Dieckmann (2012), quando se percebeu que não havia crime específico para punir a invasão de dispositivos e o roubo de dados. O art. 2º inseriu os arts. 154-A e 154-B no Código Penal (e alterou o 266 e o 298).</p>
              `
            },
            {
              titulo: "O crime e a ação penal",
              html: `
                <p><b>Art. 154-A (caput):</b> invadir dispositivo informático alheio, conectado ou não à rede, com o fim de obter, adulterar ou destruir dados sem autorização, ou instalar vulnerabilidades para obter vantagem ilícita. <b>Pena:</b> reclusão de 1 a 4 anos e multa (após a Lei 14.155/2021).</p>
                <p><b>Qualificadora (§3º):</b> se resulta obtenção de comunicações privadas, segredos comerciais/industriais, informações sigilosas ou controle remoto não autorizado — reclusão de 2 a 5 anos e multa.</p>
                <p><b>Ação penal (art. 154-B):</b> mediante representação, salvo se cometido contra a administração pública — aí é ação penal pública incondicionada.</p>
              `
            }
          ],
          flashcards: [
            { tema: "Delitos Informáticos", pergunta: "O que a Lei 12.737/2012 (art. 2º) fez no Código Penal?", resposta: "Inseriu os arts. 154-A e 154-B (e alterou o 266 e o 298), criando o crime de invasão de dispositivo informático. É a 'Lei Carolina Dieckmann'." },
            { tema: "Delitos Informáticos", pergunta: "Descreva o crime do art. 154-A.", resposta: "Invadir dispositivo informático alheio, conectado ou não à rede, com o fim de obter, adulterar ou destruir dados sem autorização, ou instalar vulnerabilidades para obter vantagem ilícita." },
            { tema: "Delitos Informáticos", pergunta: "Pena atual do caput do art. 154-A.", resposta: "Reclusão de 1 a 4 anos e multa (após a Lei 14.155/2021; antes era detenção de 3 meses a 1 ano)." },
            { tema: "Delitos Informáticos", pergunta: "Qualificadora do §3º do art. 154-A.", resposta: "Se resulta obtenção de comunicações eletrônicas privadas, segredos comerciais/industriais, informações sigilosas ou controle remoto não autorizado: reclusão de 2 a 5 anos e multa." },
            { tema: "Delitos Informáticos", pergunta: "Como se procede a ação penal (art. 154-B)?", resposta: "Mediante representação, salvo se o crime for cometido contra a administração pública — nesse caso, ação penal pública incondicionada." }
          ],
          simulados: []
        }
      ]
    }
  ]
};
