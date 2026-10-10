const ELEMENTS_DATA = [
  [1, "H", "Hidrogênio", 1.008, "hydrogen", 1, 1, "Henry Cavendish", 1766, "O elemento mais abundante do universo, compondo cerca de 75% da matéria bariônica. Fundamental para a água e todos os compostos orgânicos."],
  [2, "He", "Hélio", 4.003, "noble", 1, 18, "Pierre Janssen & Norman Lockyer", 1868, "Descoberto primeiro no sol durante um eclipse solar. Segundo elemento mais abundante do universo. Usado em balões, mergulho e resfriamento de supercondutores."],
  [3, "Li", "Lítio", 6.941, "alkali", 2, 1, "Johan August Arfvedson", 1817, "Metal mais leve na tabela. Essencial para baterias de íon-lítio em celulares e veículos elétricos. Também usado no tratamento de transtorno bipolar."],
  [4, "Be", "Berílio", 9.012, "alkaline", 2, 2, "Louis-Nicolas Vauquelin", 1798, "Metal leve e rígido usado em equipamentos aeroespaciais e nucleares. Altamente tóxico em forma de pó."],
  [5, "B", "Boro", 10.811, "metalloid", 2, 13, "Gay-Lussac & Thénard", 1808, "Semimetal essencial para plantas. Usado em fibra de vidro, detergentes (bórax) e reatores nucleares."],
  [6, "C", "Carbono", 12.011, "nonmetal", 2, 14, "Pré-histórico", "Ant.", "Base de toda a química orgânica. Presente em todas as formas de vida. O diamante e a grafite são formas puras de carbono."],
  [7, "N", "Nitrogênio", 14.007, "nonmetal", 2, 15, "Daniel Rutherford", 1772, "Compõe 78% da atmosfera terrestre. Essencial para proteínas e DNA. Usado em fertilizantes e conservação de alimentos."],
  [8, "O", "Oxigênio", 15.999, "nonmetal", 2, 16, "Scheele & Priestley", 1774, "Terceiro elemento mais abundante no universo. Essencial para a respiração aeróbica. Compõe 21% da atmosfera."],
  [9, "F", "Flúor", 18.998, "halogen", 2, 17, "Henri Moissan", 1886, "Elemento mais eletronegativo da tabela. Altamente reativo. Encontrado na pasta de dente como fluoreto para proteção dos dentes."],
  [10, "Ne", "Neônio", 20.180, "noble", 2, 18, "William Ramsay & Morris Travers", 1898, "Gás nobre inerte. Famoso pelo brilho laranja-vermelho em tubos de descarga elétrica. Nome vem do grego 'neos' (novo)."],
  [11, "Na", "Sódio", 22.990, "alkali", 3, 1, "Humphry Davy", 1807, "Metal macio e reativo. Vital para funções nervosas e musculares. O cloreto de sódio (NaCl) é o sal de cozinha."],
  [12, "Mg", "Magnésio", 24.305, "alkaline", 3, 2, "Humphry Davy", 1808, "Metal leve essencial para ossos e músculos. Centro da molécula de clorofila. Muito usado na indústria automotiva."],
  [13, "Al", "Alumínio", 26.982, "post", 3, 13, "Hans Christian Ørsted", 1825, "Metal mais abundante na crosta terrestre. Leve, resistente à corrosão e 100% reciclável. Amplamente usado em embalagens e aeronaves."],
  [14, "Si", "Silício", 28.086, "metalloid", 3, 14, "Jöns Jacob Berzelius", 1823, "Base dos semicondutores modernos. O 'Vale do Silício' deve seu nome a este elemento. Segundo elemento mais abundante na crosta terrestre."],
  [15, "P", "Fósforo", 30.974, "nonmetal", 3, 15, "Hennig Brand", 1669, "Essencial para o DNA, RNA e ATP. Componente dos ossos. O fósforo branco é altamente inflamável."],
  [16, "S", "Enxofre", 32.065, "nonmetal", 3, 16, "Pré-histórico", "Ant.", "Conhecido desde a antiguidade como 'pedra que arde'. Usado na fabricação de ácido sulfúrico e na vulcanização da borracha."],
  [17, "Cl", "Cloro", 35.453, "halogen", 3, 17, "Carl Wilhelm Scheele", 1774, "Halogênio amplamente usado como desinfetante em piscinas e água potável. Componente do PVC e muitos produtos de limpeza."],
  [18, "Ar", "Argônio", 39.948, "noble", 3, 18, "Lord Rayleigh & William Ramsay", 1894, "Terceiro gás mais abundante na atmosfera (0.93%). Usado em lâmpadas incandescentes e soldagem para evitar oxidação."],
  [19, "K", "Potássio", 39.098, "alkali", 4, 1, "Humphry Davy", 1807, "Metal alcalino vital para funções celulares. Essencial para o equilíbrio eletrolítico. Símbolo K vem do latim 'Kalium'."],
  [20, "Ca", "Cálcio", 40.078, "alkaline", 4, 2, "Humphry Davy", 1808, "Metal essencial para ossos, dentes e coagulação do sangue. Componente principal do calcário e mármores."],
  [21, "Sc", "Escândio", 44.956, "transition", 4, 3, "Lars Fredrik Nilson", 1879, "Metal de transição raro. Previsto por Mendeleev antes da descoberta. Usado em lâmpadas de mercúrio e bicicletas de alta performance."],
  [22, "Ti", "Titânio", 47.867, "transition", 4, 4, "William Gregor", 1791, "Metal com excepcional relação resistência/peso. Biocompatível, usado em implantes cirúrgicos. Resistente à corrosão."],
  [23, "V", "Vanádio", 50.942, "transition", 4, 5, "Andrés Manuel del Río", 1801, "Adicionado ao aço para aumentar a resistência. O Brasil possui grandes reservas. Essencial em pequenas doses para humanos."],
  [24, "Cr", "Cromo", 51.996, "transition", 4, 6, "Louis-Nicolas Vauquelin", 1798, "Responsável pela cor verde das esmeraldas e vermelho dos rubis. Usado no aço inoxidável e cromagem decorativa."],
  [25, "Mn", "Manganês", 54.938, "transition", 4, 7, "Johan Gottlieb Gahn", 1774, "Essencial na produção de aço. Usado em baterias alcalinas. O Brasil é um dos maiores produtores mundiais."],
  [26, "Fe", "Ferro", 55.845, "transition", 4, 8, "Pré-histórico", "Ant.", "Metal mais usado pelo ser humano. Forma o núcleo terrestre. Essencial para o transporte de oxigênio no sangue (hemoglobina)."],
  [27, "Co", "Cobalto", 58.933, "transition", 4, 9, "Georg Brandt", 1735, "Usado em baterias de íon-lítio, ligas de alta resistência e pigmento azul para cerâmica (azul cobalto)."],
  [28, "Ni", "Níquel", 58.693, "transition", 4, 10, "Axel Fredrik Cronstedt", 1751, "Resistente à corrosão. Usado em moedas, ligas metálicas e baterias NiMH. Componente do aço inoxidável."],
  [29, "Cu", "Cobre", 63.546, "transition", 4, 11, "Pré-histórico", "9000 a.C.", "Primeiro metal utilizado pelo homem. Melhor condutor elétrico acessível. Essencial para a eletrônica e telecomunicações."],
  [30, "Zn", "Zinco", 65.38, "transition", 4, 12, "Andreas Sigismund Marggraf", 1746, "Usado na galvanização do ferro para evitar ferrugem. Essencial para o sistema imunológico humano."],
  [31, "Ga", "Gálio", 69.723, "post", 4, 13, "Paul Emile Lecoq de Boisbaudran", 1875, "Previsto por Mendeleev como 'eka-alumínio'. Derrete na palma da mão (29°C). Usado em LEDs e semicondutores."],
  [32, "Ge", "Germânio", 72.630, "metalloid", 4, 14, "Clemens Winkler", 1886, "Previsto por Mendeleev como 'eka-silício'. Usado em fibras ópticas e semicondutores. Descoberta confirmou a teoria de Mendeleev."],
  [33, "As", "Arsênio", 74.922, "metalloid", 4, 15, "Alberto Magno", 1250, "Historicamente usado como veneno (arsénico). Hoje usado em semicondutores GaAs e tratamento de leucemia."],
  [34, "Se", "Selênio", 78.971, "nonmetal", 4, 16, "Jöns Jacob Berzelius", 1817, "Essencial em pequenas doses para humanos. Usado em células solares, xerocopiadores e suplementos nutricionais."],
  [35, "Br", "Bromo", 79.904, "halogen", 4, 17, "Antoine Jérôme Balard", 1826, "Um dos dois únicos elementos líquidos à temperatura ambiente. Usado em retardantes de chama e fotografias antigas."],
  [36, "Kr", "Criptônio", 83.798, "noble", 4, 18, "William Ramsay & Morris Travers", 1898, "Gás nobre raro. Usado em lâmpadas de flash de alta velocidade em fotografia esportiva e científica."],
  [37, "Rb", "Rubídio", 85.468, "alkali", 5, 1, "Bunsen & Kirchhoff", 1861, "Descoberto por espectroscopia — sua emissão é vermelha (rubi). Usado em relógios atômicos e células fotoelétricas."],
  [38, "Sr", "Estrôncio", 87.62, "alkaline", 5, 2, "Adair Crawford", 1790, "Seus sais produzem chamas vermelhas brilhantes usadas em fogos de artifício e sinalizadores de emergência."],
  [39, "Y", "Ítrio", 88.906, "transition", 5, 3, "Johan Gadolin", 1794, "Usado em LEDs brancos, lasers e supercondutores. Nome vem da cidade sueca Ytterby, onde foi encontrado."],
  [40, "Zr", "Zircônio", 91.224, "transition", 5, 4, "Martin Heinrich Klaproth", 1789, "Resistente à corrosão e radiação. Usado em reatores nucleares, cerâmicas e joias (zircônia cúbica)."],
  [41, "Nb", "Nióbio", 92.906, "transition", 5, 5, "Charles Hatchett", 1801, "O Brasil possui 98% das reservas mundiais! Usado em aços especiais para gasodutos e estruturas aeroespaciais."],
  [42, "Mo", "Molibdênio", 95.96, "transition", 5, 6, "Carl Wilhelm Scheele", 1778, "Confundido com chumbo no passado. Essencial para enzimas biológicas. Usado em ligas de aço de alta resistência."],
  [43, "Tc", "Tecnécio", 98.0, "transition", 5, 7, "Carlo Perrier & Emilio Segrè", 1937, "Primeiro elemento sintético criado pelo homem. Todos os isótopos são radioativos. Amplamente usado em medicina nuclear."],
  [44, "Ru", "Rutênio", 101.07, "transition", 5, 8, "Karl Ernst Claus", 1844, "Metal do grupo da platina. Usado em eletrodos, catalisadores e contatos elétricos de alta resistência."],
  [45, "Rh", "Ródio", 102.91, "transition", 5, 9, "William Hyde Wollaston", 1803, "Um dos metais mais raros e caros. Essencial em conversores catalíticos de automóveis para reduzir emissões."],
  [46, "Pd", "Paládio", 106.42, "transition", 5, 10, "William Hyde Wollaston", 1803, "Usado em conversores catalíticos, joias (ouro branco) e células de hidrogênio. Absorve até 900 vezes seu volume em H₂."],
  [47, "Ag", "Prata", 107.87, "transition", 5, 11, "Pré-histórico", "Ant.", "Melhor condutor elétrico e térmico de todos os metais. Propriedades antibacterianas. Usada em joias, espelhos e eletrônica."],
  [48, "Cd", "Cádmio", 112.41, "transition", 5, 12, "Friedrich Strohmeyer", 1817, "Tóxico. Usado em baterias NiCd, pigmentos amarelos/vermelhos e revestimentos protetores. Contaminante ambiental sério."],
  [49, "In", "Índio", 114.82, "post", 5, 13, "Ferdinand Reich & Hieronymous Richter", 1863, "Descoberto por espectroscopia — emite índigo. Usado em telas LCD/OLED (ITO) e soldas de baixo ponto de fusão."],
  [50, "Sn", "Estanho", 118.71, "post", 5, 14, "Pré-histórico", "Ant.", "Componente do bronze (com cobre). Usado em solda eletrônica, revestimento de latas e ligas metálicas."],
  [51, "Sb", "Antimônio", 121.76, "metalloid", 5, 15, "Pré-histórico", "Ant.", "Semimetal usado no Egito antigo como cosmético. Hoje usado em ligas de chumbo para baterias e retardantes de chama."],
  [52, "Te", "Telúrio", 127.60, "metalloid", 5, 16, "Franz-Joseph Müller von Reichenstein", 1782, "Semimetal raro usado em ligas de aço, células solares de telureto de cádmio e discos Blu-ray regraváveis."],
  [53, "I", "Iodo", 126.90, "halogen", 5, 17, "Bernard Courtois", 1811, "Essencial para a tireoide produzir hormônios. Adicionado ao sal de cozinha (sal iodado). Antisséptico clássico."],
  [54, "Xe", "Xenônio", 131.29, "noble", 5, 18, "William Ramsay & Morris Travers", 1898, "Gás nobre raro. Usado em faróis automotivos de xenônio, propulsores de satélites e anestesia."],
  [55, "Cs", "Césio", 132.91, "alkali", 6, 1, "Bunsen & Kirchhoff", 1860, "Usado nos relógios atômicos mais precisos do mundo (define o segundo). Extremamente reativo com água."],
  [56, "Ba", "Bário", 137.33, "alkaline", 6, 2, "Humphry Davy", 1808, "Seus compostos produzem chamas verde-brilhante em fogos de artifício. Sulfato de bário usado em raios-X do trato digestivo."],
  [72, "Hf", "Háfnio", 178.49, "transition", 6, 4, "Dirk Coster & George de Hevesy", 1923, "Previsto por Bohr antes da descoberta. Usado em reatores nucleares e microprocessadores (chips Intel)."],
  [73, "Ta", "Tântalo", 180.95, "transition", 6, 5, "Anders Gustaf Ekeberg", 1802, "Biocompatível, usado em implantes médicos. Essencial em capacitores de eletrônicos como celulares e laptops."],
  [74, "W", "Tungstênio", 183.84, "transition", 6, 6, "Irmãos Juan e Fausto Elhuyar", 1783, "Maior ponto de fusão de todos os metais (3.422°C). Usado em filamentos de lâmpadas e ponteiras de caneta."],
  [75, "Re", "Rênio", 186.21, "transition", 6, 7, "Walter Noddack & Ida Tacke", 1925, "Um dos elementos mais raros. Usado em motores a jato e catalisadores de refinamento de petróleo."],
  [76, "Os", "Ósmio", 190.23, "transition", 6, 8, "Smithson Tennant", 1803, "O elemento natural mais denso (22.59 g/cm³). Pó extremamente tóxico. Usado em ligas para canetas tinteiro."],
  [77, "Ir", "Irídio", 192.22, "transition", 6, 9, "Smithson Tennant", 1803, "Metal mais resistente à corrosão. Abundância anômala na camada K-Pg ligada à extinção dos dinossauros."],
  [78, "Pt", "Platina", 195.08, "transition", 6, 10, "Pré-colombiano", "Ant.", "Metal precioso e catalisador essencial em conversores automotivos. Resistente à corrosão. Padrão para joias finas."],
  [79, "Au", "Ouro", 196.97, "transition", 6, 11, "Pré-histórico", "Ant.", "Símbolo universal de valor e riqueza. Excelente condutor elétrico. Resistente à oxidação. Usado em eletrônica de precisão."],
  [80, "Hg", "Mercúrio", 200.59, "transition", 6, 12, "Pré-histórico", "Ant.", "Único metal líquido à temperatura ambiente. Altamente tóxico. Usado em termômetros, barômetros e lâmpadas fluorescentes."],
  [81, "Tl", "Tálio", 204.38, "post", 6, 13, "William Crookes", 1861, "Metal macio e tóxico. Descoberto por espectroscopia (emissão verde). Usado em detectores de infravermelho."],
  [82, "Pb", "Chumbo", 207.2, "post", 6, 14, "Pré-histórico", "Ant.", "Metal denso usado desde a Roma Antiga em encanamentos. Tóxico — chumbo nas tubulações causou problemas de saúde históricos."],
  [83, "Bi", "Bismuto", 208.98, "post", 6, 15, "Claude François Geoffroy", 1753, "Metal de baixa toxicidade. Componente do Pepto-Bismol. Forma cristais coloridos iridescentes em escaleres."],
  [84, "Po", "Polônio", 209, "post", 6, 16, "Marie & Pierre Curie", 1898, "Elemento altamente radioativo descoberto pela Marie Curie e nomeado em homenagem à sua pátria, a Polônia."],
  [85, "At", "Astato", 210, "halogen", 6, 17, "Dale Corson, Kenneth MacKenzie & Emilio Segrè", 1940, "Halogênio radioativo mais pesado. Extremamente raro na natureza. Investigado como possível tratamento de câncer."],
  [86, "Rn", "Radônio", 222, "noble", 6, 18, "Friedrich Ernst Dorn", 1900, "Gás radioativo natural. Principal causa de câncer de pulmão após o tabagismo. Pode acumular em subsolos de casas."],
  [87, "Fr", "Frâncio", 223, "alkali", 7, 1, "Marguerite Perey", 1939, "Descoberto pela cientista francesa Marguerite Perey. Metal mais instável na natureza. Extremamente radioativo."],
  [88, "Ra", "Rádio", 226, "alkaline", 7, 2, "Marie & Pierre Curie", 1898, "Descoberto pelos Curie. Usado historicamente em pinturas luminosas (relógios), causando mortes por radiação."],
  [104, "Rf", "Rutherfórdio", 267, "transition", 7, 4, "LBNL / Dubna", 1969, "Elemento sintético superpesado. Nomeado em homenagem a Ernest Rutherford, pai da física nuclear moderna."],
  [105, "Db", "Dúbnio", 268, "transition", 7, 5, "Dubna / LBNL", 1968, "Elemento sintético nomeado pela cidade de Dubna, Rússia, sede do famoso Instituto Conjunto de Pesquisa Nuclear."],
  [106, "Sg", "Seabórgio", 271, "transition", 7, 6, "LBNL", 1974, "Nomeado em homenagem a Glenn T. Seaborg, único cientista vivo a ter um elemento nomeado em sua homenagem."],
  [107, "Bh", "Bóhrio", 272, "transition", 7, 7, "GSI", 1981, "Nomeado em homenagem ao físico dinamarquês Niels Bohr, criador do modelo atômico de Bohr."],
  [108, "Hs", "Hássio", 277, "transition", 7, 8, "GSI", 1984, "Nomeado em homenagem ao estado alemão de Hesse. Sintetizado no Centro de Pesquisa de Íons Pesados (GSI)."],
  [109, "Mt", "Meitnério", 276, "transition", 7, 9, "GSI", 1982, "Nomeado em homenagem a Lise Meitner, física pioneira que explicou a fissão nuclear mas não recebeu Nobel."],
  [110, "Ds", "Darmstádtio", 281, "transition", 7, 10, "GSI", 1994, "Nomeado pela cidade de Darmstadt, Alemanha. Sintetizado pela primeira vez no GSI em 1994."],
  [111, "Rg", "Roentgênio", 280, "transition", 7, 11, "GSI", 1994, "Nomeado em homenagem a Wilhelm Röntgen, descobridor dos raios-X e primeiro Nobel de Física (1901)."],
  [112, "Cn", "Copernício", 285, "transition", 7, 12, "GSI", 1996, "Nomeado em homenagem a Nicolau Copérnico, astrônomo que propôs o modelo heliocêntrico do sistema solar."],
  [113, "Nh", "Nihônio", 284, "post", 7, 13, "RIKEN", 2004, "Primeiro elemento descoberto na Ásia. Nomeado com 'Nihon' (Japão em japonês). Descoberto pelo Instituto RIKEN."],
  [114, "Fl", "Fleróvio", 289, "post", 7, 14, "JINR Dubna", 1998, "Nomeado em homenagem ao Laboratório Nuclear Flerov em Dubna. Produzido pela fusão de plutônio com cálcio."],
  [115, "Mc", "Moscóvio", 288, "post", 7, 15, "JINR / ORNL", 2003, "Nomeado em homenagem à Oblast de Moscou, onde fica o JINR. Descoberto em colaboração EUA-Rússia."],
  [116, "Lv", "Livermório", 293, "post", 7, 16, "JINR / LLNL", 2000, "Nomeado em homenagem ao Laboratório Lawrence Livermore em Livermore, Califórnia (LLNL)."],
  [117, "Ts", "Tenesso", 294, "halogen", 7, 17, "ORNL / JINR", 2010, "Nomeado pelo estado norte-americano do Tennessee, lar dos laboratórios Oak Ridge e Vanderbilt."],
  [118, "Og", "Oganessônio", 294, "noble", 7, 18, "JINR Dubna", 2002, "Elemento mais pesado conhecido. Nomeado em homenagem ao físico russo Yuri Oganessian. Altamente radioativo."],

  [57, "La", "Lantânio", 138.91, "lanthanide", null, null, "Carl Gustaf Mosander", 1839, "Primeiro lantanídeo. Nome vem do grego 'lanthanein' (esconder). Usado em lentes ópticas de alta qualidade."],
  [58, "Ce", "Cério", 140.12, "lanthanide", null, null, "Hisinger & Berzelius", 1803, "Lantanídeo mais abundante. Usado em pedras de isqueiros, catalisadores e polimento de vidro."],
  [59, "Pr", "Praseodímio", 140.91, "lanthanide", null, null, "Carl Auer von Welsbach", 1885, "Nome significa 'gêmeo verde'. Usado em ímãs potentes, lasers e óculos de proteção para soldadores."],
  [60, "Nd", "Neodímio", 144.24, "lanthanide", null, null, "Carl Auer von Welsbach", 1885, "Usado nos ímãs mais potentes do mundo (Nd₂Fe₁₄B), presentes em hard disks, fones e motores elétricos."],
  [61, "Pm", "Promécio", 145, "lanthanide", null, null, "Marinsky, Glendenin & Coryell", 1945, "Único lantanídeo sem isótopos estáveis. Nomeado após Prometeu. Usado em geradores nucleares de baterias."],
  [62, "Sm", "Samário", 150.36, "lanthanide", null, null, "Paul Emile Lecoq de Boisbaudran", 1879, "Usado em ímãs SmCo e tratamento de câncer ósseo. Nome vem do mineral samarskita."],
  [63, "Eu", "Európio", 151.96, "lanthanide", null, null, "Eugène-Anatole Demarçay", 1901, "Usado em telas de TV coloridas e notas de euro (fluorescência anti-falsificação). Nome vem da Europa."],
  [64, "Gd", "Gadolínio", 157.25, "lanthanide", null, null, "Jean Charles Galissard de Marignac", 1880, "Altamente paramagnético. Usado como contraste em exames de ressonância magnética (MRI)."],
  [65, "Tb", "Térbio", 158.93, "lanthanide", null, null, "Carl Gustaf Mosander", 1843, "Usado em dispositivos de memória de alta densidade e LEDs verdes de alta eficiência."],
  [66, "Dy", "Disprósio", 162.50, "lanthanide", null, null, "Paul Emile Lecoq de Boisbaudran", 1886, "Nome significa 'difícil de obter'. Usado em ímãs de neodímio para melhorar performance em altas temperaturas."],
  [67, "Ho", "Hólmio", 164.93, "lanthanide", null, null, "Marc Delafontaine & Louis Soret", 1878, "Maior momento magnético de todos os elementos. Usado em lasers médicos e dispositivos de armazenamento."],
  [68, "Er", "Érbio", 167.26, "lanthanide", null, null, "Carl Gustaf Mosander", 1843, "Usado em amplificadores de fibra óptica (EDFA), fundamentais para a internet global."],
  [69, "Tm", "Túlio", 168.93, "lanthanide", null, null, "Per Teodor Cleve", 1879, "Mais raro dos lantanídeos estáveis. Usado em lasers cirúrgicos e fontes de radiação portáteis."],
  [70, "Yb", "Itérbio", 173.04, "lanthanide", null, null, "Jean Charles Galissard de Marignac", 1878, "Usado nos relógios atômicos de íterbio, os mais precisos já construídos."],
  [71, "Lu", "Lutécio", 174.97, "lanthanide", null, null, "Georges Urbain", 1907, "Lantanídeo mais denso. Usado em tomógrafos PET e como catalisador na produção de petróleo."],

  [89, "Ac", "Actínio", 227, "actinide", null, null, "André-Louis Debierne", 1899, "Elemento radioativo que dá nome à série dos actinídeos. Produz brilho azulado no escuro devido à radiação."],
  [90, "Th", "Tório", 232.04, "actinide", null, null, "Jöns Jacob Berzelius", 1829, "Actinídeo radioativo mais abundante. Potencial como combustível nuclear alternativo ao urânio."],
  [91, "Pa", "Protactínio", 231.04, "actinide", null, null, "Fajans & Göhring / Hahn & Meitner", 1913, "Raro e tóxico. Precursor do urânio-233 em reatores de tório. Muito difícil de isolar."],
  [92, "U", "Urânio", 238.03, "actinide", null, null, "Martin Heinrich Klaproth", 1789, "Combustível de reatores nucleares e armas atômicas. O U-235 é o único isótopo fissil natural."],
  [93, "Np", "Netúnio", 237, "actinide", null, null, "Edwin McMillan & Philip Abelson", 1940, "Primeiro elemento transurânico sintético. Nomeado pelo planeta Netuno (após Urânio)."],
  [94, "Pu", "Plutônio", 244, "actinide", null, null, "Glenn Seaborg e equipe", 1940, "Combustível de bombas atômicas e reatores. Produzido em reatores nucleares a partir do urânio."],
  [95, "Am", "Amerício", 243, "actinide", null, null, "Glenn Seaborg e equipe", 1944, "Presente nos detectores de fumaça iônicos domésticos. Nomeado pelas Américas."],
  [96, "Cm", "Cúrio", 247, "actinide", null, null, "Glenn Seaborg e equipe", 1944, "Nomeado em homenagem a Marie e Pierre Curie. Usado como fonte de energia em missões espaciais."],
  [97, "Bk", "Berquélio", 247, "actinide", null, null, "Glenn Seaborg e equipe", 1949, "Nomeado em homenagem a Berkeley, Califórnia. Apenas microgramas já foram produzidos."],
  [98, "Cf", "Califórnio", 251, "actinide", null, null, "Glenn Seaborg e equipe", 1950, "Usado para iniciar reatores nucleares e em medidores de umidade do solo. Extremamente caro."],
  [99, "Es", "Einstênio", 252, "actinide", null, null, "Equipe de Los Alamos", 1952, "Descoberto nos detritos da primeira bomba H. Nomeado em homenagem a Albert Einstein."],
  [100, "Fm", "Férmio", 257, "actinide", null, null, "Equipe de Los Alamos", 1952, "Descoberto na mesma explosão que o Einstênio. Nomeado em homenagem a Enrico Fermi."],
  [101, "Md", "Mendelévio", 258, "actinide", null, null, "Glenn Seaborg e equipe", 1955, "Nomeado em homenagem a Dmitri Mendeleev, criador da tabela periódica."],
  [102, "No", "Nobélio", 259, "actinide", null, null, "JINR / LBNL", 1958, "Nomeado em homenagem a Alfred Nobel, inventor da dinamite e fundador dos Prêmios Nobel."],
  [103, "Lr", "Laurêncio", 262, "actinide", null, null, "Albert Ghiorso e equipe", 1961, "Último actinídeo. Nomeado em homenagem a Ernest Lawrence, inventor do cíclotron."],
];

