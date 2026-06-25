const SVG_WIDTH = 1440;
const SVG_HEIGHT = 980;
const startNode = {
  id: "start-00",
  label: "00 - início",
  mark: "00",
  position: { desktop: [88, 118], mobile: [690, 96] }
};

const introductionContent = {
  title: "Ponto de Partida",
  subtitle: "Planejamento pessoal, direção profissional e investigação de sentido.",
  meta: [
    "00 Início",
    "Planejamento pessoal / direção profissional",
    "Status: em investigação"
  ],
  index: [
    "Revisar o percurso",
    "Observar o que move",
    "Identificar potências",
    "Testar possibilidades",
    "Definir próximos passos"
  ],
  opening: [
    "Este projeto parte de uma pausa. Depois de quatro anos estudando e produzindo dentro do Design, surgiu a necessidade de olhar para o percurso com mais honestidade: entender o que foi construído, o que perdeu força e o que ainda faz sentido continuar desenvolvendo.",
    "A minha inserção no mercado também diminuiu parte da motivação que eu tinha com o Design. Isso não significa que esse período foi perdido ou que eu desgosto do que fiz. Pelo contrário: foi dentro dele que encontrei práticas que ainda me fazem sentir vivo.",
    "Vídeo, roupa, editorial e direção visual foram alguns dos projetos que mostraram onde existe interesse real. A partir deles, este planejamento deixa de ser apenas uma projeção de carreira e passa a ser uma investigação sobre como transformar vontade, repertório e experiência em uma vida profissional possível."
  ],
  searchItems: [
    ["Repertório", "O que foi construído ao longo dos últimos quatro anos."],
    ["Energia", "Quais processos ainda despertam interesse, presença e vontade de continuar."],
    ["Competência", "Quais capacidades já existem e podem ser aprofundadas."],
    ["Possibilidade", "Quais caminhos profissionais podem sustentar uma atuação mais coerente."],
    ["Direção", "Como transformar essas observações em decisões e próximos testes."]
  ]
};

const introductionPdfPages = [
  {
    index: "01 / 04",
    title: "CENÁRIO INICIAL",
    image: "assets/introduction-pages/introducao-page-01.png",
    pdf: "assets/introducao.pdf"
  },
  {
    index: "02 / 04",
    title: "O QUE MOTIVOU ESSE PROJETO?",
    image: "assets/introduction-pages/introducao-page-02.png",
    pdf: "assets/introducao.pdf"
  },
  {
    index: "03 / 04",
    title: "NAMING — Δf",
    image: "assets/introduction-pages/introducao-page-03.png",
    pdf: "assets/introducao.pdf"
  },
  {
    index: "04 / 04",
    title: "O QUE EU DESEJO COM ESTE PROJETO?",
    image: "assets/introduction-pages/introducao-page-04.png",
    pdf: "assets/introducao.pdf"
  }
];

const labelPositions = {
  "start-00": "top",
  "year-01-goal-01": "top",
  "year-01-goal-02": "bottom",
  "year-01-goal-03": "top",
  "year-01": "top",
  "year-02-goal-01": "left",
  "year-02-goal-02": "right",
  "year-02-goal-03": "left",
  "year-02": "bottom",
  "year-03-goal-01": "bottom",
  "year-03-goal-02": "top",
  "year-03-goal-03": "top",
  "year-03": "top",
  "year-04-goal-01": "bottom",
  "year-04-goal-02": "top",
  "year-04-goal-03": "bottom",
  "year-04": "top"
};

const nystagmusStoreLabels = {
  shop: "LOJA",
  archive: "ARQUIVO",
  about: "SOBRE",
  search: "BUSCAR",
  cart: "SACOLA",
  home: "INÍCIO",
  newArrivals: "NOVIDADES",
  filters: "FILTROS",
  backToShop: "VOLTAR PARA A LOJA",
  size: "TAMANHO",
  addToCart: "ADICIONAR À SACOLA —",
  viewCollection: "VER COLEÇÃO →",
  soldOut: "ESGOTADO",
  available: "DISPONÍVEL"
};

const meta01Content = {
  id: "year-01-goal-01",
  name: "Desenvolver o primeiro drop da Nystagmus",
  shortDescription: "Criar e lançar a primeira cápsula da Nystagmus, estabelecendo sua linguagem visual, produto e universo criativo.",
  meta: ["Meta 01", "Ano 01", "Nystagmus"],
  title: "Desenvolver o primeiro drop da Nystagmus",
  summary: "Construir o primeiro lançamento da marca e colocá-lo no ar, definindo uma base estética, conceitual e estratégica para a identidade da Nystagmus.",
  description: [
    "A Meta 01 marca o início concreto da Nystagmus no mercado.",
    "O foco desta etapa é desenvolver o primeiro drop da marca de maneira mais contida, precisa e intencional, criando um lançamento inicial capaz de apresentar seu universo visual e emocional sem tentar dizer tudo de uma vez.",
    "Esse primeiro lançamento deve funcionar como uma introdução ao sentimento Nystagmus — uma primeira cápsula de identidade, tensão e linguagem.",
    "A proposta é construir uma seleção enxuta de peças, composta por um casaco, uma blusa e uma bota, com atenção especial à coerência estética entre produto, styling, direção visual e narrativa da marca.",
    "Mais do que apenas lançar roupas, esta meta busca estabelecer a atmosfera da Nystagmus: uma identidade autoral, emocionalmente carregada e visualmente densa, explorando referências de uma estética russa/comunista de forma reinterpretada, sensível e contemporânea.",
    "O objetivo final é colocar esse primeiro drop no ar com clareza, consistência e força conceitual, criando uma base real para os próximos passos da marca."
  ],
  sections: [
    {
      title: "Objetivo",
      body: "Desenvolver e lançar o primeiro drop da Nystagmus, criando uma base sólida para a identidade da marca e tornando seu universo inicial visível ao público."
    },
    {
      title: "Escopo do primeiro drop",
      items: ["01 casaco", "01 blusa", "01 bota"],
      body: "Essas peças devem funcionar como um conjunto inicial, revelando a direção estética e emocional da marca."
    },
    {
      title: "Direção criativa",
      items: [
        "encapsular o sentimento Nystagmus",
        "explorar tensão, densidade e identidade",
        "construir um lançamento mais contido e preciso",
        "desenvolver uma estética com referência russa/comunista",
        "traduzir essas referências de forma autoral e contemporânea",
        "iniciar a construção simbólica da marca"
      ]
    },
    {
      title: "Resultado esperado",
      body: "Ao final desta meta, a Nystagmus deve ter seu primeiro drop desenvolvido e publicado, com peças definidas, linguagem visual estabelecida e presença inicial pronta para apresentação ao público."
    }
  ],
  preview: "Preview em desenvolvimento. Aqui será apresentada a prévia visual da página de vendas do primeiro drop.",
  previewLogo: "assets/tcc/Meta%201/nn-logo.jpg",
  previewProducts: [
    {
      id: "bekesha",
      name: "LEATHER BRIM BEKESHA",
      price: "$1000",
      category: "PRIMEIRO DROP / AGASALHOS",
      description: "BEKESHA ESTRUTURADA COM DETALHES DE ABA EM COURO. DESENVOLVIDA COMO PARTE DO PRIMEIRO DROP DA NYSTAGMUS. INSPIRADA EM ESTÉTICAS MILITARES RUSSAS E COMUNISTAS, COM SILHUETA PESADA, CONSTRUÇÃO AUTORAL E UMA LINGUAGEM VISUAL CONTIDA, MAS AGRESSIVA.",
      listingImage: "assets/tcc/Meta%201/Front-face-site01.png",
      gallery: [
        "assets/tcc/Meta%201/Front-view-photo.png",
        "assets/tcc/Meta%201/Back-view-photo.png",
        "assets/tcc/Meta%201/front-photo.png",
        "assets/tcc/Meta%201/closer-photo.png",
        "assets/tcc/Meta%201/Sided-photo.png"
      ]
    },
    {
      id: "boots",
      name: "NYSTAGMUS LEATHER BOOTS",
      price: "$1200",
      category: "PRIMEIRO DROP / CALÇADOS",
      description: "BOTAS PESADAS DE COURO DESENVOLVIDAS COMO PARTE DO PRIMEIRO DROP DA NYSTAGMUS. CONSTRUÍDAS COM SILHUETA ESTRUTURAL, ACABAMENTO BRUTO E UMA PRESENÇA MILITAR FRIA INSPIRADA EM REFERÊNCIAS VISUAIS RUSSAS E PÓS-SOVIÉTICAS.",
      listingImage: "assets/tcc/Meta%201/Front-face-site02.png",
      gallery: [
        "assets/tcc/Meta%201/Side-view-photo02.png",
        "assets/tcc/Meta%201/Front-view%20photo02.png",
        "assets/tcc/Meta%201/Front-photo02.png",
        "assets/tcc/Meta%201/closer-photo02.png",
        "assets/tcc/Meta%201/sided-photo02.png"
      ]
    }
  ]
};

const meta03ReleaseData = {
  artistName: "Eduardo Silveira",
  trackTitle: "T\u00edtulo em desenvolvimento",
  releaseYear: "2026",
  runtime: "04:00",
  format: "Visualizer / Music Video Release",
  status: "Lan\u00e7ada",
  roles: ["Edi\u00e7\u00e3o", "Coloriza\u00e7\u00e3o"],
  deliverables: ["Visualizer", "Instagram Teaser", "Clipe"],
  location: "Curitiba, BR",
  visualizerVideoSrc: "assets/tcc/Meta%203/visualizer-01.mp4",
  teaserVideoSrc: null,
  credits: {
    artist: "Eduardo Silveira",
    authorship: "Eduardo Silveira",
    lyricist: "Eduardo Silveira",
    arrangements: "Leonardo Tows",
    editing: "Fernando Seixas Dias",
    colorization: "Fernando Seixas Dias"
  }
};

const meta09EventDossier = {
  title: "NYSTAGMUS DOUBLE VISION",
  subtitle: "DOSSI\u00ca VISUAL / EVENTO IMERSIVO",
  role: "DIRE\u00c7\u00c3O CRIATIVA",
  credits: "FERNANDO SEIXAS DIAS",
  blocks: [
    {
      id: "01",
      label: "FLYERS",
      shortLabel: "FLYERS",
      title: "CHAMADA P\u00daBLICA",
      kicker: "01 / 07 \u2014 FLYERS",
      description: "PE\u00c7AS PRINCIPAIS DE DIVULGA\u00c7\u00c3O QUE DEFINEM O TOM, A ATMOSFERA E A HIERARQUIA DO EVENTO.",
      format: "PE\u00c7AS GR\u00c1FICAS / VERTICAL E DIGITAL",
      function: "DIVULGA\u00c7\u00c3O / DESEJO / PRIMEIRO CONTATO",
      assets: [
        { id: "01", label: "Flyer 01", src: "assets/tcc/Meta%209/nmus-flyer-01.png" },
        { id: "02", label: "Flyer 02", src: "assets/tcc/Meta%209/nmus-flyer-02.png" },
        { id: "03", label: "Flyer 03", src: "assets/tcc/Meta%209/nmus-flyer-03.png" }
      ]
    },
    {
      id: "02",
      label: "INGRESSOS",
      shortLabel: "INGRESSOS",
      title: "ACESSO \u00c0 EXPERI\u00caNCIA",
      kicker: "02 / 07 \u2014 INGRESSOS",
      description: "INGRESSOS DESDOBRADOS COMO OBJETOS VISUAIS DE ACESSO, CIRCULA\u00c7\u00c3O E RITUAL DE ENTRADA.",
      format: "INGRESSO / DIGITAL E LOCAL",
      function: "ACESSO / CIRCULA\u00c7\u00c3O / CONFIRMA\u00c7\u00c3O",
      assets: [
        { id: "04", label: "Ingresso local", src: "assets/tcc/Meta%209/nmus-ingresso-local-04.png" },
        { id: "05", label: "Ingresso web", src: "assets/tcc/Meta%209/nmus-ingresso-web-05.png" }
      ]
    },
    {
      id: "03",
      label: "BANNERS E SINALIZA\u00c7\u00c3O",
      shortLabel: "BANNERS",
      title: "SINALIZA\u00c7\u00c3O DO AMBIENTE",
      kicker: "03 / 07 \u2014 BANNERS",
      description: "BANNERS E APLICA\u00c7\u00d5ES REFOR\u00c7AM A IDENTIDADE E ORIENTAM O P\u00daBLICO DENTRO DO ESPA\u00c7O.",
      format: "BANNERS / SINALIZA\u00c7\u00c3O / APLICA\u00c7\u00d5ES",
      function: "AMBIENTA\u00c7\u00c3O / ORIENTA\u00c7\u00c3O / PRESEN\u00c7A DE MARCA",
      assets: [
        { id: "06", label: "Banner 06", src: "assets/tcc/Meta%209/nmus-banner-06.png" },
        { id: "07", label: "Banner 07", src: "assets/tcc/Meta%209/nmus-banner-07.png" },
        { id: "08", label: "Banner 08", src: "assets/tcc/Meta%209/nmus-banner-08.png" },
        { id: "09", label: "Banner 09", src: "assets/tcc/Meta%209/nmus-banner-09.png" },
        { id: "10", label: "Banner 10", src: "assets/tcc/Meta%209/nmus-banner-10.png" }
      ]
    },
    {
      id: "04",
      label: "LINE-UP",
      shortLabel: "LINE-UP",
      title: "PRESEN\u00c7AS DA NOITE",
      kicker: "04 / 07 \u2014 LINE-UP",
      description: "ORGANIZA\u00c7\u00c3O EDITORIAL DOS ARTISTAS, DESTAQUES E RITMO DA PROGRAMA\u00c7\u00c3O.",
      format: "LINE-UP / PROGRAMA\u00c7\u00c3O",
      function: "ARTISTAS / DESTAQUES / HOR\u00c1RIOS",
      assets: [
        { id: "12", label: "Line-up", src: "assets/tcc/Meta%209/nmus-lineup-12.png" }
      ]
    },
    {
      id: "05",
      label: "MAPA DO ESPA\u00c7O",
      shortLabel: "MAPA",
      title: "CIRCULA\u00c7\u00c3O E ESPA\u00c7O",
      kicker: "05 / 07 \u2014 MAPA",
      description: "MAPA DO EVENTO COM ENTRADA, PISTA, INSTALA\u00c7\u00d5ES, CONVIV\u00caNCIA E FLUXOS DE CIRCULA\u00c7\u00c3O.",
      format: "MAPA / DIAGRAMA DE CIRCULA\u00c7\u00c3O",
      function: "ENTRADA / PISTA / INSTALA\u00c7\u00d5ES / CONVIV\u00caNCIA",
      assets: [
        { id: "13", label: "Mapa", src: "assets/tcc/Meta%209/nmus-map-13.png" }
      ]
    },
    {
      id: "06",
      label: "EXPERI\u00caNCIA",
      shortLabel: "EXPERI\u00caNCIA",
      title: "A CASA EM ATIVA\u00c7\u00c3O",
      kicker: "06 / 07 \u2014 EXPERI\u00caNCIA",
      description: "SIMULA\u00c7\u00d5ES VISUAIS DA PISTA, INSTALA\u00c7\u00d5ES, CIRCULA\u00c7\u00c3O, LUZ E PRESEN\u00c7A DO P\u00daBLICO.",
      format: "SIMULA\u00c7\u00d5ES / ESPA\u00c7O E EVENTO",
      function: "CASA / PISTA / LUZ / P\u00daBLICO / INSTALA\u00c7\u00d5ES",
      assets: [
        { id: "14", label: "Simula\u00e7\u00e3o 14", src: "assets/tcc/Meta%209/nmus-photos-14.png" },
        { id: "15", label: "Simula\u00e7\u00e3o 15", src: "assets/tcc/Meta%209/nmus-photos-15.png" },
        { id: "16", label: "Simula\u00e7\u00e3o 16", src: "assets/tcc/Meta%209/nmus-photos-16.png" },
        { id: "17", label: "Simula\u00e7\u00e3o 17", src: "assets/tcc/Meta%209/nmus-photos-17.png" },
        { id: "18", label: "Simula\u00e7\u00e3o 18", src: "assets/tcc/Meta%209/nmus-photos-18.png" },
        { id: "19", label: "Simula\u00e7\u00e3o 19", src: "assets/tcc/Meta%209/nmus-photos-19.png" },
        { id: "20", label: "Simula\u00e7\u00e3o 20", src: "assets/tcc/Meta%209/nmus-photos-20.png" }
      ]
    },
    {
      id: "07",
      label: "INSTAGRAM",
      shortLabel: "INSTAGRAM",
      title: "REGISTRO E MEM\u00d3RIA",
      kicker: "07 / 07 \u2014 INSTAGRAM",
      description: "REPRESENTA\u00c7\u00d5ES DO FEED E DA PRESEN\u00c7A DIGITAL CRIADA PARA A DIVULGA\u00c7\u00c3O E O P\u00d3S-EVENTO.",
      format: "INSTAGRAM / FEED DE DIVULGA\u00c7\u00c3O",
      function: "REGISTRO / MEM\u00d3RIA / CONTINUIDADE",
      assets: [
        { id: "21", label: "Instagram 21", src: "assets/tcc/Meta%209/nmus-insta-21.png" },
        { id: "22", label: "Instagram 22", src: "assets/tcc/Meta%209/nmus-insta-22.png" }
      ]
    }
  ]
};

const meta04Projects = [
  {
    id: "01",
    title: "DEVON HENDRIX \u2014 M.U.G.E.N",
    videoSrc: "assets/tcc/Meta%204/preview-3.mp4",
    format: "CLIPE / PROJETO VISUAL",
    roles: ["EDI\u00c7\u00c3O", "PRODU\u00c7\u00c3O VISUAL"],
    status: "CONCLU\u00cdDO",
    description: "Trabalho audiovisual centrado em movimento, ritmo de montagem e constru\u00e7\u00e3o de linguagem visual para lan\u00e7amento musical."
  },
  {
    id: "02",
    title: "M \u2014 STRANGE POP",
    videoSrc: "assets/tcc/Meta%204/preview-1.mp4",
    format: "CLIPE / PROJETO VISUAL",
    roles: ["EDI\u00c7\u00c3O", "PRODU\u00c7\u00c3O VISUAL"],
    status: "CONCLU\u00cdDO",
    description: "Projeto audiovisual independente guiado por montagem musical, ritmo visual e uma linguagem de lan\u00e7amento mais experimental."
  },
  {
    id: "03",
    title: "M \u2014 HOW TO KILL",
    videoSrc: "assets/tcc/Meta%204/preview-2.mp4",
    format: "CLIPE / PROJETO VISUAL",
    roles: ["EDI\u00c7\u00c3O", "PRODU\u00c7\u00c3O VISUAL"],
    status: "CONCLU\u00cdDO",
    description: "Projeto visual musical desenvolvido por meio de edi\u00e7\u00e3o, atmosfera e constru\u00e7\u00e3o de imagem para uma identidade de lan\u00e7amento mais escura."
  }
];

const meta05Campaign = {
  campaignName: "Central de Retorno",
  campaignYear: "2027",
  status: "No ar",
  headline: "Cliente que sai n\u00e3o precisa sumir.",
  supportCopy: "A Frizzar transforma retorno em rotina, organizando lembretes, campanhas e oportunidades para o sal\u00e3o manter sua agenda em movimento.",
  objective: "Transformar a funcionalidade de retorno em uma solu\u00e7\u00e3o clara para sal\u00f5es que precisam reduzir agenda vazia e aumentar recorr\u00eancia.",
  channels: ["Feed", "Stories", "Reels", "WhatsApp", "Produto", "Vendas"],
  system: ["Tela de Produto", "Reels do Instagram", "Posts de Feed", "Stories", "Mensagens de WhatsApp", "Material Interno de Vendas", "Educa\u00e7\u00e3o do Cliente"],
  flow: ["Funcionalidade", "Campanha", "Social + V\u00eddeo + WhatsApp", "Ativa\u00e7\u00e3o de Clientes", "Retorno e Recorr\u00eancia"],
  metrics: [
    ["Alcance", "42,8 mil", 82],
    ["Visitas \u00e0 Funcionalidade", "3,2 mil", 64],
    ["Ativa\u00e7\u00f5es da Campanha", "184", 58],
    ["Retornos Agendados", "96", 46],
    ["Engajamento M\u00e9dio", "8,4%", 74]
  ],
  cards: [
    { id: "01", title: "Feed / Lan\u00e7amento", copy: "Cliente que sai n\u00e3o precisa sumir.", tag: "Feed 1080x1350", tone: "light" },
    { id: "02", title: "Story / Retorno", copy: "Seu cliente volta quando voc\u00ea lembra dele.", tag: "Story 1080x1920", tone: "dark" },
    { id: "03", title: "Reel / Educativo", copy: "Retorno n\u00e3o \u00e9 sorte. \u00c9 sistema.", tag: "Reel", tone: "red" },
    { id: "04", title: "WhatsApp / Campanha", copy: "Seu hor\u00e1rio favorito est\u00e1 livre.", tag: "WhatsApp", tone: "light" },
    { id: "05", title: "Tela de Produto", copy: "Central de Retorno / Painel", tag: "Produto", tone: "light" },
    { id: "06", title: "Material de Vendas", copy: "Reten\u00e7\u00e3o em rotina.", tag: "Vendas", tone: "dark" }
  ],
  timeline: [
    { id: "01", title: "Prepara\u00e7\u00e3o", status: "Conclu\u00edda", body: "Posicionamento do produto, conceito da campanha e kit de lan\u00e7amento." },
    { id: "02", title: "Aquecimento", status: "Conclu\u00edda", body: "Teasers, alinhamento interno e comunica\u00e7\u00e3o inicial." },
    { id: "03", title: "Lan\u00e7amento", status: "Ativa", body: "Lan\u00e7amento da funcionalidade, pe\u00e7a principal e demonstra\u00e7\u00e3o do produto." },
    { id: "04", title: "Ativa\u00e7\u00e3o", status: "Pr\u00f3xima", body: "Reels, stories, mensagens de WhatsApp e educa\u00e7\u00e3o dos clientes." },
    { id: "05", title: "Otimiza\u00e7\u00e3o", status: "Pr\u00f3xima", body: "Ler sinais da campanha, refinar mensagens e reutilizar os materiais com melhor desempenho." }
  ]
};

const meta06Products = [
  {
    id: "casaco-de-volume",
    title: "CASACO DE VOLUME",
    category: "DROP 02 / AGASALHOS",
    price: "$1400",
    frontImage: "assets/tcc/Meta%206/front-view-04.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-04.png",
      "assets/tcc/Meta%206/back-sided-04.png",
      "assets/tcc/Meta%206/closer-view-04.png"
    ],
    description: "OUTERWEAR / CAMADAS ESTRUTURADAS. CASACO DE VOLUME COM SILHUETA AMPLA, SUPERFÍCIE CINZA E CONSTRUÇÃO GRÁFICA DE IMPACTO.",
    status: "DISPONÍVEL"
  },
  {
    id: "camada-tatil",
    title: "CAMADA TÁTIL",
    category: "DROP 02 / PARTE SUPERIOR",
    price: "$620",
    frontImage: "assets/tcc/Meta%206/front-view-08.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-08.png",
      "assets/tcc/Meta%206/back-sided-08.png",
      "assets/tcc/Meta%206/closer-view-08.png"
    ],
    description: "BASE LAYER / TEXTURA E MOVIMENTO. MALHARIA ESCURA COM LISTRAS E ILHOSES, PENSADA COMO CAMADA TÁTIL DO DROP.",
    status: "DISPONÍVEL"
  },
  {
    id: "camisa-estrutural",
    title: "CAMISA ESTRUTURAL",
    category: "DROP 02 / CAMISARIA",
    price: "$760",
    frontImage: "assets/tcc/Meta%206/front-view-03.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-03.png",
      "assets/tcc/Meta%206/back-view-03.png",
      "assets/tcc/Meta%206/closer-view-03.png"
    ],
    description: "CAMISARIA / CORTE AUTORAL BRUTO. CAMISA PRETA AJUSTADA COM FECHAMENTOS METÁLICOS E PRESENÇA GRÁFICA CONTIDA.",
    status: "DISPONÍVEL"
  },
  {
    id: "jaqueta-de-couro",
    title: "JAQUETA DE COURO",
    category: "DROP 02 / COURO",
    price: "$1180",
    frontImage: "assets/tcc/Meta%206/front-view-02.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-02.png",
      "assets/tcc/Meta%206/back-view-02.png",
      "assets/tcc/Meta%206/closer-view-02.png"
    ],
    description: "OUTERWEAR / COURO E PESO VISUAL. JAQUETA PRETA COM CONSTRUÇÃO PESADA, TEXTURA FRIA E ATITUDE MILITAR CONTIDA.",
    status: "DISPONÍVEL"
  },
  {
    id: "camisa-grafica",
    title: "CAMISA GRÁFICA",
    category: "DROP 02 / MALHARIA",
    price: "$690",
    frontImage: "assets/tcc/Meta%206/front-view-05.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-05.png",
      "assets/tcc/Meta%206/back-sided-05.png",
      "assets/tcc/Meta%206/closer-view-05.png"
    ],
    description: "MALHARIA / SUPERFÍCIE GRÁFICA. CAMISA ESCURA COM LISTRAS E RECORTES DE BRILHO COMO BASE VISUAL DO DROP.",
    status: "DISPONÍVEL"
  },
  {
    id: "calca-de-paineis",
    title: "CALÇA DE PAINÉIS",
    category: "DROP 02 / PARTE INFERIOR",
    price: "$860",
    frontImage: "assets/tcc/Meta%206/front-view-06.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-06.png",
      "assets/tcc/Meta%206/back-view-06.png",
      "assets/tcc/Meta%206/closer-view-06.png"
    ],
    description: "ALFAIATARIA URBANA / RECORTES FUNCIONAIS. CALÇA CINZA COM PAINÉIS, CINTURA CONTRASTANTE E DETALHE FRONTAL.",
    status: "DISPONÍVEL"
  },
  {
    id: "acessorio-estrutural",
    title: "ACESSÓRIO ESTRUTURAL",
    category: "DROP 02 / ACESSÓRIOS",
    price: "$420",
    frontImage: "assets/tcc/Meta%206/front-view-07.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-07.png",
      "assets/tcc/Meta%206/back-view-07.png",
      "assets/tcc/Meta%206/closer-view-07.png"
    ],
    description: "ACESSÓRIO / DETALHAMENTO ESTRUTURAL. PEÇA EM COURO COM RECORTE ASSIMÉTRICO, BOTÕES E MARCAÇÕES GRÁFICAS.",
    status: "DISPONÍVEL"
  },
  {
    id: "bota-de-couro",
    title: "BOTA DE COURO",
    category: "DROP 02 / CALÇADOS",
    price: "$1300",
    frontImage: "assets/tcc/Meta%206/sided-view-01.png",
    galleryImages: [
      "assets/tcc/Meta%206/sided-view-01.png",
      "assets/tcc/Meta%206/front-view-01.png",
      "assets/tcc/Meta%206/back-sided-01.png"
    ],
    description: "CALÇADO / SILHUETA LATERAL. BOTA DE COURO PRETA COM BOTÕES, SALTO BAIXO E PRESENÇA ESTRUTURAL FRIA.",
    status: "DISPONÍVEL"
  },
  {
    id: "objeto-de-drop",
    title: "OBJETO DE DROP",
    category: "DROP 02 / OBJETO",
    price: "$360",
    frontImage: "assets/tcc/Meta%206/front-view-09.png",
    galleryImages: [
      "assets/tcc/Meta%206/front-view-09.png",
      "assets/tcc/Meta%206/back-view-09.png",
      "assets/tcc/Meta%206/closer-view-09.png"
    ],
    description: "OBJETO / EXTENSÃO TÁTIL DA MARCA. PEÇA PRETA COM VOLUME, RECORTES E CONSTRUÇÃO DE SUPERFÍCIE AUTORAL.",
    status: "DISPONÍVEL"
  }
];

const meta06Drop = {
  logo: "assets/tcc/Meta%201/nn-logo.jpg",
  landingImages: [
    "assets/tcc/Meta%206/landing-page-01.png",
    "assets/tcc/Meta%206/landing-page-02.png",
    "assets/tcc/Meta%206/landing-page-03.png",
    "assets/tcc/Meta%206/landing-page-04.png"
  ],
  products: meta06Products
};

const meta06Archive = [
  { id: "01", title: "DROP 02 - ARCHIVE FRAME 01", image: "assets/tcc/Meta%206/archive-01.png" },
  { id: "02", title: "DROP 02 - ARCHIVE FRAME 02", image: "assets/tcc/Meta%206/archive-02.png" },
  { id: "03", title: "DROP 02 - ARCHIVE FRAME 03", image: "assets/tcc/Meta%206/archive-03.png" },
  { id: "04", title: "DROP 02 - ARCHIVE FRAME 04", image: "assets/tcc/Meta%206/archive-04.png" },
  { id: "05", title: "DROP 02 - ARCHIVE FRAME 05", image: "assets/tcc/Meta%206/archive-05.png" },
  { id: "06", title: "DROP 02 - ARCHIVE FRAME 06", image: "assets/tcc/Meta%206/archive-06.png" },
  { id: "07", title: "DROP 02 - ARCHIVE FRAME 07", image: "assets/tcc/Meta%206/archive-07.png" },
  { id: "08", title: "DROP 02 - ARCHIVE FRAME 08", image: "assets/tcc/Meta%206/archive-08.png" },
  { id: "09", title: "DROP 02 - ARCHIVE FRAME 09", image: "assets/tcc/Meta%206/archive-09.png" }
];

