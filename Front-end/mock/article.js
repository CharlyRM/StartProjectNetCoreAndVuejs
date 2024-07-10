import Mock from 'mockjs'

const List = []
const count = 5583

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock(
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2;\"AC\";\"Acrelândia\";-66.897166;-9.825808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3;\"AC\";\"Assis Brasil\";-69.573794;-10.929765"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4;\"AC\";\"Brasiléia\";-68.749696;-10.994994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5;\"AC\";\"Bujari\";-67.955029;-9.815277"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "6;\"AC\";\"Capixaba\";-67.686006;-10.566031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "7;\"AC\";\"Cruzeiro do Sul\";-72.675582;-7.627625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "8;\"AC\";\"Epitaciolândia\";-68.734109;-11.018771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "9;\"AC\";\"Feijó\";-70.350973;-8.170536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "10;\"AC\";\"Jordão\";-71.897391;-9.430912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "12;\"AC\";\"Manoel Urbano\";-69.267862;-8.832911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "13;\"AC\";\"Marechal Thaumaturgo\";-72.799704;-8.938983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "11;\"AC\";\"Mâncio Lima\";-72.899708;-7.616575"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "14;\"AC\";\"Plácido de Castro\";-67.137133;-10.28064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "15;\"AC\";\"Porto Acre\";-67.547815;-9.581378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "16;\"AC\";\"Porto Walter\";-72.753747;-8.263233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "17;\"AC\";\"Rio Branco\";-67.824348;-9.97499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "18;\"AC\";\"Rodrigues Alves\";-72.661015;-7.738638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "19;\"AC\";\"Santa Rosa do Purus\";-70.49025;-9.446515"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "21;\"AC\";\"Sena Madureira\";-68.671278;-9.063499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "20;\"AC\";\"Senador Guiomard\";-67.736185;-10.149686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "22;\"AC\";\"Tarauacá\";-70.772154;-8.156975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "23;\"AC\";\"Xapuri\";-68.496857;-10.651598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "25;\"AL\";\"Anadia\";-36.307783;-9.684886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "26;\"AL\";\"Arapiraca\";-36.661471;-9.754866"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "27;\"AL\";\"Atalaia\";-36.008552;-9.511898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "28;\"AL\";\"Barra de Santo Antônio\";-35.510083;-9.402297"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "29;\"AL\";\"Barra de São Miguel\";-35.905667;-9.83842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "30;\"AL\";\"Batalha\";-37.133014;-9.674195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "32;\"AL\";\"Belo Monte\";-37.277014;-9.822718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "31;\"AL\";\"Belém\";-36.490399;-9.570472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "33;\"AL\";\"Boca da Mata\";-36.212498;-9.643082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "34;\"AL\";\"Branquinha\";-36.016152;-9.23342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "35;\"AL\";\"Cacimbinhas\";-36.991082;-9.401212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "36;\"AL\";\"Cajueiro\";-36.155937;-9.399402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "37;\"AL\";\"Campestre\";-35.56847;-8.847228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "38;\"AL\";\"Campo Alegre\";-36.352461;-9.784512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "39;\"AL\";\"Campo Grande\";-36.792608;-9.955423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "40;\"AL\";\"Canapi\";-37.5967;-9.119319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "41;\"AL\";\"Capela\";-36.082583;-9.415041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "42;\"AL\";\"Carneiros\";-37.377303;-9.484762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "43;\"AL\";\"Chã Preta\";-36.298334;-9.255605"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "44;\"AL\";\"Coité do Nóia\";-36.584493;-9.633484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "45;\"AL\";\"Colônia Leopoldina\";-35.721414;-8.918058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "46;\"AL\";\"Coqueiro Seco\";-35.799377;-9.637147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "47;\"AL\";\"Coruripe\";-36.171724;-10.127632"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "48;\"AL\";\"Craíbas\";-36.769726;-9.617798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "49;\"AL\";\"Delmiro Gouveia\";-37.998676;-9.385336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "50;\"AL\";\"Dois Riachos\";-37.096502;-9.384645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "51;\"AL\";\"Estrela de Alagoas\";-36.764407;-9.390894"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "52;\"AL\";\"Feira Grande\";-36.681521;-9.898586"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "53;\"AL\";\"Feliz Deserto\";-36.302788;-10.293491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "54;\"AL\";\"Flexeiras\";-35.713933;-9.272807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "55;\"AL\";\"Girau do Ponciano\";-36.831592;-9.884041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "56;\"AL\";\"Ibateguara\";-35.937325;-8.978232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "57;\"AL\";\"Igaci\";-36.637191;-9.537678"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "58;\"AL\";\"Igreja Nova\";-36.659705;-10.123463"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "59;\"AL\";\"Inhapi\";-37.750871;-9.225936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "60;\"AL\";\"Jacaré dos Homens\";-37.207636;-9.635446"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "61;\"AL\";\"Jacuípe\";-35.459074;-8.83951"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "62;\"AL\";\"Japaratinga\";-35.263403;-9.087464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "63;\"AL\";\"Jaramataia\";-37.004558;-9.662243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "64;\"AL\";\"Jequia Da Praia\";-36.01423;-10.013268"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "65;\"AL\";\"Joaquim Gomes\";-35.747381;-9.132805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "66;\"AL\";\"Jundiá\";-35.566925;-8.932968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "67;\"AL\";\"Junqueiro\";-36.480346;-9.906961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "68;\"AL\";\"Lagoa da Canoa\";-36.741257;-9.832909"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "69;\"AL\";\"Limoeiro de Anadia\";-36.512097;-9.740983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "70;\"AL\";\"Maceió\";-35.73496;-9.665985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "71;\"AL\";\"Major Isidoro\";-36.992006;-9.530086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "76;\"AL\";\"Mar Vermelho\";-36.388076;-9.447393"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "72;\"AL\";\"Maragogi\";-35.226692;-9.007443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "73;\"AL\";\"Maravilha\";-37.352419;-9.230449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "74;\"AL\";\"Marechal Deodoro\";-35.896731;-9.709715"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "75;\"AL\";\"Maribondo\";-36.304488;-9.583528"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "77;\"AL\";\"Mata Grande\";-37.732298;-9.118243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "78;\"AL\";\"Matriz de Camaragibe\";-35.524302;-9.154373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "79;\"AL\";\"Messias\";-35.839182;-9.393843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "80;\"AL\";\"Minador do Negrão\";-36.869553;-9.312358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "81;\"AL\";\"Monteirópolis\";-37.250463;-9.603569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "82;\"AL\";\"Murici\";-35.942798;-9.306823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "83;\"AL\";\"Novo Lino\";-35.664001;-8.941905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "86;\"AL\";\"Olho d`Água Grande\";-36.810082;-10.057167"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "84;\"AL\";\"Olho d`Água das Flores\";-37.297093;-9.536858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "85;\"AL\";\"Olho d`Água do Casado\";-37.830073;-9.503573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "87;\"AL\";\"Olivença\";-37.195441;-9.519538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "88;\"AL\";\"Ouro Branco\";-37.355639;-9.158842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "89;\"AL\";\"Palestina\";-37.339037;-9.674928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "90;\"AL\";\"Palmeira dos Índios\";-36.632812;-9.405681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "92;\"AL\";\"Pariconha\";-37.998751;-9.256342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "93;\"AL\";\"Paripueira\";-35.551977;-9.463133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "94;\"AL\";\"Passo de Camaragibe\";-35.47449;-9.24511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "95;\"AL\";\"Paulo Jacinto\";-36.367241;-9.367918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "96;\"AL\";\"Penedo\";-36.581905;-10.287422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "97;\"AL\";\"Piaçabuçu\";-36.433968;-10.405989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "98;\"AL\";\"Pilar\";-35.954294;-9.601348"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "99;\"AL\";\"Pindoba\";-36.291829;-9.473822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "100;\"AL\";\"Piranhas\";-37.756987;-9.623996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "102;\"AL\";\"Porto Calvo\";-35.398653;-9.051948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "104;\"AL\";\"Porto Real do Colégio\";-36.837551;-10.18489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "103;\"AL\";\"Porto de Pedras\";-35.304914;-9.160065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "101;\"AL\";\"Poço das Trincheiras\";-37.288932;-9.307417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "91;\"AL\";\"Pão de Açúcar\";-37.440336;-9.740325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "105;\"AL\";\"Quebrangulo\";-36.469239;-9.32001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "106;\"AL\";\"Rio Largo\";-35.839435;-9.477829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "107;\"AL\";\"Roteiro\";-35.978247;-9.835029"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "108;\"AL\";\"Santa Luzia do Norte\";-35.823196;-9.6037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "109;\"AL\";\"Santana do Ipanema\";-37.248018;-9.369989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "110;\"AL\";\"Santana do Mundaú\";-36.217608;-9.171413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "118;\"AL\";\"Satuba\";-35.822697;-9.569113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "119;\"AL\";\"Senador Rui Palmeira\";-37.457606;-9.469865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "111;\"AL\";\"São Brás\";-36.896529;-10.120734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "112;\"AL\";\"São José da Laje\";-36.051489;-9.012779"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "113;\"AL\";\"São José da Tapera\";-37.383125;-9.557684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "114;\"AL\";\"São Luís do Quitunde\";-35.560553;-9.31816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "115;\"AL\";\"São Miguel dos Campos\";-36.097142;-9.78301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "116;\"AL\";\"São Miguel dos Milagres\";-35.376253;-9.264925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "117;\"AL\";\"São Sebastião\";-36.558967;-9.930434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "120;\"AL\";\"Tanque d`Arca\";-36.43661;-9.533788"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "121;\"AL\";\"Taquarana\";-36.492844;-9.64529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "122;\"AL\";\"Teotônio Vilela\";-36.349212;-9.916562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "123;\"AL\";\"Traipu\";-37.007119;-9.962625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "124;\"AL\";\"União dos Palmares\";-36.02227;-9.15921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "125;\"AL\";\"Viçosa\";-36.243107;-9.367631"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "24;\"AL\";\"Água Branca\";-37.937988;-9.261996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "126;\"AM\";\"Alvarães\";-64.800654;-3.22727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "127;\"AM\";\"Amaturá\";-68.200456;-3.374547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "166;\"AM\";\"Anamã\";-61.396337;-3.566966"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "128;\"AM\";\"Anori\";-61.657485;-3.746027"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "129;\"AM\";\"Apuí\";-59.895956;-7.194091"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "130;\"AM\";\"Atalaia do Norte\";-70.1967;-4.370551"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "131;\"AM\";\"Autazes\";-59.125589;-3.585743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "132;\"AM\";\"Barcelos\";-62.931053;-0.983373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "133;\"AM\";\"Barreirinha\";-57.067897;-2.798863"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "134;\"AM\";\"Benjamin Constant\";-70.034157;-4.37768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "135;\"AM\";\"Beruri\";-61.36162;-3.898736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "136;\"AM\";\"Boa Vista do Ramos\";-57.587333;-2.974087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "137;\"AM\";\"Boca do Acre\";-67.391926;-8.742322"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "138;\"AM\";\"Borba\";-59.58738;-4.391539"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "139;\"AM\";\"Caapiranga\";-61.220557;-3.315372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "140;\"AM\";\"Canutama\";-64.39528;-6.52582"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "141;\"AM\";\"Carauari\";-66.908559;-4.881605"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "142;\"AM\";\"Careiro\";-60.369046;-3.768027"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "143;\"AM\";\"Careiro da Várzea\";-59.79639;-3.196979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "144;\"AM\";\"Coari\";-63.144091;-4.094121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "145;\"AM\";\"Codajás\";-62.065787;-3.830528"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "146;\"AM\";\"Eirunepé\";-69.86616;-6.656767"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "147;\"AM\";\"Envira\";-70.028143;-7.437889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "148;\"AM\";\"Fonte Boa\";-66.094212;-2.523424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "149;\"AM\";\"Guajará\";-72.590713;-7.537971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "150;\"AM\";\"Humaitá\";-63.032743;-7.511712"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "151;\"AM\";\"Ipixuna\";-71.693426;-7.047909"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "152;\"AM\";\"Iranduba\";-60.189953;-3.274792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "153;\"AM\";\"Itacoatiara\";-58.444874;-3.138607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "154;\"AM\";\"Itamarati\";-68.260027;-6.424591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "155;\"AM\";\"Itapiranga\";-58.029257;-2.74081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "156;\"AM\";\"Japurá\";-66.929051;-1.882366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "157;\"AM\";\"Juruá\";-66.071795;-3.484384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "158;\"AM\";\"Jutaí\";-66.75947;-2.758144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "159;\"AM\";\"Lábrea\";-64.794765;-7.264133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "160;\"AM\";\"Manacapuru\";-60.621581;-3.290657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "161;\"AM\";\"Manaquiri\";-60.461239;-3.440784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "162;\"AM\";\"Manaus\";-60.02123;-3.118662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "163;\"AM\";\"Manicoré\";-61.289483;-5.804618"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "164;\"AM\";\"Maraã\";-65.572995;-1.853129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "165;\"AM\";\"Maués\";-57.706731;-3.392891"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "167;\"AM\";\"Nhamundá\";-56.711151;-2.207932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "168;\"AM\";\"Nova Olinda do Norte\";-59.09404;-3.900367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "169;\"AM\";\"Novo Airão\";-60.943404;-2.636371"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "170;\"AM\";\"Novo Aripuanã\";-60.373179;-5.125929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "171;\"AM\";\"Parintins\";-56.729045;-2.637412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "172;\"AM\";\"Pauini\";-66.992039;-7.713109"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "173;\"AM\";\"Presidente Figueiredo\";-60.02338;-2.029813"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "174;\"AM\";\"Rio Preto da Eva\";-59.685793;-2.704497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "175;\"AM\";\"Santa Isabel do Rio Negro\";-65.009205;-0.410824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "176;\"AM\";\"Santo Antônio do Içá\";-67.946279;-3.095443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "180;\"AM\";\"Silves\";-58.248031;-2.81748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "177;\"AM\";\"São Gabriel da Cachoeira\";-67.084042;-0.11909"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "178;\"AM\";\"São Paulo de Olivença\";-68.964581;-3.472919"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "179;\"AM\";\"São Sebastião do Uatumã\";-57.873049;-2.559147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "181;\"AM\";\"Tabatinga\";-69.938273;-4.241597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "182;\"AM\";\"Tapauá\";-63.1808;-5.620855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "183;\"AM\";\"Tefé\";-64.719343;-3.368219"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "184;\"AM\";\"Tonantins\";-67.791904;-2.865825"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "185;\"AM\";\"Uarini\";-65.113298;-2.996087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "186;\"AM\";\"Urucará\";-57.753797;-2.529364"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "187;\"AM\";\"Urucurituba\";-58.149637;-3.128412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "188;\"AP\";\"Amapá\";-50.795653;2.052669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "189;\"AP\";\"Calçoene\";-50.951233;2.504747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "190;\"AP\";\"Cutias\";-50.799169;0.987565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "191;\"AP\";\"Ferreira Gomes\";-51.179523;0.857256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "192;\"AP\";\"Itaubal\";-50.670828;0.596137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "193;\"AP\";\"Laranjal do Jari\";-52.452962;-0.804911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "194;\"AP\";\"Macapá\";-51.069395;0.034934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "195;\"AP\";\"Mazagão\";-51.28913;-0.11336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "196;\"AP\";\"Oiapoque\";-51.833123;3.84074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "197;\"AP\";\"Pedra Branca do Amaparí\";-51.950306;0.777424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "198;\"AP\";\"Porto Grande\";-51.415499;0.71243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "199;\"AP\";\"Pracuúba\";-50.789248;1.745427"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "200;\"AP\";\"Santana\";-51.172924;-0.045434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "201;\"AP\";\"Serra do Navio\";-52.003636;0.901357"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "202;\"AP\";\"Tartarugalzinho\";-50.90874;1.506519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "203;\"AP\";\"Vitória do Jari\";-52.424001;-0.938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "205;\"BA\";\"Abaré\";-39.116178;-8.720734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "204;\"BA\";\"Abaíra\";-41.661869;-13.24883"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "206;\"BA\";\"Acajutiba\";-38.019737;-11.657522"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "207;\"BA\";\"Adustina\";-38.111265;-10.54369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "209;\"BA\";\"Aiquara\";-39.893653;-14.126918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "210;\"BA\";\"Alagoinhas\";-38.420772;-12.133526"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "211;\"BA\";\"Alcobaça\";-39.203609;-17.519468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "212;\"BA\";\"Almadina\";-39.641491;-14.708869"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "213;\"BA\";\"Amargosa\";-39.601966;-13.021462"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "214;\"BA\";\"Amélia Rodrigues\";-38.756289;-12.391429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "215;\"BA\";\"América Dourada\";-41.439007;-11.442938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "216;\"BA\";\"Anagé\";-41.135569;-14.61512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "217;\"BA\";\"Andaraí\";-41.329658;-12.804916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "218;\"BA\";\"Andorinha\";-39.839142;-10.348214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "219;\"BA\";\"Angical\";-44.700272;-12.006313"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "220;\"BA\";\"Anguera\";-39.246186;-12.146157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "221;\"BA\";\"Antas\";-38.340118;-10.385621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "222;\"BA\";\"Antônio Cardoso\";-39.117555;-12.433493"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "223;\"BA\";\"Antônio Gonçalves\";-40.278489;-10.576686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "224;\"BA\";\"Aporá\";-38.081418;-11.657708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "225;\"BA\";\"Apuarema\";-39.750148;-13.854241"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "227;\"BA\";\"Aracatu\";-41.464783;-14.427986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "228;\"BA\";\"Araci\";-38.958385;-11.325316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "229;\"BA\";\"Aramari\";-38.496937;-12.088399"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "230;\"BA\";\"Arataca\";-39.419017;-15.265099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "231;\"BA\";\"Aratuípe\";-39.003763;-13.071595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "226;\"BA\";\"Araças\";-38.202658;-12.220038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "232;\"BA\";\"Aurelino Leal\";-39.329035;-14.320954"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "233;\"BA\";\"Baianópolis\";-44.538829;-12.301641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "234;\"BA\";\"Baixa Grande\";-40.16897;-11.951884"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "235;\"BA\";\"Banzaê\";-38.621243;-10.578784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "236;\"BA\";\"Barra\";-43.145913;-11.0859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "237;\"BA\";\"Barra da Estiva\";-41.334697;-13.623699"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "238;\"BA\";\"Barra do Choça\";-40.579058;-14.865423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "239;\"BA\";\"Barra do Mendes\";-42.058999;-11.81"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "240;\"BA\";\"Barra do Rocha\";-39.599098;-14.199994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "241;\"BA\";\"Barreiras\";-44.996838;-12.143864"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "242;\"BA\";\"Barro Alto\";-41.905441;-11.760493"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "342;\"BA\";\"Barro Preto\";-39.476029;-14.794773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5627;\"BA\";\"Barrocas\";-39.077594;-11.527222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "243;\"BA\";\"Belmonte\";-38.87578;-15.860789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "244;\"BA\";\"Belo Campo\";-41.265172;-15.033362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "245;\"BA\";\"Biritinga\";-38.805055;-11.607156"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "246;\"BA\";\"Boa Nova\";-40.206444;-14.359754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "247;\"BA\";\"Boa Vista do Tupim\";-40.606376;-12.649774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "248;\"BA\";\"Bom Jesus da Lapa\";-43.410754;-13.250571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "249;\"BA\";\"Bom Jesus da Serra\";-40.512556;-14.366312"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "250;\"BA\";\"Boninal\";-41.828604;-12.706887"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "251;\"BA\";\"Bonito\";-41.264698;-11.966768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "252;\"BA\";\"Boquira\";-42.732354;-12.820536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "253;\"BA\";\"Botuporã\";-42.516301;-13.377235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "255;\"BA\";\"Brejolândia\";-43.967855;-12.481547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "254;\"BA\";\"Brejões\";-39.798797;-13.103948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "256;\"BA\";\"Brotas de Macaúbas\";-42.632609;-11.991452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "257;\"BA\";\"Brumado\";-41.669592;-14.202127"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "258;\"BA\";\"Buerarema\";-39.302849;-14.959497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "259;\"BA\";\"Buritirama\";-43.630231;-10.717055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "260;\"BA\";\"Caatiba\";-40.409156;-14.969854"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "261;\"BA\";\"Cabaceiras do Paraguaçu\";-39.190231;-12.531694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "262;\"BA\";\"Cachoeira\";-38.958695;-12.599443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "263;\"BA\";\"Caculé\";-42.222872;-14.500281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "265;\"BA\";\"Caetanos\";-40.917506;-14.334745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "266;\"BA\";\"Caetité\";-42.486133;-14.068422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "267;\"BA\";\"Cafarnaum\";-41.468823;-11.691399"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "268;\"BA\";\"Cairu\";-39.046525;-13.490377"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "269;\"BA\";\"Caldeirão Grande\";-40.295577;-11.020798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "270;\"BA\";\"Camacan\";-39.491937;-15.414157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "272;\"BA\";\"Camamu\";-39.107082;-13.939773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "271;\"BA\";\"Camaçari\";-38.326265;-12.699638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "273;\"BA\";\"Campo Alegre de Lourdes\";-43.01258;-9.522212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "274;\"BA\";\"Campo Formoso\";-40.320031;-10.51055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "276;\"BA\";\"Canarana\";-41.767705;-11.685831"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "277;\"BA\";\"Canavieiras\";-38.953648;-15.672205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "278;\"BA\";\"Candeal\";-39.120277;-11.804851"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "279;\"BA\";\"Candeias\";-38.547152;-12.671566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "280;\"BA\";\"Candiba\";-42.866694;-14.409738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "282;\"BA\";\"Cansanção\";-39.494388;-10.664713"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "283;\"BA\";\"Canudos\";-39.147059;-9.900135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "275;\"BA\";\"Canápolis\";-44.200949;-13.072454"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "284;\"BA\";\"Capela do Alto Alegre\";-39.834912;-11.665797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "285;\"BA\";\"Capim Grosso\";-40.008951;-11.379659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "287;\"BA\";\"Caravelas\";-39.259679;-17.726839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "286;\"BA\";\"Caraíbas\";-41.260336;-14.717677"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "288;\"BA\";\"Cardeal da Silva\";-37.946905;-11.947191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "289;\"BA\";\"Carinhanha\";-43.772349;-14.298524"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "290;\"BA\";\"Casa Nova\";-40.973977;-9.164083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "291;\"BA\";\"Castro Alves\";-39.424753;-12.75795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "292;\"BA\";\"Catolândia\";-44.864808;-12.310013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "293;\"BA\";\"Catu\";-38.379108;-12.351274"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "294;\"BA\";\"Caturama\";-42.290385;-13.323938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "264;\"BA\";\"Caém\";-40.432039;-11.067693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "295;\"BA\";\"Central\";-42.111625;-11.137576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "296;\"BA\";\"Chorrochó\";-39.097942;-8.969498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "298;\"BA\";\"Cipó\";-38.517942;-11.103172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "299;\"BA\";\"Coaraci\";-39.555609;-14.636996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "300;\"BA\";\"Cocos\";-44.53522;-14.18136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "301;\"BA\";\"Conceição da Feira\";-38.997823;-12.507835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "302;\"BA\";\"Conceição do Almeida\";-39.171466;-12.783579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "303;\"BA\";\"Conceição do Coité\";-39.280827;-11.559953"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "304;\"BA\";\"Conceição do Jacuípe\";-38.768433;-12.326831"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "305;\"BA\";\"Conde\";-37.613094;-11.817937"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "306;\"BA\";\"Condeúba\";-41.971829;-14.902227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "307;\"BA\";\"Contendas do Sincorá\";-41.047953;-13.75369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "308;\"BA\";\"Coração de Maria\";-38.748654;-12.233332"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "309;\"BA\";\"Cordeiros\";-41.930796;-15.035641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "310;\"BA\";\"Coribe\";-44.458593;-13.823216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "311;\"BA\";\"Coronel João Sá\";-37.919825;-10.2847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "312;\"BA\";\"Correntina\";-44.633335;-13.347674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "313;\"BA\";\"Cotegipe\";-44.256559;-12.022761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "314;\"BA\";\"Cravolândia\";-39.803083;-13.353063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "316;\"BA\";\"Cristópolis\";-44.421358;-12.224899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "315;\"BA\";\"Crisópolis\";-38.15148;-11.505929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "317;\"BA\";\"Cruz das Almas\";-39.100787;-12.667516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "318;\"BA\";\"Curaçá\";-39.899671;-8.984577"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "281;\"BA\";\"Cândido Sales\";-41.241438;-15.499309"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "297;\"BA\";\"Cícero Dantas\";-38.379377;-10.589664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "320;\"BA\";\"Dias d`Ávila\";-38.292645;-12.61875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "321;\"BA\";\"Dom Basílio\";-41.767663;-13.756499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "322;\"BA\";\"Dom Macedo Costa\";-39.192259;-12.901582"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "319;\"BA\";\"Dário Meira\";-39.903129;-14.4229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "323;\"BA\";\"Elísio Medrado\";-39.519087;-12.941743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "324;\"BA\";\"Encruzilhada\";-40.912432;-15.530168"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "325;\"BA\";\"Entre Rios\";-38.087125;-11.939164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "327;\"BA\";\"Esplanada\";-37.943216;-11.794215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "328;\"BA\";\"Euclides da Cunha\";-39.015286;-10.507754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "329;\"BA\";\"Eunápolis\";-39.582122;-16.371498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "331;\"BA\";\"Feira da Mata\";-44.274424;-14.204405"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "332;\"BA\";\"Feira de Santana\";-38.966293;-12.266429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "333;\"BA\";\"Filadélfia\";-40.14371;-10.740475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "334;\"BA\";\"Firmino Alves\";-39.926859;-14.982334"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "335;\"BA\";\"Floresta Azul\";-39.657877;-14.862934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "336;\"BA\";\"Formosa do Rio Preto\";-45.19298;-11.032812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "330;\"BA\";\"Fátima\";-38.223891;-10.616013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "337;\"BA\";\"Gandu\";-39.474651;-13.744101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "338;\"BA\";\"Gavião\";-39.775751;-11.468796"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "339;\"BA\";\"Gentio do Ouro\";-42.507652;-11.434233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "340;\"BA\";\"Glória\";-38.254397;-9.343822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "341;\"BA\";\"Gongogi\";-39.46899;-14.319481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "343;\"BA\";\"Governador Mangabeira\";-39.041207;-12.599415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "344;\"BA\";\"Guajeru\";-41.938064;-14.54668"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "345;\"BA\";\"Guanambi\";-42.779943;-14.223066"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "346;\"BA\";\"Guaratinga\";-39.784713;-16.583276"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "347;\"BA\";\"Heliópolis\";-38.290664;-10.682539"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "348;\"BA\";\"Iaçu\";-40.205609;-12.766637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "349;\"BA\";\"Ibiassucê\";-42.257026;-14.271126"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "350;\"BA\";\"Ibicaraí\";-39.591434;-14.857877"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "351;\"BA\";\"Ibicoara\";-41.283989;-13.405918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "352;\"BA\";\"Ibicuí\";-39.987915;-14.84496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "353;\"BA\";\"Ibipeba\";-42.019515;-11.643775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "354;\"BA\";\"Ibipitanga\";-42.485568;-12.880435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "355;\"BA\";\"Ibiquera\";-40.933774;-12.644354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "356;\"BA\";\"Ibirapitanga\";-39.378737;-14.164898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "357;\"BA\";\"Ibirapuã\";-40.112907;-17.683151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "358;\"BA\";\"Ibirataia\";-39.645935;-14.064316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "359;\"BA\";\"Ibitiara\";-42.217946;-12.650181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "360;\"BA\";\"Ibititá\";-41.97481;-11.541426"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "361;\"BA\";\"Ibotirama\";-43.21669;-12.177876"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "362;\"BA\";\"Ichu\";-39.190523;-11.743065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "363;\"BA\";\"Igaporã\";-42.715508;-13.774025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "364;\"BA\";\"Igrapiúna\";-39.136129;-13.829543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "365;\"BA\";\"Iguaí\";-40.089417;-14.752754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "366;\"BA\";\"Ilhéus\";-39.04602;-14.793045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "367;\"BA\";\"Inhambupe\";-38.355048;-11.780955"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "368;\"BA\";\"Ipecaetá\";-39.306921;-12.302846"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "369;\"BA\";\"Ipiaú\";-39.735252;-14.12263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "370;\"BA\";\"Ipirá\";-39.735941;-12.156057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "371;\"BA\";\"Ipupiara\";-42.617913;-11.821881"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "372;\"BA\";\"Irajuba\";-40.08482;-13.256331"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "373;\"BA\";\"Iramaia\";-40.959471;-13.290186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "374;\"BA\";\"Iraquara\";-41.615504;-12.24288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "375;\"BA\";\"Irará\";-38.763139;-12.050449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "376;\"BA\";\"Irecê\";-41.853462;-11.303317"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "377;\"BA\";\"Itabela\";-39.559318;-16.573188"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "378;\"BA\";\"Itaberaba\";-40.305897;-12.524182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "379;\"BA\";\"Itabuna\";-39.278056;-14.787573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "380;\"BA\";\"Itacaré\";-38.99591;-14.278422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "381;\"BA\";\"Itaeté\";-40.96774;-12.983121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "382;\"BA\";\"Itagi\";-40.013112;-14.1615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "383;\"BA\";\"Itagibá\";-39.844945;-14.278239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "384;\"BA\";\"Itagimirim\";-39.613317;-16.081919"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "385;\"BA\";\"Itaguaçu da Bahia\";-42.399671;-11.014672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "386;\"BA\";\"Itaju do Colônia\";-39.728298;-15.136598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "387;\"BA\";\"Itajuípe\";-39.369823;-14.678766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "388;\"BA\";\"Itamaraju\";-39.538569;-17.03782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "389;\"BA\";\"Itamari\";-39.682959;-13.778192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "390;\"BA\";\"Itambé\";-40.629955;-15.242913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "391;\"BA\";\"Itanagra\";-38.043595;-12.261435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "392;\"BA\";\"Itanhém\";-40.332139;-17.164207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "393;\"BA\";\"Itaparica\";-38.67995;-12.893205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "395;\"BA\";\"Itapebi\";-39.532863;-15.955063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "396;\"BA\";\"Itapetinga\";-40.248236;-15.247533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "397;\"BA\";\"Itapicuru\";-38.226229;-11.308836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "398;\"BA\";\"Itapitanga\";-39.565654;-14.413932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "394;\"BA\";\"Itapé\";-39.423858;-14.887641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "399;\"BA\";\"Itaquara\";-39.937767;-13.44589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "400;\"BA\";\"Itarantim\";-40.06496;-15.652819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "401;\"BA\";\"Itatim\";-39.695199;-12.709888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "402;\"BA\";\"Itiruçu\";-40.147186;-13.529043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "403;\"BA\";\"Itiúba\";-39.844616;-10.694761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "404;\"BA\";\"Itororó\";-40.068401;-15.109988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "405;\"BA\";\"Ituaçu\";-41.300284;-13.810651"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "406;\"BA\";\"Ituberá\";-39.148059;-13.724936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "407;\"BA\";\"Iuiú\";-43.559547;-14.405424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "408;\"BA\";\"Jaborandi\";-44.425537;-13.607082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "409;\"BA\";\"Jacaraci\";-42.432878;-14.85409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "410;\"BA\";\"Jacobina\";-40.511693;-11.181217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "411;\"BA\";\"Jaguaquara\";-39.964009;-13.524834"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "412;\"BA\";\"Jaguarari\";-40.199938;-10.256859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "413;\"BA\";\"Jaguaripe\";-38.893891;-13.110924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "414;\"BA\";\"Jandaíra\";-37.785274;-11.561614"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "415;\"BA\";\"Jequié\";-40.087704;-13.850888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "416;\"BA\";\"Jeremoabo\";-38.347097;-10.06848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "417;\"BA\";\"Jiquiriçá\";-39.57365;-13.262101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "418;\"BA\";\"Jitaúna\";-39.896892;-14.013085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "419;\"BA\";\"João Dourado\";-41.654799;-11.348642"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "420;\"BA\";\"Juazeiro\";-40.503251;-9.416217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "421;\"BA\";\"Jucuruçu\";-40.164074;-16.848752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "422;\"BA\";\"Jussara\";-41.970235;-11.043084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "423;\"BA\";\"Jussari\";-39.490962;-15.19201"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "424;\"BA\";\"Jussiape\";-41.588209;-13.515514"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "425;\"BA\";\"Lafaiete Coutinho\";-40.21189;-13.6541"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "426;\"BA\";\"Lagoa Real\";-42.132764;-14.033443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "427;\"BA\";\"Laje\";-39.421264;-13.167327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "429;\"BA\";\"Lajedinho\";-40.904752;-12.352889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "430;\"BA\";\"Lajedo do Tabocal\";-40.220429;-13.466286"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "428;\"BA\";\"Lajedão\";-40.338307;-17.605641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "431;\"BA\";\"Lamarão\";-38.887009;-11.773013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "432;\"BA\";\"Lapão\";-41.828615;-11.385096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "433;\"BA\";\"Lauro de Freitas\";-38.321008;-12.8978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "434;\"BA\";\"Lençóis\";-41.392825;-12.561604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "435;\"BA\";\"Licínio de Almeida\";-42.509527;-14.684215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "436;\"BA\";\"Livramento de Nossa Senhora\";-41.843187;-13.636868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "437;\"BA\";\"Luis Eduardo Magalhaes\";-45.786555;-12.095638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "438;\"BA\";\"Macajuba\";-40.357058;-12.132592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "439;\"BA\";\"Macarani\";-40.420888;-15.564563"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "440;\"BA\";\"Macaúbas\";-42.694515;-13.018601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "441;\"BA\";\"Macururé\";-39.051784;-9.162258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "442;\"BA\";\"Madre de Deus\";-38.615316;-12.744621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "443;\"BA\";\"Maetinga\";-41.49146;-14.662335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "444;\"BA\";\"Maiquinique\";-40.258722;-15.623985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "445;\"BA\";\"Mairi\";-40.143732;-11.710704"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "446;\"BA\";\"Malhada\";-43.768634;-14.337134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "447;\"BA\";\"Malhada de Pedras\";-41.88422;-14.384673"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "448;\"BA\";\"Manoel Vitorino\";-40.239895;-14.147617"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "449;\"BA\";\"Mansidão\";-44.042798;-10.722707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "450;\"BA\";\"Maracás\";-40.432333;-13.435468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "451;\"BA\";\"Maragogipe\";-38.917519;-12.77602"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "452;\"BA\";\"Maraú\";-39.013656;-14.103549"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "453;\"BA\";\"Marcionílio Souza\";-40.529457;-13.006437"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "454;\"BA\";\"Mascote\";-39.301602;-15.554159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "455;\"BA\";\"Mata de São João\";-38.300898;-12.530685"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "456;\"BA\";\"Matina\";-42.843914;-13.910917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "457;\"BA\";\"Medeiros Neto\";-40.223776;-17.370676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "458;\"BA\";\"Miguel Calmon\";-40.603084;-11.429891"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "459;\"BA\";\"Milagres\";-39.861092;-12.864635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "460;\"BA\";\"Mirangaba\";-40.573996;-10.960983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "461;\"BA\";\"Mirante\";-40.771799;-14.238469"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "462;\"BA\";\"Monte Santo\";-39.332077;-10.437413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "463;\"BA\";\"Morpará\";-43.276566;-11.556892"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "464;\"BA\";\"Morro do Chapéu\";-41.156461;-11.548804"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "465;\"BA\";\"Mortugaba\";-42.372663;-15.022454"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "466;\"BA\";\"Mucugê\";-41.370271;-13.0053"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "467;\"BA\";\"Mucuri\";-39.556467;-18.075392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "468;\"BA\";\"Mulungu do Morro\";-41.637352;-11.964776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "469;\"BA\";\"Mundo Novo\";-40.47139;-11.85408"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "470;\"BA\";\"Muniz Ferreira\";-39.109247;-13.009227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "471;\"BA\";\"Muquém de São Francisco\";-43.543808;-12.063376"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "472;\"BA\";\"Muritiba\";-38.992052;-12.632901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "473;\"BA\";\"Mutuípe\";-39.504367;-13.228381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "474;\"BA\";\"Nazaré\";-39.010835;-13.023491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "475;\"BA\";\"Nilo Peçanha\";-39.109111;-13.603992"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "476;\"BA\";\"Nordestina\";-39.429705;-10.819169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "477;\"BA\";\"Nova Canaã\";-40.1458;-14.791242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "478;\"BA\";\"Nova Fátima\";-39.630215;-11.603116"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "479;\"BA\";\"Nova Ibiá\";-39.618174;-13.811995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "480;\"BA\";\"Nova Itarana\";-40.065267;-13.024055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "481;\"BA\";\"Nova Redenção\";-41.074785;-12.815001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "482;\"BA\";\"Nova Soure\";-38.487103;-11.232948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "483;\"BA\";\"Nova Viçosa\";-39.374331;-17.892648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "484;\"BA\";\"Novo Horizonte\";-42.168172;-12.808318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "485;\"BA\";\"Novo Triunfo\";-38.401374;-10.318235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "486;\"BA\";\"Olindina\";-38.337863;-11.349693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "487;\"BA\";\"Oliveira dos Brejinhos\";-42.896872;-12.313183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "488;\"BA\";\"Ouriçangas\";-38.616624;-12.017497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "489;\"BA\";\"Ourolândia\";-41.075576;-10.957848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "490;\"BA\";\"Palmas de Monte Alto\";-43.16086;-14.267562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "491;\"BA\";\"Palmeiras\";-41.580886;-12.505865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "492;\"BA\";\"Paramirim\";-42.239502;-13.438849"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "493;\"BA\";\"Paratinga\";-43.179794;-12.686974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "494;\"BA\";\"Paripiranga\";-37.862561;-10.685885"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "495;\"BA\";\"Pau Brasil\";-39.645794;-15.457226"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "496;\"BA\";\"Paulo Afonso\";-38.22156;-9.398296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "499;\"BA\";\"Pedro Alexandre\";-37.893178;-10.012005"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "498;\"BA\";\"Pedrão\";-38.648715;-12.14914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "500;\"BA\";\"Piatã\";-41.770177;-13.146549"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "501;\"BA\";\"Pilão Arcado\";-42.493607;-10.005079"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "502;\"BA\";\"Pindaí\";-42.685984;-14.492128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "503;\"BA\";\"Pindobaçu\";-40.367472;-10.743338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "504;\"BA\";\"Pintadas\";-39.900859;-11.811712"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "505;\"BA\";\"Piraí do Norte\";-39.383592;-13.758962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "506;\"BA\";\"Piripá\";-41.716841;-14.944379"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "507;\"BA\";\"Piritiba\";-40.558739;-11.730008"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "508;\"BA\";\"Planaltino\";-40.369519;-13.261789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "509;\"BA\";\"Planalto\";-40.471843;-14.66537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "511;\"BA\";\"Pojuca\";-38.337436;-12.430336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "512;\"BA\";\"Ponto Novo\";-40.131144;-10.8653"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "513;\"BA\";\"Porto Seguro\";-39.064251;-16.443473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "514;\"BA\";\"Potiraguá\";-39.863846;-15.59429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "510;\"BA\";\"Poções\";-40.363354;-14.523391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "515;\"BA\";\"Prado\";-39.222721;-17.336357"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "516;\"BA\";\"Presidente Dutra\";-41.984341;-11.292345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "517;\"BA\";\"Presidente Jânio Quadros\";-41.679792;-14.688485"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "518;\"BA\";\"Presidente Tancredo Neves\";-39.420267;-13.447064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "497;\"BA\";\"Pé de Serra\";-39.611037;-11.831289"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "519;\"BA\";\"Queimadas\";-39.629347;-10.973561"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "520;\"BA\";\"Quijingue\";-39.213694;-10.750519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "521;\"BA\";\"Quixabeira\";-40.120045;-11.403061"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "522;\"BA\";\"Rafael Jambeiro\";-39.500658;-12.405257"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "523;\"BA\";\"Remanso\";-42.084839;-9.61944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "524;\"BA\";\"Retirolândia\";-39.423358;-11.483198"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "527;\"BA\";\"Riacho de Santana\";-42.939675;-13.605941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "525;\"BA\";\"Riachão das Neves\";-44.914259;-11.750755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "526;\"BA\";\"Riachão do Jacuípe\";-39.381812;-11.806681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "528;\"BA\";\"Ribeira do Amparo\";-38.424211;-11.042071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "529;\"BA\";\"Ribeira do Pombal\";-38.538152;-10.837299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "530;\"BA\";\"Ribeirão do Largo\";-40.744137;-15.450775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "534;\"BA\";\"Rio Real\";-37.933243;-11.48137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "531;\"BA\";\"Rio de Contas\";-41.804764;-13.585218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "532;\"BA\";\"Rio do Antônio\";-42.072103;-14.407144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "533;\"BA\";\"Rio do Pires\";-42.290166;-13.11853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "535;\"BA\";\"Rodelas\";-38.77999;-8.850214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "536;\"BA\";\"Ruy Barbosa\";-40.493101;-12.281612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "537;\"BA\";\"Salinas da Margarida\";-38.756164;-12.873014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "538;\"BA\";\"Salvador\";-38.501068;-12.97178"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "540;\"BA\";\"Santa Brígida\";-38.120935;-9.732273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "539;\"BA\";\"Santa Bárbara\";-38.968085;-11.95149"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "541;\"BA\";\"Santa Cruz Cabrália\";-39.029495;-16.282529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "542;\"BA\";\"Santa Cruz da Vitória\";-39.811503;-14.963975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "543;\"BA\";\"Santa Inês\";-39.813979;-13.2793"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "545;\"BA\";\"Santa Luzia\";-39.328678;-15.434188"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "546;\"BA\";\"Santa Maria da Vitória\";-44.201057;-13.385867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "549;\"BA\";\"Santa Rita de Cássia\";-44.525496;-11.006253"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "550;\"BA\";\"Santa Teresinha\";-39.520111;-12.76913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "544;\"BA\";\"Santaluz\";-39.375005;-11.250826"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "547;\"BA\";\"Santana\";-44.05064;-12.979217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "548;\"BA\";\"Santanópolis\";-38.869372;-12.031109"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "551;\"BA\";\"Santo Amaro\";-38.713679;-12.547206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "552;\"BA\";\"Santo Antônio de Jesus\";-39.258403;-12.961387"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "553;\"BA\";\"Santo Estêvão\";-39.250541;-12.427981"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "566;\"BA\";\"Sapeaçu\";-39.182426;-12.720764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "568;\"BA\";\"Saubara\";-38.762473;-12.738664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "569;\"BA\";\"Saúde\";-40.415458;-10.94279"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "570;\"BA\";\"Seabra\";-41.772159;-12.416905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "571;\"BA\";\"Sebastião Laranjeiras\";-42.943438;-14.571002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "572;\"BA\";\"Senhor do Bonfim\";-40.186532;-10.459354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "573;\"BA\";\"Sento Sé\";-41.878563;-9.741378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "575;\"BA\";\"Serra Dourada\";-43.950434;-12.759004"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "576;\"BA\";\"Serra Preta\";-39.33049;-12.156039"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "574;\"BA\";\"Serra do Ramalho\";-43.592907;-13.565889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "577;\"BA\";\"Serrinha\";-39.009976;-11.658407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "578;\"BA\";\"Serrolândia\";-40.298327;-11.408476"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "579;\"BA\";\"Simões Filho\";-38.402944;-12.786587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "582;\"BA\";\"Sobradinho\";-40.81455;-9.450243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "583;\"BA\";\"Souto Soares\";-41.642717;-12.088046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "567;\"BA\";\"Sátiro Dias\";-38.593822;-11.592928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "554;\"BA\";\"São Desidério\";-44.976881;-12.357196"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "555;\"BA\";\"São Domingos\";-39.526792;-11.464927"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "556;\"BA\";\"São Felipe\";-39.08932;-12.839439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "559;\"BA\";\"São Francisco do Conde\";-38.678601;-12.618345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "557;\"BA\";\"São Félix\";-38.97271;-12.610433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "558;\"BA\";\"São Félix do Coribe\";-44.183708;-13.401883"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "560;\"BA\";\"São Gabriel\";-41.884267;-11.217453"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "561;\"BA\";\"São Gonçalo dos Campos\";-38.966294;-12.433096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "562;\"BA\";\"São José da Vitória\";-39.343685;-15.078666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "563;\"BA\";\"São José do Jacuípe\";-39.866934;-11.41368"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "564;\"BA\";\"São Miguel das Matas\";-39.457844;-13.043387"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "565;\"BA\";\"São Sebastião do Passé\";-38.490513;-12.512264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "580;\"BA\";\"Sítio do Mato\";-43.468921;-13.080149"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "581;\"BA\";\"Sítio do Quinto\";-38.221325;-10.354453"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "584;\"BA\";\"Tabocas do Brejo Velho\";-44.007449;-12.702634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "585;\"BA\";\"Tanhaçu\";-41.247271;-14.019662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "586;\"BA\";\"Tanque Novo\";-42.493412;-13.548509"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "587;\"BA\";\"Tanquinho\";-39.103312;-11.967965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "588;\"BA\";\"Taperoá\";-39.100948;-13.532133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "589;\"BA\";\"Tapiramutá\";-40.792656;-11.84748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "590;\"BA\";\"Teixeira de Freitas\";-39.739962;-17.539915"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "591;\"BA\";\"Teodoro Sampaio\";-38.634738;-12.294998"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "592;\"BA\";\"Teofilândia\";-38.991264;-11.482719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "593;\"BA\";\"Teolândia\";-39.483986;-13.589639"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "594;\"BA\";\"Terra Nova\";-38.623804;-12.388754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "595;\"BA\";\"Tremedal\";-41.414198;-14.973625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "596;\"BA\";\"Tucano\";-38.789407;-10.958388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "597;\"BA\";\"Uauá\";-39.479396;-9.833247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "599;\"BA\";\"Ubaitaba\";-39.322166;-14.302971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "600;\"BA\";\"Ubatã\";-39.520696;-14.206336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "598;\"BA\";\"Ubaíra\";-39.665991;-13.271414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "601;\"BA\";\"Uibaí\";-42.135381;-11.33942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "602;\"BA\";\"Umburanas\";-41.323428;-10.733902"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "603;\"BA\";\"Una\";-39.076507;-15.279076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "604;\"BA\";\"Urandi\";-42.649766;-14.767799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "605;\"BA\";\"Uruçuca\";-39.285085;-14.596268"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "606;\"BA\";\"Utinga\";-41.095432;-12.078277"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "608;\"BA\";\"Valente\";-39.456953;-11.406233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "607;\"BA\";\"Valença\";-39.072953;-13.366948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "612;\"BA\";\"Varzedo\";-39.391874;-12.967153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "613;\"BA\";\"Vera Cruz\";-38.615295;-12.956845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "614;\"BA\";\"Vereda\";-40.097368;-17.218256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "615;\"BA\";\"Vitória da Conquista\";-40.844159;-14.861466"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "611;\"BA\";\"Várzea Nova\";-40.943173;-11.255685"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "609;\"BA\";\"Várzea da Roça\";-40.132829;-11.600463"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "610;\"BA\";\"Várzea do Poço\";-40.314941;-11.527307"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "616;\"BA\";\"Wagner\";-41.171476;-12.281901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "617;\"BA\";\"Wanderley\";-43.895787;-12.114375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "618;\"BA\";\"Wenceslau Guimarães\";-39.476178;-13.690825"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "619;\"BA\";\"Xique-Xique\";-42.724545;-10.82296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "208;\"BA\";\"Água Fria\";-38.763863;-11.861836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "326;\"BA\";\"Érico Cardoso\";-42.1352;-13.421467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "620;\"CE\";\"Abaiara\";-39.04159;-7.345879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "621;\"CE\";\"Acarapé\";-38.705532;-4.22083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "622;\"CE\";\"Acaraú\";-40.118306;-2.887689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "623;\"CE\";\"Acopiara\";-39.448042;-6.089114"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "624;\"CE\";\"Aiuaba\";-40.11782;-6.571216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "625;\"CE\";\"Alcântaras\";-40.547867;-3.585369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "626;\"CE\";\"Altaneira\";-39.7356;-6.998371"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "627;\"CE\";\"Alto Santo\";-38.274318;-5.508941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "628;\"CE\";\"Amontada\";-39.828816;-3.360166"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "629;\"CE\";\"Antonina do Norte\";-39.98697;-6.769193"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "630;\"CE\";\"Apuiarés\";-39.43593;-3.945057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "631;\"CE\";\"Aquiraz\";-38.389563;-3.899293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "632;\"CE\";\"Aracati\";-37.767894;-4.558259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "633;\"CE\";\"Aracoiaba\";-38.812512;-4.36872"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "634;\"CE\";\"Ararendá\";-40.83099;-4.745667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "635;\"CE\";\"Araripe\";-40.135894;-7.213195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "636;\"CE\";\"Aratuba\";-39.047117;-4.412291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "637;\"CE\";\"Arneiroz\";-40.165285;-6.316499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "638;\"CE\";\"Assaré\";-39.868872;-6.866897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "639;\"CE\";\"Aurora\";-38.974221;-6.933487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "640;\"CE\";\"Baixio\";-38.713376;-6.719447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "641;\"CE\";\"Banabuiú\";-38.913175;-5.304544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "642;\"CE\";\"Barbalha\";-39.30208;-7.298203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "643;\"CE\";\"Barreira\";-38.64291;-4.289206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "644;\"CE\";\"Barro\";-38.774133;-7.171879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "645;\"CE\";\"Barroquinha\";-41.13585;-3.020514"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "646;\"CE\";\"Baturité\";-38.881206;-4.325983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "647;\"CE\";\"Beberibe\";-38.127075;-4.177415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "648;\"CE\";\"Bela Cruz\";-40.167127;-3.049964"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "649;\"CE\";\"Boa Viagem\";-39.733652;-5.112583"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "650;\"CE\";\"Brejo Santo\";-38.979911;-7.484686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "651;\"CE\";\"Camocim\";-40.854362;-2.900499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "652;\"CE\";\"Campos Sales\";-40.368678;-7.067611"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "653;\"CE\";\"Canindé\";-39.315505;-4.351618"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "654;\"CE\";\"Capistrano\";-38.904842;-4.455688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "655;\"CE\";\"Caridade\";-39.191166;-4.225141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "657;\"CE\";\"Caririaçu\";-39.28276;-7.028076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "656;\"CE\";\"Cariré\";-40.476028;-3.948584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "658;\"CE\";\"Cariús\";-39.491619;-6.524282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "659;\"CE\";\"Carnaubal\";-40.941304;-4.159846"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "660;\"CE\";\"Cascavel\";-38.241178;-4.129666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "661;\"CE\";\"Catarina\";-39.873644;-6.122911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "662;\"CE\";\"Catunda\";-40.199988;-4.64336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "663;\"CE\";\"Caucaia\";-38.661931;-3.727966"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "664;\"CE\";\"Cedro\";-39.060869;-6.600342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "665;\"CE\";\"Chaval\";-41.24346;-3.035708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "667;\"CE\";\"Chorozinho\";-38.498572;-4.28873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "666;\"CE\";\"Choró\";-39.134397;-4.839062"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "668;\"CE\";\"Coreaú\";-40.658656;-3.541496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "669;\"CE\";\"Crateús\";-40.653635;-5.167683"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "670;\"CE\";\"Crato\";-39.410299;-7.215303"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "671;\"CE\";\"Croatá\";-40.902228;-4.404805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "672;\"CE\";\"Cruz\";-40.175981;-2.918128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "673;\"CE\";\"Deputado Irapuan Pinheiro\";-39.25701;-5.914848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "674;\"CE\";\"Ererê\";-38.346113;-6.027508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "675;\"CE\";\"Eusébio\";-38.455875;-3.892501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "676;\"CE\";\"Farias Brito\";-39.565114;-6.92146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "677;\"CE\";\"Forquilha\";-40.263405;-3.799447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "678;\"CE\";\"Fortaleza\";-38.542298;-3.716638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "679;\"CE\";\"Fortim\";-37.798056;-4.451256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "680;\"CE\";\"Frecheirinha\";-40.818019;-3.755572"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "681;\"CE\";\"General Sampaio\";-39.453958;-4.043507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "683;\"CE\";\"Granja\";-40.837205;-3.127879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "684;\"CE\";\"Granjeiro\";-39.21439;-6.88134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "682;\"CE\";\"Graça\";-40.749026;-4.044215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "685;\"CE\";\"Groaíras\";-40.385225;-3.917868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "686;\"CE\";\"Guaiúba\";-38.640372;-4.040571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "687;\"CE\";\"Guaraciaba do Norte\";-40.747588;-4.158136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "688;\"CE\";\"Guaramiranga\";-38.932044;-4.262477"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "689;\"CE\";\"Hidrolândia\";-40.405595;-4.409579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "690;\"CE\";\"Horizonte\";-38.470674;-4.120896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "691;\"CE\";\"Ibaretama\";-38.750085;-4.803764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "692;\"CE\";\"Ibiapina\";-40.891147;-3.924025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "693;\"CE\";\"Ibicuitinga\";-38.636249;-4.969993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "694;\"CE\";\"Icapuí\";-37.353062;-4.712063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "695;\"CE\";\"Icó\";-38.855352;-6.396271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "696;\"CE\";\"Iguatu\";-39.28915;-6.362806"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "697;\"CE\";\"Independência\";-40.308526;-5.387889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "698;\"CE\";\"Ipaporanga\";-40.753705;-4.897636"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "699;\"CE\";\"Ipaumirim\";-38.717856;-6.782648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "700;\"CE\";\"Ipu\";-40.705877;-4.317484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "701;\"CE\";\"Ipueiras\";-40.711764;-4.538021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "702;\"CE\";\"Iracema\";-38.291943;-5.8124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "703;\"CE\";\"Irauçuba\";-39.784332;-3.747367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "705;\"CE\";\"Itaitinga\";-38.529763;-3.965768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "704;\"CE\";\"Itaiçaba\";-37.832957;-4.671461"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "706;\"CE\";\"Itapajé\";-39.585531;-3.683137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "707;\"CE\";\"Itapipoca\";-39.583571;-3.499329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "708;\"CE\";\"Itapiúna\";-38.928113;-4.555165"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "709;\"CE\";\"Itarema\";-39.916654;-2.924797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "710;\"CE\";\"Itatira\";-39.620155;-4.526076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "711;\"CE\";\"Jaguaretama\";-38.763861;-5.605096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "712;\"CE\";\"Jaguaribara\";-38.535878;-5.677651"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "713;\"CE\";\"Jaguaribe\";-38.622653;-5.902134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "714;\"CE\";\"Jaguaruana\";-37.780997;-4.831508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "715;\"CE\";\"Jardim\";-39.28262;-7.575989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "716;\"CE\";\"Jati\";-39.002871;-7.6797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "717;\"CE\";\"Jijoca de Jericoacoara\";-40.512742;-2.793312"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "718;\"CE\";\"Juazeiro do Norte\";-39.307593;-7.196207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "719;\"CE\";\"Jucás\";-39.518679;-6.515229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "720;\"CE\";\"Lavras da Mangabeira\";-38.970619;-6.744801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "721;\"CE\";\"Limoeiro do Norte\";-38.084693;-5.143921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "722;\"CE\";\"Madalena\";-39.572542;-4.846012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "723;\"CE\";\"Maracanaú\";-38.625901;-3.86699"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "724;\"CE\";\"Maranguape\";-38.682911;-3.891432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "725;\"CE\";\"Marco\";-40.15824;-3.128501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "726;\"CE\";\"Martinópole\";-40.689581;-3.225198"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "727;\"CE\";\"Massapê\";-40.342271;-3.523645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "728;\"CE\";\"Mauriti\";-38.770786;-7.385974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "729;\"CE\";\"Meruoca\";-40.453106;-3.539741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "730;\"CE\";\"Milagres\";-38.937829;-7.297492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "731;\"CE\";\"Milhã\";-39.187483;-5.672525"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "732;\"CE\";\"Miraíma\";-39.966267;-3.568674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "733;\"CE\";\"Missão Velha\";-39.143046;-7.235219"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "734;\"CE\";\"Mombaça\";-39.630009;-5.738442"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "735;\"CE\";\"Monsenhor Tabosa\";-40.064637;-4.791022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "736;\"CE\";\"Morada Nova\";-38.370158;-5.09736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "737;\"CE\";\"Moraújo\";-40.677577;-3.463112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "738;\"CE\";\"Morrinhos\";-40.123275;-3.234258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "739;\"CE\";\"Mucambo\";-40.745222;-3.902714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "740;\"CE\";\"Mulungu\";-38.995133;-4.302938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "741;\"CE\";\"Nova Olinda\";-39.67128;-7.084145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "742;\"CE\";\"Nova Russas\";-40.562118;-4.705807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "743;\"CE\";\"Novo Oriente\";-40.771296;-5.525519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "744;\"CE\";\"Ocara\";-38.593256;-4.48523"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "745;\"CE\";\"Orós\";-38.905264;-6.251816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "746;\"CE\";\"Pacajus\";-38.464988;-4.171073"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "747;\"CE\";\"Pacatuba\";-38.618296;-3.978396"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "748;\"CE\";\"Pacoti\";-38.922011;-4.224918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "749;\"CE\";\"Pacujá\";-40.698885;-3.983272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "750;\"CE\";\"Palhano\";-37.965549;-4.736722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "751;\"CE\";\"Palmácia\";-38.844601;-4.138308"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "752;\"CE\";\"Paracuru\";-39.030028;-3.41436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "753;\"CE\";\"Paraipaba\";-39.147868;-3.437987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "754;\"CE\";\"Parambu\";-40.690524;-6.207681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "755;\"CE\";\"Paramoti\";-39.241691;-4.088146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "756;\"CE\";\"Pedra Branca\";-39.707771;-5.453411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "757;\"CE\";\"Penaforte\";-39.070724;-7.82163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "758;\"CE\";\"Pentecoste\";-39.269159;-3.792736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "759;\"CE\";\"Pereiro\";-38.462397;-6.035761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "760;\"CE\";\"Pindoretama\";-38.306118;-4.015839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "761;\"CE\";\"Piquet Carneiro\";-39.417017;-5.800251"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "762;\"CE\";\"Pires Ferreira\";-40.64418;-4.239218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "763;\"CE\";\"Poranga\";-40.920533;-4.746717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "764;\"CE\";\"Porteiras\";-39.114028;-7.522647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "765;\"CE\";\"Potengi\";-40.023292;-7.09154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "766;\"CE\";\"Potiretama\";-38.157804;-5.71287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "767;\"CE\";\"Quiterianópolis\";-40.700217;-5.842496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "768;\"CE\";\"Quixadá\";-39.015474;-4.966301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "769;\"CE\";\"Quixelô\";-39.201067;-6.246369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "770;\"CE\";\"Quixeramobim\";-39.288947;-5.190672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "771;\"CE\";\"Quixeré\";-37.9802;-5.071482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "772;\"CE\";\"Redenção\";-38.727719;-4.215873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "773;\"CE\";\"Reriutaba\";-40.575915;-4.141911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "774;\"CE\";\"Russas\";-37.972086;-4.926727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "775;\"CE\";\"Saboeiro\";-39.90173;-6.534595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "776;\"CE\";\"Salitre\";-40.450013;-7.28398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "779;\"CE\";\"Santa Quitéria\";-40.152305;-4.326081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "777;\"CE\";\"Santana do Acaraú\";-40.211827;-3.461435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "778;\"CE\";\"Santana do Cariri\";-39.730161;-7.176125"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "784;\"CE\";\"Senador Pompeu\";-39.370369;-5.582444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "785;\"CE\";\"Senador Sá\";-40.4662;-3.35305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "786;\"CE\";\"Sobral\";-40.34821;-3.689133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "787;\"CE\";\"Solonópole\";-39.01072;-5.718936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "780;\"CE\";\"São Benedito\";-40.859572;-4.047131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "781;\"CE\";\"São Gonçalo do Amarante\";-38.972646;-3.605149"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "782;\"CE\";\"São João do Jaguaribe\";-38.269366;-5.275164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "783;\"CE\";\"São Luís do Curu\";-39.239123;-3.66976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "788;\"CE\";\"Tabuleiro do Norte\";-38.128175;-5.243527"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "789;\"CE\";\"Tamboril\";-40.319593;-4.831364"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "790;\"CE\";\"Tarrafas\";-39.753048;-6.678376"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "791;\"CE\";\"Tauá\";-40.296802;-5.985853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "792;\"CE\";\"Tejuçuoca\";-39.579866;-3.988307"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "793;\"CE\";\"Tianguá\";-40.992286;-3.729645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "794;\"CE\";\"Trairi\";-39.268126;-3.269323"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "795;\"CE\";\"Tururu\";-39.429656;-3.584132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "796;\"CE\";\"Ubajara\";-40.920437;-3.854479"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "797;\"CE\";\"Umari\";-38.700798;-6.638926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "798;\"CE\";\"Umirim\";-39.346513;-3.676541"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "799;\"CE\";\"Uruburetama\";-39.510677;-3.623165"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "800;\"CE\";\"Uruoca\";-40.56276;-3.308194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "801;\"CE\";\"Varjota\";-40.474083;-4.193871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "803;\"CE\";\"Viçosa do Ceará\";-41.091554;-3.566703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "802;\"CE\";\"Várzea Alegre\";-39.294155;-6.782642"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "804;\"DF\";\"Brasília\";-47.929657;-15.779522"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5709;\"DF\";\"Brazlândia\";-48.1200592;-15.6103503"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5710;\"DF\";\"Candangolândia\";-47.9490349;-15.8495671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "805;\"DF\";\"Ceilândia\";-48.10389;-15.81278"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5711;\"DF\";\"Cruzeiro\";-47.9267674;-15.7950174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5712;\"DF\";\"Gama\";-48.0682555;-16.0160682"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5713;\"DF\";\"Guará\";-47.9713115;-15.8102388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5714;\"DF\";\"Lago Norte\";-47.8328517;-15.7212576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5715;\"DF\";\"Lago Sul\";-47.8624914;-15.9064363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5716;\"DF\";\"Núcleo Bandeirante\";-47.9709785;-15.8711088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5717;\"DF\";\"Paranoá\";-47.7799002;-15.7757162"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5718;\"DF\";\"Planaltina\";-47.6521514;-15.6216249"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5719;\"DF\";\"Recanto das Emas\";-48.0999169;-15.9150877"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5720;\"DF\";\"Riacho Fundo\";-48.013415;-15.8836105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5721;\"DF\";\"Samambaia\";-48.0902431;-15.8705748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5722;\"DF\";\"Santa Maria\";-47.9872688;-16.0036155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5723;\"DF\";\"Sobradinho\";-47.7925346;-15.6580179"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5724;\"DF\";\"São Sebastião\";-47.7760971;-15.9028899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "806;\"DF\";\"Taguatinga\";-48.0323;-15.5"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "807;\"ES\";\"Afonso Cláudio\";-41.12606;-20.077841"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "810;\"ES\";\"Alegre\";-41.538237;-20.758041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "811;\"ES\";\"Alfredo Chaves\";-40.754289;-20.639627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "812;\"ES\";\"Alto Rio Novo\";-41.020909;-19.061797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "813;\"ES\";\"Anchieta\";-40.642545;-20.795499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "814;\"ES\";\"Apiacá\";-41.569297;-21.152272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "815;\"ES\";\"Aracruz\";-40.276441;-19.820045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "816;\"ES\";\"Atilio Vivacqua\";-41.198576;-20.912974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "817;\"ES\";\"Baixo Guandu\";-41.010913;-19.521283"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "818;\"ES\";\"Barra de São Francisco\";-40.896456;-18.75484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "819;\"ES\";\"Boa Esperança\";-40.302521;-18.539495"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "820;\"ES\";\"Bom Jesus do Norte\";-41.673129;-21.11729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "821;\"ES\";\"Brejetuba\";-41.29541;-20.139489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "822;\"ES\";\"Cachoeiro de Itapemirim\";-41.119829;-20.846212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "823;\"ES\";\"Cariacica\";-40.416549;-20.263202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "824;\"ES\";\"Castelo\";-41.203133;-20.603255"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "825;\"ES\";\"Colatina\";-40.626898;-19.549316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "826;\"ES\";\"Conceição da Barra\";-39.736199;-18.588306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "827;\"ES\";\"Conceição do Castelo\";-41.24173;-20.363897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "828;\"ES\";\"Divino de São Lourenço\";-41.693725;-20.622932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "829;\"ES\";\"Domingos Martins\";-40.659425;-20.360306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "830;\"ES\";\"Dores do Rio Preto\";-41.840538;-20.693119"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "831;\"ES\";\"Ecoporanga\";-40.835976;-18.370231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "832;\"ES\";\"Fundão\";-40.407759;-19.937035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "833;\"ES\";\"Governador Lindenberg\";-40.460954;-19.25182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "835;\"ES\";\"Guarapari\";-40.509253;-20.677248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "834;\"ES\";\"Guaçuí\";-41.6734;-20.766792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "836;\"ES\";\"Ibatiba\";-41.508674;-20.234676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "837;\"ES\";\"Ibiraçu\";-40.373182;-19.836601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "838;\"ES\";\"Ibitirama\";-41.666718;-20.546619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "839;\"ES\";\"Iconha\";-40.8132;-20.791287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "840;\"ES\";\"Irupi\";-41.644359;-20.350122"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "841;\"ES\";\"Itaguaçu\";-40.860135;-19.801786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "842;\"ES\";\"Itapemirim\";-40.830669;-21.009512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "843;\"ES\";\"Itarana\";-40.875264;-19.875009"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "844;\"ES\";\"Iúna\";-41.53344;-20.353135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "845;\"ES\";\"Jaguaré\";-40.0759;-18.907006"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "846;\"ES\";\"Jerônimo Monteiro\";-41.394848;-20.799359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "847;\"ES\";\"João Neiva\";-40.385951;-19.757707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "848;\"ES\";\"Laranja da Terra\";-41.062141;-19.899399"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "849;\"ES\";\"Linhares\";-40.064277;-19.394642"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "850;\"ES\";\"Mantenópolis\";-41.124005;-18.859428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "851;\"ES\";\"Marataízes\";-40.838436;-21.039813"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "852;\"ES\";\"Marechal Floriano\";-40.669998;-20.415889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "853;\"ES\";\"Marilândia\";-40.545648;-19.411358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "854;\"ES\";\"Mimoso do Sul\";-41.361529;-21.062777"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "855;\"ES\";\"Montanha\";-40.366781;-18.130287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "856;\"ES\";\"Mucurici\";-40.519975;-18.096516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "857;\"ES\";\"Muniz Freire\";-41.41563;-20.465187"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "858;\"ES\";\"Muqui\";-41.345994;-20.950859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "859;\"ES\";\"Nova Venécia\";-40.405273;-18.715017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "860;\"ES\";\"Pancas\";-40.853444;-19.22294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "861;\"ES\";\"Pedro Canário\";-39.957365;-18.300418"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "862;\"ES\";\"Pinheiros\";-40.217142;-18.414068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "863;\"ES\";\"Piúma\";-40.726813;-20.833433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "864;\"ES\";\"Ponto Belo\";-40.545801;-18.125318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "865;\"ES\";\"Presidente Kennedy\";-41.0468;-21.096358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "866;\"ES\";\"Rio Bananal\";-40.336605;-19.271889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "867;\"ES\";\"Rio Novo do Sul\";-40.938761;-20.855619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "868;\"ES\";\"Santa Leopoldina\";-40.526998;-20.099914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "869;\"ES\";\"Santa Maria de Jetibá\";-40.743931;-20.025296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "870;\"ES\";\"Santa Teresa\";-40.597945;-19.936339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "876;\"ES\";\"Serra\";-40.307408;-20.121032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "877;\"ES\";\"Sooretama\";-40.097351;-19.189695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "871;\"ES\";\"São Domingos do Norte\";-40.62812;-19.145213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "872;\"ES\";\"São Gabriel da Palha\";-40.536487;-19.01819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "873;\"ES\";\"São José do Calçado\";-41.663627;-21.027442"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "874;\"ES\";\"São Mateus\";-39.857935;-18.721407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "875;\"ES\";\"São Roque do Canaã\";-40.65258;-19.741145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "878;\"ES\";\"Vargem Alta\";-41.017922;-20.669019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "879;\"ES\";\"Venda Nova do Imigrante\";-41.135545;-20.327017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "880;\"ES\";\"Viana\";-40.493292;-20.382503"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "881;\"ES\";\"Vila Pavão\";-40.608992;-18.609087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "882;\"ES\";\"Vila Valério\";-40.384913;-18.995766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "883;\"ES\";\"Vila Velha\";-40.287458;-20.341705"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "884;\"ES\";\"Vitória\";-40.312806;-20.315472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "808;\"ES\";\"Água Doce do Norte\";-40.985411;-18.54822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "809;\"ES\";\"Águia Branca\";-40.74369;-18.984588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "885;\"GO\";\"Abadia de Goiás\";-49.441156;-16.757326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "886;\"GO\";\"Abadiânia\";-48.705672;-16.196973"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "887;\"GO\";\"Acreúna\";-50.374903;-17.39599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "888;\"GO\";\"Adelândia\";-50.165699;-16.4127"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "892;\"GO\";\"Alexânia\";-48.507609;-16.083405"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "893;\"GO\";\"Aloândia\";-49.476895;-17.729197"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "894;\"GO\";\"Alto Horizonte\";-49.337836;-14.197811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "895;\"GO\";\"Alto Paraíso de Goiás\";-47.510016;-14.130478"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "896;\"GO\";\"Alvorada do Norte\";-46.491036;-14.479688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "897;\"GO\";\"Amaralina\";-49.296241;-13.92362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "898;\"GO\";\"Americano do Brasil\";-49.983129;-16.251449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "899;\"GO\";\"Amorinópolis\";-51.09193;-16.615094"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "901;\"GO\";\"Anhanguera\";-48.220363;-18.333875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "902;\"GO\";\"Anicuns\";-49.961695;-16.464164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "900;\"GO\";\"Anápolis\";-48.952958;-16.328095"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "903;\"GO\";\"Aparecida de Goiânia\";-49.246856;-16.819804"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "904;\"GO\";\"Aparecida do Rio Doce\";-51.151606;-18.294071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "905;\"GO\";\"Aporé\";-51.923184;-18.960729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "907;\"GO\";\"Aragarças\";-52.237231;-15.89546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "908;\"GO\";\"Aragoiânia\";-49.447649;-16.908699"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "909;\"GO\";\"Araguapaz\";-50.631511;-15.090853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "906;\"GO\";\"Araçu\";-49.680424;-16.356306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "910;\"GO\";\"Arenópolis\";-51.55628;-16.383726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "911;\"GO\";\"Aruanã\";-51.075008;-14.916604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "912;\"GO\";\"Aurilândia\";-50.464123;-16.67726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "913;\"GO\";\"Avelinópolis\";-49.757866;-16.467241"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "914;\"GO\";\"Baliza\";-52.539253;-16.196606"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "915;\"GO\";\"Barro Alto\";-48.908586;-14.965817"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "916;\"GO\";\"Bela Vista de Goiás\";-48.951307;-16.969295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "917;\"GO\";\"Bom Jardim de Goiás\";-52.172793;-16.206266"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "918;\"GO\";\"Bom Jesus de Goiás\";-49.73999;-18.217254"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "919;\"GO\";\"Bonfinópolis\";-48.96157;-16.617271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "920;\"GO\";\"Bonópolis\";-49.810639;-13.632893"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "921;\"GO\";\"Brazabrantes\";-49.386252;-16.428131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "922;\"GO\";\"Britânia\";-51.160206;-15.24276"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "923;\"GO\";\"Buriti Alegre\";-49.040441;-18.137788"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "924;\"GO\";\"Buriti de Goiás\";-50.430223;-16.179199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "925;\"GO\";\"Buritinópolis\";-46.407588;-14.477184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "926;\"GO\";\"Cabeceiras\";-46.926499;-15.799546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "927;\"GO\";\"Cachoeira Alta\";-50.943243;-18.761827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "929;\"GO\";\"Cachoeira Dourada\";-49.476603;-18.485893"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "928;\"GO\";\"Cachoeira de Goiás\";-50.646041;-16.663516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "931;\"GO\";\"Caiapônia\";-51.809076;-16.953878"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "932;\"GO\";\"Caldas Novas\";-48.624579;-17.74406"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "933;\"GO\";\"Caldazinha\";-49.00126;-16.711665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "934;\"GO\";\"Campestre de Goiás\";-49.69497;-16.762418"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "935;\"GO\";\"Campinaçu\";-48.570384;-13.786997"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "936;\"GO\";\"Campinorte\";-49.151093;-14.31367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "937;\"GO\";\"Campo Alegre de Goiás\";-47.776815;-17.636346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5673;\"GO\";\"Campo Limpo de Goiás\";-49.079073;-16.302822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "938;\"GO\";\"Campos Belos\";-46.768112;-13.034984"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "939;\"GO\";\"Campos Verdes\";-49.652795;-14.244197"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "940;\"GO\";\"Carmo do Rio Verde\";-49.707975;-15.354914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "941;\"GO\";\"Castelândia\";-50.203036;-18.092103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "942;\"GO\";\"Catalão\";-47.944043;-18.165633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "943;\"GO\";\"Caturaí\";-49.493573;-16.444725"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "944;\"GO\";\"Cavalcante\";-47.45659;-13.797564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "930;\"GO\";\"Caçu\";-51.132798;-18.559382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "945;\"GO\";\"Ceres\";-49.600006;-15.306109"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "946;\"GO\";\"Cezarina\";-49.775814;-16.971829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "947;\"GO\";\"Chapadão do Céu\";-52.548986;-18.407326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "948;\"GO\";\"Cidade Ocidental\";-47.925211;-16.076469"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "949;\"GO\";\"Cocalzinho de Goiás\";-48.774742;-15.791438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "950;\"GO\";\"Colinas do Sul\";-48.075988;-14.152816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "953;\"GO\";\"Corumbaíba\";-48.562607;-18.141487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "952;\"GO\";\"Corumbá de Goiás\";-48.811706;-15.924473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "954;\"GO\";\"Cristalina\";-47.613128;-16.767608"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "955;\"GO\";\"Cristianópolis\";-48.703447;-17.198663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "956;\"GO\";\"Crixás\";-49.973977;-14.541194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "957;\"GO\";\"Cromínia\";-49.379778;-17.288322"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "958;\"GO\";\"Cumari\";-48.151134;-18.264437"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "951;\"GO\";\"Córrego do Ouro\";-50.550301;-16.291774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "959;\"GO\";\"Damianópolis\";-46.178024;-14.560381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "960;\"GO\";\"Damolândia\";-49.363098;-16.254372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "961;\"GO\";\"Davinópolis\";-47.556795;-18.150084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "962;\"GO\";\"Diorama\";-51.254332;-16.232936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "963;\"GO\";\"Divinópolis de Goiás\";-46.399879;-13.285314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "964;\"GO\";\"Doverlândia\";-52.31886;-16.718819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "965;\"GO\";\"Edealina\";-49.664401;-17.423942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "966;\"GO\";\"Edéia\";-49.929544;-17.340601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "967;\"GO\";\"Estrela do Norte\";-49.071592;-13.866451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "968;\"GO\";\"Faina\";-50.362205;-15.447297"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "969;\"GO\";\"Fazenda Nova\";-50.778111;-16.18337"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "970;\"GO\";\"Firminópolis\";-50.304007;-16.57778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "971;\"GO\";\"Flores de Goiás\";-47.041694;-14.445115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "972;\"GO\";\"Formosa\";-47.336999;-15.539991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "973;\"GO\";\"Formoso\";-48.877548;-13.649906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5675;\"GO\";\"Gameleira de Goiás\";-48.644369;-16.483064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "975;\"GO\";\"Goiandira\";-48.087453;-18.135158"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "978;\"GO\";\"Goianira\";-49.426998;-16.494746"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "974;\"GO\";\"Goianápolis\";-49.023435;-16.509768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "976;\"GO\";\"Goianésia\";-49.1162;-15.311827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "980;\"GO\";\"Goiatuba\";-49.365807;-18.010531"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "979;\"GO\";\"Goiás\";-50.139963;-15.933305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "977;\"GO\";\"Goiânia\";-49.264346;-16.686439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "981;\"GO\";\"Gouvelândia\";-50.080499;-18.623801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "982;\"GO\";\"Guapó\";-49.534531;-16.829656"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "984;\"GO\";\"Guarani de Goiás\";-46.486784;-13.942141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "983;\"GO\";\"Guaraíta\";-50.026528;-15.612137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "985;\"GO\";\"Guarinos\";-49.700609;-14.729215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "986;\"GO\";\"Heitoraí\";-49.826826;-15.718986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "988;\"GO\";\"Hidrolina\";-49.463404;-14.726103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "987;\"GO\";\"Hidrolândia\";-49.226535;-16.962587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "989;\"GO\";\"Iaciara\";-46.633452;-14.101101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "990;\"GO\";\"Inaciolândia\";-49.988758;-18.486896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "991;\"GO\";\"Indiara\";-49.986162;-17.138739"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "992;\"GO\";\"Inhumas\";-49.500111;-16.361057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "993;\"GO\";\"Ipameri\";-48.158118;-17.721544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5674;\"GO\";\"Ipiranga de Goiás\";-49.671844;-15.170417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "994;\"GO\";\"Iporá\";-51.118049;-16.439764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "995;\"GO\";\"Israelândia\";-50.908722;-16.314389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "996;\"GO\";\"Itaberaí\";-49.806034;-16.020551"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "997;\"GO\";\"Itaguari\";-49.607084;-15.918044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "998;\"GO\";\"Itaguaru\";-49.635375;-15.75647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "999;\"GO\";\"Itajá\";-51.549514;-19.067338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1000;\"GO\";\"Itapaci\";-49.551122;-14.952235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1001;\"GO\";\"Itapirapuã\";-50.609434;-15.8205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1002;\"GO\";\"Itapuranga\";-49.948957;-15.560589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1003;\"GO\";\"Itarumã\";-51.348516;-18.764553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1004;\"GO\";\"Itauçu\";-49.610929;-16.202899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1005;\"GO\";\"Itumbiara\";-49.215845;-18.409267"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1006;\"GO\";\"Ivolândia\";-50.792076;-16.599526"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1007;\"GO\";\"Jandaia\";-50.145322;-17.048144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1008;\"GO\";\"Jaraguá\";-49.334428;-15.752948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1009;\"GO\";\"Jataí\";-51.720424;-17.878383"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1010;\"GO\";\"Jaupaci\";-50.950766;-16.177289"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1011;\"GO\";\"Jesúpolis\";-49.373942;-15.948362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1012;\"GO\";\"Joviânia\";-49.619687;-17.801983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1013;\"GO\";\"Jussara\";-50.866818;-15.865877"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5672;\"GO\";\"Lagoa Santa\";-51.399333;-19.185113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1014;\"GO\";\"Leopoldo de Bulhões\";-48.742755;-16.619048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1015;\"GO\";\"Luziânia\";-47.95;-16.253"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1016;\"GO\";\"Mairipotaba\";-49.489819;-17.297538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1017;\"GO\";\"Mambaí\";-46.116491;-14.482291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1018;\"GO\";\"Mara Rosa\";-49.177652;-14.014816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1019;\"GO\";\"Marzagão\";-48.641519;-17.982978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1020;\"GO\";\"Matrinchã\";-50.745644;-15.434171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1021;\"GO\";\"Maurilândia\";-50.338836;-17.971859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1022;\"GO\";\"Mimoso de Goiás\";-48.161149;-15.051489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1023;\"GO\";\"Minaçu\";-48.22058;-13.530413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1024;\"GO\";\"Mineiros\";-52.553672;-17.565388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1025;\"GO\";\"Moiporá\";-50.73904;-16.543374"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1026;\"GO\";\"Monte Alegre de Goiás\";-46.892813;-13.255206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1027;\"GO\";\"Montes Claros de Goiás\";-51.397878;-16.005946"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1028;\"GO\";\"Montividiu\";-51.172815;-17.443934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1029;\"GO\";\"Montividiu do Norte\";-48.685316;-13.348471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1030;\"GO\";\"Morrinhos\";-49.105908;-17.733369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1031;\"GO\";\"Morro Agudo de Goiás\";-50.055281;-15.31843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1032;\"GO\";\"Mossâmedes\";-50.213615;-16.123982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1033;\"GO\";\"Mozarlândia\";-50.571321;-14.745705"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1034;\"GO\";\"Mundo Novo\";-50.281378;-13.772943"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1035;\"GO\";\"Mutunópolis\";-49.274549;-13.730338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1036;\"GO\";\"Nazário\";-49.881671;-16.580769"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1037;\"GO\";\"Nerópolis\";-49.222708;-16.404708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1038;\"GO\";\"Niquelândia\";-48.459887;-14.466192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1039;\"GO\";\"Nova América\";-49.895297;-15.020589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1040;\"GO\";\"Nova Aurora\";-48.255172;-18.059652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1041;\"GO\";\"Nova Crixás\";-50.32996;-14.095676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1042;\"GO\";\"Nova Glória\";-49.573713;-15.144957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1043;\"GO\";\"Nova Iguaçu de Goiás\";-49.387191;-14.286829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1044;\"GO\";\"Nova Roma\";-46.873369;-13.738781"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1045;\"GO\";\"Nova Veneza\";-49.316789;-16.369518"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1046;\"GO\";\"Novo Brasil\";-50.711279;-16.031326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1047;\"GO\";\"Novo Gama\";-48.041662;-16.059185"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1048;\"GO\";\"Novo Planalto\";-49.506025;-13.242382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1049;\"GO\";\"Orizona\";-48.29641;-17.033356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1050;\"GO\";\"Ouro Verde de Goiás\";-49.194154;-16.218107"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1051;\"GO\";\"Ouvidor\";-47.83548;-18.227669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1052;\"GO\";\"Padre Bernardo\";-48.283303;-15.160492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1053;\"GO\";\"Palestina de Goiás\";-51.530885;-16.739221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1054;\"GO\";\"Palmeiras de Goiás\";-49.924029;-16.804446"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1055;\"GO\";\"Palmelo\";-48.42603;-17.325819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1056;\"GO\";\"Palminópolis\";-50.16524;-16.79243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1057;\"GO\";\"Panamá\";-49.354994;-18.178264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1058;\"GO\";\"Paranaiguara\";-50.653928;-18.914055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1059;\"GO\";\"Paraúna\";-50.448357;-16.946259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1060;\"GO\";\"Perolândia\";-52.064987;-17.525835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1061;\"GO\";\"Petrolina de Goiás\";-49.336371;-16.096849"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1062;\"GO\";\"Pilar de Goiás\";-49.578356;-14.760837"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1063;\"GO\";\"Piracanjuba\";-49.01701;-17.302038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1064;\"GO\";\"Piranhas\";-51.823472;-16.425807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1065;\"GO\";\"Pirenópolis\";-48.95843;-15.8507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1066;\"GO\";\"Pires do Rio\";-48.276756;-17.301901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1067;\"GO\";\"Planaltina\";-47.608885;-15.452033"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1068;\"GO\";\"Pontalina\";-49.44894;-17.522513"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1069;\"GO\";\"Porangatu\";-49.150282;-13.439102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1070;\"GO\";\"Porteirão\";-50.165322;-17.81428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1071;\"GO\";\"Portelândia\";-52.679939;-17.355381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1072;\"GO\";\"Posse\";-46.370407;-14.085943"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1073;\"GO\";\"Professor Jamil\";-49.244004;-17.249665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1074;\"GO\";\"Quirinópolis\";-50.454698;-18.447186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1075;\"GO\";\"Rialma\";-49.581399;-15.314482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1076;\"GO\";\"Rianápolis\";-49.511399;-15.445649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1077;\"GO\";\"Rio Quente\";-48.772462;-17.773988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1078;\"GO\";\"Rio Verde\";-50.919195;-17.792266"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1079;\"GO\";\"Rubiataba\";-49.804792;-15.161744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1080;\"GO\";\"Sanclerlândia\";-50.312374;-16.197039"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1081;\"GO\";\"Santa Bárbara de Goiás\";-49.695385;-16.571363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1082;\"GO\";\"Santa Cruz de Goiás\";-48.48095;-17.315512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1083;\"GO\";\"Santa Fé de Goiás\";-51.103706;-15.766426"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1084;\"GO\";\"Santa Helena de Goiás\";-50.597664;-17.81152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1085;\"GO\";\"Santa Isabel\";-49.425931;-15.295849"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1086;\"GO\";\"Santa Rita do Araguaia\";-53.201236;-17.32691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1087;\"GO\";\"Santa Rita do Novo Destino\";-49.120254;-15.135072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1088;\"GO\";\"Santa Rosa de Goiás\";-49.495326;-16.083983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1089;\"GO\";\"Santa Tereza de Goiás\";-49.014405;-13.713812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1090;\"GO\";\"Santa Terezinha de Goiás\";-49.709099;-14.432649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1091;\"GO\";\"Santo Antônio da Barra\";-50.634543;-17.558499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1092;\"GO\";\"Santo Antônio de Goiás\";-49.309607;-16.481534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1093;\"GO\";\"Santo Antônio do Descoberto\";-48.257761;-15.941247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1104;\"GO\";\"Senador Canedo\";-49.091398;-16.708401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1105;\"GO\";\"Serranópolis\";-51.958637;-18.306722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1106;\"GO\";\"Silvânia\";-48.608326;-16.659972"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1107;\"GO\";\"Simolândia\";-46.484681;-14.464402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1094;\"GO\";\"São Domingos\";-46.318968;-13.403749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1095;\"GO\";\"São Francisco de Goiás\";-49.260519;-15.925646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1096;\"GO\";\"São João d`Aliança\";-47.522783;-14.704831"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1097;\"GO\";\"São João da Paraúna\";-50.409243;-16.812622"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1098;\"GO\";\"São Luís de Montes Belos\";-50.372628;-16.521064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1099;\"GO\";\"São Luíz do Norte\";-49.328495;-14.860804"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1100;\"GO\";\"São Miguel do Araguaia\";-50.163402;-13.27305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1101;\"GO\";\"São Miguel do Passa Quatro\";-48.661981;-17.058201"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1102;\"GO\";\"São Patrício\";-49.818;-15.35"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1103;\"GO\";\"São Simão\";-50.546968;-18.99603"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1108;\"GO\";\"Sítio d`Abadia\";-46.250628;-14.79924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1109;\"GO\";\"Taquaral de Goiás\";-49.603859;-16.052057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1110;\"GO\";\"Teresina de Goiás\";-47.265896;-13.780056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1111;\"GO\";\"Terezópolis de Goiás\";-49.079695;-16.394529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1113;\"GO\";\"Trindade\";-49.492667;-16.651708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1114;\"GO\";\"Trombas\";-48.74171;-13.50789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1112;\"GO\";\"Três Ranchos\";-47.775977;-18.353897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1116;\"GO\";\"Turvelândia\";-50.302376;-17.850215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1115;\"GO\";\"Turvânia\";-50.136894;-16.612535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1117;\"GO\";\"Uirapuru\";-49.920061;-14.283538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1119;\"GO\";\"Uruana\";-49.686137;-15.499323"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1118;\"GO\";\"Uruaçu\";-49.139633;-14.52384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1120;\"GO\";\"Urutaí\";-48.201481;-17.465097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1121;\"GO\";\"Valparaíso de Goiás\";-47.975675;-16.065078"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1122;\"GO\";\"Varjão\";-49.631229;-17.047062"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1123;\"GO\";\"Vianópolis\";-48.515914;-16.740532"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1124;\"GO\";\"Vicentinópolis\";-49.804747;-17.732204"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1125;\"GO\";\"Vila Boa\";-47.052029;-15.038705"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1126;\"GO\";\"Vila Propício\";-48.88191;-15.454161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "889;\"GO\";\"Água Fria de Goiás\";-47.78229;-14.977837"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "890;\"GO\";\"Água Limpa\";-48.760304;-18.077082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "891;\"GO\";\"Águas Lindas de Goiás\";-48.281611;-15.761746"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1128;\"MA\";\"Afonso Cunha\";-43.327527;-4.136313"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1130;\"MA\";\"Alcântara\";-44.406182;-2.395737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1131;\"MA\";\"Aldeias Altas\";-43.468931;-4.626213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1132;\"MA\";\"Altamira do Maranhão\";-45.470616;-4.16598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1133;\"MA\";\"Alto Alegre do Maranhão\";-44.446;-4.213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1134;\"MA\";\"Alto Alegre do Pindaré\";-45.842111;-3.666886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1135;\"MA\";\"Alto Parnaíba\";-45.930328;-9.102733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1136;\"MA\";\"Amapá do Maranhão\";-46.002442;-1.675241"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1137;\"MA\";\"Amarante do Maranhão\";-46.747284;-5.56913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1138;\"MA\";\"Anajatuba\";-44.612594;-3.262693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1139;\"MA\";\"Anapurus\";-43.101449;-3.675769"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1140;\"MA\";\"Apicum-Açu\";-45.08645;-1.458622"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1141;\"MA\";\"Araguanã\";-45.658946;-2.946441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1142;\"MA\";\"Araioses\";-41.904993;-2.890914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1143;\"MA\";\"Arame\";-46.003201;-4.88347"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1144;\"MA\";\"Arari\";-44.766459;-3.452136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1145;\"MA\";\"Axixá\";-44.061967;-2.839385"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1127;\"MA\";\"Açailândia\";-47.500383;-4.947137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1146;\"MA\";\"Bacabal\";-44.783183;-4.224467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1147;\"MA\";\"Bacabeira\";-44.316373;-2.964519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1148;\"MA\";\"Bacuri\";-45.132839;-1.696501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1149;\"MA\";\"Bacurituba\";-44.732877;-2.709998"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1150;\"MA\";\"Balsas\";-46.037163;-7.53214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1152;\"MA\";\"Barra do Corda\";-45.248496;-5.496823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1153;\"MA\";\"Barreirinhas\";-42.823241;-2.75863"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1151;\"MA\";\"Barão de Grajaú\";-43.026109;-6.744628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1155;\"MA\";\"Bela Vista do Maranhão\";-45.307487;-3.726175"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1154;\"MA\";\"Belágua\";-43.512153;-3.154854"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1156;\"MA\";\"Benedito Leite\";-44.557705;-7.210368"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1157;\"MA\";\"Bequimão\";-44.784199;-2.441621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1158;\"MA\";\"Bernardo do Mearim\";-44.760753;-4.626663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1159;\"MA\";\"Boa Vista do Gurupi\";-46.300223;-1.776137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1160;\"MA\";\"Bom Jardim\";-45.606004;-3.54129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1161;\"MA\";\"Bom Jesus das Selvas\";-46.864118;-4.476382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1162;\"MA\";\"Bom Lugar\";-45.03265;-4.373113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1163;\"MA\";\"Brejo\";-42.752704;-3.677957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1164;\"MA\";\"Brejo de Areia\";-45.581;-4.334"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1165;\"MA\";\"Buriti\";-42.917936;-3.941692"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1166;\"MA\";\"Buriti Bravo\";-43.835288;-5.832392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1167;\"MA\";\"Buriticupu\";-46.440883;-4.323755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1168;\"MA\";\"Buritirana\";-47.013088;-5.598233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1169;\"MA\";\"Cachoeira Grande\";-44.052763;-2.930745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1170;\"MA\";\"Cajapió\";-44.674097;-2.873262"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1171;\"MA\";\"Cajari\";-45.014498;-3.327416"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1172;\"MA\";\"Campestre do Maranhão\";-47.362468;-6.170747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1174;\"MA\";\"Cantanhede\";-44.383024;-3.637569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1175;\"MA\";\"Capinzal do Norte\";-44.328045;-4.723603"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1176;\"MA\";\"Carolina\";-47.463422;-7.335839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1177;\"MA\";\"Carutapera\";-46.008547;-1.196957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1178;\"MA\";\"Caxias\";-43.361749;-4.865053"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1179;\"MA\";\"Cedral\";-44.528114;-2.000269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1180;\"MA\";\"Central do Maranhão\";-44.825385;-2.198312"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1182;\"MA\";\"Centro Novo do Maranhão\";-46.122841;-2.126963"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1181;\"MA\";\"Centro do Guilherme\";-46.034486;-2.448908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1183;\"MA\";\"Chapadinha\";-43.353848;-3.738754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1184;\"MA\";\"Cidelândia\";-47.778145;-5.174655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1185;\"MA\";\"Codó\";-43.892354;-4.455623"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1186;\"MA\";\"Coelho Neto\";-43.01078;-4.252454"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1187;\"MA\";\"Colinas\";-44.254345;-6.031986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1188;\"MA\";\"Conceição do Lago-Açu\";-44.889531;-3.851417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1189;\"MA\";\"Coroatá\";-44.124414;-4.134422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1190;\"MA\";\"Cururupu\";-44.864433;-1.814746"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1173;\"MA\";\"Cândido Mendes\";-45.716112;-1.43265"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1191;\"MA\";\"Davinópolis\";-47.421665;-5.546372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1192;\"MA\";\"Dom Pedro\";-44.440883;-5.035182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1193;\"MA\";\"Duque Bacelar\";-42.947696;-4.150019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1194;\"MA\";\"Esperantinópolis\";-44.692649;-4.879378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1195;\"MA\";\"Estreito\";-47.443072;-6.560775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1196;\"MA\";\"Feira Nova do Maranhão\";-46.678577;-6.965082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1197;\"MA\";\"Fernando Falcão\";-44.897876;-6.162069"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1198;\"MA\";\"Formosa da Serra Negra\";-46.191583;-6.440173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1199;\"MA\";\"Fortaleza dos Nogueiras\";-46.174893;-6.959826"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1200;\"MA\";\"Fortuna\";-44.156496;-5.727921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1201;\"MA\";\"Godofredo Viana\";-45.77946;-1.402591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1202;\"MA\";\"Gonçalves Dias\";-44.301351;-5.147501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1203;\"MA\";\"Governador Archer\";-44.275412;-5.020778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1204;\"MA\";\"Governador Edison Lobão\";-47.364593;-5.749727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1205;\"MA\";\"Governador Eugênio Barros\";-44.246901;-5.318973"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1206;\"MA\";\"Governador Luiz Rocha\";-44.077433;-5.478353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1207;\"MA\";\"Governador Newton Bello\";-45.661939;-3.432447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1208;\"MA\";\"Governador Nunes Freire\";-45.87768;-2.128991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1210;\"MA\";\"Grajaú\";-46.146233;-5.81367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1209;\"MA\";\"Graça Aranha\";-44.335816;-5.405468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1211;\"MA\";\"Guimarães\";-44.60199;-2.127551"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1212;\"MA\";\"Humberto de Campos\";-43.464877;-2.598282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1213;\"MA\";\"Icatu\";-44.050061;-2.772065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1215;\"MA\";\"Igarapé Grande\";-44.855833;-4.6625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1214;\"MA\";\"Igarapé do Meio\";-45.211372;-3.657714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1216;\"MA\";\"Imperatriz\";-47.477726;-5.518471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1217;\"MA\";\"Itaipava do Grajaú\";-45.787736;-5.142517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1218;\"MA\";\"Itapecuru Mirim\";-44.350848;-3.402019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1219;\"MA\";\"Itinga do Maranhão\";-47.523507;-4.452925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1220;\"MA\";\"Jatobá\";-44.215325;-5.822821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1221;\"MA\";\"Jenipapo dos Vieiras\";-45.635607;-5.362375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1223;\"MA\";\"Joselândia\";-44.695834;-4.986111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1222;\"MA\";\"João Lisboa\";-47.406388;-5.44363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1224;\"MA\";\"Junco do Maranhão\";-46.090025;-1.838879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1230;\"MA\";\"Lago Verde\";-44.825997;-3.946611"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1227;\"MA\";\"Lago da Pedra\";-45.131912;-4.569743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1228;\"MA\";\"Lago do Junco\";-45.049001;-4.609"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1229;\"MA\";\"Lago dos Rodrigues\";-44.979763;-4.611735"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1226;\"MA\";\"Lagoa Grande do Maranhão\";-45.381609;-4.988929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1225;\"MA\";\"Lagoa do Mato\";-43.533313;-6.050229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1231;\"MA\";\"Lajeado Novo\";-47.029292;-6.185385"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1232;\"MA\";\"Lima Campos\";-44.464625;-4.518375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1233;\"MA\";\"Loreto\";-45.145081;-7.08111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1234;\"MA\";\"Luís Domingues\";-45.866979;-1.274924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1235;\"MA\";\"Magalhães de Almeida\";-42.211743;-3.392319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1236;\"MA\";\"Maracaçumé\";-45.958734;-2.049177"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1237;\"MA\";\"Marajá do Sena\";-45.453116;-4.628062"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1238;\"MA\";\"Maranhãozinho\";-45.850679;-2.240777"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1239;\"MA\";\"Mata Roma\";-43.111204;-3.620354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1240;\"MA\";\"Matinha\";-45.035016;-3.098487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1241;\"MA\";\"Matões\";-43.201758;-5.513591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1242;\"MA\";\"Matões do Norte\";-44.546772;-3.624404"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1243;\"MA\";\"Milagres do Maranhão\";-42.613121;-3.574429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1244;\"MA\";\"Mirador\";-44.368276;-6.374543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1245;\"MA\";\"Miranda do Norte\";-44.581449;-3.563129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1246;\"MA\";\"Mirinzal\";-44.778655;-2.070935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1248;\"MA\";\"Montes Altos\";-47.067294;-5.830665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1247;\"MA\";\"Monção\";-45.2496;-3.481254"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1249;\"MA\";\"Morros\";-44.035678;-2.853794"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1250;\"MA\";\"Nina Rodrigues\";-43.91342;-3.467884"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1251;\"MA\";\"Nova Colinas\";-46.260668;-7.122628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1252;\"MA\";\"Nova Iorque\";-44.047137;-6.730471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1253;\"MA\";\"Nova Olinda do Maranhão\";-45.695274;-2.842272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1254;\"MA\";\"Olho d`Água das Cunhãs\";-45.116312;-4.134174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1255;\"MA\";\"Olinda Nova do Maranhão\";-44.989748;-2.992949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1257;\"MA\";\"Palmeirândia\";-44.893271;-2.64433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1258;\"MA\";\"Paraibano\";-43.979243;-6.426403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1259;\"MA\";\"Parnarama\";-43.101096;-5.673646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1260;\"MA\";\"Passagem Franca\";-43.775511;-6.177451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1261;\"MA\";\"Pastos Bons\";-44.07454;-6.602958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1262;\"MA\";\"Paulino Neves\";-42.525848;-2.720941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1263;\"MA\";\"Paulo Ramos\";-45.23976;-4.444848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1256;\"MA\";\"Paço do Lumiar\";-44.101886;-2.516573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1264;\"MA\";\"Pedreiras\";-44.600637;-4.564817"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1265;\"MA\";\"Pedro do Rosário\";-45.349316;-2.972719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1266;\"MA\";\"Penalva\";-45.176808;-3.276744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1267;\"MA\";\"Peri Mirim\";-44.850385;-2.576762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1268;\"MA\";\"Peritoró\";-44.336909;-4.374589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1269;\"MA\";\"Pindaré-Mirim\";-45.341988;-3.609851"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1270;\"MA\";\"Pinheiro\";-45.078825;-2.522244"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1271;\"MA\";\"Pio XII\";-45.175942;-3.893151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1272;\"MA\";\"Pirapemas\";-44.221632;-3.720412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1274;\"MA\";\"Porto Franco\";-47.396188;-6.34149"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1275;\"MA\";\"Porto Rico do Maranhão\";-44.584229;-1.859247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1273;\"MA\";\"Poção de Pedras\";-44.943199;-4.74626"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1276;\"MA\";\"Presidente Dutra\";-44.49498;-5.289801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1277;\"MA\";\"Presidente Juscelino\";-44.07148;-2.918724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1278;\"MA\";\"Presidente Médici\";-45.820014;-2.389908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1279;\"MA\";\"Presidente Sarney\";-45.359492;-2.587991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1280;\"MA\";\"Presidente Vargas\";-44.023403;-3.407866"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1281;\"MA\";\"Primeira Cruz\";-43.423159;-2.505679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1282;\"MA\";\"Raposa\";-44.097343;-2.425399"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1283;\"MA\";\"Riachão\";-46.622528;-7.358189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1284;\"MA\";\"Ribamar Fiquene\";-47.388777;-5.930666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1285;\"MA\";\"Rosário\";-44.253065;-2.934443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1286;\"MA\";\"Sambaíba\";-45.351506;-7.134473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1287;\"MA\";\"Santa Filomena do Maranhão\";-44.563763;-5.496706"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1288;\"MA\";\"Santa Helena\";-45.289976;-2.244263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1289;\"MA\";\"Santa Inês\";-45.37745;-3.651118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1290;\"MA\";\"Santa Luzia\";-45.690026;-4.068726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1291;\"MA\";\"Santa Luzia do Paruá\";-45.780137;-2.511229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1293;\"MA\";\"Santa Quitéria do Maranhão\";-42.568771;-3.493085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1294;\"MA\";\"Santa Rita\";-44.321078;-3.142409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1292;\"MA\";\"Santana do Maranhão\";-42.406388;-3.109002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1295;\"MA\";\"Santo Amaro do Maranhão\";-43.238033;-2.500681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1296;\"MA\";\"Santo Antônio dos Lopes\";-44.365278;-4.866134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1321;\"MA\";\"Satubinha\";-45.245716;-4.049131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1322;\"MA\";\"Senador Alexandre Costa\";-44.053347;-5.250956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1323;\"MA\";\"Senador La Rocque\";-47.295941;-5.446098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1324;\"MA\";\"Serrano do Maranhão\";-45.120735;-1.852285"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1326;\"MA\";\"Sucupira do Norte\";-44.191889;-6.478392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1327;\"MA\";\"Sucupira do Riachão\";-43.545472;-6.408584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1297;\"MA\";\"São Benedito do Rio Preto\";-43.52872;-3.335147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1298;\"MA\";\"São Bento\";-44.828927;-2.697812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1299;\"MA\";\"São Bernardo\";-42.41912;-3.372229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1300;\"MA\";\"São Domingos do Azeitão\";-44.650882;-6.814706"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1301;\"MA\";\"São Domingos do Maranhão\";-44.382195;-5.580953"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1303;\"MA\";\"São Francisco do Brejão\";-47.389018;-5.125844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1304;\"MA\";\"São Francisco do Maranhão\";-42.866767;-6.25159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1302;\"MA\";\"São Félix de Balsas\";-44.809249;-7.075345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1310;\"MA\";\"São José de Ribamar\";-44.059745;-2.54704"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1311;\"MA\";\"São José dos Basílios\";-44.580937;-5.054931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1305;\"MA\";\"São João Batista\";-44.795324;-2.953978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1306;\"MA\";\"São João do Carú\";-46.250694;-3.550305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1307;\"MA\";\"São João do Paraíso\";-47.059355;-6.456341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1308;\"MA\";\"São João do Soter\";-43.816257;-5.10821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1309;\"MA\";\"São João dos Patos\";-43.703623;-6.4934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1312;\"MA\";\"São Luís\";-44.282513;-2.538742"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1313;\"MA\";\"São Luís Gonzaga do Maranhão\";-44.665404;-4.385409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1314;\"MA\";\"São Mateus do Maranhão\";-44.470691;-4.037361"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1315;\"MA\";\"São Pedro da Água Branca\";-48.429117;-5.084718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1316;\"MA\";\"São Pedro dos Crentes\";-46.531864;-6.823889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1317;\"MA\";\"São Raimundo das Mangabeiras\";-45.48088;-7.021834"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1318;\"MA\";\"São Raimundo do Doca Bezerra\";-45.069554;-5.110532"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1319;\"MA\";\"São Roberto\";-45.000992;-5.023096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1320;\"MA\";\"São Vicente Ferrer\";-44.868074;-2.894871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1325;\"MA\";\"Sítio Novo\";-46.703329;-5.876006"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1328;\"MA\";\"Tasso Fragoso\";-45.753647;-8.466203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1329;\"MA\";\"Timbiras\";-43.931956;-4.255971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1330;\"MA\";\"Timon\";-42.83292;-5.097692"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1331;\"MA\";\"Trizidela do Vale\";-44.628;-4.538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1332;\"MA\";\"Tufilândia\";-45.623781;-3.67355"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1333;\"MA\";\"Tuntum\";-44.644367;-5.254761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1334;\"MA\";\"Turiaçu\";-45.379791;-1.658925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1335;\"MA\";\"Turilândia\";-45.304411;-2.216382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1336;\"MA\";\"Tutóia\";-42.275531;-2.761413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1337;\"MA\";\"Urbano Santos\";-43.387838;-3.206417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1338;\"MA\";\"Vargem Grande\";-43.91696;-3.536385"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1339;\"MA\";\"Viana\";-44.991177;-3.20451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1340;\"MA\";\"Vila Nova dos Martírios\";-48.133611;-5.18889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1342;\"MA\";\"Vitorino Freire\";-45.250524;-4.281836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1341;\"MA\";\"Vitória do Mearim\";-44.864299;-3.451248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1343;\"MA\";\"Zé Doca\";-45.655344;-3.270145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1129;\"MA\";\"Água Doce do Maranhão\";-42.118903;-2.840479"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1344;\"MG\";\"Abadia dos Dourados\";-47.391623;-18.483101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1345;\"MG\";\"Abaeté\";-45.444413;-19.155125"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1346;\"MG\";\"Abre Campo\";-42.474304;-20.299647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1347;\"MG\";\"Acaiaca\";-43.143867;-20.359034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1351;\"MG\";\"Aguanil\";-45.391456;-20.943942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1354;\"MG\";\"Aimorés\";-41.074651;-19.500684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1355;\"MG\";\"Aiuruoca\";-44.604212;-21.973608"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1356;\"MG\";\"Alagoa\";-44.641344;-22.170976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1357;\"MG\";\"Albertina\";-46.613912;-22.201775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1359;\"MG\";\"Alfenas\";-45.947727;-21.425629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1360;\"MG\";\"Alfredo Vasconcelos\";-43.771767;-21.153521"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1361;\"MG\";\"Almenara\";-40.694163;-16.178459"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1362;\"MG\";\"Alpercata\";-41.969998;-18.973994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1363;\"MG\";\"Alpinópolis\";-46.387797;-20.863059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1364;\"MG\";\"Alterosa\";-46.138666;-21.248752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1365;\"MG\";\"Alto Caparaó\";-41.873772;-20.43098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1366;\"MG\";\"Alto Jequitibá\";-41.966988;-20.420845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1367;\"MG\";\"Alto Rio Doce\";-43.406683;-21.028122"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1368;\"MG\";\"Alvarenga\";-41.73174;-19.417403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1369;\"MG\";\"Alvinópolis\";-43.053487;-20.109771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1370;\"MG\";\"Alvorada de Minas\";-43.363807;-18.733362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1358;\"MG\";\"Além Paraíba\";-42.717588;-21.879703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1371;\"MG\";\"Amparo da Serra\";-42.800868;-20.505068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1372;\"MG\";\"Andradas\";-46.572372;-22.069487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1373;\"MG\";\"Andrelândia\";-44.31169;-21.741088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1374;\"MG\";\"Angelândia\";-42.264123;-17.727938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1375;\"MG\";\"Antônio Carlos\";-43.74513;-21.321031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1376;\"MG\";\"Antônio Dias\";-42.873243;-19.649096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1377;\"MG\";\"Antônio Prado de Minas\";-42.110937;-21.019183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1379;\"MG\";\"Aracitaba\";-43.37362;-21.344619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1381;\"MG\";\"Araguari\";-48.193392;-18.645575"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1382;\"MG\";\"Arantina\";-44.255519;-21.910171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1383;\"MG\";\"Araponga\";-42.51785;-20.668608"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1384;\"MG\";\"Araporã\";-49.184746;-18.435727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1385;\"MG\";\"Arapuá\";-46.148403;-19.026816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1387;\"MG\";\"Araxá\";-46.943804;-19.590176"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1378;\"MG\";\"Araçaí\";-44.249309;-19.195507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1380;\"MG\";\"Araçuaí\";-42.0637;-16.85232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1386;\"MG\";\"Araújos\";-45.167115;-19.940519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1388;\"MG\";\"Arceburgo\";-46.940056;-21.358984"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1389;\"MG\";\"Arcos\";-45.537345;-20.286333"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1390;\"MG\";\"Areado\";-46.142071;-21.357186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1391;\"MG\";\"Argirita\";-42.829162;-21.60827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1392;\"MG\";\"Aricanduva\";-42.553263;-17.866642"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1393;\"MG\";\"Arinos\";-46.104324;-15.918743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1394;\"MG\";\"Astolfo Dutra\";-42.857204;-21.318439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1395;\"MG\";\"Ataléia\";-41.114901;-18.043805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1396;\"MG\";\"Augusto de Lima\";-44.265523;-18.099714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1348;\"MG\";\"Açucena\";-42.541881;-19.067105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1397;\"MG\";\"Baependi\";-44.887426;-21.956994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1398;\"MG\";\"Baldim\";-43.961331;-19.283197"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1399;\"MG\";\"Bambuí\";-45.97537;-20.016618"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1400;\"MG\";\"Bandeira\";-40.562163;-15.878315"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1401;\"MG\";\"Bandeira do Sul\";-46.383347;-21.730798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1404;\"MG\";\"Barbacena\";-43.770266;-21.221446"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1405;\"MG\";\"Barra Longa\";-43.040168;-20.286866"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1406;\"MG\";\"Barroso\";-43.972039;-21.190659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1402;\"MG\";\"Barão de Cocais\";-43.475524;-19.938943"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1403;\"MG\";\"Barão de Monte Alto\";-42.237185;-21.244403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1407;\"MG\";\"Bela Vista de Minas\";-43.092164;-19.83021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1408;\"MG\";\"Belmiro Braga\";-43.408419;-21.943992"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1409;\"MG\";\"Belo Horizonte\";-43.926572;-19.910183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1410;\"MG\";\"Belo Oriente\";-42.482795;-19.219906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1411;\"MG\";\"Belo Vale\";-44.027462;-20.407725"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1412;\"MG\";\"Berilo\";-42.46062;-16.95669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1413;\"MG\";\"Berizal\";-41.743202;-15.610028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1414;\"MG\";\"Bertópolis\";-40.579973;-17.059009"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1415;\"MG\";\"Betim\";-44.200775;-19.966827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1416;\"MG\";\"Bias Fortes\";-43.757366;-21.601961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1417;\"MG\";\"Bicas\";-43.055958;-21.723164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1418;\"MG\";\"Biquinhas\";-45.497372;-18.77541"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1419;\"MG\";\"Boa Esperança\";-45.561203;-21.092723"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1420;\"MG\";\"Bocaina de Minas\";-44.397181;-22.169687"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1421;\"MG\";\"Bocaiúva\";-43.810433;-17.113544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1422;\"MG\";\"Bom Despacho\";-45.262167;-19.738621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1423;\"MG\";\"Bom Jardim de Minas\";-44.188498;-21.947875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1424;\"MG\";\"Bom Jesus da Penha\";-46.517369;-21.014786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1425;\"MG\";\"Bom Jesus do Amparo\";-43.478225;-19.70543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1426;\"MG\";\"Bom Jesus do Galho\";-42.316472;-19.836006"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1427;\"MG\";\"Bom Repouso\";-46.144036;-22.467494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1428;\"MG\";\"Bom Sucesso\";-44.753745;-21.032875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1429;\"MG\";\"Bonfim\";-44.236565;-20.330215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1430;\"MG\";\"Bonfinópolis de Minas\";-45.983859;-16.568034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1431;\"MG\";\"Bonito de Minas\";-44.754267;-15.323129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1432;\"MG\";\"Borda da Mata\";-46.165349;-22.270701"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1433;\"MG\";\"Botelhos\";-46.391006;-21.641157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1434;\"MG\";\"Botumirim\";-43.008578;-16.865741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1435;\"MG\";\"Brasilândia de Minas\";-46.00811;-16.999868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1436;\"MG\";\"Brasília de Minas\";-44.429897;-16.210382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1437;\"MG\";\"Brasópolis\";-45.612995;-22.470019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1439;\"MG\";\"Braúnas\";-42.709896;-19.05616"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1440;\"MG\";\"Brumadinho\";-44.200675;-20.150989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1438;\"MG\";\"Brás Pires\";-43.240556;-20.841912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1441;\"MG\";\"Bueno Brandão\";-46.349102;-22.438321"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1442;\"MG\";\"Buenópolis\";-44.177504;-17.874432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1443;\"MG\";\"Bugre\";-42.255184;-19.423063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1444;\"MG\";\"Buritis\";-46.422078;-15.621802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1445;\"MG\";\"Buritizeiro\";-44.960581;-17.365588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1446;\"MG\";\"Cabeceira Grande\";-47.086153;-16.03351"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1447;\"MG\";\"Cabo Verde\";-46.391857;-21.469945"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1451;\"MG\";\"Cachoeira Dourada\";-49.503876;-18.516147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1448;\"MG\";\"Cachoeira da Prata\";-44.454383;-19.520967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1449;\"MG\";\"Cachoeira de Minas\";-45.780866;-22.351107"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1450;\"MG\";\"Cachoeira de Pajeú\";-41.494766;-15.968828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1452;\"MG\";\"Caetanópolis\";-44.418871;-19.297075"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1453;\"MG\";\"Caeté\";-43.670353;-19.88261"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1454;\"MG\";\"Caiana\";-41.929208;-20.695579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1455;\"MG\";\"Cajuri\";-42.792504;-20.790301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1456;\"MG\";\"Caldas\";-46.384314;-21.918309"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1457;\"MG\";\"Camacho\";-45.159327;-20.629367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1458;\"MG\";\"Camanducaia\";-46.149444;-22.751534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1460;\"MG\";\"Cambuquira\";-45.289572;-21.853985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1459;\"MG\";\"Cambuí\";-46.057228;-22.611537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1462;\"MG\";\"Campanha\";-45.400394;-21.835977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1461;\"MG\";\"Campanário\";-41.735506;-18.24271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1463;\"MG\";\"Campestre\";-46.23808;-21.707874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1464;\"MG\";\"Campina Verde\";-49.486247;-19.53815"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1465;\"MG\";\"Campo Azul\";-44.809624;-16.502805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1466;\"MG\";\"Campo Belo\";-45.269892;-20.893182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1468;\"MG\";\"Campo Florido\";-48.571623;-19.763085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1467;\"MG\";\"Campo do Meio\";-45.827333;-21.112735"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1469;\"MG\";\"Campos Altos\";-46.172545;-19.691378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1470;\"MG\";\"Campos Gerais\";-45.7569;-21.237025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1473;\"MG\";\"Cana Verde\";-45.180062;-21.023207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1471;\"MG\";\"Canaã\";-42.616676;-20.686889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1474;\"MG\";\"Candeias\";-45.276465;-20.769222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1475;\"MG\";\"Cantagalo\";-42.622259;-18.524772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1472;\"MG\";\"Canápolis\";-49.20355;-18.721229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1476;\"MG\";\"Caparaó\";-41.906063;-20.528897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1477;\"MG\";\"Capela Nova\";-43.621961;-20.917906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1478;\"MG\";\"Capelinha\";-42.514705;-17.688792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1479;\"MG\";\"Capetinga\";-47.057141;-20.616314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1480;\"MG\";\"Capim Branco\";-44.130351;-19.547067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1481;\"MG\";\"Capinópolis\";-49.570618;-18.686221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1482;\"MG\";\"Capitão Andrade\";-41.861414;-19.074835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1483;\"MG\";\"Capitão Enéas\";-43.708443;-16.32654"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1484;\"MG\";\"Capitólio\";-46.049257;-20.616373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1485;\"MG\";\"Caputira\";-42.26832;-20.170342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1487;\"MG\";\"Caranaíba\";-43.741716;-20.870663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1488;\"MG\";\"Carandaí\";-43.811002;-20.956604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1489;\"MG\";\"Carangola\";-42.031348;-20.734348"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1490;\"MG\";\"Caratinga\";-42.129217;-19.786805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1486;\"MG\";\"Caraí\";-41.700359;-17.186161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1491;\"MG\";\"Carbonita\";-43.013688;-17.525492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1492;\"MG\";\"Careaçu\";-45.696011;-22.042379"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1493;\"MG\";\"Carlos Chagas\";-40.772276;-17.697335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1495;\"MG\";\"Carmo da Cachoeira\";-45.220065;-21.463291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1496;\"MG\";\"Carmo da Mata\";-44.8735;-20.557532"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1497;\"MG\";\"Carmo de Minas\";-45.13069;-22.120366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1498;\"MG\";\"Carmo do Cajuru\";-44.76643;-20.19117"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1499;\"MG\";\"Carmo do Paranaíba\";-46.316735;-18.990952"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1500;\"MG\";\"Carmo do Rio Claro\";-46.114925;-20.973609"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1494;\"MG\";\"Carmésia\";-43.138248;-19.087718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1501;\"MG\";\"Carmópolis de Minas\";-44.633558;-20.539562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1502;\"MG\";\"Carneirinho\";-50.689441;-19.698701"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1503;\"MG\";\"Carrancas\";-44.64457;-21.489765"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1505;\"MG\";\"Carvalhos\";-44.463164;-22.000003"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1504;\"MG\";\"Carvalhópolis\";-45.842127;-21.773534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1506;\"MG\";\"Casa Grande\";-43.934306;-20.792521"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1507;\"MG\";\"Cascalho Rico\";-47.871643;-18.577169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1509;\"MG\";\"Cataguases\";-42.689647;-21.39239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1510;\"MG\";\"Catas Altas\";-43.406115;-20.073403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1511;\"MG\";\"Catas Altas da Noruega\";-43.493876;-20.690073"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1512;\"MG\";\"Catuji\";-41.52764;-17.301807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1513;\"MG\";\"Catuti\";-42.962704;-15.361574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1514;\"MG\";\"Caxambu\";-44.931855;-21.975253"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1515;\"MG\";\"Cedro do Abaeté\";-45.711994;-19.145767"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1516;\"MG\";\"Central de Minas\";-41.314331;-18.761195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1517;\"MG\";\"Centralina\";-49.201397;-18.585217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1519;\"MG\";\"Chalé\";-41.689714;-20.045328"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1521;\"MG\";\"Chapada Gaúcha\";-45.611616;-15.301373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1520;\"MG\";\"Chapada do Norte\";-42.539187;-17.088119"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1522;\"MG\";\"Chiador\";-43.061671;-21.999572"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1518;\"MG\";\"Chácara\";-43.21499;-21.673256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1523;\"MG\";\"Cipotânea\";-43.362904;-20.902598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1524;\"MG\";\"Claraval\";-47.276828;-20.397011"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1525;\"MG\";\"Claro dos Poções\";-44.206097;-17.08203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1526;\"MG\";\"Cláudio\";-44.767332;-20.443672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1527;\"MG\";\"Coimbra\";-42.800807;-20.853505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1528;\"MG\";\"Coluna\";-42.835185;-18.23108"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1529;\"MG\";\"Comendador Gomes\";-49.078894;-19.697342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1530;\"MG\";\"Comercinho\";-41.794536;-16.296258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1531;\"MG\";\"Conceição da Aparecida\";-46.20491;-21.096024"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1532;\"MG\";\"Conceição da Barra de Minas\";-44.472901;-21.131558"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1533;\"MG\";\"Conceição das Alagoas\";-48.38394;-19.917155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1534;\"MG\";\"Conceição das Pedras\";-45.456238;-22.157647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1535;\"MG\";\"Conceição de Ipanema\";-41.690756;-19.932584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1536;\"MG\";\"Conceição do Mato Dentro\";-43.422082;-19.03441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1537;\"MG\";\"Conceição do Pará\";-44.894511;-19.745599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1538;\"MG\";\"Conceição do Rio Verde\";-45.08703;-21.877836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1539;\"MG\";\"Conceição dos Ouros\";-45.799599;-22.407845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1541;\"MG\";\"Confins\";-43.993148;-19.628183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1542;\"MG\";\"Congonhal\";-46.043031;-22.148753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1543;\"MG\";\"Congonhas\";-43.851012;-20.495844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1544;\"MG\";\"Congonhas do Norte\";-43.67672;-18.802053"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1545;\"MG\";\"Conquista\";-47.549196;-19.931182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1546;\"MG\";\"Conselheiro Lafaiete\";-43.784609;-20.663445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1547;\"MG\";\"Conselheiro Pena\";-41.473554;-19.178914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1548;\"MG\";\"Consolação\";-45.925459;-22.54929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1549;\"MG\";\"Contagem\";-44.05392;-19.932079"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1550;\"MG\";\"Coqueiral\";-45.436568;-21.185757"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1551;\"MG\";\"Coração de Jesus\";-44.363517;-16.684067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1552;\"MG\";\"Cordisburgo\";-44.322415;-19.122393"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1553;\"MG\";\"Cordislândia\";-45.699879;-21.789099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1554;\"MG\";\"Corinto\";-44.454181;-18.368967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1555;\"MG\";\"Coroaci\";-42.279099;-18.61557"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1556;\"MG\";\"Coromandel\";-47.193348;-18.473364"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1557;\"MG\";\"Coronel Fabriciano\";-42.627585;-19.517879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1558;\"MG\";\"Coronel Murta\";-42.183952;-16.614847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1559;\"MG\";\"Coronel Pacheco\";-43.255989;-21.589751"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1560;\"MG\";\"Coronel Xavier Chaves\";-44.2206;-21.027724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1565;\"MG\";\"Couto de Magalhães de Minas\";-43.464821;-18.07272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1567;\"MG\";\"Cristais\";-45.516727;-20.87328"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1569;\"MG\";\"Cristiano Otoni\";-43.816552;-20.832421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1570;\"MG\";\"Cristina\";-45.267266;-22.207982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1568;\"MG\";\"Cristália\";-42.85712;-16.716014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1566;\"MG\";\"Crisólita\";-40.918392;-17.238124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1571;\"MG\";\"Crucilândia\";-44.333425;-20.392314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1572;\"MG\";\"Cruzeiro da Fortaleza\";-46.666891;-18.944029"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1573;\"MG\";\"Cruzília\";-44.806678;-21.839985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1574;\"MG\";\"Cuparaque\";-41.098621;-18.964827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1575;\"MG\";\"Curral de Dentro\";-41.855684;-15.932709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1576;\"MG\";\"Curvelo\";-44.430259;-18.752731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1508;\"MG\";\"Cássia\";-46.920122;-20.583061"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1561;\"MG\";\"Córrego Danta\";-45.903228;-19.819775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1563;\"MG\";\"Córrego Fundo\";-45.561742;-20.447422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1564;\"MG\";\"Córrego Novo\";-42.398816;-19.836096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1562;\"MG\";\"Córrego do Bom Jesus\";-46.024113;-22.626882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1540;\"MG\";\"Cônego Marinho\";-44.418059;-15.289172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1577;\"MG\";\"Datas\";-43.659085;-18.447761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1578;\"MG\";\"Delfim Moreira\";-45.279231;-22.503632"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1579;\"MG\";\"Delfinópolis\";-46.845554;-20.34677"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1580;\"MG\";\"Delta\";-47.78408;-19.972143"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1581;\"MG\";\"Descoberto\";-42.961766;-21.45999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1582;\"MG\";\"Desterro de Entre Rios\";-44.333388;-20.66504"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1583;\"MG\";\"Desterro do Melo\";-43.517834;-21.142995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1584;\"MG\";\"Diamantina\";-43.603099;-18.241315"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1585;\"MG\";\"Diogo de Vasconcelos\";-43.195253;-20.487903"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1586;\"MG\";\"Dionísio\";-42.770087;-19.843252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1588;\"MG\";\"Divino\";-42.143801;-20.613405"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1589;\"MG\";\"Divino das Laranjeiras\";-41.478081;-18.775491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1590;\"MG\";\"Divinolândia de Minas\";-42.610345;-18.80038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1587;\"MG\";\"Divinésia\";-43.000263;-20.991709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1591;\"MG\";\"Divinópolis\";-44.891223;-20.144646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1592;\"MG\";\"Divisa Alegre\";-41.346291;-15.722071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1593;\"MG\";\"Divisa Nova\";-46.190385;-21.50916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1594;\"MG\";\"Divisópolis\";-40.99969;-15.72535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1595;\"MG\";\"Dom Bosco\";-46.259725;-16.651957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1596;\"MG\";\"Dom Cavati\";-42.112132;-19.373457"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1597;\"MG\";\"Dom Joaquim\";-43.254382;-18.961036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1598;\"MG\";\"Dom Silvério\";-42.962673;-20.162726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1599;\"MG\";\"Dom Viçoso\";-45.164317;-22.25111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1600;\"MG\";\"Dona Eusébia\";-42.807048;-21.319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1601;\"MG\";\"Dores de Campos\";-44.02068;-21.113944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1602;\"MG\";\"Dores de Guanhães\";-42.925373;-19.051607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1603;\"MG\";\"Dores do Indaiá\";-45.592741;-19.462789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1604;\"MG\";\"Dores do Turvo\";-43.18343;-20.978477"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1605;\"MG\";\"Doresópolis\";-45.900725;-20.286828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1606;\"MG\";\"Douradoquara\";-47.59931;-18.433784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1607;\"MG\";\"Durandé\";-41.79772;-20.205817"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1608;\"MG\";\"Elói Mendes\";-45.569064;-21.608806"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1609;\"MG\";\"Engenheiro Caldas\";-42.050305;-19.206497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1610;\"MG\";\"Engenheiro Navarro\";-43.946966;-17.283128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1611;\"MG\";\"Entre Folhas\";-42.230555;-19.621811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1612;\"MG\";\"Entre Rios de Minas\";-44.065392;-20.67063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1613;\"MG\";\"Ervália\";-42.654422;-20.840258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1614;\"MG\";\"Esmeraldas\";-44.306485;-19.76402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1615;\"MG\";\"Espera Feliz\";-41.911927;-20.650762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1616;\"MG\";\"Espinosa\";-42.809015;-14.924948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1617;\"MG\";\"Espírito Santo do Dourado\";-45.95477;-22.045368"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1618;\"MG\";\"Estiva\";-46.01905;-22.457694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1619;\"MG\";\"Estrela Dalva\";-42.45743;-21.741231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1620;\"MG\";\"Estrela do Indaiá\";-45.78595;-19.516888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1621;\"MG\";\"Estrela do Sul\";-47.695643;-18.73994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1622;\"MG\";\"Eugenópolis\";-42.187834;-21.100153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1623;\"MG\";\"Ewbank da Câmara\";-43.506803;-21.549819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1624;\"MG\";\"Extrema\";-46.317816;-22.853991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1625;\"MG\";\"Fama\";-45.828617;-21.408898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1626;\"MG\";\"Faria Lemos\";-42.021317;-20.809745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1628;\"MG\";\"Felisburgo\";-40.760502;-16.634828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1629;\"MG\";\"Felixlândia\";-44.900376;-18.750669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1627;\"MG\";\"Felício dos Santos\";-43.242206;-18.075546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1630;\"MG\";\"Fernandes Tourinho\";-42.080259;-19.154087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1631;\"MG\";\"Ferros\";-43.019232;-19.234309"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1632;\"MG\";\"Fervedouro\";-42.278997;-20.726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1633;\"MG\";\"Florestal\";-44.431758;-19.888043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1634;\"MG\";\"Formiga\";-45.426793;-20.461819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1635;\"MG\";\"Formoso\";-46.237075;-14.944633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1636;\"MG\";\"Fortaleza de Minas\";-46.712029;-20.850765"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1637;\"MG\";\"Fortuna de Minas\";-44.447177;-19.557755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1638;\"MG\";\"Francisco Badaró\";-42.356813;-16.988284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1639;\"MG\";\"Francisco Dumont\";-44.23171;-17.310678"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1641;\"MG\";\"Francisco Sá\";-43.489615;-16.482729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1640;\"MG\";\"Franciscópolis\";-42.009382;-17.957766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1642;\"MG\";\"Frei Gaspar\";-41.432522;-18.070898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1643;\"MG\";\"Frei Inocêncio\";-41.912087;-18.555602"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1644;\"MG\";\"Frei Lagonegro\";-42.761711;-18.1751"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1645;\"MG\";\"Fronteira\";-49.198423;-20.274848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1646;\"MG\";\"Fronteira dos Vales\";-40.922992;-16.889807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1647;\"MG\";\"Fruta de Leite\";-42.528772;-16.122458"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1648;\"MG\";\"Frutal\";-48.935497;-20.025875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1649;\"MG\";\"Funilândia\";-44.060976;-19.36613"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1650;\"MG\";\"Galiléia\";-41.538653;-19.000464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1651;\"MG\";\"Gameleiras\";-43.124982;-15.082855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1652;\"MG\";\"Glaucilândia\";-43.691952;-16.848056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1653;\"MG\";\"Goiabeira\";-41.223526;-18.980659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1654;\"MG\";\"Goianá\";-43.195664;-21.536045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1656;\"MG\";\"Gonzaga\";-42.476908;-18.819608"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1655;\"MG\";\"Gonçalves\";-45.855566;-22.654535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1657;\"MG\";\"Gouveia\";-43.742294;-18.451944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1658;\"MG\";\"Governador Valadares\";-41.95553;-18.854452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1660;\"MG\";\"Grupiara\";-47.731787;-18.500302"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1659;\"MG\";\"Grão Mogol\";-42.892306;-16.566232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1661;\"MG\";\"Guanhães\";-42.931231;-18.771284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1662;\"MG\";\"Guapé\";-45.915233;-20.763079"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1663;\"MG\";\"Guaraciaba\";-43.009389;-20.571571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1664;\"MG\";\"Guaraciama\";-43.667525;-17.014173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1666;\"MG\";\"Guarani\";-43.032777;-21.356334"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1665;\"MG\";\"Guaranésia\";-46.796352;-21.300921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1667;\"MG\";\"Guarará\";-43.033434;-21.730352"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1668;\"MG\";\"Guarda-Mor\";-47.099756;-17.767307"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1669;\"MG\";\"Guaxupé\";-46.708053;-21.305007"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1670;\"MG\";\"Guidoval\";-42.788746;-21.155034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1671;\"MG\";\"Guimarânia\";-46.790145;-18.84246"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1672;\"MG\";\"Guiricema\";-42.720659;-21.00985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1673;\"MG\";\"Gurinhatã\";-49.787631;-19.214281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1674;\"MG\";\"Heliodora\";-45.545325;-22.064401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1675;\"MG\";\"Iapu\";-42.214725;-19.438704"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1676;\"MG\";\"Ibertioga\";-43.963896;-21.433032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1678;\"MG\";\"Ibiaí\";-44.904622;-16.859077"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1679;\"MG\";\"Ibiracatu\";-44.166707;-15.660525"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1680;\"MG\";\"Ibiraci\";-47.12215;-20.461058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1681;\"MG\";\"Ibirité\";-44.056882;-20.025188"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1682;\"MG\";\"Ibitiúra de Minas\";-46.43681;-22.060402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1683;\"MG\";\"Ibituruna\";-44.747913;-21.15414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1677;\"MG\";\"Ibiá\";-46.547406;-19.474948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1684;\"MG\";\"Icaraí de Minas\";-44.903359;-16.213968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1685;\"MG\";\"Igarapé\";-44.299449;-20.070671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1686;\"MG\";\"Igaratinga\";-44.706324;-19.947597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1687;\"MG\";\"Iguatama\";-45.711114;-20.17763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1688;\"MG\";\"Ijaci\";-44.923265;-21.173785"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1689;\"MG\";\"Ilicínea\";-45.830849;-20.940222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1690;\"MG\";\"Imbé de Minas\";-41.969455;-19.601721"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1691;\"MG\";\"Inconfidentes\";-46.326412;-22.313561"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1692;\"MG\";\"Indaiabira\";-42.200514;-15.491056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1693;\"MG\";\"Indianópolis\";-47.915457;-19.034141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1694;\"MG\";\"Ingaí\";-44.915158;-21.402428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1695;\"MG\";\"Inhapim\";-42.114721;-19.54755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1696;\"MG\";\"Inhaúma\";-44.393394;-19.489843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1697;\"MG\";\"Inimutaba\";-44.358373;-18.727128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1698;\"MG\";\"Ipaba\";-42.413923;-19.415819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1699;\"MG\";\"Ipanema\";-41.716449;-19.799152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1700;\"MG\";\"Ipatinga\";-42.547612;-19.470275"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1701;\"MG\";\"Ipiaçu\";-49.943614;-18.692716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1702;\"MG\";\"Ipuiúna\";-46.191495;-22.101264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1703;\"MG\";\"Iraí de Minas\";-47.460972;-18.981948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1704;\"MG\";\"Itabira\";-43.23123;-19.623936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1705;\"MG\";\"Itabirinha\";-41.232597;-18.569104"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1706;\"MG\";\"Itabirito\";-43.803846;-20.250132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1707;\"MG\";\"Itacambira\";-43.306933;-17.062469"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1708;\"MG\";\"Itacarambi\";-44.095005;-15.089028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1709;\"MG\";\"Itaguara\";-44.487507;-20.394695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1710;\"MG\";\"Itaipé\";-41.669654;-17.401419"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1711;\"MG\";\"Itajubá\";-45.459818;-22.422481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1712;\"MG\";\"Itamarandiba\";-42.85612;-17.855157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1713;\"MG\";\"Itamarati de Minas\";-42.812969;-21.417935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1714;\"MG\";\"Itambacuri\";-41.682979;-18.03496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1715;\"MG\";\"Itambé do Mato Dentro\";-43.31825;-19.415761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1716;\"MG\";\"Itamogi\";-47.045962;-21.075824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1717;\"MG\";\"Itamonte\";-44.868021;-22.285912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1718;\"MG\";\"Itanhandu\";-44.938243;-22.294191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1719;\"MG\";\"Itanhomi\";-41.863017;-19.173587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1720;\"MG\";\"Itaobim\";-41.501692;-16.55707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1721;\"MG\";\"Itapagipe\";-49.378137;-19.906163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1722;\"MG\";\"Itapecerica\";-45.126994;-20.470372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1723;\"MG\";\"Itapeva\";-46.224053;-22.766488"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1724;\"MG\";\"Itatiaiuçu\";-44.421081;-20.198257"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1727;\"MG\";\"Itaverava\";-43.614106;-20.676853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1725;\"MG\";\"Itaú de Minas\";-46.752512;-20.737499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1726;\"MG\";\"Itaúna\";-44.580112;-20.081798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1728;\"MG\";\"Itinga\";-41.767194;-16.609972"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1729;\"MG\";\"Itueta\";-41.174619;-19.399935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1730;\"MG\";\"Ituiutaba\";-49.463945;-18.977191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1731;\"MG\";\"Itumirim\";-44.872364;-21.317054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1732;\"MG\";\"Iturama\";-50.19656;-19.727566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1733;\"MG\";\"Itutinga\";-44.656731;-21.300017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1734;\"MG\";\"Jaboticatubas\";-43.737257;-19.511938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1735;\"MG\";\"Jacinto\";-40.294991;-16.142756"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1737;\"MG\";\"Jacutinga\";-46.616575;-22.28597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1736;\"MG\";\"Jacuí\";-46.73588;-21.013662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1738;\"MG\";\"Jaguaraçu\";-42.74982;-19.647001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1740;\"MG\";\"Jampruca\";-41.809049;-18.461016"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1741;\"MG\";\"Janaúba\";-43.313168;-15.802228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1742;\"MG\";\"Januária\";-44.363889;-15.480154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1743;\"MG\";\"Japaraíba\";-45.50151;-20.144184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1744;\"MG\";\"Japonvar\";-44.275829;-15.989139"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1739;\"MG\";\"Jaíba\";-43.668802;-15.343224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1745;\"MG\";\"Jeceaba\";-43.989394;-20.533852"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1746;\"MG\";\"Jenipapo de Minas\";-42.258934;-17.083129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1747;\"MG\";\"Jequeri\";-42.665064;-20.454229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1748;\"MG\";\"Jequitaí\";-44.437588;-17.229025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1749;\"MG\";\"Jequitibá\";-44.0304;-19.234491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1750;\"MG\";\"Jequitinhonha\";-41.011717;-16.437482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1751;\"MG\";\"Jesuânia\";-45.291122;-21.988655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1753;\"MG\";\"Joanésia\";-42.677481;-19.172897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1756;\"MG\";\"Joaquim Felício\";-44.164274;-17.758022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1752;\"MG\";\"Joaíma\";-41.022873;-16.652189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1757;\"MG\";\"Jordânia\";-40.184051;-15.900924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1759;\"MG\";\"Josenópolis\";-42.515056;-16.541697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1758;\"MG\";\"José Gonçalves de Minas\";-42.601384;-16.905329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1760;\"MG\";\"José Raydan\";-42.494643;-18.219505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1754;\"MG\";\"João Monlevade\";-43.173463;-19.812646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1755;\"MG\";\"João Pinheiro\";-46.17154;-17.739768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1761;\"MG\";\"Juatuba\";-44.34505;-19.94484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1762;\"MG\";\"Juiz de Fora\";-43.339759;-21.75952"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1763;\"MG\";\"Juramento\";-43.586457;-16.847322"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1764;\"MG\";\"Juruaia\";-46.573541;-21.24931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1765;\"MG\";\"Juvenília\";-44.159656;-14.266238"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1766;\"MG\";\"Ladainha\";-41.748824;-17.627886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1767;\"MG\";\"Lagamar\";-46.806343;-18.175918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1770;\"MG\";\"Lagoa Dourada\";-44.079717;-20.913858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1771;\"MG\";\"Lagoa Formosa\";-46.401236;-18.771489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1772;\"MG\";\"Lagoa Grande\";-46.516519;-17.832265"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1773;\"MG\";\"Lagoa Santa\";-43.893216;-19.63967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1768;\"MG\";\"Lagoa da Prata\";-45.540149;-20.023728"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1769;\"MG\";\"Lagoa dos Patos\";-44.575374;-16.977954"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1774;\"MG\";\"Lajinha\";-41.622818;-20.153941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1775;\"MG\";\"Lambari\";-45.349822;-21.967088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1776;\"MG\";\"Lamim\";-43.470615;-20.789999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1777;\"MG\";\"Laranjal\";-42.473151;-21.371478"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1778;\"MG\";\"Lassance\";-44.573491;-17.88698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1779;\"MG\";\"Lavras\";-45.000949;-21.248002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1780;\"MG\";\"Leandro Ferreira\";-45.027855;-19.719307"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1781;\"MG\";\"Leme do Prado\";-42.69357;-17.079273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1782;\"MG\";\"Leopoldina\";-42.642123;-21.52963"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1783;\"MG\";\"Liberdade\";-44.320752;-22.027491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1784;\"MG\";\"Lima Duarte\";-43.793412;-21.838597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1785;\"MG\";\"Limeira do Oeste\";-50.581489;-19.551212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1786;\"MG\";\"Lontra\";-44.306037;-15.901295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1787;\"MG\";\"Luisburgo\";-42.097642;-20.446753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1788;\"MG\";\"Luislândia\";-44.588579;-16.109483"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1789;\"MG\";\"Luminárias\";-44.903384;-21.514485"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1790;\"MG\";\"Luz\";-45.679444;-19.791085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1791;\"MG\";\"Machacalis\";-40.724476;-17.072273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1792;\"MG\";\"Machado\";-45.921855;-21.677757"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1793;\"MG\";\"Madre de Deus de Minas\";-44.32873;-21.483017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1794;\"MG\";\"Malacacheta\";-42.076907;-17.845647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1795;\"MG\";\"Mamonas\";-42.946858;-15.047941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1796;\"MG\";\"Manga\";-43.939053;-14.752892"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1797;\"MG\";\"Manhuaçu\";-42.027987;-20.257226"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1798;\"MG\";\"Manhumirim\";-41.958933;-20.359116"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1799;\"MG\";\"Mantena\";-40.987368;-18.776071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1801;\"MG\";\"Mar de Espanha\";-43.006206;-21.870728"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1800;\"MG\";\"Maravilhas\";-44.677875;-19.507627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1802;\"MG\";\"Maria da Fé\";-45.377277;-22.304417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1803;\"MG\";\"Mariana\";-43.414034;-20.376514"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1804;\"MG\";\"Marilac\";-42.082207;-18.507897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1806;\"MG\";\"Maripá de Minas\";-42.954589;-21.697919"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1807;\"MG\";\"Marliéria\";-42.732693;-19.709601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1808;\"MG\";\"Marmelópolis\";-45.164541;-22.447004"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1809;\"MG\";\"Martinho Campos\";-45.243411;-19.330573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1810;\"MG\";\"Martins Soares\";-41.878592;-20.254562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1811;\"MG\";\"Mata Verde\";-40.736559;-15.686917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1812;\"MG\";\"Materlândia\";-43.0579;-18.469911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1813;\"MG\";\"Mateus Leme\";-44.431831;-19.979424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1814;\"MG\";\"Mathias Lobato\";-41.916564;-18.590035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1815;\"MG\";\"Matias Barbosa\";-43.313475;-21.868953"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1816;\"MG\";\"Matias Cardoso\";-43.914565;-14.856304"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1817;\"MG\";\"Matipó\";-42.340145;-20.287264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1818;\"MG\";\"Mato Verde\";-42.859984;-15.394396"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1819;\"MG\";\"Matozinhos\";-44.086786;-19.554318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1820;\"MG\";\"Matutina\";-45.96635;-19.217912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1821;\"MG\";\"Medeiros\";-46.218053;-19.98651"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1822;\"MG\";\"Medina\";-41.472764;-16.224538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1823;\"MG\";\"Mendes Pimentel\";-41.405228;-18.663116"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1824;\"MG\";\"Mercês\";-43.333662;-21.197585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1825;\"MG\";\"Mesquita\";-42.607877;-19.224022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1826;\"MG\";\"Minas Novas\";-42.588435;-17.215603"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1827;\"MG\";\"Minduri\";-44.605096;-21.679714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1828;\"MG\";\"Mirabela\";-44.160208;-16.256022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1829;\"MG\";\"Miradouro\";-42.345837;-20.889946"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1831;\"MG\";\"Miravânia\";-44.409243;-14.734772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1830;\"MG\";\"Miraí\";-42.612209;-21.20214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1832;\"MG\";\"Moeda\";-44.050947;-20.339868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1833;\"MG\";\"Moema\";-45.412687;-19.838731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1834;\"MG\";\"Monjolos\";-44.117976;-18.324472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1835;\"MG\";\"Monsenhor Paulo\";-45.539055;-21.757885"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1836;\"MG\";\"Montalvânia\";-44.371881;-14.419689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1837;\"MG\";\"Monte Alegre de Minas\";-48.881023;-18.869048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1838;\"MG\";\"Monte Azul\";-42.871768;-15.151362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1839;\"MG\";\"Monte Belo\";-46.363462;-21.327084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1840;\"MG\";\"Monte Carmelo\";-47.491228;-18.730245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1841;\"MG\";\"Monte Formoso\";-41.247306;-16.869145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1842;\"MG\";\"Monte Santo de Minas\";-46.975314;-21.18731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1844;\"MG\";\"Monte Sião\";-46.57298;-22.433538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1843;\"MG\";\"Montes Claros\";-43.857809;-16.728177"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1845;\"MG\";\"Montezuma\";-42.494074;-15.170233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1846;\"MG\";\"Morada Nova de Minas\";-45.358403;-18.599774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1847;\"MG\";\"Morro da Garça\";-44.601043;-18.53559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1848;\"MG\";\"Morro do Pilar\";-43.379465;-19.223625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1849;\"MG\";\"Munhoz\";-46.36197;-22.609172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1850;\"MG\";\"Muriaé\";-42.369304;-21.129965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1851;\"MG\";\"Mutum\";-41.440689;-19.812099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1852;\"MG\";\"Muzambinho\";-46.5213;-21.369155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1805;\"MG\";\"Mário Campos\";-44.188324;-20.058155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1853;\"MG\";\"Nacip Raydan\";-42.248121;-18.454436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1854;\"MG\";\"Nanuque\";-40.353287;-17.848111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1855;\"MG\";\"Naque\";-42.33119;-19.229132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1856;\"MG\";\"Natalândia\";-46.487365;-16.50215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1857;\"MG\";\"Natércia\";-45.512284;-22.115754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1858;\"MG\";\"Nazareno\";-44.6138;-21.216779"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1859;\"MG\";\"Nepomuceno\";-45.234956;-21.232415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1860;\"MG\";\"Ninheira\";-41.756367;-15.314771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1861;\"MG\";\"Nova Belém\";-41.11067;-18.492517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1862;\"MG\";\"Nova Era\";-43.033267;-19.757738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1863;\"MG\";\"Nova Lima\";-43.850854;-19.975763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1864;\"MG\";\"Nova Módica\";-41.498365;-18.441693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1865;\"MG\";\"Nova Ponte\";-47.677947;-19.146096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1866;\"MG\";\"Nova Porteirinha\";-43.294148;-15.799291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1867;\"MG\";\"Nova Resende\";-46.415732;-21.128612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1868;\"MG\";\"Nova Serrana\";-44.984661;-19.871299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1869;\"MG\";\"Nova União\";-43.583048;-19.687584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1870;\"MG\";\"Novo Cruzeiro\";-41.882633;-17.465438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1871;\"MG\";\"Novo Oriente de Minas\";-41.219361;-17.408932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1872;\"MG\";\"Novorizonte\";-42.404433;-16.016214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1873;\"MG\";\"Olaria\";-43.935558;-21.859789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1874;\"MG\";\"Olhos-d`Água\";-43.570453;-17.395912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1876;\"MG\";\"Oliveira\";-44.829037;-20.698218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1877;\"MG\";\"Oliveira Fortes\";-43.449893;-21.340054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1875;\"MG\";\"Olímpio Noronha\";-45.265726;-22.068548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1878;\"MG\";\"Onça de Pitangui\";-44.805771;-19.727551"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1879;\"MG\";\"Oratórios\";-42.797698;-20.429758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1880;\"MG\";\"Orizânia\";-42.199124;-20.514162"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1881;\"MG\";\"Ouro Branco\";-43.696217;-20.52629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1882;\"MG\";\"Ouro Fino\";-46.371599;-22.277868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1883;\"MG\";\"Ouro Preto\";-43.512045;-20.37957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1884;\"MG\";\"Ouro Verde de Minas\";-41.273412;-18.071923"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1885;\"MG\";\"Padre Carvalho\";-42.508759;-16.364644"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1886;\"MG\";\"Padre Paraíso\";-41.482053;-17.075789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1889;\"MG\";\"Pai Pedro\";-43.070006;-15.527099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1887;\"MG\";\"Paineiras\";-45.532064;-18.899345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1888;\"MG\";\"Pains\";-45.662685;-20.370467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1890;\"MG\";\"Paiva\";-43.408756;-21.291287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1891;\"MG\";\"Palma\";-42.312285;-21.374776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1892;\"MG\";\"Palmópolis\";-40.429609;-16.736375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1893;\"MG\";\"Papagaios\";-44.746799;-19.441922"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1894;\"MG\";\"Paracatu\";-46.871064;-17.225166"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1896;\"MG\";\"Paraguaçu\";-45.737419;-21.546507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1897;\"MG\";\"Paraisópolis\";-45.780295;-22.553912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1898;\"MG\";\"Paraopeba\";-44.404367;-19.273192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1895;\"MG\";\"Pará de Minas\";-44.611355;-19.853441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1900;\"MG\";\"Passa Quatro\";-44.970926;-22.387076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1901;\"MG\";\"Passa Tempo\";-44.492635;-20.653918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1902;\"MG\";\"Passa-Vinte\";-44.23657;-22.206583"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1899;\"MG\";\"Passabém\";-43.138332;-19.350917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1903;\"MG\";\"Passos\";-46.609008;-20.719271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1904;\"MG\";\"Patis\";-44.078685;-16.077253"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1905;\"MG\";\"Patos de Minas\";-46.501268;-18.569938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1906;\"MG\";\"Patrocínio\";-46.993419;-18.937867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1907;\"MG\";\"Patrocínio do Muriaé\";-42.212491;-21.154387"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1908;\"MG\";\"Paula Cândido\";-42.975184;-20.875372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1909;\"MG\";\"Paulistas\";-42.8628;-18.427631"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1910;\"MG\";\"Pavão\";-41.003471;-17.426703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1912;\"MG\";\"Pedra Azul\";-41.290948;-16.008648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1913;\"MG\";\"Pedra Bonita\";-42.330439;-20.521879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1916;\"MG\";\"Pedra Dourada\";-42.151502;-20.826627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1914;\"MG\";\"Pedra do Anta\";-42.712291;-20.596784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1915;\"MG\";\"Pedra do Indaiá\";-45.210653;-20.256346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1917;\"MG\";\"Pedralva\";-45.465386;-22.238645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1918;\"MG\";\"Pedras de Maria da Cruz\";-44.391046;-15.603244"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1919;\"MG\";\"Pedrinópolis\";-47.457888;-19.224098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1920;\"MG\";\"Pedro Leopoldo\";-44.038258;-19.630811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1921;\"MG\";\"Pedro Teixeira\";-43.742949;-21.70763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1922;\"MG\";\"Pequeri\";-43.114487;-21.834113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1923;\"MG\";\"Pequi\";-44.660434;-19.628365"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1924;\"MG\";\"Perdigão\";-45.077988;-19.941058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1925;\"MG\";\"Perdizes\";-47.296299;-19.343379"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1926;\"MG\";\"Perdões\";-45.089582;-21.093225"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1927;\"MG\";\"Periquito\";-42.233341;-19.157331"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1928;\"MG\";\"Pescador\";-41.600578;-18.356962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1911;\"MG\";\"Peçanha\";-42.558276;-18.544079"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1929;\"MG\";\"Piau\";-43.312992;-21.509645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1930;\"MG\";\"Piedade de Caratinga\";-42.075557;-19.759282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1931;\"MG\";\"Piedade de Ponte Nova\";-42.737872;-20.243848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1932;\"MG\";\"Piedade do Rio Grande\";-44.193834;-21.469021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1933;\"MG\";\"Piedade dos Gerais\";-44.224335;-20.471513"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1934;\"MG\";\"Pimenta\";-45.804877;-20.482722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1935;\"MG\";\"Pingo-d`Água\";-42.407788;-19.727339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1936;\"MG\";\"Pintópolis\";-45.14017;-16.057205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1937;\"MG\";\"Piracema\";-44.478323;-20.508866"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1938;\"MG\";\"Pirajuba\";-48.70269;-19.909206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1939;\"MG\";\"Piranga\";-43.296701;-20.683407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1941;\"MG\";\"Piranguinho\";-45.532405;-22.394961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1940;\"MG\";\"Piranguçu\";-45.494528;-22.524932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1942;\"MG\";\"Pirapetinga\";-42.34339;-21.655434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1943;\"MG\";\"Pirapora\";-44.934009;-17.33917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1944;\"MG\";\"Piraúba\";-43.017218;-21.282492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1945;\"MG\";\"Pitangui\";-44.896362;-19.674112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1946;\"MG\";\"Piumhi\";-45.95891;-20.47623"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1947;\"MG\";\"Planura\";-48.700001;-20.137601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1950;\"MG\";\"Pocrane\";-41.633425;-19.620795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1951;\"MG\";\"Pompéu\";-45.014107;-19.22566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1952;\"MG\";\"Ponte Nova\";-42.897819;-20.4111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1953;\"MG\";\"Ponto Chique\";-45.05877;-16.628233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1954;\"MG\";\"Ponto dos Volantes\";-41.502477;-16.747314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1955;\"MG\";\"Porteirinha\";-43.02809;-15.74042"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1956;\"MG\";\"Porto Firme\";-43.08341;-20.664191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1957;\"MG\";\"Poté\";-41.786044;-17.807698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1958;\"MG\";\"Pouso Alegre\";-45.938935;-22.22659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1959;\"MG\";\"Pouso Alto\";-44.974813;-22.19637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1948;\"MG\";\"Poço Fundo\";-45.96575;-21.780002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1949;\"MG\";\"Poços de Caldas\";-46.569184;-21.779975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1960;\"MG\";\"Prados\";-44.077798;-21.059748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1961;\"MG\";\"Prata\";-48.927625;-19.308607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1963;\"MG\";\"Pratinha\";-46.375537;-19.738975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1962;\"MG\";\"Pratápolis\";-46.862402;-20.74105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1964;\"MG\";\"Presidente Bernardes\";-43.189532;-20.76557"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1965;\"MG\";\"Presidente Juscelino\";-44.060032;-18.640106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1966;\"MG\";\"Presidente Kubitschek\";-43.562774;-18.619252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1967;\"MG\";\"Presidente Olegário\";-46.416502;-18.40961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1968;\"MG\";\"Prudente de Morais\";-44.159074;-19.474213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1969;\"MG\";\"Quartel Geral\";-45.556915;-19.270328"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1970;\"MG\";\"Queluzito\";-43.885084;-20.741562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1971;\"MG\";\"Raposos\";-43.807941;-19.96358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1972;\"MG\";\"Raul Soares\";-42.450197;-20.10611"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1973;\"MG\";\"Recreio\";-42.4676;-21.528893"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1974;\"MG\";\"Reduto\";-41.984835;-20.240089"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1975;\"MG\";\"Resende Costa\";-44.24071;-20.917072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1976;\"MG\";\"Resplendor\";-41.246214;-19.319437"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1977;\"MG\";\"Ressaquinha\";-43.75983;-21.06419"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1978;\"MG\";\"Riachinho\";-45.988755;-16.225802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1979;\"MG\";\"Riacho dos Machados\";-43.048796;-16.009131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1981;\"MG\";\"Ribeirão Vermelho\";-45.06368;-21.187861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1980;\"MG\";\"Ribeirão das Neves\";-44.08445;-19.762076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1982;\"MG\";\"Rio Acima\";-43.787786;-20.087553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1983;\"MG\";\"Rio Casca\";-42.646209;-20.228542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1984;\"MG\";\"Rio Doce\";-42.899497;-20.241171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1986;\"MG\";\"Rio Espera\";-43.472076;-20.855001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1987;\"MG\";\"Rio Manso\";-44.306867;-20.26657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1988;\"MG\";\"Rio Novo\";-43.116805;-21.464899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1989;\"MG\";\"Rio Paranaíba\";-46.245482;-19.186138"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1990;\"MG\";\"Rio Pardo de Minas\";-42.5405;-15.616028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1991;\"MG\";\"Rio Piracicaba\";-43.182919;-19.92836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1992;\"MG\";\"Rio Pomba\";-43.169625;-21.271152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1993;\"MG\";\"Rio Preto\";-43.829325;-22.086092"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1994;\"MG\";\"Rio Vermelho\";-43.001783;-18.292155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1985;\"MG\";\"Rio do Prado\";-40.571371;-16.605648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1995;\"MG\";\"Ritápolis\";-44.320435;-21.027564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1996;\"MG\";\"Rochedo de Minas\";-43.016547;-21.628397"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1997;\"MG\";\"Rodeiro\";-42.858622;-21.203467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1998;\"MG\";\"Romaria\";-47.578221;-18.883807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1999;\"MG\";\"Rosário da Limeira\";-42.511196;-20.981227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2000;\"MG\";\"Rubelita\";-42.261042;-16.40527"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2001;\"MG\";\"Rubim\";-40.539714;-16.377494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2002;\"MG\";\"Sabará\";-43.82631;-19.884045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2003;\"MG\";\"Sabinópolis\";-43.075243;-18.665326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2004;\"MG\";\"Sacramento\";-47.450823;-19.862172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2005;\"MG\";\"Salinas\";-42.296406;-16.175265"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2006;\"MG\";\"Salto da Divisa\";-39.939088;-16.006327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2007;\"MG\";\"Santa Bárbara\";-43.410145;-19.960358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2008;\"MG\";\"Santa Bárbara do Leste\";-42.145746;-19.975295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2009;\"MG\";\"Santa Bárbara do Monte Verde\";-43.702727;-21.959179"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2010;\"MG\";\"Santa Bárbara do Tugúrio\";-43.560746;-21.243118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2011;\"MG\";\"Santa Cruz de Minas\";-44.220251;-21.124148"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2012;\"MG\";\"Santa Cruz de Salinas\";-41.741767;-16.096717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2013;\"MG\";\"Santa Cruz do Escalvado\";-42.816886;-20.237238"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2014;\"MG\";\"Santa Efigênia de Minas\";-42.438832;-18.823464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2015;\"MG\";\"Santa Fé de Minas\";-45.410207;-16.685947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2016;\"MG\";\"Santa Helena de Minas\";-40.67272;-16.970719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2017;\"MG\";\"Santa Juliana\";-47.532251;-19.310772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2018;\"MG\";\"Santa Luzia\";-43.849658;-19.754824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2019;\"MG\";\"Santa Margarida\";-42.251914;-20.383855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2020;\"MG\";\"Santa Maria de Itabira\";-43.106446;-19.4431"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2021;\"MG\";\"Santa Maria do Salto\";-40.151164;-16.247895"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2022;\"MG\";\"Santa Maria do Suaçuí\";-42.413899;-18.189581"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2033;\"MG\";\"Santa Rita de Caldas\";-46.338501;-22.029192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2034;\"MG\";\"Santa Rita de Ibitipoca\";-43.916278;-21.565827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2035;\"MG\";\"Santa Rita de Jacutinga\";-44.0977;-22.147386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2036;\"MG\";\"Santa Rita de Minas\";-42.136277;-19.876046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2037;\"MG\";\"Santa Rita do Itueto\";-41.382084;-19.357649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2038;\"MG\";\"Santa Rita do Sapucaí\";-45.703405;-22.246141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2039;\"MG\";\"Santa Rosa da Serra\";-45.961081;-19.51861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2040;\"MG\";\"Santa Vitória\";-50.120759;-18.841398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2023;\"MG\";\"Santana da Vargem\";-45.500526;-21.244903"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2024;\"MG\";\"Santana de Cataguases\";-42.552357;-21.289277"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2025;\"MG\";\"Santana de Pirapama\";-44.040913;-18.996242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2026;\"MG\";\"Santana do Deserto\";-43.158323;-21.951208"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2027;\"MG\";\"Santana do Garambéu\";-44.105044;-21.598344"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2028;\"MG\";\"Santana do Jacaré\";-45.128506;-20.900714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2029;\"MG\";\"Santana do Manhuaçu\";-41.927839;-20.103106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2030;\"MG\";\"Santana do Paraíso\";-42.544573;-19.36607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2031;\"MG\";\"Santana do Riacho\";-43.72195;-19.166236"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2032;\"MG\";\"Santana dos Montes\";-43.694885;-20.786799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2041;\"MG\";\"Santo Antônio do Amparo\";-44.917608;-20.943044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2042;\"MG\";\"Santo Antônio do Aventureiro\";-42.811457;-21.760572"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2043;\"MG\";\"Santo Antônio do Grama\";-42.604689;-20.318471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2044;\"MG\";\"Santo Antônio do Itambé\";-43.300569;-18.460947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2045;\"MG\";\"Santo Antônio do Jacinto\";-40.181741;-16.533206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2046;\"MG\";\"Santo Antônio do Monte\";-45.294724;-20.085003"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2047;\"MG\";\"Santo Antônio do Retiro\";-42.617092;-15.339271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2048;\"MG\";\"Santo Antônio do Rio Abaixo\";-43.260414;-19.237366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2049;\"MG\";\"Santo Hipólito\";-44.222857;-18.296768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2050;\"MG\";\"Santos Dumont\";-43.549876;-21.463377"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2111;\"MG\";\"Sapucaí-Mirim\";-45.737958;-22.740899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2112;\"MG\";\"Sardoá\";-42.362938;-18.782799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2113;\"MG\";\"Sarzedo\";-44.1446;-20.036667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2114;\"MG\";\"Sem-Peixe\";-42.848331;-20.100845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2115;\"MG\";\"Senador Amaral\";-46.176329;-22.586897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2116;\"MG\";\"Senador Cortes\";-42.942375;-21.798562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2117;\"MG\";\"Senador Firmino\";-43.090431;-20.915762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2118;\"MG\";\"Senador José Bento\";-46.179226;-22.163327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2119;\"MG\";\"Senador Modestino Gonçalves\";-43.21717;-17.94652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2120;\"MG\";\"Senhora de Oliveira\";-43.339432;-20.797221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2121;\"MG\";\"Senhora do Porto\";-43.079875;-18.890894"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2122;\"MG\";\"Senhora dos Remédios\";-43.581213;-21.03508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2123;\"MG\";\"Sericita\";-42.482776;-20.47484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2124;\"MG\";\"Seritinga\";-44.517965;-21.913367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2125;\"MG\";\"Serra Azul de Minas\";-43.16746;-18.360154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2126;\"MG\";\"Serra da Saudade\";-45.794976;-19.444669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2128;\"MG\";\"Serra do Salitre\";-46.696053;-19.108334"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2127;\"MG\";\"Serra dos Aimorés\";-40.245252;-17.787172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2129;\"MG\";\"Serrania\";-46.041701;-21.544145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2131;\"MG\";\"Serranos\";-44.512487;-21.88573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2130;\"MG\";\"Serranópolis de Minas\";-42.873156;-15.817567"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2132;\"MG\";\"Serro\";-43.374399;-18.599103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2133;\"MG\";\"Sete Lagoas\";-44.241255;-19.456902"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2134;\"MG\";\"Setubinha\";-42.158669;-17.600202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2135;\"MG\";\"Silveirânia\";-43.212843;-21.16148"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2136;\"MG\";\"Silvianópolis\";-45.838517;-22.02741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2138;\"MG\";\"Simonésia\";-42.009052;-20.134097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2137;\"MG\";\"Simão Pereira\";-43.308794;-21.96396"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2139;\"MG\";\"Sobrália\";-42.099806;-19.234465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2140;\"MG\";\"Soledade de Minas\";-45.046417;-22.055432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2051;\"MG\";\"São Bento Abade\";-45.069931;-21.583927"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2052;\"MG\";\"São Brás do Suaçuí\";-43.951465;-20.624166"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2053;\"MG\";\"São Domingos das Dores\";-42.010638;-19.524595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2054;\"MG\";\"São Domingos do Prata\";-42.971031;-19.867822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2056;\"MG\";\"São Francisco\";-44.859284;-15.951449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2057;\"MG\";\"São Francisco de Paula\";-44.983763;-20.703625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2058;\"MG\";\"São Francisco de Sales\";-49.772693;-19.861122"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2059;\"MG\";\"São Francisco do Glória\";-42.267275;-20.792297"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2055;\"MG\";\"São Félix de Minas\";-41.488861;-18.595902"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2060;\"MG\";\"São Geraldo\";-42.836358;-20.925231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2061;\"MG\";\"São Geraldo da Piedade\";-42.286665;-18.841119"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2062;\"MG\";\"São Geraldo do Baixio\";-41.362964;-18.909668"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2063;\"MG\";\"São Gonçalo do Abaeté\";-45.826475;-18.33147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2064;\"MG\";\"São Gonçalo do Pará\";-44.85931;-19.982173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2065;\"MG\";\"São Gonçalo do Rio Abaixo\";-43.365987;-19.8221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2066;\"MG\";\"São Gonçalo do Rio Preto\";-43.385389;-18.002549"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2067;\"MG\";\"São Gonçalo do Sapucaí\";-45.589344;-21.893223"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2068;\"MG\";\"São Gotardo\";-46.046475;-19.308727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2082;\"MG\";\"São Joaquim de Bicas\";-44.274949;-20.047971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2083;\"MG\";\"São José da Barra\";-46.312968;-20.717808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2084;\"MG\";\"São José da Lapa\";-43.958637;-19.697106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2085;\"MG\";\"São José da Safira\";-42.143061;-18.324266"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2086;\"MG\";\"São José da Varginha\";-44.55596;-19.700566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2087;\"MG\";\"São José do Alegre\";-45.525837;-22.324269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2088;\"MG\";\"São José do Divino\";-41.390671;-18.479304"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2089;\"MG\";\"São José do Goiabal\";-42.70355;-19.921431"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2090;\"MG\";\"São José do Jacuri\";-42.67293;-18.281037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2091;\"MG\";\"São José do Mantimento\";-41.748591;-20.005756"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2069;\"MG\";\"São João Batista do Glória\";-46.507966;-20.634996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2080;\"MG\";\"São João Evangelista\";-42.765504;-18.548001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2081;\"MG\";\"São João Nepomuceno\";-43.006876;-21.538133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2070;\"MG\";\"São João da Lagoa\";-44.350726;-16.845535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2071;\"MG\";\"São João da Mata\";-45.929727;-21.927998"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2072;\"MG\";\"São João da Ponte\";-44.009612;-15.927088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2073;\"MG\";\"São João das Missões\";-44.092201;-14.885852"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2074;\"MG\";\"São João del Rei\";-44.252646;-21.131054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2075;\"MG\";\"São João do Manhuaçu\";-42.153283;-20.393315"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2076;\"MG\";\"São João do Manteninha\";-41.162837;-18.722988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2077;\"MG\";\"São João do Oriente\";-42.157502;-19.338445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2078;\"MG\";\"São João do Pacuí\";-44.513355;-16.537314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2079;\"MG\";\"São João do Paraíso\";-42.021342;-15.316799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2092;\"MG\";\"São Lourenço\";-45.050597;-22.116588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2093;\"MG\";\"São Miguel do Anta\";-42.717389;-20.706665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2094;\"MG\";\"São Pedro da União\";-46.6123;-21.130975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2096;\"MG\";\"São Pedro do Suaçuí\";-42.598137;-18.360926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2095;\"MG\";\"São Pedro dos Ferros\";-42.525086;-20.173228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2097;\"MG\";\"São Romão\";-45.07489;-16.364118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2098;\"MG\";\"São Roque de Minas\";-46.363873;-20.249014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2099;\"MG\";\"São Sebastião da Bela Vista\";-45.754639;-22.158327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2100;\"MG\";\"São Sebastião da Vargem Alegre\";-42.634672;-21.073656"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2101;\"MG\";\"São Sebastião do Anta\";-41.985034;-19.506407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2102;\"MG\";\"São Sebastião do Maranhão\";-42.565853;-18.087252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2103;\"MG\";\"São Sebastião do Oeste\";-45.006332;-20.275843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2104;\"MG\";\"São Sebastião do Paraíso\";-46.983703;-20.916734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2105;\"MG\";\"São Sebastião do Rio Preto\";-43.17567;-19.295906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2106;\"MG\";\"São Sebastião do Rio Verde\";-44.976116;-22.218293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2107;\"MG\";\"São Thomé das Letras\";-44.98483;-21.725804"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2108;\"MG\";\"São Tiago\";-44.509837;-20.907471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2109;\"MG\";\"São Tomás de Aquino\";-47.096195;-20.779063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2110;\"MG\";\"São Vicente de Minas\";-44.443064;-21.704217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2141;\"MG\";\"Tabuleiro\";-43.238055;-21.363248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2142;\"MG\";\"Taiobeiras\";-42.225944;-15.810619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2143;\"MG\";\"Taparuba\";-41.607981;-19.762079"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2144;\"MG\";\"Tapira\";-46.826397;-19.916619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2145;\"MG\";\"Tapiraí\";-46.022072;-19.893587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2146;\"MG\";\"Taquaraçu de Minas\";-43.692226;-19.665186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2147;\"MG\";\"Tarumirim\";-42.009699;-19.283475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2148;\"MG\";\"Teixeiras\";-42.856395;-20.656083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2149;\"MG\";\"Teófilo Otoni\";-41.508717;-17.859534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2150;\"MG\";\"Timóteo\";-42.64713;-19.581086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2151;\"MG\";\"Tiradentes\";-44.174421;-21.110232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2152;\"MG\";\"Tiros\";-45.962648;-19.00373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2153;\"MG\";\"Tocantins\";-43.012702;-21.177411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2154;\"MG\";\"Tocos do Moji\";-46.097067;-22.369797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2155;\"MG\";\"Toledo\";-46.372772;-22.742133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2156;\"MG\";\"Tombos\";-42.022774;-20.908628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2157;\"MG\";\"Três Corações\";-45.251117;-21.692091"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2158;\"MG\";\"Três Marias\";-45.247289;-18.204795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2159;\"MG\";\"Três Pontas\";-45.510886;-21.36944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2160;\"MG\";\"Tumiritinga\";-41.652674;-18.984446"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2161;\"MG\";\"Tupaciguara\";-48.69854;-18.586591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2162;\"MG\";\"Turmalina\";-42.728476;-17.282825"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2163;\"MG\";\"Turvolândia\";-45.785948;-21.873342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2166;\"MG\";\"Ubaporanga\";-42.105925;-19.635051"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2165;\"MG\";\"Ubaí\";-44.778251;-16.288505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2167;\"MG\";\"Uberaba\";-47.938073;-19.747205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2168;\"MG\";\"Uberlândia\";-48.274934;-18.914142"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2164;\"MG\";\"Ubá\";-42.935931;-21.120444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2169;\"MG\";\"Umburatiba\";-40.577937;-17.254804"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2170;\"MG\";\"Unaí\";-46.902157;-16.359212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2171;\"MG\";\"União de Minas\";-50.338019;-19.529861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2172;\"MG\";\"Uruana de Minas\";-46.244306;-16.063384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2174;\"MG\";\"Urucuia\";-45.735199;-16.124412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2173;\"MG\";\"Urucânia\";-42.736989;-20.352088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2175;\"MG\";\"Vargem Alegre\";-42.294927;-19.598762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2176;\"MG\";\"Vargem Bonita\";-46.368824;-20.333265"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2177;\"MG\";\"Vargem Grande do Rio Pardo\";-42.308507;-15.398737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2178;\"MG\";\"Varginha\";-45.436424;-21.555581"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2179;\"MG\";\"Varjão de Minas\";-46.031318;-18.374102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2181;\"MG\";\"Varzelândia\";-44.027839;-15.699154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2182;\"MG\";\"Vazante\";-46.908826;-17.982732"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2183;\"MG\";\"Verdelândia\";-43.612137;-15.584522"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2184;\"MG\";\"Veredinha\";-42.730697;-17.397384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2186;\"MG\";\"Vermelho Novo\";-42.268797;-20.040618"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2185;\"MG\";\"Veríssimo\";-48.311845;-19.66574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2187;\"MG\";\"Vespasiano\";-43.9239;-19.688326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2189;\"MG\";\"Vieiras\";-42.240051;-20.867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2190;\"MG\";\"Virgem da Lapa\";-42.343071;-16.807011"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2192;\"MG\";\"Virginópolis\";-42.701492;-18.815409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2193;\"MG\";\"Virgolândia\";-42.306707;-18.473842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2191;\"MG\";\"Virgínia\";-45.096463;-22.326424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2194;\"MG\";\"Visconde do Rio Branco\";-42.836129;-21.012725"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2188;\"MG\";\"Viçosa\";-42.87417;-20.755916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2195;\"MG\";\"Volta Grande\";-42.537501;-21.767086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2180;\"MG\";\"Várzea da Palma\";-44.722557;-17.594444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2196;\"MG\";\"Wenceslau Braz\";-45.362636;-22.536836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1349;\"MG\";\"Água Boa\";-42.380648;-17.991373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1350;\"MG\";\"Água Comprida\";-48.106879;-20.05757"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1352;\"MG\";\"Águas Formosas\";-40.938355;-17.08021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1353;\"MG\";\"Águas Vermelhas\";-41.457127;-15.743057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2198;\"MS\";\"Alcinópolis\";-53.704223;-18.325546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2199;\"MS\";\"Amambaí\";-55.225327;-23.10576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2200;\"MS\";\"Anastácio\";-55.810353;-20.482292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2201;\"MS\";\"Anaurilândia\";-52.719056;-22.185169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2202;\"MS\";\"Angélica\";-53.770789;-22.152658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2203;\"MS\";\"Antônio João\";-55.951681;-22.192701"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2204;\"MS\";\"Aparecida do Taboado\";-51.096135;-20.087275"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2205;\"MS\";\"Aquidauana\";-55.786788;-20.466552"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2206;\"MS\";\"Aral Moreira\";-55.633451;-22.938467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2207;\"MS\";\"Bandeirantes\";-54.358458;-19.92749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2208;\"MS\";\"Bataguassu\";-52.422058;-21.715899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2209;\"MS\";\"Batayporã\";-53.270488;-22.294444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2210;\"MS\";\"Bela Vista\";-56.526288;-22.107327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2211;\"MS\";\"Bodoquena\";-56.712716;-20.536983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2212;\"MS\";\"Bonito\";-56.483565;-21.126096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2213;\"MS\";\"Brasilândia\";-52.036519;-21.254428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2214;\"MS\";\"Caarapó\";-54.820928;-22.636764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2215;\"MS\";\"Camapuã\";-54.043065;-19.534672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2216;\"MS\";\"Campo Grande\";-54.629463;-20.448589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2217;\"MS\";\"Caracol\";-57.027672;-22.011017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2218;\"MS\";\"Cassilândia\";-51.731309;-19.117867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2219;\"MS\";\"Chapadão do Sul\";-52.626337;-18.788035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2220;\"MS\";\"Corguinho\";-54.828074;-19.824281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2221;\"MS\";\"Coronel Sapucaia\";-55.527811;-23.272407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2222;\"MS\";\"Corumbá\";-57.651036;-19.007727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2223;\"MS\";\"Costa Rica\";-53.128732;-18.543202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2224;\"MS\";\"Coxim\";-54.750991;-18.501299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2225;\"MS\";\"Deodápolis\";-54.168163;-22.276272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2226;\"MS\";\"Dois Irmãos do Buriti\";-55.291453;-20.684818"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2227;\"MS\";\"Douradina\";-54.615756;-22.040494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2228;\"MS\";\"Dourados\";-54.812043;-22.223099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2229;\"MS\";\"Eldorado\";-54.283775;-23.786838"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5659;\"MS\";\"Figueirão\";-53.641258;-18.682824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2230;\"MS\";\"Fátima do Sul\";-54.513069;-22.378924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2231;\"MS\";\"Glória de Dourados\";-54.233502;-22.413628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2232;\"MS\";\"Guia Lopes da Laguna\";-56.111711;-21.458318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2233;\"MS\";\"Iguatemi\";-54.563731;-23.673555"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2234;\"MS\";\"Inocência\";-51.928098;-19.727716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2235;\"MS\";\"Itaporã\";-54.793381;-22.080035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2236;\"MS\";\"Itaquiraí\";-54.186971;-23.477868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2237;\"MS\";\"Ivinhema\";-53.818414;-22.304571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2238;\"MS\";\"Japorã\";-54.405946;-23.890325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2239;\"MS\";\"Jaraguari\";-54.399626;-20.138615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2240;\"MS\";\"Jardim\";-56.148902;-21.479941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2241;\"MS\";\"Jateí\";-54.307934;-22.480633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2242;\"MS\";\"Juti\";-54.60612;-22.859637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2243;\"MS\";\"Ladário\";-57.597266;-19.008894"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2244;\"MS\";\"Laguna Carapã\";-55.15021;-22.544818"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2245;\"MS\";\"Maracaju\";-55.167763;-21.610544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2246;\"MS\";\"Miranda\";-56.374594;-20.235508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2247;\"MS\";\"Mundo Novo\";-54.281012;-23.93554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2248;\"MS\";\"Naviraí\";-54.199465;-23.06181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2249;\"MS\";\"Nioaque\";-55.829618;-21.141882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2250;\"MS\";\"Nova Alvorada do Sul\";-54.382491;-21.465688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2251;\"MS\";\"Nova Andradina\";-53.343715;-22.237971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2252;\"MS\";\"Novo Horizonte do Sul\";-53.860148;-22.669322"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2253;\"MS\";\"Paranaíba\";-51.190863;-19.674648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2254;\"MS\";\"Paranhos\";-55.429018;-23.891067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2255;\"MS\";\"Pedro Gomes\";-54.550663;-18.099622"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2256;\"MS\";\"Ponta Porã\";-55.720326;-22.529617"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2257;\"MS\";\"Porto Murtinho\";-57.883586;-21.698078"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2258;\"MS\";\"Ribas do Rio Pardo\";-53.758819;-20.444533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2259;\"MS\";\"Rio Brilhante\";-54.542744;-21.803258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2260;\"MS\";\"Rio Negro\";-54.985873;-19.447036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2261;\"MS\";\"Rio Verde de Mato Grosso\";-54.843357;-18.924945"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2262;\"MS\";\"Rochedo\";-54.884769;-19.956488"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2263;\"MS\";\"Santa Rita do Pardo\";-52.833338;-21.301604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2265;\"MS\";\"Selvíria\";-51.419246;-20.363733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2266;\"MS\";\"Sete Quedas\";-55.03984;-23.970508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2267;\"MS\";\"Sidrolândia\";-54.969219;-20.930212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2268;\"MS\";\"Sonora\";-54.755112;-17.569775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2264;\"MS\";\"São Gabriel do Oeste\";-54.550668;-19.388858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2269;\"MS\";\"Tacuru\";-55.014137;-23.635954"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2270;\"MS\";\"Taquarussu\";-53.351891;-22.489797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2271;\"MS\";\"Terenos\";-54.864742;-20.437845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2272;\"MS\";\"Três Lagoas\";-51.700731;-20.784853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2273;\"MS\";\"Vicentina\";-54.441507;-22.409801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2197;\"MS\";\"Água Clara\";-52.87899;-20.445245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2274;\"MT\";\"Acorizal\";-56.363226;-15.194025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2276;\"MT\";\"Alta Floresta\";-56.086704;-9.866745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2277;\"MT\";\"Alto Araguaia\";-53.218125;-17.315324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2278;\"MT\";\"Alto Boa Vista\";-51.388326;-11.673199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2279;\"MT\";\"Alto Garças\";-53.527209;-16.946226"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2280;\"MT\";\"Alto Paraguai\";-56.47763;-14.513712"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2281;\"MT\";\"Alto Taquari\";-53.27922;-17.82405"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2282;\"MT\";\"Apiacás\";-57.458677;-9.539809"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2283;\"MT\";\"Araguaiana\";-51.834112;-15.729144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2284;\"MT\";\"Araguainha\";-53.031778;-16.857016"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2285;\"MT\";\"Araputanga\";-58.342461;-15.464096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2286;\"MT\";\"Arenápolis\";-56.843724;-14.447159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2287;\"MT\";\"Aripuanã\";-59.456815;-10.172262"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2289;\"MT\";\"Barra do Bugres\";-57.187784;-15.07016"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2290;\"MT\";\"Barra do Garças\";-52.263953;-15.880412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2288;\"MT\";\"Barão de Melgaço\";-55.962337;-16.20669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5669;\"MT\";\"Bom Jesus do Araguaia\";-51.503154;-12.170571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2291;\"MT\";\"Brasnorte\";-57.983341;-12.147402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2293;\"MT\";\"Campinápolis\";-52.892979;-14.516182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2294;\"MT\";\"Campo Novo do Parecis\";-57.890723;-13.658735"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2296;\"MT\";\"Campo Verde\";-55.162582;-15.544978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2295;\"MT\";\"Campos de Júlio\";-59.285807;-13.724224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2297;\"MT\";\"Canabrava do Norte\";-51.820883;-11.055561"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2298;\"MT\";\"Canarana\";-52.270493;-13.551502"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2299;\"MT\";\"Carlinda\";-55.841671;-9.949118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2300;\"MT\";\"Castanheira\";-58.608076;-11.12506"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2301;\"MT\";\"Chapada dos Guimarães\";-55.749857;-15.464343"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2302;\"MT\";\"Cláudia\";-54.883476;-11.5075"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2303;\"MT\";\"Cocalinho\";-51.00015;-14.390339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2305;\"MT\";\"Colniza\";-59.225189;-9.461207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2304;\"MT\";\"Colíder\";-55.460981;-10.813453"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2306;\"MT\";\"Comodoro\";-59.784751;-13.661436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2307;\"MT\";\"Confresa\";-51.569873;-10.643695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5661;\"MT\";\"Conquista D`Oeste\";-59.547973;-14.537072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2308;\"MT\";\"Cotriguaçu\";-58.419231;-9.856563"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2309;\"MT\";\"Cuiabá\";-56.097397;-15.600979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5663;\"MT\";\"Curvelândia\";-57.913269;-15.608389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2292;\"MT\";\"Cáceres\";-57.681798;-16.076414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2310;\"MT\";\"Denise\";-57.058262;-14.732397"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2311;\"MT\";\"Diamantino\";-56.436599;-14.403673"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2312;\"MT\";\"Dom Aquino\";-54.922298;-15.809899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2313;\"MT\";\"Feliz Natal\";-54.922738;-12.384985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2314;\"MT\";\"Figueirópolis d`Oeste\";-58.739149;-15.443918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2315;\"MT\";\"Gaúcha do Norte\";-53.080914;-13.244284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2316;\"MT\";\"General Carneiro\";-52.757375;-15.709447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2317;\"MT\";\"Glória d`Oeste\";-58.306121;-15.767592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2318;\"MT\";\"Guarantã do Norte\";-54.912126;-9.962182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2319;\"MT\";\"Guiratinga\";-53.75749;-16.345979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2320;\"MT\";\"Indiavaí\";-58.580158;-15.492115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5664;\"MT\";\"Ipiranga do Norte\";-56.145936;-12.240162"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5657;\"MT\";\"Itanhangá\";-56.684065;-12.166012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2321;\"MT\";\"Itaúba\";-55.276574;-11.061423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2322;\"MT\";\"Itiquira\";-54.142214;-17.214693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2323;\"MT\";\"Jaciara\";-54.97332;-15.954778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2324;\"MT\";\"Jangada\";-56.491693;-15.235044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2325;\"MT\";\"Jauru\";-58.872267;-15.33417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2326;\"MT\";\"Juara\";-57.524443;-11.263925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2328;\"MT\";\"Juruena\";-58.359179;-10.317805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2329;\"MT\";\"Juscimeira\";-54.885894;-16.063307"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2327;\"MT\";\"Juína\";-58.748314;-11.372752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2330;\"MT\";\"Lambari d`Oeste\";-58.002856;-15.317213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2331;\"MT\";\"Lucas do Rio Verde\";-55.904202;-13.058796"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2332;\"MT\";\"Luciára\";-50.667592;-11.221926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2333;\"MT\";\"Marcelândia\";-54.437681;-11.046259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2334;\"MT\";\"Matupá\";-54.94667;-10.182065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2335;\"MT\";\"Mirassol d`Oeste\";-58.090996;-15.667801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2336;\"MT\";\"Nobres\";-56.328358;-14.719167"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2337;\"MT\";\"Nortelândia\";-56.794516;-14.454022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2338;\"MT\";\"Nossa Senhora do Livramento\";-56.343242;-15.772024"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2339;\"MT\";\"Nova Bandeirantes\";-57.864687;-9.808959"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2340;\"MT\";\"Nova Brasilândia\";-54.968527;-14.961215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2341;\"MT\";\"Nova Canaã do Norte\";-55.953001;-10.558"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2342;\"MT\";\"Nova Guarita\";-55.406062;-10.311992"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2343;\"MT\";\"Nova Lacerda\";-59.600115;-14.472726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2344;\"MT\";\"Nova Marilândia\";-56.969572;-14.356757"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2345;\"MT\";\"Nova Maringá\";-57.090769;-13.013614"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2346;\"MT\";\"Nova Monte Verde\";-57.526052;-9.999982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2347;\"MT\";\"Nova Mutum\";-56.074316;-13.837389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5668;\"MT\";\"Nova Nazaré\";-51.800203;-13.948627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2348;\"MT\";\"Nova Olímpia\";-57.288613;-14.788947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5665;\"MT\";\"Nova Santa Helena\";-55.1872;-10.865144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2349;\"MT\";\"Nova Ubiratã\";-55.255558;-12.983411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2350;\"MT\";\"Nova Xavantina\";-52.350234;-14.677063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2351;\"MT\";\"Novo Horizonte do Norte\";-57.348763;-11.408889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2352;\"MT\";\"Novo Mundo\";-55.20295;-9.956159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5671;\"MT\";\"Novo Santo Antônio\";-50.96857;-12.287538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2353;\"MT\";\"Novo São Joaquim\";-53.019362;-14.905406"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2355;\"MT\";\"Paranatinga\";-54.052426;-14.426475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2354;\"MT\";\"Paranaíta\";-56.478623;-9.658348"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2356;\"MT\";\"Pedra Preta\";-54.47218;-16.624505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2357;\"MT\";\"Peixoto de Azevedo\";-54.979376;-10.226168"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2358;\"MT\";\"Planalto da Serra\";-54.781857;-14.651773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2359;\"MT\";\"Poconé\";-56.626099;-16.266037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2360;\"MT\";\"Pontal do Araguaia\";-52.327296;-15.927383"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2361;\"MT\";\"Ponte Branca\";-52.836864;-16.758407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2362;\"MT\";\"Pontes e Lacerda\";-59.343544;-15.221868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2363;\"MT\";\"Porto Alegre do Norte\";-51.635731;-10.876126"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2365;\"MT\";\"Porto Esperidião\";-58.461925;-15.857026"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2366;\"MT\";\"Porto Estrela\";-57.220403;-15.323517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2364;\"MT\";\"Porto dos Gaúchos\";-57.413233;-11.532999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2367;\"MT\";\"Poxoréo\";-54.388276;-15.841012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2368;\"MT\";\"Primavera do Leste\";-54.281056;-15.543971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2369;\"MT\";\"Querência\";-52.182102;-12.609294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2370;\"MT\";\"Reserva do Cabaçal\";-58.458533;-15.074259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2371;\"MT\";\"Ribeirão Cascalheira\";-51.824421;-12.936738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2372;\"MT\";\"Ribeirãozinho\";-52.692439;-16.48563"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2373;\"MT\";\"Rio Branco\";-58.125892;-15.248331"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5660;\"MT\";\"Rondolândia\";-61.469737;-10.837556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2374;\"MT\";\"Rondonópolis\";-54.637173;-16.467251"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2375;\"MT\";\"Rosário Oeste\";-56.42357;-14.825938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2376;\"MT\";\"Salto do Céu\";-58.131721;-15.130346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2377;\"MT\";\"Santa Carmem\";-55.226297;-11.912542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5667;\"MT\";\"Santa Cruz do Xingu\";-52.395348;-10.153161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5628;\"MT\";\"Santa Rita do Trivelato\";-55.270564;-13.814599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2378;\"MT\";\"Santa Terezinha\";-50.513986;-10.470375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2379;\"MT\";\"Santo Afonso\";-57.009099;-14.494474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5666;\"MT\";\"Santo Antônio do Leste\";-53.638935;-14.797045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2380;\"MT\";\"Santo Antônio do Leverger\";-56.078752;-15.862409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2387;\"MT\";\"Sapezal\";-58.764473;-12.989214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5670;\"MT\";\"Serra Nova Dourada\";-51.402543;-12.089627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2388;\"MT\";\"Sinop\";-55.509062;-11.86043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2389;\"MT\";\"Sorriso\";-55.721051;-12.542527"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2381;\"MT\";\"São Félix do Araguaia\";-50.670624;-11.614968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2382;\"MT\";\"São José do Povo\";-54.248716;-16.454946"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2383;\"MT\";\"São José do Rio Claro\";-56.721841;-13.439818"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2385;\"MT\";\"São José do Xingu\";-52.748589;-10.798193"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2384;\"MT\";\"São José dos Quatro Marcos\";-58.177217;-15.627584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2386;\"MT\";\"São Pedro da Cipa\";-54.91758;-16.010905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2390;\"MT\";\"Tabaporã\";-56.831237;-11.300739"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2391;\"MT\";\"Tangará da Serra\";-57.493278;-14.62291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2392;\"MT\";\"Tapurah\";-56.517821;-12.695014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2393;\"MT\";\"Terra Nova do Norte\";-55.231;-10.517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2394;\"MT\";\"Tesouro\";-53.559032;-16.080932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2395;\"MT\";\"Torixoréu\";-52.557097;-16.200591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2396;\"MT\";\"União do Sul\";-54.361637;-11.530776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5662;\"MT\";\"Vale de São Domingos\";-59.068313;-15.285975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2398;\"MT\";\"Vera\";-55.304497;-12.301659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2399;\"MT\";\"Vila Bela da Santíssima Trindade\";-59.947256;-15.003938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2400;\"MT\";\"Vila Rica\";-51.118599;-10.013666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2397;\"MT\";\"Várzea Grande\";-56.132218;-15.645816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2275;\"MT\";\"Água Boa\";-52.160133;-14.051019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2401;\"PA\";\"Abaetetuba\";-48.878843;-1.721828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2402;\"PA\";\"Abel Figueiredo\";-48.393285;-4.953327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2403;\"PA\";\"Acará\";-48.198513;-1.953833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2404;\"PA\";\"Afuá\";-50.38613;-0.154874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2406;\"PA\";\"Alenquer\";-54.738355;-1.946229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2407;\"PA\";\"Almeirim\";-52.581573;-1.520968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2408;\"PA\";\"Altamira\";-52.209961;-3.204065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2409;\"PA\";\"Anajás\";-49.9354;-0.996811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2410;\"PA\";\"Ananindeua\";-48.374298;-1.363914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2411;\"PA\";\"Anapu\";-51.200264;-3.469847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2412;\"PA\";\"Augusto Corrêa\";-46.645551;-1.021634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2413;\"PA\";\"Aurora do Pará\";-47.567712;-2.148976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2414;\"PA\";\"Aveiro\";-55.31994;-3.608415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2415;\"PA\";\"Bagre\";-50.19869;-1.900565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2416;\"PA\";\"Baião\";-49.669443;-2.790212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2417;\"PA\";\"Bannach\";-50.395853;-7.347786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2418;\"PA\";\"Barcarena\";-48.619529;-1.511872"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2420;\"PA\";\"Belterra\";-54.937392;-2.636091"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2419;\"PA\";\"Belém\";-48.489756;-1.455396"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2421;\"PA\";\"Benevides\";-48.243408;-1.361829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2422;\"PA\";\"Bom Jesus do Tocantins\";-48.604701;-5.042402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2423;\"PA\";\"Bonito\";-47.306572;-1.367451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2424;\"PA\";\"Bragança\";-46.7826;-1.061263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2425;\"PA\";\"Brasil Novo\";-52.534021;-3.297922"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2426;\"PA\";\"Brejo Grande do Araguaia\";-48.41025;-5.698216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2427;\"PA\";\"Breu Branco\";-49.573459;-3.771908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2428;\"PA\";\"Breves\";-50.479085;-1.68036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2429;\"PA\";\"Bujaru\";-48.038063;-1.517616"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2430;\"PA\";\"Cachoeira do Arari\";-48.95029;-1.012259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2431;\"PA\";\"Cachoeira do Piriá\";-46.54593;-1.759738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2432;\"PA\";\"Cametá\";-49.497885;-2.242949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2433;\"PA\";\"Canaã dos Carajás\";-49.877612;-6.496594"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2434;\"PA\";\"Capanema\";-47.177778;-1.205291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2435;\"PA\";\"Capitão Poço\";-47.06293;-1.747847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2436;\"PA\";\"Castanhal\";-47.916742;-1.297971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2437;\"PA\";\"Chaves\";-49.987006;-0.164154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2438;\"PA\";\"Colares\";-48.280254;-0.936423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2439;\"PA\";\"Conceição do Araguaia\";-49.268913;-8.261356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2440;\"PA\";\"Concórdia do Pará\";-47.942204;-1.992375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2441;\"PA\";\"Cumaru do Norte\";-50.769772;-7.810968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2442;\"PA\";\"Curionópolis\";-49.606795;-6.099654"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2443;\"PA\";\"Curralinho\";-49.795227;-1.811793"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2444;\"PA\";\"Curuá\";-55.116842;-1.887754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2445;\"PA\";\"Curuçá\";-47.85148;-0.733214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2446;\"PA\";\"Dom Eliseu\";-47.505688;-4.283786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2447;\"PA\";\"Eldorado dos Carajás\";-49.355261;-6.103891"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2448;\"PA\";\"Faro\";-56.740498;-2.168047"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2449;\"PA\";\"Floresta do Araguaia\";-49.712495;-7.553346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2450;\"PA\";\"Garrafão do Norte\";-47.050499;-1.929858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2451;\"PA\";\"Goianésia do Pará\";-49.097385;-3.843384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2452;\"PA\";\"Gurupá\";-51.633841;-1.414123"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2453;\"PA\";\"Igarapé-Açu\";-47.617409;-1.136139"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2454;\"PA\";\"Igarapé-Miri\";-48.957453;-1.975326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2455;\"PA\";\"Inhangapi\";-47.911393;-1.434897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2456;\"PA\";\"Ipixuna do Pará\";-47.505911;-2.559921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2457;\"PA\";\"Irituia\";-47.445997;-1.769842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2458;\"PA\";\"Itaituba\";-55.99264;-4.266696"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2459;\"PA\";\"Itupiranga\";-49.335849;-5.132716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2460;\"PA\";\"Jacareacanga\";-57.754352;-6.21469"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2461;\"PA\";\"Jacundá\";-49.115272;-4.446173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2462;\"PA\";\"Juruti\";-56.088903;-2.163472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2463;\"PA\";\"Limoeiro do Ajuru\";-49.390308;-1.898498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2465;\"PA\";\"Magalhães Barata\";-47.601445;-0.803391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2466;\"PA\";\"Marabá\";-49.132672;-5.38075"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2467;\"PA\";\"Maracanã\";-47.451983;-0.778899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2468;\"PA\";\"Marapanim\";-47.70336;-0.714702"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2469;\"PA\";\"Marituba\";-48.342064;-1.36002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2470;\"PA\";\"Medicilândia\";-52.88748;-3.446375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2471;\"PA\";\"Melgaço\";-50.714927;-1.803202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2472;\"PA\";\"Mocajuba\";-49.504224;-2.583098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2473;\"PA\";\"Moju\";-48.766765;-1.889926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2474;\"PA\";\"Monte Alegre\";-54.072386;-1.997679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2475;\"PA\";\"Muaná\";-49.222378;-1.539359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2464;\"PA\";\"Mãe do Rio\";-47.560144;-2.056833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2476;\"PA\";\"Nova Esperança do Piriá\";-46.97315;-2.266925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2477;\"PA\";\"Nova Ipixuna\";-49.082194;-4.916221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2478;\"PA\";\"Nova Timboteua\";-47.392062;-1.20874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2479;\"PA\";\"Novo Progresso\";-55.378591;-7.143465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2480;\"PA\";\"Novo Repartimento\";-49.949928;-4.247492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2482;\"PA\";\"Oeiras do Pará\";-49.862792;-2.003576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2483;\"PA\";\"Oriximiná\";-55.857937;-1.759888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2485;\"PA\";\"Ourilândia do Norte\";-51.085792;-6.752905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2484;\"PA\";\"Ourém\";-47.112649;-1.541676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2486;\"PA\";\"Pacajá\";-50.638625;-3.837314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2487;\"PA\";\"Palestina do Pará\";-48.318076;-5.740269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2488;\"PA\";\"Paragominas\";-47.352692;-3.002116"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2489;\"PA\";\"Parauapebas\";-49.903733;-6.067812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2490;\"PA\";\"Pau d`Arco\";-50.044;-7.833916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2491;\"PA\";\"Peixe-Boi\";-47.324031;-1.193824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2492;\"PA\";\"Piçarra\";-48.871633;-6.437783"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2493;\"PA\";\"Placas\";-54.212371;-3.868131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2494;\"PA\";\"Ponta de Pedras\";-48.866073;-1.395873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2495;\"PA\";\"Portel\";-50.81942;-1.936388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2496;\"PA\";\"Porto de Moz\";-52.236071;-1.746906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2497;\"PA\";\"Prainha\";-53.477903;-1.797999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2498;\"PA\";\"Primavera\";-47.12527;-0.945439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2499;\"PA\";\"Quatipuru\";-47.013434;-0.899604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2500;\"PA\";\"Redenção\";-50.031687;-8.025294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2501;\"PA\";\"Rio Maria\";-50.037875;-7.312358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2502;\"PA\";\"Rondon do Pará\";-48.066966;-4.777927"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2503;\"PA\";\"Rurópolis\";-54.909167;-4.100279"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2504;\"PA\";\"Salinópolis\";-47.346523;-0.630815"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2505;\"PA\";\"Salvaterra\";-48.513921;-0.758444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2506;\"PA\";\"Santa Bárbara do Pará\";-48.295101;-1.226144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2507;\"PA\";\"Santa Cruz do Arari\";-49.177139;-0.661019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2508;\"PA\";\"Santa Isabel do Pará\";-48.156622;-1.297847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2509;\"PA\";\"Santa Luzia do Pará\";-46.900829;-1.52147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2510;\"PA\";\"Santa Maria das Barreiras\";-49.721472;-8.857838"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2511;\"PA\";\"Santa Maria do Pará\";-47.571166;-1.353918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2512;\"PA\";\"Santana do Araguaia\";-50.350036;-9.328099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2513;\"PA\";\"Santarém\";-54.699611;-2.438489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2514;\"PA\";\"Santarém Novo\";-47.385457;-0.93097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2515;\"PA\";\"Santo Antônio do Tauá\";-48.131446;-1.1522"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2527;\"PA\";\"Sapucaia\";-49.683408;-6.940181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2528;\"PA\";\"Senador José Porfírio\";-51.948701;-2.585981"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2529;\"PA\";\"Soure\";-48.501536;-0.73032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2516;\"PA\";\"São Caetano de Odivelas\";-48.024622;-0.747293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2517;\"PA\";\"São Domingos do Araguaia\";-48.736649;-5.537324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2518;\"PA\";\"São Domingos do Capim\";-47.76646;-1.687684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2520;\"PA\";\"São Francisco do Pará\";-47.791676;-1.169632"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2519;\"PA\";\"São Félix do Xingu\";-51.990382;-6.642535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2521;\"PA\";\"São Geraldo do Araguaia\";-48.559169;-6.394715"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2522;\"PA\";\"São João da Ponta\";-47.918022;-0.857885"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2523;\"PA\";\"São João de Pirabas\";-47.181036;-0.780222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2524;\"PA\";\"São João do Araguaia\";-48.792637;-5.363336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2525;\"PA\";\"São Miguel do Guamá\";-47.478382;-1.613072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2526;\"PA\";\"São Sebastião da Boa Vista\";-49.524893;-1.715972"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2530;\"PA\";\"Tailândia\";-48.948873;-2.945839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2531;\"PA\";\"Terra Alta\";-47.900433;-1.029627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2532;\"PA\";\"Terra Santa\";-56.487653;-2.104435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2533;\"PA\";\"Tomé-Açu\";-48.1541;-2.418028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2534;\"PA\";\"Tracuateua\";-46.898131;-1.07427"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2535;\"PA\";\"Trairão\";-55.942859;-4.573474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2536;\"PA\";\"Tucumã\";-51.162613;-6.746874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2537;\"PA\";\"Tucuruí\";-49.677336;-3.765702"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2538;\"PA\";\"Ulianópolis\";-47.489239;-3.750074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2539;\"PA\";\"Uruará\";-53.739644;-3.715189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2540;\"PA\";\"Vigia\";-48.138649;-0.861194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2541;\"PA\";\"Viseu\";-46.139906;-1.19124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2542;\"PA\";\"Vitória do Xingu\";-52.008764;-2.879219"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2543;\"PA\";\"Xinguara\";-49.943672;-7.098301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2405;\"PA\";\"Água Azul do Norte\";-50.479068;-6.790534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2481;\"PA\";\"Óbidos\";-55.520812;-1.901072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2545;\"PB\";\"Aguiar\";-38.168059;-7.091802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2546;\"PB\";\"Alagoa Grande\";-35.620609;-7.039432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2547;\"PB\";\"Alagoa Nova\";-35.759065;-7.053772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2548;\"PB\";\"Alagoinha\";-35.533196;-6.946569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2549;\"PB\";\"Alcantil\";-36.051083;-7.736681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2550;\"PB\";\"Algodão de Jandaíra\";-36.012861;-6.892919"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2551;\"PB\";\"Alhandra\";-34.905662;-7.42977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2552;\"PB\";\"Amparo\";-37.062838;-7.555022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2553;\"PB\";\"Aparecida\";-38.080259;-6.784657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2555;\"PB\";\"Arara\";-35.75521;-6.828126"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2556;\"PB\";\"Araruna\";-35.7498;-6.548484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2554;\"PB\";\"Araçagi\";-35.373667;-6.843739"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2557;\"PB\";\"Areia\";-35.697731;-6.963965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2558;\"PB\";\"Areia de Baraúnas\";-36.940363;-7.117021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2559;\"PB\";\"Areial\";-35.931324;-7.047894"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2560;\"PB\";\"Aroeiras\";-35.706549;-7.544731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2561;\"PB\";\"Assunção\";-36.72504;-7.07231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2563;\"PB\";\"Bananeiras\";-35.624573;-6.747749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2564;\"PB\";\"Baraúna\";-36.260065;-6.634845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2566;\"PB\";\"Barra de Santa Rosa\";-36.067069;-6.718164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2565;\"PB\";\"Barra de Santana\";-35.991325;-7.518085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2567;\"PB\";\"Barra de São Miguel\";-36.320915;-7.746031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2568;\"PB\";\"Bayeux\";-34.929336;-7.123797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2562;\"PB\";\"Baía da Traição\";-34.93806;-6.692086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2569;\"PB\";\"Belém\";-35.51658;-6.742614"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2570;\"PB\";\"Belém do Brejo do Cruz\";-37.534763;-6.185146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2571;\"PB\";\"Bernardino Batista\";-38.552069;-6.445718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2572;\"PB\";\"Boa Ventura\";-38.211347;-7.409822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2573;\"PB\";\"Boa Vista\";-36.235706;-7.263653"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2574;\"PB\";\"Bom Jesus\";-38.645344;-6.81601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2575;\"PB\";\"Bom Sucesso\";-37.923409;-6.441761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2576;\"PB\";\"Bonito de Santa Fé\";-38.513335;-7.313407"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2577;\"PB\";\"Boqueirão\";-36.130887;-7.487004"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2578;\"PB\";\"Borborema\";-35.618728;-6.801995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2579;\"PB\";\"Brejo do Cruz\";-37.49434;-6.341853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2580;\"PB\";\"Brejo dos Santos\";-37.825311;-6.370652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2581;\"PB\";\"Caaporã\";-34.905514;-7.513508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2582;\"PB\";\"Cabaceiras\";-36.286981;-7.488991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2583;\"PB\";\"Cabedelo\";-34.828409;-6.987314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2584;\"PB\";\"Cachoeira dos Índios\";-38.67598;-6.913531"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2585;\"PB\";\"Cacimba de Areia\";-37.156288;-7.12128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2586;\"PB\";\"Cacimba de Dentro\";-35.777835;-6.638596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2587;\"PB\";\"Cacimbas\";-37.060429;-7.207212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2588;\"PB\";\"Caiçara\";-35.458127;-6.621151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2589;\"PB\";\"Cajazeiras\";-38.557722;-6.880044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2590;\"PB\";\"Cajazeirinhas\";-37.800929;-6.960164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2591;\"PB\";\"Caldas Brandão\";-35.327159;-7.1025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2592;\"PB\";\"Camalaú\";-36.824191;-7.885031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2593;\"PB\";\"Campina Grande\";-35.873144;-7.221958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2594;\"PB\";\"Campo de Santana\";-35.636707;-6.487585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2595;\"PB\";\"Capim\";-35.16725;-6.916244"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2596;\"PB\";\"Caraúbas\";-36.492046;-7.720487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2597;\"PB\";\"Carrapateira\";-38.339885;-7.034141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2598;\"PB\";\"Casserengue\";-35.817875;-6.779538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2599;\"PB\";\"Catingueira\";-37.60638;-7.120081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2600;\"PB\";\"Catolé do Rocha\";-37.746967;-6.340625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2601;\"PB\";\"Caturité\";-36.030589;-7.416586"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2602;\"PB\";\"Conceição\";-38.501437;-7.551063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2603;\"PB\";\"Condado\";-37.606036;-6.898312"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2604;\"PB\";\"Conde\";-34.899876;-7.257464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2605;\"PB\";\"Congo\";-36.658059;-7.790782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2606;\"PB\";\"Coremas\";-37.934638;-7.007124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2607;\"PB\";\"Coxixola\";-36.606441;-7.623653"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2608;\"PB\";\"Cruz do Espírito Santo\";-35.085721;-7.139022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2609;\"PB\";\"Cubati\";-36.361887;-6.866858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2612;\"PB\";\"Cuitegi\";-35.521529;-6.890577"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2610;\"PB\";\"Cuité\";-36.151456;-6.476466"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2611;\"PB\";\"Cuité de Mamanguape\";-35.250219;-6.912922"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2614;\"PB\";\"Curral Velho\";-38.196175;-7.530751"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2613;\"PB\";\"Curral de Cima\";-35.263934;-6.723248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2615;\"PB\";\"Damião\";-35.910136;-6.631607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2616;\"PB\";\"Desterro\";-37.092525;-7.286996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2617;\"PB\";\"Diamante\";-38.26151;-7.41738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2618;\"PB\";\"Dona Inês\";-35.620479;-6.615656"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2619;\"PB\";\"Duas Estradas\";-35.417976;-6.684988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2620;\"PB\";\"Emas\";-37.716276;-7.099635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2621;\"PB\";\"Esperança\";-35.859719;-7.022783"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2622;\"PB\";\"Fagundes\";-35.793128;-7.344537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2623;\"PB\";\"Frei Martinho\";-36.452628;-6.39759"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2624;\"PB\";\"Gado Bravo\";-35.789887;-7.582786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2625;\"PB\";\"Guarabira\";-35.484986;-6.850636"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2626;\"PB\";\"Gurinhém\";-35.422198;-7.1233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2627;\"PB\";\"Gurjão\";-36.492288;-7.248332"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2628;\"PB\";\"Ibiara\";-38.405918;-7.479567"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2629;\"PB\";\"Igaracy\";-38.147761;-7.17184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2630;\"PB\";\"Imaculada\";-37.507918;-7.388904"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2631;\"PB\";\"Ingá\";-35.605;-7.281444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2632;\"PB\";\"Itabaiana\";-35.331723;-7.331674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2633;\"PB\";\"Itaporanga\";-38.150442;-7.302021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2634;\"PB\";\"Itapororoca\";-35.240635;-6.823738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2635;\"PB\";\"Itatuba\";-35.637994;-7.381153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2636;\"PB\";\"Jacaraú\";-35.289032;-6.614526"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2637;\"PB\";\"Jericó\";-37.803641;-6.545769"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2638;\"PB\";\"João Pessoa\";-34.864121;-7.11509"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2639;\"PB\";\"Juarez Távora\";-35.568623;-7.171302"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2640;\"PB\";\"Juazeirinho\";-36.579316;-7.060924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2641;\"PB\";\"Junco do Seridó\";-36.716595;-6.992694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2642;\"PB\";\"Juripiranga\";-35.232143;-7.361759"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2643;\"PB\";\"Juru\";-37.815021;-7.529826"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2644;\"PB\";\"Lagoa\";-37.912745;-6.585723"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2646;\"PB\";\"Lagoa Seca\";-35.849111;-7.155349"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2645;\"PB\";\"Lagoa de Dentro\";-35.370641;-6.67213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2647;\"PB\";\"Lastro\";-38.174199;-6.506032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2648;\"PB\";\"Livramento\";-36.949116;-7.371127"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2649;\"PB\";\"Logradouro\";-35.438351;-6.611912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2650;\"PB\";\"Lucena\";-34.874769;-6.902578"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2652;\"PB\";\"Malta\";-37.522067;-6.89719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2653;\"PB\";\"Mamanguape\";-35.121316;-6.833698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2654;\"PB\";\"Manaíra\";-38.152292;-7.703313"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2655;\"PB\";\"Marcação\";-35.008661;-6.76535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2656;\"PB\";\"Mari\";-35.318044;-7.059424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2657;\"PB\";\"Marizópolis\";-38.35283;-6.827479"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2658;\"PB\";\"Massaranduba\";-35.784768;-7.18995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2659;\"PB\";\"Mataraca\";-35.05308;-6.59673"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2660;\"PB\";\"Matinhas\";-35.766922;-7.124856"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2661;\"PB\";\"Mato Grosso\";-37.727857;-6.540181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2662;\"PB\";\"Maturéia\";-37.350992;-7.261879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2663;\"PB\";\"Mogeiro\";-35.483182;-7.285169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2664;\"PB\";\"Montadas\";-35.959198;-7.088482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2665;\"PB\";\"Monte Horebe\";-38.583762;-7.204024"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2666;\"PB\";\"Monteiro\";-37.118419;-7.883626"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2667;\"PB\";\"Mulungu\";-35.460023;-7.025245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2651;\"PB\";\"Mãe d`Água\";-37.432211;-7.252009"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2668;\"PB\";\"Natuba\";-35.558629;-7.635142"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2669;\"PB\";\"Nazarezinho\";-38.322032;-6.911401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2670;\"PB\";\"Nova Floresta\";-36.205722;-6.450562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2671;\"PB\";\"Nova Olinda\";-38.038229;-7.472325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2672;\"PB\";\"Nova Palmeira\";-36.422023;-6.671221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2673;\"PB\";\"Olho d`Água\";-37.740569;-7.221175"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2674;\"PB\";\"Olivedos\";-36.241033;-6.984343"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2675;\"PB\";\"Ouro Velho\";-37.151857;-7.616037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2676;\"PB\";\"Parari\";-36.652248;-7.309751"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2677;\"PB\";\"Passagem\";-37.043302;-7.134667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2678;\"PB\";\"Patos\";-37.274702;-7.017427"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2679;\"PB\";\"Paulista\";-37.618548;-6.591381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2680;\"PB\";\"Pedra Branca\";-38.068882;-7.421694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2681;\"PB\";\"Pedra Lavrada\";-36.475813;-6.749974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2682;\"PB\";\"Pedras de Fogo\";-35.106464;-7.391069"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2683;\"PB\";\"Pedro Régis\";-35.296567;-6.633226"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2684;\"PB\";\"Piancó\";-37.92888;-7.192823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2685;\"PB\";\"Picuí\";-36.349704;-6.508451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2686;\"PB\";\"Pilar\";-35.252326;-7.264034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2687;\"PB\";\"Pilões\";-35.612974;-6.868269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2688;\"PB\";\"Pilõezinhos\";-35.531036;-6.842773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2689;\"PB\";\"Pirpirituba\";-35.490558;-6.779222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2690;\"PB\";\"Pitimbu\";-34.815133;-7.466398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2691;\"PB\";\"Pocinhos\";-36.066779;-7.06658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2694;\"PB\";\"Pombal\";-37.80027;-6.766059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2692;\"PB\";\"Poço Dantas\";-38.490908;-6.398763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2693;\"PB\";\"Poço de José de Moura\";-38.511054;-6.564011"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2695;\"PB\";\"Prata\";-37.080088;-7.688261"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2696;\"PB\";\"Princesa Isabel\";-37.988647;-7.731747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2697;\"PB\";\"Puxinanã\";-35.954301;-7.154793"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2698;\"PB\";\"Queimadas\";-35.903136;-7.350288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2699;\"PB\";\"Quixabá\";-37.145833;-7.022398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2700;\"PB\";\"Remígio\";-35.801124;-6.949918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2704;\"PB\";\"Riacho de Santo Antônio\";-36.157018;-7.680234"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2705;\"PB\";\"Riacho dos Cavalos\";-37.648339;-6.44067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2701;\"PB\";\"Riachão\";-35.660966;-6.542688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2702;\"PB\";\"Riachão do Bacamarte\";-35.669257;-7.253472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2703;\"PB\";\"Riachão do Poço\";-35.291431;-7.141726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2706;\"PB\";\"Rio Tinto\";-35.077569;-6.803828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2707;\"PB\";\"Salgadinho\";-36.845776;-7.100984"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2708;\"PB\";\"Salgado de São Félix\";-35.43048;-7.353375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2709;\"PB\";\"Santa Cecília\";-35.876375;-7.738901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2710;\"PB\";\"Santa Cruz\";-38.061748;-6.5237"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2711;\"PB\";\"Santa Helena\";-38.6427;-6.7176"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2712;\"PB\";\"Santa Inês\";-38.553995;-7.620999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2713;\"PB\";\"Santa Luzia\";-36.917792;-6.860922"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2717;\"PB\";\"Santa Rita\";-34.975295;-7.117242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2718;\"PB\";\"Santa Teresinha\";-37.443533;-7.079637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2714;\"PB\";\"Santana de Mangueira\";-38.323633;-7.547048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2715;\"PB\";\"Santana dos Garrotes\";-37.981885;-7.381615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2716;\"PB\";\"Santarém\";-38.476393;-6.48362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2719;\"PB\";\"Santo André\";-36.621339;-7.220157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2742;\"PB\";\"Sapé\";-35.227975;-7.093591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2744;\"PB\";\"Serra Branca\";-36.666003;-7.480344"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2746;\"PB\";\"Serra Grande\";-38.364696;-7.209574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2747;\"PB\";\"Serra Redonda\";-35.684195;-7.186216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2745;\"PB\";\"Serra da Raiz\";-35.437868;-6.685274"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2748;\"PB\";\"Serraria\";-35.628233;-6.815693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2749;\"PB\";\"Sertãozinho\";-35.437159;-6.751273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2750;\"PB\";\"Sobrado\";-35.23574;-7.144288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2752;\"PB\";\"Soledade\";-36.366791;-7.058292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2751;\"PB\";\"Solânea\";-35.663568;-6.751606"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2753;\"PB\";\"Sossêgo\";-36.25382;-6.77067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2754;\"PB\";\"Sousa\";-38.231059;-6.751484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2755;\"PB\";\"Sumé\";-36.883972;-7.66206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2720;\"PB\";\"São Bentinho\";-37.724345;-6.885961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2721;\"PB\";\"São Bento\";-37.448835;-6.485286"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2722;\"PB\";\"São Domingos\";-37.928347;-6.812336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2723;\"PB\";\"São Domingos do Cariri\";-36.437398;-7.632733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2724;\"PB\";\"São Francisco\";-38.096799;-6.607728"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2728;\"PB\";\"São José da Lagoa Tapada\";-38.162174;-6.936459"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2729;\"PB\";\"São José de Caiana\";-38.298928;-7.246359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2730;\"PB\";\"São José de Espinharas\";-37.321433;-6.839736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2731;\"PB\";\"São José de Piranhas\";-38.50198;-7.118704"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2732;\"PB\";\"São José de Princesa\";-38.089432;-7.736329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2733;\"PB\";\"São José do Bonfim\";-37.303625;-7.160695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2734;\"PB\";\"São José do Brejo do Cruz\";-37.360063;-6.210543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2735;\"PB\";\"São José do Sabugi\";-36.797204;-6.762945"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2736;\"PB\";\"São José dos Cordeiros\";-36.808494;-7.387749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2737;\"PB\";\"São José dos Ramos\";-35.372536;-7.252384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2725;\"PB\";\"São João do Cariri\";-36.534457;-7.381683"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2726;\"PB\";\"São João do Rio do Peixe\";-38.446829;-6.721951"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2727;\"PB\";\"São João do Tigre\";-36.85472;-8.077026"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2738;\"PB\";\"São Mamede\";-37.095436;-6.923862"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2739;\"PB\";\"São Miguel de Taipu\";-35.20163;-7.247643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2740;\"PB\";\"São Sebastião de Lagoa de Roça\";-35.867807;-7.11034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2741;\"PB\";\"São Sebastião do Umbuzeiro\";-37.013841;-8.152887"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2743;\"PB\";\"São Vicente do Seridó\";-36.412223;-6.854255"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2756;\"PB\";\"Taperoá\";-36.824499;-7.206294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2757;\"PB\";\"Tavares\";-37.871208;-7.626971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2758;\"PB\";\"Teixeira\";-37.252477;-7.221036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2759;\"PB\";\"Tenório\";-36.627336;-6.938546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2760;\"PB\";\"Triunfo\";-38.598579;-6.571305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2761;\"PB\";\"Uiraúna\";-38.412754;-6.515044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2762;\"PB\";\"Umbuzeiro\";-35.658233;-7.691993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2764;\"PB\";\"Vieirópolis\";-38.256666;-6.506845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2765;\"PB\";\"Vista Serrana\";-37.570358;-6.730298"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2763;\"PB\";\"Várzea\";-36.991287;-6.761887"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2766;\"PB\";\"Zabelê\";-37.105676;-8.079012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2544;\"PB\";\"Água Branca\";-37.635703;-7.511441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2767;\"PE\";\"Abreu e Lima\";-34.898389;-7.900719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2768;\"PE\";\"Afogados da Ingazeira\";-37.630991;-7.743121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2769;\"PE\";\"Afrânio\";-41.009544;-8.511358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2770;\"PE\";\"Agrestina\";-35.944725;-8.459657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2773;\"PE\";\"Alagoinha\";-36.778767;-8.466504"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2774;\"PE\";\"Aliança\";-35.222696;-7.60398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2775;\"PE\";\"Altinho\";-36.064408;-8.48482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2776;\"PE\";\"Amaraji\";-35.450051;-8.376914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2777;\"PE\";\"Angelim\";-36.290174;-8.884289"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2779;\"PE\";\"Araripina\";-40.494025;-7.570733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2778;\"PE\";\"Araçoiaba\";-35.080897;-7.783911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2780;\"PE\";\"Arcoverde\";-37.057748;-8.415192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2781;\"PE\";\"Barra de Guabiraba\";-35.658544;-8.420751"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2782;\"PE\";\"Barreiros\";-35.183178;-8.816052"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2785;\"PE\";\"Belo Jardim\";-36.425822;-8.3313"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2783;\"PE\";\"Belém de Maria\";-35.83347;-8.625038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2784;\"PE\";\"Belém de São Francisco\";-38.962255;-8.75046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2786;\"PE\";\"Betânia\";-38.03454;-8.267867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2787;\"PE\";\"Bezerros\";-35.795995;-8.232796"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2788;\"PE\";\"Bodocó\";-39.933797;-7.777592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2789;\"PE\";\"Bom Conselho\";-36.685683;-9.169191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2790;\"PE\";\"Bom Jardim\";-35.578391;-7.796947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2791;\"PE\";\"Bonito\";-35.729249;-8.471628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2793;\"PE\";\"Brejinho\";-37.286493;-7.34694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2794;\"PE\";\"Brejo da Madre de Deus\";-36.374142;-8.149333"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2792;\"PE\";\"Brejão\";-36.566034;-9.029146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2795;\"PE\";\"Buenos Aires\";-35.318197;-7.724488"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2796;\"PE\";\"Buíque\";-37.160564;-8.619539"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2797;\"PE\";\"Cabo de Santo Agostinho\";-35.025293;-8.28218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2798;\"PE\";\"Cabrobó\";-39.309384;-8.505484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2799;\"PE\";\"Cachoeirinha\";-36.240182;-8.486685"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2800;\"PE\";\"Caetés\";-36.626828;-8.780301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2802;\"PE\";\"Calumbi\";-38.148244;-7.935515"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2801;\"PE\";\"Calçado\";-36.336554;-8.731081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2803;\"PE\";\"Camaragibe\";-34.978152;-8.023505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2804;\"PE\";\"Camocim de São Félix\";-35.765332;-8.358649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2805;\"PE\";\"Camutanga\";-35.26636;-7.405449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2806;\"PE\";\"Canhotinho\";-36.197935;-8.876519"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2807;\"PE\";\"Capoeiras\";-36.630566;-8.734225"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2809;\"PE\";\"Carnaubeira da Penha\";-38.751155;-8.317994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2808;\"PE\";\"Carnaíba\";-37.794584;-7.793421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2810;\"PE\";\"Carpina\";-35.251397;-7.84566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2811;\"PE\";\"Caruaru\";-35.969863;-8.284547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2812;\"PE\";\"Casinhas\";-35.720635;-7.740839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2813;\"PE\";\"Catende\";-35.702386;-8.675086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2814;\"PE\";\"Cedro\";-39.236733;-7.71179"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2816;\"PE\";\"Chã Grande\";-35.457148;-8.238271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2815;\"PE\";\"Chã de Alegria\";-35.204002;-8.006795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2817;\"PE\";\"Condado\";-35.09994;-7.587868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2818;\"PE\";\"Correntes\";-36.324435;-9.121174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2819;\"PE\";\"Cortês\";-35.546789;-8.474434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2820;\"PE\";\"Cumaru\";-35.695748;-8.008266"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2821;\"PE\";\"Cupira\";-35.951835;-8.624324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2822;\"PE\";\"Custódia\";-37.64428;-8.08546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2823;\"PE\";\"Dormentes\";-40.766168;-8.441163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2824;\"PE\";\"Escada\";-35.224082;-8.356717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2825;\"PE\";\"Exu\";-39.723789;-7.50364"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2826;\"PE\";\"Feira Nova\";-35.38013;-7.947042"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2827;\"PE\";\"Fernando de Noronha\";-32.410733;-3.839601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2828;\"PE\";\"Ferreiros\";-35.237252;-7.446664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2829;\"PE\";\"Flores\";-37.971511;-7.85842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2830;\"PE\";\"Floresta\";-38.568675;-8.603066"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2831;\"PE\";\"Frei Miguelinho\";-35.911283;-7.939179"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2832;\"PE\";\"Gameleira\";-35.384573;-8.579803"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2833;\"PE\";\"Garanhuns\";-36.496567;-8.882434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2834;\"PE\";\"Glória do Goitá\";-35.29044;-8.005675"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2835;\"PE\";\"Goiana\";-34.99591;-7.560603"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2836;\"PE\";\"Granito\";-39.615034;-7.707105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2837;\"PE\";\"Gravatá\";-35.567458;-8.211184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2838;\"PE\";\"Iati\";-36.849763;-9.045586"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2839;\"PE\";\"Ibimirim\";-37.703214;-8.54026"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2840;\"PE\";\"Ibirajuba\";-36.181151;-8.576331"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2841;\"PE\";\"Igarassu\";-34.901306;-7.82881"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2842;\"PE\";\"Iguaraci\";-37.508199;-7.832221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2849;\"PE\";\"Ilha de Itamaracá\";-34.830319;-7.747664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2843;\"PE\";\"Inajá\";-37.835124;-8.902058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2844;\"PE\";\"Ingazeira\";-37.457575;-7.669089"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2845;\"PE\";\"Ipojuca\";-35.060864;-8.393034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2846;\"PE\";\"Ipubi\";-40.147571;-7.645048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2847;\"PE\";\"Itacuruba\";-38.697504;-8.822306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2850;\"PE\";\"Itambé\";-35.096266;-7.414027"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2851;\"PE\";\"Itapetim\";-37.186266;-7.371777"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2852;\"PE\";\"Itapissuma\";-34.897136;-7.767983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2853;\"PE\";\"Itaquitinga\";-35.100231;-7.663729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2848;\"PE\";\"Itaíba\";-37.417266;-8.945688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2854;\"PE\";\"Jaboatão dos Guararapes\";-35.014959;-8.112982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2855;\"PE\";\"Jaqueira\";-35.794232;-8.726183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2856;\"PE\";\"Jataúba\";-36.494292;-7.976684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2857;\"PE\";\"Jatobá\";-38.260651;-9.174761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2859;\"PE\";\"Joaquim Nabuco\";-35.528814;-8.62281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2858;\"PE\";\"João Alfredo\";-35.578715;-7.865649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2860;\"PE\";\"Jucati\";-36.487137;-8.701945"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2861;\"PE\";\"Jupi\";-36.412644;-8.709041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2862;\"PE\";\"Jurema\";-36.134739;-8.707135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2867;\"PE\";\"Lagoa Grande\";-40.276732;-8.994525"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2863;\"PE\";\"Lagoa do Carro\";-35.310783;-7.843834"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2864;\"PE\";\"Lagoa do Itaenga\";-35.287387;-7.930053"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2865;\"PE\";\"Lagoa do Ouro\";-36.458373;-9.125668"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2866;\"PE\";\"Lagoa dos Gatos\";-35.903976;-8.660205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2868;\"PE\";\"Lajedo\";-36.329336;-8.657914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2869;\"PE\";\"Limoeiro\";-35.440154;-7.872599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2870;\"PE\";\"Macaparana\";-35.44246;-7.555638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2871;\"PE\";\"Machados\";-35.511376;-7.688274"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2872;\"PE\";\"Manari\";-37.631298;-8.964901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2873;\"PE\";\"Maraial\";-35.82663;-8.790624"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2874;\"PE\";\"Mirandiba\";-38.738841;-8.121131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2875;\"PE\";\"Moreilândia\";-39.545999;-7.619314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2876;\"PE\";\"Moreno\";-35.08354;-8.108706"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2877;\"PE\";\"Nazaré da Mata\";-35.219297;-7.741491"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2878;\"PE\";\"Olinda\";-34.854504;-8.010166"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2879;\"PE\";\"Orobó\";-35.595568;-7.745535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2880;\"PE\";\"Orocó\";-39.602631;-8.610258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2881;\"PE\";\"Ouricuri\";-40.079983;-7.879184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2882;\"PE\";\"Palmares\";-35.589032;-8.684226"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2883;\"PE\";\"Palmeirina\";-36.324202;-9.010896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2884;\"PE\";\"Panelas\";-36.012539;-8.661211"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2885;\"PE\";\"Paranatama\";-36.654905;-8.91875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2886;\"PE\";\"Parnamirim\";-39.579547;-8.087292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2887;\"PE\";\"Passira\";-35.581261;-7.997102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2888;\"PE\";\"Paudalho\";-35.171639;-7.90287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2889;\"PE\";\"Paulista\";-34.868407;-7.934007"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2890;\"PE\";\"Pedra\";-36.939962;-8.496411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2891;\"PE\";\"Pesqueira\";-36.697783;-8.357974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2893;\"PE\";\"Petrolina\";-40.502731;-9.388662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2892;\"PE\";\"Petrolândia\";-38.302664;-9.068627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2895;\"PE\";\"Pombos\";-35.396732;-8.139816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2894;\"PE\";\"Poção\";-36.711137;-8.187258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2896;\"PE\";\"Primavera\";-35.354378;-8.329987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2897;\"PE\";\"Quipapá\";-36.013665;-8.811752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2898;\"PE\";\"Quixaba\";-37.84458;-7.707339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2899;\"PE\";\"Recife\";-34.877065;-8.046658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2900;\"PE\";\"Riacho das Almas\";-35.864796;-8.137417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2901;\"PE\";\"Ribeirão\";-35.369824;-8.509568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2902;\"PE\";\"Rio Formoso\";-35.153212;-8.659196"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2903;\"PE\";\"Sairé\";-35.696737;-8.328638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2904;\"PE\";\"Salgadinho\";-35.650288;-7.926901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2905;\"PE\";\"Salgueiro\";-39.12469;-8.073734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2906;\"PE\";\"Saloá\";-36.691031;-8.972301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2907;\"PE\";\"Sanharó\";-36.569598;-8.360969"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2908;\"PE\";\"Santa Cruz\";-40.343368;-8.241534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2909;\"PE\";\"Santa Cruz da Baixa Verde\";-38.14756;-7.81339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2910;\"PE\";\"Santa Cruz do Capibaribe\";-36.206092;-7.948019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2911;\"PE\";\"Santa Filomena\";-40.607854;-8.166877"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2912;\"PE\";\"Santa Maria da Boa Vista\";-39.824056;-8.797655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2913;\"PE\";\"Santa Maria do Cambucá\";-35.894138;-7.83676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2914;\"PE\";\"Santa Terezinha\";-37.47875;-7.37696"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2925;\"PE\";\"Serra Talhada\";-38.289034;-7.981778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2926;\"PE\";\"Serrita\";-39.295062;-7.940406"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2927;\"PE\";\"Sertânia\";-37.268393;-8.068467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2928;\"PE\";\"Sirinhaém\";-35.11259;-8.587782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2929;\"PE\";\"Solidão\";-37.644494;-7.594717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2930;\"PE\";\"Surubim\";-35.748102;-7.847456"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2915;\"PE\";\"São Benedito do Sul\";-35.945346;-8.816603"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2916;\"PE\";\"São Bento do Una\";-36.446469;-8.52637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2917;\"PE\";\"São Caitano\";-36.144077;-8.329239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2919;\"PE\";\"São Joaquim do Monte\";-35.803498;-8.431962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2920;\"PE\";\"São José da Coroa Grande\";-35.151461;-8.889375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2921;\"PE\";\"São José do Belmonte\";-38.757689;-7.857235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2922;\"PE\";\"São José do Egito\";-37.273974;-7.469447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2918;\"PE\";\"São João\";-36.36532;-8.875762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2923;\"PE\";\"São Lourenço da Mata\";-35.012359;-8.00684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2924;\"PE\";\"São Vicente Ferrer\";-35.480844;-7.589691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2931;\"PE\";\"Tabira\";-37.537735;-7.583661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2932;\"PE\";\"Tacaimbó\";-36.300035;-8.308673"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2933;\"PE\";\"Tacaratu\";-38.150401;-9.097976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2934;\"PE\";\"Tamandaré\";-35.103285;-8.756646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2935;\"PE\";\"Taquaritinga do Norte\";-36.042265;-7.894457"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2936;\"PE\";\"Terezinha\";-36.627236;-9.056208"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2937;\"PE\";\"Terra Nova\";-39.382482;-8.222436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2938;\"PE\";\"Timbaúba\";-35.311884;-7.504835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2939;\"PE\";\"Toritama\";-36.063659;-8.009546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2940;\"PE\";\"Tracunhaém\";-35.231421;-7.802284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2941;\"PE\";\"Trindade\";-40.26472;-7.759"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2942;\"PE\";\"Triunfo\";-38.097776;-7.832719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2943;\"PE\";\"Tupanatinga\";-37.344532;-8.747984"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2944;\"PE\";\"Tuparetama\";-37.31653;-7.6003"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2945;\"PE\";\"Venturosa\";-36.874187;-8.578855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2946;\"PE\";\"Verdejante\";-38.970083;-7.922353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2947;\"PE\";\"Vertente do Lério\";-35.849054;-7.770844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2948;\"PE\";\"Vertentes\";-35.968143;-7.901581"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2949;\"PE\";\"Vicência\";-35.31395;-7.656549"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2950;\"PE\";\"Vitória de Santo Antão\";-35.29762;-8.128191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2951;\"PE\";\"Xexéu\";-35.621222;-8.804601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2771;\"PE\";\"Água Preta\";-35.526311;-8.706095"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2772;\"PE\";\"Águas Belas\";-37.122619;-9.111255"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2952;\"PI\";\"Acauã\";-41.083059;-8.219542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2953;\"PI\";\"Agricolândia\";-42.666371;-5.796763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2955;\"PI\";\"Alagoinha do Piauí\";-40.92817;-7.000392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2956;\"PI\";\"Alegrete do Piauí\";-40.856587;-7.241964"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2957;\"PI\";\"Alto Longá\";-42.209582;-5.256341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2958;\"PI\";\"Altos\";-42.46116;-5.038879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2959;\"PI\";\"Alvorada do Gurguéia\";-43.777016;-8.424183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2960;\"PI\";\"Amarante\";-42.843343;-6.243045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2961;\"PI\";\"Angical do Piauí\";-42.740047;-6.087864"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2963;\"PI\";\"Antônio Almeida\";-44.188929;-7.212759"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2962;\"PI\";\"Anísio de Abreu\";-43.04941;-9.185643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2964;\"PI\";\"Aroazes\";-41.78218;-6.110221"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5626;\"PI\";\"Aroeiras do Itaim\";-41.564868;-7.276906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2965;\"PI\";\"Arraial\";-42.541809;-6.650753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2966;\"PI\";\"Assunção do Piauí\";-41.038851;-5.864996"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2967;\"PI\";\"Avelino Lopes\";-43.956305;-10.134487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2968;\"PI\";\"Baixa Grande do Ribeiro\";-45.218977;-7.849031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2969;\"PI\";\"Barra d`Alcântara\";-42.114609;-6.516453"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2970;\"PI\";\"Barras\";-42.292161;-4.244675"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2971;\"PI\";\"Barreiras do Piauí\";-45.470172;-9.929605"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2972;\"PI\";\"Barro Duro\";-42.514656;-5.816732"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2973;\"PI\";\"Batalha\";-42.07868;-4.0223"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2974;\"PI\";\"Bela Vista do Piauí\";-41.867522;-7.988091"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2975;\"PI\";\"Belém do Piauí\";-40.968786;-7.366524"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2976;\"PI\";\"Beneditinos\";-42.36382;-5.456758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2977;\"PI\";\"Bertolínia\";-43.949778;-7.633377"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2978;\"PI\";\"Betânia do Piauí\";-40.79891;-8.143761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2979;\"PI\";\"Boa Hora\";-42.135748;-4.414041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2980;\"PI\";\"Bocaina\";-41.316752;-6.941236"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2981;\"PI\";\"Bom Jesus\";-44.358951;-9.071239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2982;\"PI\";\"Bom Princípio do Piauí\";-41.640333;-3.196314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2983;\"PI\";\"Bonfim do Piauí\";-42.886482;-9.160502"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2984;\"PI\";\"Boqueirão do Piauí\";-42.121232;-4.481806"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2985;\"PI\";\"Brasileira\";-41.785855;-4.133696"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2986;\"PI\";\"Brejo do Piauí\";-42.822917;-8.20314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2987;\"PI\";\"Buriti dos Lopes\";-41.869481;-3.182592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2988;\"PI\";\"Buriti dos Montes\";-41.093349;-5.30584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2989;\"PI\";\"Cabeceiras do Piauí\";-42.306889;-4.4773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2990;\"PI\";\"Cajazeiras do Piauí\";-42.390278;-6.796667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2991;\"PI\";\"Cajueiro da Praia\";-41.340801;-2.931114"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2992;\"PI\";\"Caldeirão Grande do Piauí\";-40.6366;-7.331404"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2993;\"PI\";\"Campinas do Piauí\";-41.877487;-7.659299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2994;\"PI\";\"Campo Alegre do Fidalgo\";-41.834399;-8.382357"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2995;\"PI\";\"Campo Grande do Piauí\";-41.031486;-7.128274"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2996;\"PI\";\"Campo Largo do Piauí\";-42.639991;-3.804411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2997;\"PI\";\"Campo Maior\";-42.164124;-4.821697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2998;\"PI\";\"Canavieira\";-43.72333;-7.688215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2999;\"PI\";\"Canto do Buriti\";-42.951721;-8.111101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3001;\"PI\";\"Capitão Gervásio Oliveira\";-41.813973;-8.496548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3000;\"PI\";\"Capitão de Campos\";-41.943999;-4.457"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3002;\"PI\";\"Caracol\";-43.328998;-9.279333"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3003;\"PI\";\"Caraúbas do Piauí\";-41.842517;-3.475249"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3004;\"PI\";\"Caridade do Piauí\";-40.984763;-7.734349"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3005;\"PI\";\"Castelo do Piauí\";-41.549865;-5.318693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3006;\"PI\";\"Caxingó\";-41.895476;-3.419044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3007;\"PI\";\"Cocal\";-41.554623;-3.472792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3008;\"PI\";\"Cocal de Telha\";-41.958668;-4.557098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3009;\"PI\";\"Cocal dos Alves\";-41.440197;-3.620471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3010;\"PI\";\"Coivaras\";-42.207951;-5.092242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3011;\"PI\";\"Colônia do Gurguéia\";-43.793999;-8.183697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3012;\"PI\";\"Colônia do Piauí\";-42.175555;-7.226512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3013;\"PI\";\"Conceição do Canindé\";-41.594193;-7.876378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3014;\"PI\";\"Coronel José Dias\";-42.523195;-8.813971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3015;\"PI\";\"Corrente\";-45.163348;-10.433349"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3016;\"PI\";\"Cristalândia do Piauí\";-45.189262;-10.644311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3017;\"PI\";\"Cristino Castro\";-44.222972;-8.822731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3018;\"PI\";\"Curimatá\";-44.3002;-10.032608"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3019;\"PI\";\"Currais\";-44.406194;-9.011755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3021;\"PI\";\"Curral Novo do Piauí\";-40.895704;-7.831302"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3020;\"PI\";\"Curralinhos\";-42.837602;-5.608252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3022;\"PI\";\"Demerval Lobão\";-42.677583;-5.358752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3023;\"PI\";\"Dirceu Arcoverde\";-42.434792;-9.339386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3024;\"PI\";\"Dom Expedito Lopes\";-41.639632;-6.953319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3026;\"PI\";\"Dom Inocêncio\";-41.969733;-9.005158"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3025;\"PI\";\"Domingos Mourão\";-41.268267;-4.249498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3027;\"PI\";\"Elesbão Veloso\";-42.135458;-6.199475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3028;\"PI\";\"Eliseu Martins\";-43.670481;-8.096286"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3029;\"PI\";\"Esperantina\";-42.232422;-3.888631"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3030;\"PI\";\"Fartura do Piauí\";-42.791176;-9.48342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3031;\"PI\";\"Flores do Piauí\";-42.918009;-7.787931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3032;\"PI\";\"Floresta do Piauí\";-41.788328;-7.466821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3033;\"PI\";\"Floriano\";-43.024136;-6.771821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3034;\"PI\";\"Francinópolis\";-42.259062;-6.393341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3035;\"PI\";\"Francisco Ayres\";-42.688149;-6.626064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3036;\"PI\";\"Francisco Macedo\";-40.787999;-7.331"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3037;\"PI\";\"Francisco Santos\";-41.128789;-6.994914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3038;\"PI\";\"Fronteiras\";-40.614601;-7.081727"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3039;\"PI\";\"Geminiano\";-41.340879;-7.154759"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3040;\"PI\";\"Gilbués\";-45.342267;-9.830008"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3041;\"PI\";\"Guadalupe\";-43.559441;-6.782848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3042;\"PI\";\"Guaribas\";-43.694341;-9.386465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3043;\"PI\";\"Hugo Napoleão\";-42.559755;-5.988597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3044;\"PI\";\"Ilha Grande\";-41.81858;-2.857737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3045;\"PI\";\"Inhuma\";-41.704127;-6.665001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3046;\"PI\";\"Ipiranga do Piauí\";-41.738086;-6.824215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3047;\"PI\";\"Isaías Coelho\";-41.673495;-7.735968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3048;\"PI\";\"Itainópolis\";-41.468713;-7.443357"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3049;\"PI\";\"Itaueira\";-43.0249;-7.59989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3050;\"PI\";\"Jacobina do Piauí\";-41.207506;-7.930634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3051;\"PI\";\"Jaicós\";-41.137126;-7.362286"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3052;\"PI\";\"Jardim do Mulato\";-42.629999;-6.099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3053;\"PI\";\"Jatobá do Piauí\";-41.816965;-4.770254"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3054;\"PI\";\"Jerumenha\";-43.503319;-7.09128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3056;\"PI\";\"Joaquim Pires\";-42.186462;-3.501636"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3057;\"PI\";\"Joca Marques\";-42.425517;-3.480399"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3058;\"PI\";\"José de Freitas\";-42.574586;-4.751458"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3055;\"PI\";\"João Costa\";-42.426379;-8.50736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3059;\"PI\";\"Juazeiro do Piauí\";-41.697561;-5.174589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3061;\"PI\";\"Jurema\";-43.133676;-9.219924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3060;\"PI\";\"Júlio Borges\";-44.238142;-10.32253"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3062;\"PI\";\"Lagoa Alegre\";-42.630876;-4.515394"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3063;\"PI\";\"Lagoa de São Francisco\";-41.596883;-4.385053"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3064;\"PI\";\"Lagoa do Barro do Piauí\";-41.5342;-8.476734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3065;\"PI\";\"Lagoa do Piauí\";-42.643659;-5.418639"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3066;\"PI\";\"Lagoa do Sítio\";-41.565304;-6.507664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3067;\"PI\";\"Lagoinha do Piauí\";-42.622325;-5.830742"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3068;\"PI\";\"Landri Sales\";-43.936418;-7.259218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3070;\"PI\";\"Luzilândia\";-42.371757;-3.468296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3069;\"PI\";\"Luís Correia\";-41.664142;-2.88438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3071;\"PI\";\"Madeiro\";-42.498072;-3.486245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3072;\"PI\";\"Manoel Emídio\";-43.87549;-8.01234"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3073;\"PI\";\"Marcolândia\";-40.660179;-7.441691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3074;\"PI\";\"Marcos Parente\";-43.892602;-7.115649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3075;\"PI\";\"Massapê do Piauí\";-41.110323;-7.474687"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3076;\"PI\";\"Matias Olímpio\";-42.550654;-3.714917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3077;\"PI\";\"Miguel Alves\";-42.896301;-4.168575"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3078;\"PI\";\"Miguel Leão\";-42.743594;-5.68077"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3079;\"PI\";\"Milton Brandão\";-41.417343;-4.682946"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3080;\"PI\";\"Monsenhor Gil\";-42.607493;-5.561999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3081;\"PI\";\"Monsenhor Hipólito\";-41.026003;-6.992754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3082;\"PI\";\"Monte Alegre do Piauí\";-45.303735;-9.753638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3083;\"PI\";\"Morro Cabeça no Tempo\";-43.907246;-9.718905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3084;\"PI\";\"Morro do Chapéu do Piauí\";-42.302442;-3.733374"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3085;\"PI\";\"Murici dos Portelas\";-42.094;-3.319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3086;\"PI\";\"Nazaré do Piauí\";-42.677316;-6.970235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5676;\"PI\";\"Nazária\";-42.811532;-5.352268"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3087;\"PI\";\"Nossa Senhora de Nazaré\";-42.172954;-4.630188"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3088;\"PI\";\"Nossa Senhora dos Remédios\";-42.618408;-3.975744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3089;\"PI\";\"Nova Santa Rita\";-42.047127;-8.097073"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3090;\"PI\";\"Novo Oriente do Piauí\";-41.926124;-6.44901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3091;\"PI\";\"Novo Santo Antônio\";-41.932533;-5.287487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3092;\"PI\";\"Oeiras\";-42.128298;-7.019153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3093;\"PI\";\"Olho d`Água do Piauí\";-42.559392;-5.841246"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3094;\"PI\";\"Padre Marcos\";-40.899665;-7.351011"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3095;\"PI\";\"Paes Landim\";-42.247444;-7.773745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3096;\"PI\";\"Pajeú do Piauí\";-42.82481;-7.855085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3097;\"PI\";\"Palmeira do Piauí\";-44.246618;-8.730761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3098;\"PI\";\"Palmeirais\";-43.056021;-5.970864"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3099;\"PI\";\"Paquetá\";-41.700031;-7.103031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3100;\"PI\";\"Parnaguá\";-44.630018;-10.216642"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3101;\"PI\";\"Parnaíba\";-41.775388;-2.905847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3102;\"PI\";\"Passagem Franca do Piauí\";-42.44363;-5.860365"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3103;\"PI\";\"Patos do Piauí\";-41.240817;-7.67231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5625;\"PI\";\"Pau D`Arco do Piauí\";-42.390809;-5.260721"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3104;\"PI\";\"Paulistana\";-41.143072;-8.134357"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3105;\"PI\";\"Pavussu\";-43.228438;-7.96059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3106;\"PI\";\"Pedro II\";-41.448184;-4.425845"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3107;\"PI\";\"Pedro Laurentino\";-42.284744;-8.068068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3108;\"PI\";\"Picos\";-41.467003;-7.077213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3109;\"PI\";\"Pimenteiras\";-41.411273;-6.238391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3110;\"PI\";\"Pio IX\";-40.608301;-6.830017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3111;\"PI\";\"Piracuruca\";-41.708779;-3.93335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3112;\"PI\";\"Piripiri\";-41.771569;-4.271574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3113;\"PI\";\"Porto\";-42.69982;-3.888154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3114;\"PI\";\"Porto Alegre do Piauí\";-44.183668;-6.964228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3115;\"PI\";\"Prata do Piauí\";-42.204644;-5.672653"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3116;\"PI\";\"Queimada Nova\";-41.410614;-8.570637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3117;\"PI\";\"Redenção do Gurguéia\";-44.581145;-9.479368"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3118;\"PI\";\"Regeneração\";-42.684193;-6.23115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3119;\"PI\";\"Riacho Frio\";-44.950326;-10.124378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3120;\"PI\";\"Ribeira do Piauí\";-42.712778;-7.690278"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3121;\"PI\";\"Ribeiro Gonçalves\";-45.244737;-7.556505"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3122;\"PI\";\"Rio Grande do Piauí\";-43.136886;-7.780291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3123;\"PI\";\"Santa Cruz do Piauí\";-41.760932;-7.178499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3124;\"PI\";\"Santa Cruz dos Milagres\";-41.950644;-5.805808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3125;\"PI\";\"Santa Filomena\";-45.911607;-9.112278"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3126;\"PI\";\"Santa Luz\";-44.129567;-8.948795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3128;\"PI\";\"Santa Rosa do Piauí\";-42.281375;-6.79581"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3127;\"PI\";\"Santana do Piauí\";-41.517767;-6.946961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3129;\"PI\";\"Santo Antônio de Lisboa\";-41.225202;-6.986762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3130;\"PI\";\"Santo Antônio dos Milagres\";-42.712322;-6.046473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3131;\"PI\";\"Santo Inácio do Piauí\";-41.906252;-7.42072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3155;\"PI\";\"Sebastião Barros\";-44.833718;-10.816978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3156;\"PI\";\"Sebastião Leal\";-44.059982;-7.568029"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3157;\"PI\";\"Sigefredo Pacheco\";-41.731123;-4.916647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3159;\"PI\";\"Simplício Mendes\";-41.907533;-7.852944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3158;\"PI\";\"Simões\";-40.813731;-7.591095"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3160;\"PI\";\"Socorro do Piauí\";-42.492179;-7.86773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3161;\"PI\";\"Sussuapara\";-41.376699;-7.036868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3132;\"PI\";\"São Braz do Piauí\";-43.007646;-9.057967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3134;\"PI\";\"São Francisco de Assis do Piauí\";-41.681028;-8.239207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3135;\"PI\";\"São Francisco do Piauí\";-42.54101;-7.246299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3133;\"PI\";\"São Félix do Piauí\";-42.117179;-5.934853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3136;\"PI\";\"São Gonçalo do Gurguéia\";-45.309219;-10.03195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3137;\"PI\";\"São Gonçalo do Piauí\";-42.709537;-5.993934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3144;\"PI\";\"São José do Divino\";-41.830793;-3.814114"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3145;\"PI\";\"São José do Peixe\";-42.567162;-7.485535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3146;\"PI\";\"São José do Piauí\";-41.47311;-6.87194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3138;\"PI\";\"São João da Canabrava\";-41.341483;-6.812029"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3139;\"PI\";\"São João da Fronteira\";-41.256921;-3.954975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3140;\"PI\";\"São João da Serra\";-41.892309;-5.510805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3141;\"PI\";\"São João da Varjota\";-41.888912;-6.940817"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3142;\"PI\";\"São João do Arraial\";-42.44586;-3.818597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3143;\"PI\";\"São João do Piauí\";-42.255898;-8.354661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3147;\"PI\";\"São Julião\";-40.824638;-7.083906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3148;\"PI\";\"São Lourenço do Piauí\";-42.549552;-9.164633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3149;\"PI\";\"São Luis do Piauí\";-41.317454;-6.819363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3150;\"PI\";\"São Miguel da Baixa Grande\";-42.193423;-5.856457"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3151;\"PI\";\"São Miguel do Fidalgo\";-42.367591;-7.597133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3152;\"PI\";\"São Miguel do Tapuio\";-41.316451;-5.497291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3153;\"PI\";\"São Pedro do Piauí\";-42.719211;-5.92078"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3154;\"PI\";\"São Raimundo Nonato\";-42.698659;-9.012412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3162;\"PI\";\"Tamboril do Piauí\";-42.921107;-8.409369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3163;\"PI\";\"Tanque do Piauí\";-42.279515;-6.597869"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3164;\"PI\";\"Teresina\";-42.803364;-5.091944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3165;\"PI\";\"União\";-42.858285;-4.585709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3166;\"PI\";\"Uruçuí\";-44.557683;-7.239439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3167;\"PI\";\"Valença do Piauí\";-41.737498;-6.403013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3170;\"PI\";\"Vera Mendes\";-41.467336;-7.597481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3171;\"PI\";\"Vila Nova do Piauí\";-40.934514;-7.132718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3168;\"PI\";\"Várzea Branca\";-42.969221;-9.238003"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3169;\"PI\";\"Várzea Grande\";-42.247973;-6.548993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3172;\"PI\";\"Wall Ferraz\";-41.905037;-7.231511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "2954;\"PI\";\"Água Branca\";-42.636961;-5.888564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3173;\"PR\";\"Abatiá\";-50.313281;-23.304863"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3174;\"PR\";\"Adrianópolis\";-48.992164;-24.660607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3175;\"PR\";\"Agudos do Sul\";-49.334293;-25.9899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3176;\"PR\";\"Almirante Tamandaré\";-49.303733;-25.318819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3177;\"PR\";\"Altamira do Paraná\";-52.712829;-24.798293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3179;\"PR\";\"Alto Paraná\";-52.318893;-23.131247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3567;\"PR\";\"Alto Paraíso\";-53.728537;-23.508137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3180;\"PR\";\"Alto Piquiri\";-53.440045;-24.022427"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3178;\"PR\";\"Altônia\";-53.895809;-23.875916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3181;\"PR\";\"Alvorada do Sul\";-51.229709;-22.781282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3182;\"PR\";\"Amaporã\";-52.786597;-23.094272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3183;\"PR\";\"Ampére\";-53.46864;-25.916791"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3184;\"PR\";\"Anahy\";-53.133235;-24.644865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3185;\"PR\";\"Andirá\";-50.230359;-23.053267"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3187;\"PR\";\"Antonina\";-48.719113;-25.438597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3188;\"PR\";\"Antônio Olinto\";-50.197183;-25.98038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3189;\"PR\";\"Apucarana\";-51.463486;-23.549961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3190;\"PR\";\"Arapongas\";-51.42592;-23.415296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3191;\"PR\";\"Arapoti\";-49.828453;-24.154798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3192;\"PR\";\"Arapuã\";-51.785637;-24.313181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3193;\"PR\";\"Araruna\";-52.502101;-23.9315"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3194;\"PR\";\"Araucária\";-49.404748;-25.585939"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3195;\"PR\";\"Ariranha do Ivaí\";-51.583935;-24.385708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3196;\"PR\";\"Assaí\";-50.845925;-23.369679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3197;\"PR\";\"Assis Chateaubriand\";-53.521327;-24.416826"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3198;\"PR\";\"Astorga\";-51.666777;-23.231827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3199;\"PR\";\"Atalaia\";-52.055096;-23.151721"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3200;\"PR\";\"Balsa Nova\";-49.629079;-25.58037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3201;\"PR\";\"Bandeirantes\";-50.370407;-23.107788"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3202;\"PR\";\"Barbosa Ferraz\";-52.003963;-24.033382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3204;\"PR\";\"Barra do Jacaré\";-50.184162;-23.116041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3203;\"PR\";\"Barracão\";-53.632385;-26.25023"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3205;\"PR\";\"Bela Vista da Caroba\";-53.672505;-25.884179"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3206;\"PR\";\"Bela Vista do Paraíso\";-51.192657;-22.993653"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3207;\"PR\";\"Bituruna\";-51.551792;-26.160746"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3208;\"PR\";\"Boa Esperança\";-52.78756;-24.246738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3209;\"PR\";\"Boa Esperança do Iguaçu\";-53.210818;-25.632435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3210;\"PR\";\"Boa Ventura de São Roque\";-51.627612;-24.868797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3211;\"PR\";\"Boa Vista da Aparecida\";-53.411694;-25.430755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3212;\"PR\";\"Bocaiúva do Sul\";-49.114131;-25.206591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3213;\"PR\";\"Bom Jesus do Sul\";-53.595493;-26.195802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3214;\"PR\";\"Bom Sucesso\";-51.767056;-23.706313"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3215;\"PR\";\"Bom Sucesso do Sul\";-52.835297;-26.073113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3216;\"PR\";\"Borrazópolis\";-51.587507;-23.936607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3217;\"PR\";\"Braganey\";-53.121787;-24.81734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3218;\"PR\";\"Brasilândia do Sul\";-53.527527;-24.197762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3219;\"PR\";\"Cafeara\";-51.714195;-22.78905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3220;\"PR\";\"Cafelândia\";-53.320705;-24.618862"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3221;\"PR\";\"Cafezal do Sul\";-53.512418;-23.900508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3222;\"PR\";\"Califórnia\";-51.357367;-23.656587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3223;\"PR\";\"Cambará\";-50.075281;-23.042273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3225;\"PR\";\"Cambira\";-51.579152;-23.589018"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3224;\"PR\";\"Cambé\";-51.279832;-23.276575"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3228;\"PR\";\"Campina Grande do Sul\";-49.055096;-25.30439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3226;\"PR\";\"Campina da Lagoa\";-52.79759;-24.589323"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3227;\"PR\";\"Campina do Simão\";-51.82371;-25.080171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3229;\"PR\";\"Campo Bonito\";-52.993933;-25.029445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3231;\"PR\";\"Campo Largo\";-49.529026;-25.452535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3232;\"PR\";\"Campo Magro\";-49.450092;-25.368685"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3233;\"PR\";\"Campo Mourão\";-52.37802;-24.046329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3230;\"PR\";\"Campo do Tenente\";-49.684364;-25.980014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3235;\"PR\";\"Candói\";-52.040876;-25.575847"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3236;\"PR\";\"Cantagalo\";-52.119818;-25.373359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3237;\"PR\";\"Capanema\";-53.805508;-25.669099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3238;\"PR\";\"Capitão Leônidas Marques\";-53.611238;-25.481645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3239;\"PR\";\"Carambeí\";-50.098624;-24.915237"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3240;\"PR\";\"Carlópolis\";-49.723486;-23.426897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3241;\"PR\";\"Cascavel\";-53.459005;-24.957301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3242;\"PR\";\"Castro\";-50.010767;-24.789086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3243;\"PR\";\"Catanduvas\";-53.154826;-25.204356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3244;\"PR\";\"Centenário do Sul\";-51.597268;-22.818764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3245;\"PR\";\"Cerro Azul\";-49.253626;-24.822128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3247;\"PR\";\"Chopinzinho\";-52.517293;-25.851546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3248;\"PR\";\"Cianorte\";-52.605444;-23.659859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3249;\"PR\";\"Cidade Gaúcha\";-52.943575;-23.377186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3250;\"PR\";\"Clevelândia\";-52.350794;-26.404288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3251;\"PR\";\"Colombo\";-49.22616;-25.292487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3252;\"PR\";\"Colorado\";-51.974301;-22.837422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3253;\"PR\";\"Congonhinhas\";-50.556872;-23.54931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3254;\"PR\";\"Conselheiro Mairinck\";-50.170803;-23.626382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3255;\"PR\";\"Contenda\";-49.535044;-25.678811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3256;\"PR\";\"Corbélia\";-53.300576;-24.797122"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3257;\"PR\";\"Cornélio Procópio\";-50.64977;-23.182911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3258;\"PR\";\"Coronel Domingos Soares\";-52.03565;-26.227684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3259;\"PR\";\"Coronel Vivida\";-52.564054;-25.976686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3260;\"PR\";\"Corumbataí do Sul\";-52.11766;-24.100956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3264;\"PR\";\"Cruz Machado\";-51.342965;-26.01664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3261;\"PR\";\"Cruzeiro do Iguaçu\";-53.128484;-25.619214"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3262;\"PR\";\"Cruzeiro do Oeste\";-53.077442;-23.779943"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3263;\"PR\";\"Cruzeiro do Sul\";-52.16221;-22.96244"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3265;\"PR\";\"Cruzmaltina\";-51.456331;-24.013218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3266;\"PR\";\"Curitiba\";-49.264622;-25.419547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3267;\"PR\";\"Curiúva\";-50.457638;-24.036168"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3234;\"PR\";\"Cândido de Abreu\";-51.33719;-24.564895"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3246;\"PR\";\"Céu Azul\";-53.841473;-25.148876"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3268;\"PR\";\"Diamante d`Oeste\";-54.105157;-24.941858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3269;\"PR\";\"Diamante do Norte\";-52.861662;-22.654967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3270;\"PR\";\"Diamante do Sul\";-52.676782;-25.035007"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3271;\"PR\";\"Dois Vizinhos\";-53.057016;-25.740694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3272;\"PR\";\"Douradina\";-53.291794;-23.38072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3273;\"PR\";\"Doutor Camargo\";-52.21781;-23.558152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3274;\"PR\";\"Doutor Ulysses\";-49.421931;-24.566546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3276;\"PR\";\"Engenheiro Beltrão\";-52.265877;-23.797028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3277;\"PR\";\"Entre Rios do Oeste\";-54.238507;-24.70421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3275;\"PR\";\"Enéas Marques\";-53.16586;-25.944525"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3278;\"PR\";\"Esperança Nova\";-53.810979;-23.723782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3279;\"PR\";\"Espigão Alto do Iguaçu\";-52.834798;-25.421635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3280;\"PR\";\"Farol\";-52.621693;-24.095842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3281;\"PR\";\"Faxinal\";-51.322665;-24.007671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3282;\"PR\";\"Fazenda Rio Grande\";-49.30731;-25.662354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3284;\"PR\";\"Fernandes Pinheiro\";-50.545601;-25.410742"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3285;\"PR\";\"Figueira\";-50.403068;-23.845542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3287;\"PR\";\"Flor da Serra do Sul\";-53.309213;-26.252326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3286;\"PR\";\"Floraí\";-52.302885;-23.317808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3288;\"PR\";\"Floresta\";-52.080656;-23.603054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3289;\"PR\";\"Florestópolis\";-51.388157;-22.862263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3290;\"PR\";\"Flórida\";-51.954559;-23.084703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3291;\"PR\";\"Formosa do Oeste\";-53.311378;-24.295097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3292;\"PR\";\"Foz do Iguaçu\";-54.582689;-25.542748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3293;\"PR\";\"Foz do Jordão\";-52.118829;-25.737094"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3294;\"PR\";\"Francisco Alves\";-53.846124;-24.066725"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3295;\"PR\";\"Francisco Beltrão\";-53.053466;-26.081677"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3283;\"PR\";\"Fênix\";-51.980522;-23.913547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3296;\"PR\";\"General Carneiro\";-51.317224;-26.424974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3297;\"PR\";\"Godoy Moreira\";-51.924636;-24.17298"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3298;\"PR\";\"Goioerê\";-53.024842;-24.183481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3299;\"PR\";\"Goioxim\";-51.991091;-25.192652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3300;\"PR\";\"Grandes Rios\";-51.509378;-24.146606"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3302;\"PR\";\"Guairaçá\";-52.690625;-22.931978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3303;\"PR\";\"Guamiranga\";-50.802109;-25.191167"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3304;\"PR\";\"Guapirama\";-50.040699;-23.52035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3305;\"PR\";\"Guaporema\";-52.778605;-23.340218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3306;\"PR\";\"Guaraci\";-51.650406;-22.969426"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3307;\"PR\";\"Guaraniaçu\";-52.875531;-25.096822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3308;\"PR\";\"Guarapuava\";-51.462317;-25.390237"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3309;\"PR\";\"Guaraqueçaba\";-48.320426;-25.307056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3310;\"PR\";\"Guaratuba\";-48.575223;-25.881672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3301;\"PR\";\"Guaíra\";-54.257327;-24.085005"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3311;\"PR\";\"Honório Serpa\";-52.384839;-26.139021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3312;\"PR\";\"Ibaiti\";-50.193208;-23.847822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3313;\"PR\";\"Ibema\";-53.014616;-25.111335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3314;\"PR\";\"Ibiporã\";-51.052243;-23.265941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3315;\"PR\";\"Icaraíma\";-53.614979;-23.394354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3316;\"PR\";\"Iguaraçu\";-51.825552;-23.194896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3317;\"PR\";\"Iguatu\";-53.082724;-24.715277"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3318;\"PR\";\"Imbaú\";-50.753269;-24.44801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3319;\"PR\";\"Imbituva\";-50.598856;-25.228538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3321;\"PR\";\"Inajá\";-52.199499;-22.750929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3322;\"PR\";\"Indianópolis\";-52.698865;-23.476234"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3320;\"PR\";\"Inácio Martins\";-51.076925;-25.570395"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3323;\"PR\";\"Ipiranga\";-50.579378;-25.023769"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3324;\"PR\";\"Iporã\";-53.706031;-24.008349"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3325;\"PR\";\"Iracema do Oeste\";-53.35279;-24.426155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3326;\"PR\";\"Irati\";-50.649287;-25.469663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3327;\"PR\";\"Iretama\";-52.101161;-24.42529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3328;\"PR\";\"Itaguajé\";-51.967351;-22.618282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3329;\"PR\";\"Itaipulândia\";-54.300102;-25.136623"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3330;\"PR\";\"Itambaracá\";-50.409654;-23.018113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3331;\"PR\";\"Itambé\";-51.991236;-23.660056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3332;\"PR\";\"Itapejara d`Oeste\";-52.813823;-25.96203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3333;\"PR\";\"Itaperuçu\";-49.345427;-25.21926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3334;\"PR\";\"Itaúna do Sul\";-52.887395;-22.728942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3336;\"PR\";\"Ivaiporã\";-51.675426;-24.248533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3338;\"PR\";\"Ivatuba\";-52.220272;-23.618722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3337;\"PR\";\"Ivaté\";-53.368705;-23.407206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3335;\"PR\";\"Ivaí\";-50.857041;-25.006734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3339;\"PR\";\"Jaboti\";-50.072904;-23.743502"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3340;\"PR\";\"Jacarezinho\";-49.973889;-23.159115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3341;\"PR\";\"Jaguapitã\";-51.534195;-23.110388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3342;\"PR\";\"Jaguariaíva\";-49.706642;-24.24389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3343;\"PR\";\"Jandaia do Sul\";-51.644819;-23.601089"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3344;\"PR\";\"Janiópolis\";-52.77836;-24.140124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3345;\"PR\";\"Japira\";-50.142211;-23.814227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3346;\"PR\";\"Japurá\";-52.55572;-23.469273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3347;\"PR\";\"Jardim Alegre\";-51.690197;-24.180913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3348;\"PR\";\"Jardim Olinda\";-52.050298;-22.552255"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3349;\"PR\";\"Jataizinho\";-50.977748;-23.257815"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3350;\"PR\";\"Jesuítas\";-53.38492;-24.383918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3351;\"PR\";\"Joaquim Távora\";-49.908998;-23.498654"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3352;\"PR\";\"Jundiaí do Sul\";-50.249579;-23.435671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3353;\"PR\";\"Juranda\";-52.841344;-24.420866"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3354;\"PR\";\"Jussara\";-52.46931;-23.621931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3355;\"PR\";\"Kaloré\";-51.668709;-23.818835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3356;\"PR\";\"Lapa\";-49.716777;-25.76709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3357;\"PR\";\"Laranjal\";-52.470041;-24.886153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3358;\"PR\";\"Laranjeiras do Sul\";-52.410854;-25.407672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3359;\"PR\";\"Leópolis\";-50.751085;-23.081781"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3360;\"PR\";\"Lidianópolis\";-51.650629;-24.10997"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3361;\"PR\";\"Lindoeste\";-53.573298;-25.259616"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3362;\"PR\";\"Loanda\";-53.136216;-22.923194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3363;\"PR\";\"Lobato\";-51.952419;-23.005782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3364;\"PR\";\"Londrina\";-51.1691;-23.303975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3365;\"PR\";\"Luiziana\";-52.269022;-24.285284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3366;\"PR\";\"Lunardelli\";-51.736783;-24.082055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3367;\"PR\";\"Lupionópolis\";-51.660085;-22.754987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3368;\"PR\";\"Mallet\";-50.817346;-25.880588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3369;\"PR\";\"Mamborê\";-52.527119;-24.316951"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3371;\"PR\";\"Mandaguari\";-51.671027;-23.54459"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3370;\"PR\";\"Mandaguaçu\";-52.094369;-23.345766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3372;\"PR\";\"Mandirituba\";-49.328225;-25.777036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3373;\"PR\";\"Manfrinópolis\";-53.315257;-26.147968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3374;\"PR\";\"Mangueirinha\";-52.174275;-25.942102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3375;\"PR\";\"Manoel Ribas\";-51.665822;-24.514363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3376;\"PR\";\"Marechal Cândido Rondon\";-54.056115;-24.557891"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3377;\"PR\";\"Maria Helena\";-53.205333;-23.615754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3378;\"PR\";\"Marialva\";-51.792802;-23.484316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3380;\"PR\";\"Marilena\";-53.040239;-22.733552"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3381;\"PR\";\"Mariluz\";-53.143242;-24.008888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3379;\"PR\";\"Marilândia do Sul\";-51.313737;-23.742534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3382;\"PR\";\"Maringá\";-51.933298;-23.420545"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3384;\"PR\";\"Maripá\";-53.828641;-24.419978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3383;\"PR\";\"Mariópolis\";-52.549736;-26.351072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3385;\"PR\";\"Marmeleiro\";-53.026741;-26.1472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3386;\"PR\";\"Marquinho\";-52.249676;-25.112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3387;\"PR\";\"Marumbi\";-51.640374;-23.705764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3388;\"PR\";\"Matelândia\";-53.993492;-25.249571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3389;\"PR\";\"Matinhos\";-48.549012;-25.823655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3390;\"PR\";\"Mato Rico\";-52.14544;-24.699538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3391;\"PR\";\"Mauá da Serra\";-51.227732;-23.898761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3392;\"PR\";\"Medianeira\";-54.094308;-25.297665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3393;\"PR\";\"Mercedes\";-54.161826;-24.453791"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3394;\"PR\";\"Mirador\";-52.776081;-23.254951"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3395;\"PR\";\"Miraselva\";-51.484606;-22.965663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3396;\"PR\";\"Missal\";-54.247664;-25.091855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3397;\"PR\";\"Moreira Sales\";-53.00564;-24.052657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3398;\"PR\";\"Morretes\";-48.834533;-25.474365"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3399;\"PR\";\"Munhoz de Melo\";-51.773162;-23.14601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3400;\"PR\";\"Nossa Senhora das Graças\";-51.797764;-22.912926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3401;\"PR\";\"Nova Aliança do Ivaí\";-52.603244;-23.176271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3402;\"PR\";\"Nova América da Colina\";-50.716821;-23.330772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3403;\"PR\";\"Nova Aurora\";-53.257449;-24.528859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3404;\"PR\";\"Nova Cantu\";-52.566078;-24.672324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3405;\"PR\";\"Nova Esperança\";-52.203139;-23.18202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3406;\"PR\";\"Nova Esperança do Sudoeste\";-53.26524;-25.90607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3407;\"PR\";\"Nova Fátima\";-50.566507;-23.432447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3408;\"PR\";\"Nova Laranjeiras\";-52.544682;-25.305376"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3409;\"PR\";\"Nova Londrina\";-52.98677;-22.763931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3410;\"PR\";\"Nova Olímpia\";-53.089799;-23.470252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3411;\"PR\";\"Nova Prata do Iguaçu\";-53.346862;-25.630908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3412;\"PR\";\"Nova Santa Bárbara\";-50.759798;-23.586534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3413;\"PR\";\"Nova Santa Rosa\";-53.955249;-24.469293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3414;\"PR\";\"Nova Tebas\";-51.945357;-24.437958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3415;\"PR\";\"Novo Itacolomi\";-51.50789;-23.76308"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3416;\"PR\";\"Ortigueira\";-50.918508;-24.205811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3417;\"PR\";\"Ourizona\";-52.19638;-23.405342"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3418;\"PR\";\"Ouro Verde do Oeste\";-53.904303;-24.793258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3419;\"PR\";\"Paiçandu\";-52.046013;-23.455534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3420;\"PR\";\"Palmas\";-51.988812;-26.483868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3421;\"PR\";\"Palmeira\";-50.007027;-25.425716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3422;\"PR\";\"Palmital\";-52.202854;-24.885301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3423;\"PR\";\"Palotina\";-53.840422;-24.286784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3425;\"PR\";\"Paranacity\";-52.154946;-22.929713"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3426;\"PR\";\"Paranaguá\";-48.522528;-25.516078"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3427;\"PR\";\"Paranapoema\";-52.09052;-22.64124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3428;\"PR\";\"Paranavaí\";-52.461724;-23.08165"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3424;\"PR\";\"Paraíso do Norte\";-52.605429;-23.28242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3429;\"PR\";\"Pato Bragado\";-54.228115;-24.624625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3430;\"PR\";\"Pato Branco\";-52.67063;-26.229237"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3431;\"PR\";\"Paula Freitas\";-50.930983;-26.210513"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3432;\"PR\";\"Paulo Frontin\";-50.830423;-26.046565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3433;\"PR\";\"Peabiru\";-52.343107;-23.914013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3434;\"PR\";\"Perobal\";-53.409838;-23.894861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3438;\"PR\";\"Pinhais\";-49.19267;-25.442949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3440;\"PR\";\"Pinhal de São Bento\";-53.481998;-26.032422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3439;\"PR\";\"Pinhalão\";-50.053571;-23.798176"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3441;\"PR\";\"Pinhão\";-51.653595;-25.694388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3443;\"PR\";\"Piraquara\";-49.062411;-25.442171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3442;\"PR\";\"Piraí do Sul\";-49.943312;-24.530637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3444;\"PR\";\"Pitanga\";-51.759645;-24.758773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3445;\"PR\";\"Pitangueiras\";-51.587277;-23.228134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3437;\"PR\";\"Piên\";-49.433565;-26.09647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3446;\"PR\";\"Planaltina do Paraná\";-52.916242;-23.010146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3447;\"PR\";\"Planalto\";-53.764234;-25.721135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3448;\"PR\";\"Ponta Grossa\";-50.166787;-25.091622"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3449;\"PR\";\"Pontal do Paraná\";-48.511062;-25.673533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3450;\"PR\";\"Porecatu\";-51.37949;-22.753724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3451;\"PR\";\"Porto Amazonas\";-49.894591;-25.540002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3452;\"PR\";\"Porto Barreiro\";-52.406744;-25.547696"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3453;\"PR\";\"Porto Rico\";-53.267731;-22.774742"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3454;\"PR\";\"Porto Vitória\";-51.230976;-26.167404"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3455;\"PR\";\"Prado Ferreira\";-51.442883;-23.035698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3456;\"PR\";\"Pranchita\";-53.741112;-26.021968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3457;\"PR\";\"Presidente Castelo Branco\";-52.153563;-23.278233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3458;\"PR\";\"Primeiro de Maio\";-51.029251;-22.851714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3459;\"PR\";\"Prudentópolis\";-50.975396;-25.211083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3435;\"PR\";\"Pérola\";-53.683353;-23.803898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3436;\"PR\";\"Pérola d`Oeste\";-53.744742;-25.820958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3460;\"PR\";\"Quarto Centenário\";-53.075884;-24.277499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3461;\"PR\";\"Quatiguá\";-49.91601;-23.567056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3462;\"PR\";\"Quatro Barras\";-49.076306;-25.367317"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3463;\"PR\";\"Quatro Pontes\";-53.975885;-24.575152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3464;\"PR\";\"Quedas do Iguaçu\";-52.910231;-25.449161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3465;\"PR\";\"Querência do Norte\";-53.483022;-23.083758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3466;\"PR\";\"Quinta do Sol\";-52.130908;-23.853272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3467;\"PR\";\"Quitandinha\";-49.497327;-25.873438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3468;\"PR\";\"Ramilândia\";-54.023015;-25.119472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3469;\"PR\";\"Rancho Alegre\";-50.914453;-23.067594"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3470;\"PR\";\"Rancho Alegre d`Oeste\";-52.949883;-24.303548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3471;\"PR\";\"Realeza\";-53.52603;-25.771093"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3472;\"PR\";\"Rebouças\";-50.687727;-25.623198"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3473;\"PR\";\"Renascença\";-52.970349;-26.158837"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3474;\"PR\";\"Reserva\";-50.846604;-24.649169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3475;\"PR\";\"Reserva do Iguaçu\";-52.027215;-25.831905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3476;\"PR\";\"Ribeirão Claro\";-49.759742;-23.194132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3477;\"PR\";\"Ribeirão do Pinhal\";-50.360145;-23.409068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3478;\"PR\";\"Rio Azul\";-50.798543;-25.73058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3479;\"PR\";\"Rio Bom\";-51.41224;-23.760583"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3480;\"PR\";\"Rio Bonito do Iguaçu\";-52.529206;-25.487384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3481;\"PR\";\"Rio Branco do Ivaí\";-51.318684;-24.324449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3482;\"PR\";\"Rio Branco do Sul\";-49.311546;-25.189189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3483;\"PR\";\"Rio Negro\";-49.79823;-26.095021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3484;\"PR\";\"Rolândia\";-51.365928;-23.31012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3485;\"PR\";\"Roncador\";-52.271569;-24.595795"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3486;\"PR\";\"Rondon\";-52.765877;-23.411958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3487;\"PR\";\"Rosário do Ivaí\";-51.272007;-24.26824"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3488;\"PR\";\"Sabáudia\";-51.555005;-23.315512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3489;\"PR\";\"Salgado Filho\";-53.363116;-26.177664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3490;\"PR\";\"Salto do Itararé\";-49.635384;-23.607356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3491;\"PR\";\"Salto do Lontra\";-53.313528;-25.781257"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3492;\"PR\";\"Santa Amélia\";-50.428765;-23.265421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3493;\"PR\";\"Santa Cecília do Pavão\";-50.783528;-23.520081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3494;\"PR\";\"Santa Cruz de Monte Castelo\";-53.296342;-22.954225"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3495;\"PR\";\"Santa Fé\";-51.808014;-23.039993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3496;\"PR\";\"Santa Helena\";-54.33601;-24.858494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3497;\"PR\";\"Santa Inês\";-51.902385;-22.637595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3498;\"PR\";\"Santa Isabel do Ivaí\";-53.19889;-23.002482"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3499;\"PR\";\"Santa Izabel do Oeste\";-53.480146;-25.821652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3500;\"PR\";\"Santa Lúcia\";-53.563796;-25.410355"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3501;\"PR\";\"Santa Maria do Oeste\";-51.869564;-24.937701"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3502;\"PR\";\"Santa Mariana\";-50.516728;-23.14652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3503;\"PR\";\"Santa Mônica\";-53.110297;-23.108005"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3505;\"PR\";\"Santa Tereza do Oeste\";-53.627417;-25.054316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3506;\"PR\";\"Santa Terezinha de Itaipu\";-54.400725;-25.434417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3504;\"PR\";\"Santana do Itararé\";-49.629314;-23.758692"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3507;\"PR\";\"Santo Antônio da Platina\";-50.081478;-23.295889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3508;\"PR\";\"Santo Antônio do Caiuá\";-52.344022;-22.735084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3509;\"PR\";\"Santo Antônio do Paraíso\";-50.645541;-23.496903"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3510;\"PR\";\"Santo Antônio do Sudoeste\";-53.7251;-26.073708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3511;\"PR\";\"Santo Inácio\";-51.796937;-22.695666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3532;\"PR\";\"Sapopema\";-50.580062;-23.907832"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3533;\"PR\";\"Sarandi\";-51.876016;-23.444117"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3534;\"PR\";\"Saudade do Iguaçu\";-52.618391;-25.691686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3535;\"PR\";\"Sengés\";-49.461568;-24.112884"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3536;\"PR\";\"Serranópolis do Iguaçu\";-54.051822;-25.379915"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3537;\"PR\";\"Sertaneja\";-50.831656;-23.036095"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3538;\"PR\";\"Sertanópolis\";-51.039948;-23.057057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3539;\"PR\";\"Siqueira Campos\";-49.830416;-23.687481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3540;\"PR\";\"Sulina\";-52.729869;-25.706553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3512;\"PR\";\"São Carlos do Ivaí\";-52.476143;-23.315828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3513;\"PR\";\"São Jerônimo da Serra\";-50.747536;-23.721765"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3518;\"PR\";\"São Jorge d`Oeste\";-52.913092;-25.699002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3519;\"PR\";\"São Jorge do Ivaí\";-52.292907;-23.433592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3520;\"PR\";\"São Jorge do Patrocínio\";-53.882275;-23.764744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3521;\"PR\";\"São José da Boa Vista\";-49.657667;-23.912195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3522;\"PR\";\"São José das Palmeiras\";-54.057225;-24.836883"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3523;\"PR\";\"São José dos Pinhais\";-49.203097;-25.531343"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3514;\"PR\";\"São João\";-52.72524;-25.821375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3515;\"PR\";\"São João do Caiuá\";-52.341065;-22.853502"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3516;\"PR\";\"São João do Ivaí\";-51.821544;-23.983281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3517;\"PR\";\"São João do Triunfo\";-50.29492;-25.682971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3524;\"PR\";\"São Manoel do Paraná\";-52.645376;-23.394137"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3525;\"PR\";\"São Mateus do Sul\";-50.383985;-25.867655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3526;\"PR\";\"São Miguel do Iguaçu\";-54.240498;-25.349171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3527;\"PR\";\"São Pedro do Iguaçu\";-53.852141;-24.937311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3528;\"PR\";\"São Pedro do Ivaí\";-51.856775;-23.863394"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3529;\"PR\";\"São Pedro do Paraná\";-53.224141;-22.823882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3530;\"PR\";\"São Sebastião da Amoreira\";-50.762536;-23.46564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3531;\"PR\";\"São Tomé\";-52.590125;-23.534946"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3541;\"PR\";\"Tamarana\";-51.099054;-23.720365"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3542;\"PR\";\"Tamboara\";-52.474272;-23.203558"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3543;\"PR\";\"Tapejara\";-52.873487;-23.731462"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3544;\"PR\";\"Tapira\";-53.068446;-23.319343"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3545;\"PR\";\"Teixeira Soares\";-50.457072;-25.3701"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3546;\"PR\";\"Telêmaco Borba\";-50.617585;-24.32452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3547;\"PR\";\"Terra Boa\";-52.447002;-23.768329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3548;\"PR\";\"Terra Rica\";-52.61878;-22.711101"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3549;\"PR\";\"Terra Roxa\";-54.098816;-24.157455"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3550;\"PR\";\"Tibagi\";-50.417587;-24.515316"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3551;\"PR\";\"Tijucas do Sul\";-49.195017;-25.931054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3552;\"PR\";\"Toledo\";-53.741177;-24.724641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3553;\"PR\";\"Tomazina\";-49.949948;-23.77962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3554;\"PR\";\"Três Barras do Paraná\";-53.18335;-25.418517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3555;\"PR\";\"Tunas do Paraná\";-49.087889;-24.973084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3556;\"PR\";\"Tuneiras do Oeste\";-52.876874;-23.864798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3557;\"PR\";\"Tupãssi\";-53.51051;-24.587887"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3558;\"PR\";\"Turvo\";-51.528223;-25.043671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3559;\"PR\";\"Ubiratã\";-52.986485;-24.539292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3560;\"PR\";\"Umuarama\";-53.32011;-23.765634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3562;\"PR\";\"Uniflor\";-52.157307;-23.08683"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3561;\"PR\";\"União da Vitória\";-51.087313;-26.227319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3563;\"PR\";\"Uraí\";-50.793873;-23.199997"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3564;\"PR\";\"Ventania\";-50.237577;-24.24582"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3565;\"PR\";\"Vera Cruz do Oeste\";-53.877096;-25.057688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3566;\"PR\";\"Verê\";-52.905108;-25.877201"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3568;\"PR\";\"Virmond\";-52.198715;-25.382911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3569;\"PR\";\"Vitorino\";-52.784266;-26.268282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3570;\"PR\";\"Wenceslau Braz\";-49.803201;-23.874217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3571;\"PR\";\"Xambrê\";-53.48843;-23.736409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3186;\"PR\";\"Ângulo\";-51.915356;-23.194609"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3572;\"RJ\";\"Angra dos Reis\";-44.31956;-23.001074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3573;\"RJ\";\"Aperibé\";-42.101661;-21.625231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3574;\"RJ\";\"Araruama\";-42.332625;-22.869651"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3575;\"RJ\";\"Areal\";-43.111784;-22.228308"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3576;\"RJ\";\"Armação dos Búzios\";-41.884559;-22.752846"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3577;\"RJ\";\"Arraial do Cabo\";-42.026715;-22.977448"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3579;\"RJ\";\"Barra Mansa\";-44.175241;-22.548084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3578;\"RJ\";\"Barra do Piraí\";-43.826918;-22.471531"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3580;\"RJ\";\"Belford Roxo\";-43.39921;-22.764042"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3581;\"RJ\";\"Bom Jardim\";-42.425095;-22.154526"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3582;\"RJ\";\"Bom Jesus do Itabapoana\";-41.682222;-21.144851"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3583;\"RJ\";\"Cabo Frio\";-42.028595;-22.88943"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3584;\"RJ\";\"Cachoeiras de Macacu\";-42.652346;-22.465802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3585;\"RJ\";\"Cambuci\";-41.918723;-21.569058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3586;\"RJ\";\"Campos dos Goytacazes\";-41.318055;-21.762171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3587;\"RJ\";\"Cantagalo\";-42.366425;-21.979736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3588;\"RJ\";\"Carapebus\";-41.66301;-22.182112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3589;\"RJ\";\"Cardoso Moreira\";-41.616496;-21.484595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3590;\"RJ\";\"Carmo\";-42.604636;-21.930957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3591;\"RJ\";\"Casimiro de Abreu\";-42.206589;-22.481235"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3592;\"RJ\";\"Comendador Levy Gasparian\";-43.214018;-22.040425"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3593;\"RJ\";\"Conceição de Macabu\";-41.871878;-22.08337"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3594;\"RJ\";\"Cordeiro\";-42.364834;-22.026726"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3595;\"RJ\";\"Duas Barras\";-42.523229;-22.053638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3596;\"RJ\";\"Duque de Caxias\";-43.304895;-22.785801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3597;\"RJ\";\"Engenheiro Paulo de Frontin\";-43.682738;-22.549781"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3598;\"RJ\";\"Guapimirim\";-42.989537;-22.534702"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3599;\"RJ\";\"Iguaba Grande\";-42.229916;-22.849462"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3600;\"RJ\";\"Itaboraí\";-42.863905;-22.756504"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3601;\"RJ\";\"Itaguaí\";-43.779821;-22.863566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3602;\"RJ\";\"Italva\";-41.701442;-21.429607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3603;\"RJ\";\"Itaocara\";-42.075793;-21.674801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3604;\"RJ\";\"Itaperuna\";-41.879907;-21.199665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3605;\"RJ\";\"Itatiaia\";-44.567485;-22.48971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3606;\"RJ\";\"Japeri\";-43.660228;-22.643502"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3607;\"RJ\";\"Laje do Muriaé\";-42.127117;-21.209073"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3608;\"RJ\";\"Macaé\";-41.784828;-22.376807"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3609;\"RJ\";\"Macuco\";-42.253288;-21.981345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3610;\"RJ\";\"Magé\";-43.031483;-22.663151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3611;\"RJ\";\"Mangaratiba\";-44.040892;-22.959402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3612;\"RJ\";\"Maricá\";-42.824587;-22.935434"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3613;\"RJ\";\"Mendes\";-43.731215;-22.524548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3614;\"RJ\";\"Mesquita\";-43.460066;-22.802811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3615;\"RJ\";\"Miguel Pereira\";-43.480275;-22.457242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3616;\"RJ\";\"Miracema\";-42.193832;-21.414848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3617;\"RJ\";\"Natividade\";-41.969663;-21.038974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3618;\"RJ\";\"Nilópolis\";-43.423344;-22.805658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3619;\"RJ\";\"Niterói\";-43.103367;-22.88321"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3620;\"RJ\";\"Nova Friburgo\";-42.537692;-22.293224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3621;\"RJ\";\"Nova Iguaçu\";-43.460325;-22.755635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3622;\"RJ\";\"Paracambi\";-43.710836;-22.607811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3624;\"RJ\";\"Parati\";-44.716591;-23.222406"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3623;\"RJ\";\"Paraíba do Sul\";-43.304004;-22.158462"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3625;\"RJ\";\"Paty do Alferes\";-43.428534;-22.430896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3626;\"RJ\";\"Petrópolis\";-43.192613;-22.519963"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3627;\"RJ\";\"Pinheiral\";-44.002151;-22.517211"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3628;\"RJ\";\"Piraí\";-43.908071;-22.621497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3629;\"RJ\";\"Porciúncula\";-42.046477;-20.96321"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3630;\"RJ\";\"Porto Real\";-44.295167;-22.417472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3631;\"RJ\";\"Quatis\";-44.259729;-22.404484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3632;\"RJ\";\"Queimados\";-43.551808;-22.710172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3633;\"RJ\";\"Quissamã\";-41.469253;-22.103097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3634;\"RJ\";\"Resende\";-44.45091;-22.470473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3635;\"RJ\";\"Rio Bonito\";-42.627574;-22.71811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3636;\"RJ\";\"Rio Claro\";-44.141874;-22.720001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3637;\"RJ\";\"Rio das Flores\";-43.585632;-22.169184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3638;\"RJ\";\"Rio das Ostras\";-41.947509;-22.517378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3639;\"RJ\";\"Rio de Janeiro\";-43.200295;-22.912897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3640;\"RJ\";\"Santa Maria Madalena\";-42.009845;-21.95466"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3641;\"RJ\";\"Santo Antônio de Pádua\";-42.183157;-21.541038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3651;\"RJ\";\"Sapucaia\";-42.914194;-21.994867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3652;\"RJ\";\"Saquarema\";-42.509936;-22.929181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3653;\"RJ\";\"Seropédica\";-43.715482;-22.752584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3654;\"RJ\";\"Silva Jardim\";-42.396119;-22.657389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3655;\"RJ\";\"Sumidouro\";-42.676148;-22.048461"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3642;\"RJ\";\"São Fidélis\";-41.756041;-21.655119"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3643;\"RJ\";\"São Francisco de Itabapoana\";-41.109135;-21.470187"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3644;\"RJ\";\"São Gonçalo\";-43.063351;-22.82679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3647;\"RJ\";\"São José de Ubá\";-41.951058;-21.366066"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3648;\"RJ\";\"São José do Vale do Rio Preto\";-42.932727;-22.152497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3645;\"RJ\";\"São João da Barra\";-41.044582;-21.638009"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3646;\"RJ\";\"São João de Meriti\";-43.37292;-22.805776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3649;\"RJ\";\"São Pedro da Aldeia\";-42.102596;-22.842859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3650;\"RJ\";\"São Sebastião do Alto\";-42.132816;-21.957792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3656;\"RJ\";\"Tanguá\";-42.720189;-22.742305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3657;\"RJ\";\"Teresópolis\";-42.97519;-22.416464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3658;\"RJ\";\"Trajano de Morais\";-42.070645;-22.062664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3659;\"RJ\";\"Três Rios\";-43.218533;-22.11651"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3660;\"RJ\";\"Valença\";-43.71288;-22.244496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3661;\"RJ\";\"Varre-Sai\";-41.87009;-20.927561"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3662;\"RJ\";\"Vassouras\";-43.668555;-22.405889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3663;\"RJ\";\"Volta Redonda\";-44.099555;-22.520212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3664;\"RN\";\"Acari\";-36.634719;-6.428201"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3666;\"RN\";\"Afonso Bezerra\";-36.507469;-5.492294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3668;\"RN\";\"Alexandria\";-38.01423;-6.405335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3669;\"RN\";\"Almino Afonso\";-37.763574;-6.147496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3670;\"RN\";\"Alto do Rodrigues\";-36.749971;-5.281857"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3671;\"RN\";\"Angicos\";-36.609434;-5.65792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3672;\"RN\";\"Antônio Martins\";-37.883363;-6.213666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3673;\"RN\";\"Apodi\";-37.794593;-5.653489"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3674;\"RN\";\"Areia Branca\";-37.125226;-4.952537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3675;\"RN\";\"Arês\";-35.160823;-6.18831"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3665;\"RN\";\"Açu\";-36.907538;-5.565024"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3678;\"RN\";\"Baraúna\";-37.612911;-5.06977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3679;\"RN\";\"Barcelona\";-35.924653;-5.94284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3677;\"RN\";\"Baía Formosa\";-35.00327;-6.371607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3680;\"RN\";\"Bento Fernandes\";-35.812996;-5.699057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3721;\"RN\";\"Boa Saúde\";-35.596566;-6.154793"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3681;\"RN\";\"Bodó\";-36.416706;-5.980269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3682;\"RN\";\"Bom Jesus\";-35.579196;-5.986479"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3683;\"RN\";\"Brejinho\";-35.359113;-6.185662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3686;\"RN\";\"Caicó\";-37.106723;-6.454415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3684;\"RN\";\"Caiçara do Norte\";-36.07169;-5.070913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3685;\"RN\";\"Caiçara do Rio do Vento\";-35.993772;-5.765412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3676;\"RN\";\"Campo Grande\";-37.310572;-5.8536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3687;\"RN\";\"Campo Redondo\";-36.188768;-6.23829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3688;\"RN\";\"Canguaretama\";-35.128059;-6.371927"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3689;\"RN\";\"Caraúbas\";-37.558629;-5.783867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3691;\"RN\";\"Carnaubais\";-36.833489;-5.341808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3690;\"RN\";\"Carnaúba dos Dantas\";-36.586818;-6.550153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3692;\"RN\";\"Ceará-Mirim\";-35.419741;-5.640061"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3693;\"RN\";\"Cerro Corá\";-36.350278;-6.03503"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3694;\"RN\";\"Coronel Ezequiel\";-36.222346;-6.374801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3695;\"RN\";\"Coronel João Pessoa\";-38.44415;-6.249736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3696;\"RN\";\"Cruzeta\";-36.778239;-6.408939"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3697;\"RN\";\"Currais Novos\";-36.514648;-6.254843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3698;\"RN\";\"Doutor Severiano\";-38.379407;-6.080819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3699;\"RN\";\"Encanto\";-38.30328;-6.106912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3700;\"RN\";\"Equador\";-36.716957;-6.938355"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3701;\"RN\";\"Espírito Santo\";-35.305217;-6.335634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3756;\"RN\";\"Espírito Santo do Oeste\";-37.103187;-5.768931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3702;\"RN\";\"Extremoz\";-35.30484;-5.701433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3703;\"RN\";\"Felipe Guerra\";-37.687518;-5.592737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3704;\"RN\";\"Fernando Pedroza\";-36.528193;-5.690955"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3705;\"RN\";\"Florânia\";-36.822624;-6.122645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3706;\"RN\";\"Francisco Dantas\";-38.121209;-6.072339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3707;\"RN\";\"Frutuoso Gomes\";-37.837493;-6.156686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3708;\"RN\";\"Galinhos\";-36.275449;-5.090901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3709;\"RN\";\"Goianinha\";-35.194289;-6.264864"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3710;\"RN\";\"Governador Dix-Sept Rosado\";-37.518265;-5.448867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3711;\"RN\";\"Grossos\";-37.16208;-4.98068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3712;\"RN\";\"Guamaré\";-36.322172;-5.106194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3713;\"RN\";\"Ielmo Marinho\";-35.549952;-5.824469"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3714;\"RN\";\"Ipanguaçu\";-36.850137;-5.489844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3715;\"RN\";\"Ipueira\";-37.204541;-6.805962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3716;\"RN\";\"Itajá\";-36.871176;-5.638936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3717;\"RN\";\"Itaú\";-37.991249;-5.836301"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3719;\"RN\";\"Jandaíra\";-36.127836;-5.352106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3720;\"RN\";\"Janduís\";-37.40482;-6.014739"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3722;\"RN\";\"Japi\";-35.934551;-6.46544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3723;\"RN\";\"Jardim de Angicos\";-35.971287;-5.649993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3724;\"RN\";\"Jardim de Piranhas\";-37.349643;-6.376649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3725;\"RN\";\"Jardim do Seridó\";-36.773574;-6.580474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3718;\"RN\";\"Jaçanã\";-36.203081;-6.418559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3728;\"RN\";\"José da Penha\";-38.282277;-6.310947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3726;\"RN\";\"João Câmara\";-35.812186;-5.54094"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3727;\"RN\";\"João Dias\";-37.788546;-6.272154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3729;\"RN\";\"Jucurutu\";-37.00902;-6.030599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5624;\"RN\";\"Jundiá\";-35.349469;-6.268657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3733;\"RN\";\"Lagoa Nova\";-36.47027;-6.093386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3734;\"RN\";\"Lagoa Salgada\";-35.472394;-6.122954"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3730;\"RN\";\"Lagoa d`Anta\";-35.594904;-6.394926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3731;\"RN\";\"Lagoa de Pedras\";-35.429888;-6.150815"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3732;\"RN\";\"Lagoa de Velhos\";-35.872928;-6.011897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3735;\"RN\";\"Lajes\";-36.24704;-5.693222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3736;\"RN\";\"Lajes Pintadas\";-36.117088;-6.149429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3737;\"RN\";\"Lucrécia\";-37.813365;-6.105248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3738;\"RN\";\"Luís Gomes\";-38.389865;-6.405883"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3740;\"RN\";\"Macau\";-36.631842;-5.107947"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3739;\"RN\";\"Macaíba\";-35.355184;-5.852295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3741;\"RN\";\"Major Sales\";-38.324019;-6.399485"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3742;\"RN\";\"Marcelino Vieira\";-38.164162;-6.284595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3743;\"RN\";\"Martins\";-37.907973;-6.08279"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3744;\"RN\";\"Maxaranguape\";-35.263082;-5.521809"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3745;\"RN\";\"Messias Targino\";-37.515817;-6.071935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3746;\"RN\";\"Montanhas\";-35.284158;-6.485217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3747;\"RN\";\"Monte Alegre\";-35.325337;-6.07063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3748;\"RN\";\"Monte das Gameleiras\";-35.783133;-6.43698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3749;\"RN\";\"Mossoró\";-37.347446;-5.183737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3750;\"RN\";\"Natal\";-35.198604;-5.793567"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3752;\"RN\";\"Nova Cruz\";-35.428615;-6.475115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3751;\"RN\";\"Nísia Floresta\";-35.19913;-6.093288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3753;\"RN\";\"Olho-d`Água do Borges\";-37.704696;-5.948597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3754;\"RN\";\"Ouro Branco\";-36.94279;-6.6958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3755;\"RN\";\"Paraná\";-38.305701;-6.475645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3757;\"RN\";\"Parazinho\";-35.839787;-5.222758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3758;\"RN\";\"Parelhas\";-36.656626;-6.684908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3759;\"RN\";\"Parnamirim\";-35.271;-5.911156"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3760;\"RN\";\"Passa e Fica\";-35.644179;-6.430183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3761;\"RN\";\"Passagem\";-35.370037;-6.272684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3762;\"RN\";\"Patu\";-37.635638;-6.106559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3763;\"RN\";\"Pau dos Ferros\";-38.207714;-6.104976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3764;\"RN\";\"Pedra Grande\";-35.876018;-5.149882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3765;\"RN\";\"Pedra Preta\";-36.108367;-5.573524"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3766;\"RN\";\"Pedro Avelino\";-36.386653;-5.516099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3767;\"RN\";\"Pedro Velho\";-35.219539;-6.4356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3768;\"RN\";\"Pendências\";-36.70955;-5.2564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3769;\"RN\";\"Pilões\";-38.04605;-6.263635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3771;\"RN\";\"Portalegre\";-37.986524;-6.02064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3772;\"RN\";\"Porto do Mangue\";-36.78871;-5.054413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3770;\"RN\";\"Poço Branco\";-35.663535;-5.622326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3774;\"RN\";\"Pureza\";-35.555374;-5.463933"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3775;\"RN\";\"Rafael Fernandes\";-38.221116;-6.189871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3776;\"RN\";\"Rafael Godeiro\";-37.715961;-6.072441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3777;\"RN\";\"Riacho da Cruz\";-37.949047;-5.926543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3778;\"RN\";\"Riacho de Santana\";-38.311576;-6.251392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3779;\"RN\";\"Riachuelo\";-35.821515;-5.821555"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3780;\"RN\";\"Rio do Fogo\";-35.379437;-5.276498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3781;\"RN\";\"Rodolfo Fernandes\";-38.057886;-5.783929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3782;\"RN\";\"Ruy Barbosa\";-35.933039;-5.887454"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3783;\"RN\";\"Santa Cruz\";-36.019297;-6.224752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3784;\"RN\";\"Santa Maria\";-35.691409;-5.838022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3785;\"RN\";\"Santana do Matos\";-36.657763;-5.946055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3786;\"RN\";\"Santana do Seridó\";-36.731201;-6.76643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3787;\"RN\";\"Santo Antônio\";-35.473868;-6.311951"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3804;\"RN\";\"Senador Elói de Souza\";-35.697813;-6.033343"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3805;\"RN\";\"Senador Georgino Avelino\";-35.129912;-6.157598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3773;\"RN\";\"Serra Caiada\";-35.716327;-6.105987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3808;\"RN\";\"Serra Negra do Norte\";-37.399601;-6.660306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3806;\"RN\";\"Serra de São Bento\";-35.703258;-6.417616"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3807;\"RN\";\"Serra do Mel\";-37.024219;-5.177245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3809;\"RN\";\"Serrinha\";-35.500038;-6.281811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3810;\"RN\";\"Serrinha dos Pintos\";-37.954799;-6.110873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3811;\"RN\";\"Severiano Melo\";-37.95698;-5.776659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3788;\"RN\";\"São Bento do Norte\";-35.958705;-5.092594"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3789;\"RN\";\"São Bento do Trairí\";-36.086332;-6.337979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3790;\"RN\";\"São Fernando\";-37.186362;-6.379745"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3791;\"RN\";\"São Francisco do Oeste\";-38.151944;-5.974722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3792;\"RN\";\"São Gonçalo do Amarante\";-35.325729;-5.790682"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3794;\"RN\";\"São José de Mipibu\";-35.241692;-6.077303"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3795;\"RN\";\"São José do Campestre\";-35.706681;-6.310871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3796;\"RN\";\"São José do Seridó\";-36.874644;-6.44002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3793;\"RN\";\"São João do Sabugi\";-37.202676;-6.713867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3797;\"RN\";\"São Miguel\";-38.494696;-6.202833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3798;\"RN\";\"São Miguel do Gostoso\";-35.641429;-5.125882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3799;\"RN\";\"São Paulo do Potengi\";-35.764229;-5.899401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3800;\"RN\";\"São Pedro\";-35.631687;-5.905588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3801;\"RN\";\"São Rafael\";-36.87777;-5.797907"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3802;\"RN\";\"São Tomé\";-36.079798;-5.964037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3803;\"RN\";\"São Vicente\";-36.682696;-6.218931"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3812;\"RN\";\"Sítio Novo\";-35.908974;-6.111322"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3813;\"RN\";\"Taboleiro Grande\";-38.036693;-5.91948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3814;\"RN\";\"Taipu\";-35.5918;-5.630576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3815;\"RN\";\"Tangará\";-35.798888;-6.19649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3816;\"RN\";\"Tenente Ananias\";-38.181981;-6.458229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3817;\"RN\";\"Tenente Laurentino Cruz\";-36.713515;-6.137797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3818;\"RN\";\"Tibau\";-37.255358;-4.837292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3819;\"RN\";\"Tibau do Sul\";-35.08662;-6.19176"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3820;\"RN\";\"Timbaúba dos Batistas\";-37.274519;-6.457678"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3821;\"RN\";\"Touros\";-35.462102;-5.201821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3822;\"RN\";\"Triunfo Potiguar\";-37.178606;-5.85408"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3823;\"RN\";\"Umarizal\";-37.818031;-5.982379"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3824;\"RN\";\"Upanema\";-37.263485;-5.637611"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3826;\"RN\";\"Venha-Ver\";-38.487378;-6.314789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3827;\"RN\";\"Vera Cruz\";-35.427979;-6.043989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3829;\"RN\";\"Vila Flor\";-35.067023;-6.312868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3828;\"RN\";\"Viçosa\";-37.946236;-5.982529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3825;\"RN\";\"Várzea\";-35.373182;-6.346412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3667;\"RN\";\"Água Nova\";-38.29414;-6.203514"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3830;\"RO\";\"Alta Floresta d`Oeste\";-61.995342;-11.928325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3831;\"RO\";\"Alto Alegre dos Parecis\";-61.834979;-12.131955"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3832;\"RO\";\"Alto Paraíso\";-63.318834;-9.714294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3833;\"RO\";\"Alvorada d`Oeste\";-62.284697;-11.346271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3834;\"RO\";\"Ariquemes\";-63.032516;-9.905711"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3835;\"RO\";\"Buritis\";-63.832438;-10.194272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3836;\"RO\";\"Cabixi\";-60.552032;-13.494479"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3837;\"RO\";\"Cacaulândia\";-62.904328;-10.348981"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3838;\"RO\";\"Cacoal\";-61.456167;-11.434271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3839;\"RO\";\"Campo Novo de Rondônia\";-63.626551;-10.57125"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3840;\"RO\";\"Candeias do Jamari\";-63.700502;-8.790696"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3841;\"RO\";\"Castanheiras\";-61.948228;-11.425304"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3842;\"RO\";\"Cerejeiras\";-60.816836;-13.186987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3843;\"RO\";\"Chupinguaia\";-60.887694;-12.561115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3844;\"RO\";\"Colorado do Oeste\";-60.545428;-13.117431"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3845;\"RO\";\"Corumbiara\";-60.894732;-12.955111"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3846;\"RO\";\"Costa Marques\";-64.22797;-12.436715"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3847;\"RO\";\"Cujubim\";-62.584579;-9.360655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3848;\"RO\";\"Espigão d`Oeste\";-61.025187;-11.526574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3849;\"RO\";\"Governador Jorge Teixeira\";-62.737071;-10.610031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3850;\"RO\";\"Guajará-Mirim\";-65.329566;-10.788927"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3851;\"RO\";\"Itapuã do Oeste\";-63.180878;-9.196871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3852;\"RO\";\"Jaru\";-62.478769;-10.431826"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3853;\"RO\";\"Ji-Paraná\";-61.932152;-10.877741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3854;\"RO\";\"Machadinho d`Oeste\";-61.981801;-9.443629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3855;\"RO\";\"Ministro Andreazza\";-61.517437;-11.19596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3856;\"RO\";\"Mirante da Serra\";-62.669593;-11.028967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3857;\"RO\";\"Monte Negro\";-63.289988;-10.245823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3858;\"RO\";\"Nova Brasilândia d`Oeste\";-62.312665;-11.72468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3859;\"RO\";\"Nova Mamoré\";-65.334596;-10.407697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3860;\"RO\";\"Nova União\";-62.556368;-10.90681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3861;\"RO\";\"Novo Horizonte do Oeste\";-61.995137;-11.696145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3862;\"RO\";\"Ouro Preto do Oeste\";-62.256532;-10.716717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3863;\"RO\";\"Parecis\";-61.603225;-12.175416"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3864;\"RO\";\"Pimenta Bueno\";-61.197963;-11.671959"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3865;\"RO\";\"Pimenteiras do Oeste\";-61.047052;-13.482271"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3866;\"RO\";\"Porto Velho\";-63.899902;-8.760772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3867;\"RO\";\"Presidente Médici\";-61.898617;-11.168974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3868;\"RO\";\"Primavera de Rondônia\";-61.315336;-11.829456"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3869;\"RO\";\"Rio Crespo\";-62.901127;-9.699648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3870;\"RO\";\"Rolim de Moura\";-61.771411;-11.727071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3871;\"RO\";\"Santa Luzia d`Oeste\";-61.777685;-11.907362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3875;\"RO\";\"Seringueiras\";-63.018234;-11.805454"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3872;\"RO\";\"São Felipe d`Oeste\";-61.502623;-11.902258"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3873;\"RO\";\"São Francisco do Guaporé\";-63.567968;-12.051977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3874;\"RO\";\"São Miguel do Guaporé\";-62.719222;-11.69527"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3876;\"RO\";\"Teixeirópolis\";-62.241993;-10.905601"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3877;\"RO\";\"Theobroma\";-62.353796;-10.24834"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3878;\"RO\";\"Urupá\";-62.363895;-11.126123"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3879;\"RO\";\"Vale do Anari\";-62.187649;-9.862155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3880;\"RO\";\"Vale do Paraíso\";-62.135182;-10.446543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3881;\"RO\";\"Vilhena\";-60.148847;-12.750183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3882;\"RR\";\"Alto Alegre\";-61.307167;2.98858"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3883;\"RR\";\"Amajari\";-61.369245;3.645714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3884;\"RR\";\"Boa Vista\";-60.675328;2.823842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3885;\"RR\";\"Bonfim\";-59.8333;3.361614"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3886;\"RR\";\"Cantá\";-60.605827;2.60994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3887;\"RR\";\"Caracaraí\";-61.130378;1.827659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3888;\"RR\";\"Caroebe\";-59.695886;0.884203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3889;\"RR\";\"Iracema\";-61.041546;2.183046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3890;\"RR\";\"Mucajaí\";-60.909619;2.439982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3891;\"RR\";\"Normandia\";-59.620402;3.885305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3892;\"RR\";\"Pacaraima\";-61.147695;4.479895"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3893;\"RR\";\"Rorainópolis\";-60.438923;0.939956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3894;\"RR\";\"São João da Baliza\";-59.913293;0.951659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3895;\"RR\";\"São Luiz\";-60.041894;1.010193"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3896;\"RR\";\"Uiramutã\";-60.181464;4.603144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5633;\"RS\";\"Aceguá\";-54.161467;-31.866483"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3898;\"RS\";\"Agudo\";-53.251458;-29.644743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3899;\"RS\";\"Ajuricaba\";-53.775668;-28.23417"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3900;\"RS\";\"Alecrim\";-54.764849;-27.657856"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3901;\"RS\";\"Alegrete\";-55.794862;-29.790166"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3902;\"RS\";\"Alegria\";-54.055732;-27.834467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5643;\"RS\";\"Almirante Tamandaré do Sul\";-52.914209;-28.114942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3903;\"RS\";\"Alpestre\";-53.034127;-27.250159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3904;\"RS\";\"Alto Alegre\";-52.989255;-28.776865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3905;\"RS\";\"Alto Feliz\";-51.312278;-29.391928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3906;\"RS\";\"Alvorada\";-51.080857;-29.9914"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3907;\"RS\";\"Amaral Ferrador\";-52.250951;-30.875579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3908;\"RS\";\"Ametista do Sul\";-53.183005;-27.360656"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3909;\"RS\";\"André da Rocha\";-51.579729;-28.628294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3910;\"RS\";\"Anta Gorda\";-52.010191;-28.969772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3911;\"RS\";\"Antônio Prado\";-51.288263;-28.856544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3912;\"RS\";\"Arambaré\";-51.504586;-30.909248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3913;\"RS\";\"Araricá\";-50.929128;-29.616832"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3914;\"RS\";\"Aratiba\";-52.297461;-27.397787"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3919;\"RS\";\"Arroio Grande\";-53.086155;-32.232657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3915;\"RS\";\"Arroio do Meio\";-51.955735;-29.401353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5645;\"RS\";\"Arroio do Padre\";-52.424598;-31.438942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3916;\"RS\";\"Arroio do Sal\";-49.889537;-29.543872"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3918;\"RS\";\"Arroio do Tigre\";-53.096627;-29.334829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3917;\"RS\";\"Arroio dos Ratos\";-51.727479;-30.087545"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3920;\"RS\";\"Arvorezinha\";-52.17808;-28.87369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3921;\"RS\";\"Augusto Pestana\";-53.988292;-28.517249"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3923;\"RS\";\"Bagé\";-54.09992;-31.32965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3924;\"RS\";\"Balneário Pinhal\";-50.233655;-30.241938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3933;\"RS\";\"Barra Funda\";-53.039067;-27.920467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3929;\"RS\";\"Barra do Guarita\";-53.710867;-27.192672"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3930;\"RS\";\"Barra do Quaraí\";-57.549722;-30.202859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3931;\"RS\";\"Barra do Ribeiro\";-51.301358;-30.293884"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3932;\"RS\";\"Barra do Rio Azul\";-52.408375;-27.406855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3928;\"RS\";\"Barracão\";-51.45855;-27.673862"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3934;\"RS\";\"Barros Cassal\";-52.583571;-29.094686"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3925;\"RS\";\"Barão\";-51.494908;-29.372474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3926;\"RS\";\"Barão de Cotegipe\";-52.37982;-27.620785"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3927;\"RS\";\"Barão do Triunfo\";-51.738441;-30.389072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3935;\"RS\";\"Benjamin Constant do Sul\";-52.599504;-27.508565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3936;\"RS\";\"Bento Gonçalves\";-51.516476;-29.166212"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3937;\"RS\";\"Boa Vista das Missões\";-53.310168;-27.667123"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3938;\"RS\";\"Boa Vista do Buricá\";-54.108229;-27.66928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5635;\"RS\";\"Boa Vista do Cadeado\";-53.810821;-28.579055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5638;\"RS\";\"Boa Vista do Incra\";-53.391034;-28.818456"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3939;\"RS\";\"Boa Vista do Sul\";-51.668725;-29.354406"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3940;\"RS\";\"Bom Jesus\";-50.429453;-28.669703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3941;\"RS\";\"Bom Princípio\";-51.354763;-29.485634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3942;\"RS\";\"Bom Progresso\";-53.871608;-27.539856"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3943;\"RS\";\"Bom Retiro do Sul\";-51.945593;-29.607076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3944;\"RS\";\"Boqueirão do Leão\";-52.428432;-29.30462"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3945;\"RS\";\"Bossoroca\";-54.903507;-28.729089"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5636;\"RS\";\"Bozano\";-53.771965;-28.365906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3946;\"RS\";\"Braga\";-53.740514;-27.617348"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3947;\"RS\";\"Brochier\";-51.594516;-29.550136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3948;\"RS\";\"Butiá\";-51.960057;-30.11792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3950;\"RS\";\"Cacequi\";-54.821998;-29.888295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3951;\"RS\";\"Cachoeira do Sul\";-52.892756;-30.032988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3952;\"RS\";\"Cachoeirinha\";-51.101606;-29.947222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3953;\"RS\";\"Cacique Doble\";-51.659671;-27.767044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3954;\"RS\";\"Caibaté\";-54.645407;-28.290475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3955;\"RS\";\"Caiçara\";-53.42567;-27.279121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3956;\"RS\";\"Camaquã\";-51.80431;-30.848897"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3957;\"RS\";\"Camargo\";-52.200263;-28.587979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3958;\"RS\";\"Cambará do Sul\";-50.146507;-29.047408"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3959;\"RS\";\"Campestre da Serra\";-51.094148;-28.792585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3960;\"RS\";\"Campina das Missões\";-54.841648;-27.988833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3961;\"RS\";\"Campinas do Sul\";-52.624808;-27.717426"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3962;\"RS\";\"Campo Bom\";-51.060601;-29.674694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3963;\"RS\";\"Campo Novo\";-53.805209;-27.6792"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3964;\"RS\";\"Campos Borges\";-53.000812;-28.887148"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3965;\"RS\";\"Candelária\";-52.789495;-29.668391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3967;\"RS\";\"Candiota\";-53.677275;-31.551553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3968;\"RS\";\"Canela\";-50.811921;-29.355993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3969;\"RS\";\"Canguçu\";-52.678254;-31.39598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3970;\"RS\";\"Canoas\";-51.185681;-29.912758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5648;\"RS\";\"Canudos do Vale\";-52.237436;-29.327124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3973;\"RS\";\"Capela de Santana\";-51.327998;-29.696088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3974;\"RS\";\"Capitão\";-51.98528;-29.267386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3975;\"RS\";\"Capivari do Sul\";-50.515152;-30.138251"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5655;\"RS\";\"Capão Bonito do Sul\";-51.396093;-28.12544"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3971;\"RS\";\"Capão da Canoa\";-50.028243;-29.764242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5632;\"RS\";\"Capão do Cipó\";-54.555782;-28.931243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3972;\"RS\";\"Capão do Leão\";-52.488879;-31.75646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3977;\"RS\";\"Carazinho\";-52.79326;-28.295844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3976;\"RS\";\"Caraá\";-50.431614;-29.786933"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3978;\"RS\";\"Carlos Barbosa\";-51.502847;-29.296949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3979;\"RS\";\"Carlos Gomes\";-51.912127;-27.716679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3980;\"RS\";\"Casca\";-51.981452;-28.560516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3981;\"RS\";\"Caseiros\";-51.686108;-28.25816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3982;\"RS\";\"Catuípe\";-54.013215;-28.255356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3983;\"RS\";\"Caxias do Sul\";-51.179161;-29.162905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3949;\"RS\";\"Caçapava do Sul\";-53.482684;-30.51436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3984;\"RS\";\"Centenário\";-51.998408;-27.761547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3985;\"RS\";\"Cerrito\";-52.800442;-31.841917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3986;\"RS\";\"Cerro Branco\";-52.94061;-29.656986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3987;\"RS\";\"Cerro Grande\";-53.167233;-27.610621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3988;\"RS\";\"Cerro Grande do Sul\";-51.741846;-30.590472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3989;\"RS\";\"Cerro Largo\";-54.742791;-28.146251"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3990;\"RS\";\"Chapada\";-53.066519;-28.055865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3991;\"RS\";\"Charqueadas\";-51.628872;-29.962478"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3992;\"RS\";\"Charrua\";-52.015005;-27.949268"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3993;\"RS\";\"Chiapetta\";-53.941871;-27.923017"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3995;\"RS\";\"Chuvisca\";-51.973659;-30.75041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3994;\"RS\";\"Chuí\";-53.459369;-33.68663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3996;\"RS\";\"Cidreira\";-50.233747;-30.160386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3997;\"RS\";\"Ciríaco\";-51.874143;-28.341913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3998;\"RS\";\"Colinas\";-51.855564;-29.394781"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3999;\"RS\";\"Colorado\";-52.99282;-28.525842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4000;\"RS\";\"Condor\";-53.490545;-28.207533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4001;\"RS\";\"Constantina\";-52.993799;-27.731974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5650;\"RS\";\"Coqueiro Baixo\";-52.094158;-29.180163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4002;\"RS\";\"Coqueiros do Sul\";-52.784221;-28.119421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4003;\"RS\";\"Coronel Barros\";-54.068621;-28.392148"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4004;\"RS\";\"Coronel Bicaco\";-53.702164;-27.719699"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5653;\"RS\";\"Coronel Pilar\";-51.684731;-29.269476"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4005;\"RS\";\"Cotiporã\";-51.697067;-28.989106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4006;\"RS\";\"Coxilha\";-52.302343;-28.12797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4007;\"RS\";\"Crissiumal\";-54.099372;-27.49989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4008;\"RS\";\"Cristal\";-52.043618;-31.004634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4009;\"RS\";\"Cristal do Sul\";-53.242227;-27.451995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4010;\"RS\";\"Cruz Alta\";-53.604831;-28.645001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5644;\"RS\";\"Cruzaltense\";-52.652168;-27.667161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4011;\"RS\";\"Cruzeiro do Sul\";-51.992778;-29.514835"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3966;\"RS\";\"Cândido Godói\";-54.751722;-27.951509"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4012;\"RS\";\"David Canabarro\";-51.848205;-28.384907"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4013;\"RS\";\"Derrubadas\";-53.864535;-27.264151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4014;\"RS\";\"Dezesseis de Novembro\";-55.061709;-28.219036"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4015;\"RS\";\"Dilermando de Aguiar\";-54.212241;-29.705393"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4016;\"RS\";\"Dois Irmãos\";-51.089776;-29.58356"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4017;\"RS\";\"Dois Irmãos das Missões\";-53.530413;-27.662103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4018;\"RS\";\"Dois Lajeados\";-51.839584;-28.983006"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4019;\"RS\";\"Dom Feliciano\";-52.102645;-30.700354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4020;\"RS\";\"Dom Pedrito\";-54.66936;-30.97559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4021;\"RS\";\"Dom Pedro de Alcântara\";-49.853007;-29.363872"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4022;\"RS\";\"Dona Francisca\";-53.361737;-29.619507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4023;\"RS\";\"Doutor Maurício Cardoso\";-54.357746;-27.510309"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4024;\"RS\";\"Doutor Ricardo\";-51.997155;-29.083957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4025;\"RS\";\"Eldorado do Sul\";-51.618702;-30.084676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4026;\"RS\";\"Encantado\";-51.870282;-29.235141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4027;\"RS\";\"Encruzilhada do Sul\";-52.520381;-30.542998"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4028;\"RS\";\"Engenho Velho\";-52.91454;-27.706026"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4030;\"RS\";\"Entre Rios do Sul\";-52.734708;-27.529836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4029;\"RS\";\"Entre-Ijuís\";-54.268588;-28.368556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4031;\"RS\";\"Erebango\";-52.300486;-27.854386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4032;\"RS\";\"Erechim\";-52.26969;-27.63638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4033;\"RS\";\"Ernestina\";-52.583566;-28.497674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4034;\"RS\";\"Erval Grande\";-52.574036;-27.392599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4035;\"RS\";\"Erval Seco\";-53.500501;-27.544314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4036;\"RS\";\"Esmeralda\";-51.19327;-28.051762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4037;\"RS\";\"Esperança do Sul\";-53.989081;-27.360276"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4038;\"RS\";\"Espumoso\";-52.84608;-28.728633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4039;\"RS\";\"Estação\";-52.263536;-27.913468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4041;\"RS\";\"Esteio\";-51.184065;-29.851963"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4042;\"RS\";\"Estrela\";-51.949508;-29.500207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4043;\"RS\";\"Estrela Velha\";-53.16387;-29.171269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4040;\"RS\";\"Estância Velha\";-51.184339;-29.65354"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4044;\"RS\";\"Eugênio de Castro\";-54.15059;-28.531467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4045;\"RS\";\"Fagundes Varela\";-51.701425;-28.879386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4046;\"RS\";\"Farroupilha\";-51.341853;-29.222689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4047;\"RS\";\"Faxinal do Soturno\";-53.44839;-29.578836"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4048;\"RS\";\"Faxinalzinho\";-52.678917;-27.42377"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4049;\"RS\";\"Fazenda Vilanova\";-51.821714;-29.588511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4050;\"RS\";\"Feliz\";-51.303186;-29.452703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4051;\"RS\";\"Flores da Cunha\";-51.187457;-29.026147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4052;\"RS\";\"Floriano Peixoto\";-52.083775;-27.861391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4053;\"RS\";\"Fontoura Xavier\";-52.344455;-28.981655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4054;\"RS\";\"Formigueiro\";-53.495928;-30.003518"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5649;\"RS\";\"Forquetinha\";-52.098068;-29.382756"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4055;\"RS\";\"Fortaleza dos Valos\";-53.224906;-28.798596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4056;\"RS\";\"Frederico Westphalen\";-53.395824;-27.358644"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4057;\"RS\";\"Garibaldi\";-51.535179;-29.258979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4058;\"RS\";\"Garruchos\";-55.638284;-28.194414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4059;\"RS\";\"Gaurama\";-52.091529;-27.585587"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4060;\"RS\";\"General Câmara\";-51.761178;-29.903173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4061;\"RS\";\"Gentil\";-52.033695;-28.431641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4062;\"RS\";\"Getúlio Vargas\";-52.229357;-27.891093"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4063;\"RS\";\"Giruá\";-54.35168;-28.029664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4064;\"RS\";\"Glorinha\";-50.773363;-29.879798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4065;\"RS\";\"Gramado\";-50.876164;-29.373351"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4067;\"RS\";\"Gramado Xavier\";-52.579491;-29.270571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4066;\"RS\";\"Gramado dos Loureiros\";-52.914861;-27.442895"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4068;\"RS\";\"Gravataí\";-50.986891;-29.941319"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4069;\"RS\";\"Guabiju\";-51.69483;-28.542083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4071;\"RS\";\"Guaporé\";-51.889542;-28.839917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4072;\"RS\";\"Guarani das Missões\";-54.562937;-28.149117"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4070;\"RS\";\"Guaíba\";-51.323314;-30.108592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4073;\"RS\";\"Harmonia\";-51.418502;-29.545556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4074;\"RS\";\"Herval\";-53.394362;-32.023985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4075;\"RS\";\"Herveiras\";-52.655314;-29.455239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4076;\"RS\";\"Horizontina\";-54.305336;-27.628238"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4077;\"RS\";\"Hulha Negra\";-53.866702;-31.406721"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4078;\"RS\";\"Humaitá\";-53.969525;-27.569065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4079;\"RS\";\"Ibarama\";-53.129493;-29.420321"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4080;\"RS\";\"Ibiaçá\";-51.859851;-28.056556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4081;\"RS\";\"Ibiraiaras\";-51.63767;-28.374095"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4082;\"RS\";\"Ibirapuitã\";-52.515796;-28.624707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4083;\"RS\";\"Ibirubá\";-53.096124;-28.630161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4084;\"RS\";\"Igrejinha\";-50.791894;-29.569318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4085;\"RS\";\"Ijuí\";-53.91996;-28.388048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4086;\"RS\";\"Ilópolis\";-52.125816;-28.92825"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4087;\"RS\";\"Imbé\";-50.128068;-29.975269"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4088;\"RS\";\"Imigrante\";-51.774752;-29.350776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4089;\"RS\";\"Independência\";-54.18864;-27.835411"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4090;\"RS\";\"Inhacorá\";-54.014978;-27.875187"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4092;\"RS\";\"Ipiranga do Sul\";-52.427124;-27.940366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4091;\"RS\";\"Ipê\";-51.285931;-28.817098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4093;\"RS\";\"Iraí\";-53.254322;-27.19507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4094;\"RS\";\"Itaara\";-53.772494;-29.601285"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4095;\"RS\";\"Itacurubi\";-55.24467;-28.791281"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4096;\"RS\";\"Itapuca\";-52.169283;-28.776844"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4097;\"RS\";\"Itaqui\";-56.551478;-29.131051"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5658;\"RS\";\"Itati\";-50.101571;-29.497386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4098;\"RS\";\"Itatiba do Sul\";-52.453776;-27.384631"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4099;\"RS\";\"Ivorá\";-53.584214;-29.523224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4100;\"RS\";\"Ivoti\";-51.153326;-29.599463"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4101;\"RS\";\"Jaboticaba\";-53.276173;-27.634703"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5640;\"RS\";\"Jacuizinho\";-53.065694;-29.040118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4102;\"RS\";\"Jacutinga\";-52.53724;-27.729135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4104;\"RS\";\"Jaguari\";-54.702993;-29.493559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4103;\"RS\";\"Jaguarão\";-53.377027;-32.560378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4105;\"RS\";\"Jaquirana\";-50.363681;-28.881098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4106;\"RS\";\"Jari\";-54.223711;-29.292234"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4107;\"RS\";\"Jóia\";-54.114131;-28.643484"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4108;\"RS\";\"Júlio de Castilhos\";-53.677168;-29.229855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5642;\"RS\";\"Lagoa Bonita do Sul\";-53.016956;-29.493874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4111;\"RS\";\"Lagoa Vermelha\";-51.524815;-28.209335"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4109;\"RS\";\"Lagoa dos Três Cantos\";-52.861848;-28.567611"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4110;\"RS\";\"Lagoão\";-52.799698;-29.234796"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4112;\"RS\";\"Lajeado\";-51.964427;-29.459086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4113;\"RS\";\"Lajeado do Bugre\";-53.181811;-27.69131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4114;\"RS\";\"Lavras do Sul\";-53.893077;-30.807056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4115;\"RS\";\"Liberato Salzano\";-53.07533;-27.600959"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4116;\"RS\";\"Lindolfo Collor\";-51.214112;-29.585906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4117;\"RS\";\"Linha Nova\";-51.200297;-29.467929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4119;\"RS\";\"Machadinho\";-51.666805;-27.566669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4120;\"RS\";\"Mampituba\";-49.931105;-29.213628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4121;\"RS\";\"Manoel Viana\";-55.484112;-29.585935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4122;\"RS\";\"Maquiné\";-50.207859;-29.67983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4123;\"RS\";\"Maratá\";-51.55732;-29.545715"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4124;\"RS\";\"Marau\";-52.198625;-28.449754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4125;\"RS\";\"Marcelino Ramos\";-51.909503;-27.467622"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4126;\"RS\";\"Mariana Pimentel\";-51.580307;-30.353048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4127;\"RS\";\"Mariano Moro\";-52.146661;-27.356753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4128;\"RS\";\"Marques de Souza\";-52.097268;-29.331113"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4129;\"RS\";\"Mata\";-54.464105;-29.564893"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4130;\"RS\";\"Mato Castelhano\";-52.193231;-28.280019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4131;\"RS\";\"Mato Leitão\";-52.12776;-29.528474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5631;\"RS\";\"Mato Queimado\";-54.615862;-28.251988"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4132;\"RS\";\"Maximiliano de Almeida\";-51.802049;-27.632518"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4118;\"RS\";\"Maçambara\";-56.067444;-29.144485"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4133;\"RS\";\"Minas do Leão\";-52.042257;-30.134576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4134;\"RS\";\"Miraguaí\";-53.689078;-27.49697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4135;\"RS\";\"Montauri\";-52.076728;-28.646161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4136;\"RS\";\"Monte Alegre dos Campos\";-50.783385;-28.680495"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4137;\"RS\";\"Monte Belo do Sul\";-51.633263;-29.16074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4138;\"RS\";\"Montenegro\";-51.467903;-29.682414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4139;\"RS\";\"Mormaço\";-52.699916;-28.696814"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4140;\"RS\";\"Morrinhos do Sul\";-49.932816;-29.357756"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4141;\"RS\";\"Morro Redondo\";-52.626064;-31.588737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4142;\"RS\";\"Morro Reuter\";-51.081119;-29.537934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4143;\"RS\";\"Mostardas\";-50.916692;-31.10538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4145;\"RS\";\"Muitos Capões\";-51.183593;-28.313183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4146;\"RS\";\"Muliterno\";-51.769675;-28.325299"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4144;\"RS\";\"Muçum\";-51.871367;-29.163002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4148;\"RS\";\"Nicolau Vergueiro\";-52.467629;-28.529842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4149;\"RS\";\"Nonoai\";-52.775564;-27.368918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4150;\"RS\";\"Nova Alvorada\";-52.16308;-28.682231"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4151;\"RS\";\"Nova Araçá\";-51.745802;-28.653741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4152;\"RS\";\"Nova Bassano\";-51.707194;-28.729088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4153;\"RS\";\"Nova Boa Vista\";-52.978377;-27.9926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4154;\"RS\";\"Nova Bréscia\";-52.031862;-29.218186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4155;\"RS\";\"Nova Candelária\";-54.107401;-27.613677"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4156;\"RS\";\"Nova Esperança do Sul\";-54.829302;-29.406643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4157;\"RS\";\"Nova Hartz\";-50.905108;-29.580752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4159;\"RS\";\"Nova Palma\";-53.468924;-29.470981"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4160;\"RS\";\"Nova Petrópolis\";-51.113552;-29.374112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4161;\"RS\";\"Nova Prata\";-51.611271;-28.779913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4158;\"RS\";\"Nova Pádua\";-51.309752;-29.027509"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4162;\"RS\";\"Nova Ramada\";-53.699168;-28.066731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4163;\"RS\";\"Nova Roma do Sul\";-51.409511;-28.988173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4164;\"RS\";\"Nova Santa Rita\";-51.283736;-29.852474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4165;\"RS\";\"Novo Barreiro\";-53.110292;-27.9077"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4166;\"RS\";\"Novo Cabrais\";-52.94894;-29.733752"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4167;\"RS\";\"Novo Hamburgo\";-51.132828;-29.687548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4168;\"RS\";\"Novo Machado\";-54.503592;-27.576473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4169;\"RS\";\"Novo Tiradentes\";-53.183715;-27.564918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5641;\"RS\";\"Novo Xingu\";-53.063941;-27.749049"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4147;\"RS\";\"Não-Me-Toque\";-52.818156;-28.454776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4170;\"RS\";\"Osório\";-50.266713;-29.888089"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4171;\"RS\";\"Paim Filho\";-51.762988;-27.707516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4172;\"RS\";\"Palmares do Sul\";-50.510297;-30.253485"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4173;\"RS\";\"Palmeira das Missões\";-53.313378;-27.900652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4174;\"RS\";\"Palmitinho\";-53.558029;-27.359574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4175;\"RS\";\"Panambi\";-53.502261;-28.283328"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4176;\"RS\";\"Pantano Grande\";-52.372915;-30.190155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4177;\"RS\";\"Paraí\";-51.789602;-28.596384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4178;\"RS\";\"Paraíso do Sul\";-53.144034;-29.671705"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4179;\"RS\";\"Pareci Novo\";-51.3974;-29.636538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4180;\"RS\";\"Parobé\";-50.83118;-29.624257"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4181;\"RS\";\"Passa Sete\";-52.959945;-29.457667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4183;\"RS\";\"Passo Fundo\";-52.409112;-28.257564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4182;\"RS\";\"Passo do Sobrado\";-52.274758;-29.748041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5647;\"RS\";\"Paulo Bento\";-52.416919;-27.705138"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4184;\"RS\";\"Paverama\";-51.733925;-29.548554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5637;\"RS\";\"Pedras Altas\";-53.581437;-31.736539"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4185;\"RS\";\"Pedro Osório\";-52.818389;-31.864243"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4186;\"RS\";\"Pejuçara\";-53.657854;-28.428256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4187;\"RS\";\"Pelotas\";-52.337058;-31.764898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4188;\"RS\";\"Picada Café\";-51.136725;-29.446421"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4189;\"RS\";\"Pinhal\";-53.208185;-27.508022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4190;\"RS\";\"Pinhal Grande\";-53.320649;-29.345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5656;\"RS\";\"Pinhal da Serra\";-51.167329;-27.875132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4191;\"RS\";\"Pinheirinho do Vale\";-53.608017;-27.210886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4192;\"RS\";\"Pinheiro Machado\";-53.379789;-31.57944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4193;\"RS\";\"Pirapó\";-55.20013;-28.043888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4194;\"RS\";\"Piratini\";-53.097296;-31.447291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4195;\"RS\";\"Planalto\";-53.05753;-27.329695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4198;\"RS\";\"Ponte Preta\";-52.484817;-27.658692"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4197;\"RS\";\"Pontão\";-52.679091;-28.058478"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4200;\"RS\";\"Porto Alegre\";-51.206533;-30.031771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4201;\"RS\";\"Porto Lucena\";-55.010028;-27.85688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4202;\"RS\";\"Porto Mauá\";-54.665739;-27.579579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4203;\"RS\";\"Porto Vera Cruz\";-54.89937;-27.740504"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4204;\"RS\";\"Porto Xavier\";-55.13791;-27.908182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4199;\"RS\";\"Portão\";-51.242895;-29.701533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4205;\"RS\";\"Pouso Novo\";-52.213588;-29.173793"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4196;\"RS\";\"Poço das Antas\";-51.671938;-29.448097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4206;\"RS\";\"Presidente Lucena\";-51.179798;-29.517549"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4207;\"RS\";\"Progresso\";-52.319721;-29.244147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4208;\"RS\";\"Protásio Alves\";-51.4757;-28.757189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4209;\"RS\";\"Putinga\";-52.156904;-29.004494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4210;\"RS\";\"Quaraí\";-56.448254;-30.384033"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5646;\"RS\";\"Quatro Irmãos\";-52.442417;-27.825684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4211;\"RS\";\"Quevedos\";-54.078915;-29.350413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4212;\"RS\";\"Quinze de Novembro\";-53.101096;-28.746552"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4213;\"RS\";\"Redentora\";-53.640668;-27.663954"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4214;\"RS\";\"Relvado\";-52.077831;-29.116376"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4215;\"RS\";\"Restinga Seca\";-53.380657;-29.818778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4217;\"RS\";\"Rio Grande\";-52.10705;-32.034875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4218;\"RS\";\"Rio Pardo\";-52.37113;-29.98803"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4216;\"RS\";\"Rio dos Índios\";-52.841749;-27.29728"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4219;\"RS\";\"Riozinho\";-50.448781;-29.638986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4220;\"RS\";\"Roca Sales\";-51.86584;-29.288398"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4221;\"RS\";\"Rodeio Bonito\";-53.170583;-27.474203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5630;\"RS\";\"Rolador\";-54.81864;-28.256554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4222;\"RS\";\"Rolante\";-50.581937;-29.64624"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4223;\"RS\";\"Ronda Alta\";-52.805587;-27.775799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4224;\"RS\";\"Rondinha\";-52.908107;-27.831451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4225;\"RS\";\"Roque Gonzales\";-55.026609;-28.129681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4226;\"RS\";\"Rosário do Sul\";-54.922106;-30.251483"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4227;\"RS\";\"Sagrada Família\";-53.135053;-27.708538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4228;\"RS\";\"Saldanha Marinho\";-53.097006;-28.394081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4229;\"RS\";\"Salto do Jacuí\";-53.213326;-29.095065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4230;\"RS\";\"Salvador das Missões\";-54.837318;-28.123337"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4231;\"RS\";\"Salvador do Sul\";-51.507699;-29.438561"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4232;\"RS\";\"Sananduva\";-51.807949;-27.947028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4233;\"RS\";\"Santa Bárbara do Sul\";-53.251041;-28.36533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5651;\"RS\";\"Santa Cecília do Sul\";-51.927934;-28.160861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4234;\"RS\";\"Santa Clara do Sul\";-52.08426;-29.47474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4235;\"RS\";\"Santa Cruz do Sul\";-52.434318;-29.722021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5634;\"RS\";\"Santa Margarida do Sul\";-54.081719;-30.339283"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4236;\"RS\";\"Santa Maria\";-53.814946;-29.686817"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4237;\"RS\";\"Santa Maria do Herval\";-50.991917;-29.490163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4240;\"RS\";\"Santa Rosa\";-54.479629;-27.8702"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4241;\"RS\";\"Santa Tereza\";-51.735066;-29.165467"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4242;\"RS\";\"Santa Vitória do Palmar\";-53.371692;-33.52498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4238;\"RS\";\"Santana da Boa Vista\";-53.109981;-30.869738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4239;\"RS\";\"Santana do Livramento\";-55.531467;-30.88772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4243;\"RS\";\"Santiago\";-54.866624;-29.189675"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4245;\"RS\";\"Santo Antônio da Patrulha\";-50.517489;-29.826768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4246;\"RS\";\"Santo Antônio das Missões\";-55.225077;-28.513977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4247;\"RS\";\"Santo Antônio do Palma\";-52.026701;-28.495554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4248;\"RS\";\"Santo Antônio do Planalto\";-52.699233;-28.403046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4249;\"RS\";\"Santo Augusto\";-53.777605;-27.852577"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4250;\"RS\";\"Santo Cristo\";-54.661963;-27.826259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4251;\"RS\";\"Santo Expedito do Sul\";-51.643352;-27.907439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4244;\"RS\";\"Santo Ângelo\";-54.266781;-28.300128"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4287;\"RS\";\"Sapiranga\";-51.006446;-29.634885"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4288;\"RS\";\"Sapucaia do Sul\";-51.144975;-29.827575"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4289;\"RS\";\"Sarandi\";-52.923085;-27.942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4290;\"RS\";\"Seberi\";-53.402634;-27.482861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4291;\"RS\";\"Sede Nova\";-53.94929;-27.636739"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4292;\"RS\";\"Segredo\";-52.976673;-29.352337"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4293;\"RS\";\"Selbach\";-52.949768;-28.629435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4294;\"RS\";\"Senador Salgado Filho\";-54.550717;-28.025007"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4295;\"RS\";\"Sentinela do Sul\";-51.586154;-30.610707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4296;\"RS\";\"Serafina Corrêa\";-51.93525;-28.712621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4298;\"RS\";\"Sertão\";-52.25878;-27.979782"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4299;\"RS\";\"Sertão Santana\";-51.601694;-30.456183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4300;\"RS\";\"Sete de Setembro\";-54.463682;-28.136169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4301;\"RS\";\"Severiano de Almeida\";-52.121704;-27.436202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4302;\"RS\";\"Silveira Martins\";-53.591018;-29.646741"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4303;\"RS\";\"Sinimbu\";-52.530449;-29.535659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4304;\"RS\";\"Sobradinho\";-53.032625;-29.419439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4305;\"RS\";\"Soledade\";-52.513083;-28.830613"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4252;\"RS\";\"São Borja\";-56.003603;-28.657828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4253;\"RS\";\"São Domingos do Sul\";-51.88598;-28.531151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4254;\"RS\";\"São Francisco de Assis\";-55.12531;-29.554689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4255;\"RS\";\"São Francisco de Paula\";-50.582796;-29.440366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4256;\"RS\";\"São Gabriel\";-54.321657;-30.333688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4257;\"RS\";\"São Jerônimo\";-51.72507;-29.97158"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4260;\"RS\";\"São Jorge\";-51.706422;-28.498445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4261;\"RS\";\"São José das Missões\";-53.122595;-27.778908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4262;\"RS\";\"São José do Herval\";-52.294991;-29.052035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4263;\"RS\";\"São José do Hortêncio\";-51.245048;-29.527962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4264;\"RS\";\"São José do Inhacorá\";-54.127462;-27.725055"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4265;\"RS\";\"São José do Norte\";-52.033085;-32.015129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4266;\"RS\";\"São José do Ouro\";-51.59662;-27.770679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5654;\"RS\";\"São José do Sul\";-51.482104;-29.544818"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4267;\"RS\";\"São José dos Ausentes\";-50.06772;-28.747589"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4258;\"RS\";\"São João da Urtiga\";-51.825664;-27.819507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4259;\"RS\";\"São João do Polêsine\";-53.44392;-29.619435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4268;\"RS\";\"São Leopoldo\";-51.149773;-29.754494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4269;\"RS\";\"São Lourenço do Sul\";-51.971531;-31.356374"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4270;\"RS\";\"São Luiz Gonzaga\";-54.955942;-28.412032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4271;\"RS\";\"São Marcos\";-51.069559;-28.967659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4272;\"RS\";\"São Martinho\";-53.969899;-27.711169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4273;\"RS\";\"São Martinho da Serra\";-53.859002;-29.539667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4274;\"RS\";\"São Miguel das Missões\";-54.555879;-28.556044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4275;\"RS\";\"São Nicolau\";-55.265441;-28.183365"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4276;\"RS\";\"São Paulo das Missões\";-54.940352;-28.019546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4277;\"RS\";\"São Pedro da Serra\";-51.513381;-29.41932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5639;\"RS\";\"São Pedro das Missões\";-53.251298;-27.770568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4278;\"RS\";\"São Pedro do Butiá\";-54.892603;-28.12425"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4279;\"RS\";\"São Pedro do Sul\";-54.185516;-29.620163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4280;\"RS\";\"São Sebastião do Caí\";-51.37488;-29.588517"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4281;\"RS\";\"São Sepé\";-53.560296;-30.164289"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4282;\"RS\";\"São Valentim\";-52.523714;-27.558284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4283;\"RS\";\"São Valentim do Sul\";-51.768356;-29.045056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4284;\"RS\";\"São Valério do Sul\";-53.936771;-27.790639"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4285;\"RS\";\"São Vendelino\";-51.367515;-29.372873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4286;\"RS\";\"São Vicente do Sul\";-54.682643;-29.688161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4297;\"RS\";\"Sério\";-52.2685;-29.390428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4306;\"RS\";\"Tabaí\";-51.682292;-29.643041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4307;\"RS\";\"Tapejara\";-52.009665;-28.065237"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4308;\"RS\";\"Tapera\";-52.861253;-28.627729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4309;\"RS\";\"Tapes\";-51.39914;-30.668308"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4310;\"RS\";\"Taquara\";-50.775278;-29.650471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4311;\"RS\";\"Taquari\";-51.865346;-29.79433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4312;\"RS\";\"Taquaruçu do Sul\";-53.47025;-27.400452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4313;\"RS\";\"Tavares\";-51.08804;-31.284266"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4314;\"RS\";\"Tenente Portela\";-53.758484;-27.371058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4315;\"RS\";\"Terra de Areia\";-50.06439;-29.578199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4316;\"RS\";\"Teutônia\";-51.804375;-29.448205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5629;\"RS\";\"Tio Hugo\";-52.595507;-28.571229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4317;\"RS\";\"Tiradentes do Sul\";-54.081367;-27.402229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4318;\"RS\";\"Toropi\";-54.224398;-29.478246"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4319;\"RS\";\"Torres\";-49.733289;-29.333438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4320;\"RS\";\"Tramandaí\";-50.132187;-29.98414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4321;\"RS\";\"Travesseiro\";-52.053228;-29.297662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4329;\"RS\";\"Trindade do Sul\";-52.895593;-27.523896"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4330;\"RS\";\"Triunfo\";-51.707471;-29.929129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4322;\"RS\";\"Três Arroios\";-52.144753;-27.500273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4323;\"RS\";\"Três Cachoeiras\";-49.927514;-29.448661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4324;\"RS\";\"Três Coroas\";-50.773869;-29.513719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4326;\"RS\";\"Três Forquilhas\";-50.070771;-29.53842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4327;\"RS\";\"Três Palmeiras\";-52.843718;-27.613889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4328;\"RS\";\"Três Passos\";-53.929631;-27.455471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4325;\"RS\";\"Três de Maio\";-54.235709;-27.780037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4331;\"RS\";\"Tucunduva\";-54.44388;-27.657292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4332;\"RS\";\"Tunas\";-52.953843;-29.103944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4333;\"RS\";\"Tupanci do Sul\";-51.538283;-27.924085"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4334;\"RS\";\"Tupanciretã\";-53.844469;-29.085775"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4335;\"RS\";\"Tupandi\";-51.417358;-29.477185"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4336;\"RS\";\"Tuparendi\";-54.481434;-27.759768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4337;\"RS\";\"Turuçu\";-52.17059;-31.417284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4338;\"RS\";\"Ubiretama\";-54.685952;-28.040385"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4340;\"RS\";\"Unistalda\";-55.151731;-29.039953"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4339;\"RS\";\"União da Serra\";-52.023783;-28.783285"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4341;\"RS\";\"Uruguaiana\";-57.085287;-29.761436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4342;\"RS\";\"Vacaria\";-50.941791;-28.507868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4344;\"RS\";\"Vale Real\";-51.255859;-29.391944"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4345;\"RS\";\"Vale Verde\";-52.185747;-29.786445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4343;\"RS\";\"Vale do Sol\";-52.683901;-29.596724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4346;\"RS\";\"Vanini\";-51.844723;-28.475833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4347;\"RS\";\"Venâncio Aires\";-52.193159;-29.614306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4348;\"RS\";\"Vera Cruz\";-52.515176;-29.718435"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4349;\"RS\";\"Veranópolis\";-51.551614;-28.931197"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4350;\"RS\";\"Vespasiano Correa\";-51.862495;-29.065506"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4351;\"RS\";\"Viadutos\";-52.021144;-27.571566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4352;\"RS\";\"Viamão\";-51.019435;-30.081899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4353;\"RS\";\"Vicente Dutra\";-53.402211;-27.160749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4354;\"RS\";\"Victor Graeff\";-52.749535;-28.563163"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4355;\"RS\";\"Vila Flores\";-51.550371;-28.859825"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4356;\"RS\";\"Vila Lângaro\";-52.143795;-28.106184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4357;\"RS\";\"Vila Maria\";-52.148648;-28.535853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4358;\"RS\";\"Vila Nova do Sul\";-53.876041;-30.346131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4359;\"RS\";\"Vista Alegre\";-53.491876;-27.368619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4360;\"RS\";\"Vista Alegre do Prata\";-51.79465;-28.805218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4361;\"RS\";\"Vista Gaúcha\";-53.697382;-27.290217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4362;\"RS\";\"Vitória das Missões\";-54.504022;-28.351612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5652;\"RS\";\"Westfalia\";-51.764455;-29.426275"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4363;\"RS\";\"Xangri-lá\";-50.051932;-29.806493"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3897;\"RS\";\"Água Santa\";-52.031004;-28.167228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "3922;\"RS\";\"Áurea\";-52.050506;-27.693586"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4364;\"SC\";\"Abdon Batista\";-51.023275;-27.612628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4365;\"SC\";\"Abelardo Luz\";-52.322881;-26.571585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4366;\"SC\";\"Agrolândia\";-49.822049;-27.408685"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4367;\"SC\";\"Agronômica\";-49.707996;-27.266154"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4372;\"SC\";\"Alfredo Wagner\";-49.327346;-27.700096"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4373;\"SC\";\"Alto Bela Vista\";-51.904435;-27.433346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4374;\"SC\";\"Anchieta\";-53.331908;-26.538216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4375;\"SC\";\"Angelina\";-48.987867;-27.57041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4376;\"SC\";\"Anita Garibaldi\";-51.127143;-27.689743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4377;\"SC\";\"Anitápolis\";-49.131633;-27.901183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4378;\"SC\";\"Antônio Carlos\";-48.766007;-27.51907"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4379;\"SC\";\"Apiúna\";-49.388506;-27.037493"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4380;\"SC\";\"Arabutã\";-52.142263;-27.158691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4381;\"SC\";\"Araquari\";-48.718825;-26.375408"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4382;\"SC\";\"Araranguá\";-49.491809;-28.935615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4383;\"SC\";\"Armazém\";-49.021506;-28.244812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4384;\"SC\";\"Arroio Trinta\";-51.340719;-26.925655"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4385;\"SC\";\"Arvoredo\";-52.45426;-27.074816"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4386;\"SC\";\"Ascurra\";-49.37828;-26.954821"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4387;\"SC\";\"Atalanta\";-49.778863;-27.421916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4388;\"SC\";\"Aurora\";-49.629525;-27.309786"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4389;\"SC\";\"Balneário Arroio do Silva\";-49.423689;-28.980644"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4390;\"SC\";\"Balneário Barra do Sul\";-48.612317;-26.459708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4391;\"SC\";\"Balneário Camboriú\";-48.635152;-26.992594"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4392;\"SC\";\"Balneário Gaivota\";-49.584092;-29.15272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4556;\"SC\";\"Balneário Piçarras\";-48.67629;-26.769304"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4393;\"SC\";\"Bandeirante\";-53.641326;-26.770499"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4394;\"SC\";\"Barra Bonita\";-53.44;-26.654"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4395;\"SC\";\"Barra Velha\";-48.693338;-26.636961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4396;\"SC\";\"Bela Vista do Toldo\";-50.466354;-26.274625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4397;\"SC\";\"Belmonte\";-53.57581;-26.842994"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4398;\"SC\";\"Benedito Novo\";-49.359314;-26.780974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4399;\"SC\";\"Biguaçu\";-48.65979;-27.496004"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4400;\"SC\";\"Blumenau\";-49.070904;-26.915501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4401;\"SC\";\"Bocaina do Sul\";-49.942279;-27.745494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4403;\"SC\";\"Bom Jardim da Serra\";-49.637276;-28.337666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4404;\"SC\";\"Bom Jesus\";-52.3919;-26.732595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4405;\"SC\";\"Bom Jesus do Oeste\";-53.096725;-26.692737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4406;\"SC\";\"Bom Retiro\";-49.486994;-27.798993"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4402;\"SC\";\"Bombinhas\";-48.514561;-27.138245"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4407;\"SC\";\"Botuverá\";-49.068892;-27.200749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4408;\"SC\";\"Braço do Norte\";-49.170056;-28.268082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4409;\"SC\";\"Braço do Trombudo\";-49.882145;-27.358578"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4410;\"SC\";\"Brunópolis\";-50.86837;-27.305781"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4411;\"SC\";\"Brusque\";-48.910663;-27.097706"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4413;\"SC\";\"Caibi\";-53.245751;-27.074102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4414;\"SC\";\"Calmon\";-51.095017;-26.594241"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4415;\"SC\";\"Camboriú\";-48.650338;-27.024078"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4416;\"SC\";\"Campo Alegre\";-49.267588;-26.195027"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4417;\"SC\";\"Campo Belo do Sul\";-50.75955;-27.89754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4418;\"SC\";\"Campo Erê\";-53.085614;-26.393056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4419;\"SC\";\"Campos Novos\";-51.227589;-27.400184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4420;\"SC\";\"Canelinha\";-48.765791;-27.261609"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4421;\"SC\";\"Canoinhas\";-50.395001;-26.176591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4423;\"SC\";\"Capinzal\";-51.605702;-27.347295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4424;\"SC\";\"Capivari de Baixo\";-48.963144;-28.449773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4422;\"SC\";\"Capão Alto\";-50.509788;-27.938936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4425;\"SC\";\"Catanduvas\";-51.660158;-27.068972"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4426;\"SC\";\"Caxambu do Sul\";-52.880718;-27.162401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4412;\"SC\";\"Caçador\";-51.012004;-26.77567"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4427;\"SC\";\"Celso Ramos\";-51.335003;-27.632708"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4428;\"SC\";\"Cerro Negro\";-50.867264;-27.794205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4429;\"SC\";\"Chapadão do Lageado\";-49.553879;-27.590507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "1;\"SC\";\"Chapecó\";-52.61519;-27.100448"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4430;\"SC\";\"Cocal do Sul\";-49.333536;-28.598569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4431;\"SC\";\"Concórdia\";-52.025962;-27.233461"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4432;\"SC\";\"Cordilheira Alta\";-52.605582;-26.984403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4433;\"SC\";\"Coronel Freitas\";-52.701122;-26.905713"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4434;\"SC\";\"Coronel Martins\";-52.669361;-26.511043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4435;\"SC\";\"Correia Pinto\";-50.361448;-27.587688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4436;\"SC\";\"Corupá\";-49.245968;-26.42464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4437;\"SC\";\"Criciúma\";-49.372887;-28.672267"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4438;\"SC\";\"Cunha Porã\";-53.166185;-26.895019"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4439;\"SC\";\"Cunhataí\";-53.089474;-26.970924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4440;\"SC\";\"Curitibanos\";-50.581638;-27.282373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4441;\"SC\";\"Descanso\";-53.503395;-26.826971"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4442;\"SC\";\"Dionísio Cerqueira\";-53.635149;-26.264784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4443;\"SC\";\"Dona Emma\";-49.726142;-26.980975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4444;\"SC\";\"Doutor Pedrinho\";-49.479495;-26.71737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4445;\"SC\";\"Entre Rios\";-52.558504;-26.722474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4446;\"SC\";\"Ermo\";-49.643013;-28.986869"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4447;\"SC\";\"Erval Velho\";-51.44299;-27.274321"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4448;\"SC\";\"Faxinal dos Guedes\";-52.259624;-26.845104"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4449;\"SC\";\"Flor do Sertão\";-53.350522;-26.781143"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4450;\"SC\";\"Florianópolis\";-48.547696;-27.594486"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4451;\"SC\";\"Formosa do Sul\";-52.794636;-26.645272"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4452;\"SC\";\"Forquilhinha\";-49.478466;-28.745359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4453;\"SC\";\"Fraiburgo\";-50.919978;-27.023288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4454;\"SC\";\"Frei Rogério\";-50.807621;-27.175021"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4455;\"SC\";\"Galvão\";-52.687528;-26.454934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4456;\"SC\";\"Garopaba\";-48.619896;-28.01856"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4457;\"SC\";\"Garuva\";-48.852026;-26.029185"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4458;\"SC\";\"Gaspar\";-48.953428;-26.933597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4459;\"SC\";\"Governador Celso Ramos\";-48.557608;-27.317161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4461;\"SC\";\"Gravatal\";-49.042683;-28.320763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4460;\"SC\";\"Grão Pará\";-49.225194;-28.180903"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4462;\"SC\";\"Guabiruba\";-48.980445;-27.080811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4463;\"SC\";\"Guaraciaba\";-53.524317;-26.604199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4464;\"SC\";\"Guaramirim\";-49.002628;-26.468753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4465;\"SC\";\"Guarujá do Sul\";-53.529575;-26.385813"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4466;\"SC\";\"Guatambú\";-52.78865;-27.134102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4467;\"SC\";\"Herval d`Oeste\";-51.491728;-27.1903"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4468;\"SC\";\"Ibiam\";-51.235154;-27.184658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4469;\"SC\";\"Ibicaré\";-51.368101;-27.088141"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4470;\"SC\";\"Ibirama\";-49.519314;-27.054665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4472;\"SC\";\"Ilhota\";-48.825116;-26.902284"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4473;\"SC\";\"Imaruí\";-48.81701;-28.333938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4474;\"SC\";\"Imbituba\";-48.665884;-28.228367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4475;\"SC\";\"Imbuia\";-49.421766;-27.49082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4476;\"SC\";\"Indaial\";-49.235417;-26.899247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4477;\"SC\";\"Iomerê\";-51.244227;-27.00192"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4478;\"SC\";\"Ipira\";-51.77579;-27.403818"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4479;\"SC\";\"Iporã do Oeste\";-53.535483;-26.985396"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4480;\"SC\";\"Ipuaçu\";-52.456633;-26.632025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4481;\"SC\";\"Ipumirim\";-52.128873;-27.077215"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4482;\"SC\";\"Iraceminha\";-53.276682;-26.821536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4483;\"SC\";\"Irani\";-51.901204;-27.028684"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4484;\"SC\";\"Irati\";-52.895513;-26.653862"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4485;\"SC\";\"Irineópolis\";-50.795687;-26.242006"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4487;\"SC\";\"Itaiópolis\";-49.9092;-26.338975"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4488;\"SC\";\"Itajaí\";-48.670475;-26.910097"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4489;\"SC\";\"Itapema\";-48.616038;-27.08607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4490;\"SC\";\"Itapiranga\";-53.716603;-27.165856"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4491;\"SC\";\"Itapoá\";-48.618188;-26.11576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4492;\"SC\";\"Ituporanga\";-49.596253;-27.410063"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4486;\"SC\";\"Itá\";-52.321187;-27.290666"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4471;\"SC\";\"Içara\";-49.308654;-28.713206"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4493;\"SC\";\"Jaborá\";-51.727899;-27.178233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4494;\"SC\";\"Jacinto Machado\";-49.762316;-28.996094"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4495;\"SC\";\"Jaguaruna\";-49.02958;-28.614598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4496;\"SC\";\"Jaraguá do Sul\";-49.07125;-26.485083"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4497;\"SC\";\"Jardinópolis\";-52.862524;-26.719136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4498;\"SC\";\"Joaçaba\";-51.510788;-27.172105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4499;\"SC\";\"Joinville\";-48.848675;-26.304497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4500;\"SC\";\"José Boiteux\";-49.62863;-26.956568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4501;\"SC\";\"Jupiá\";-52.729766;-26.395038"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4502;\"SC\";\"Lacerdópolis\";-51.55766;-27.257941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4503;\"SC\";\"Lages\";-50.325862;-27.814966"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4504;\"SC\";\"Laguna\";-48.777234;-28.484287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4505;\"SC\";\"Lajeado Grande\";-52.564782;-26.857614"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4506;\"SC\";\"Laurentino\";-49.733119;-27.217295"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4507;\"SC\";\"Lauro Muller\";-49.40348;-28.385899"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4508;\"SC\";\"Lebon Régis\";-50.692109;-26.927987"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4509;\"SC\";\"Leoberto Leal\";-49.278865;-27.508123"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4510;\"SC\";\"Lindóia do Sul\";-52.068955;-27.054472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4511;\"SC\";\"Lontras\";-49.535049;-27.168358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4512;\"SC\";\"Luiz Alves\";-48.93224;-26.715136"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4513;\"SC\";\"Luzerna\";-51.468221;-27.130363"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4514;\"SC\";\"Macieira\";-51.37051;-26.855232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4515;\"SC\";\"Mafra\";-49.808624;-26.115935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4516;\"SC\";\"Major Gercino\";-48.94878;-27.419236"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4517;\"SC\";\"Major Vieira\";-50.326592;-26.370901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4518;\"SC\";\"Maracajá\";-49.460546;-28.846337"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4519;\"SC\";\"Maravilha\";-53.173699;-26.766529"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4520;\"SC\";\"Marema\";-52.626445;-26.802361"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4521;\"SC\";\"Massaranduba\";-49.005351;-26.610868"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4522;\"SC\";\"Matos Costa\";-51.150095;-26.47087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4523;\"SC\";\"Meleiro\";-49.637821;-28.824433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4524;\"SC\";\"Mirim Doce\";-50.078623;-27.197002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4525;\"SC\";\"Modelo\";-53.039956;-26.772924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4526;\"SC\";\"Mondaí\";-53.403177;-27.100785"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4527;\"SC\";\"Monte Carlo\";-50.980785;-27.223916"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4528;\"SC\";\"Monte Castelo\";-50.232724;-26.460989"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4530;\"SC\";\"Morro Grande\";-49.721362;-28.80057"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4529;\"SC\";\"Morro da Fumaça\";-49.216937;-28.651117"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4531;\"SC\";\"Navegantes\";-48.654593;-26.894293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4532;\"SC\";\"Nova Erechim\";-52.906569;-26.898159"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4533;\"SC\";\"Nova Itaberaba\";-52.814076;-26.942805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4534;\"SC\";\"Nova Trento\";-48.929836;-27.277976"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4535;\"SC\";\"Nova Veneza\";-49.505541;-28.633772"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4536;\"SC\";\"Novo Horizonte\";-52.828104;-26.444218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4537;\"SC\";\"Orleans\";-49.298616;-28.348674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4538;\"SC\";\"Otacílio Costa\";-50.123113;-27.478917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4539;\"SC\";\"Ouro\";-51.619373;-27.337905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4540;\"SC\";\"Ouro Verde\";-52.310845;-26.692027"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4541;\"SC\";\"Paial\";-52.497517;-27.254105"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4542;\"SC\";\"Painel\";-50.097175;-27.923413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4543;\"SC\";\"Palhoça\";-48.669661;-27.645518"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4544;\"SC\";\"Palma Sola\";-53.277091;-26.347069"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4545;\"SC\";\"Palmeira\";-50.157717;-27.583013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4546;\"SC\";\"Palmitos\";-53.158612;-27.070219"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4547;\"SC\";\"Papanduva\";-50.141938;-26.377709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4548;\"SC\";\"Paraíso\";-53.671595;-26.620024"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4549;\"SC\";\"Passo de Torres\";-49.722034;-29.309889"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4550;\"SC\";\"Passos Maia\";-52.056768;-26.782945"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4551;\"SC\";\"Paulo Lopes\";-48.686358;-27.960698"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4552;\"SC\";\"Pedras Grandes\";-49.19491;-28.433862"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4553;\"SC\";\"Penha\";-48.646525;-26.775418"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4554;\"SC\";\"Peritiba\";-51.901793;-27.375449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4555;\"SC\";\"Petrolândia\";-49.693747;-27.53463"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4557;\"SC\";\"Pinhalzinho\";-52.991268;-26.849546"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4558;\"SC\";\"Pinheiro Preto\";-51.224249;-27.048318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4559;\"SC\";\"Piratuba\";-51.766834;-27.424228"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4560;\"SC\";\"Planalto Alegre\";-52.86699;-27.070423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4561;\"SC\";\"Pomerode\";-49.178456;-26.738355"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4562;\"SC\";\"Ponte Alta\";-50.376404;-27.483497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4563;\"SC\";\"Ponte Alta do Norte\";-50.465947;-27.159112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4564;\"SC\";\"Ponte Serrada\";-52.01125;-26.873278"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4565;\"SC\";\"Porto Belo\";-48.546865;-27.158569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4566;\"SC\";\"Porto União\";-51.075858;-26.245075"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4567;\"SC\";\"Pouso Redondo\";-49.930098;-27.256725"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4568;\"SC\";\"Praia Grande\";-49.952503;-29.191846"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4569;\"SC\";\"Presidente Castelo Branco\";-51.803342;-27.224778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4570;\"SC\";\"Presidente Getúlio\";-49.624609;-27.04743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4571;\"SC\";\"Presidente Nereu\";-49.388938;-27.27683"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4572;\"SC\";\"Princesa\";-53.599427;-26.44412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4573;\"SC\";\"Quilombo\";-52.72396;-26.726432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4574;\"SC\";\"Rancho Queimado\";-49.019145;-27.672733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4580;\"SC\";\"Rio Fortuna\";-49.106816;-28.124383"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4581;\"SC\";\"Rio Negrinho\";-49.517746;-26.259075"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4582;\"SC\";\"Rio Rufino\";-49.775373;-27.859191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4575;\"SC\";\"Rio das Antas\";-51.067414;-26.894615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4576;\"SC\";\"Rio do Campo\";-50.136021;-26.945181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4577;\"SC\";\"Rio do Oeste\";-49.798896;-27.195155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4579;\"SC\";\"Rio do Sul\";-49.643016;-27.215596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4578;\"SC\";\"Rio dos Cedros\";-49.271828;-26.739777"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4583;\"SC\";\"Riqueza\";-53.326452;-27.065325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4584;\"SC\";\"Rodeio\";-49.36491;-26.924349"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4585;\"SC\";\"Romelândia\";-53.317193;-26.680888"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4586;\"SC\";\"Salete\";-49.998811;-26.97978"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4587;\"SC\";\"Saltinho\";-53.057763;-26.604932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4588;\"SC\";\"Salto Veloso\";-51.404337;-26.902991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4589;\"SC\";\"Sangão\";-49.132181;-28.632638"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4590;\"SC\";\"Santa Cecília\";-50.42517;-26.959182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4591;\"SC\";\"Santa Helena\";-53.621439;-26.936966"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4592;\"SC\";\"Santa Rosa de Lima\";-49.133043;-28.033124"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4593;\"SC\";\"Santa Rosa do Sul\";-49.710944;-29.131273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4594;\"SC\";\"Santa Terezinha\";-50.009017;-26.7813"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4595;\"SC\";\"Santa Terezinha do Progresso\";-53.199716;-26.62403"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4596;\"SC\";\"Santiago do Sul\";-52.679852;-26.638784"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4597;\"SC\";\"Santo Amaro da Imperatriz\";-48.781305;-27.685182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4619;\"SC\";\"Saudades\";-53.00213;-26.931677"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4620;\"SC\";\"Schroeder\";-49.074041;-26.411571"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4621;\"SC\";\"Seara\";-52.299045;-27.156432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4622;\"SC\";\"Serra Alta\";-53.04087;-26.722898"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4623;\"SC\";\"Siderópolis\";-49.431423;-28.595501"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4624;\"SC\";\"Sombrio\";-49.632776;-29.107985"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4625;\"SC\";\"Sul Brasil\";-52.963965;-26.735148"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4598;\"SC\";\"São Bento do Sul\";-49.383077;-26.249542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4599;\"SC\";\"São Bernardino\";-52.968669;-26.473926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4600;\"SC\";\"São Bonifácio\";-48.932608;-27.900907"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4601;\"SC\";\"São Carlos\";-53.003704;-27.079757"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4602;\"SC\";\"São Cristovão do Sul\";-50.438807;-27.266627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4603;\"SC\";\"São Domingos\";-52.531333;-26.554811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4604;\"SC\";\"São Francisco do Sul\";-48.634372;-26.257917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4609;\"SC\";\"São Joaquim\";-49.945715;-28.288709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4610;\"SC\";\"São José\";-48.636607;-27.613577"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4611;\"SC\";\"São José do Cedro\";-53.495456;-26.456135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4612;\"SC\";\"São José do Cerrito\";-50.573305;-27.660189"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4605;\"SC\";\"São João Batista\";-48.847395;-27.277186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4606;\"SC\";\"São João do Itaperiú\";-48.768277;-26.621276"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4607;\"SC\";\"São João do Oeste\";-53.597657;-27.098353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4608;\"SC\";\"São João do Sul\";-49.809357;-29.215415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4613;\"SC\";\"São Lourenço do Oeste\";-52.849837;-26.35566"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4614;\"SC\";\"São Ludgero\";-49.180631;-28.314375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4615;\"SC\";\"São Martinho\";-48.986724;-28.160883"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4616;\"SC\";\"São Miguel da Boa Vista\";-53.251107;-26.686961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4617;\"SC\";\"São Miguel do Oeste\";-53.516259;-26.724224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4618;\"SC\";\"São Pedro de Alcântara\";-48.804768;-27.566515"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4626;\"SC\";\"Taió\";-49.994184;-27.121001"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4627;\"SC\";\"Tangará\";-51.247253;-27.099576"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4628;\"SC\";\"Tigrinhos\";-53.154529;-26.68761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4629;\"SC\";\"Tijucas\";-48.632221;-27.235425"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4630;\"SC\";\"Timbé do Sul\";-49.842048;-28.828749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4631;\"SC\";\"Timbó\";-49.269039;-26.82464"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4632;\"SC\";\"Timbó Grande\";-50.66072;-26.612671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4634;\"SC\";\"Treviso\";-49.463367;-28.509661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4636;\"SC\";\"Treze Tílias\";-51.408444;-27.002604"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4635;\"SC\";\"Treze de Maio\";-49.156535;-28.553662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4637;\"SC\";\"Trombudo Central\";-49.792953;-27.303296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4633;\"SC\";\"Três Barras\";-50.319692;-26.105632"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4638;\"SC\";\"Tubarão\";-49.014371;-28.47131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4639;\"SC\";\"Tunápolis\";-53.641725;-26.968103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4640;\"SC\";\"Turvo\";-49.683067;-28.927169"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4641;\"SC\";\"União do Oeste\";-52.854123;-26.76204"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4642;\"SC\";\"Urubici\";-49.592547;-28.015663"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4643;\"SC\";\"Urupema\";-49.872882;-27.955674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4644;\"SC\";\"Urussanga\";-49.323814;-28.518049"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4646;\"SC\";\"Vargem\";-50.972355;-27.486714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4647;\"SC\";\"Vargem Bonita\";-51.740238;-27.005456"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4645;\"SC\";\"Vargeão\";-52.154907;-26.862088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4648;\"SC\";\"Vidal Ramos\";-49.359339;-27.388643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4649;\"SC\";\"Videira\";-51.154274;-27.008624"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4650;\"SC\";\"Vitor Meireles\";-49.832787;-26.878152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4651;\"SC\";\"Witmarsum\";-49.794675;-26.927487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4652;\"SC\";\"Xanxerê\";-52.403579;-26.874694"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4653;\"SC\";\"Xavantina\";-52.342994;-27.0667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4654;\"SC\";\"Xaxim\";-52.537446;-26.959643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4655;\"SC\";\"Zortéa\";-51.551993;-27.452065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4368;\"SC\";\"Água Doce\";-51.552812;-26.998452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4370;\"SC\";\"Águas Frias\";-52.856773;-26.879377"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4371;\"SC\";\"Águas Mornas\";-48.824347;-27.696325"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4369;\"SC\";\"Águas de Chapecó\";-52.980844;-27.075424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4656;\"SE\";\"Amparo de São Francisco\";-36.934993;-10.134842"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4657;\"SE\";\"Aquidabã\";-37.014768;-10.278043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4658;\"SE\";\"Aracaju\";-37.06766;-10.909133"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4659;\"SE\";\"Arauá\";-37.620058;-11.261391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4660;\"SE\";\"Areia Branca\";-37.325063;-10.758005"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4661;\"SE\";\"Barra dos Coqueiros\";-37.032317;-10.899623"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4662;\"SE\";\"Boquim\";-37.619466;-11.13972"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4663;\"SE\";\"Brejo Grande\";-36.461102;-10.429713"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4664;\"SE\";\"Campo do Brito\";-37.495369;-10.739248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4665;\"SE\";\"Canhoba\";-36.980639;-10.136465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4666;\"SE\";\"Canindé de São Francisco\";-37.792294;-9.648823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4667;\"SE\";\"Capela\";-37.062847;-10.506928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4668;\"SE\";\"Carira\";-37.700241;-10.352361"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4669;\"SE\";\"Carmópolis\";-36.988742;-10.644869"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4670;\"SE\";\"Cedro de São João\";-36.885641;-10.253441"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4671;\"SE\";\"Cristinápolis\";-37.758494;-11.466778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4672;\"SE\";\"Cumbe\";-37.184622;-10.351979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4673;\"SE\";\"Divina Pastora\";-37.150557;-10.678161"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4674;\"SE\";\"Estância\";-37.448381;-11.265922"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4675;\"SE\";\"Feira Nova\";-37.314672;-10.261645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4676;\"SE\";\"Frei Paulo\";-37.527934;-10.551292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4677;\"SE\";\"Gararu\";-37.086921;-9.972202"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4678;\"SE\";\"General Maynard\";-36.983758;-10.683471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4679;\"SE\";\"Graccho Cardoso\";-37.200559;-10.225233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4680;\"SE\";\"Ilha das Flores\";-36.547935;-10.442506"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4681;\"SE\";\"Indiaroba\";-37.514979;-11.515746"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4682;\"SE\";\"Itabaiana\";-37.427287;-10.682555"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4683;\"SE\";\"Itabaianinha\";-37.787505;-11.269268"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4684;\"SE\";\"Itabi\";-37.105558;-10.124808"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4685;\"SE\";\"Itaporanga d`Ajuda\";-37.307822;-10.989955"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4686;\"SE\";\"Japaratuba\";-36.941765;-10.584913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4687;\"SE\";\"Japoatã\";-36.804504;-10.347719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4688;\"SE\";\"Lagarto\";-37.668948;-10.913628"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4689;\"SE\";\"Laranjeiras\";-37.173123;-10.798121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4690;\"SE\";\"Macambira\";-37.541303;-10.661871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4691;\"SE\";\"Malhada dos Bois\";-36.925188;-10.341837"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4692;\"SE\";\"Malhador\";-37.300437;-10.664926"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4693;\"SE\";\"Maruim\";-37.085598;-10.730762"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4694;\"SE\";\"Moita Bonita\";-37.35121;-10.576908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4695;\"SE\";\"Monte Alegre de Sergipe\";-37.561605;-10.025574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4696;\"SE\";\"Muribeca\";-36.95882;-10.427146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4697;\"SE\";\"Neópolis\";-36.584952;-10.321503"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4698;\"SE\";\"Nossa Senhora Aparecida\";-37.451699;-10.394387"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4699;\"SE\";\"Nossa Senhora da Glória\";-37.421125;-10.215809"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4700;\"SE\";\"Nossa Senhora das Dores\";-37.196285;-10.48536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4701;\"SE\";\"Nossa Senhora de Lourdes\";-37.061528;-10.077168"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4702;\"SE\";\"Nossa Senhora do Socorro\";-37.123113;-10.846822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4703;\"SE\";\"Pacatuba\";-36.653078;-10.453811"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4704;\"SE\";\"Pedra Mole\";-37.692189;-10.613439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4705;\"SE\";\"Pedrinhas\";-37.67749;-11.190174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4706;\"SE\";\"Pinhão\";-37.724246;-10.567664"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4707;\"SE\";\"Pirambu\";-36.854427;-10.721516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4710;\"SE\";\"Porto da Folha\";-37.284233;-9.916264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4708;\"SE\";\"Poço Redondo\";-37.683263;-9.806155"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4709;\"SE\";\"Poço Verde\";-38.181294;-10.715129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4711;\"SE\";\"Propriá\";-36.844153;-10.213773"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4713;\"SE\";\"Riachuelo\";-37.196551;-10.735008"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4712;\"SE\";\"Riachão do Dantas\";-37.730985;-11.072904"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4714;\"SE\";\"Ribeirópolis\";-37.438035;-10.535669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4715;\"SE\";\"Rosário do Catete\";-37.03569;-10.690432"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4716;\"SE\";\"Salgado\";-37.480385;-11.028833"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4717;\"SE\";\"Santa Luzia do Itanhy\";-37.458642;-11.353596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4719;\"SE\";\"Santa Rosa de Lima\";-37.193123;-10.643362"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4718;\"SE\";\"Santana do São Francisco\";-36.610539;-10.292233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4720;\"SE\";\"Santo Amaro das Brotas\";-37.05643;-10.789225"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4726;\"SE\";\"Simão Dias\";-37.809746;-10.738652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4727;\"SE\";\"Siriri\";-37.113068;-10.596488"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4721;\"SE\";\"São Cristóvão\";-37.20436;-11.008443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4722;\"SE\";\"São Domingos\";-37.568515;-10.791613"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4723;\"SE\";\"São Francisco\";-36.886907;-10.344151"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4724;\"SE\";\"São Miguel do Aleixo\";-37.38356;-10.384662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4728;\"SE\";\"Telha\";-36.881778;-10.206424"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4729;\"SE\";\"Tobias Barreto\";-37.999451;-11.179799"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4730;\"SE\";\"Tomar do Geru\";-37.843338;-11.369391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4731;\"SE\";\"Umbaúba\";-37.662347;-11.380921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4732;\"SP\";\"Adamantina\";-51.073695;-21.682012"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4733;\"SP\";\"Adolfo\";-49.645128;-21.232494"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4734;\"SP\";\"Aguaí\";-46.973502;-22.057207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4739;\"SP\";\"Agudos\";-48.98632;-22.469433"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4740;\"SP\";\"Alambari\";-47.897971;-23.550338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4741;\"SP\";\"Alfredo Marcondes\";-51.413956;-21.9527"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4742;\"SP\";\"Altair\";-49.057073;-20.524207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4743;\"SP\";\"Altinópolis\";-47.3712;-21.021364"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4744;\"SP\";\"Alto Alegre\";-50.16798;-21.581103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4745;\"SP\";\"Alumínio\";-47.254571;-23.530553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4749;\"SP\";\"Alvinlândia\";-49.762323;-22.443481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4750;\"SP\";\"Americana\";-47.333119;-22.73736"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4753;\"SP\";\"Amparo\";-46.772022;-22.70879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4751;\"SP\";\"Américo Brasiliense\";-48.11467;-21.728771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4752;\"SP\";\"Américo de Campos\";-49.735904;-20.298476"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4754;\"SP\";\"Analândia\";-47.661939;-22.128917"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4755;\"SP\";\"Andradina\";-51.378568;-20.894761"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4756;\"SP\";\"Angatuba\";-48.413872;-23.491733"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4757;\"SP\";\"Anhembi\";-48.133595;-22.792959"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4758;\"SP\";\"Anhumas\";-51.389542;-22.293414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4759;\"SP\";\"Aparecida\";-45.232496;-22.849509"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4760;\"SP\";\"Aparecida d`Oeste\";-50.883506;-20.448734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4761;\"SP\";\"Apiaí\";-48.844271;-24.510819"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4765;\"SP\";\"Aramina\";-47.787251;-20.088152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4766;\"SP\";\"Arandu\";-49.048661;-23.138559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4767;\"SP\";\"Arapeí\";-44.444127;-22.671744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4768;\"SP\";\"Araraquara\";-48.178014;-21.784511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4769;\"SP\";\"Araras\";-47.384235;-22.357238"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4762;\"SP\";\"Araçariguama\";-47.060825;-23.436597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4763;\"SP\";\"Araçatuba\";-50.440106;-21.207648"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4764;\"SP\";\"Araçoiaba da Serra\";-47.616605;-23.502901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4770;\"SP\";\"Arco-Íris\";-50.466018;-21.772797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4771;\"SP\";\"Arealva\";-48.913511;-22.031026"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4772;\"SP\";\"Areias\";-44.69924;-22.578597"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4773;\"SP\";\"Areiópolis\";-48.668052;-22.667216"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4774;\"SP\";\"Ariranha\";-48.790418;-21.18716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4775;\"SP\";\"Artur Nogueira\";-47.172679;-22.572737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4776;\"SP\";\"Arujá\";-46.319983;-23.396476"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4777;\"SP\";\"Aspásia\";-50.728046;-20.160028"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4778;\"SP\";\"Assis\";-50.418307;-22.659957"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4779;\"SP\";\"Atibaia\";-46.556262;-23.117059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4780;\"SP\";\"Auriflama\";-50.55719;-20.683621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4782;\"SP\";\"Avanhandava\";-49.950893;-21.458416"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4783;\"SP\";\"Avaré\";-48.925052;-23.106732"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4781;\"SP\";\"Avaí\";-49.335596;-22.151409"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4784;\"SP\";\"Bady Bassitt\";-49.4385;-20.919689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4785;\"SP\";\"Balbinos\";-49.361906;-21.896293"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4787;\"SP\";\"Bananal\";-44.328114;-22.681932"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4789;\"SP\";\"Barbosa\";-49.951816;-21.265661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4790;\"SP\";\"Bariri\";-48.743828;-22.072955"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4791;\"SP\";\"Barra Bonita\";-48.558349;-22.490859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4792;\"SP\";\"Barra do Chapéu\";-49.023784;-24.472203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4793;\"SP\";\"Barra do Turvo\";-48.50126;-24.759035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4794;\"SP\";\"Barretos\";-48.569832;-20.553146"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4795;\"SP\";\"Barrinha\";-48.163614;-21.186374"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4796;\"SP\";\"Barueri\";-46.879042;-23.505689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4788;\"SP\";\"Barão de Antonina\";-49.563366;-23.628419"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4797;\"SP\";\"Bastos\";-50.735695;-21.920984"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4798;\"SP\";\"Batatais\";-47.592149;-20.892867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4799;\"SP\";\"Bauru\";-49.087142;-22.324569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4800;\"SP\";\"Bebedouro\";-48.479083;-20.949077"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4801;\"SP\";\"Bento de Abreu\";-50.813959;-21.268629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4802;\"SP\";\"Bernardino de Campos\";-49.467897;-23.016439"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4803;\"SP\";\"Bertioga\";-46.139586;-23.848568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4804;\"SP\";\"Bilac\";-50.47464;-21.403962"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4805;\"SP\";\"Birigui\";-50.343162;-21.291034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4806;\"SP\";\"Biritiba-Mirim\";-46.0407;-23.569774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4807;\"SP\";\"Boa Esperança do Sul\";-48.390622;-21.991832"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4808;\"SP\";\"Bocaina\";-48.523044;-22.136538"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4809;\"SP\";\"Bofete\";-48.258203;-23.105543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4810;\"SP\";\"Boituva\";-47.678574;-23.285531"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4811;\"SP\";\"Bom Jesus dos Perdões\";-46.467474;-23.135579"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4812;\"SP\";\"Bom Sucesso de Itararé\";-49.145104;-24.315511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4814;\"SP\";\"Boracéia\";-48.780751;-22.192645"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4815;\"SP\";\"Borborema\";-49.074089;-21.621368"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4816;\"SP\";\"Borebi\";-48.970749;-22.572763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4813;\"SP\";\"Borá\";-50.540919;-22.269627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4817;\"SP\";\"Botucatu\";-48.443706;-22.883697"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4818;\"SP\";\"Bragança Paulista\";-46.54188;-22.952681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4819;\"SP\";\"Braúna\";-50.317489;-21.499039"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4820;\"SP\";\"Brejo Alegre\";-50.186076;-21.165147"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4821;\"SP\";\"Brodowski\";-47.657217;-20.984532"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4822;\"SP\";\"Brotas\";-48.125115;-22.279476"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4823;\"SP\";\"Buri\";-48.595811;-23.797689"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4824;\"SP\";\"Buritama\";-50.147494;-21.066064"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4825;\"SP\";\"Buritizal\";-47.709636;-20.191084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4786;\"SP\";\"Bálsamo\";-49.586487;-20.734843"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4827;\"SP\";\"Cabreúva\";-47.136251;-23.30533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4826;\"SP\";\"Cabrália Paulista\";-49.339337;-22.45756"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4829;\"SP\";\"Cachoeira Paulista\";-45.015384;-22.666498"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4830;\"SP\";\"Caconde\";-46.643659;-21.527995"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4831;\"SP\";\"Cafelândia\";-49.609213;-21.803112"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4832;\"SP\";\"Caiabu\";-51.239408;-22.012719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4833;\"SP\";\"Caieiras\";-46.73974;-23.360729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4834;\"SP\";\"Caiuá\";-51.996918;-21.832164"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4835;\"SP\";\"Cajamar\";-46.878146;-23.355014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4836;\"SP\";\"Cajati\";-48.122347;-24.73239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4837;\"SP\";\"Cajobi\";-48.806336;-20.877287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4838;\"SP\";\"Cajuru\";-47.303022;-21.274934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4839;\"SP\";\"Campina do Monte Alegre\";-48.4758;-23.58948"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4840;\"SP\";\"Campinas\";-47.06595;-22.905346"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4841;\"SP\";\"Campo Limpo Paulista\";-46.788919;-23.207791"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4843;\"SP\";\"Campos Novos Paulista\";-49.998726;-22.601952"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4842;\"SP\";\"Campos do Jordão\";-45.583337;-22.729618"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4844;\"SP\";\"Cananéia\";-47.934074;-25.014428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4845;\"SP\";\"Canas\";-45.052117;-22.700344"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4848;\"SP\";\"Canitar\";-49.783947;-23.004014"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4850;\"SP\";\"Capela do Alto\";-47.738834;-23.468471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4851;\"SP\";\"Capivari\";-47.50715;-22.995144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4849;\"SP\";\"Capão Bonito\";-48.348222;-24.011265"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4852;\"SP\";\"Caraguatatuba\";-45.412533;-23.612535"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4853;\"SP\";\"Carapicuíba\";-46.840676;-23.523471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4854;\"SP\";\"Cardoso\";-49.918322;-20.080031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4855;\"SP\";\"Casa Branca\";-47.085245;-21.77081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4857;\"SP\";\"Castilho\";-51.488394;-20.868924"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4858;\"SP\";\"Catanduva\";-48.977015;-21.131381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4859;\"SP\";\"Catiguá\";-49.06162;-21.051861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4828;\"SP\";\"Caçapava\";-45.707645;-23.099204"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4860;\"SP\";\"Cedral\";-49.266426;-20.900949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4861;\"SP\";\"Cerqueira César\";-49.165524;-23.037999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4862;\"SP\";\"Cerquilho\";-47.745862;-23.166487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4863;\"SP\";\"Cesário Lange\";-47.954453;-23.226035"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4864;\"SP\";\"Charqueada\";-47.775468;-22.50958"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4865;\"SP\";\"Chavantes\";-49.709616;-23.036632"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4866;\"SP\";\"Clementina\";-50.452476;-21.560447"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4867;\"SP\";\"Colina\";-48.53867;-20.711443"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4868;\"SP\";\"Colômbia\";-48.686468;-20.176771"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4869;\"SP\";\"Conchal\";-47.172927;-22.337512"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4870;\"SP\";\"Conchas\";-48.013391;-23.01543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4871;\"SP\";\"Cordeirópolis\";-47.451886;-22.477778"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4872;\"SP\";\"Coroados\";-50.285937;-21.352082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4873;\"SP\";\"Coronel Macedo\";-49.309966;-23.626143"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4874;\"SP\";\"Corumbataí\";-47.621451;-22.221334"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4876;\"SP\";\"Cosmorama\";-49.782747;-20.475472"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4875;\"SP\";\"Cosmópolis\";-47.192578;-22.641906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4877;\"SP\";\"Cotia\";-46.91902;-23.602177"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4878;\"SP\";\"Cravinhos\";-47.732427;-21.337959"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4879;\"SP\";\"Cristais Paulista\";-47.420915;-20.403569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4881;\"SP\";\"Cruzeiro\";-44.96896;-22.572764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4880;\"SP\";\"Cruzália\";-50.790909;-22.737309"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4882;\"SP\";\"Cubatão\";-46.423968;-23.891121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4883;\"SP\";\"Cunha\";-44.957559;-23.0731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4856;\"SP\";\"Cássia dos Coqueiros\";-47.164327;-21.280082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4846;\"SP\";\"Cândido Mota\";-50.387326;-22.747093"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4847;\"SP\";\"Cândido Rodrigues\";-48.632719;-21.327531"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4884;\"SP\";\"Descalvado\";-47.618105;-21.900211"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4885;\"SP\";\"Diadema\";-46.62052;-23.681347"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4886;\"SP\";\"Dirce Reis\";-50.607335;-20.464207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4887;\"SP\";\"Divinolândia\";-46.736128;-21.663709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4888;\"SP\";\"Dobrada\";-48.393476;-21.515533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4889;\"SP\";\"Dois Córregos\";-48.381924;-22.367291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4890;\"SP\";\"Dolcinópolis\";-50.514898;-20.124047"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4891;\"SP\";\"Dourado\";-48.317823;-22.104436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4892;\"SP\";\"Dracena\";-51.535034;-21.484311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4893;\"SP\";\"Duartina\";-49.408355;-22.414562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4894;\"SP\";\"Dumont\";-47.975622;-21.232401"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4895;\"SP\";\"Echaporã\";-50.203787;-22.43256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4896;\"SP\";\"Eldorado\";-48.114085;-24.52809"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4897;\"SP\";\"Elias Fausto\";-47.368153;-23.042822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4898;\"SP\";\"Elisiário\";-49.114594;-21.167754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4899;\"SP\";\"Embaúba\";-48.832452;-20.979595"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4900;\"SP\";\"Embu\";-46.857854;-23.643717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4901;\"SP\";\"Embu-Guaçu\";-46.813593;-23.829717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4902;\"SP\";\"Emilianópolis\";-51.483168;-21.831436"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4903;\"SP\";\"Engenheiro Coelho\";-47.211045;-22.483573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4904;\"SP\";\"Espírito Santo do Pinhal\";-46.74767;-22.190871"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4905;\"SP\";\"Espírito Santo do Turvo\";-49.434119;-22.69254"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4906;\"SP\";\"Estiva Gerbi\";-46.948111;-22.271314"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4907;\"SP\";\"Estrela d`Oeste\";-50.404872;-20.28755"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4908;\"SP\";\"Estrela do Norte\";-51.663203;-22.485935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4909;\"SP\";\"Euclides da Cunha Paulista\";-52.592779;-22.55452"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4910;\"SP\";\"Fartura\";-49.512403;-23.391643"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4912;\"SP\";\"Fernando Prestes\";-48.687384;-21.266061"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4911;\"SP\";\"Fernandópolis\";-50.247115;-20.280556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4913;\"SP\";\"Fernão\";-49.518735;-22.36066"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4914;\"SP\";\"Ferraz de Vasconcelos\";-46.37097;-23.541056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4915;\"SP\";\"Flora Rica\";-51.382107;-21.672738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4916;\"SP\";\"Floreal\";-50.151282;-20.675193"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4918;\"SP\";\"Florínia\";-50.732976;-22.902483"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4917;\"SP\";\"Flórida Paulista\";-51.172445;-21.612711"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4919;\"SP\";\"Franca\";-47.403861;-20.53523"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4920;\"SP\";\"Francisco Morato\";-46.744781;-23.279248"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4921;\"SP\";\"Franco da Rocha\";-46.729011;-23.322882"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4922;\"SP\";\"Gabriel Monteiro\";-50.557321;-21.52941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4924;\"SP\";\"Garça\";-49.654596;-22.212516"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4925;\"SP\";\"Gastão Vidigal\";-50.191183;-20.794776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4926;\"SP\";\"Gavião Peixoto\";-48.49566;-21.836658"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4927;\"SP\";\"General Salgado\";-50.36397;-20.648458"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4928;\"SP\";\"Getulina\";-49.931205;-21.796117"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4929;\"SP\";\"Glicério\";-50.212269;-21.381193"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4931;\"SP\";\"Guaimbê\";-49.89861;-21.909072"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4930;\"SP\";\"Guaiçara\";-49.801287;-21.619537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4934;\"SP\";\"Guapiara\";-48.529549;-24.18921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4933;\"SP\";\"Guapiaçu\";-49.217201;-20.795885"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4937;\"SP\";\"Guaraci\";-48.939107;-20.49766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4938;\"SP\";\"Guarani d`Oeste\";-50.341123;-20.074646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4939;\"SP\";\"Guarantã\";-49.591351;-21.894195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4940;\"SP\";\"Guararapes\";-50.645338;-21.254431"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4941;\"SP\";\"Guararema\";-46.036946;-23.411195"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4942;\"SP\";\"Guaratinguetá\";-45.193788;-22.807534"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4936;\"SP\";\"Guaraçaí\";-51.211854;-21.029173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4943;\"SP\";\"Guareí\";-48.183715;-23.371359"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4944;\"SP\";\"Guariba\";-48.23158;-21.35938"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4945;\"SP\";\"Guarujá\";-46.257959;-23.988798"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4946;\"SP\";\"Guarulhos\";-46.533347;-23.453758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4935;\"SP\";\"Guará\";-47.823626;-20.430162"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4947;\"SP\";\"Guatapará\";-48.035588;-21.494444"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4932;\"SP\";\"Guaíra\";-48.31197;-20.319591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4948;\"SP\";\"Guzolândia\";-50.664505;-20.646679"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4923;\"SP\";\"Gália\";-49.550356;-22.291846"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4949;\"SP\";\"Herculândia\";-50.390734;-22.003802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4950;\"SP\";\"Holambra\";-47.048694;-22.640513"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4951;\"SP\";\"Hortolândia\";-47.214259;-22.852854"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4952;\"SP\";\"Iacanga\";-49.030959;-21.889646"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4953;\"SP\";\"Iacri\";-50.693152;-21.857199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4954;\"SP\";\"Iaras\";-49.163377;-22.868199"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4955;\"SP\";\"Ibaté\";-47.988211;-21.958358"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4957;\"SP\";\"Ibirarema\";-50.073901;-22.818537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4956;\"SP\";\"Ibirá\";-49.244833;-21.083032"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4958;\"SP\";\"Ibitinga\";-48.831903;-21.75623"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4959;\"SP\";\"Ibiúna\";-47.223037;-23.65961"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4960;\"SP\";\"Icém\";-49.191546;-20.339067"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4961;\"SP\";\"Iepê\";-51.077881;-22.660165"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4963;\"SP\";\"Igarapava\";-47.746576;-20.040687"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4964;\"SP\";\"Igaratá\";-46.156985;-23.20366"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4962;\"SP\";\"Igaraçu do Tietê\";-48.559672;-22.509044"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4965;\"SP\";\"Iguape\";-47.553659;-24.699015"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4967;\"SP\";\"Ilha Comprida\";-47.538275;-24.730743"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4968;\"SP\";\"Ilha Solteira\";-51.342552;-20.432629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4966;\"SP\";\"Ilhabela\";-45.355226;-23.778533"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4969;\"SP\";\"Indaiatuba\";-47.210093;-23.081591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4970;\"SP\";\"Indiana\";-51.255467;-22.173779"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4971;\"SP\";\"Indiaporã\";-50.290856;-19.978952"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4972;\"SP\";\"Inúbia Paulista\";-50.963268;-21.769471"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4973;\"SP\";\"Ipaussu\";-49.627911;-23.05753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4974;\"SP\";\"Iperó\";-47.692717;-23.351296"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4975;\"SP\";\"Ipeúna\";-47.715086;-22.435513"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4976;\"SP\";\"Ipiguá\";-49.384161;-20.655734"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4977;\"SP\";\"Iporanga\";-48.597119;-24.584718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4978;\"SP\";\"Ipuã\";-48.012881;-20.443785"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4979;\"SP\";\"Iracemápolis\";-47.522963;-22.583234"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4981;\"SP\";\"Irapuru\";-51.347171;-21.56839"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4980;\"SP\";\"Irapuã\";-49.416398;-21.276832"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4982;\"SP\";\"Itaberá\";-49.139987;-23.863827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4984;\"SP\";\"Itajobi\";-49.062863;-21.312294"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4985;\"SP\";\"Itaju\";-48.811549;-21.985691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4986;\"SP\";\"Itanhaém\";-46.787986;-24.173633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4988;\"SP\";\"Itapecerica da Serra\";-46.857193;-23.716135"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4989;\"SP\";\"Itapetininga\";-48.048326;-23.588607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4990;\"SP\";\"Itapeva\";-48.876433;-23.978823"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4991;\"SP\";\"Itapevi\";-46.932747;-23.548774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4992;\"SP\";\"Itapira\";-46.822434;-22.435731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4993;\"SP\";\"Itapirapuã Paulista\";-49.166151;-24.572033"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4995;\"SP\";\"Itaporanga\";-49.481854;-23.704273"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4997;\"SP\";\"Itapura\";-51.506322;-20.641911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4996;\"SP\";\"Itapuí\";-48.719734;-22.232445"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4998;\"SP\";\"Itaquaquecetuba\";-46.345724;-23.483481"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4999;\"SP\";\"Itararé\";-49.335215;-24.108451"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5000;\"SP\";\"Itariri\";-47.173619;-24.283404"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5001;\"SP\";\"Itatiba\";-46.846353;-23.003497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5002;\"SP\";\"Itatinga\";-48.615712;-23.104707"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4983;\"SP\";\"Itaí\";-49.092005;-23.42129"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4987;\"SP\";\"Itaóca\";-48.841285;-24.639252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5003;\"SP\";\"Itirapina\";-47.816594;-22.256239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5004;\"SP\";\"Itirapuã\";-47.219446;-20.641585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5005;\"SP\";\"Itobi\";-46.9743;-21.730853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5006;\"SP\";\"Itu\";-47.292688;-23.254397"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5007;\"SP\";\"Itupeva\";-47.059262;-23.152635"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5008;\"SP\";\"Ituverava\";-47.790207;-20.335465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4994;\"SP\";\"Itápolis\";-48.81491;-21.594224"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5009;\"SP\";\"Jaborandi\";-48.411167;-20.688422"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5010;\"SP\";\"Jaboticabal\";-48.325223;-21.252037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5011;\"SP\";\"Jacareí\";-45.965814;-23.29829"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5012;\"SP\";\"Jaci\";-49.579732;-20.880468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5013;\"SP\";\"Jacupiranga\";-48.006402;-24.696326"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5014;\"SP\";\"Jaguariúna\";-46.985062;-22.70374"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5015;\"SP\";\"Jales\";-50.549442;-20.267227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5016;\"SP\";\"Jambeiro\";-45.694214;-23.252217"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5017;\"SP\";\"Jandira\";-46.902314;-23.527537"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5018;\"SP\";\"Jardinópolis\";-47.760583;-21.017612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5019;\"SP\";\"Jarinu\";-46.728015;-23.103855"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5020;\"SP\";\"Jaú\";-48.559193;-22.293585"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5021;\"SP\";\"Jeriquara\";-47.591835;-20.311567"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5022;\"SP\";\"Joanópolis\";-46.274118;-22.926999"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5024;\"SP\";\"José Bonifácio\";-49.689233;-21.055062"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5023;\"SP\";\"João Ramalho\";-50.769359;-22.247339"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5026;\"SP\";\"Jumirim\";-47.786821;-23.088361"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5027;\"SP\";\"Jundiaí\";-46.897358;-23.185218"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5028;\"SP\";\"Junqueirópolis\";-51.434187;-21.510348"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5030;\"SP\";\"Juquitiba\";-47.065332;-23.924381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5029;\"SP\";\"Juquiá\";-47.64264;-24.310084"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5025;\"SP\";\"Júlio Mesquita\";-49.787294;-22.011174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5031;\"SP\";\"Lagoinha\";-45.194415;-23.084621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5032;\"SP\";\"Laranjal Paulista\";-47.837549;-23.050564"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5034;\"SP\";\"Lavrinhas\";-44.902359;-22.570047"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5033;\"SP\";\"Lavínia\";-51.041172;-21.163913"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5035;\"SP\";\"Leme\";-47.384109;-22.180857"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5036;\"SP\";\"Lençóis Paulista\";-48.803683;-22.602693"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5037;\"SP\";\"Limeira\";-47.396987;-22.56605"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5038;\"SP\";\"Lindóia\";-46.650035;-22.522562"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5039;\"SP\";\"Lins\";-49.752555;-21.67182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5040;\"SP\";\"Lorena\";-45.11968;-22.73338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5041;\"SP\";\"Lourdes\";-50.226274;-20.966025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5042;\"SP\";\"Louveira\";-46.948369;-23.085572"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5044;\"SP\";\"Lucianópolis\";-49.522002;-22.429418"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5043;\"SP\";\"Lucélia\";-51.021511;-21.718203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5046;\"SP\";\"Luiziânia\";-50.329438;-21.673748"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5047;\"SP\";\"Lupércio\";-49.818019;-22.41459"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5048;\"SP\";\"Lutécia\";-50.394007;-22.338378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5045;\"SP\";\"Luís Antônio\";-47.700838;-21.550625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5049;\"SP\";\"Macatuba\";-48.710229;-22.50022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5050;\"SP\";\"Macaubal\";-49.968732;-20.802153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5051;\"SP\";\"Macedônia\";-50.197269;-20.144375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5052;\"SP\";\"Magda\";-50.230542;-20.644497"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5053;\"SP\";\"Mairinque\";-47.184995;-23.539822"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5054;\"SP\";\"Mairiporã\";-46.589695;-23.31713"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5055;\"SP\";\"Manduri\";-49.320164;-23.005569"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5056;\"SP\";\"Marabá Paulista\";-51.96167;-22.106766"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5057;\"SP\";\"Maracaí\";-50.671288;-22.614921"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5058;\"SP\";\"Marapoama\";-49.129968;-21.258719"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5061;\"SP\";\"Marinópolis\";-50.825384;-20.4389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5059;\"SP\";\"Mariápolis\";-51.182434;-21.79592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5062;\"SP\";\"Martinópolis\";-51.170949;-22.146153"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5060;\"SP\";\"Marília\";-49.95006;-22.217108"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5063;\"SP\";\"Matão\";-48.363968;-21.602511"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5064;\"SP\";\"Mauá\";-46.461263;-23.66767"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5065;\"SP\";\"Mendonça\";-49.579059;-21.175724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5066;\"SP\";\"Meridiano\";-50.181055;-20.357874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5067;\"SP\";\"Mesópolis\";-50.632641;-19.968351"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5068;\"SP\";\"Miguelópolis\";-48.030997;-20.179612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5069;\"SP\";\"Mineiros do Tietê\";-48.450998;-22.412007"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5071;\"SP\";\"Mira Estrela\";-50.139039;-19.978925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5070;\"SP\";\"Miracatu\";-47.462458;-24.276639"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5072;\"SP\";\"Mirandópolis\";-51.1035;-21.131345"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5073;\"SP\";\"Mirante do Paranapanema\";-51.90835;-22.290427"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5074;\"SP\";\"Mirassol\";-49.52061;-20.816874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5075;\"SP\";\"Mirassolândia\";-49.461726;-20.617859"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5076;\"SP\";\"Mococa\";-47.002405;-21.464731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5078;\"SP\";\"Mogi Guaçu\";-46.9428;-22.367453"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5079;\"SP\";\"Mogi Mirim\";-46.950514;-22.431878"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5077;\"SP\";\"Mogi das Cruzes\";-46.18541;-23.52082"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5080;\"SP\";\"Mombuca\";-47.558957;-22.928541"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5082;\"SP\";\"Mongaguá\";-46.626526;-24.080901"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5083;\"SP\";\"Monte Alegre do Sul\";-46.68098;-22.681699"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5084;\"SP\";\"Monte Alto\";-48.497066;-21.265545"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5085;\"SP\";\"Monte Aprazível\";-49.71842;-20.768015"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5086;\"SP\";\"Monte Azul Paulista\";-48.638717;-20.90649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5087;\"SP\";\"Monte Castelo\";-51.567889;-21.298092"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5089;\"SP\";\"Monte Mor\";-47.312182;-22.945043"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5088;\"SP\";\"Monteiro Lobato\";-45.840661;-22.954413"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5081;\"SP\";\"Monções\";-50.097537;-20.850949"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5090;\"SP\";\"Morro Agudo\";-48.058084;-20.728828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5091;\"SP\";\"Morungaba\";-46.789601;-22.881071"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5092;\"SP\";\"Motuca\";-48.153764;-21.510287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5093;\"SP\";\"Murutinga do Sul\";-51.277389;-20.990803"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5094;\"SP\";\"Nantes\";-51.239977;-22.615559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5095;\"SP\";\"Narandiba\";-51.527357;-22.405737"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5096;\"SP\";\"Natividade da Serra\";-45.446764;-23.370665"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5097;\"SP\";\"Nazaré Paulista\";-46.398295;-23.174731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5098;\"SP\";\"Neves Paulista\";-49.635767;-20.842992"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5099;\"SP\";\"Nhandeara\";-50.043596;-20.69455"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5100;\"SP\";\"Nipoã\";-49.783278;-20.911397"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5101;\"SP\";\"Nova Aliança\";-49.498642;-21.015649"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5102;\"SP\";\"Nova Campina\";-48.902179;-24.122367"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5103;\"SP\";\"Nova Canaã Paulista\";-50.948264;-20.383625"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5104;\"SP\";\"Nova Castilho\";-50.347741;-20.761492"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5105;\"SP\";\"Nova Europa\";-48.570468;-21.77647"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5106;\"SP\";\"Nova Granada\";-49.312268;-20.532074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5107;\"SP\";\"Nova Guataporanga\";-51.644655;-21.331968"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5108;\"SP\";\"Nova Independência\";-51.490531;-21.10263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5110;\"SP\";\"Nova Luzitânia\";-50.261683;-20.855967"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5111;\"SP\";\"Nova Odessa\";-47.294059;-22.783186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5109;\"SP\";\"Novais\";-48.914091;-20.98928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5112;\"SP\";\"Novo Horizonte\";-49.223409;-21.465145"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5113;\"SP\";\"Nuporanga\";-47.742942;-20.729619"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5114;\"SP\";\"Ocauçu\";-49.922005;-22.437979"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5116;\"SP\";\"Olímpia\";-48.910625;-20.736634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5117;\"SP\";\"Onda Verde\";-49.292925;-20.60423"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5118;\"SP\";\"Oriente\";-50.097105;-22.154939"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5119;\"SP\";\"Orindiúva\";-49.346395;-20.18607"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5120;\"SP\";\"Orlândia\";-47.885205;-20.716925"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5121;\"SP\";\"Osasco\";-46.791555;-23.53239"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5122;\"SP\";\"Oscar Bressane\";-50.281118;-22.314874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5123;\"SP\";\"Osvaldo Cruz\";-50.879288;-21.796753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5124;\"SP\";\"Ourinhos\";-49.869702;-22.979695"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5126;\"SP\";\"Ouro Verde\";-51.702398;-21.48715"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5125;\"SP\";\"Ouroeste\";-50.376807;-20.006052"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5127;\"SP\";\"Pacaembu\";-51.265366;-21.562661"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5128;\"SP\";\"Palestina\";-49.430854;-20.390046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5129;\"SP\";\"Palmares Paulista\";-48.803656;-21.085369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5130;\"SP\";\"Palmeira d`Oeste\";-50.763199;-20.414776"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5131;\"SP\";\"Palmital\";-50.217964;-22.785849"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5132;\"SP\";\"Panorama\";-51.856185;-21.353973"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5133;\"SP\";\"Paraguaçu Paulista\";-50.57316;-22.411369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5134;\"SP\";\"Paraibuna\";-45.663943;-23.387213"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5136;\"SP\";\"Paranapanema\";-48.721435;-23.386196"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5137;\"SP\";\"Paranapuã\";-50.588634;-20.104774"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5138;\"SP\";\"Parapuã\";-50.794882;-21.779205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5135;\"SP\";\"Paraíso\";-48.776105;-21.015911"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5139;\"SP\";\"Pardinho\";-48.367942;-23.084056"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5140;\"SP\";\"Pariquera-Açu\";-47.874152;-24.714652"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5141;\"SP\";\"Parisi\";-50.016277;-20.303397"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5142;\"SP\";\"Patrocínio Paulista\";-47.280124;-20.638361"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5143;\"SP\";\"Paulicéia\";-51.832098;-21.315262"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5145;\"SP\";\"Paulistânia\";-49.400845;-22.576831"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5146;\"SP\";\"Paulo de Faria\";-49.400013;-20.029612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5144;\"SP\";\"Paulínia\";-47.148776;-22.754178"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5147;\"SP\";\"Pederneiras\";-48.778113;-22.351086"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5148;\"SP\";\"Pedra Bela\";-46.44555;-22.790174"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5149;\"SP\";\"Pedranópolis\";-50.112937;-20.247378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5150;\"SP\";\"Pedregulho\";-47.47745;-20.253468"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5151;\"SP\";\"Pedreira\";-46.894846;-22.741347"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5152;\"SP\";\"Pedrinhas Paulista\";-50.793287;-22.817378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5153;\"SP\";\"Pedro de Toledo\";-47.23537;-24.276391"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5154;\"SP\";\"Penápolis\";-50.076855;-21.414765"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5155;\"SP\";\"Pereira Barreto\";-51.112268;-20.636767"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5156;\"SP\";\"Pereiras\";-47.972005;-23.08037"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5157;\"SP\";\"Peruíbe\";-47.0012;-24.311974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5158;\"SP\";\"Piacatu\";-50.600343;-21.592142"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5159;\"SP\";\"Piedade\";-47.425572;-23.713941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5160;\"SP\";\"Pilar do Sul\";-47.722151;-23.807716"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5161;\"SP\";\"Pindamonhangaba\";-45.461264;-22.92463"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5162;\"SP\";\"Pindorama\";-48.90861;-21.1853"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5163;\"SP\";\"Pinhalzinho\";-46.589679;-22.781115"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5164;\"SP\";\"Piquerobi\";-51.728164;-21.874671"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5165;\"SP\";\"Piquete\";-45.186919;-22.606881"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5166;\"SP\";\"Piracaia\";-46.359374;-23.052545"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5167;\"SP\";\"Piracicaba\";-47.647612;-22.733801"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5168;\"SP\";\"Piraju\";-49.380335;-23.198066"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5169;\"SP\";\"Pirajuí\";-49.460777;-21.998986"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5170;\"SP\";\"Pirangi\";-48.660733;-21.0886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5171;\"SP\";\"Pirapora do Bom Jesus\";-46.999103;-23.396487"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5172;\"SP\";\"Pirapozinho\";-51.497635;-22.271125"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5173;\"SP\";\"Pirassununga\";-47.425746;-21.995982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5174;\"SP\";\"Piratininga\";-49.133869;-22.41416"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5175;\"SP\";\"Pitangueiras\";-48.220951;-21.013203"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5176;\"SP\";\"Planalto\";-49.933034;-21.034249"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5177;\"SP\";\"Platina\";-50.210422;-22.637142"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5179;\"SP\";\"Poloni\";-49.825756;-20.782909"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5180;\"SP\";\"Pompéia\";-50.175964;-22.10704"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5181;\"SP\";\"Pongaí\";-49.360421;-21.73956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5182;\"SP\";\"Pontal\";-48.042261;-21.021565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5183;\"SP\";\"Pontalinda\";-50.525754;-20.439624"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5184;\"SP\";\"Pontes Gestal\";-49.706355;-20.172692"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5185;\"SP\";\"Populina\";-50.538035;-19.945297"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5186;\"SP\";\"Porangaba\";-48.119464;-23.17615"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5187;\"SP\";\"Porto Feliz\";-47.52512;-23.209318"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5188;\"SP\";\"Porto Ferreira\";-47.487034;-21.849814"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5189;\"SP\";\"Potim\";-45.255205;-22.834327"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5190;\"SP\";\"Potirendaba\";-49.381509;-21.042789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5178;\"SP\";\"Poá\";-46.347292;-23.533285"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5191;\"SP\";\"Pracinha\";-51.086791;-21.849563"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5192;\"SP\";\"Pradópolis\";-48.067869;-21.362578"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5193;\"SP\";\"Praia Grande\";-46.412057;-24.008378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5194;\"SP\";\"Pratânia\";-48.663618;-22.811183"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5195;\"SP\";\"Presidente Alves\";-49.438133;-22.09991"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5196;\"SP\";\"Presidente Bernardes\";-51.556507;-22.008198"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5197;\"SP\";\"Presidente Epitácio\";-52.11114;-21.765074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5198;\"SP\";\"Presidente Prudente\";-51.392526;-22.120654"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5199;\"SP\";\"Presidente Venceslau\";-51.844744;-21.873233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5200;\"SP\";\"Promissão\";-49.85989;-21.535572"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5201;\"SP\";\"Quadra\";-48.054657;-23.299332"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5202;\"SP\";\"Quatá\";-50.696605;-22.24559"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5203;\"SP\";\"Queiroz\";-50.241461;-21.796865"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5204;\"SP\";\"Queluz\";-44.778105;-22.531171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5205;\"SP\";\"Quintana\";-50.307028;-22.069172"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5206;\"SP\";\"Rafard\";-47.531795;-23.010508"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5207;\"SP\";\"Rancharia\";-50.893041;-22.22691"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5208;\"SP\";\"Redenção da Serra\";-45.54222;-23.263763"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5209;\"SP\";\"Regente Feijó\";-51.30545;-22.218131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5210;\"SP\";\"Reginópolis\";-49.226782;-21.891372"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5211;\"SP\";\"Registro\";-47.844895;-24.497942"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5212;\"SP\";\"Restinga\";-47.483254;-20.605593"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5213;\"SP\";\"Ribeira\";-49.004409;-24.65171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5214;\"SP\";\"Ribeirão Bonito\";-48.182041;-22.068536"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5215;\"SP\";\"Ribeirão Branco\";-48.763545;-24.22058"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5216;\"SP\";\"Ribeirão Corrente\";-47.590394;-20.457872"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5219;\"SP\";\"Ribeirão Grande\";-48.367931;-24.10114"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5220;\"SP\";\"Ribeirão Pires\";-46.405805;-23.706669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5221;\"SP\";\"Ribeirão Preto\";-47.809875;-21.169923"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5218;\"SP\";\"Ribeirão do Sul\";-49.933037;-22.789013"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5217;\"SP\";\"Ribeirão dos Índios\";-51.610343;-21.838201"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5222;\"SP\";\"Rifaina\";-47.429109;-20.080256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5223;\"SP\";\"Rincão\";-48.072838;-21.589429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5224;\"SP\";\"Rinópolis\";-50.723908;-21.728402"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5225;\"SP\";\"Rio Claro\";-47.554632;-22.398378"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5227;\"SP\";\"Rio Grande da Serra\";-46.397084;-23.743724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5226;\"SP\";\"Rio das Pedras\";-47.604657;-22.841723"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5228;\"SP\";\"Riolândia\";-49.683582;-19.986789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5229;\"SP\";\"Riversul\";-49.428965;-23.829003"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5230;\"SP\";\"Rosana\";-53.060296;-22.578173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5231;\"SP\";\"Roseira\";-45.306993;-22.893834"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5233;\"SP\";\"Rubinéia\";-51.007034;-20.175906"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5232;\"SP\";\"Rubiácea\";-50.729564;-21.300568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5234;\"SP\";\"Sabino\";-49.575546;-21.45934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5235;\"SP\";\"Sagres\";-50.959381;-21.88232"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5236;\"SP\";\"Sales\";-49.489658;-21.342738"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5237;\"SP\";\"Sales Oliveira\";-47.836873;-20.769612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5238;\"SP\";\"Salesópolis\";-45.84653;-23.528805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5239;\"SP\";\"Salmourão\";-50.861366;-21.626729"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5240;\"SP\";\"Saltinho\";-47.675371;-22.844167"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5241;\"SP\";\"Salto\";-47.293087;-23.199592"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5243;\"SP\";\"Salto Grande\";-49.983134;-22.889389"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5242;\"SP\";\"Salto de Pirapora\";-47.574322;-23.647387"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5244;\"SP\";\"Sandovalina\";-51.764822;-22.455099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5245;\"SP\";\"Santa Adélia\";-48.80634;-21.242662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5246;\"SP\";\"Santa Albertina\";-50.729713;-20.031131"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5248;\"SP\";\"Santa Branca\";-45.887521;-23.393311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5247;\"SP\";\"Santa Bárbara d`Oeste\";-47.414308;-22.755256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5249;\"SP\";\"Santa Clara d`Oeste\";-50.949109;-20.090041"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5250;\"SP\";\"Santa Cruz da Conceição\";-47.451196;-22.140542"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5251;\"SP\";\"Santa Cruz da Esperança\";-47.430381;-21.295065"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5252;\"SP\";\"Santa Cruz das Palmeiras\";-47.248023;-21.823475"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5253;\"SP\";\"Santa Cruz do Rio Pardo\";-49.635444;-22.89875"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5254;\"SP\";\"Santa Ernestina\";-48.395317;-21.461769"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5255;\"SP\";\"Santa Fé do Sul\";-50.931958;-20.208252"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5256;\"SP\";\"Santa Gertrudes\";-47.52716;-22.457229"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5257;\"SP\";\"Santa Isabel\";-46.223668;-23.317194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5258;\"SP\";\"Santa Lúcia\";-48.088469;-21.684982"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5259;\"SP\";\"Santa Maria da Serra\";-48.159288;-22.566088"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5260;\"SP\";\"Santa Mercedes\";-51.756353;-21.349521"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5263;\"SP\";\"Santa Rita d`Oeste\";-50.835781;-20.141431"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5264;\"SP\";\"Santa Rita do Passa Quatro\";-47.478;-21.708323"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5265;\"SP\";\"Santa Rosa de Viterbo\";-47.362213;-21.477568"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5266;\"SP\";\"Santa Salete\";-50.688717;-20.242918"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5261;\"SP\";\"Santana da Ponte Pensa\";-50.801357;-20.252311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5262;\"SP\";\"Santana de Parnaíba\";-46.922215;-23.442514"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5267;\"SP\";\"Santo Anastácio\";-51.652662;-21.974662"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5268;\"SP\";\"Santo André\";-46.543154;-23.67373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5269;\"SP\";\"Santo Antônio da Alegria\";-47.146372;-21.086449"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5270;\"SP\";\"Santo Antônio de Posse\";-46.91919;-22.602873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5271;\"SP\";\"Santo Antônio do Aracanguá\";-50.497979;-20.933114"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5272;\"SP\";\"Santo Antônio do Jardim\";-46.684487;-22.112076"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5273;\"SP\";\"Santo Antônio do Pinhal\";-45.663;-22.827"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5274;\"SP\";\"Santo Expedito\";-51.392894;-21.846657"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5276;\"SP\";\"Santos\";-46.335042;-23.953543"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5275;\"SP\";\"Santópolis do Aguapeí\";-50.504372;-21.637574"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5304;\"SP\";\"Sarapuí\";-47.824863;-23.63974"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5305;\"SP\";\"Sarutaiá\";-49.476259;-23.272103"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5306;\"SP\";\"Sebastianópolis do Sul\";-49.924997;-20.652323"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5307;\"SP\";\"Serra Azul\";-47.560243;-21.307381"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5309;\"SP\";\"Serra Negra\";-46.703271;-22.613941"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5308;\"SP\";\"Serrana\";-47.595239;-21.204336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5310;\"SP\";\"Sertãozinho\";-47.987496;-21.131596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5311;\"SP\";\"Sete Barras\";-47.927943;-24.382048"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5312;\"SP\";\"Severínia\";-48.80538;-20.810753"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5313;\"SP\";\"Silveiras\";-44.852157;-22.66384"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5314;\"SP\";\"Socorro\";-46.525118;-22.590264"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5315;\"SP\";\"Sorocaba\";-47.445073;-23.496886"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5316;\"SP\";\"Sud Mennucci\";-50.923783;-20.687225"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5317;\"SP\";\"Sumaré\";-47.272823;-22.820416"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5319;\"SP\";\"Suzano\";-46.311181;-23.544828"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5318;\"SP\";\"Suzanápolis\";-51.026761;-20.49809"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5277;\"SP\";\"São Bento do Sapucaí\";-45.728677;-22.683744"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5278;\"SP\";\"São Bernardo do Campo\";-46.564617;-23.691412"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5279;\"SP\";\"São Caetano do Sul\";-46.554797;-23.62287"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5280;\"SP\";\"São Carlos\";-47.885971;-22.017395"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5281;\"SP\";\"São Francisco\";-50.695151;-20.362291"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5286;\"SP\";\"São Joaquim da Barra\";-47.859316;-20.581158"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5287;\"SP\";\"São José da Bela Vista\";-47.642413;-20.593548"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5288;\"SP\";\"São José do Barreiro\";-44.577437;-22.641353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5289;\"SP\";\"São José do Rio Pardo\";-46.887303;-21.595288"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5290;\"SP\";\"São José do Rio Preto\";-49.375767;-20.811289"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5291;\"SP\";\"São José dos Campos\";-45.884115;-23.189554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5282;\"SP\";\"São João da Boa Vista\";-46.794356;-21.970747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5283;\"SP\";\"São João das Duas Pontes\";-50.379149;-20.387857"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5284;\"SP\";\"São João de Iracema\";-50.356069;-20.511059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5285;\"SP\";\"São João do Pau d`Alho\";-51.667172;-21.266249"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5292;\"SP\";\"São Lourenço da Serra\";-46.94316;-23.849134"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5293;\"SP\";\"São Luiz do Paraitinga\";-45.30899;-23.220521"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5294;\"SP\";\"São Manuel\";-48.572316;-22.732081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5295;\"SP\";\"São Miguel Arcanjo\";-47.993549;-23.878197"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5296;\"SP\";\"São Paulo\";-46.63952;-23.532905"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5297;\"SP\";\"São Pedro\";-47.909579;-22.548256"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5298;\"SP\";\"São Pedro do Turvo\";-49.742829;-22.745286"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5299;\"SP\";\"São Roque\";-47.13567;-23.522598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5300;\"SP\";\"São Sebastião\";-45.414314;-23.795059"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5301;\"SP\";\"São Sebastião da Grama\";-46.820753;-21.704109"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5302;\"SP\";\"São Simão\";-47.551755;-21.473171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5303;\"SP\";\"São Vicente\";-46.388333;-23.957353"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5320;\"SP\";\"Tabapuã\";-49.03074;-20.960171"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5321;\"SP\";\"Tabatinga\";-48.689577;-21.723863"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5322;\"SP\";\"Taboão da Serra\";-46.752637;-23.601867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5323;\"SP\";\"Taciba\";-51.288221;-22.386577"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5324;\"SP\";\"Taguaí\";-49.402377;-23.445242"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5325;\"SP\";\"Taiaçu\";-48.511203;-21.143144"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5326;\"SP\";\"Taiúva\";-48.452816;-21.122333"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5327;\"SP\";\"Tambaú\";-47.270344;-21.70292"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5328;\"SP\";\"Tanabi\";-49.656319;-20.62279"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5330;\"SP\";\"Tapiratiba\";-46.744825;-21.471324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5329;\"SP\";\"Tapiraí\";-47.506248;-23.961157"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5331;\"SP\";\"Taquaral\";-48.412553;-21.07373"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5332;\"SP\";\"Taquaritinga\";-48.510345;-21.404861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5333;\"SP\";\"Taquarituba\";-49.240954;-23.530709"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5334;\"SP\";\"Taquarivaí\";-48.694769;-23.921116"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5335;\"SP\";\"Tarabai\";-51.562133;-22.301612"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5336;\"SP\";\"Tarumã\";-50.57862;-22.742873"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5337;\"SP\";\"Tatuí\";-47.84612;-23.348731"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5338;\"SP\";\"Taubaté\";-45.55926;-23.010414"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5339;\"SP\";\"Tejupá\";-49.372244;-23.342458"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5340;\"SP\";\"Teodoro Sampaio\";-52.168175;-22.529936"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5341;\"SP\";\"Terra Roxa\";-48.331442;-20.787015"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5342;\"SP\";\"Tietê\";-47.716378;-23.110098"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5343;\"SP\";\"Timburi\";-49.609583;-23.205674"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5344;\"SP\";\"Torre de Pedra\";-48.195507;-23.246173"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5345;\"SP\";\"Torrinha\";-48.17314;-22.423721"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5346;\"SP\";\"Trabiju\";-48.334168;-22.038783"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5347;\"SP\";\"Tremembé\";-45.547526;-22.95714"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5348;\"SP\";\"Três Fronteiras\";-50.890528;-20.234355"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5349;\"SP\";\"Tuiuti\";-46.693746;-22.819324"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5351;\"SP\";\"Tupi Paulista\";-51.575004;-21.382455"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5350;\"SP\";\"Tupã\";-50.519113;-21.933528"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5352;\"SP\";\"Turiúba\";-50.11349;-20.942758"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5353;\"SP\";\"Turmalina\";-50.479198;-20.048588"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5354;\"SP\";\"Ubarana\";-49.719765;-21.164965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5355;\"SP\";\"Ubatuba\";-45.083415;-23.433162"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5356;\"SP\";\"Ubirajara\";-49.66126;-22.527208"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5357;\"SP\";\"Uchoa\";-49.171295;-20.951106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5358;\"SP\";\"União Paulista\";-49.902509;-20.886227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5360;\"SP\";\"Uru\";-49.284846;-21.786641"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5361;\"SP\";\"Urupês\";-49.293103;-21.203207"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5359;\"SP\";\"Urânia\";-50.645498;-20.245461"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5362;\"SP\";\"Valentim Gentil\";-50.088928;-20.421681"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5363;\"SP\";\"Valinhos\";-46.997367;-22.969805"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5364;\"SP\";\"Valparaíso\";-50.869874;-21.222929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5365;\"SP\";\"Vargem\";-46.412447;-22.887046"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5367;\"SP\";\"Vargem Grande Paulista\";-47.022038;-23.599338"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5366;\"SP\";\"Vargem Grande do Sul\";-46.891286;-21.832194"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5369;\"SP\";\"Vera Cruz\";-49.820735;-22.218308"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5370;\"SP\";\"Vinhedo\";-46.983312;-23.030184"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5371;\"SP\";\"Viradouro\";-48.292974;-20.873382"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5372;\"SP\";\"Vista Alegre do Alto\";-48.628383;-21.169222"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5373;\"SP\";\"Vitória Brasil\";-50.487452;-20.195582"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5374;\"SP\";\"Votorantim\";-47.438753;-23.54459"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5375;\"SP\";\"Votuporanga\";-49.978112;-20.423659"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5368;\"SP\";\"Várzea Paulista\";-46.823444;-23.213582"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5376;\"SP\";\"Zacarias\";-50.055222;-21.050554"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4735;\"SP\";\"Águas da Prata\";-46.717622;-21.931935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4736;\"SP\";\"Águas de Lindóia\";-46.631441;-22.473305"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4737;\"SP\";\"Águas de Santa Bárbara\";-49.242133;-22.881186"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4738;\"SP\";\"Águas de São Pedro\";-47.873395;-22.597749"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4746;\"SP\";\"Álvares Florence\";-49.914126;-20.320341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4747;\"SP\";\"Álvares Machado\";-51.47224;-22.076415"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "4748;\"SP\";\"Álvaro de Carvalho\";-49.719044;-22.084132"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5115;\"SP\";\"Óleo\";-49.341924;-22.943461"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5377;\"TO\";\"Abreulândia\";-49.151845;-9.621015"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5378;\"TO\";\"Aguiarnópolis\";-47.470222;-6.554087"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5379;\"TO\";\"Aliança do Tocantins\";-48.936097;-11.305565"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5380;\"TO\";\"Almas\";-47.179197;-11.570553"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5381;\"TO\";\"Alvorada\";-49.124926;-12.478465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5382;\"TO\";\"Ananás\";-48.073466;-6.364369"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5383;\"TO\";\"Angico\";-47.861142;-6.391789"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5384;\"TO\";\"Aparecida do Rio Negro\";-47.963753;-9.941386"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5385;\"TO\";\"Aragominas\";-48.529096;-7.160051"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5386;\"TO\";\"Araguacema\";-49.556886;-8.807547"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5389;\"TO\";\"Araguanã\";-48.639542;-6.582247"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5390;\"TO\";\"Araguatins\";-48.123198;-5.646591"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5387;\"TO\";\"Araguaçu\";-49.823134;-12.928934"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5388;\"TO\";\"Araguaína\";-48.204402;-7.192375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5391;\"TO\";\"Arapoema\";-49.063702;-7.654634"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5392;\"TO\";\"Arraias\";-46.935891;-12.92867"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5393;\"TO\";\"Augustinópolis\";-47.886266;-5.468629"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5394;\"TO\";\"Aurora do Tocantins\";-46.407604;-12.71045"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5395;\"TO\";\"Axixá do Tocantins\";-47.77007;-5.612747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5396;\"TO\";\"Babaçulândia\";-47.761257;-7.209227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5397;\"TO\";\"Bandeirantes do Tocantins\";-48.583567;-7.756125"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5398;\"TO\";\"Barra do Ouro\";-47.677609;-7.695929"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5399;\"TO\";\"Barrolândia\";-48.725203;-9.834042"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5400;\"TO\";\"Bernardo Sayão\";-48.889273;-7.874812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5401;\"TO\";\"Bom Jesus do Tocantins\";-48.165043;-8.96306"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5402;\"TO\";\"Brasilândia do Tocantins\";-48.482213;-8.389182"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5403;\"TO\";\"Brejinho de Nazaré\";-48.568278;-11.005754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5404;\"TO\";\"Buriti do Tocantins\";-48.227134;-5.314483"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5405;\"TO\";\"Cachoeirinha\";-47.923399;-6.115596"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5406;\"TO\";\"Campos Lindos\";-46.864473;-7.989563"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5407;\"TO\";\"Cariri do Tocantins\";-49.160876;-11.888081"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5408;\"TO\";\"Carmolândia\";-48.397809;-7.032616"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5409;\"TO\";\"Carrasco Bonito\";-48.031416;-5.314152"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5410;\"TO\";\"Caseara\";-49.952123;-9.276121"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5411;\"TO\";\"Centenário\";-47.330382;-8.961031"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5412;\"TO\";\"Chapada da Natividade\";-47.748614;-11.617507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5413;\"TO\";\"Chapada de Areia\";-49.140277;-10.141933"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5414;\"TO\";\"Colinas do Tocantins\";-48.475728;-8.05764"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5415;\"TO\";\"Colméia\";-48.763753;-8.724627"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5416;\"TO\";\"Combinado\";-46.538775;-12.791717"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5417;\"TO\";\"Conceição do Tocantins\";-47.295103;-12.220874"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5418;\"TO\";\"Couto de Magalhães\";-49.246647;-8.28282"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5419;\"TO\";\"Cristalândia\";-49.194202;-10.59848"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5420;\"TO\";\"Crixás do Tocantins\";-48.915194;-11.099375"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5421;\"TO\";\"Darcinópolis\";-47.759709;-6.715912"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5422;\"TO\";\"Dianópolis\";-46.819787;-11.624008"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5423;\"TO\";\"Divinópolis do Tocantins\";-49.216849;-9.800181"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5424;\"TO\";\"Dois Irmãos do Tocantins\";-49.063756;-9.255336"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5425;\"TO\";\"Dueré\";-49.271566;-11.341631"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5426;\"TO\";\"Esperantina\";-48.537771;-5.365928"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5428;\"TO\";\"Figueirópolis\";-49.174771;-12.131175"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5429;\"TO\";\"Filadélfia\";-47.495446;-7.335011"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5430;\"TO\";\"Formoso do Araguaia\";-49.531571;-11.797573"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5431;\"TO\";\"Fortaleza do Tabocão\";-48.520563;-9.056106"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5427;\"TO\";\"Fátima\";-48.907583;-10.760259"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5432;\"TO\";\"Goianorte\";-48.931291;-8.774126"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5433;\"TO\";\"Goiatins\";-47.325189;-7.71478"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5434;\"TO\";\"Guaraí\";-48.511432;-8.835429"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5435;\"TO\";\"Gurupi\";-49.068046;-11.72794"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5436;\"TO\";\"Ipueiras\";-48.460024;-11.2329"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5437;\"TO\";\"Itacajá\";-47.772615;-8.392935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5438;\"TO\";\"Itaguatins\";-47.48641;-5.772667"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5439;\"TO\";\"Itapiratins\";-48.107192;-8.379815"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5440;\"TO\";\"Itaporã do Tocantins\";-48.689481;-8.571722"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5441;\"TO\";\"Jaú do Tocantins\";-48.588989;-12.650908"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5442;\"TO\";\"Juarina\";-49.064347;-8.119507"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5443;\"TO\";\"Lagoa da Confusão\";-49.619948;-10.790637"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5444;\"TO\";\"Lagoa do Tocantins\";-47.537979;-10.367977"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5445;\"TO\";\"Lajeado\";-48.356482;-9.749956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5446;\"TO\";\"Lavandeira\";-46.509894;-12.78473"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5447;\"TO\";\"Lizarda\";-46.673813;-9.590022"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5448;\"TO\";\"Luzinópolis\";-47.858155;-6.177935"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5449;\"TO\";\"Marianópolis do Tocantins\";-49.65526;-9.793768"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5450;\"TO\";\"Mateiros\";-46.416758;-10.546379"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5451;\"TO\";\"Maurilândia do Tocantins\";-47.512492;-5.951688"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5452;\"TO\";\"Miracema do Tocantins\";-48.39298;-9.565556"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5453;\"TO\";\"Miranorte\";-48.592222;-9.529068"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5455;\"TO\";\"Monte Santo do Tocantins\";-48.99408;-10.00747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5454;\"TO\";\"Monte do Carmo\";-48.111426;-10.761054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5456;\"TO\";\"Muricilândia\";-48.609135;-7.14669"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5457;\"TO\";\"Natividade\";-47.722344;-11.703428"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5458;\"TO\";\"Nazaré\";-47.664299;-6.37496"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5459;\"TO\";\"Nova Olinda\";-48.425232;-7.631712"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5460;\"TO\";\"Nova Rosalândia\";-48.912477;-10.565102"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5461;\"TO\";\"Novo Acordo\";-47.678533;-9.970633"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5462;\"TO\";\"Novo Alegre\";-46.571252;-12.921687"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5463;\"TO\";\"Novo Jardim\";-46.632471;-11.825965"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5464;\"TO\";\"Oliveira de Fátima\";-48.90861;-10.706956"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5465;\"TO\";\"Palmas\";-48.355751;-10.239973"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5466;\"TO\";\"Palmeirante\";-47.924191;-7.847861"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5467;\"TO\";\"Palmeiras do Tocantins\";-47.546429;-6.616584"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5468;\"TO\";\"Palmeirópolis\";-48.402589;-13.044718"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5470;\"TO\";\"Paranã\";-47.873378;-12.616747"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5469;\"TO\";\"Paraíso do Tocantins\";-48.882269;-10.174998"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5471;\"TO\";\"Pau d`Arco\";-49.366971;-7.539191"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5472;\"TO\";\"Pedro Afonso\";-48.172942;-8.970341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5473;\"TO\";\"Peixe\";-48.539508;-12.025425"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5474;\"TO\";\"Pequizeiro\";-48.93269;-8.593204"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5475;\"TO\";\"Pindorama do Tocantins\";-47.57263;-11.131074"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5476;\"TO\";\"Piraquê\";-48.295796;-6.77302"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5477;\"TO\";\"Pium\";-49.187619;-10.442025"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5478;\"TO\";\"Ponte Alta do Bom Jesus\";-46.482541;-12.085297"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5479;\"TO\";\"Ponte Alta do Tocantins\";-47.527577;-10.748118"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5480;\"TO\";\"Porto Alegre do Tocantins\";-47.062126;-11.61797"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5481;\"TO\";\"Porto Nacional\";-48.408008;-10.702705"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5482;\"TO\";\"Praia Norte\";-47.811144;-5.392812"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5483;\"TO\";\"Presidente Kennedy\";-48.506232;-8.540599"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5484;\"TO\";\"Pugmil\";-48.895738;-10.424047"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5485;\"TO\";\"Recursolândia\";-47.242107;-8.7227"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5486;\"TO\";\"Riachinho\";-48.137056;-6.440054"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5489;\"TO\";\"Rio Sono\";-47.887968;-9.35002"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5487;\"TO\";\"Rio da Conceição\";-46.884664;-11.394863"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5488;\"TO\";\"Rio dos Bois\";-48.524518;-9.344254"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5490;\"TO\";\"Sampaio\";-47.878184;-5.354233"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5491;\"TO\";\"Sandolândia\";-49.924216;-12.537983"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5492;\"TO\";\"Santa Fé do Araguaia\";-48.716462;-7.158034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5493;\"TO\";\"Santa Maria do Tocantins\";-47.788708;-8.804598"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5494;\"TO\";\"Santa Rita do Tocantins\";-48.916113;-10.861724"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5495;\"TO\";\"Santa Rosa do Tocantins\";-48.121627;-11.447392"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5496;\"TO\";\"Santa Tereza do Tocantins\";-47.803285;-10.274621"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5497;\"TO\";\"Santa Terezinha do Tocantins\";-47.668393;-6.44438"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5504;\"TO\";\"Silvanópolis\";-48.16937;-11.147099"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5506;\"TO\";\"Sucupira\";-48.96851;-11.993034"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5498;\"TO\";\"São Bento do Tocantins\";-47.901161;-6.025802"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5499;\"TO\";\"São Félix do Tocantins\";-46.661786;-10.161465"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5500;\"TO\";\"São Miguel do Tocantins\";-47.574288;-5.563051"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5501;\"TO\";\"São Salvador do Tocantins\";-48.235157;-12.745754"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5502;\"TO\";\"São Sebastião do Tocantins\";-48.202105;-5.261311"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5503;\"TO\";\"São Valério da Natividade\";-48.235315;-11.974315"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5505;\"TO\";\"Sítio Novo do Tocantins\";-47.63809;-5.601205"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5623;\"TO\";\"Taguatinga\";-46.436967;-12.40263"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5507;\"TO\";\"Taipas do Tocantins\";-46.979681;-12.187341"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5508;\"TO\";\"Talismã\";-49.089582;-12.794879"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5510;\"TO\";\"Tocantinópolis\";-47.4224;-6.324474"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5509;\"TO\";\"Tocantínia\";-48.374104;-9.563198"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5511;\"TO\";\"Tupirama\";-48.188324;-8.971676"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5512;\"TO\";\"Tupiratins\";-48.127744;-8.39388"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5513;\"TO\";\"Wanderlândia\";-47.96014;-6.852742"
    },
    {
      "\"id_municipio\";\"uf\";\"municipio\";\"longitude\";\"latitude\"": "5514;\"TO\";\"Xambioá\";-48.531974;-6.414104"
    }
  ))
}

export default [
  {
    url: '/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: List
        }
      }
    }
  },

  {
    url: '/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