const elemMap = {};
ELEMENTS_DATA.forEach(e => {
  elemMap[e[1]] = {
    z: e[0], sym: e[1], name: e[2], mass: e[3], cat: e[4],
    period: e[5], group: e[6],
    discoveredBy: e[7], year: e[8], desc: e[9]
  };
});

const POSITIONS = [
  { z: 1, r: 1, c: 1 }, { z: 2, r: 1, c: 18 },
  { z: 3, r: 2, c: 1 }, { z: 4, r: 2, c: 2 }, { z: 5, r: 2, c: 13 }, { z: 6, r: 2, c: 14 }, { z: 7, r: 2, c: 15 }, { z: 8, r: 2, c: 16 }, { z: 9, r: 2, c: 17 }, { z: 10, r: 2, c: 18 },
  { z: 11, r: 3, c: 1 }, { z: 12, r: 3, c: 2 }, { z: 13, r: 3, c: 13 }, { z: 14, r: 3, c: 14 }, { z: 15, r: 3, c: 15 }, { z: 16, r: 3, c: 16 }, { z: 17, r: 3, c: 17 }, { z: 18, r: 3, c: 18 },
  { z: 19, r: 4, c: 1 }, { z: 20, r: 4, c: 2 }, { z: 21, r: 4, c: 3 }, { z: 22, r: 4, c: 4 }, { z: 23, r: 4, c: 5 }, { z: 24, r: 4, c: 6 }, { z: 25, r: 4, c: 7 },
  { z: 26, r: 4, c: 8 }, { z: 27, r: 4, c: 9 }, { z: 28, r: 4, c: 10 }, { z: 29, r: 4, c: 11 }, { z: 30, r: 4, c: 12 },
  { z: 31, r: 4, c: 13 }, { z: 32, r: 4, c: 14 }, { z: 33, r: 4, c: 15 }, { z: 34, r: 4, c: 16 }, { z: 35, r: 4, c: 17 }, { z: 36, r: 4, c: 18 },
  { z: 37, r: 5, c: 1 }, { z: 38, r: 5, c: 2 }, { z: 39, r: 5, c: 3 }, { z: 40, r: 5, c: 4 }, { z: 41, r: 5, c: 5 }, { z: 42, r: 5, c: 6 }, { z: 43, r: 5, c: 7 },
  { z: 44, r: 5, c: 8 }, { z: 45, r: 5, c: 9 }, { z: 46, r: 5, c: 10 }, { z: 47, r: 5, c: 11 }, { z: 48, r: 5, c: 12 },
  { z: 49, r: 5, c: 13 }, { z: 50, r: 5, c: 14 }, { z: 51, r: 5, c: 15 }, { z: 52, r: 5, c: 16 }, { z: 53, r: 5, c: 17 }, { z: 54, r: 5, c: 18 },
  { z: 55, r: 6, c: 1 }, { z: 56, r: 6, c: 2 },
  { z: 57, r: 6, c: 3, laMark: true },
  { z: 72, r: 6, c: 4 }, { z: 73, r: 6, c: 5 }, { z: 74, r: 6, c: 6 }, { z: 75, r: 6, c: 7 },
  { z: 76, r: 6, c: 8 }, { z: 77, r: 6, c: 9 }, { z: 78, r: 6, c: 10 }, { z: 79, r: 6, c: 11 }, { z: 80, r: 6, c: 12 },
  { z: 81, r: 6, c: 13 }, { z: 82, r: 6, c: 14 }, { z: 83, r: 6, c: 15 }, { z: 84, r: 6, c: 16 }, { z: 85, r: 6, c: 17 }, { z: 86, r: 6, c: 18 },
  { z: 87, r: 7, c: 1 }, { z: 88, r: 7, c: 2 },
  { z: 89, r: 7, c: 3, acMark: true },
  { z: 104, r: 7, c: 4 }, { z: 105, r: 7, c: 5 }, { z: 106, r: 7, c: 6 }, { z: 107, r: 7, c: 7 },
  { z: 108, r: 7, c: 8 }, { z: 109, r: 7, c: 9 }, { z: 110, r: 7, c: 10 }, { z: 111, r: 7, c: 11 }, { z: 112, r: 7, c: 12 },
  { z: 113, r: 7, c: 13 }, { z: 114, r: 7, c: 14 }, { z: 115, r: 7, c: 15 }, { z: 116, r: 7, c: 16 }, { z: 117, r: 7, c: 17 }, { z: 118, r: 7, c: 18 },
  { z: 57, r: 9, c: 3 }, { z: 58, r: 9, c: 4 }, { z: 59, r: 9, c: 5 }, { z: 60, r: 9, c: 6 }, { z: 61, r: 9, c: 7 },
  { z: 62, r: 9, c: 8 }, { z: 63, r: 9, c: 9 }, { z: 64, r: 9, c: 10 }, { z: 65, r: 9, c: 11 }, { z: 66, r: 9, c: 12 },
  // Warning: Six Seven 
  { z: 67, r: 9, c: 13 }, { z: 68, r: 9, c: 14 }, { z: 69, r: 9, c: 15 }, { z: 70, r: 9, c: 16 }, { z: 71, r: 9, c: 17 },
  { z: 89, r: 10, c: 3 }, { z: 90, r: 10, c: 4 }, { z: 91, r: 10, c: 5 }, { z: 92, r: 10, c: 6 }, { z: 93, r: 10, c: 7 },
  { z: 94, r: 10, c: 8 }, { z: 95, r: 10, c: 9 }, { z: 96, r: 10, c: 10 }, { z: 97, r: 10, c: 11 }, { z: 98, r: 10, c: 12 },
  { z: 99, r: 10, c: 13 }, { z: 100, r: 10, c: 14 }, { z: 101, r: 10, c: 15 }, { z: 102, r: 10, c: 16 }, { z: 103, r: 10, c: 17 },
];