const meta08Dossier = {
  title: "META 08",
  subtitle: "DOSSIÊ DE PRODUÇÃO / CLIPE 01",
  credits: "FERNANDO SEIXAS DIAS",
  role: "DIREÇÃO DE ARTE",
  chapters: [
    {
      id: "01",
      label: "CONCEITO",
      title: "CONCEITO",
      eyebrow: "CLIPE 01 / DIREÇÃO DE ARTE",
      image: "assets/tcc/Meta%208/dossie-01.png",
      meta: [
        ["ARTISTA", "SHOEGAZE / ARTISTA INDEPENDENTE"],
        ["FORMATO", "CLIPE MUSICAL / 16:9"],
        ["ANO", "2027"],
        ["DIREÇÃO", "DIREÇÃO DE ARTE / CRIATIVA"]
      ],
      description: "Um videoclipe sobre solidão, vazio e deslocamento urbano. Uma figura atravessa Curitiba entre concreto, chuva, terminais vazios e luzes que passam sem permanecer."
    },
    {
      id: "02",
      label: "MOODBOARD",
      title: "MOODBOARD",
      eyebrow: "PESQUISA VISUAL",
      image: "assets/tcc/Meta%208/moodboard-02.png",
      meta: [
        ["LUZ", "FRIA / DISPONÍVEL"],
        ["PALETA", "AZUL DESSATURADO / CINZA / PRETO"],
        ["ATMOSFERA", "DISTÂNCIA / CHUVA / SILÊNCIO"],
        ["LOCAÇÃO", "CURITIBA / ESPAÇOS PÚBLICOS"]
      ],
      description: "A direção visual constrói uma cidade fria e distante através de neblina, asfalto molhado, reflexos, arquitetura concreta e uma presença humana reduzida dentro do espaço."
    },
    {
      id: "03",
      label: "STORYBOARD",
      title: "STORYBOARD",
      eyebrow: "NARRATIVA VISUAL",
      image: "assets/tcc/Meta%208/storyboard-03.png",
      meta: [
        ["CENAS", "06 SEQUÊNCIAS"],
        ["LINGUAGEM", "SKETCH / LÁPIS / GIZ"],
        ["CÂMERA", "FIXA / PRÓXIMA / CONTIDA"],
        ["MOVIMENTO", "LENTO / NATURAL / OBSERVACIONAL"]
      ],
      description: "O roteiro visual é organizado em seis momentos simples e filmáveis: espera, passagem, reflexo, performance, chuva e desaparecimento."
    },
    {
      id: "04",
      label: "MAPA DE CENA",
      title: "MAPA DE CENA",
      eyebrow: "PRÉ-PRODUÇÃO",
      image: "assets/tcc/Meta%208/mapa-de-cena-04.png",
      meta: [
        ["LOCAÇÕES", "TERMINAL / PASSARELA / VIADUTO"],
        ["FLUXO", "PERCURSO URBANO LINEAR"],
        ["EQUIPE", "REDUZIDA / MÓVEL"],
        ["PLANO B", "CHUVA / ÁREAS COBERTAS"]
      ],
      description: "O percurso organiza as locações em sequência para reduzir deslocamento, custo e tempo de montagem, mantendo continuidade visual entre cidade, concreto e vazio."
    },
    {
      id: "05",
      label: "CASTING",
      title: "CASTING",
      eyebrow: "DIREÇÃO DE PERSONAGEM",
      image: "assets/tcc/Meta%208/casting-05.png",
      meta: [
        ["PRESENÇA", "SILENCIOSA / OBSERVACIONAL"],
        ["POSTURA", "CORPO FECHADO / GESTO MÍNIMO"],
        ["EXPRESSÃO", "OLHAR EVASIVO / CONTIDO"],
        ["PERFORMANCE", "SEM ATUAÇÃO EXCESSIVA"]
      ],
      description: "A presença do artista deve existir dentro do quadro sem disputar atenção com a cidade. O personagem reage ao ambiente, não interpreta uma narrativa explícita."
    },
    {
      id: "06",
      label: "FIGURINO",
      title: "FIGURINO",
      eyebrow: "STYLING / CONTINUIDADE",
      image: "assets/tcc/Meta%208/figurino-06.png",
      meta: [
        ["LOOKS", "03 VARIAÇÕES"],
        ["MATERIAIS", "MOLETOM / LÃ / NYLON / COURO"],
        ["PALETA", "PRETO / CINZA / AZUL FRIO"],
        ["CUSTO", "BRECHÓ / BÁSICOS / REUTILIZAÇÃO"]
      ],
      description: "O figurino trabalha camadas escuras, materiais gastos e texturas molhadas. As peças são acessíveis e mantêm continuidade entre as locações urbanas."
    },
    {
      id: "07",
      label: "FILMAGEM",
      title: "PLANO DE FILMAGEM",
      eyebrow: "ORGANIZAÇÃO DE SET",
      image: "assets/tcc/Meta%208/plano-de-filmagem-07.png",
      meta: [
        ["DIA", "01 / CURITIBA"],
        ["EQUIPE", "REDUZIDA / ÁGIL"],
        ["FORMATO", "16:9 / 24 FPS"],
        ["RECURSOS", "CÂMERA NA MÃO / LUZ DISPONÍVEL"]
      ],
      description: "O cronograma concentra a captação em um único dia, explorando luz natural, clima frio e locações próximas para manter a produção viável e concentrada."
    },
    {
      id: "08",
      label: "STILLS",
      title: "REFERÊNCIAS DE ENQUADRAMENTO",
      eyebrow: "RESULTADO VISUAL",
      image: "assets/tcc/Meta%208/stills-08.png",
      meta: [
        ["CÂMERA", "PRÓXIMA / CONTIDA"],
        ["LUZ", "DISPONÍVEL / FLUORESCENTE"],
        ["MOVIMENTO", "DESFOQUE NATURAL"],
        ["LINGUAGEM", "GRÃO / FRIO / OBSERVACIONAL"]
      ],
      description: "Os enquadramentos aproximam corpo, espaço e ruído urbano. A imagem alterna distância e detalhe para sustentar uma sensação de silêncio, suspensão e isolamento."
    }
  ]
};

const meta10IntegratedCampaign = {
  title: "META 10",
  subtitle: "ADIDAS ORIGINALS \u00d7 DAFITI",
  role: "DIRE\u00c7\u00c3O CRIATIVA",
  credits: "FERNANDO SEIXAS DIAS",
  campaignNote: "CASE ESPECULATIVO / PROPOSTA AUTORAL DE DIRE\u00c7\u00c3O CRIATIVA E PLANEJAMENTO",
  sections: [
    { id: "01", label: "VIS\u00c3O GERAL" },
    { id: "02", label: "ESTRAT\u00c9GIA" },
    { id: "03", label: "PLANO DE A\u00c7\u00c3O" },
    { id: "04", label: "PRODU\u00c7\u00c3O" },
    { id: "05", label: "LAN\u00c7AMENTO" },
    { id: "06", label: "CANAIS" },
    { id: "07", label: "EXPERI\u00caNCIA" },
    { id: "08", label: "RESULTADOS" },
    { id: "09", label: "CR\u00c9DITOS" }
  ]
};
const meta11CreativeArchive = {
  title: "META 11",
  subtitle: "ARQUIVO DE DIRE\u00c7\u00d5ES CRIATIVAS",
  role: "DIRE\u00c7\u00c3O DE ARTE",
  credits: "FERNANDO SEIXAS DIAS",
  projects: [
    {
      id: "01",
      tabLabel: "MASSA CRUA",
      title: "MASSA CRUA COOKIES",
      category: "GASTRONOMIA / VAREJO / FOOD BRANDING",
      description: "Uma marca de cookies premium constru\u00edda a partir de desejo, mat\u00e9ria, sabor e presen\u00e7a gr\u00e1fica.",
      direction: ["IDENTIDADE DE MARCA", "EMBALAGEM", "SISTEMA DE SABORES", "CAMPANHA", "VAREJO", "DIRE\u00c7\u00c3O FOTOGR\u00c1FICA", "SOCIAL MEDIA"],
      boards: [
        { id: "01", label: "CONCEITO", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-01.png" },
        { id: "02", label: "IDENTIDADE", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-02.png" },
        { id: "03", label: "EMBALAGENS", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-03.png" },
        { id: "04", label: "CAMPANHA", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-04.png" },
        { id: "05", label: "DIGITAL", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-05.png" },
        { id: "06", label: "FOTOGRAFIA", image: "assets/tcc/Meta%2011/Massa%20Crua/massa-crua-06.png" }
      ]
    },
    {
      id: "02",
      tabLabel: "ROCA",
      title: "ROCA",
      category: "CULTURA / ARTE T\u00caXTIL / EXPOSI\u00c7\u00c3O / EDUCA\u00c7\u00c3O",
      description: "Um projeto cultural que transforma roupas, materiais e processos manuais em express\u00e3o, mem\u00f3ria e autonomia.",
      direction: ["IDENTIDADE CULTURAL", "EXPOSI\u00c7\u00c3O", "CURADORIA", "ARTE T\u00caXTIL", "OFICINAS", "SITE", "COMUNICA\u00c7\u00c3O"],
      boards: [
        { id: "01", label: "CONCEITO", image: "assets/tcc/Meta%2011/ROCA/ROCA-01.png" },
        { id: "02", label: "IDENTIDADE", image: "assets/tcc/Meta%2011/ROCA/ROCA-02.png" },
        { id: "03", label: "EXPOSI\u00c7\u00c3O", image: "assets/tcc/Meta%2011/ROCA/ROCA-03.png" },
        { id: "04", label: "OFICINAS", image: "assets/tcc/Meta%2011/ROCA/ROCA-04.png" },
        { id: "05", label: "DIGITAL", image: "assets/tcc/Meta%2011/ROCA/ROCA-05.png" },
        { id: "06", label: "COMUNICA\u00c7\u00c3O", image: "assets/tcc/Meta%2011/ROCA/ROCA-06.png" }
      ]
    },
    {
      id: "03",
      tabLabel: "N\u00c9VOA",
      title: "N\u00c9VOA",
      category: "BEM-ESTAR / EXPERI\u00caNCIA / ARQUITETURA / SERVI\u00c7O",
      description: "Uma casa contempor\u00e2nea de banho e cuidado, constru\u00edda a partir de pausa, sil\u00eancio, mat\u00e9ria e experi\u00eancia sensorial.",
      direction: ["IDENTIDADE", "EXPERI\u00caNCIA ESPACIAL", "DIRE\u00c7\u00c3O FOTOGR\u00c1FICA", "RITUAIS", "AMENITIES", "AGENDAMENTO", "COMUNICA\u00c7\u00c3O"],
      boards: [
        { id: "01", label: "CONCEITO", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-01.png" },
        { id: "02", label: "IDENTIDADE", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-02.png" },
        { id: "03", label: "DIRE\u00c7\u00c3O FOTOGR\u00c1FICA", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-03.png" },
        { id: "04", label: "APLICA\u00c7\u00d5ES", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-04.png" },
        { id: "05", label: "EXPERI\u00caNCIA DIGITAL", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-05.png" },
        { id: "06", label: "CAMPANHA", image: "assets/tcc/Meta%2011/N%C3%A9voa/n%C3%A9voa-06.png" }
      ]
    }
  ]
};

const meta07CookieCase = {
  title: "MASSA CRUA COOKIES",
  subtitle: "REBRANDING / DIREÇÃO DE ARTE",
  credits: "FERNANDO SEIXAS DIAS",
  role: "DIREÇÃO DE ARTE",
  chapters: [
    {
      id: "01",
      label: "CAPA",
      title: "MASSA CRUA COOKIES",
      eyebrow: "REBRANDING DE MARCA",
      image: "assets/tcc/Meta%207/imagem-01.png",
      relatedImages: ["assets/tcc/Meta%207/imagem-05.png"],
      imageMode: "board",
      meta: ["IDENTIDADE", "EMBALAGEM", "CAMPANHA", "DIGITAL"],
      description: "Uma identidade visual criada para transformar uma marca de cookies em uma experiência mais tátil, contemporânea e escalável."
    },
    {
      id: "02",
      label: "IDENTIDADE",
      title: "IDENTIDADE PRINCIPAL",
      image: "assets/tcc/Meta%207/identidade-01.png",
      imageMode: "board",
      meta: ["LOGOTIPO", "PALETA", "TIPOGRAFIA", "ASSINATURA"],
      description: "Uma marca construída a partir de contraste, matéria e desejo."
    },
    {
      id: "03",
      label: "VARIAÇÕES",
      title: "VARIAÇÕES DE LOGO",
      image: "assets/tcc/Meta%207/identidade-02.png",
      imageMode: "board",
      meta: ["LOCKUPS", "VERSÕES REDUZIDAS", "USOS POSITIVOS E NEGATIVOS", "ASSINATURAS SECUNDÁRIAS"],
      description: "Um sistema de assinatura preparado para diferentes escalas e pontos de contato."
    },
    {
      id: "04",
      label: "SÍMBOLO",
      title: "SÍMBOLO E ELEMENTOS DE APOIO",
      image: "assets/tcc/Meta%207/imagem-09.png",
      imageMode: "board",
      meta: ["ÍCONE", "MONOGRAMA", "ONDAS", "TEXTURAS", "MOTIVOS DE APOIO"],
      description: "Os elementos gráficos ampliam a presença da marca sem depender apenas do logotipo."
    },
    {
      id: "05",
      label: "EMBALAGENS",
      title: "EMBALAGENS E SABORES",
      image: "assets/tcc/Meta%207/imagem-02.png",
      relatedImages: ["assets/tcc/Meta%207/imagem-08.png"],
      imageMode: "board",
      meta: ["CHOCOLATE", "CEREJA", "LARANJA", "CREME", "DOURADO"],
      description: "Um sistema de cores e sabores que organiza a linha de produtos e fortalece o reconhecimento no ponto de venda."
    },
    {
      id: "06",
      label: "CAMPANHA",
      title: "CAMPANHA",
      eyebrow: "COOKIES DE VERDADE",
      image: "assets/tcc/Meta%207/identidade-03.png",
      relatedImages: ["assets/tcc/Meta%207/imagem-03.png", "assets/tcc/Meta%207/imagem-06.png"],
      imageMode: "board",
      meta: ["PÔSTER", "VITRINE", "FLYER", "MENU", "PONTO DE VENDA"],
      description: "Feitos para comer sem culpa."
    },
    {
      id: "07",
      label: "DIGITAL",
      title: "SISTEMA DIGITAL",
      image: "assets/tcc/Meta%207/midias-sociais-01.png",
      imageMode: "board",
      meta: ["FEED", "STORY", "LANÇAMENTO", "PROMOÇÃO", "PRODUTO"],
      description: "A identidade se transforma em conteúdo recorrente sem perder consistência."
    },
    {
      id: "08",
      label: "FOTOGRAFIA",
      title: "DIREÇÃO DE FOTOGRAFIA",
      image: "assets/tcc/Meta%207/Identidade-04.png",
      relatedImages: ["assets/tcc/Meta%207/imagem-04.png"],
      imageMode: "board",
      meta: ["TEXTURA", "DESEJO", "MOVIMENTO", "RITUAL", "COR", "MATÉRIA"],
      description: "Uma linguagem visual guiada por calor, matéria, humor e apetite."
    },
    {
      id: "09",
      label: "APLICAÇÕES",
      headerLabel: "APLICAÇÕES DE MARCA",
      title: "APLICAÇÕES DE MARCA",
      image: "assets/tcc/Meta%207/imagem-07.png",
      imageMode: "board",
      meta: ["MERCH", "VESTUÁRIO", "CULTURA", "COMUNIDADE", "EXPERIÊNCIA"],
      description: "A identidade se expande para além do produto e constrói presença em objetos, vestuário e cultura de marca."
    }
  ]
};

const meta12RunwayPreview = {
  title: "META 12",
  subtitle: "PRIMEIRO DESFILE DA NYSTAGMUS",
  role: "NYSTAGMUS / RUNWAY",
  credits: "FERNANDO SEIXAS DIAS",
  sections: [
    {
      id: "look-list",
      number: "01",
      label: "LISTA DE LOOKS",
      shortLabel: "LISTA DE LOOKS",
      title: "ORDEM DA COLEÇÃO",
      description: "Sequência editorial dos looks que organiza o ritmo visual do desfile.",
      format: "LISTA / PLANEJAMENTO DE PASSARELA",
      function: "ORGANIZAÇÃO / ORDEM DE ENTRADA",
      assets: [
        {
          block: "LISTA DE LOOKS",
          blockOrder: "01",
          file: "lista-de-looks-01.png",
          assetOrder: "01",
          title: "ORDEM DA COLEÇÃO",
          description: "Sequência editorial dos looks que organiza o ritmo visual do desfile.",
          visualFormat: "LISTA / PLANEJAMENTO DE PASSARELA",
          fitBehavior: "contain",
          order: "01",
          label: "LISTA DE LOOKS",
          src: "assets/tcc/Meta%2012/lista-de-looks-01.png",
          fit: "contain"
        }
      ]
    },
    {
      id: "runway-plan",
      number: "02",
      label: "PLANTA DO DESFILE",
      shortLabel: "PLANTA",
      title: "CIRCULAÇÃO E PASSARELA",
      description: "Planta de organização do espaço, da passarela, do público e dos fluxos do desfile.",
      format: "PLANTA / ESPAÇO",
      function: "CIRCULAÇÃO / EXPERIÊNCIA",
      assets: [
        {
          block: "PLANTA DO DESFILE",
          blockOrder: "02",
          file: "planta-do-desfile-02.png",
          assetOrder: "01",
          title: "CIRCULAÇÃO E PASSARELA",
          description: "Planta de organização do espaço, da passarela, do público e dos fluxos do desfile.",
          visualFormat: "PLANTA / ESPAÇO",
          fitBehavior: "contain",
          order: "01",
          label: "PLANTA DO DESFILE",
          src: "assets/tcc/Meta%2012/planta-do-desfile-02.png",
          fit: "contain"
        }
      ]
    },
    {
      id: "invitation",
      number: "03",
      label: "CONVITE PARA MÍDIA E CONVIDADOS",
      shortLabel: "CONVITE",
      title: "CHAMADA PARA A NOITE",
      description: "Convite desenvolvido para mídia, convidados e presenças especiais.",
      format: "CONVITE / COMUNICAÇÃO",
      function: "ACESSO / DIVULGAÇÃO",
      assets: [
        {
          block: "CONVITE PARA MÍDIA E CONVIDADOS",
          blockOrder: "03",
          file: "convite-03.png",
          assetOrder: "01",
          title: "CHAMADA PARA A NOITE",
          description: "Convite desenvolvido para mídia, convidados e presenças especiais.",
          visualFormat: "CONVITE / COMUNICAÇÃO",
          fitBehavior: "contain",
          order: "01",
          label: "CONVITE",
          src: "assets/tcc/Meta%2012/convite-03.png",
          fit: "contain"
        }
      ]
    },
    {
      id: "lookbook",
      number: "04",
      label: "LOOKBOOK",
      shortLabel: "LOOKBOOK",
      title: "CORPO DA COLEÇÃO",
      description: "Apresentação editorial dos looks, materiais, silhuetas e atmosfera da coleção.",
      format: "LOOKBOOK / EDITORIAL",
      function: "APRESENTAÇÃO / DOCUMENTAÇÃO",
      assets: [
        {
          block: "LOOKBOOK",
          blockOrder: "04",
          file: "lookbook-04.png",
          assetOrder: "01",
          title: "CORPO DA COLEÇÃO",
          description: "Apresentação editorial dos looks, materiais, silhuetas e atmosfera da coleção.",
          visualFormat: "LOOKBOOK / EDITORIAL",
          fitBehavior: "contain",
          order: "01",
          label: "LOOKBOOK",
          src: "assets/tcc/Meta%2012/lookbook-04.png",
          fit: "contain",
          crop: "bottom-black-bar"
        }
      ]
    },
    {
      id: "presentation",
      number: "05",
      label: "APRESENTAÇÃO DO DESFILE",
      shortLabel: "APRESENTAÇÃO",
      title: "O DESFILE COMO CHAMADA",
      description: "Peça principal de divulgação que apresenta o desfile e estabelece sua linguagem visual.",
      format: "FLYER / APRESENTAÇÃO",
      function: "DIVULGAÇÃO / DESEJO",
      assets: [
        {
          block: "APRESENTAÇÃO DO DESFILE",
          blockOrder: "05",
          file: "apresentação-05.png",
          assetOrder: "01",
          title: "O DESFILE COMO CHAMADA",
          description: "Peça principal de divulgação que apresenta o desfile e estabelece sua linguagem visual.",
          visualFormat: "FLYER / APRESENTAÇÃO",
          fitBehavior: "contain",
          order: "01",
          label: "APRESENTAÇÃO DO DESFILE",
          src: "assets/tcc/Meta%2012/apresenta%C3%A7%C3%A3o-05.png",
          fit: "contain"
        }
      ]
    },
    {
      id: "looks",
      number: "06",
      label: "LOOKS",
      shortLabel: "LOOKS",
      title: "15 ENTRADAS",
      description: "Galeria completa dos quinze looks desenvolvidos para o desfile.",
      format: "LOOKS / GALERIA",
      function: "COLEÇÃO / PASSARELA",
      assets: [
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-01.png",
          assetOrder: "01",
          title: "LOOK 01",
          description: "Primeira entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "01",
          label: "LOOK 01",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-01.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-02.png",
          assetOrder: "02",
          title: "LOOK 02",
          description: "Segunda entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "02",
          label: "LOOK 02",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-02.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-03.png",
          assetOrder: "03",
          title: "LOOK 03",
          description: "Terceira entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "03",
          label: "LOOK 03",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-03.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-04.png",
          assetOrder: "04",
          title: "LOOK 04",
          description: "Quarta entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "04",
          label: "LOOK 04",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-04.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-05.png",
          assetOrder: "05",
          title: "LOOK 05",
          description: "Quinta entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "05",
          label: "LOOK 05",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-05.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-06.png",
          assetOrder: "06",
          title: "LOOK 06",
          description: "Sexta entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "06",
          label: "LOOK 06",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-06.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-07.png",
          assetOrder: "07",
          title: "LOOK 07",
          description: "Sétima entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "07",
          label: "LOOK 07",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-07.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-08.png",
          assetOrder: "08",
          title: "LOOK 08",
          description: "Oitava entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "08",
          label: "LOOK 08",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-08.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-09.png",
          assetOrder: "09",
          title: "LOOK 09",
          description: "Nona entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "09",
          label: "LOOK 09",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-09.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-10.png",
          assetOrder: "10",
          title: "LOOK 10",
          description: "Décima entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "10",
          label: "LOOK 10",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-10.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-11.png",
          assetOrder: "11",
          title: "LOOK 11",
          description: "Décima primeira entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "11",
          label: "LOOK 11",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-11.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-12.png",
          assetOrder: "12",
          title: "LOOK 12",
          description: "Décima segunda entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "12",
          label: "LOOK 12",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-12.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-13.png",
          assetOrder: "13",
          title: "LOOK 13",
          description: "Décima terceira entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "13",
          label: "LOOK 13",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-13.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-14.png",
          assetOrder: "14",
          title: "LOOK 14",
          description: "Décima quarta entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "14",
          label: "LOOK 14",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-14.png",
          fit: "contain"
        },
        {
          block: "LOOKS",
          blockOrder: "06",
          file: "Looks/nmus-look-15.png",
          assetOrder: "15",
          title: "LOOK 15",
          description: "Décima quinta entrada da galeria de looks do desfile.",
          visualFormat: "LOOKS / GALERIA",
          fitBehavior: "contain",
          order: "15",
          label: "LOOK 15",
          src: "assets/tcc/Meta%2012/Looks/nmus-look-15.png",
          fit: "contain"
        }
      ]
    }
  ]
};

const meta10CampaignImages = {
  "01": { src: "assets/tcc/Meta%2010/imagem1.png", fit: "cover" },
  "02A": { src: "assets/tcc/Meta%2010/imagem2a.png", fit: "cover" },
  "02B": { src: "assets/tcc/Meta%2010/imagem2b.png", fit: "cover" },
  "05": { src: "assets/tcc/Meta%2010/imagem5.png", fit: "contain" },
  "06": { src: "assets/tcc/Meta%2010/imagem6.png", fit: "contain" },
  "07": { src: "assets/tcc/Meta%2010/imagem7.png", fit: "cover" },
  "08": { src: "assets/tcc/Meta%2010/imagem8.png", fit: "cover" }
};

const goalDetailsContent = {
  "02": {
    category: "EMPREGO / SISTEMA DE PRODUÇÃO",
    keywords: ["EFETIVAÇÃO", "TEMPLATES", "CANVA", "CAPCUT", "MODELO HÍBRIDO"],
    previewLabel: "PREVIEW / SISTEMA DE PRODUÇÃO",
    previewType: "frizzar-production",
    title: "SER EFETIVADO E ESTRUTURAR UM SISTEMA DE PRODUÇÃO NO SAAS",
    summary: "Conquistar a efetivação e transformar a rotina de produção em Canva e CapCut em um sistema mais rápido, reutilizável e sustentável.",
    description: [
      "A permanência no SaaS deve deixar de representar apenas uma rotina de produção operacional. Esta meta busca consolidar a efetivação e estruturar uma forma mais inteligente de trabalhar, utilizando templates, bibliotecas de arquivos, padrões de edição e sistemas reutilizáveis para reduzir retrabalho.",
      "O objetivo também envolve buscar uma rotina híbrida, com parte da semana em home office. A redução de deslocamento e a melhoria da qualidade de vida são fundamentais para preservar energia e tempo para as outras duas frentes do planejamento: os projetos musicais independentes e a Nystagmus."
    ],
    sections: [
      { title: "OBJETIVO", body: "Ser efetivado e criar um sistema de produção que torne as entregas recorrentes mais rápidas, consistentes e menos dependentes de execução manual." },
      { title: "ESCOPO", body: "Organizar templates de Canva, estruturas de edição no CapCut, bibliotecas de motion, formatos de roteiro, pastas de referência e modelos para demandas recorrentes." },
      { title: "DIREÇÃO", body: "Tratar o trabalho assalariado como uma base de estabilidade e laboratório de processos, não como uma barreira para os projetos autorais." },
      { title: "RESULTADO", body: "Uma rotina de trabalho mais organizada, possibilidade de atuação híbrida e maior disponibilidade mental para desenvolver música, audiovisual e Nystagmus." }
    ]
  },
  "03": {
    category: "MÚSICA / AUDIOVISUAL",
    keywords: ["VISUALIZER", "EDIÇÃO", "LANÇAMENTO", "CLIENTE", "CRÉDITOS"],
    previewLabel: "PREVIEW / RELEASE MUSICAL",
    previewType: "music-release",
    releaseData: meta03ReleaseData,
    title: "FECHAR O PRIMEIRO PROJETO MUSICAL PAGO",
    summary: "Transformar a experiência prévia com edição e visualizers em um primeiro trabalho remunerado para um lançamento musical.",
    description: [
      "A relação já existente com artistas e amigos da cena musical deve se tornar uma porta de entrada para uma atuação profissional. Esta meta representa o momento de transformar habilidades de edição, motion e direção visual em uma entrega paga, com escopo definido, prazo, crédito e resultado publicado.",
      "O objetivo não é começar com uma produção gigantesca. É construir um primeiro case real de trabalho remunerado, capaz de provar que a direção audiovisual pode se tornar uma frente de atuação profissional recorrente."
    ],
    sections: [
      { title: "OBJETIVO", body: "Concluir um projeto musical remunerado que transforme uma colaboração criativa em serviço profissional reconhecido." },
      { title: "ESCOPO", body: "Produzir visualizer, teaser, peça de lançamento, conteúdo de redes sociais ou edição audiovisual para uma música, EP ou campanha de artista." },
      { title: "DIREÇÃO", body: "Aproveitar a proximidade com a cena musical para desenvolver trabalhos autorais, mas sempre com escopo, função e crédito claramente definidos." },
      { title: "RESULTADO", body: "Um primeiro case pago publicado, com material de portfólio, crédito profissional e base para prospectar novos artistas." }
    ]
  },
  "04": {
    category: "FREELANCER / AUDIOVISUAL",
    keywords: ["CATÁLOGO", "VIDEOCLIPE", "DIREÇÃO", "CASES", "CLIENTES"],
    previewLabel: "PRÉVIA / CATÁLOGO AUDIOVISUAL",
    previewType: "audiovisual-catalog",
    catalogProjects: meta04Projects,
    title: "CRIAR UM CATÁLOGO DE DIREÇÃO AUDIOVISUAL INDEPENDENTE",
    summary: "Reunir projetos de vídeo e direção criativa em um catálogo profissional para atrair clientes além da rede imediata de amigos.",
    description: [
      "Depois do primeiro projeto remunerado, a atuação audiovisual precisa ganhar forma profissional. Esta meta consiste em reunir trabalhos produzidos, organizar a apresentação de cada case e construir um catálogo que comunique não apenas o resultado final, mas a sua participação em cada projeto.",
      "O foco é reunir pelo menos três produções: uma experiência mais simples, como um visualizer; um videoclipe menor; e uma produção mais robusta, com equipe de cinema, atores, direção de cena e estrutura profissional. O catálogo deve ser uma ferramenta de posicionamento e captação, não apenas um arquivo de vídeos."
    ],
    sections: [
      { title: "OBJETIVO", body: "Construir uma apresentação profissional que posicione a direção audiovisual como uma frente independente de trabalho." },
      { title: "ESCOPO", body: "Organizar três ou mais projetos com vídeo, stills, artista, contexto, créditos, descrição da sua atuação e links para assistir." },
      { title: "DIREÇÃO", body: "Apresentar cada produção como um case de direção visual, destacando conceito, processo e responsabilidade criativa." },
      { title: "RESULTADO", body: "Um catálogo audiovisual capaz de gerar confiança, captar novos clientes e ampliar a atuação para além da rede de amigos." }
    ]
  },
  "05": {
    category: "EMPREGO / ESTRATÉGIA",
    keywords: ["CAMPANHAS", "LANÇAMENTOS", "SISTEMAS", "COMUNICAÇÃO", "RESPONSABILIDADE"],
    previewLabel: "PR\u00c9VIA / LAN\u00c7AMENTO DE PRODUTO",
    previewType: "saas-campaign-launch",
    campaignData: meta05Campaign,
    title: "ASSUMIR UMA POSIÇÃO MAIS ESTRATÉGICA NO SAAS",
    summary: "Participar de campanhas, lançamentos e sistemas de comunicação que ultrapassem a produção recorrente de posts.",
    description: [
      "A evolução dentro do SaaS não deve significar apenas produzir mais conteúdo. Depois de estruturar uma rotina eficiente, a meta é participar de entregas com maior impacto: campanhas, lançamentos de produto, materiais de apresentação, automações, sistemas de conteúdo e projetos que conectem design a objetivos de negócio.",
      "Essa etapa mantém a estabilidade do emprego assalariado, mas amplia sua responsabilidade criativa. O trabalho deixa de ser apenas uma linha de produção e passa a oferecer experiência real em comunicação integrada, organização de sistemas e construção de campanhas."
    ],
    sections: [
      { title: "OBJETIVO", body: "Expandir a atuação dentro da empresa para projetos de maior impacto visual e estratégico." },
      { title: "ESCOPO", body: "Participar de campanhas, lançamentos, materiais de produto, sistemas de conteúdo, apresentações e fluxos de comunicação mais amplos." },
      { title: "DIREÇÃO", body: "Usar a experiência corporativa como treinamento prático para pensar em estratégia, clareza de mensagem, consistência visual e escala." },
      { title: "RESULTADO", body: "Maior responsabilidade dentro do SaaS, repertório profissional mais sólido e experiência aplicável em futuros estúdios, agências ou marcas." }
    ]
  },
  "06": {
    category: "NYSTAGMUS / DROP 02",
    keywords: ["COLEÇÃO", "DESFILE-FILM", "CAMPANHA", "E-COMMERCE", "LEADS"],
    sidebarHeading: "Identificação",
    sidebarIndexHeading: "Índice / desdobramentos",
    longformAriaLabel: "Descrição",
    previewLabel: "PRÉVIA / DROP 02 NYSTAGMUS",
    previewType: "nystagmus-drop-02",
    dropData: meta06Drop,
    title: "LANÇAR O PRIMEIRO GRANDE DROP DA NYSTAGMUS",
    summary: "Apresentar uma coleção maior por meio de um desfile em vídeo, campanha visual e página de vendas completa.",
    description: [
      "Depois do primeiro drop de introdução, a Nystagmus deve realizar seu primeiro grande movimento de marca. A meta é lançar uma coleção mais completa, com produto, imagem, vídeo, styling, direção de arte e comunicação funcionando como uma única experiência.",
      "O lançamento deve assumir a forma de um desfile-film: uma apresentação audiovisual que introduz as roupas dentro de uma narrativa visual própria. A coleção precisa ser acompanhada por campanha, e-commerce, construção de leads e uma ação de lançamento capaz de gerar interesse real em torno da marca."
    ],
    sections: [
      { title: "OBJETIVO", body: "Realizar o primeiro lançamento de grande porte da Nystagmus, consolidando a marca como universo de roupa, imagem e narrativa." },
      { title: "ESCOPO", body: "Desenvolver uma coleção com peças de cima, peças de baixo, bota e acessório, acompanhada de campanha, filme, página de vendas e comunicação de lançamento." },
      { title: "DIREÇÃO", body: "Tratar o drop como uma obra completa, onde a roupa, o vídeo, a fotografia, o som e o site pertencem ao mesmo universo visual." },
      { title: "RESULTADO", body: "Uma coleção publicada, uma audiência inicial ativada e uma primeira ação de marca com impacto visual e comercial real." }
    ]
  },
  "07": {
    category: "EMPREGO / DIREÇÃO DE ARTE",
    keywords: ["BRANDING", "EDITORIAL", "CAMPANHA", "SISTEMA VISUAL", "ESTÚDIO"],
    previewLabel: "PRÉVIA / CASE DE DIREÇÃO DE ARTE",
    previewType: "cookie-rebrand-case",
    cookieCaseData: meta07CookieCase,
    title: "ASSUMIR UMA POSIÇÃO EM DIREÇÃO DE ARTE",
    summary: "Conquistar uma posição recorrente em direção de arte, design editorial, branding ou criação, atuando em projetos mais sofisticados, com maior profundidade conceitual e valor criativo.",
    description: [
      "Esta meta representa a saída gradual da lógica de produção massiva de conteúdo e a entrada em um ambiente onde seja possível desenvolver campanhas, identidades, sistemas visuais e projetos mais estruturados.",
      "O objetivo não é apenas mudar de cargo, mas conquistar um contexto profissional em que pensamento visual, repertório conceitual, narrativa de marca e responsabilidade criativa sejam parte central do trabalho."
    ],
    sections: [
      { title: "OBJETIVO", body: "Conquistar uma contratação em direção de arte, branding, design editorial ou criação, participando de projetos com maior valor conceitual." },
      { title: "ESCOPO", body: "Atuar de forma recorrente em campanhas, identidades, sistemas visuais, apresentações e projetos de marca com aplicação em múltiplos formatos." },
      { title: "DIREÇÃO", body: "Substituir gradualmente a execução isolada por pensamento de sistema, conceito, narrativa e direção visual aplicada a marcas." },
      { title: "RESULTADO", body: "Crescimento de responsabilidade e repertório profissional, com experiência real em projetos de branding, editorial e campanha." }
    ]
  },
  "08": {
    category: "FREELANCER / DIREÇÃO CRIATIVA",
    keywords: ["PRODUÇÃO", "EQUIPE", "STORYBOARD", "DIREÇÃO DE CENA", "VIDEOCLIPE"],
    previewLabel: "PRÉVIA / DOSSIÊ DE PRODUÇÃO",
    previewType: "production-dossier",
    dossierData: meta08Dossier,
    title: "ASSINAR UMA DIREÇÃO DE ARTE INDEPENDENTE DE MAIOR PORTE",
    summary: "Conduzir um projeto audiovisual mais complexo, com equipe, produção, artistas e direção visual assinada.",
    description: [
      "Enquanto a Meta 07 garante uma posição profissional recorrente, esta meta consolida a frente independente. O objetivo é assumir uma direção de arte de maior porte, em uma produção que envolva equipe, planejamento, artistas, fotografia, figurino, cenário, direção de cena e decisões visuais integradas.",
      "Essa meta pode partir de um videoclipe ou produção audiovisual robusta, especialmente em projetos que já contem com estrutura de cinema, atores, equipe técnica e parceiros ligados a produtoras ou agências. O foco é deixar de ser percebido apenas como editor e passar a assinar a direção visual de um projeto completo."
    ],
    sections: [
      { title: "OBJETIVO", body: "Assinar uma direção de arte independente com escala, equipe e responsabilidades criativas maiores." },
      { title: "ESCOPO", body: "Participar de uma produção audiovisual com storyboard, referências, casting, figurino, cenário, direção de cena e entrega final publicada." },
      { title: "DIREÇÃO", body: "Atuar como responsável pela visão visual do projeto, organizando referências e decisões de imagem do início ao fim." },
      { title: "RESULTADO", body: "Um case robusto que prove capacidade de conduzir direção de arte além da edição ou execução pontual." }
    ]
  },
  "09": {
    category: "NYSTAGMUS / EVENTO",
    keywords: ["INSTALA\u00c7\u00c3O", "M\u00daSICA", "COMUNIDADE", "FLYERS", "REGISTRO"],
    previewLabel: "PR\u00c9VIA / DOUBLE VISION",
    previewType: "nystagmus-event-dossier",
    eventData: meta09EventDossier,
    title: "CONSOLIDAR A NYSTAGMUS COM UM EVENTO IMERSIVO",
    summary: "Criar uma experi\u00eancia presencial que una roupa, m\u00fasica, instala\u00e7\u00e3o, v\u00eddeo e comunidade em torno da marca.",
    description: [
      "A Nystagmus n\u00e3o deve existir apenas por meio de roupas e campanhas digitais. Esta meta busca criar um evento presencial capaz de materializar o universo da marca e aproximar pessoas que compartilham refer\u00eancias, interesses e formas de cria\u00e7\u00e3o semelhantes.",
      "O evento precisa funcionar como instala\u00e7\u00e3o, encontro e extens\u00e3o de marca. Roupas, v\u00eddeos, m\u00fasica, artistas convidados, objetos, proje\u00e7\u00f5es, flyers, banners e documenta\u00e7\u00e3o devem construir uma experi\u00eancia que o p\u00fablico possa vivenciar fisicamente."
    ],
    sections: [
      { title: "OBJETIVO", body: "Criar um marco presencial para a Nystagmus e estabelecer a marca como ponto de encontro de uma comunidade criativa." },
      { title: "ESCOPO", body: "Desenvolver evento, identidade visual, convite, flyers, instala\u00e7\u00e3o, programa\u00e7\u00e3o, registro audiovisual e participa\u00e7\u00e3o de artistas ou parceiros." },
      { title: "DIRE\u00c7\u00c3O", body: "Construir uma experi\u00eancia imersiva em que moda, m\u00fasica, arte e audiovisual existam como partes do mesmo ambiente." },
      { title: "RESULTADO", body: "Um evento documentado, p\u00fablico presente, conex\u00f5es criativas ampliadas e maior reconhecimento da Nystagmus no cen\u00e1rio independente." }
    ]
  },
  "10": {
    category: "DIRE\u00c7\u00c3O CRIATIVA / CAMPANHA",
    keywords: ["CONCEITO", "FILME", "FOTOGRAFIA", "IDENTIDADE", "ATIVA\u00c7\u00c3O"],
    previewLabel: "PR\u00c9VIA / CAMPANHA INTEGRADA",
    previewType: "integrated-campaign",
    campaignData: meta10IntegratedCampaign,
    title: "ASSINAR UMA CAMPANHA INTEGRADA PARA UMA MARCA",
    summary: "Dirigir uma campanha completa, conectando conceito, fotografia, v\u00eddeo, identidade, m\u00eddia e experi\u00eancia de marca.",
    description: [
      "A lideran\u00e7a criativa precisa aparecer atrav\u00e9s de uma entrega concreta. Esta meta consiste em desenvolver ou assinar uma campanha integrada para uma marca, onde diferentes formatos funcionem como parte de uma mesma ideia central.",
      "A campanha deve reunir dire\u00e7\u00e3o de arte, conceito, fotografia, audiovisual, design gr\u00e1fico, redes sociais, poss\u00edveis materiais impressos e ativa\u00e7\u00f5es. Liderar pessoas, organizar cronogramas e proteger a linguagem visual deixam de ser metas abstratas e passam a ser exig\u00eancias reais da entrega."
    ],
    sections: [
      { title: "OBJETIVO", body: "Assinar uma campanha integrada com conceito, narrativa visual, plano de canais e pe\u00e7as principais." },
      { title: "ESCOPO", body: "Construir uma proposta que conecte estrat\u00e9gia, fotografia, filme, identidade, social, digital e experi\u00eancia." },
      { title: "DIRE\u00c7\u00c3O", body: "Atuar como dire\u00e7\u00e3o criativa, organizando linguagem, equipe, entregas e consist\u00eancia entre todos os pontos da campanha." },
      { title: "RESULTADO", body: "Um case de campanha com leitura profissional, capaz de demonstrar vis\u00e3o estrat\u00e9gica e coordena\u00e7\u00e3o criativa." }
    ]
  },
  "11": {
    category: "DIREÇÃO DE ARTE / MARCAS",
    keywords: ["CULTURA", "BELEZA", "TECNOLOGIA", "GASTRONOMIA", "ARQUIVO"],
    previewLabel: "PRÉVIA / ARQUIVO DE DIREÇÕES",
    previewType: "creative-direction-archive",
    archiveData: meta11CreativeArchive,
    title: "DIRIGIR PROJETOS PARA MARCAS DE NICHOS DIFERENTES",
    summary: "Expandir a atuação para diferentes segmentos e demonstrar repertório estratégico além da música e da moda.",
    description: [
      "A linguagem autoral precisa ser capaz de dialogar com diferentes contextos. Esta meta busca ampliar a atuação profissional para marcas de nichos distintos, mostrando que direção de arte não é apenas estética aplicada, mas capacidade de interpretar problemas, públicos e posicionamentos específicos.",
      "O foco não é atender qualquer cliente. É construir projetos em segmentos que possam dialogar com seu repertório, como cultura, beleza, gastronomia, arquitetura, tecnologia, entretenimento ou produtos autorais. Cada projeto deve preservar personalidade própria, sem perder clareza estratégica."
    ],
    sections: [
      { title: "OBJETIVO", body: "Demonstrar capacidade de criar direções visuais consistentes para marcas de áreas diferentes." },
      { title: "ESCOPO", body: "Realizar projetos para pelo menos três nichos distintos, incluindo pelo menos um segmento fora de música e moda." },
      { title: "DIREÇÃO", body: "Adaptar linguagem, narrativa e estética às necessidades de cada marca sem perder assinatura e qualidade de execução." },
      { title: "RESULTADO", body: "Um repertório mais versátil, capaz de ampliar possibilidades de trabalho e posicionar a direção de arte como prática estratégica." }
    ]
  },
  "12": {
    category: "NYSTAGMUS / RUNWAY",
    keywords: ["COLEÇÃO", "CASTING", "STYLING", "TRILHA", "CENOGRAFIA"],
    previewLabel: "PRÉVIA / PRIMEIRO DESFILE",
    previewType: "nystagmus-runway-preview",
    runwayData: meta12RunwayPreview,
    title: "PRODUZIR O PRIMEIRO DESFILE DA NYSTAGMUS",
    summary: "Apresentar uma coleção ao vivo e transformar a marca em uma presença estabelecida no cenário de moda autoral.",
    description: [
      "Depois de consolidar a marca com drops, campanhas e eventos presenciais, a Nystagmus deve realizar seu primeiro desfile oficial. Este momento representa uma mudança de escala: a coleção deixa de ser apenas apresentada e passa a existir como performance ao vivo, experiência espacial e construção coletiva.",
      "O desfile precisa sintetizar a linguagem da marca em todos os seus elementos: roupas, casting, styling, trilha, iluminação, cenário, ritmo, documentação e público. Ele deve funcionar como marco de posicionamento dentro do cenário de moda autoral."
    ],
    sections: [
      { title: "OBJETIVO", body: "Realizar o primeiro desfile oficial da Nystagmus como marco de consolidação da marca." },
      { title: "ESCOPO", body: "Desenvolver coleção, casting, styling, trilha, cenografia, iluminação, convite, registro audiovisual e comunicação de imprensa." },
      { title: "DIREÇÃO", body: "Construir um desfile como experiência completa, não apenas como sequência de looks em uma passarela." },
      { title: "RESULTADO", body: "Uma apresentação ao vivo documentada, com impacto visual, presença de público e material suficiente para fortalecer a marca após o evento." }
    ]
  }
};

function createPlaceholderGoalDetails(metaNumber, yearNumber) {
  const content = goalDetailsContent[metaNumber] || {
    category: "CATEGORIA EM DESENVOLVIMENTO",
    keywords: [
      "EM DESENVOLVIMENTO",
      "EM DESENVOLVIMENTO",
      "EM DESENVOLVIMENTO",
      "EM DESENVOLVIMENTO"
    ],
    title: `META ${metaNumber} EM DESENVOLVIMENTO`,
    summary: "Conteúdo desta meta em desenvolvimento.",
    description: [
      "A descrição completa desta meta será inserida posteriormente. Esta estrutura está sendo preparada para receber o planejamento detalhado, os critérios de conclusão e os materiais de apoio."
    ],
    sections: [
      { title: "OBJETIVO", body: "Em desenvolvimento." },
      { title: "ESCOPO", body: "Em desenvolvimento." },
      { title: "DIREÇÃO", body: "Em desenvolvimento." },
      { title: "RESULTADO", body: "Em desenvolvimento." }
    ]
  };

  return {
    meta: [
      `META ${metaNumber}`,
      `ANO ${yearNumber}`,
      content.category,
      "STATUS: PENDENTE"
    ],
    sidebarMeta: [],
    sidebarHeading: content.sidebarHeading,
    sidebarIndexHeading: content.sidebarIndexHeading,
    longformAriaLabel: content.longformAriaLabel,
    keywords: content.keywords,
    title: content.title,
    summary: content.summary,
    description: content.description,
    sections: content.sections,
    previewLabel: content.previewLabel || "PREVIEW / EM DESENVOLVIMENTO",
    previewType: content.previewType,
    releaseData: content.releaseData,
    catalogProjects: content.catalogProjects,
    campaignData: content.campaignData,
    cookieCaseData: content.cookieCaseData,
    dropData: content.dropData,
    previewPlaceholder: "Esta área receberá a representação visual da meta."
  };
}

function placeholderGoal(id, metaNumber, yearNumber, shortDescription, hoverTitle) {
  return goal(
    id,
    `Meta ${metaNumber}`,
    shortDescription,
    createPlaceholderGoalDetails(metaNumber, yearNumber),
    hoverTitle
  );
}

const careerPlan = [
  {
    year: "01",
    position: { desktop: [535, 255], mobile: [420, 285] },
    goals: [
      goal("year-01-goal-01", "Meta 01", "Criar e lançar a primeira cápsula da Nystagmus, estabelecendo sua linguagem visual, produto e universo criativo.", null, "Desenvolver o primeiro drop da Nystagmus"),
      placeholderGoal("year-01-goal-02", "02", "01", "Conquistar a efetivação e criar sistemas reutilizáveis de produção em Canva e CapCut, buscando uma rotina híbrida mais sustentável.", "Ser efetivado e estruturar um sistema de produção no SaaS"),
      placeholderGoal("year-01-goal-03", "03", "01", "Transformar experiências de edição e visualizer em um primeiro trabalho remunerado para um lançamento musical.", "Fechar o primeiro projeto musical pago")
    ]
  },
  {
    year: "02",
    position: { desktop: [360, 755], mobile: [735, 470] },
    goals: [
      placeholderGoal("year-02-goal-01", "04", "02", "Reunir projetos de vídeo e direção criativa em um catálogo profissional para atrair clientes além da rede de amigos.", "Criar um catálogo de direção audiovisual independente"),
      placeholderGoal("year-02-goal-02", "05", "02", "Participar de campanhas, lançamentos e sistemas de comunicação que ultrapassem a produção recorrente de posts.", "Assumir uma posição mais estratégica no SaaS"),
      placeholderGoal("year-02-goal-03", "06", "02", "Apresentar uma coleção maior por meio de um desfile em vídeo, campanha visual e página de vendas completa.", "Lançar o primeiro grande drop da Nystagmus")
    ]
  },
  {
    year: "03",
    position: { desktop: [845, 610], mobile: [460, 650] },
    goals: [
      placeholderGoal("year-03-goal-01", "07", "03", "Atuar em projetos mais sofisticados de branding e direção de arte, desenvolvendo campanhas, identidades e sistemas visuais com maior profundidade conceitual.", "Entrar em um emprego de direção de arte"),
      placeholderGoal("year-03-goal-02", "08", "03", "Conduzir um projeto audiovisual mais complexo, com equipe, produção, artistas e direção visual assinada.", "Assinar uma direção de arte independente de maior porte"),
      placeholderGoal("year-03-goal-03", "09", "03", "Criar uma experiência presencial que una roupa, música, instalação, vídeo e comunidade em torno da marca.", "Consolidar a Nystagmus com um evento imersivo")
    ]
  },
  {
    year: "04",
    position: { desktop: [1348, 435], mobile: [725, 845] },
    goals: [
      placeholderGoal("year-04-goal-01", "10", "04", "Dirigir uma campanha completa, conectando conceito, fotografia, vídeo, identidade, mídia e experiência de marca.", "Assinar uma campanha integrada para uma marca"),
      placeholderGoal("year-04-goal-02", "11", "04", "Expandir a atuação para diferentes segmentos e demonstrar repertório estratégico além da música e da moda.", "Dirigir projetos para marcas de nichos diferentes"),
      placeholderGoal("year-04-goal-03", "12", "04", "Apresentar uma coleção ao vivo e transformar a marca em uma presença estabelecida no cenário de moda autoral.", "Produzir o primeiro desfile da Nystagmus")
    ]
  }
];

careerPlan[0].goals[0] = goal("year-01-goal-01", "Meta 01", meta01Content.shortDescription, meta01Content, meta01Content.name);

const pathSettings = {
  desktop: {
    controls: [
      [[210, 96], [400, 120]],
      [[490, 350], [250, 520]],
      [[470, 820], [685, 705]],
      [[990, 520], [1165, 430]]
    ],
    goalOffsets: [
      [-16, 17, -15],
      [18, -20, 16],
      [-16, 18, -15],
      [15, -16, 14]
    ]
  },
  mobile: {
    controls: [
      [[610, 140], [405, 230]],
      [[430, 395], [720, 360]],
      [[760, 555], [440, 560]],
      [[485, 780], [690, 730]]
    ],
    goalOffsets: [
      [-18, 16, -14],
      [16, -18, 14],
      [-16, 18, -14],
      [18, -18, 14]
    ]
  }
};

const nodeLayer = document.querySelector("#nodeLayer");
const planTabs = [...document.querySelectorAll("[data-plan-tab]")];
const planPanels = [...document.querySelectorAll("[data-plan-panel]")];
const yearGoalLinks = [...document.querySelectorAll("[data-open-goal]")];
const introductionButtons = [...document.querySelectorAll("[data-open-introduction]")];
const routeLine = document.querySelector("#routeLine");
const tooltip = document.querySelector("#goalTooltip");
const modal = document.querySelector("#goalModal");
const modalTitle = document.querySelector("#modalTitle");
const modalMeta = document.querySelector("#modalMeta");
const modalDescription = document.querySelector("#modalDescription");
const modalPreview = document.querySelector("#modalPreview");
const completeButton = document.querySelector("#completeButton");
const closeButton = document.querySelector(".modal-close");

let completedGoals = {};
let activeGoal = null;
let activePreviewCleanup = null;
let layoutMode = "";

function goal(id, title, shortDescription, details = null, hoverTitle = "") {
  return {
    id,
    title,
    name: hoverTitle || details.name || "",
    shortDescription,
    fullDescription: "Descrição completa da meta será inserida aqui. Este espaço foi reservado para detalhar critérios, contexto, entregáveis e próximos passos.",
    preview: "Preview da conclusão da meta será inserido aqui.",
    details,
    completed: false
  };
}

function getLayoutMode() {
  return window.matchMedia("(max-width: 900px)").matches ? "mobile" : "desktop";
}

function cubicValue(a, b, c, d, t) {
  const mt = 1 - t;
  return (mt ** 3) * a + 3 * (mt ** 2) * t * b + 3 * mt * (t ** 2) * c + (t ** 3) * d;
}

function pointOnSegment(from, controlA, controlB, to, t, offset) {
  const x = cubicValue(from[0], controlA[0], controlB[0], to[0], t);
  const y = cubicValue(from[1], controlA[1], controlB[1], to[1], t);
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.hypot(dx, dy) || 1;
  return [x + (-dy / length) * offset, y + (dx / length) * offset];
}

function buildNodes(mode) {
  const settings = pathSettings[mode];
  const nodes = [{
    id: startNode.id,
    type: "start",
    year: "00",
    label: startNode.label,
    side: labelPositions[startNode.id],
    x: startNode.position[mode][0],
    y: startNode.position[mode][1],
    order: 0
  }];

  careerPlan.forEach((year, yearIndex) => {
    const segmentIndex = yearIndex;
    const from = yearIndex === 0 ? startNode.position[mode] : careerPlan[yearIndex - 1].position[mode];
    const to = year.position[mode];
    const controls = settings.controls[segmentIndex];
    const tValues = [0.24, 0.5, 0.74];

    year.goals.forEach((goalItem, goalIndex) => {
      const offset = settings.goalOffsets[yearIndex][goalIndex];
      const point = pointOnSegment(from, controls[0], controls[1], to, tValues[goalIndex], offset);

      nodes.push({
        ...goalItem,
        type: "goal",
        year: year.year,
        x: point[0],
        y: point[1],
        order: yearIndex * 4 + goalIndex + 1,
        side: labelPositions[goalItem.id] || ["right", "left", "top", "bottom"][(yearIndex + goalIndex) % 4]
      });
    });

    nodes.push({
      id: `year-${year.year}`,
      type: "year",
      year: year.year,
      label: `Ano ${year.year}`,
      x: year.position[mode][0],
      y: year.position[mode][1],
      order: yearIndex * 4 + 4,
      side: labelPositions[`year-${year.year}`] || "right"
    });
  });

  return nodes.sort((a, b) => a.order - b.order);
}

function buildRoute(nodes) {
  const routeNodes = nodes.map((node) => [node.x, node.y]);
  const drawingPoints = [routeNodes[0]];
  const irregularity = [-10, 6, -5, 8, -7, 4, 7, -6, 5, -8];

  routeNodes.slice(1).forEach((point, index) => {
    const from = routeNodes[index];
    const to = point;
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const length = Math.hypot(dx, dy) || 1;
    const normal = [-dy / length, dx / length];
    const steps = 2 + (index % 2);

    for (let i = 1; i <= steps; i += 1) {
      const t = i / (steps + 1);
      const offset = irregularity[(index + i) % irregularity.length];
      drawingPoints.push([
        from[0] + dx * t + normal[0] * offset,
        from[1] + dy * t + normal[1] * offset
      ]);
    }

    drawingPoints.push(to);
  });

  let d = `M ${drawingPoints[0][0].toFixed(1)} ${drawingPoints[0][1].toFixed(1)}`;

  for (let i = 0; i < drawingPoints.length - 1; i += 1) {
    const previous = drawingPoints[i - 1] || drawingPoints[i];
    const current = drawingPoints[i];
    const next = drawingPoints[i + 1];
    const afterNext = drawingPoints[i + 2] || next;
    const tension = 0.34;
    const controlA = [
      current[0] + ((next[0] - previous[0]) * tension) / 6,
      current[1] + ((next[1] - previous[1]) * tension) / 6
    ];
    const controlB = [
      next[0] - ((afterNext[0] - current[0]) * tension) / 6,
      next[1] - ((afterNext[1] - current[1]) * tension) / 6
    ];

    d += ` C ${controlA[0].toFixed(1)} ${controlA[1].toFixed(1)}, ${controlB[0].toFixed(1)} ${controlB[1].toFixed(1)}, ${next[0].toFixed(1)} ${next[1].toFixed(1)}`;
  }

  return d;
}

function percent(value, total) {
  return `${(value / total) * 100}%`;
}

function isYearComplete(year) {
  const yearData = careerPlan.find((item) => item.year === year);
  return yearData.goals.every((goalItem) => completedGoals[goalItem.id]);
}

function findGoalById(id) {
  return careerPlan.flatMap((year) => year.goals).find((goalItem) => goalItem.id === id);
}

function setPlanTab(tabName) {
  planTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.planTab === tabName));
  planPanels.forEach((panel) => {
    const isActive = panel.dataset.planPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
  hideTooltip();
}

function render() {
  layoutMode = getLayoutMode();
  const nodes = buildNodes(layoutMode);
  const route = buildRoute(nodes);
  routeLine.setAttribute("d", route);

  const fragment = document.createDocumentFragment();
  nodes.forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-node ${node.type === "goal" ? "goal-node" : "year-node"}`;
    button.dataset.id = node.id;
    button.style.left = percent(node.x, SVG_WIDTH);
    button.style.top = percent(node.y, SVG_HEIGHT);

    if (node.type === "start") {
      button.textContent = node.year;
      button.setAttribute("aria-label", node.label);
      button.addEventListener("click", renderIntroductionModal);
    } else if (node.type === "year") {
      button.textContent = node.year;
      button.setAttribute("aria-label", `${node.label}${isYearComplete(node.year) ? " concluído" : " pendente"}`);
      button.classList.toggle("is-complete", isYearComplete(node.year));
    } else {
      button.setAttribute("aria-label", `${node.title}: ${node.shortDescription}`);
      button.classList.toggle("is-complete", Boolean(completedGoals[node.id]));
      button.addEventListener("mouseenter", () => showTooltip(node, button));
      button.addEventListener("mousemove", () => showTooltip(node, button));
      button.addEventListener("mouseleave", hideTooltip);
      button.addEventListener("focus", () => showTooltip(node, button));
      button.addEventListener("blur", hideTooltip);
      button.addEventListener("click", () => openGoal(node));
    }

    const label = document.createElement("span");
    label.className = `node-caption is-${node.side || "right"}`;
    label.textContent = node.type === "goal" ? node.title : node.label;
    button.append(label);
    fragment.append(button);
  });

  nodeLayer.replaceChildren(fragment);
}

function showTooltip(goalItem, button) {
  const rect = button.getBoundingClientRect();
  tooltip.innerHTML = goalItem.name
    ? `<strong>${goalItem.title}</strong><span class="tooltip-name">${goalItem.name}</span><span>${goalItem.shortDescription}</span>`
    : `<strong>${goalItem.title}</strong><span>${goalItem.shortDescription}</span>`;
  const tooltipWidth = tooltip.offsetWidth || 230;
  const tooltipHeight = tooltip.offsetHeight || 94;
  const x = Math.min(rect.left + rect.width + 14, window.innerWidth - 246);
  const y = Math.min(rect.top - 10, window.innerHeight - 94);
  const clampedX = Math.min(Math.max(16, x), window.innerWidth - tooltipWidth - 16);
  tooltip.style.setProperty("--tooltip-x", `${clampedX}px`);
  tooltip.style.setProperty("--tooltip-y", `${Math.max(16, y)}px`);
  tooltip.classList.add("is-visible");
}

function hideTooltip() {
  tooltip.classList.remove("is-visible");
}

function renderIntroductionPreview() {
  const firstPage = introductionPdfPages[0];
  return `
    <article class="introduction-pdf-preview" aria-label="Preview documental do ponto de partida" data-introduction-pdf-preview>
      <header class="introduction-pdf-header">
        <div>
          <span>INTRODUÇÃO</span>
          <strong>DOCUMENTO DE PARTIDA</strong>
        </div>
        <p>REGISTRO VISUAL DO CENÁRIO INICIAL,<br>DAS MOTIVAÇÕES E DA INTENÇÃO DO PROJETO.</p>
      </header>

      <button class="introduction-pdf-stage" type="button" data-introduction-pdf-open aria-label="Ampliar página do documento">
        <img src="${firstPage.image}" alt="${firstPage.index} — ${firstPage.title}" draggable="false" data-introduction-pdf-image>
      </button>

      <footer class="introduction-pdf-navigation" aria-label="Navegação das páginas do documento">
        <button type="button" data-introduction-pdf-prev disabled>← PÁGINA ANTERIOR</button>
        <div>
          <span data-introduction-pdf-count>${firstPage.index}</span>
          <strong data-introduction-pdf-title>${firstPage.title}</strong>
        </div>
        <button type="button" data-introduction-pdf-next>PRÓXIMA PÁGINA →</button>
      </footer>

      <div class="cookie-case-lightbox meta12-lightbox introduction-pdf-lightbox" data-introduction-pdf-lightbox aria-hidden="true">
        <button class="cookie-case-lightbox-close meta12-lightbox__close introduction-pdf-lightbox__close" type="button" data-introduction-pdf-close aria-label="Fechar documento ampliado">FECHAR ×</button>
        <button class="introduction-pdf-lightbox__nav is-prev" type="button" data-introduction-pdf-lightbox-dir="-1" aria-label="Página anterior">←</button>
        <div class="cookie-case-lightbox-controls meta12-lightbox__controls" aria-label="Controles de zoom do documento">
          <button class="meta12-lightbox__control" type="button" data-introduction-pdf-zoom-out aria-label="Reduzir zoom">-</button>
          <span class="meta12-lightbox__zoom" data-introduction-pdf-zoom-label>100%</span>
          <button class="meta12-lightbox__control" type="button" data-introduction-pdf-zoom-in aria-label="Aumentar zoom">+</button>
          <button class="meta12-lightbox__control" type="button" data-introduction-pdf-zoom-reset>RESET</button>
        </div>
        <div class="cookie-case-lightbox-media meta12-lightbox__viewport introduction-pdf-lightbox__viewport" data-introduction-pdf-lightbox-viewport>
          <img class="meta12-lightbox__image introduction-pdf-lightbox__image" src="${firstPage.image}" alt="${firstPage.index} — ${firstPage.title}" draggable="false" data-introduction-pdf-lightbox-image>
        </div>
        <button class="introduction-pdf-lightbox__nav is-next" type="button" data-introduction-pdf-lightbox-dir="1" aria-label="Próxima página">→</button>
        <p class="introduction-pdf-lightbox__caption">
          <span data-introduction-pdf-lightbox-count>${firstPage.index}</span>
          <strong data-introduction-pdf-lightbox-title>${firstPage.title}</strong>
        </p>
      </div>
    </article>
  `;
}

function setupIntroductionPdfPreview() {
  const preview = modalPreview.querySelector("[data-introduction-pdf-preview]");
  if (!preview) return;

  let activeIntroductionPdfPage = 0;
  let introductionPdfZoom = 1;
  let introductionPdfPanX = 0;
  let introductionPdfPanY = 0;
  let introductionPdfDragStart = null;
  let isIntroductionPdfLightboxOpen = false;

  const image = preview.querySelector("[data-introduction-pdf-image]");
  const prevButton = preview.querySelector("[data-introduction-pdf-prev]");
  const nextButton = preview.querySelector("[data-introduction-pdf-next]");
  const pageCount = preview.querySelector("[data-introduction-pdf-count]");
  const pageTitle = preview.querySelector("[data-introduction-pdf-title]");
  const openButton = preview.querySelector("[data-introduction-pdf-open]");
  const lightbox = preview.querySelector("[data-introduction-pdf-lightbox]");
  const lightboxImage = preview.querySelector("[data-introduction-pdf-lightbox-image]");
  const lightboxCount = preview.querySelector("[data-introduction-pdf-lightbox-count]");
  const lightboxTitle = preview.querySelector("[data-introduction-pdf-lightbox-title]");
  const lightboxClose = preview.querySelector("[data-introduction-pdf-close]");
  const lightboxViewport = preview.querySelector("[data-introduction-pdf-lightbox-viewport]");
  const zoomLabel = preview.querySelector("[data-introduction-pdf-zoom-label]");
  const zoomIn = preview.querySelector("[data-introduction-pdf-zoom-in]");
  const zoomOut = preview.querySelector("[data-introduction-pdf-zoom-out]");
  const zoomReset = preview.querySelector("[data-introduction-pdf-zoom-reset]");
  const lightboxNavButtons = [...preview.querySelectorAll("[data-introduction-pdf-lightbox-dir]")];

  const applyIntroductionPdfTransform = () => {
    if (!lightboxImage || !zoomLabel) return;
    lightboxImage.style.transform = `translate(${introductionPdfPanX}px, ${introductionPdfPanY}px) scale(${introductionPdfZoom})`;
    lightboxImage.classList.toggle("is-draggable", introductionPdfZoom > 1);
    zoomLabel.textContent = `${Math.round(introductionPdfZoom * 100)}%`;
  };

  const setIntroductionPdfZoom = (nextZoom) => {
    introductionPdfZoom = Math.min(Math.max(nextZoom, 1), 3);
    if (introductionPdfZoom === 1) {
      introductionPdfPanX = 0;
      introductionPdfPanY = 0;
    }
    applyIntroductionPdfTransform();
  };

  const updateIntroductionPdfPage = (nextIndex) => {
    activeIntroductionPdfPage = Math.min(Math.max(nextIndex, 0), introductionPdfPages.length - 1);
    const page = introductionPdfPages[activeIntroductionPdfPage];
    image.src = page.image;
    image.alt = `${page.index} — ${page.title}`;
    pageCount.textContent = page.index;
    pageTitle.textContent = page.title;
    prevButton.disabled = activeIntroductionPdfPage === 0;
    nextButton.disabled = activeIntroductionPdfPage === introductionPdfPages.length - 1;

    if (isIntroductionPdfLightboxOpen) {
      lightboxImage.src = page.image;
      lightboxImage.alt = `${page.index} — ${page.title}`;
      lightboxCount.textContent = page.index;
      lightboxTitle.textContent = page.title;
      setIntroductionPdfZoom(1);
    }

    lightboxNavButtons.forEach((button) => {
      const direction = Number(button.dataset.introductionPdfLightboxDir);
      button.disabled = (direction < 0 && activeIntroductionPdfPage === 0) ||
        (direction > 0 && activeIntroductionPdfPage === introductionPdfPages.length - 1);
    });
  };

  const openIntroductionPdfLightbox = () => {
    const page = introductionPdfPages[activeIntroductionPdfPage];
    if (!lightbox || !lightboxImage || !page) return;
    lightboxImage.src = page.image;
    lightboxImage.alt = `${page.index} — ${page.title}`;
    lightboxCount.textContent = page.index;
    lightboxTitle.textContent = page.title;
    isIntroductionPdfLightboxOpen = true;
    setIntroductionPdfZoom(1);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-introduction-pdf-lightbox-open");
    lightboxClose?.focus({ preventScroll: true });
    updateIntroductionPdfPage(activeIntroductionPdfPage);
  };

  const closeIntroductionPdfLightbox = () => {
    if (!lightbox || !isIntroductionPdfLightboxOpen) return;
    isIntroductionPdfLightboxOpen = false;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-introduction-pdf-lightbox-open");
    setIntroductionPdfZoom(1);
    openButton?.focus({ preventScroll: true });
  };

  const handleIntroductionPdfKeydown = (event) => {
    if (!isIntroductionPdfLightboxOpen) return;
    if (event.key === "Escape") closeIntroductionPdfLightbox();
    if (event.key === "ArrowLeft") updateIntroductionPdfPage(activeIntroductionPdfPage - 1);
    if (event.key === "ArrowRight") updateIntroductionPdfPage(activeIntroductionPdfPage + 1);
  };

  prevButton.addEventListener("click", () => updateIntroductionPdfPage(activeIntroductionPdfPage - 1));
  nextButton.addEventListener("click", () => updateIntroductionPdfPage(activeIntroductionPdfPage + 1));
  openButton.addEventListener("click", openIntroductionPdfLightbox);
  lightboxClose?.addEventListener("click", closeIntroductionPdfLightbox);
  zoomOut?.addEventListener("click", () => setIntroductionPdfZoom(introductionPdfZoom - 0.2));
  zoomIn?.addEventListener("click", () => setIntroductionPdfZoom(introductionPdfZoom + 0.2));
  zoomReset?.addEventListener("click", () => setIntroductionPdfZoom(1));
  lightboxNavButtons.forEach((button) => {
    button.addEventListener("click", () => updateIntroductionPdfPage(activeIntroductionPdfPage + Number(button.dataset.introductionPdfLightboxDir)));
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeIntroductionPdfLightbox();
  });
  lightboxViewport?.addEventListener("wheel", (event) => {
    if (!isIntroductionPdfLightboxOpen) return;
    event.preventDefault();
    setIntroductionPdfZoom(introductionPdfZoom + (event.deltaY > 0 ? -0.12 : 0.12));
  }, { passive: false });
  lightboxImage?.addEventListener("dblclick", () => setIntroductionPdfZoom(introductionPdfZoom === 1 ? 1.6 : 1));
  lightboxImage?.addEventListener("pointerdown", (event) => {
    if (introductionPdfZoom <= 1) return;
    introductionPdfDragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      panX: introductionPdfPanX,
      panY: introductionPdfPanY
    };
    lightboxImage.setPointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointermove", (event) => {
    if (!introductionPdfDragStart || introductionPdfDragStart.pointerId !== event.pointerId) return;
    introductionPdfPanX = introductionPdfDragStart.panX + event.clientX - introductionPdfDragStart.x;
    introductionPdfPanY = introductionPdfDragStart.panY + event.clientY - introductionPdfDragStart.y;
    applyIntroductionPdfTransform();
  });
  lightboxImage?.addEventListener("pointerup", (event) => {
    introductionPdfDragStart = null;
    lightboxImage.releasePointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointercancel", () => {
    introductionPdfDragStart = null;
  });
  window.addEventListener("keydown", handleIntroductionPdfKeydown, true);

  updateIntroductionPdfPage(0);

  activePreviewCleanup = () => {
    window.removeEventListener("keydown", handleIntroductionPdfKeydown, true);
    document.body.classList.remove("is-introduction-pdf-lightbox-open");
    activePreviewCleanup = null;
  };
}

function renderIntroductionModal() {
  if (activePreviewCleanup) activePreviewCleanup();
  hideTooltip();
  modal.classList.add("has-detail-template", "has-introduction-template");
  modalMeta.innerHTML = `
    <a class="introduction-portfolio-link" href="https://delta-portolio.vercel.app/" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
    <span class="detail-index">Identificação</span>
    ${introductionContent.meta.map((item) => `<span>${item}</span>`).join("")}
    <span class="detail-index detail-index-secondary">Pontos de partida</span>
    ${introductionContent.index.map((item, index) => `<span>${String(index + 1).padStart(2, "0")} ${item}</span>`).join("")}
  `;
  modalTitle.textContent = introductionContent.title;
  modalDescription.innerHTML = `
    <p class="introduction-subtitle">${introductionContent.subtitle}</p>
    <section class="introduction-section introduction-opening" aria-label="Contexto da introdução">
      ${introductionContent.opening.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>
    <section class="introduction-section" aria-label="O que este projeto procura entender">
      <h3>O que este projeto procura entender</h3>
      <div class="introduction-info-grid">
        ${introductionContent.searchItems.map(([title, body]) => `<article><h4>${title}</h4><p>${body}</p></article>`).join("")}
      </div>
    </section>
  `;
  document.querySelector(".preview-label").textContent = "PREVIEW / PONTO DE PARTIDA";
  modalPreview.className = "is-introduction-preview-frame";
  modalPreview.innerHTML = renderIntroductionPreview();
  setupIntroductionPdfPreview();
  completeButton.hidden = true;
  modal.showModal();
}

function renderGoalModalLayout(details) {
  const description = details.description.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const keywords = details.keywords || ["Drop 01", "Casaco / Blusa / Bota", "Estetica russa / comunista", "Pagina de vendas"];
  const sidebarMeta = details.sidebarMeta || ["Status: pendente", "Categoria: marca / produto / lancamento"];
  const sidebarHeading = details.sidebarHeading || "Identificacao";
  const sidebarIndexHeading = details.sidebarIndexHeading || "Indice / desdobramentos";
  const sections = details.sections.map((section, index) => {
    const items = section.items
      ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
    const body = section.body ? `<p>${section.body}</p>` : "";
    return `<section class="modal-info-block"><h3>${String(index + 1).padStart(2, "0")} / ${section.title}</h3>${body}${items}</section>`;
  }).join("");

  modal.classList.add("has-detail-template");
  modalMeta.innerHTML = `
    <span class="detail-index">${sidebarHeading}</span>
    ${details.meta.map((item) => `<span>${item}</span>`).join("")}
    ${sidebarMeta.map((item) => `<span>${item}</span>`).join("")}
    <span class="detail-index detail-index-secondary">${sidebarIndexHeading}</span>
    ${keywords.map((item) => `<span>${item}</span>`).join("")}
  `;
  modalTitle.textContent = details.title;
  modalDescription.innerHTML = `
    <p class="modal-summary">${details.summary}</p>
    <section class="modal-longform" aria-label="${details.longformAriaLabel || "Descricao"}">${description}</section>
    <div class="modal-info-grid">${sections}</div>
  `;
  document.querySelector(".preview-label").textContent = details.previewLabel || "PREVIEW / PAGINA DE VENDAS";
  modalPreview.className = "";
  if (details.previewType === "audiovisual-catalog") {
    modalPreview.innerHTML = renderAudiovisualCatalogPreview(details.catalogProjects);
    setupAudiovisualCatalogPreview(details.catalogProjects);
  } else if (details.previewType === "saas-campaign-launch") {
    modalPreview.innerHTML = renderSaasCampaignPreview(details.campaignData);
    setupSaasCampaignPreview(details.campaignData);
  } else if (details.previewType === "cookie-rebrand-case") {
    modalPreview.classList.add("is-cookie-case-frame");
    modalPreview.innerHTML = renderCookieRebrandCasePreview(details.cookieCaseData);
    setupCookieRebrandCasePreview();
  } else if (details.previewType === "nystagmus-drop-02") {
    const dropData = details.dropData || meta06Drop;
    modalPreview.classList.add("is-meta06-drop-frame");
    modalPreview.innerHTML = renderMeta06NystagmusDropPreview(dropData);
    setupMeta06NystagmusDropPreview(dropData);
  } else if (details.previewType === "music-release") {
    modalPreview.innerHTML = renderMusicReleasePreview(details.releaseData);
    setupMusicReleasePreview();
  } else if (details.previewType === "frizzar-production") {
    modalPreview.innerHTML = renderFrizzarProductionPreview();
    setupFrizzarProductionPreview();
  } else if (details.previewType === "production-dossier") {
    modalPreview.classList.add("is-meta08-dossier-frame");
    modalPreview.innerHTML = renderMeta08ProductionDossier(details.dossierData || meta08Dossier);
    setupMeta08ProductionDossier(details.dossierData || meta08Dossier);
  } else if (details.previewType === "nystagmus-event-dossier") {
    modalPreview.classList.add("is-meta09-event-frame");
    modalPreview.innerHTML = renderMeta09EventDossier(details.eventData || meta09EventDossier);
    setupMeta09EventDossier(details.eventData || meta09EventDossier);
  } else if (details.previewType === "integrated-campaign") {
    modalPreview.classList.add("is-meta10-campaign-frame");
    modalPreview.innerHTML = renderMeta10IntegratedCampaignPreview(details.campaignData || meta10IntegratedCampaign);
    setupMeta10IntegratedCampaignPreview(details.campaignData || meta10IntegratedCampaign);
  } else if (details.previewType === "creative-direction-archive") {
    modalPreview.classList.add("is-meta11-archive-frame");
    modalPreview.innerHTML = renderMeta11CreativeArchivePreview(details.archiveData || meta11CreativeArchive);
    setupMeta11CreativeArchivePreview(details.archiveData || meta11CreativeArchive);
  } else if (details.previewType === "nystagmus-runway-preview") {
    modalPreview.classList.add("is-meta12-runway-frame");
    modalPreview.innerHTML = renderMeta12RunwayPreview(details.runwayData || meta12RunwayPreview);
    setupMeta12RunwayPreview(details.runwayData || meta12RunwayPreview);
  } else if (details.previewProducts) {
    modalPreview.innerHTML = renderProductPreview(details);
    setupProductPreviewGallery();
  } else {
    modalPreview.innerHTML = `<p>${details.previewPlaceholder || "Esta área receberá a representação visual da meta."}</p>`;
  }
}

function renderMeta08ProductionDossier(data = meta08Dossier) {
  const chapters = data.chapters;
  const total = String(chapters.length).padStart(2, "0");
  const firstChapter = chapters[0];
  const renderSupport = (chapter) => chapter.meta
    .slice(0, 2)
    .map(([label, value]) => `${label} ${value}`)
    .join(" / ");
  const renderMeta = (chapter) => chapter.meta.map(([label, value]) => `
    <div class="meta08-meta-item">
      <span class="meta08-meta-label">${label}</span>
      <strong class="meta08-meta-value">${value}</strong>
    </div>
  `).join("");
  const bottomItems = chapters.map((chapter, index) => `
    <button class="meta08-chapter-nav-item ${index === 0 ? "is-active" : ""}" type="button" data-meta08-go="${index}">
      <span>${chapter.id}</span>
      ${chapter.label}
    </button>
  `).join("");

  return `
    <article class="meta08-dossier-preview" data-meta08-active="${firstChapter.id}" data-meta08-dossier>
      <header class="meta08-dossier-header">
        <div>
          <strong>${data.title}</strong>
          <span>${data.subtitle}</span>
        </div>
        <div>
          <strong data-meta08-count>${firstChapter.id} / ${total}</strong>
          <span data-meta08-header-label>${firstChapter.label}</span>
        </div>
        <div>
          <strong>${data.role}</strong>
          <span>${data.credits}</span>
        </div>
      </header>
      <div class="meta08-preview-content" data-meta08-scroll>
        <section class="meta08-chapter-heading">
          <span class="meta08-chapter-eyebrow" data-meta08-eyebrow>${firstChapter.eyebrow}</span>
          <h3 class="meta08-chapter-title" data-meta08-title>${firstChapter.title}</h3>
          <p class="meta08-chapter-support" data-meta08-support>${renderSupport(firstChapter)}</p>
        </section>
        <button class="meta08-board-frame" type="button" data-meta08-open-lightbox aria-label="Ampliar imagem do dossie">
          <img src="${firstChapter.image}" alt="${firstChapter.title}" data-meta08-image>
          <span>AMPLIAR +</span>
        </button>
        <section class="meta08-chapter-copy">
          <div class="meta08-meta-grid" data-meta08-meta>${renderMeta(firstChapter)}</div>
          <p class="meta08-chapter-description" data-meta08-description>${firstChapter.description}</p>
        </section>
      </div>
      <!-- META 08:
        O rail inferior e independente do conteudo ativo.
        Nao posicionar com margens negativas, transform ou position absolute.
        O centro precisa manter alinhamento entre Anterior e Proximo. -->
      <footer class="meta08-case-navigation">
        <button type="button" data-meta08-dir="-1">?</button>
        <div class="meta08-chapter-nav-center">
          <nav class="meta08-chapter-nav-scroll" aria-label="Capitulos do dossie">
            <div class="meta08-chapter-nav-track">${bottomItems}</div>
          </nav>
        </div>
        <button type="button" data-meta08-dir="1">PROXIMO</button>
      </footer>
      <div class="meta08-lightbox" data-meta08-lightbox aria-hidden="true">
        <button class="meta08-lightbox-close" type="button" data-meta08-close>X FECHAR</button>
        <button class="meta08-lightbox-nav is-prev" type="button" data-meta08-lightbox-dir="-1" aria-label="Capitulo anterior"><</button>
        <div class="meta08-lightbox-media">
          <img class="meta08-lightbox-image" src="" alt="" data-meta08-lightbox-image>
        </div>
        <button class="meta08-lightbox-nav is-next" type="button" data-meta08-lightbox-dir="1" aria-label="Proximo capitulo">></button>
        <div class="meta08-lightbox-controls" aria-label="Controles de zoom">
          <button type="button" data-meta08-zoom-out aria-label="Reduzir zoom">-</button>
          <span data-meta08-zoom-label>100%</span>
          <button type="button" data-meta08-zoom-in aria-label="Aumentar zoom">+</button>
          <button type="button" data-meta08-zoom-reset>RESET</button>
        </div>
      </div>
    </article>
  `;
}

function setupMeta08ProductionDossier(data = meta08Dossier) {
  const preview = modalPreview.querySelector("[data-meta08-dossier]");
  if (!preview) return;

  if (activePreviewCleanup) activePreviewCleanup();

  const chapters = data.chapters;
  const total = String(chapters.length).padStart(2, "0");
  const chapterButtons = [...preview.querySelectorAll("[data-meta08-go]")];
  const bottomNav = preview.querySelector(".meta08-chapter-nav-scroll");
  const bottomChapterButtons = [...preview.querySelectorAll(".meta08-chapter-nav-scroll [data-meta08-go]")];
  const scrollArea = preview.querySelector("[data-meta08-scroll]");
  const image = preview.querySelector("[data-meta08-image]");
  const count = preview.querySelector("[data-meta08-count]");
  const headerLabel = preview.querySelector("[data-meta08-header-label]");
  const eyebrow = preview.querySelector("[data-meta08-eyebrow]");
  const title = preview.querySelector("[data-meta08-title]");
  const support = preview.querySelector("[data-meta08-support]");
  const meta = preview.querySelector("[data-meta08-meta]");
  const description = preview.querySelector("[data-meta08-description]");
  const lightbox = preview.querySelector("[data-meta08-lightbox]");
  const lightboxImage = preview.querySelector("[data-meta08-lightbox-image]");
  const zoomLabel = preview.querySelector("[data-meta08-zoom-label]");
  let currentIndex = 0;
  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let dragStart = null;

  const renderMeta = (chapter) => chapter.meta.map(([label, value]) => `
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  const syncActiveButton = () => {
    chapterButtons.forEach((button) => {
      const active = Number(button.dataset.meta08Go) === currentIndex;
      button.classList.toggle("is-active", active);
    });
    const activeBottomButton = bottomChapterButtons.find((button) => Number(button.dataset.meta08Go) === currentIndex);
    if (bottomNav && currentIndex === 0) {
      bottomNav.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      activeBottomButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const setChapter = (index) => {
    currentIndex = (index + chapters.length) % chapters.length;
    const chapter = chapters[currentIndex];
    preview.dataset.meta08Active = chapter.id;
    image.src = chapter.image;
    image.alt = chapter.title;
    count.textContent = `${chapter.id} / ${total}`;
    headerLabel.textContent = chapter.label;
    eyebrow.textContent = chapter.eyebrow;
    title.textContent = chapter.title;
    if (support) support.textContent = chapter.meta.slice(0, 2).map(([label, value]) => `${label} ${value}`).join(" / ");
    meta.innerHTML = renderMeta(chapter);
    description.textContent = chapter.description;
    scrollArea.scrollTo({ top: 0, behavior: "smooth" });
    syncActiveButton();
    if (lightbox.classList.contains("is-open")) {
      lightboxImage.src = chapter.image;
      lightboxImage.alt = chapter.title;
      setZoom(1);
    }
  };

  const applyTransform = () => {
    if (!lightboxImage || !zoomLabel) return;
    lightboxImage.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    lightboxImage.classList.toggle("is-draggable", zoom > 1);
    zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  };

  function setZoom(nextZoom) {
    zoom = Math.min(2.2, Math.max(0.8, nextZoom));
    if (zoom <= 1) {
      panX = 0;
      panY = 0;
    }
    applyTransform();
  }

  const openLightbox = () => {
    const chapter = chapters[currentIndex];
    lightboxImage.src = chapter.image;
    lightboxImage.alt = chapter.title;
    setZoom(1);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta08-lightbox-open");
    preview.querySelector("[data-meta08-close]").focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-meta08-lightbox-open");
    dragStart = null;
    setZoom(1);
  };

  const handleKeydown = (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setChapter(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setChapter(currentIndex + 1);
    }
  };

  activePreviewCleanup = () => {
    window.removeEventListener("keydown", handleKeydown, true);
    document.body.classList.remove("is-meta08-lightbox-open");
    activePreviewCleanup = null;
  };

  chapterButtons.forEach((button) => {
    button.addEventListener("click", () => setChapter(Number(button.dataset.meta08Go)));
  });
  preview.querySelectorAll("[data-meta08-dir]").forEach((button) => {
    button.addEventListener("click", () => setChapter(currentIndex + Number(button.dataset.meta08Dir)));
  });
  preview.querySelector("[data-meta08-open-lightbox]").addEventListener("click", openLightbox);
  preview.querySelector("[data-meta08-close]").addEventListener("click", closeLightbox);
  preview.querySelectorAll("[data-meta08-lightbox-dir]").forEach((button) => {
    button.addEventListener("click", () => setChapter(currentIndex + Number(button.dataset.meta08LightboxDir)));
  });
  preview.querySelector("[data-meta08-zoom-out]").addEventListener("click", () => setZoom(zoom - 0.2));
  preview.querySelector("[data-meta08-zoom-in]").addEventListener("click", () => setZoom(zoom + 0.2));
  preview.querySelector("[data-meta08-zoom-reset]").addEventListener("click", () => setZoom(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightboxImage.addEventListener("dblclick", () => setZoom(zoom > 1 ? 1 : 1.6));
  lightboxImage.addEventListener("pointerdown", (event) => {
    if (zoom <= 1) return;
    dragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      panX,
      panY
    };
    lightboxImage.setPointerCapture(event.pointerId);
  });
  lightboxImage.addEventListener("pointermove", (event) => {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    panX = dragStart.panX + event.clientX - dragStart.x;
    panY = dragStart.panY + event.clientY - dragStart.y;
    applyTransform();
  });
  lightboxImage.addEventListener("pointerup", () => {
    dragStart = null;
  });
  lightboxImage.addEventListener("pointercancel", () => {
    dragStart = null;
  });
  window.addEventListener("keydown", handleKeydown, true);
  setChapter(0);
}

function renderMeta10ImagePlaceholder(number, title, description, ratio = "4:5", className = "") {
  const image = meta10CampaignImages[number];
  return `
    <figure class="meta10-image-placeholder ${className}">
      <div class="meta10-image-surface" aria-hidden="true">
        ${image ? `<img src="${image.src}" alt="${title}" data-fit="${image.fit}">` : ""}
      </div>
    </figure>
  `;
}

function renderMeta10DisplayTitle(lines, long = false) {
  return `<h3 class="meta10-display-title ${long ? "is-long" : ""}">${lines.join("<br>")}</h3>`;
}

function renderMeta10SlideIntro(eyebrow, titleLines, description, long = false) {
  return `<header class="meta10-slide-intro"><span class="meta10-utility">${eyebrow}</span>${renderMeta10DisplayTitle(titleLines, long)}<p class="meta10-slide-description">${description}</p></header>`;
}

function getMeta10Phases() {
  return [
    { name: "IMERS\u00c3O", objective: "MAPEAR H\u00c1BITOS DE COMPRA, STYLING E TERRIT\u00d3RIOS URBANOS.", deliverables: ["MAPA DE H\u00c1BITOS", "TERRIT\u00d3RIOS", "C\u00d3DIGOS DE ESTILO"], owner: "ESTRAT\u00c9GIA", due: "SEMANA 01", status: "CONCLU\u00cdDO", dependency: "REFER\u00caNCIAS URBANAS + P\u00daBLICO", risk: "A PESQUISA FICAR GEN\u00c9RICA." },
    { name: "CURADORIA", objective: "DEFINIR AS TR\u00caS ROTAS, SILHUETAS, LOOKS E REGRAS DE SELE\u00c7\u00c3O.", deliverables: ["ROTA ORIGEM", "ROTA MOVIMENTO", "ROTA PRESEN\u00c7A"], owner: "DIRE\u00c7\u00c3O CRIATIVA / STYLING", due: "SEMANA 02", status: "EM APROVA\u00c7\u00c3O", dependency: "ESTOQUE + PRODUTOS-CHAVE", risk: "ROTAS PARECEREM APENAS CATEGORIAS." },
    { name: "SISTEMA VISUAL", objective: "CRIAR UMA LINGUAGEM QUE CONECTE ROTA, PRODUTO, FOTOGRAFIA, STYLING E JORNADA DE COMPRA.", deliverables: ["KEY VISUAL", "GUIA DE ROTA", "TAGS DE PRODUTO", "LANDING PAGE", "PE\u00c7AS DE CAMPANHA"], owner: "DIRE\u00c7\u00c3O DE ARTE", due: "SEMANA 02-03", status: "EM DESENVOLVIMENTO", dependency: "CURADORIA DE SILHUETAS + DIRE\u00c7\u00c3O FOTOGR\u00c1FICA", risk: "PERDER A RELA\u00c7\u00c3O ENTRE MODA, PRODUTO E TERRIT\u00d3RIO URBANO." },
    { name: "PRODU\u00c7\u00c3O", objective: "FOTOGRAFAR ROTAS, PRODUZIR FILMES E REGISTRAR LOOKS.", deliverables: ["FILME HERO", "FOTOS DE ROTA", "CUTDOWNS", "STILLS"], owner: "FOTO / AUDIOVISUAL", due: "SEMANA 03-04", status: "AGENDADO", dependency: "STYLING + LOCA\u00c7\u00d5ES + CASTING", risk: "PRODU\u00c7\u00c3O N\u00c3O SUSTENTAR TODAS AS ROTAS." },
    { name: "PR\u00c9-LAN\u00c7AMENTO", objective: "PUBLICAR TEASERS, LOOKBOOKS E PRIMEIRAS CURADORIAS.", deliverables: ["TEASERS", "EMAILS", "LOOKBOOKS"], owner: "SOCIAL / CRM / DIGITAL", due: "SEMANA 05", status: "PLANEJADO", dependency: "PE\u00c7AS APROVADAS + LANDING EM TESTE", risk: "GERAR CURIOSIDADE SEM CAMINHO DE CONVERS\u00c3O." },
    { name: "LAN\u00c7AMENTO", objective: "ATIVAR LANDING PAGE, CONTE\u00daDO HERO E EXPERI\u00caNCIA F\u00cdSICA.", deliverables: ["FILME HERO", "LANDING PAGE", "POP-UP", "CURADORIA DIGITAL"], owner: "TODAS AS FRENTES", due: "DIA 00", status: "PRONTO PARA LAN\u00c7AR", dependency: "FILME + LANDING + POP-UP", risk: "CANAIS ENTRAREM COM MENSAGENS DESALINHADAS." },
    { name: "CONTINUIDADE", objective: "ATUALIZAR ROTAS, INSERIR NOVOS LOOKS E PUBLICAR ESCOLHAS DA COMUNIDADE.", deliverables: ["NOVA ROTA", "LOOKS DA COMUNIDADE", "CRM"], owner: "SOCIAL / E-COMMERCE / CRM", due: "D+07 A D+30", status: "PLANEJADO", dependency: "RESULTADOS INICIAIS + COMUNIDADE", risk: "A CAMPANHA MORRER NO DIA DO LAN\u00c7AMENTO." }
  ];
}

function renderMeta10OverviewSlide() {
  return `<section class="meta10-slide meta10-cover-slide">
    <div class="meta10-cover-top">
      <div class="meta10-cover-copy">
        <span class="meta10-utility">ADIDAS ORIGINALS \u00d7 DAFITI</span>
        <h3 class="meta10-cover-title">VESTE<br>A ROTA</h3>
        <p class="meta10-slide-description">UMA CAMPANHA PARA TRANSFORMAR A ESCOLHA DE UM LOOK EM UMA FORMA DE ATRAVESSAR A CIDADE.</p>
        <div class="meta10-overview-meta"><strong>03 ROTAS</strong><strong>12 LOOKS</strong><strong>06 CANAIS</strong><strong>01 ATIVA\u00c7\u00c3O</strong></div>
      </div>
      <div class="meta10-cover-media">
        ${renderMeta10ImagePlaceholder("01", "ROTA ORIGEM / LOOKBOOK URBANO", "ESCADA DE CONCRETO / MODELO EM MOVIMENTO", "4:5")}
        <div class="meta10-cover-accent"><strong class="meta10-cover-accent-number">01</strong><span class="meta10-cover-accent-label">CAMPANHA<br>INTEGRADA</span></div>
      </div>
    </div>
    <div class="meta10-manifesto-strip"><p>N\u00c3O \u00c9 S\u00d3 SOBRE CHEGAR.<br>\u00c9 SOBRE COMO VOC\u00ca ESCOLHE ATRAVESSAR A CIDADE.</p></div>
  </section>`;
}

function renderMeta10StrategySlide() {
  const blocks = [["TENS\u00c3O", "ESCOLHER MODA ONLINE PODE PARECER GEN\u00c9RICO, EXCESSIVO E SEM CONTEXTO."], ["VERDADE", "A MESMA PE\u00c7A MUDA DE SIGNIFICADO CONFORME A FORMA COMO \u00c9 USADA."], ["PROMESSA", "A DAFITI ORGANIZA O REPERT\u00d3RIO. A ADIDAS ORIGINALS D\u00c1 FORMA \u00c0 PRESEN\u00c7A."], ["COMPORTAMENTO", "EXPLORAR, SALVAR, MONTAR, COMPARTILHAR E COMPRAR."]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-strategy">
    <div class="meta10-strategy-images">${renderMeta10ImagePlaceholder("02A", "TERRIT\u00d3RIO URBANO", "ASFALTO / ESCADA / MOVIMENTO", "3:2")}${renderMeta10ImagePlaceholder("02B", "PRODUTO EM CONTEXTO", "SILHUETA / LOOK / CONCRETO", "3:2")}</div>
    <div class="meta10-strategy-center">${renderMeta10SlideIntro("PLATAFORMA DE CAMPANHA", ["ESCOLHER", "A PR\u00d3PRIA", "ROTA"], "A CAMPANHA TRANSFORMA A COMPRA EM CURADORIA, IDENTIDADE E PRESEN\u00c7A URBANA.")}</div>
    <div class="meta10-strategy-notes">${blocks.slice(0,2).map(([label, value]) => `<article><span class="meta10-utility">${label}</span><p class="meta10-module-copy">${value}</p></article>`).join("")}</div>
    ${blocks.slice(2).map(([label, value], index) => `<article class="meta10-strategy-footer ${index ? "is-dark" : "is-soft"}"><span class="meta10-utility">${label}</span><p class="meta10-module-copy">${value}</p></article>`).join("")}
  </section>`;
}

function renderMeta10ActionSlide(section, state = {}) {
  const phases = getMeta10Phases();
  const activeIndex = state.action ?? 2;
  const phase = phases[activeIndex];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-action">
    <div class="meta10-phase-list">${phases.map((item, index) => `<button class="${index === activeIndex ? "is-active" : ""}" type="button" data-meta10-action="${index}"><strong>${String(index + 1).padStart(2, "0")}</strong><span>${item.name}</span></button>`).join("")}</div>
    <article class="meta10-action-panel"><div class="meta10-action-head"><strong>${String(activeIndex + 1).padStart(2, "0")}</strong><span>${phase.name}</span></div><div class="meta10-action-body"><section><span class="meta10-utility">OBJETIVO</span><p>${phase.objective}</p></section><section><span class="meta10-utility">ENTREGAS</span><ul>${phase.deliverables.map((item) => `<li>${item}</li>`).join("")}</ul></section><section><span class="meta10-utility">RESPONS\u00c1VEL</span><p>${phase.owner}</p></section><section><span class="meta10-utility">PRAZO</span><p>${phase.due}</p></section><section><span class="meta10-utility">STATUS</span><p>${phase.status}</p></section></div><div class="meta10-action-dependency"><span class="meta10-utility">DEPEND\u00caNCIA PRINCIPAL</span><strong>${phase.dependency}</strong></div><p class="meta10-action-risk"><strong>RISCO</strong>${phase.risk}</p></article>
  </section>`;
}

function getMeta10Workstreams() {
  return [["DIRE\u00c7\u00c3O CRIATIVA", "CONCEITO, ROTAS E TOM GERAL."], ["DIRE\u00c7\u00c3O DE ARTE", "KEY VISUAL, SISTEMA GR\u00c1FICO E LINGUAGEM DE ROTA."], ["STYLING", "LOOKS, COMBINA\u00c7\u00d5ES E CURADORIA DE SILHUETAS."], ["FOTOGRAFIA", "RETRATOS URBANOS, LOOKBOOKS E DETALHES DE PRODUTO."], ["AUDIOVISUAL", "FILME HERO, CORTES DE ROTA E CONTE\u00daDO CURTO."], ["DIGITAL", "LANDING PAGE, SALVOS E JORNADA DE COMPRA."], ["RETAIL / EXPERI\u00caNCIA", "POP-UP, PROVA DE LOOK, QR CODE E REGISTRO."]];
}

function renderMeta10ProductionSlide() {
  const workstreams = getMeta10Workstreams();
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-production">
    <div class="meta10-production-copy">${renderMeta10SlideIntro("COORDENA\u00c7\u00c3O DE FRENTES", ["FRENTES DE", "PRODU\u00c7\u00c3O"], "A CAMPANHA S\u00d3 FUNCIONA QUANDO AS FRENTES TRABALHAM COM O MESMO C\u00d3DIGO VISUAL E O MESMO RITMO.")}</div>
    <div class="meta10-production-count"><strong>07</strong><span>FRENTES<br>CONECTADAS</span></div>
    <div class="meta10-production-grid">${workstreams.slice(0, 6).map(([label, text]) => `<article><span class="meta10-utility">${label}</span><p class="meta10-module-copy">${text}</p></article>`).join("")}<article class="meta10-production-wide"><span class="meta10-utility">${workstreams[6][0]}</span><p class="meta10-module-copy">${workstreams[6][1]}</p></article></div>
  </section>`;
}

function renderMeta10LaunchSlide() {
  const milestones = [["AQUECIMENTO", "3 SEMANAS ANTES", "TEASERS DE ROTA, TEXTURA E CIDADE."], ["REVELA\u00c7\u00c3O", "10 DIAS ANTES", "AS TR\u00caS ROTAS E OS PRIMEIROS LOOKS."], ["LAN\u00c7AMENTO", "DIA DA CAMPANHA", "FILME HERO, LANDING PAGE E ATIVA\u00c7\u00c3O."], ["COMUNIDADE", "1 SEMANA DEPOIS", "LOOKS, CRIADORES E ROTAS PESSOAIS."], ["SEGUNDA ONDA", "3 SEMANAS DEPOIS", "NOVOS PRODUTOS, LOOKS E CURADORIA."]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-launch">
    ${renderMeta10SlideIntro("SEQU\u00caNCIA DE ATIVA\u00c7\u00c3O", ["A ROTA", "ENTRA EM CENA"], "A CAMPANHA COME\u00c7A COM CURIOSIDADE, GANHA FORMA EM CURADORIA E CONTINUA EM COMUNIDADE.")}
    ${renderMeta10ImagePlaceholder("05", "FILME HERO", "RUA / LOOK / MOVIMENTO", "1:1", "meta10-launch-image")}
    <div class="meta10-launch-track">${milestones.map(([title, date, text], index) => `<article class="${index === 2 ? "is-hero" : ""}"><span class="meta10-utility">${date}</span><strong>${title}</strong><p>${text}</p></article>`).join("")}</div>
  </section>`;
}

function renderMeta10ChannelsSlide() {
  const modules = [["DESCOBRIR", "FILME HERO / CREATORS / SOCIAL", "APRESENTAM O TERRIT\u00d3RIO DA CAMPANHA."], ["EXPLORAR", "LANDING PAGE / LOOKBOOKS / CURADORIA", "ORGANIZAM PRODUTOS E REFER\u00caNCIAS."], ["ESCOLHER", "CRM / PRODUTO SALVO / RECOMENDA\u00c7\u00c3O", "TRANSFORMAM INTERESSE EM CONSIDERA\u00c7\u00c3O."], ["VIVER", "POP-UP / STYLING STATION / QR CODE", "LEVAM A CAMPANHA PARA O ESPA\u00c7O F\u00cdSICO."]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-channels">
    ${renderMeta10SlideIntro("DISTRIBUI\u00c7\u00c3O MULTICANAL", ["A ROTA", "EM CADA PONTO"], "A CAMPANHA CONECTA DESCOBERTA, EXPLORA\u00c7\u00c3O, ESCOLHA E EXPERI\u00caNCIA.")}
    ${renderMeta10ImagePlaceholder("06", "FILME HERO", "CIDADE / LOOK / PRESEN\u00c7A", "4:3", "meta10-channel-image")}
    <div class="meta10-channel-number"><strong>06</strong><span>CANAIS<br>CONECTADOS</span></div>
    <div class="meta10-channel-modules">${modules.map(([label, meta, text]) => `<article><span class="meta10-utility">${label}</span><strong>${meta}</strong><p class="meta10-module-copy">${text}</p></article>`).join("")}</div>
  </section>`;
}

function renderMeta10ExperienceSlide() {
  const flow = [["CHEGAR", "MAPA DE ROTAS."], ["ESCOLHER", "ORIGEM, MOVIMENTO OU PRESEN\u00c7A."], ["EXPLORAR", "CURADORIA DE PRODUTOS."], ["MONTAR", "STYLING STATION."], ["REGISTRAR", "FOTO, V\u00cdDEO E CONTE\u00daDO."], ["SALVAR", "QR CODE COM LOOK E ROTA."]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-experience">
    ${renderMeta10SlideIntro("ATIVA\u00c7\u00c3O PRESENCIAL", ["ESTA\u00c7\u00c3O", "DE ROTA"], "UMA EXPERI\u00caNCIA F\u00cdSICA QUE TRANSFORMA CURADORIA DIGITAL EM ESCOLHA REAL.")}
    ${renderMeta10ImagePlaceholder("07", "STYLING STATION / PROVA / REGISTRO", "LOOKS, QR CODE E PRESEN\u00c7A", "3:4", "meta10-experience-image")}
    <div class="meta10-experience-flow">${flow.map(([title, text], index) => `<article class="${index === 3 ? "is-active" : ""}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${title}</strong><p>${text}</p></article>`).join("")}</div>
  </section>`;
}

function renderMeta10ResultsSlide() {
  const metrics = [["12", "LOOKS CURADOS"], ["06", "CANAIS CONECTADOS"], ["24", "PE\u00c7AS DE CONTE\u00daDO"], ["30", "DIAS DE CONTINUIDADE"]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-results">
    ${renderMeta10SlideIntro("MENSURA\u00c7\u00c3O EDITORIAL", ["RESULTADOS", "E LEITURAS"], "A CAMPANHA \u00c9 AVALIADA PELA CAPACIDADE DE TRANSFORMAR CURADORIA EM ESCOLHA, COMPRA E CONTINUIDADE.")}
    <div class="meta10-results-red"><strong>03</strong><span>ROTAS<br>ATIVADAS</span></div>${renderMeta10ImagePlaceholder("08", "COMUNIDADE / LOOKS / TERRIT\u00d3RIO", "REGISTROS, ESCOLHAS E NOVAS ROTAS", "4:3", "meta10-results-image")}<p class="meta10-results-statement">O PRODUTO GANHA FOR\u00c7A QUANDO DEIXA DE SER CAT\u00c1LOGO E PASSA A REPRESENTAR UMA ESCOLHA DE IDENTIDADE.</p><div class="meta10-results-metrics">${metrics.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}</div>
  </section>`;
}

function renderMeta10CreditsSlide() {
  const credits = [["DIRE\u00c7\u00c3O CRIATIVA", "FERNANDO SEIXAS DIAS"], ["DIRE\u00c7\u00c3O DE ARTE", "FERNANDO SEIXAS DIAS"], ["PLANEJAMENTO DE CAMPANHA", "FERNANDO SEIXAS DIAS"], ["ESTRAT\u00c9GIA", "FERNANDO SEIXAS DIAS"], ["STYLING", "A DEFINIR"], ["FOTOGRAFIA", "A DEFINIR"], ["AUDIOVISUAL", "A DEFINIR"], ["DIGITAL / E-COMMERCE", "A DEFINIR"], ["RETAIL / EXPERI\u00caNCIA", "A DEFINIR"], ["M\u00cdDIA / DISTRIBUI\u00c7\u00c3O", "A DEFINIR"]];
  return `<section class="meta10-slide meta10-slide-grid meta10-slide-credits">
    <div class="meta10-credits-poster"><strong>VESTE<br>A ROTA</strong><span>ADIDAS ORIGINALS \u00d7 DAFITI<br>CASE ESPECULATIVO</span></div>
    <div class="meta10-credits-copy">${renderMeta10SlideIntro("ENCERRAMENTO", ["CR\u00c9DITOS E", "RESPONS\u00c1VEIS"], "CASE ESPECULATIVO DESENVOLVIDO COMO EXERC\u00cdCIO DE DIRE\u00c7\u00c3O CRIATIVA, PLANEJAMENTO E COORDENA\u00c7\u00c3O.", true)}</div>
    <div class="meta10-credits-list">${credits.map(([label, value]) => `<article><span class="meta10-utility">${label}</span><strong>${value}</strong></article>`).join("")}</div><p class="meta10-credits-disclaimer">CASE ESPECULATIVO. ADIDAS E DAFITI S\u00c3O UTILIZADAS APENAS COMO REFER\u00caNCIA DE MARCA.</p>
  </section>`;
}

function renderMeta10SectionPanel(section, state = {}) {
  if (section.id === "01") return renderMeta10OverviewSlide();
  if (section.id === "02") return renderMeta10StrategySlide();
  if (section.id === "03") return renderMeta10ActionSlide(section, state);
  if (section.id === "04") return renderMeta10ProductionSlide();
  if (section.id === "05") return renderMeta10LaunchSlide();
  if (section.id === "06") return renderMeta10ChannelsSlide();
  if (section.id === "07") return renderMeta10ExperienceSlide();
  if (section.id === "08") return renderMeta10ResultsSlide();
  if (section.id === "09") return renderMeta10CreditsSlide();
  return "";
}

function renderMeta10IntegratedCampaignPreview(data = meta10IntegratedCampaign) {
  const sections = data.sections;
  const total = String(sections.length).padStart(2, "0");
  const firstSection = sections[0];
  const navItems = sections.map((section, index) => `<button class="meta10-slide-navigation-item ${index === 0 ? "is-active" : ""}" type="button" data-meta10-section="${index}" aria-label="Abrir l\u00e2mina ${section.id} - ${section.label}" title="${section.id} ${section.label}"><span>${section.id}</span>${section.label}</button>`).join("");
  // META 10 - ESTRUTURA PROTEGIDA:
  // A barra inferior fica fora das laminas 01-09. Nao mover este footer para
  // dentro de data-meta10-content; a navegacao precisa sobreviver mesmo se uma lamina falhar.
  return `<article class="meta10-preview meta10-preview-shell" data-meta10-preview><header class="meta10-header"><div><strong>${data.title}</strong><span>ADIDAS ORIGINALS \u00d7 DAFITI</span></div><div><strong data-meta10-count>${firstSection.id} / ${total}</strong><span data-meta10-label>${firstSection.label}</span></div><div><strong>${data.role}</strong><span>${data.credits}</span></div></header><div class="meta10-campaign-note">${data.campaignNote}</div><main class="meta10-active-slide meta10-deck-stage meta10-slide-content" data-meta10-content>${renderMeta10SectionPanel(firstSection)}</main><footer class="meta10-slide-navigation"><button class="meta10-slide-navigation-control" type="button" data-meta10-dir="-1">\u2190 ANTERIOR</button><nav class="meta10-slide-navigation-rail" aria-label="L\u00e2minas da campanha">${navItems}</nav><button class="meta10-slide-navigation-control" type="button" data-meta10-dir="1">PR\u00d3XIMO \u2192</button></footer></article>`;
}

function setupMeta10IntegratedCampaignPreview(data = meta10IntegratedCampaign) {
  const preview = modalPreview.querySelector("[data-meta10-preview]");
  if (!preview) return;
  if (activePreviewCleanup) activePreviewCleanup();
  const sections = data.sections;
  const total = String(sections.length).padStart(2, "0");
  const count = preview.querySelector("[data-meta10-count]");
  const label = preview.querySelector("[data-meta10-label]");
  const content = preview.querySelector("[data-meta10-content]");
  const state = {};
  let currentIndex = 0;
  const setButtonStates = () => {
    preview.querySelectorAll("[data-meta10-section]").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.meta10Section) === currentIndex));
    preview.querySelectorAll("[data-meta10-dir]").forEach((button) => {
      const direction = Number(button.dataset.meta10Dir);
      const isDisabled = (direction < 0 && currentIndex === 0) || (direction > 0 && currentIndex === sections.length - 1);
      button.disabled = isDisabled;
      button.setAttribute("aria-disabled", String(isDisabled));
    });
    preview.querySelector("[data-meta10-section].is-active").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  const bindInnerInteractions = () => {
    preview.querySelectorAll("[data-meta10-action]").forEach((button) => button.addEventListener("click", () => { const section = sections[currentIndex]; state[section.id] = { ...(state[section.id] || {}), action: Number(button.dataset.meta10Action) }; renderCurrentSection(); }));
  };
  const renderCurrentSection = () => { const section = sections[currentIndex]; content.innerHTML = renderMeta10SectionPanel(section, state[section.id] || {}); bindInnerInteractions(); };
  const setSection = (index) => { currentIndex = Math.max(0, Math.min(sections.length - 1, index)); const section = sections[currentIndex]; count.textContent = `${section.id} / ${total}`; label.textContent = section.label; setButtonStates(); renderCurrentSection(); };
  preview.querySelectorAll("[data-meta10-section]").forEach((button) => button.addEventListener("click", () => setSection(Number(button.dataset.meta10Section))));
  preview.querySelectorAll("[data-meta10-dir]").forEach((button) => button.addEventListener("click", () => setSection(currentIndex + Number(button.dataset.meta10Dir))));
  activePreviewCleanup = () => { activePreviewCleanup = null; };
  setSection(0);
}

function renderMeta09EventDossier(data = meta09EventDossier) {
  const blocks = data.blocks || [];
  const first = blocks[0];
  const firstAsset = first.assets[0];
  const total = String(blocks.length).padStart(2, "0");
  const renderBlockNav = () => blocks.map((block, index) => `
    <button class="meta09-block-button ${index === 0 ? "is-active" : ""}" type="button" data-meta09-block="${index}">
      <span>${block.id}</span>${block.shortLabel || block.label}
    </button>
  `).join("");

  return `
    <article class="meta09-event-preview" data-meta09-preview>
      <header class="meta09-header">
        <div><strong>META 09</strong><span>${data.subtitle}</span></div>
        <div><strong data-meta09-count>${first.id} / ${total}</strong><span data-meta09-header-label>${first.label}</span></div>
        <div><strong>${data.role}</strong><span>${data.credits}</span></div>
      </header>
      <section class="meta09-stage">
        <div class="meta09-active-layout meta09-editorial-layout">
          <button class="meta09-media-stage" type="button" data-meta09-open-lightbox aria-label="Ampliar imagem da Meta 09">
            <img src="${firstAsset.src}" alt="${first.label} - ${firstAsset.label}" data-meta09-image>
          </button>
          <div class="meta09-info">
            <span class="meta09-kicker meta09-section-kicker" data-meta09-kicker>${first.kicker}</span>
            <h3 data-meta09-title>${first.title}</h3>
            <p data-meta09-description>${first.description}</p>
            <dl class="meta09-context-list">
              <div>
                <dt>FORMATO</dt>
                <dd data-meta09-format>${first.format}</dd>
              </div>
              <div>
                <dt>FUN\u00c7\u00c3O</dt>
                <dd data-meta09-function>${first.function}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div class="meta09-gallery-controls" data-meta09-gallery-controls>
        <button class="meta09-gallery-control" type="button" data-meta09-asset-dir="-1">\u2190 IMAGEM ANTERIOR</button>
        <span class="meta09-gallery-count" data-meta09-asset-count>01 / ${String(first.assets.length).padStart(2, "0")}</span>
        <button class="meta09-gallery-control" type="button" data-meta09-asset-dir="1">PR\u00d3XIMA IMAGEM \u2192</button>
      </div>
      <!-- META 09:
        O rail inferior e uma regiao estrutural permanente.
        Ele fica fora da lamina ativa e nao pode ser coberto, removido,
        empurrado ou escondido por imagens, textos ou mudancas de altura. -->
      <footer class="meta09-navigation">
        <button class="meta09-navigation-control" type="button" data-meta09-dir="-1">\u2190 ANTERIOR</button>
        <nav class="meta09-block-scroll" aria-label="Blocos do evento">
          <div class="meta09-block-track">${renderBlockNav()}</div>
        </nav>
        <button class="meta09-navigation-control" type="button" data-meta09-dir="1">PR\u00d3XIMO \u2192</button>
      </footer>
      <div class="cookie-case-lightbox meta12-lightbox meta09-lightbox" data-meta09-lightbox aria-hidden="true">
        <button class="cookie-case-lightbox-close meta12-lightbox__close meta09-lightbox-close" type="button" data-meta09-close aria-label="Fechar imagem">FECHAR</button>
        <div class="cookie-case-lightbox-controls meta12-lightbox__controls" aria-label="Controles de zoom da Meta 09">
          <button class="meta12-lightbox__control" type="button" data-meta09-zoom-out aria-label="Reduzir zoom">-</button>
          <span class="meta12-lightbox__zoom" data-meta09-zoom-label>100%</span>
          <button class="meta12-lightbox__control" type="button" data-meta09-zoom-in aria-label="Aumentar zoom">+</button>
          <button class="meta12-lightbox__control" type="button" data-meta09-zoom-reset>RESET</button>
        </div>
        <div class="cookie-case-lightbox-media meta12-lightbox__viewport" data-meta09-lightbox-viewport>
          <img class="meta12-lightbox__image" src="" alt="" draggable="false" data-meta09-lightbox-image>
        </div>
      </div>
    </article>
  `;
}

function setupMeta09EventDossier(data = meta09EventDossier) {
  const preview = modalPreview.querySelector("[data-meta09-preview]");
  if (!preview) return;
  if (activePreviewCleanup) activePreviewCleanup();

  const blocks = data.blocks || [];
  const total = String(blocks.length).padStart(2, "0");
  const count = preview.querySelector("[data-meta09-count]");
  const headerLabel = preview.querySelector("[data-meta09-header-label]");
  const image = preview.querySelector("[data-meta09-image]");
  const kicker = preview.querySelector("[data-meta09-kicker]");
  const title = preview.querySelector("[data-meta09-title]");
  const description = preview.querySelector("[data-meta09-description]");
  const format = preview.querySelector("[data-meta09-format]");
  const blockFunction = preview.querySelector("[data-meta09-function]");
  const assetCount = preview.querySelector("[data-meta09-asset-count]");
  const blockScroll = preview.querySelector(".meta09-block-scroll");
  const lightbox = preview.querySelector("[data-meta09-lightbox]");
  const lightboxImage = preview.querySelector("[data-meta09-lightbox-image]");
  const lightboxViewport = preview.querySelector("[data-meta09-lightbox-viewport]");
  const lightboxClose = preview.querySelector("[data-meta09-close]");
  const zoomLabel = preview.querySelector("[data-meta09-zoom-label]");
  const zoomIn = preview.querySelector("[data-meta09-zoom-in]");
  const zoomOut = preview.querySelector("[data-meta09-zoom-out]");
  const zoomReset = preview.querySelector("[data-meta09-zoom-reset]");
  let activeBlockIndex = 0;
  let activeAssetIndex = 0;
  let isMeta09LightboxOpen = false;
  let meta09ZoomScale = 1;
  let meta09PanX = 0;
  let meta09PanY = 0;
  let meta09Dragging = false;
  let meta09DragStartX = 0;
  let meta09DragStartY = 0;
  let meta09StartPanX = 0;
  let meta09StartPanY = 0;

  const updateMeta09LightboxTransform = () => {
    if (!lightboxImage || !zoomLabel) return;
    if (meta09ZoomScale <= 1) {
      meta09PanX = 0;
      meta09PanY = 0;
    }
    lightboxImage.style.transform = `translate(${meta09PanX}px, ${meta09PanY}px) scale(${meta09ZoomScale})`;
    lightboxImage.classList.toggle("is-draggable", meta09ZoomScale > 1);
    zoomLabel.textContent = `${Math.round(meta09ZoomScale * 100)}%`;
  };

  const setMeta09Zoom = (nextScale) => {
    meta09ZoomScale = Math.min(2.2, Math.max(0.8, Math.round(nextScale * 10) / 10));
    updateMeta09LightboxTransform();
  };

  const closeMeta09Lightbox = () => {
    if (!lightbox || !isMeta09LightboxOpen) return;
    isMeta09LightboxOpen = false;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-meta09-lightbox-open");
    meta09ZoomScale = 1;
    meta09PanX = 0;
    meta09PanY = 0;
    meta09Dragging = false;
    updateMeta09LightboxTransform();
    preview.querySelector("[data-meta09-open-lightbox]")?.focus({ preventScroll: true });
  };

  const setAsset = (index) => {
    const block = blocks[activeBlockIndex];
    activeAssetIndex = Math.max(0, Math.min(block.assets.length - 1, index));
    const asset = block.assets[activeAssetIndex];
    image.src = asset.src;
    image.alt = `${block.label} - ${asset.label}`;
    image.dataset.fit = asset.fit || "contain";
    assetCount.textContent = `${String(activeAssetIndex + 1).padStart(2, "0")} / ${String(block.assets.length).padStart(2, "0")}`;
    preview.querySelectorAll("[data-meta09-asset-dir]").forEach((button) => {
      const direction = Number(button.dataset.meta09AssetDir);
      button.disabled = direction < 0 ? activeAssetIndex === 0 : activeAssetIndex === block.assets.length - 1;
    });
  };

  const setBlock = (index) => {
    activeBlockIndex = (index + blocks.length) % blocks.length;
    activeAssetIndex = 0;
    const block = blocks[activeBlockIndex];
    count.textContent = `${block.id} / ${total}`;
    headerLabel.textContent = block.label;
    kicker.textContent = block.kicker || `${block.id} / ${total} \u2014 ${block.label}`;
    title.textContent = block.title;
    description.textContent = block.description;
    format.textContent = block.format;
    blockFunction.textContent = block.function;
    setAsset(0);
    preview.querySelectorAll("[data-meta09-block]").forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.meta09Block) === activeBlockIndex);
    });
    const activeButton = preview.querySelector(`[data-meta09-block="${activeBlockIndex}"]`);
    activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    if (activeBlockIndex === 0) blockScroll?.scrollTo({ left: 0, behavior: "smooth" });
  };

  preview.querySelectorAll("[data-meta09-block]").forEach((button) => {
    button.addEventListener("click", () => setBlock(Number(button.dataset.meta09Block)));
  });
  preview.querySelectorAll("[data-meta09-dir]").forEach((button) => {
    button.addEventListener("click", () => setBlock(activeBlockIndex + Number(button.dataset.meta09Dir)));
  });
  preview.querySelectorAll("[data-meta09-asset-dir]").forEach((button) => {
    button.addEventListener("click", () => setAsset(activeAssetIndex + Number(button.dataset.meta09AssetDir)));
  });
  preview.querySelector("[data-meta09-open-lightbox]")?.addEventListener("click", () => {
    isMeta09LightboxOpen = true;
    meta09ZoomScale = 1;
    meta09PanX = 0;
    meta09PanY = 0;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    updateMeta09LightboxTransform();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta09-lightbox-open");
    lightboxClose?.focus({ preventScroll: true });
  });
  lightboxClose?.addEventListener("click", closeMeta09Lightbox);
  zoomIn?.addEventListener("click", () => setMeta09Zoom(meta09ZoomScale + 0.2));
  zoomOut?.addEventListener("click", () => setMeta09Zoom(meta09ZoomScale - 0.2));
  zoomReset?.addEventListener("click", () => {
    meta09ZoomScale = 1;
    meta09PanX = 0;
    meta09PanY = 0;
    updateMeta09LightboxTransform();
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeMeta09Lightbox();
  });
  lightboxViewport?.addEventListener("wheel", (event) => {
    event.preventDefault();
    setMeta09Zoom(meta09ZoomScale + (event.deltaY < 0 ? 0.2 : -0.2));
  }, { passive: false });
  lightboxImage?.addEventListener("dblclick", () => setMeta09Zoom(meta09ZoomScale === 1 ? 1.6 : 1));
  lightboxImage?.addEventListener("pointerdown", (event) => {
    if (meta09ZoomScale <= 1) return;
    meta09Dragging = true;
    meta09DragStartX = event.clientX;
    meta09DragStartY = event.clientY;
    meta09StartPanX = meta09PanX;
    meta09StartPanY = meta09PanY;
    lightboxImage.setPointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointermove", (event) => {
    if (!meta09Dragging) return;
    meta09PanX = meta09StartPanX + event.clientX - meta09DragStartX;
    meta09PanY = meta09StartPanY + event.clientY - meta09DragStartY;
    updateMeta09LightboxTransform();
  });
  lightboxImage?.addEventListener("pointerup", (event) => {
    meta09Dragging = false;
    lightboxImage.releasePointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointercancel", () => {
    meta09Dragging = false;
  });
  const handleMeta09Keydown = (event) => {
    if (event.key === "Escape" && isMeta09LightboxOpen) {
      event.preventDefault();
      event.stopPropagation();
      closeMeta09Lightbox();
    }
  };
  document.addEventListener("keydown", handleMeta09Keydown);
  activePreviewCleanup = () => {
    document.removeEventListener("keydown", handleMeta09Keydown);
    document.body.classList.remove("is-meta09-lightbox-open");
    activePreviewCleanup = null;
  };
  setBlock(0);
}

function renderMeta12RunwayPreview(data = meta12RunwayPreview) {
  const sections = data.sections || [];
  const firstSection = sections[0];
  const firstAsset = firstSection.assets[0];
  const total = String(sections.length).padStart(2, "0");
  const renderSectionRail = () => sections.map((section, index) => `
    <button class="meta12-section-rail-item ${index === 0 ? "is-active" : ""}" type="button" data-meta12-section="${index}">
      <span>${section.number}</span>${section.shortLabel || section.label}
    </button>
  `).join("");

  return `
    <article class="meta12-preview-shell" data-meta12-preview>
      <header class="meta12-header">
        <div><strong>${data.title}</strong><span>${data.subtitle}</span></div>
        <div><strong data-meta12-count>${firstSection.number} / ${total}</strong><span data-meta12-header-label>${firstSection.label}</span></div>
        <div><strong>${data.role}</strong><span>${data.credits}</span></div>
      </header>
      <section class="meta12-active-section">
        <div class="meta12-editorial-layout">
          <button class="meta12-media-stage" type="button" data-meta12-open-lightbox aria-label="Ampliar imagem da Meta 12">
            <img src="${firstAsset.src}" alt="${firstSection.label} - ${firstAsset.label}" data-meta12-image>
            <span class="meta12-media-hint">VER EM DETALHE ↗</span>
          </button>
          <div class="meta12-asset-information">
            <span class="meta12-section-kicker" data-meta12-kicker>${firstSection.number} / ${total} — ${firstSection.label}</span>
            <h3 class="meta12-section-title" data-meta12-title>${firstSection.title}</h3>
            <p class="meta12-section-description" data-meta12-description>${firstSection.description}</p>
            <dl class="meta12-context-list">
              <div>
                <dt>FORMATO</dt>
                <dd data-meta12-format>${firstSection.format}</dd>
              </div>
              <div>
                <dt>FUNÇÃO</dt>
                <dd data-meta12-function>${firstSection.function}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div class="meta12-asset-navigation" data-meta12-asset-navigation>
        <button class="meta12-asset-navigation-control" type="button" data-meta12-asset-dir="-1">← IMAGEM ANTERIOR</button>
        <span class="meta12-asset-navigation-count" data-meta12-asset-count>01 / ${String(firstSection.assets.length).padStart(2, "0")}</span>
        <button class="meta12-asset-navigation-control" type="button" data-meta12-asset-dir="1">PRÓXIMA IMAGEM →</button>
      </div>
      <footer class="meta12-section-rail">
        <button class="meta12-section-rail-control" type="button" data-meta12-dir="-1">← ANTERIOR</button>
        <nav class="meta12-section-rail-scroll" aria-label="Blocos da Meta 12">
          <div class="meta12-section-rail-track">${renderSectionRail()}</div>
        </nav>
        <button class="meta12-section-rail-control" type="button" data-meta12-dir="1">PRÓXIMO →</button>
      </footer>
      <div class="cookie-case-lightbox meta12-lightbox" data-meta12-lightbox aria-hidden="true">
        <button class="cookie-case-lightbox-close meta12-lightbox__close" type="button" data-meta12-lightbox-close aria-label="Fechar imagem">FECHAR</button>
        <div class="cookie-case-lightbox-controls meta12-lightbox__controls" aria-label="Controles de zoom da Meta 12">
          <button class="meta12-lightbox__control" type="button" data-meta12-zoom-out aria-label="Reduzir zoom">-</button>
          <span class="meta12-lightbox__zoom" data-meta12-zoom-label>100%</span>
          <button class="meta12-lightbox__control" type="button" data-meta12-zoom-in aria-label="Aumentar zoom">+</button>
          <button class="meta12-lightbox__control" type="button" data-meta12-zoom-reset>RESET</button>
        </div>
        <div class="cookie-case-lightbox-media meta12-lightbox__viewport" data-meta12-lightbox-viewport>
          <img class="meta12-lightbox__image" src="" alt="" draggable="false" data-meta12-lightbox-image>
        </div>
      </div>
    </article>
  `;
}

function setupMeta12RunwayPreview(data = meta12RunwayPreview) {
  const preview = modalPreview.querySelector("[data-meta12-preview]");
  if (!preview) return;
  if (activePreviewCleanup) activePreviewCleanup();

  const sections = data.sections || [];
  const total = String(sections.length).padStart(2, "0");
  const count = preview.querySelector("[data-meta12-count]");
  const headerLabel = preview.querySelector("[data-meta12-header-label]");
  const image = preview.querySelector("[data-meta12-image]");
  const kicker = preview.querySelector("[data-meta12-kicker]");
  const title = preview.querySelector("[data-meta12-title]");
  const description = preview.querySelector("[data-meta12-description]");
  const format = preview.querySelector("[data-meta12-format]");
  const sectionFunction = preview.querySelector("[data-meta12-function]");
  const assetCount = preview.querySelector("[data-meta12-asset-count]");
  const sectionRailScroll = preview.querySelector(".meta12-section-rail-scroll");
  const imageButton = preview.querySelector("[data-meta12-open-lightbox]");
  const lightbox = preview.querySelector("[data-meta12-lightbox]");
  const lightboxImage = preview.querySelector("[data-meta12-lightbox-image]");
  const lightboxViewport = preview.querySelector("[data-meta12-lightbox-viewport]");
  const lightboxClose = preview.querySelector("[data-meta12-lightbox-close]");
  const zoomLabel = preview.querySelector("[data-meta12-zoom-label]");
  const zoomIn = preview.querySelector("[data-meta12-zoom-in]");
  const zoomOut = preview.querySelector("[data-meta12-zoom-out]");
  const zoomReset = preview.querySelector("[data-meta12-zoom-reset]");
  let activeMeta12SectionId = sections[0]?.id || "";
  let activeMeta12AssetIndex = 0;
  let isMeta12LightboxOpen = false;
  let meta12ZoomScale = 1;
  let meta12PanX = 0;
  let meta12PanY = 0;
  let meta12Dragging = false;
  let meta12DragStartX = 0;
  let meta12DragStartY = 0;
  let meta12StartPanX = 0;
  let meta12StartPanY = 0;

  const activeSectionIndex = () => Math.max(0, sections.findIndex((section) => section.id === activeMeta12SectionId));
  const activeSection = () => sections[activeSectionIndex()];
  const activeAsset = () => activeSection()?.assets[activeMeta12AssetIndex];

  const updateMeta12LightboxTransform = () => {
    if (!lightboxImage || !zoomLabel || !lightboxViewport) return;
    if (meta12ZoomScale <= 1) {
      meta12PanX = 0;
      meta12PanY = 0;
    }
    lightboxImage.style.transform = `translate(${meta12PanX}px, ${meta12PanY}px) scale(${meta12ZoomScale})`;
    lightboxImage.classList.toggle("is-draggable", meta12ZoomScale > 1);
    zoomLabel.textContent = `${Math.round(meta12ZoomScale * 100)}%`;
  };

  const setMeta12Zoom = (nextScale) => {
    meta12ZoomScale = Math.min(2.2, Math.max(0.8, Math.round(nextScale * 10) / 10));
    updateMeta12LightboxTransform();
  };

  const closeMeta12Lightbox = () => {
    if (!lightbox || !isMeta12LightboxOpen) return;
    isMeta12LightboxOpen = false;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-meta12-lightbox-open");
    meta12ZoomScale = 1;
    meta12PanX = 0;
    meta12PanY = 0;
    meta12Dragging = false;
    updateMeta12LightboxTransform();
    imageButton?.focus({ preventScroll: true });
  };

  const openMeta12Lightbox = () => {
    const section = activeSection();
    const asset = activeAsset();
    if (!lightbox || !lightboxImage || !section || !asset) return;
    isMeta12LightboxOpen = true;
    meta12ZoomScale = 1;
    meta12PanX = 0;
    meta12PanY = 0;
    lightboxImage.src = asset.src;
    lightboxImage.alt = `${section.label} - ${asset.label}`;
    delete lightboxImage.dataset.meta12Crop;
    updateMeta12LightboxTransform();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta12-lightbox-open");
    lightboxClose?.focus({ preventScroll: true });
  };

  const setAsset = (index) => {
    const section = sections[activeSectionIndex()];
    activeMeta12AssetIndex = Math.max(0, Math.min(section.assets.length - 1, index));
    const asset = section.assets[activeMeta12AssetIndex];
    image.src = asset.src;
    image.alt = `${section.label} - ${asset.label}`;
    image.dataset.fit = asset.fit || "contain";
    image.dataset.meta12Crop = asset.crop || "";
    if (imageButton) imageButton.setAttribute("aria-label", `Ampliar ${section.label} - ${asset.label}`);
    if (isMeta12LightboxOpen && lightboxImage) {
      lightboxImage.src = asset.src;
      lightboxImage.alt = `${section.label} - ${asset.label}`;
      delete lightboxImage.dataset.meta12Crop;
      setMeta12Zoom(1);
    }
    const isLooks = section.id === "looks";
    assetCount.textContent = `${String(activeMeta12AssetIndex + 1).padStart(2, "0")} / ${String(section.assets.length).padStart(2, "0")}`;
    preview.querySelector('[data-meta12-asset-dir="-1"]').textContent = isLooks ? "← LOOK ANTERIOR" : "← IMAGEM ANTERIOR";
    preview.querySelector('[data-meta12-asset-dir="1"]').textContent = isLooks ? "PRÓXIMO LOOK →" : "PRÓXIMA IMAGEM →";
    preview.querySelectorAll("[data-meta12-asset-dir]").forEach((button) => {
      const direction = Number(button.dataset.meta12AssetDir);
      button.disabled = direction < 0 ? activeMeta12AssetIndex === 0 : activeMeta12AssetIndex === section.assets.length - 1;
    });
  };

  const setSection = (index) => {
    const section = sections[(index + sections.length) % sections.length];
    activeMeta12SectionId = section.id;
    activeMeta12AssetIndex = 0;
    count.textContent = `${section.number} / ${total}`;
    headerLabel.textContent = section.label;
    kicker.textContent = `${section.number} / ${total} — ${section.label}`;
    title.textContent = section.title;
    description.textContent = section.description;
    format.textContent = section.format;
    sectionFunction.textContent = section.function;
    setAsset(0);
    preview.querySelectorAll("[data-meta12-section]").forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.meta12Section) === activeSectionIndex());
    });
    const activeButton = preview.querySelector(`[data-meta12-section="${activeSectionIndex()}"]`);
    activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    if (activeSectionIndex() === 0) sectionRailScroll?.scrollTo({ left: 0, behavior: "smooth" });
  };

  preview.querySelectorAll("[data-meta12-section]").forEach((button) => {
    button.addEventListener("click", () => setSection(Number(button.dataset.meta12Section)));
  });
  preview.querySelectorAll("[data-meta12-dir]").forEach((button) => {
    button.addEventListener("click", () => setSection(activeSectionIndex() + Number(button.dataset.meta12Dir)));
  });
  preview.querySelectorAll("[data-meta12-asset-dir]").forEach((button) => {
    button.addEventListener("click", () => setAsset(activeMeta12AssetIndex + Number(button.dataset.meta12AssetDir)));
  });
  imageButton?.addEventListener("click", openMeta12Lightbox);
  lightboxClose?.addEventListener("click", closeMeta12Lightbox);
  zoomIn?.addEventListener("click", () => setMeta12Zoom(meta12ZoomScale + 0.2));
  zoomOut?.addEventListener("click", () => setMeta12Zoom(meta12ZoomScale - 0.2));
  zoomReset?.addEventListener("click", () => {
    meta12ZoomScale = 1;
    meta12PanX = 0;
    meta12PanY = 0;
    updateMeta12LightboxTransform();
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeMeta12Lightbox();
  });
  lightboxViewport?.addEventListener("wheel", (event) => {
    event.preventDefault();
    setMeta12Zoom(meta12ZoomScale + (event.deltaY < 0 ? 0.2 : -0.2));
  }, { passive: false });
  lightboxImage?.addEventListener("dblclick", () => setMeta12Zoom(meta12ZoomScale === 1 ? 1.6 : 1));
  lightboxImage?.addEventListener("pointerdown", (event) => {
    if (meta12ZoomScale <= 1) return;
    meta12Dragging = true;
    meta12DragStartX = event.clientX;
    meta12DragStartY = event.clientY;
    meta12StartPanX = meta12PanX;
    meta12StartPanY = meta12PanY;
    lightboxImage.setPointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointermove", (event) => {
    if (!meta12Dragging) return;
    meta12PanX = meta12StartPanX + event.clientX - meta12DragStartX;
    meta12PanY = meta12StartPanY + event.clientY - meta12DragStartY;
    updateMeta12LightboxTransform();
  });
  lightboxImage?.addEventListener("pointerup", (event) => {
    meta12Dragging = false;
    lightboxImage.releasePointerCapture?.(event.pointerId);
  });
  lightboxImage?.addEventListener("pointercancel", () => {
    meta12Dragging = false;
  });
  const handleMeta12Keydown = (event) => {
    if (event.key === "Escape" && isMeta12LightboxOpen) {
      event.preventDefault();
      event.stopPropagation();
      closeMeta12Lightbox();
    }
  };
  document.addEventListener("keydown", handleMeta12Keydown);
  activePreviewCleanup = () => {
    document.removeEventListener("keydown", handleMeta12Keydown);
    document.body.classList.remove("is-meta12-lightbox-open");
    activePreviewCleanup = null;
  };
  setSection(0);
}

function renderMeta11CreativeArchivePreview(data = meta11CreativeArchive) {
  const projects = data.projects;
  const total = String(projects.length).padStart(2, "0");
  const firstProject = projects[0];
  const firstBoard = firstProject.boards[0];
  const renderProjectTabs = (className) => projects.map((project, index) => `
    <button class="${className} ${index === 0 ? "is-active" : ""}" type="button" data-meta11-project="${index}">
      <span>${project.id}</span>${project.tabLabel}
    </button>
  `).join("");
  const renderBoardRail = (project, activeBoardIndex = 0) => project.boards.map((board, index) => `
    <button class="meta11-asset-navigation-item ${index === activeBoardIndex ? "is-active" : ""}" type="button" data-meta11-board="${index}">
      <span>${board.id}</span>${board.label}
    </button>
  `).join("");

  return `
    <article class="meta11-archive-preview" data-meta11-preview>
      <header class="meta11-header">
        <div><strong>${data.title}</strong><span>${data.subtitle}</span></div>
        <div><strong data-meta11-count>${firstProject.id} / ${total}</strong><span data-meta11-header-label>${firstProject.tabLabel}</span></div>
        <div><strong>${data.role}</strong><span>${data.credits}</span></div>
      </header>
      <nav class="meta11-project-tabs" aria-label="Projetos do arquivo">
        ${renderProjectTabs("meta11-project-tab")}
      </nav>
      <section class="meta11-gallery-layout" data-meta11-content>
        <div class="meta11-gallery-head">
          <span class="meta11-project-category" data-meta11-category>${firstProject.category}</span>
          <h3 class="meta11-project-title" data-meta11-title>${firstProject.title}</h3>
        </div>
        <button class="meta11-main-image-frame" type="button" data-meta11-open-lightbox aria-label="Ampliar imagem principal">
          <img src="${firstBoard.image}" alt="${firstProject.title} - ${firstBoard.label}" data-meta11-main-image>
        </button>
        <div class="meta11-project-summary">
          <p class="meta11-project-description" data-meta11-description>${firstProject.description}</p>
          <strong class="meta11-asset-count" data-meta11-board-count>${firstBoard.id} / ${String(firstProject.boards.length).padStart(2, "0")}</strong>
        </div>
      </section>
      <footer class="meta11-asset-navigation">
        <button class="meta11-asset-navigation-control" type="button" data-meta11-board-dir="-1">\u2190 ANTERIOR PE\u00c7A</button>
        <nav class="meta11-asset-navigation-rail" aria-label="Pe\u00e7as do projeto" data-meta11-board-strip>${renderBoardRail(firstProject)}</nav>
        <button class="meta11-asset-navigation-control" type="button" data-meta11-board-dir="1">PR\u00d3XIMA PE\u00c7A \u2192</button>
      </footer>
      <div class="meta11-lightbox" data-meta11-lightbox aria-hidden="true">
        <button class="meta11-lightbox-close" type="button" data-meta11-close>FECHAR</button>
        <div class="meta11-lightbox-media"><img src="" alt="" data-meta11-lightbox-image></div>
      </div>
    </article>
  `;
}

function setupMeta11CreativeArchivePreview(data = meta11CreativeArchive) {
  const preview = modalPreview.querySelector("[data-meta11-preview]");
  if (!preview) return;
  if (activePreviewCleanup) activePreviewCleanup();

  const projects = data.projects;
  const total = String(projects.length).padStart(2, "0");
  const projectButtons = [...preview.querySelectorAll("[data-meta11-project]")];
  const count = preview.querySelector("[data-meta11-count]");
  const headerLabel = preview.querySelector("[data-meta11-header-label]");
  const category = preview.querySelector("[data-meta11-category]");
  const title = preview.querySelector("[data-meta11-title]");
  const description = preview.querySelector("[data-meta11-description]");
  const boardCount = preview.querySelector("[data-meta11-board-count]");
  const boardStrip = preview.querySelector("[data-meta11-board-strip]");
  const mainImage = preview.querySelector("[data-meta11-main-image]");
  const lightbox = preview.querySelector("[data-meta11-lightbox]");
  const lightboxImage = preview.querySelector("[data-meta11-lightbox-image]");
  const boardDirectionButtons = [...preview.querySelectorAll("[data-meta11-board-dir]")];
  let activeProjectIndex = 0;
  let activeBoardIndex = 0;

  const renderBoardRail = (project) => project.boards.map((board, index) => `
    <button class="meta11-asset-navigation-item ${index === activeBoardIndex ? "is-active" : ""}" type="button" data-meta11-board="${index}">
      <span>${board.id}</span>${board.label}
    </button>
  `).join("");

  const updateBoard = (index) => {
    const project = projects[activeProjectIndex];
    activeBoardIndex = Math.max(0, Math.min(project.boards.length - 1, index));
    const board = project.boards[activeBoardIndex];
    mainImage.src = board.image;
    mainImage.alt = `${project.title} - ${board.label}`;
    description.textContent = board.description || project.description;
    boardCount.textContent = `${board.id} / ${String(project.boards.length).padStart(2, "0")}`;
    preview.querySelectorAll("[data-meta11-board]").forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.meta11Board) === activeBoardIndex);
    });
    boardDirectionButtons.forEach((button) => {
      const direction = Number(button.dataset.meta11BoardDir);
      const isDisabled = (direction < 0 && activeBoardIndex === 0) || (direction > 0 && activeBoardIndex === project.boards.length - 1);
      button.disabled = isDisabled;
      button.setAttribute("aria-disabled", String(isDisabled));
    });
    preview.querySelector("[data-meta11-board].is-active")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const bindBoardButtons = () => {
    preview.querySelectorAll("[data-meta11-board]").forEach((button) => {
      button.addEventListener("click", () => updateBoard(Number(button.dataset.meta11Board)));
    });
  };

  const updateProject = (index) => {
    activeProjectIndex = (index + projects.length) % projects.length;
    activeBoardIndex = 0;
    const project = projects[activeProjectIndex];
    const board = project.boards[0];
    projectButtons.forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.meta11Project) === activeProjectIndex);
    });
    count.textContent = `${project.id} / ${total}`;
    headerLabel.textContent = project.tabLabel;
    category.textContent = project.category;
    title.textContent = project.title;
    description.textContent = project.description;
    boardStrip.innerHTML = renderBoardRail(project);
    mainImage.src = board.image;
    mainImage.alt = `${project.title} - ${board.label}`;
    boardCount.textContent = `${board.id} / ${String(project.boards.length).padStart(2, "0")}`;
    bindBoardButtons();
    updateBoard(0);
  };

  const openLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = mainImage.src;
    lightboxImage.alt = mainImage.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta11-lightbox-open");
    preview.querySelector("[data-meta11-close]")?.focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.classList.remove("is-meta11-lightbox-open");
  };

  const handleKeydown = (event) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeLightbox();
    }
  };

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => updateProject(Number(button.dataset.meta11Project)));
  });
  boardDirectionButtons.forEach((button) => {
    button.addEventListener("click", () => updateBoard(activeBoardIndex + Number(button.dataset.meta11BoardDir)));
  });
  preview.querySelector("[data-meta11-open-lightbox]")?.addEventListener("click", openLightbox);
  preview.querySelector("[data-meta11-close]")?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", handleKeydown, true);

  activePreviewCleanup = () => {
    window.removeEventListener("keydown", handleKeydown, true);
    document.body.classList.remove("is-meta11-lightbox-open");
    activePreviewCleanup = null;
  };

  bindBoardButtons();
  updateProject(0);
}