const CAT_COLOR = {
  hydrogen: '#3b82f6',
  nonmetal: '#0d9488',
  noble: '#8b5cf6',
  alkali: '#ef4444',
  alkaline: '#f59e0b',
  transition: '#6366f1',
  post: '#64748b',
  metalloid: '#10b981',
  halogen: '#ec4899',
  lanthanide: '#f97316',
  actinide: '#e11d48',
};

const SUBSTANCES = [
  { name: "Água", elems: [{ s: "H", q: 2 }, { s: "O", q: 1 }] },
  { name: "Sal de Cozinha", elems: [{ s: "Na", q: 1 }, { s: "Cl", q: 1 }] },
  { name: "Gás Carbônico", elems: [{ s: "C", q: 1 }, { s: "O", q: 2 }] },
  { name: "Glicose", elems: [{ s: "C", q: 6 }, { s: "H", q: 12 }, { s: "O", q: 6 }] },
  { name: "Amônia", elems: [{ s: "N", q: 1 }, { s: "H", q: 3 }] },
  { name: "Ácido Sulfúrico", elems: [{ s: "H", q: 2 }, { s: "S", q: 1 }, { s: "O", q: 4 }] },
  { name: "Bicarbonato", elems: [{ s: "Na", q: 1 }, { s: "H", q: 1 }, { s: "C", q: 1 }, { s: "O", q: 3 }] },
  { name: "Metano", elems: [{ s: "C", q: 1 }, { s: "H", q: 4 }] },
  { name: "Etanol", elems: [{ s: "C", q: 2 }, { s: "H", q: 6 }, { s: "O", q: 1 }] },
  { name: "Gesso", elems: [{ s: "Ca", q: 1 }, { s: "S", q: 1 }, { s: "O", q: 4 }] },
  { name: "Ácido Clorídrico", elems: [{ s: "H", q: 1 }, { s: "Cl", q: 1 }] },
  { name: "Soda Cáustica", elems: [{ s: "Na", q: 1 }, { s: "O", q: 1 }, { s: "H", q: 1 }] },
  { name: "Água Oxigenada", elems: [{ s: "H", q: 2 }, { s: "O", q: 2 }] },
  { name: "Calcário", elems: [{ s: "Ca", q: 1 }, { s: "C", q: 1 }, { s: "O", q: 3 }] },
  { name: "Ferrugem", elems: [{ s: "Fe", q: 2 }, { s: "O", q: 3 }] },
];