function renderMusicReleasePreview(data) {
  const upper = (value) => String(value).toUpperCase();
  const trackTitle = upper(data.trackTitle);
  const creditName = upper(data.credits.editing);
  const renderVideoFrame = (src, label) => src
    ? `<video controls preload="metadata" src="${src}"></video>`
    : `<div class="music-video-empty"><span>${label}</span><strong>MP4 LOCAL / EM BREVE</strong></div>`;
  const infoRows = [
    ["ARTIST", data.artistName],
    ["FORMAT", data.format],
    ["ROLE", data.roles],
    ["DELIVERABLES", data.deliverables],
    ["STATUS", data.status],
    ["RUNTIME", data.runtime]
  ];
  const credits = [
    ["ARTISTA", data.credits.artist],
    ["AUTORIA", data.credits.authorship],
    ["LETRISTA", data.credits.lyricist],
    ["ARRANJOS", data.credits.arrangements],
    ["EDI\u00c7\u00c3O", data.credits.editing],
    ["COLORIZA\u00c7\u00c3O", data.credits.colorization],
    ["RELEASE YEAR", data.releaseYear]
  ];
  const renderValue = (value) => Array.isArray(value)
    ? value.map((item) => `<span>${upper(item)}</span>`).join("")
    : `<span>${upper(value)}</span>`;

  return `
    <article class="music-release-preview" aria-label="Preview de release musical">
      <header class="music-techbar">
        <span>PROJECT_01 / VISUAL RELEASE</span>
        <span>${upper(data.artistName)} \u2014 ${trackTitle}</span>
        <span>${data.releaseYear} / ${upper(data.location)}</span>
      </header>
      <aside class="music-project-panel" aria-label="Informacoes do projeto">
        <span class="music-panel-index">PROJECT 01</span>
        ${infoRows.map(([label, value]) => `
          <section>
            <h4>${label}</h4>
            ${renderValue(value)}
          </section>
        `).join("")}
      </aside>
      <section class="music-player-area">
        <nav class="music-tabs" aria-label="Midias do release">
          <button class="is-active" type="button" data-music-tab="visualizer">Visualizer</button>
          <button type="button" data-music-tab="credits">Credits</button>
        </nav>
        <div class="music-panels">
          <section class="music-panel is-visible" data-music-panel="visualizer">
            <div class="music-player-frame">
              ${renderVideoFrame(data.visualizerVideoSrc, "VISUALIZER")}
            </div>
            <div class="music-player-meta">
              <span>${upper(data.roles.join(" / "))} \u2014 ${creditName}</span>
              <span>00:00 / ${data.runtime}</span>
            </div>
          </section>
          <section class="music-panel" data-music-panel="credits">
            <div class="music-credits-grid">
              ${credits.map(([label, value]) => `
                <section>
                  <h4>${label}</h4>
                  <span>${upper(value)}</span>
                </section>
              `).join("")}
            </div>
          </section>
        </div>
      </section>
    </article>
  `;
}