let blocks = [];
let bid = 0;
let activeBlockId = null;
let selectedInfoSym = null;

document.addEventListener('DOMContentLoaded', () => {
  renderSubstances();
  buildPickerGrid();
  buildFullGrid();
  buildLegends();
  addBlock();
});

function calcSubstanceMass(elems) {
  return elems.reduce((t, e) => {
    const el = elemMap[e.s];
    return t + (el ? el.mass * e.q : 0);
  }, 0);
}

function renderSubstances() {
  const g = document.getElementById('subGrid');
  SUBSTANCES.forEach(sub => {
    const mass = calcSubstanceMass(sub.elems);
    const formula = sub.elems.map(e => e.s + (e.q > 1 ? e.q : '')).join('');
    const d = document.createElement('div');
    d.className = 'sub-card';
    d.innerHTML = `
      <div class="sub-name">${sub.name}</div>
      <div class="sub-formula">${formula}</div>
      <div class="sub-mass">${mass.toFixed(3)} g/mol</div>
    `;
    d.onclick = () => loadSubstance(sub);
    g.appendChild(d);
  });
}

function loadSubstance(sub) {
  blocks = [];
  document.getElementById('blocksContainer').innerHTML = '';
  sub.elems.forEach(e => createBlock(e.s, e.q));
  updateFormula();
  hideResult();
  document.getElementById('calc').scrollIntoView({ behavior: 'smooth' });
}