function setupMusicReleasePreview() {
  const preview = modalPreview.querySelector(".music-release-preview");
  if (!preview) return;

  const tabs = preview.querySelectorAll("[data-music-tab]");
  const panels = preview.querySelectorAll("[data-music-panel]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.musicTab;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => {
        panel.classList.toggle("is-visible", panel.dataset.musicPanel === selected);
      });
    });
  });
}

function renderCookieRebrandCasePreview(data) {
  const renderDetails = (details = []) => details.map(([label, value]) => `
    <section class="cookie-case-detail">
      <span>${label}</span>
      <strong>${value}</strong>
    </section>
  `).join("");
  const renderTags = (tags = []) => tags.map((tag) => `<span>${tag}</span>`).join("");
  const renderRelatedImages = (images = [], title = "") => images.map((image, index) => `
    <button class="cookie-case-detail-trigger" type="button" data-cookie-lightbox-src="${image}" data-cookie-lightbox-alt="${title} - detalhe ${index + 1}">
      ${index === 0 ? "VER DETALHE +" : "ABRIR APLICAÇÃO +"}
    </button>
  `).join("");
  const chapters = data.chapters.map((chapter, index) => `
    <section class="cookie-case-chapter ${index === 0 ? "is-active" : ""} is-${chapter.imageMode}" data-cookie-chapter="${index}" aria-label="${chapter.id} ${chapter.label}">
      <div class="cookie-case-slide-content">
        <div class="cookie-case-media-stack">
          <div class="cookie-case-media" data-cookie-lightbox-src="${chapter.image}" data-cookie-lightbox-alt="${chapter.title}" role="button" tabindex="0" aria-label="Ampliar ${chapter.title}">
            <img src="${chapter.image}" alt="${chapter.title}">
            <span class="cookie-case-zoom-label">AMPLIAR +</span>
          </div>
          ${(chapter.relatedImages || chapter.secondaryImage) ? `<div class="cookie-case-support-strip">${renderRelatedImages([...(chapter.relatedImages || []), ...(chapter.secondaryImage ? [chapter.secondaryImage] : [])], chapter.title)}</div>` : ""}
        </div>
        <aside class="cookie-case-copy">
          ${chapter.eyebrow ? `<span>${chapter.eyebrow}</span>` : ""}
          <h3>${chapter.title}</h3>
          ${chapter.meta ? `<div class="cookie-case-tags">${renderTags(chapter.meta)}</div>` : ""}
          ${chapter.details ? `<div class="cookie-case-details">${renderDetails(chapter.details)}</div>` : ""}
          ${chapter.description ? `<p>${chapter.description}</p>` : ""}
        </aside>
      </div>
    </section>
  `).join("");
  const navItems = data.chapters.map((chapter, index) => `
    <button class="${index === 0 ? "is-active" : ""}" type="button" data-cookie-go="${index}">
      <span>${chapter.id}</span>${chapter.label}
    </button>
  `).join("");

  return `
    <article class="cookie-case-preview" tabindex="0" aria-label="Case horizontal Massa Crua Cookies">
      <header class="cookie-case-editorial-header">
        <div>
          <strong>${data.title}</strong>
          <span>${data.subtitle}</span>
        </div>
        <div>
          <strong data-cookie-counter>01 / ${String(data.chapters.length).padStart(2, "0")}</strong>
          <span data-cookie-active-label>${data.chapters[0].label}</span>
        </div>
        <div>
          <strong>${data.credits}</strong>
          <span>${data.role}</span>
        </div>
      </header>
      <div class="cookie-case-stage">${chapters}</div>
      <footer class="cookie-case-navigation" aria-label="Navegação do case">
        <button type="button" data-cookie-prev>← ANTERIOR</button>
        <nav>${navItems}</nav>
        <button type="button" data-cookie-next>PRÓXIMO →</button>
      </footer>
      <div class="cookie-case-lightbox" data-cookie-lightbox aria-hidden="true">
        <button class="cookie-case-lightbox-close" type="button" data-cookie-lightbox-close aria-label="Fechar imagem">FECHAR</button>
        <div class="cookie-case-lightbox-controls" aria-label="Controles de zoom">
          <button type="button" data-cookie-zoom-out aria-label="Reduzir zoom">-</button>
          <span data-cookie-zoom-label>100%</span>
          <button type="button" data-cookie-zoom-in aria-label="Aumentar zoom">+</button>
          <button type="button" data-cookie-zoom-reset>RESET</button>
        </div>
        <div class="cookie-case-lightbox-media">
          <img src="" alt="" data-cookie-lightbox-image>
        </div>
      </div>
    </article>
  `;
}