function addBlock() {
  createBlock(null, 1);
  updateFormula();
}

function createBlock(sym, qty) {
  const id = ++bid;
  blocks.push({ id, sym, qty: qty || 1 });
  renderBlock(id, sym, qty || 1);
}

function renderBlock(id, sym, qty) {
  const container = document.getElementById('blocksContainer');
  const el = sym ? elemMap[sym] : null;
  const color = el ? (CAT_COLOR[el.cat] || '#6366f1') : null;

  const div = document.createElement('div');
  div.className = 'block-item';
  div.id = `block-${id}`;

  let tileHTML;
  if (el) {
    tileHTML = `
      <div class="block-tile filled cat-${el.cat}" onclick="openPicker(${id})" title="Trocar elemento">
        <div class="bt-num">${el.z}</div>
        <div class="bt-sym">${el.sym}</div>
        <div class="bt-name">${el.name.length > 10 ? el.name.substring(0, 9) + '.' : el.name}</div>
      </div>`;
  } else {
    tileHTML = `
      <div class="block-tile" onclick="openPicker(${id})" title="Escolher elemento">
        <div class="bt-plus">+</div>
        <div class="bt-hint">Elemento</div>
      </div>`;
  }

  div.innerHTML = `
    <button class="block-remove" onclick="removeBlock(${id})" title="Remover">✕</button>
    ${tileHTML}
    <div class="block-info">
      <div class="block-elem-name ${el ? 'named' : ''}">${el ? el.name : 'Clique para escolher'}</div>
      <div class="qty-row">
        <button class="qty-btn" onclick="changeQty(${id},-1)">−</button>
        <input class="qty-field" id="qty-${id}" type="number" value="${qty}" min="1" max="99"
          oninput="setQty(${id},this.value)" onchange="setQty(${id},this.value)">
        <button class="qty-btn" onclick="changeQty(${id},1)">+</button>
        <span style="font-size:.75rem;color:var(--ink-3);margin-left:4px">× ${el ? el.mass.toFixed(3) : '—'} g/mol</span>
      </div>
    </div>
  `;
  container.appendChild(div);
}

function refreshBlock(id) {
  const b = blocks.find(x => x.id === id);
  if (!b) return;
  const old = document.getElementById(`block-${id}`);
  if (!old) return;
  const container = document.getElementById('blocksContainer');
  const idx = Array.from(container.children).indexOf(old);
  old.remove();

  const el = b.sym ? elemMap[b.sym] : null;
  const div = document.createElement('div');
  div.className = 'block-item';
  div.id = `block-${id}`;
  div.style.animation = 'none';

  let tileHTML;
  if (el) {
    tileHTML = `
      <div class="block-tile filled cat-${el.cat}" onclick="openPicker(${id})" title="Trocar elemento">
        <div class="bt-num">${el.z}</div>
        <div class="bt-sym">${el.sym}</div>
        <div class="bt-name">${el.name.length > 10 ? el.name.substring(0, 9) + '.' : el.name}</div>
      </div>`;
  } else {
    tileHTML = `
      <div class="block-tile" onclick="openPicker(${id})" title="Escolher elemento">
        <div class="bt-plus">+</div>
        <div class="bt-hint">Elemento</div>
      </div>`;
  }

  div.innerHTML = `
    <button class="block-remove" onclick="removeBlock(${id})" title="Remover">✕</button>
    ${tileHTML}
    <div class="block-info">
      <div class="block-elem-name ${el ? 'named' : ''}">${el ? el.name : 'Clique para escolher'}</div>
      <div class="qty-row">
        <button class="qty-btn" onclick="changeQty(${id},-1)">−</button>
        <input class="qty-field" id="qty-${id}" type="number" value="${b.qty}" min="1" max="99"
          oninput="setQty(${id},this.value)" onchange="setQty(${id},this.value)">
        <button class="qty-btn" onclick="changeQty(${id},1)">+</button>
        <span style="font-size:.75rem;color:var(--ink-3);margin-left:4px">× ${el ? el.mass.toFixed(3) : '—'} g/mol</span>
      </div>
    </div>
  `;

  const children = Array.from(container.children);
  if (idx < children.length) container.insertBefore(div, children[idx]);
  else container.appendChild(div);
}