function setupCookieRebrandCasePreview() {
  const preview = modalPreview.querySelector(".cookie-case-preview");
  if (!preview) return;

  const chapters = [...preview.querySelectorAll("[data-cookie-chapter]")];
  const navItems = [...preview.querySelectorAll("[data-cookie-go]")];
  const counter = preview.querySelector("[data-cookie-counter]");
  const label = preview.querySelector("[data-cookie-active-label]");
  const lightbox = preview.querySelector("[data-cookie-lightbox]");
  const lightboxImage = preview.querySelector("[data-cookie-lightbox-image]");
  const zoomLabel = preview.querySelector("[data-cookie-zoom-label]");
  let activeIndex = 0;
  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let dragStart = null;

  const applyLightboxTransform = () => {
    if (!lightboxImage) return;
    lightboxImage.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    lightboxImage.classList.toggle("is-draggable", zoom > 1);
    if (zoomLabel) zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  };

  const setZoom = (nextZoom) => {
    zoom = Math.min(2.2, Math.max(0.8, nextZoom));
    if (zoom <= 1) {
      panX = 0;
      panY = 0;
    }
    applyLightboxTransform();
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.classList.remove("is-meta07-lightbox-open");
    zoom = 1;
    panX = 0;
    panY = 0;
    applyLightboxTransform();
  };

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImage || !src) return;
    zoom = 1;
    panX = 0;
    panY = 0;
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Imagem ampliada";
    applyLightboxTransform();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta07-lightbox-open");
    preview.querySelector("[data-cookie-lightbox-close]").focus({ preventScroll: true });
  };

  const update = (index) => {
    activeIndex = (index + chapters.length) % chapters.length;
    chapters.forEach((chapter, chapterIndex) => {
      chapter.classList.toggle("is-active", chapterIndex === activeIndex);
    });
    navItems.forEach((item, itemIndex) => {
      item.classList.toggle("is-active", itemIndex === activeIndex);
    });
    navItems[activeIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    const activeChapter = meta07CookieCase.chapters[activeIndex];
    counter.textContent = `${activeChapter.id} / ${String(chapters.length).padStart(2, "0")}`;
    label.textContent = activeChapter.headerLabel || activeChapter.label;
  };

  preview.querySelector("[data-cookie-prev]").addEventListener("click", () => update(activeIndex - 1));
  preview.querySelector("[data-cookie-next]").addEventListener("click", () => update(activeIndex + 1));
  navItems.forEach((item) => {
    item.addEventListener("click", () => update(Number(item.dataset.cookieGo)));
  });
  preview.addEventListener("keydown", (event) => {
    const lightboxTrigger = event.target.closest?.("[data-cookie-lightbox-src]");
    if ((event.key === "Enter" || event.key === " ") && lightboxTrigger) {
      event.preventDefault();
      openLightbox(lightboxTrigger.dataset.cookieLightboxSrc, lightboxTrigger.dataset.cookieLightboxAlt);
      return;
    }
    if (event.key === "ArrowLeft") update(activeIndex - 1);
    if (event.key === "ArrowRight") update(activeIndex + 1);
  });

  preview.querySelectorAll("[data-cookie-lightbox-src]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openLightbox(trigger.dataset.cookieLightboxSrc, trigger.dataset.cookieLightboxAlt);
    });
  });

  preview.querySelector("[data-cookie-lightbox-close]").addEventListener("click", closeLightbox);
  preview.querySelector("[data-cookie-zoom-in]").addEventListener("click", () => setZoom(zoom + 0.2));
  preview.querySelector("[data-cookie-zoom-out]").addEventListener("click", () => setZoom(zoom - 0.2));
  preview.querySelector("[data-cookie-zoom-reset]").addEventListener("click", () => {
    zoom = 1;
    panX = 0;
    panY = 0;
    applyLightboxTransform();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightboxImage.addEventListener("dblclick", () => setZoom(zoom === 1 ? 1.6 : 1));
  lightboxImage.addEventListener("pointerdown", (event) => {
    if (zoom <= 1) return;
    dragStart = { x: event.clientX - panX, y: event.clientY - panY };
    lightboxImage.setPointerCapture(event.pointerId);
  });
  lightboxImage.addEventListener("pointermove", (event) => {
    if (!dragStart || zoom <= 1) return;
    panX = event.clientX - dragStart.x;
    panY = event.clientY - dragStart.y;
    applyLightboxTransform();
  });
  lightboxImage.addEventListener("pointerup", () => {
    dragStart = null;
  });
  lightboxImage.addEventListener("pointercancel", () => {
    dragStart = null;
  });

  const lightboxKeyHandler = (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeLightbox();
    }
  };
  window.addEventListener("keydown", lightboxKeyHandler, true);
  activePreviewCleanup = () => {
    window.removeEventListener("keydown", lightboxKeyHandler, true);
    document.body.classList.remove("is-meta07-lightbox-open");
    activePreviewCleanup = null;
  };
}