function removeBlock(id) {
  blocks = blocks.filter(b => b.id !== id);
  const el = document.getElementById(`block-${id}`);
  if (el) el.remove();
  updateFormula();
  hideResult();
}

function changeQty(id, delta) {
  const b = blocks.find(x => x.id === id);
  if (!b) return;
  b.qty = Math.max(1, b.qty + delta);
  const inp = document.getElementById(`qty-${id}`);
  if (inp) inp.value = b.qty;
  updateFormula();
}

function setQty(id, val) {
  const b = blocks.find(x => x.id === id);
  if (!b) return;
  const n = parseInt(val);
  b.qty = isNaN(n) || n < 1 ? 1 : Math.min(n, 99);
  updateFormula();
}

function resetAll() {
  blocks = [];
  document.getElementById('blocksContainer').innerHTML = '';
  hideResult();
  updateFormula();
  addBlock();
}

function updateFormula() {
  const display = document.getElementById('formulaDisplay');
  const filled = blocks.filter(b => b.sym);
  if (!filled.length) {
    display.innerHTML = '<span class="fpc-empty">Adicione elementos abaixo</span>';
    return;
  }
  display.innerHTML = filled.map(b =>
    `<span class="formula-token">${b.sym}${b.qty > 1 ? `<sub>${b.qty}</sub>` : ''}</span>`
  ).join('');
}

function calcMass() {
  const filled = blocks.filter(b => b.sym);
  if (!filled.length) {
    shakeCalcBtn();
    return;
  }

  let total = 0;
  const parts = [];
  filled.forEach(b => {
    const el = elemMap[b.sym];
    if (!el) return;
    const partial = el.mass * b.qty;
    total += partial;
    parts.push({ sym: b.sym, name: el.name, qty: b.qty, mass: el.mass, partial, cat: el.cat });
  });

  const formulaStr = filled.map(b => `${b.sym}${b.qty > 1 ? `<sub>${b.qty}</sub>` : ''}`).join('');
  document.getElementById('rcFormula').innerHTML = formulaStr;
  document.getElementById('rcNumber').textContent = total.toFixed(3);

  const detailList = document.getElementById('rcDetailList');
  detailList.innerHTML = parts.map(p => `
    <div class="rc-detail-item">
      <div class="rdi-left">
        <div class="rdi-dot" style="background:${CAT_COLOR[p.cat] || '#6366f1'}"></div>
        <div>
          <div class="rdi-sym">${p.sym}${p.qty > 1 ? `<sub>${p.qty}</sub>` : ''}</div>
          <div class="rdi-calc">${p.qty} × ${p.mass.toFixed(3)} g/mol</div>
        </div>
      </div>
      <div class="rdi-mass">${p.partial.toFixed(3)}</div>
    </div>
  `).join('');

  document.getElementById('rPlaceholder').style.display = 'none';
  document.getElementById('rContent').style.display = 'block';
  document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideResult() {
  document.getElementById('rPlaceholder').style.display = 'flex';
  document.getElementById('rContent').style.display = 'none';
}

function shakeCalcBtn() {
  const btn = document.querySelector('.btn-calc');
  btn.style.animation = 'none';
  btn.offsetHeight;
  btn.style.animation = 'shake .4s ease';
  setTimeout(() => btn.style.animation = '', 400);
}

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}`;
document.head.appendChild(shakeStyle);

function buildGrid(containerId, cellSize, onClickFn) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const posMap = {};
  POSITIONS.forEach(p => {
    const key = `${p.r}-${p.c}`;
    if (!posMap[key]) posMap[key] = p;
  });

  for (let row = 1; row <= 10; row++) {
    if (row === 8) {
      const spacer = document.createElement('div');
      spacer.className = 'pt-spacer';
      container.appendChild(spacer);
      continue;
    }

    for (let col = 1; col <= 18; col++) {
      const key = `${row}-${col}`;
      const pos = posMap[key];

      const cell = document.createElement('div');

      if (!pos) {
        cell.className = 'ptc empty';
        container.appendChild(cell);
        continue;
      }

      const elemArr = ELEMENTS_DATA.find(e => e[0] === pos.z);
      if (!elemArr) {
        cell.className = 'ptc empty';
        container.appendChild(cell);
        continue;
      }

      const el = elemMap[elemArr[1]];

      if ((pos.laMark || pos.acMark) && (row === 6 || row === 7)) {
        cell.className = `ptc cat-${el.cat}`;
        cell.style.opacity = '0.7';
        cell.innerHTML = `<div class="ptc-num">${el.z}</div><div class="ptc-sym">${el.sym}</div>`;
        cell.onclick = () => onClickFn(el.sym);
      } else {
        cell.className = `ptc cat-${el.cat}`;
        cell.dataset.sym = el.sym;
        cell.dataset.name = el.name.toLowerCase();
        cell.innerHTML = `
          <div class="ptc-num">${el.z}</div>
          <div class="ptc-sym">${el.sym}</div>
          <div class="ptc-name">${el.name.substring(0, 8)}</div>
          <div class="ptc-mass">${typeof el.mass === 'number' ? el.mass.toFixed(2) : el.mass}</div>
        `;
        cell.onclick = () => onClickFn(el.sym);
      }

      container.appendChild(cell);
    }
  }
}

function buildPickerGrid() {
  buildGrid('pickerTable', 46, (sym) => selectElemForBlock(sym));
}

function buildFullGrid() {
  buildGrid('fullTable', 52, (sym) => showElemInfo(sym));
}

function buildLegends() {
  const cats = [
    { key: 'hydrogen', label: 'Hidrogênio' },
    { key: 'nonmetal', label: 'Não-Metal' },
    { key: 'noble', label: 'Gás Nobre' },
    { key: 'alkali', label: 'Alcalino' },
    { key: 'alkaline', label: 'Alc. Terroso' },
    { key: 'transition', label: 'Transição' },
    { key: 'post', label: 'Pós-Trans.' },
    { key: 'metalloid', label: 'Semimetal' },
    { key: 'halogen', label: 'Halogênio' },
    { key: 'lanthanide', label: 'Lantanídeo' },
    { key: 'actinide', label: 'Actinídeo' },
  ];
  ['pickerLegend', 'tableLegend'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    cats.forEach(c => {
      const span = document.createElement('span');
      span.className = `pl-item cat-${c.key}`;
      span.textContent = c.label;
      el.appendChild(span);
    });
  });
}

function openPicker(blockId) {
  activeBlockId = blockId;
  document.getElementById('pickerSearch').value = '';
  filterPicker();
  document.getElementById('pickerOverlay').classList.add('open');
}

function closePicker() {
  document.getElementById('pickerOverlay').classList.remove('open');
  activeBlockId = null;
}

function handlePickerOverlayClick(e) {
  if (e.target === document.getElementById('pickerOverlay')) closePicker();
}

function filterPicker() {
  const q = document.getElementById('pickerSearch').value.toLowerCase().trim();
  const cells = document.querySelectorAll('#pickerTable .ptc:not(.empty)');
  cells.forEach(cell => {
    if (!q) {
      cell.classList.remove('dimmed');
      return;
    }
    const sym = (cell.dataset.sym || '').toLowerCase();
    const name = (cell.dataset.name || '').toLowerCase();
    const match = sym.includes(q) || name.includes(q);
    cell.classList.toggle('dimmed', !match);
  });
}

function selectElemForBlock(sym) {
  if (activeBlockId === null) return;
  const b = blocks.find(x => x.id === activeBlockId);
  if (b) {
    b.sym = sym;
    refreshBlock(activeBlockId);
    updateFormula();
    hideResult();
  }
  closePicker();
}

function openTableModal() {
  selectedInfoSym = null;
  document.getElementById('elemInfoPanel').style.display = 'none';
  document.getElementById('tableOverlay').classList.add('open');
}

function closeTableModal() {
  document.getElementById('tableOverlay').classList.remove('open');
}

function handleTableOverlayClick(e) {
  if (e.target === document.getElementById('tableOverlay')) closeTableModal();
}

function showElemInfo(sym) {
  const el = elemMap[sym];
  if (!el) return;
  selectedInfoSym = sym;

  const panel = document.getElementById('elemInfoPanel');
  const tileWrap = document.getElementById('eipTile');
  const dataWrap = document.getElementById('eipData');

  const catNames = {
    hydrogen: 'Hidrogênio', nonmetal: 'Não-Metal', noble: 'Gás Nobre', alkali: 'Metal Alcalino',
    alkaline: 'Metal Alcalino Terroso', transition: 'Metal de Transição', post: 'Metal Pós-Transição',
    metalloid: 'Semimetal', halogen: 'Halogênio', lanthanide: 'Lantanídeo', actinide: 'Actinídeo'
  };

  tileWrap.innerHTML = `
    <div class="ptc cat-${el.cat}" style="width:80px;height:88px;border-radius:12px;cursor:default;pointer-events:none">
      <div class="ptc-num" style="font-size:.7rem">${el.z}</div>
      <div class="ptc-sym" style="font-size:1.9rem">${el.sym}</div>
      <div class="ptc-name" style="font-size:.5rem">${el.name}</div>
    </div>
  `;

  dataWrap.innerHTML = `
    <div class="eip-row"><label>Nome</label><span>${el.name}</span></div>
    <div class="eip-row"><label>Símbolo</label><span>${el.sym}</span></div>
    <div class="eip-row"><label>Número Atômico</label><span>${el.z}</span></div>
    <div class="eip-row"><label>Massa Atômica</label><span>${typeof el.mass === 'number' ? el.mass.toFixed(4) : el.mass} g/mol</span></div>
    <div class="eip-row"><label>Categoria</label><span>${catNames[el.cat] || el.cat}</span></div>
    <div class="eip-row"><label>Período / Grupo</label><span>${el.period || '—'} / ${el.group || '—'}</span></div>
    <div class="eip-row"><label>Descoberto por</label><span>${el.discoveredBy}</span></div>
    <div class="eip-row"><label>Ano</label><span>${el.year}</span></div>
    <div class="eip-desc eip-row"><label>Curiosidade</label><p>${el.desc}</p></div>
  `;

  panel.style.display = 'flex';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function useFromTable() {
  if (!selectedInfoSym) return;
  closeTableModal();
  const lastEmpty = blocks[blocks.length - 1];
  if (lastEmpty && !lastEmpty.sym) {
    lastEmpty.sym = selectedInfoSym;
    refreshBlock(lastEmpty.id);
  } else {
    createBlock(selectedInfoSym, 1);
  }
  updateFormula();
  hideResult();
  document.getElementById('calc').scrollIntoView({ behavior: 'smooth' });
}

function openInsta() {
  document.getElementById('instaOverlay').classList.add('open');
}
function closeInsta() {
  document.getElementById('instaOverlay').classList.remove('open');
}
function handleInstaOverlayClick(e) {
  if (e.target === document.getElementById('instaOverlay')) closeInsta();
}