function renderAudiovisualCatalogPreview(projects) {
  const firstProject = projects[0];
  const renderMetaRows = (project) => `
    <section><h4>PROJETO</h4><span data-av-project-count>${project.id} / ${String(projects.length).padStart(2, "0")}</span></section>
    <section><h4>T\u00cdTULO</h4><span data-av-title>${project.title}</span></section>
    <section><h4>FORMATO</h4><span data-av-format>${project.format}</span></section>
    <section><h4>FUN\u00c7\u00c3O</h4><span data-av-role>${project.roles.join("<br>")}</span></section>
    <section><h4>STATUS</h4><span data-av-status>ARQUIVADO / ${project.status}</span></section>
  `;

  return `
    <article class="av-catalog-preview" aria-label="Catálogo audiovisual independente" tabindex="0">
      <header class="av-archive-header">
        <div>
          <strong>ARQUIVO AUDIOVISUAL</strong>
          <span>DIRE\u00c7\u00c3O / EDI\u00c7\u00c3O / PRODU\u00c7\u00c3O VISUAL</span>
        </div>
        <div>
          <strong>PROJETOS SELECIONADOS</strong>
        </div>
        <div>
          <strong>03 PROJETOS</strong>
          <span>2026</span>
        </div>
      </header>
      <aside class="av-project-index" aria-label="Projetos do catálogo">
        ${projects.map((project, index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" data-av-project="${index}">
            <span>${project.id}</span>
            <strong>${project.title}</strong>
          </button>
        `).join("")}
      </aside>
      <section class="av-player-column">
        <div class="music-player-frame av-shared-video-frame">
          <video data-av-video src="${firstProject.videoSrc}" controls playsinline preload="metadata"></video>
        </div>
        <div class="music-player-meta av-shared-video-meta">
          <span data-av-player-caption>${firstProject.roles.join(" / ")} — ${firstProject.title}</span>
          <span data-av-player-status>ÁUDIO HABILITADO</span>
        </div>
        <section class="av-description">
          <span data-av-description-index>PROJETO ${firstProject.id}</span>
          <h3 data-av-description-title>${firstProject.title}</h3>
          <p data-av-description>${firstProject.description}</p>
        </section>
        <footer class="av-delivery-strip">
          <section>
            <span>FUN\u00c7\u00c3O</span>
            <strong data-av-strip-role>${firstProject.roles.join(" / ")}</strong>
          </section>
          <section>
            <span>FORMATO</span>
            <strong>V\u00cdDEO / CONTE\u00daDO DE LAN\u00c7AMENTO</strong>
          </section>
          <section>
            <span>PROJETO</span>
            <strong data-av-strip-project>${firstProject.id} / ${String(projects.length).padStart(2, "0")}</strong>
          </section>
        </footer>
      </section>
      <aside class="av-project-meta" aria-label="Metadados técnicos do projeto">
        ${renderMetaRows(firstProject)}
      </aside>
    </article>
  `;
}

function setupAudiovisualCatalogPreview(projects) {
  const preview = modalPreview.querySelector(".av-catalog-preview");
  if (!preview) return;

  const video = preview.querySelector("[data-av-video]");
  const buttons = [...preview.querySelectorAll("[data-av-project]")];
  const playerCaption = preview.querySelector("[data-av-player-caption]");
  const playerStatus = preview.querySelector("[data-av-player-status]");
  const selectedNodes = {
    title: preview.querySelector("[data-av-title]"),
    format: preview.querySelector("[data-av-format]"),
    role: preview.querySelector("[data-av-role]"),
    status: preview.querySelector("[data-av-status]"),
    count: preview.querySelector("[data-av-project-count]"),
    descriptionIndex: preview.querySelector("[data-av-description-index]"),
    descriptionTitle: preview.querySelector("[data-av-description-title]"),
    description: preview.querySelector("[data-av-description]"),
    stripRole: preview.querySelector("[data-av-strip-role]"),
    stripProject: preview.querySelector("[data-av-strip-project]")
  };
  let activeIndex = 0;

  const updatePlaybackUi = () => {
    if (playerStatus) playerStatus.textContent = video.paused ? "PLAY DISPONIVEL / AUDIO HABILITADO" : "REPRODUZINDO / AUDIO HABILITADO";
  };

  const updateProject = (index) => {
    const project = projects[index];
    if (!project) return;
    activeIndex = index;
    video.pause();
    video.currentTime = 0;
    video.src = project.videoSrc;
    video.load();
    buttons.forEach((button, buttonIndex) => button.classList.toggle("is-active", buttonIndex === index));
    selectedNodes.title.textContent = project.title;
    selectedNodes.format.textContent = project.format;
    selectedNodes.role.innerHTML = project.roles.join("<br>");
    selectedNodes.status.textContent = `ARQUIVADO / ${project.status}`;
    selectedNodes.count.textContent = `${project.id} / ${String(projects.length).padStart(2, "0")}`;
    selectedNodes.descriptionIndex.textContent = `PROJETO ${project.id}`;
    selectedNodes.descriptionTitle.textContent = project.title;
    selectedNodes.description.textContent = project.description;
    selectedNodes.stripRole.textContent = project.roles.join(" / ");
    selectedNodes.stripProject.textContent = `${project.id} / ${String(projects.length).padStart(2, "0")}`;
    if (playerCaption) playerCaption.textContent = `${project.roles.join(" / ")} — ${project.title}`;
    updatePlaybackUi();
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => updateProject(index));
  });

  preview.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + direction + projects.length) % projects.length;
    updateProject(nextIndex);
  });

  video.addEventListener("loadedmetadata", updatePlaybackUi);
  video.addEventListener("timeupdate", updatePlaybackUi);
  video.addEventListener("play", updatePlaybackUi);
  video.addEventListener("pause", updatePlaybackUi);
  video.addEventListener("ended", updatePlaybackUi);
  updatePlaybackUi();
}

// NAVEGAÇÃO INTERNA PADRONIZADA:
// Este rail controla apenas as abas internas do preview.
// Ele deve permanecer fora do conteúdo ativo e não pode ser removido,
// ocultado, sobreposto ou movido para dentro de uma aba específica.
function renderInternalPreviewRail(items, dataAttribute, options = {}) {
  const previousLabel = options.previousLabel || "\u2190 ANTERIOR";
  const nextLabel = options.nextLabel || "PR\u00d3XIMO \u2192";
  const railClassName = options.className ? ` ${options.className}` : "";
  const activeIndex = Number.isInteger(options.activeIndex) ? options.activeIndex : 0;
  return `
    <footer class="internal-preview-rail${railClassName}">
      <button class="internal-preview-rail__previous" type="button" data-${dataAttribute}-dir="-1">${previousLabel}</button>
      <nav class="internal-preview-rail__items" aria-label="${options.ariaLabel || "Abas internas"}">
        ${items.map((item, index) => `
          <button class="internal-preview-rail__item ${index === activeIndex ? "is-active" : ""}" type="button" data-${dataAttribute}="${item.id}">
            <span>${String(index + 1).padStart(2, "0")}</span>${item.label}
          </button>
        `).join("")}
      </nav>
      <button class="internal-preview-rail__next" type="button" data-${dataAttribute}-dir="1">${nextLabel}</button>
    </footer>
  `;
}

function renderSaasCampaignPreview(data) {
  const tabItems = [
    { id: "overview", label: "Vis\u00e3o Geral" },
    { id: "assets", label: "Pe\u00e7as de Campanha" },
    { id: "timeline", label: "Fluxo de Lan\u00e7amento" },
    { id: "results", label: "Resultados" }
  ];
  const renderAssetCard = (card) => `
    <article class="campaign-asset-card is-${card.tone}">
      <div class="campaign-asset-thumb">
        <span>${card.id}</span>
        <strong>${card.copy}</strong>
        <em>${card.title}</em>
        <i></i>
      </div>
      <footer>
        <span>${card.tag}</span>
        <span>${card.title.split(" / ")[0]}</span>
      </footer>
    </article>
  `;

  return `
    <article class="campaign-preview" aria-label="Preview de campanha SaaS Frizzar">
      <header class="campaign-tech-header">
        <span>FRIZZAR / LAN\u00c7AMENTO DE PRODUTO</span>
        <strong>${data.campaignName}</strong>
        <span>CAMPANHA 01 / ${data.campaignYear}</span>
        <mark>STATUS: ${data.status}</mark>
      </header>
      <section class="campaign-hero">
        <div class="campaign-hero-copy">
          <span>NOVA FUNCIONALIDADE</span>
          <h3>${data.headline}</h3>
          <p>${data.supportCopy}</p>
          <button type="button" data-campaign-tab-shortcut="assets">EXPLORAR LAN\u00c7AMENTO \u2192</button>
        </div>
        <div class="campaign-product-mockup" aria-label="Mockup da Central de Retorno">
          <header>
            <span>FRIZZAR<span>.</span></span>
            <strong>${data.campaignName}</strong>
          </header>
          <div class="campaign-metric-grid">
            <section><span>Clientes para reativar</span><strong>148</strong></section>
            <section><span>Retornos confirmados</span><strong>32</strong></section>
            <section><span>Campanhas ativas</span><strong>04</strong></section>
            <section><span>Taxa de reativa\u00e7\u00e3o</span><strong>21,6%</strong></section>
          </div>
          <div class="campaign-feature-list">
            <span>Clientes sem retorno</span>
            <span>Campanha ativa</span>
            <span>Mensagens programadas</span>
          </div>
        </div>
      </section>
      <!-- META 05:
      A navegação Visão Geral / Peças de Campanha / Fluxo de Lançamento /
      Resultados usa o rail inferior padronizado.
      Não recriar abas flutuantes dentro da área de conteúdo. -->
      <section class="campaign-panels">
        <div class="campaign-panel is-visible" data-campaign-panel="overview">
          <section class="campaign-objective">
            <span>OBJETIVO DA CAMPANHA</span>
            <p>${data.objective}</p>
          </section>
          <section class="campaign-system">
            <span>SISTEMA DA CAMPANHA</span>
            <div>${data.system.map((item) => `<b>${item}</b>`).join("")}</div>
          </section>
          <section class="campaign-flow">
            ${data.flow.map((item) => `<span>${item}</span>`).join("")}
          </section>
        </div>
        <div class="campaign-panel" data-campaign-panel="assets">
          <div class="campaign-asset-grid">
            ${data.cards.map(renderAssetCard).join("")}
          </div>
        </div>
        <div class="campaign-panel" data-campaign-panel="timeline">
          <div class="campaign-timeline">
            ${data.timeline.map((phase, index) => `
              <button class="${index === 2 ? "is-active" : ""}" type="button" data-campaign-phase="${index}">
                <span>FASE ${phase.id}</span>
                <strong>${phase.title}</strong>
                <em>${phase.status}</em>
              </button>
            `).join("")}
          </div>
          <p class="campaign-phase-note" data-campaign-phase-note>${data.timeline[2].body}</p>
        </div>
        <div class="campaign-panel" data-campaign-panel="results">
          <div class="campaign-results">
            ${data.metrics.map(([label, value, progress]) => `
              <section>
                <span>${label}</span>
                <strong>${value}</strong>
                <i style="--result-progress: ${progress}%"></i>
              </section>
            `).join("")}
          </div>
          <p class="campaign-results-note">A campanha deixa de ser apenas comunica\u00e7\u00e3o e passa a orientar descoberta, ativa\u00e7\u00e3o e uso da funcionalidade.</p>
        </div>
      </section>
      <footer class="campaign-status-strip">
        <span>SISTEMA DE CAMPANHA / PRODUTO + COMUNICA\u00c7\u00c3O</span>
        <span>06 ENTREGAS / 04 CANAIS / 01 FUNCIONALIDADE</span>
        <span>PAPEL / SISTEMA VISUAL + CONTE\u00daDO DE LAN\u00c7AMENTO</span>
      </footer>
      ${renderInternalPreviewRail(tabItems, "campaign-tab", { ariaLabel: "Se\u00e7\u00f5es da campanha", className: "is-meta05-rail" })}
    </article>
  `;
}

function setupSaasCampaignPreview(data) {
  const preview = modalPreview.querySelector(".campaign-preview");
  if (!preview) return;

  const tabs = [...preview.querySelectorAll("[data-campaign-tab]")];
  const panels = [...preview.querySelectorAll("[data-campaign-panel]")];
  const rail = preview.querySelector(".internal-preview-rail__items");
  const shortcuts = [...preview.querySelectorAll("[data-campaign-tab-shortcut]")];
  const phases = [...preview.querySelectorAll("[data-campaign-phase]")];
  const phaseNote = preview.querySelector("[data-campaign-phase-note]");
  const phaseBodies = (data.timeline || []).map((phase) => phase.body);

  const selectTab = (id) => {
    tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.campaignTab === id));
    panels.forEach((panel) => panel.classList.toggle("is-visible", panel.dataset.campaignPanel === id));
    preview.querySelector("[data-campaign-tab].is-active")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(tab.dataset.campaignTab)));
  preview.querySelectorAll("[data-campaign-tab-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      const activeIndex = Math.max(0, tabs.findIndex((tab) => tab.classList.contains("is-active")));
      const direction = Number(button.dataset.campaignTabDir);
      const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
      selectTab(tabs[nextIndex].dataset.campaignTab);
    });
  });
  shortcuts.forEach((button) => button.addEventListener("click", () => selectTab(button.dataset.campaignTabShortcut)));
  phases.forEach((phase) => {
    phase.addEventListener("click", () => {
      const index = Number(phase.dataset.campaignPhase);
      phases.forEach((item) => item.classList.toggle("is-active", item === phase));
      phaseNote.textContent = phaseBodies[index] || "";
    });
  });
  rail?.scrollTo({ left: 0 });
}

function renderFrizzarProductionPreview() {
  const categories = [
    {
      id: "biblioteca",
      label: "Biblioteca",
      kicker: "Visão geral",
      title: "Hub de produção Frizzar",
      cards: [
        ["Clube de Assinaturas", "Story 1080x1920", "Template", "Aprovado", "light", "story"],
        ["Chatbot da Frizzar", "Reel", "Editável", "Em uso", "human", "reel"],
        ["Clientes dizem", "Feed 1080x1350", "Prova social", "Publicado", "proof", "feed"],
        ["Não vire detetive", "1:1", "Humor", "Campanha", "comic", "square"],
        ["Fechamento de caixa", "Story 1080x1920", "Campanha", "Canva", "mockup", "story"],
        ["Taxa de frequência", "Reel", "CapCut", "Em uso", "dark", "reel"]
      ]
    },
    {
      id: "templates",
      label: "Templates",
      kicker: "Matriz editável",
      title: "Peças reutilizáveis",
      cards: [
        ["Clube de Assinaturas", "Feed 1080x1350", "Template", "Editável", "light", "feed"],
        ["Chatbot", "Story 1080x1920", "Template", "Aprovado", "dark", "story"],
        ["Caixa na tela", "Feed 1080x1350", "Canva", "Editável", "mockup", "feed"],
        ["Taxa de Frequência", "Reel", "CapCut", "Em uso", "human", "reel"],
        ["Prova social", "Story 1080x1920", "Template", "Publicado", "proof", "story"],
        ["Plano pronto", "1:1", "Template", "Canva", "comic", "square"]
      ]
    },
    {
      id: "campanhas",
      label: "Campanhas",
      kicker: "Comunicação SaaS",
      title: "Campanhas e lançamentos",
      cards: [
        ["Seu salão merece", "Campanha", "Feed 1080x1350", "Publicado", "type", "feed"],
        ["Mais agenda, menos caos", "Story 1080x1920", "Social Ads", "Em uso", "dark", "story"],
        ["Recorrência mensal", "Feed 1080x1350", "Lançamento", "Aprovado", "mockup", "feed"],
        ["Cliente sumiu", "1:1", "Humor", "CTA", "comic", "square"],
        ["Atendimento organizado", "Story 1080x1920", "Campanha", "Canva", "human", "story"],
        ["Clientes fiéis", "Feed 1080x1350", "Prova social", "Publicado", "proof", "feed"]
      ]
    },
    {
      id: "reels",
      label: "Reels",
      kicker: "Capas de vídeo",
      title: "Reels e motion",
      cards: [
        ["Você conhece a taxa", "Reel", "CapCut", "Editável", "dark", "reel"],
        ["Chatbot na prática", "Reel", "Template", "Em uso", "human", "reel"],
        ["Ruim, bom ou escala", "Reel", "Educativo", "Publicado", "type", "reel"],
        ["Boleto vencido", "Reel", "Campanha", "Aprovado", "comic", "square"],
        ["Fluxo da semana", "Reel", "Sequência", "CapCut", "mockup", "reel"],
        ["SOS salão", "Reel", "Capa", "Finalizado", "editkit", "reel"]
      ]
    },
    {
      id: "stories",
      label: "Stories",
      kicker: "Consumo rápido",
      title: "Stories verticais",
      cards: [
        ["Agenda cheia", "Story 1080x1920", "Template", "Publicado", "human", "story"],
        ["Clube de Assinaturas", "Story 1080x1920", "Canva", "Editável", "light", "story"],
        ["Caixa fechado", "Story 1080x1920", "Sistema", "Aprovado", "mockup", "story"],
        ["Depoimento", "Story 1080x1920", "Prova social", "Em uso", "proof", "story"],
        ["3 passos", "Story 1080x1920", "Educativo", "Template", "type", "story"],
        ["Oferta recorrente", "Story 1080x1920", "Campanha", "Finalizado", "dark", "story"]
      ]
    },
    {
      id: "feed",
      label: "Feed",
      kicker: "Grade social",
      title: "Posts de feed",
      cards: [
        ["O que clientes dizem", "Feed 1080x1350", "Prova social", "Publicado", "proof", "feed"],
        ["Sistema que trabalha", "Feed 1080x1350", "Campanha", "Aprovado", "light", "feed"],
        ["Resumo financeiro", "Feed 1080x1350", "Dashboard", "Canva", "mockup", "feed"],
        ["Cade o PIX", "1:1", "Comédia", "Publicado", "comic", "square"],
        ["Atendimento sem ruído", "Feed 1080x1350", "Template", "Em uso", "human", "feed"],
        ["Recorrência", "Feed 1080x1350", "Social Ads", "Publicado", "dark", "feed"]
      ]
    },
    {
      id: "capcut",
      label: "CapCut",
      kicker: "Vídeo reutilizável",
      title: "Sequências CapCut",
      cards: [
        ["Hook bar / intro", "Hook", "Legenda", "CapCut", "editkit", "feed"],
        ["Punch zoom", "Efeito", "SFX", "Editável", "light", "feed"],
        ["CTA animado", "CTA", "Transição", "Finalizado", "dark", "feed"],
        ["Sticker popup", "Callout", "Moldura", "CapCut", "type", "feed"],
        ["Subtitle pack", "Legenda", "Motion", "Em uso", "editkit", "feed"],
        ["Antes / depois", "Intro", "Outro", "Template", "mockup", "feed"]
      ]
    },
    {
      id: "canva",
      label: "Canva",
      kicker: "Sistema modular",
      title: "Templates Canva",
      cards: [
        ["Canva Social Ads", "Feed 1080x1350", "Template", "Editável", "light", "feed"],
        ["Stories promocionais", "Story 1080x1920", "Canva", "Em uso", "type", "story"],
        ["Carrossel financeiro", "Feed 1080x1350", "Dashboard", "Aprovado", "mockup", "feed"],
        ["Post com prova social", "Feed 1080x1350", "Template", "Publicado", "proof", "feed"],
        ["Campanha salão", "Story 1080x1920", "Social Ads", "Finalizado", "human", "story"],
        ["Benefício direto", "Feed 1080x1350", "Campanha", "Canva", "dark", "feed"]
      ]
    },
    {
      id: "finalizados",
      label: "Finalizados",
      kicker: "Entrega publicada",
      title: "Assets finalizados",
      cards: [
        ["Clube de Assinaturas", "Publicado", "Feed 1080x1350", "Finalizado", "light", "feed"],
        ["Chatbot da Frizzar", "Publicado", "Reel", "Em uso", "human", "reel"],
        ["Fechamento de caixa", "Aprovado", "Story 1080x1920", "Finalizado", "mockup", "story"],
        ["Clientes dizem", "Publicado", "Prova social", "Aprovado", "proof", "feed"],
        ["Taxa de frequência", "Publicado", "CapCut", "Finalizado", "dark", "reel"],
        ["Agenda explodiu", "Entregue", "1:1", "Publicado", "comic", "square"]
      ]
    }
  ];
  const folders = ["Templates Mestre", "CapCut Reutilizáveis", "Canva Social Ads", "Campanhas SaaS Beleza"];
  const week = [["SEG", "Presencial"], ["TER", "Home office"], ["QUA", "Presencial"], ["QUI", "Home office"], ["SEX", "Home office"]];
  const renderCards = (cards) => cards.map((card, index) => `
    <article class="frizzar-card is-${card[4]} is-${card[5] || "feed"} is-card-${index + 1}">
      <div class="frizzar-card-art">
        <span class="frizzar-card-logo">FRIZZAR<span>.</span></span>
        <strong>${card[0]}</strong>
        <em>${card[4] === "proof" ? "clientes dizem" : card[4] === "mockup" ? "dashboard vivo" : card[4] === "human" ? "na prática" : card[4] === "comic" ? "e agora" : card[4] === "editkit" ? "motion kit" : index % 2 === 0 ? "sistema que trabalha" : "produção escalável"}</em>
        <div class="frizzar-device"><i></i><i></i><i></i></div>
        <div class="frizzar-person"></div>
        <div class="frizzar-play"></div>
        <div class="frizzar-dashboard-lines"><i></i><i></i><i></i></div>
      </div>
      <div class="frizzar-tags">
        ${card.slice(1, 4).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");

  return `
    <article class="frizzar-preview" aria-label="Sistema de produção Frizzar">
      <!-- META 02:
      A navegação Biblioteca / Templates / Campanhas / Reels / Stories /
      Feed / CapCut / Canva / Finalizados usa o rail inferior padronizado.
      Não recriar uma sidebar de navegação paralela. -->
      <section class="frizzar-workspace">
        <header class="frizzar-topbar">
          <div class="frizzar-mark">FRIZZAR<span>.</span></div>
          <div>
            <span data-frizzar-kicker>${categories[0].kicker}</span>
            <h3 data-frizzar-title>${categories[0].title}</h3>
          </div>
          <div class="frizzar-search">buscar formato, campanha ou template</div>
        </header>
        <div class="frizzar-main-grid">
          <div class="frizzar-panels">
            ${categories.map((category, index) => `
              <div class="frizzar-card-grid ${index === 0 ? "is-visible" : ""}" data-frizzar-panel="${category.id}" data-frizzar-kicker-value="${category.kicker}" data-frizzar-title-value="${category.title}">
                ${renderCards(category.cards)}
              </div>
            `).join("")}
          </div>
          <aside class="frizzar-system-panel">
            <section>
              <h4>Pastas principais</h4>
              ${folders.map((folder) => `<span class="frizzar-folder">${folder}</span>`).join("")}
            </section>
            <section>
              <h4>Fluxo semanal</h4>
              <div class="frizzar-week">
                ${week.map(([day, mode]) => `<span><b>${day}</b>${mode}</span>`).join("")}
              </div>
            </section>
            <section class="frizzar-stats">
              <span><b>48</b>templates</span>
              <span><b>3x2</b>modelo híbrido</span>
              <span><b>12</b>formatos prontos</span>
            </section>
          </aside>
        </div>
      </section>
      ${renderInternalPreviewRail(categories, "frizzar-tab", { ariaLabel: "Categorias da biblioteca Frizzar" })}
    </article>
  `;
}

function setupFrizzarProductionPreview() {
  const preview = modalPreview.querySelector(".frizzar-preview");
  if (!preview) return;

  const tabs = [...preview.querySelectorAll("[data-frizzar-tab]")];
  const panels = [...preview.querySelectorAll("[data-frizzar-panel]")];
  const kicker = preview.querySelector("[data-frizzar-kicker]");
  const title = preview.querySelector("[data-frizzar-title]");

  const selectTab = (id) => {
    const selectedPanel = panels.find((panel) => panel.dataset.frizzarPanel === id);
    tabs.forEach((item) => item.classList.toggle("is-active", item.dataset.frizzarTab === id));
    panels.forEach((panel) => panel.classList.toggle("is-visible", panel === selectedPanel));
    if (selectedPanel) {
      kicker.textContent = selectedPanel.dataset.frizzarKickerValue;
      title.textContent = selectedPanel.dataset.frizzarTitleValue;
    }
    preview.querySelector("[data-frizzar-tab].is-active")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(tab.dataset.frizzarTab)));
  preview.querySelectorAll("[data-frizzar-tab-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      const activeIndex = Math.max(0, tabs.findIndex((tab) => tab.classList.contains("is-active")));
      const direction = Number(button.dataset.frizzarTabDir);
      const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
      selectTab(tabs[nextIndex].dataset.frizzarTab);
    });
  });
}

function renderProductPreview(details) {
  const labels = nystagmusStoreLabels;
  const products = details.previewProducts || [];
  const listing = products.map((product) => `
    <button class="ny-listing-item" type="button" data-preview-product="${product.id}">
      <span class="ny-listing-image"><img src="${product.listingImage}" alt="${product.name}"></span>
      <span class="ny-listing-name">${product.name}</span>
    </button>
  `).join("");
  const firstProduct = products[0];
  const sizes = ["XS", "S", "M", "L", "XL"].map((size) => `<button type="button">${size}</button>`).join("");

  return `
    <article class="nystagmus-preview" data-nystagmus-preview>
      <header class="ny-preview-header">
        <button class="ny-preview-logo" type="button" data-preview-home aria-label="Voltar para a entrada da Nystagmus">
          <img src="${details.previewLogo}" alt="Nystagmus">
        </button>
        <nav class="ny-preview-nav" aria-label="Navegacao Nystagmus">
          <button type="button" data-preview-home>${labels.shop}</button>
          <span>${labels.archive}</span>
          <span>${labels.about}</span>
        </nav>
        <div class="ny-preview-actions">
          <span>${labels.search}</span>
          <span>${labels.cart}</span>
        </div>
      </header>

      <section class="ny-preview-screen ny-listing-screen" data-preview-screen="listing" aria-label="Entrada Nystagmus">
        <header class="ny-home-header" aria-label="Navegacao da homepage Nystagmus">
          <button class="ny-home-logo" type="button" data-preview-home aria-label="Nystagmus">
            <img src="${details.previewLogo}" alt="Nystagmus">
          </button>
          <nav class="ny-home-nav" aria-label="Navegacao principal Nystagmus">
            <button type="button" data-preview-home>${labels.shop}</button>
            <span>${labels.archive}</span>
            <span>${labels.about}</span>
          </nav>
          <div class="ny-home-actions">
            <span>${labels.search}</span>
            <span>${labels.cart}</span>
          </div>
        </header>
        <div class="ny-listing-grid">${listing}</div>
      </section>

      <section class="ny-preview-screen ny-product-screen is-hidden" data-preview-screen="product" aria-label="Produto Nystagmus">
        <div class="ny-product-gallery">
          <button class="ny-gallery-control is-previous" type="button" data-gallery-dir="-1" aria-label="Imagem anterior">&lsaquo;</button>
          <img class="ny-product-image" src="${firstProduct.gallery[0]}" alt="${firstProduct.name}">
          <button class="ny-gallery-control is-next" type="button" data-gallery-dir="1" aria-label="Proxima imagem">&rsaquo;</button>
        </div>
        <div class="ny-gallery-meta">
          <span data-gallery-count>01 / ${String(firstProduct.gallery.length).padStart(2, "0")}</span>
        </div>
        <aside class="ny-product-info" aria-label="Informacoes do produto">
          <button class="ny-product-back" type="button" data-preview-home>${labels.backToShop}</button>
          <h3 data-product-name>${firstProduct.name}</h3>
          <p class="ny-product-subtitle" data-product-category>${firstProduct.category}</p>
          <p class="ny-product-description" data-product-description>${firstProduct.description}</p>
          <div class="ny-size-block">
            <span>${labels.size}</span>
            <div class="ny-size-options">${sizes}</div>
          </div>
          <button class="ny-buy-button" type="button">${labels.addToCart}</button>
          <p class="ny-product-price" data-product-price>${firstProduct.price}</p>
        </aside>
      </section>
    </article>
  `;
}

function renderMeta06NystagmusDropPreview(dropData = meta06Drop) {
  const labels = {
    ...nystagmusStoreLabels,
    shop: "LOJA",
    archive: "ARQUIVO",
    about: "SOBRE",
    search: "BUSCAR",
    cart: "SACOLA",
    home: "INÍCIO",
    newArrivals: "NOVIDADES",
    filters: "FILTROS",
    backToShop: "VOLTAR PARA A LOJA",
    size: "TAMANHO",
    addToCart: "ADICIONAR À SACOLA —",
    viewCollection: "VER COLEÇÃO →",
    available: "DISPONÍVEL"
  };
  const products = dropData.products || meta06Drop.products;
  const firstProduct = products[0];
  const sizes = ["XS", "S", "M", "L", "XL"].map((size) => `<button type="button">${size}</button>`).join("");
  const landingImages = (dropData.landingImages || meta06Drop.landingImages).map((image, index) => `
    <img class="${index === 0 ? "is-active" : ""}" src="${image}" alt="Campanha Nystagmus Drop 02 ${String(index + 1).padStart(2, "0")}" data-drop-landing-image>
  `).join("");
  const catalogItems = products.map((product) => `
    <button class="drop-catalog-item" type="button" data-drop-product="${product.id}">
      <span class="drop-catalog-image"><img src="${product.frontImage}" alt="${product.title}"></span>
      <span class="drop-catalog-name">${product.title}</span>
      <span class="drop-catalog-meta">${product.category}</span>
      <span class="drop-catalog-price">${product.price}</span>
    </button>
  `).join("");
  const archiveItems = meta06Archive.map((item, index) => `
    <figure class="drop-archive-item" id="drop-archive-${item.id}">
      <button class="drop-archive-image-frame" type="button" data-drop-archive-open="${index}" aria-label="Ampliar ${item.title}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </button>
      <figcaption>
        <span>${item.id} / ${String(meta06Archive.length).padStart(2, "0")}</span>
        <strong>${item.title}</strong>
      </figcaption>
    </figure>
  `).join("");
  const archiveIndex = meta06Archive.map((item, index) => `
    <button class="${index === 0 ? "is-active" : ""}" type="button" data-drop-archive-jump="${index}">${item.id}</button>
  `).join("");

  return `
    <article class="nystagmus-preview meta06-drop-preview" data-meta06-preview>
      <section class="drop-screen drop-landing-screen" data-drop-screen="landing" aria-label="Campanha Nystagmus Drop 02">
        <div class="drop-landing-media" data-drop-open-catalog>
          ${landingImages}
        </div>
        <header class="ny-home-header drop-overlay-header" aria-label="Navegação Nystagmus">
          <button class="ny-home-logo" type="button" data-drop-open-catalog aria-label="Nystagmus">
            <img src="${dropData.logo || meta06Drop.logo}" alt="Nystagmus">
          </button>
          <nav class="ny-home-nav" aria-label="Navegação principal Nystagmus">
            <button type="button" data-drop-open-catalog>${labels.shop}</button>
            <button type="button" data-drop-open-archive>${labels.archive}</button>
            <span>${labels.about}</span>
          </nav>
          <div class="ny-home-actions">
            <span>${labels.search}</span>
            <span>${labels.cart}</span>
          </div>
        </header>
        <button class="drop-enter-button" type="button" data-drop-open-catalog>${labels.viewCollection}</button>
        <span class="drop-landing-count" data-drop-landing-count>01 / 04</span>
      </section>

      <section class="drop-screen drop-catalog-screen is-hidden" data-drop-screen="catalog" aria-label="Shop New Arrivals">
        <header class="ny-preview-header drop-light-header">
          <button class="ny-preview-logo" type="button" data-drop-home aria-label="Nystagmus">
            <img src="${dropData.logo || meta06Drop.logo}" alt="Nystagmus">
          </button>
          <nav class="ny-preview-nav" aria-label="Navegação principal Nystagmus">
            <button type="button" data-drop-open-catalog>${labels.shop}</button>
            <button type="button" data-drop-open-archive>${labels.archive}</button>
            <span>${labels.about}</span>
          </nav>
          <div class="ny-preview-actions">
            <span>${labels.search}</span>
            <span>${labels.cart}</span>
          </div>
        </header>
        <div class="drop-catalog-topline">
          <span>${labels.home} &gt; ${labels.newArrivals}</span>
          <button type="button">${labels.filters}</button>
        </div>
        <div class="drop-catalog-grid">${catalogItems}</div>
      </section>

      <section class="drop-screen drop-archive-screen is-hidden" data-drop-screen="archive" aria-label="Arquivo visual Nystagmus Drop 02">
        <header class="ny-preview-header drop-archive-header">
          <button class="ny-preview-logo" type="button" data-drop-home aria-label="Nystagmus">
            <img src="${dropData.logo || meta06Drop.logo}" alt="Nystagmus">
          </button>
          <nav class="ny-preview-nav" aria-label="Navegação principal Nystagmus">
            <button type="button" data-drop-open-catalog>${labels.shop}</button>
            <button class="is-active" type="button" data-drop-open-archive>${labels.archive}</button>
            <span>${labels.about}</span>
          </nav>
          <div class="ny-preview-actions">
            <span>${labels.search}</span>
            <span>${labels.cart}</span>
          </div>
        </header>
        <div class="drop-archive-topline">
          <div>
            <strong>ARQUIVO / DROP 02</strong>
            <span>CAMPANHA / LOOKBOOK / DETALHES / PROCESSO</span>
          </div>
          <div>
            <strong>09 IMAGENS</strong>
            <span>2027</span>
          </div>
        </div>
        <div class="drop-archive-grid">${archiveItems}</div>
        <nav class="drop-archive-index" aria-label="Índice do arquivo">${archiveIndex}</nav>
        <div class="drop-archive-lightbox" data-drop-archive-lightbox aria-hidden="true">
          <button class="drop-archive-close" type="button" data-drop-archive-close>FECHAR ×</button>
          <button class="drop-archive-lightbox-nav is-prev" type="button" data-drop-archive-lightbox-dir="-1" aria-label="Imagem anterior">←</button>
          <div class="drop-archive-lightbox-media">
            <img src="" alt="" data-drop-archive-lightbox-image>
          </div>
          <button class="drop-archive-lightbox-nav is-next" type="button" data-drop-archive-lightbox-dir="1" aria-label="Próxima imagem">→</button>
          <div class="drop-archive-zoom-controls" aria-label="Controles de zoom">
            <button type="button" data-drop-archive-zoom-out aria-label="Reduzir zoom">-</button>
            <span data-drop-archive-zoom-label>100%</span>
            <button type="button" data-drop-archive-zoom-in aria-label="Aumentar zoom">+</button>
            <button type="button" data-drop-archive-zoom-reset>RESET</button>
          </div>
          <p class="drop-archive-lightbox-caption">
            <span data-drop-archive-lightbox-count>01 / 09</span>
            <strong data-drop-archive-lightbox-title>DROP 02 - ARCHIVE FRAME 01</strong>
          </p>
        </div>
      </section>

      <section class="drop-screen ny-product-screen drop-product-screen is-hidden" data-drop-screen="product" aria-label="Produto Nystagmus Drop 02">
        <header class="ny-preview-header drop-product-header">
          <button class="ny-preview-logo" type="button" data-drop-home aria-label="Nystagmus">
            <img src="${dropData.logo || meta06Drop.logo}" alt="Nystagmus">
          </button>
          <nav class="ny-preview-nav" aria-label="Navegação principal Nystagmus">
            <span>${labels.shop}</span>
            <span>${labels.archive}</span>
            <span>${labels.about}</span>
          </nav>
          <div class="ny-preview-actions">
            <span>${labels.search}</span>
            <span>${labels.cart}</span>
          </div>
        </header>
        <div class="ny-product-gallery">
          <button class="ny-gallery-control is-previous" type="button" data-drop-gallery-dir="-1" aria-label="Imagem anterior">&lsaquo;</button>
          <img class="ny-product-image" src="${firstProduct.galleryImages[0]}" alt="${firstProduct.title}">
          <button class="ny-gallery-control is-next" type="button" data-drop-gallery-dir="1" aria-label="Próxima imagem">&rsaquo;</button>
        </div>
        <div class="ny-gallery-meta">
          <span data-drop-gallery-count>01 / 03</span>
        </div>
        <aside class="ny-product-info" aria-label="Informações do produto">
          <button class="ny-product-back" type="button" data-drop-back-shop>${labels.backToShop}</button>
          <h3 data-drop-product-title>${firstProduct.title}</h3>
          <p class="ny-product-subtitle" data-drop-product-category>${firstProduct.category}</p>
          <p class="ny-product-description" data-drop-product-description>${firstProduct.description}</p>
          <div class="ny-size-block">
            <span>${labels.size}</span>
            <div class="ny-size-options">${sizes}</div>
          </div>
          <button class="ny-buy-button" type="button">${labels.addToCart}</button>
          <p class="ny-product-price" data-drop-product-price>${firstProduct.price}</p>
        </aside>
      </section>
    </article>
  `;
}

function setupMeta06NystagmusDropPreview(dropData = meta06Drop) {
  const preview = modalPreview.querySelector("[data-meta06-preview]");
  if (!preview) return;

  if (activePreviewCleanup) activePreviewCleanup();

  const screens = [...preview.querySelectorAll("[data-drop-screen]")];
  const landingImages = [...preview.querySelectorAll("[data-drop-landing-image]")];
  const landingCount = preview.querySelector("[data-drop-landing-count]");
  const mainImage = preview.querySelector(".ny-product-image");
  const productTitle = preview.querySelector("[data-drop-product-title]");
  const productCategory = preview.querySelector("[data-drop-product-category]");
  const productDescription = preview.querySelector("[data-drop-product-description]");
  const productPrice = preview.querySelector("[data-drop-product-price]");
  const galleryCount = preview.querySelector("[data-drop-gallery-count]");
  const archiveButtons = [...preview.querySelectorAll("[data-drop-archive-open]")];
  const archiveIndexButtons = [...preview.querySelectorAll("[data-drop-archive-jump]")];
  const archiveLightbox = preview.querySelector("[data-drop-archive-lightbox]");
  const archiveLightboxImage = preview.querySelector("[data-drop-archive-lightbox-image]");
  const archiveLightboxCount = preview.querySelector("[data-drop-archive-lightbox-count]");
  const archiveLightboxTitle = preview.querySelector("[data-drop-archive-lightbox-title]");
  const archiveZoomLabel = preview.querySelector("[data-drop-archive-zoom-label]");
  let landingIndex = 0;
  const products = dropData.products || meta06Drop.products;
  let currentProduct = products[0];
  let currentGalleryIndex = 0;
  let currentArchiveIndex = 0;
  let archiveZoom = 1;
  let archivePanX = 0;
  let archivePanY = 0;
  let archiveDragStart = null;

  const showScreen = (name) => {
    screens.forEach((screen) => screen.classList.toggle("is-hidden", screen.dataset.dropScreen !== name));
    preview.classList.toggle("is-product-open", name === "product");
    preview.classList.toggle("is-archive-open", name === "archive");
  };

  const updateLanding = (index) => {
    landingIndex = (index + landingImages.length) % landingImages.length;
    landingImages.forEach((image, imageIndex) => image.classList.toggle("is-active", imageIndex === landingIndex));
    landingCount.textContent = `${String(landingIndex + 1).padStart(2, "0")} / ${String(landingImages.length).padStart(2, "0")}`;
  };

  const updateGallery = (index) => {
    currentGalleryIndex = (index + currentProduct.galleryImages.length) % currentProduct.galleryImages.length;
    mainImage.src = currentProduct.galleryImages[currentGalleryIndex];
    mainImage.alt = currentProduct.title;
    mainImage.style.objectPosition = "center center";
    mainImage.classList.remove("is-boots-product", "is-scenic-product");
    mainImage.classList.add("is-isolated-product");
    galleryCount.textContent = `${String(currentGalleryIndex + 1).padStart(2, "0")} / ${String(currentProduct.galleryImages.length).padStart(2, "0")}`;
  };

  const openProduct = (productId) => {
    currentProduct = products.find((product) => product.id === productId) || products[0];
    currentGalleryIndex = 0;
    productTitle.textContent = currentProduct.title;
    productCategory.textContent = currentProduct.category;
    productDescription.textContent = currentProduct.description;
    productPrice.textContent = currentProduct.price;
    updateGallery(0);
    showScreen("product");
  };

  const updateArchiveIndex = (index) => {
    currentArchiveIndex = (index + meta06Archive.length) % meta06Archive.length;
    archiveIndexButtons.forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === currentArchiveIndex);
    });
  };

  const applyArchiveTransform = () => {
    if (!archiveLightboxImage || !archiveZoomLabel) return;
    archiveLightboxImage.style.transform = `translate(${archivePanX}px, ${archivePanY}px) scale(${archiveZoom})`;
    archiveLightboxImage.classList.toggle("is-draggable", archiveZoom > 1);
    archiveZoomLabel.textContent = `${Math.round(archiveZoom * 100)}%`;
  };

  const setArchiveZoom = (nextZoom) => {
    archiveZoom = Math.min(2.2, Math.max(0.8, nextZoom));
    if (archiveZoom <= 1) {
      archivePanX = 0;
      archivePanY = 0;
    }
    applyArchiveTransform();
  };

  const closeArchiveLightbox = () => {
    if (!archiveLightbox) return;
    archiveLightbox.classList.remove("is-open");
    archiveLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-meta06-archive-lightbox-open");
    archiveDragStart = null;
    archiveZoom = 1;
    archivePanX = 0;
    archivePanY = 0;
    applyArchiveTransform();
  };

  const openArchiveLightbox = (index) => {
    if (!archiveLightbox || !archiveLightboxImage) return;
    updateArchiveIndex(index);
    const archiveItem = meta06Archive[currentArchiveIndex];
    archiveLightboxImage.src = archiveItem.image;
    archiveLightboxImage.alt = archiveItem.title;
    archiveLightboxCount.textContent = `${archiveItem.id} / ${String(meta06Archive.length).padStart(2, "0")}`;
    archiveLightboxTitle.textContent = archiveItem.title;
    archiveZoom = 1;
    archivePanX = 0;
    archivePanY = 0;
    applyArchiveTransform();
    archiveLightbox.classList.add("is-open");
    archiveLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-meta06-archive-lightbox-open");
    preview.querySelector("[data-drop-archive-close]").focus({ preventScroll: true });
  };

  const moveArchiveLightbox = (direction) => {
    openArchiveLightbox(currentArchiveIndex + direction);
  };

  const handleArchiveKeydown = (event) => {
    if (!archiveLightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeArchiveLightbox();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveArchiveLightbox(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveArchiveLightbox(1);
    }
  };

  const landingTimer = window.setInterval(() => updateLanding(landingIndex + 1), 4800);
  activePreviewCleanup = () => {
    window.clearInterval(landingTimer);
    window.removeEventListener("keydown", handleArchiveKeydown, true);
    document.body.classList.remove("is-meta06-archive-lightbox-open");
    activePreviewCleanup = null;
  };

  preview.querySelectorAll("[data-drop-open-catalog]").forEach((element) => {
    element.addEventListener("click", () => showScreen("catalog"));
  });
  preview.querySelectorAll("[data-drop-open-archive]").forEach((element) => {
    element.addEventListener("click", () => showScreen("archive"));
  });
  preview.querySelectorAll("[data-drop-home]").forEach((element) => {
    element.addEventListener("click", () => showScreen("landing"));
  });
  preview.querySelectorAll("[data-drop-back-shop]").forEach((element) => {
    element.addEventListener("click", () => showScreen("catalog"));
  });
  preview.querySelectorAll("[data-drop-product]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.dropProduct));
  });
  preview.querySelectorAll("[data-drop-gallery-dir]").forEach((button) => {
    button.addEventListener("click", () => updateGallery(currentGalleryIndex + Number(button.dataset.dropGalleryDir)));
  });
  archiveButtons.forEach((button) => {
    button.addEventListener("click", () => openArchiveLightbox(Number(button.dataset.dropArchiveOpen)));
  });
  archiveIndexButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.dropArchiveJump);
      updateArchiveIndex(index);
      preview.querySelector(`#drop-archive-${meta06Archive[currentArchiveIndex].id}`).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    });
  });
  preview.querySelector("[data-drop-archive-close]").addEventListener("click", closeArchiveLightbox);
  preview.querySelectorAll("[data-drop-archive-lightbox-dir]").forEach((button) => {
    button.addEventListener("click", () => moveArchiveLightbox(Number(button.dataset.dropArchiveLightboxDir)));
  });
  preview.querySelector("[data-drop-archive-zoom-out]").addEventListener("click", () => setArchiveZoom(archiveZoom - 0.2));
  preview.querySelector("[data-drop-archive-zoom-in]").addEventListener("click", () => setArchiveZoom(archiveZoom + 0.2));
  preview.querySelector("[data-drop-archive-zoom-reset]").addEventListener("click", () => setArchiveZoom(1));
  archiveLightbox.addEventListener("click", (event) => {
    if (event.target === archiveLightbox) closeArchiveLightbox();
  });
  archiveLightboxImage.addEventListener("dblclick", () => setArchiveZoom(archiveZoom > 1 ? 1 : 1.6));
  archiveLightboxImage.addEventListener("pointerdown", (event) => {
    if (archiveZoom <= 1) return;
    archiveDragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      panX: archivePanX,
      panY: archivePanY
    };
    archiveLightboxImage.setPointerCapture(event.pointerId);
  });
  archiveLightboxImage.addEventListener("pointermove", (event) => {
    if (!archiveDragStart || archiveDragStart.pointerId !== event.pointerId) return;
    archivePanX = archiveDragStart.panX + event.clientX - archiveDragStart.x;
    archivePanY = archiveDragStart.panY + event.clientY - archiveDragStart.y;
    applyArchiveTransform();
  });
  archiveLightboxImage.addEventListener("pointerup", () => {
    archiveDragStart = null;
  });
  archiveLightboxImage.addEventListener("pointercancel", () => {
    archiveDragStart = null;
  });
  window.addEventListener("keydown", handleArchiveKeydown, true);
}

function setupProductPreviewGallery() {
  const preview = modalPreview.querySelector("[data-nystagmus-preview]");
  if (!preview) return;

  const products = meta01Content.previewProducts;
  const listingScreen = preview.querySelector("[data-preview-screen='listing']");
  const productScreen = preview.querySelector("[data-preview-screen='product']");
  const mainImage = preview.querySelector(".ny-product-image");
  const gallery = preview.querySelector(".ny-product-gallery");
  const productName = preview.querySelector("[data-product-name]");
  const productDescription = preview.querySelector("[data-product-description]");
  const productCategory = preview.querySelector("[data-product-category]");
  const productPrice = preview.querySelector("[data-product-price]");
  const galleryCount = preview.querySelector("[data-gallery-count]");
  let currentProduct = products[0];
  let currentIndex = 0;

  const updateImage = (index) => {
    const images = currentProduct.gallery;
    currentIndex = (index + images.length) % images.length;
    mainImage.src = images[currentIndex];
    mainImage.alt = currentProduct.name;
    mainImage.style.objectPosition = currentProduct.id === "boots" ? "center bottom" : "";
    mainImage.classList.toggle("is-boots-product", currentProduct.id === "boots");
    mainImage.classList.toggle("is-isolated-product", currentIndex < 2);
    mainImage.classList.toggle("is-scenic-product", currentIndex >= 2);
    gallery.classList.toggle("is-isolated-frame", currentIndex < 2);
    galleryCount.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
  };

  const showListing = () => {
    preview.classList.remove("is-product-open");
    listingScreen.classList.remove("is-hidden");
    productScreen.classList.add("is-hidden");
  };

  const showProduct = (productId) => {
    currentProduct = products.find((product) => product.id === productId) || products[0];
    currentIndex = 0;
    productName.textContent = currentProduct.name;
    productDescription.textContent = currentProduct.description;
    productCategory.textContent = currentProduct.category;
    productPrice.textContent = currentProduct.price;
    updateImage(0);
    preview.classList.add("is-product-open");
    listingScreen.classList.add("is-hidden");
    productScreen.classList.remove("is-hidden");
  };

  preview.querySelectorAll("[data-gallery-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      updateImage(currentIndex + Number(button.dataset.galleryDir));
    });
  });

  preview.querySelectorAll("[data-preview-product]").forEach((button) => {
    button.addEventListener("click", () => {
      showProduct(button.dataset.previewProduct);
    });
  });

  preview.querySelectorAll("[data-preview-home]").forEach((button) => {
    button.addEventListener("click", showListing);
  });
}

function openGoal(goalItem) {
  activeGoal = goalItem;
  if (activePreviewCleanup) activePreviewCleanup();
  hideTooltip();
  modal.classList.remove("has-introduction-template");
  completeButton.hidden = false;
  modal.classList.toggle("has-detail-template", Boolean(goalItem.details));
  if (goalItem.details) {
    renderGoalModalLayout(goalItem.details);
  } else {
    document.querySelector(".preview-label").textContent = "PREVIEW";
    modalPreview.className = "";
    modalTitle.textContent = goalItem.title;
    modalMeta.textContent = `ANO ${goalItem.year} / ${goalItem.id}`;
    modalDescription.textContent = goalItem.fullDescription;
    modalPreview.textContent = goalItem.preview;
  }
  completeButton.textContent = completedGoals[goalItem.id] ? "Meta concluída" : "Marcar como concluído";
  modal.showModal();
  modalPreview.querySelector(".cookie-case-preview")?.focus({ preventScroll: true });
}

function closeModal() {
  if (activePreviewCleanup) activePreviewCleanup();
  modal.classList.remove("has-introduction-template");
  completeButton.hidden = false;
  modal.close();
  activeGoal = null;
}

planTabs.forEach((tab) => {
  tab.addEventListener("click", () => setPlanTab(tab.dataset.planTab));
});

yearGoalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const goalItem = findGoalById(link.dataset.openGoal);
    if (goalItem) openGoal(goalItem);
  });
});

introductionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPlanTab("intro");
    renderIntroductionModal();
  });
});

completeButton.addEventListener("click", () => {
  if (!activeGoal) return;
  completedGoals = { ...completedGoals, [activeGoal.id]: true };
  activeGoal.completed = true;
  closeModal();
  render();
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) {
    closeModal();
  }
});

window.addEventListener("resize", () => {
  const nextMode = getLayoutMode();
  if (nextMode !== layoutMode) {
    render();
  }
});

setPlanTab("intro");
render();
