import re2 from '../assets/GamesRetro/re2ps1.jpg'
import sonic from '../assets/GamesRetro/sonic.jpeg'
import crash from '../assets/GamesRetro/crash.png'
import mariokart from '../assets/GamesRetro/mariokart.webp'
import mikey from '../assets/GamesRetro/mikey.jpeg'

import aladdin from "../assets/GamesRetro/aladdin.png";
import smw from "../assets/GamesRetro/smw.png";
import mk3 from "../assets/GamesRetro/mk3.png";

const games = [
  {
    id: 1,
    nome: "Resident Evil 2 - PS1",
    descricao: "Clássico de terror e sobrevivência com gráficos icônicos do PlayStation 1. Enfrente zumbis e descubra os segredos de Raccoon City.",
    especificacao: "Gênero: Survival Horror | Plataforma: PlayStation 1 | Ano: 1998",
    fabricante: "Capcom",
    preco: "R$ 20,00",
    img: re2,
    alt: "Capa do jogo Resident Evil 2 para PlayStation 1",
  },
  {
    id: 2,
    nome: "Sonic the Hedgehog - Mega Drive",
    descricao: "Corra em alta velocidade com Sonic em fases cheias de loopings, inimigos e anéis dourados neste marco dos 16 bits.",
    especificacao: "Gênero: Plataforma | Plataforma: Mega Drive | Ano: 1991",
    fabricante: "Sega",
    preco: "R$ 20,00",
    img: sonic,
    alt: "Capa do jogo Sonic the Hedgehog para Mega Drive",
  },
  {
    id: 3,
    nome: "Crash Bandicoot - PS1",
    descricao: "Ajude Crash a deter o Dr. Neo Cortex em aventuras desafiadoras, com fases icônicas e muita diversão em 3D.",
    especificacao: "Gênero: Plataforma | Plataforma: PlayStation 1 | Ano: 1996",
    fabricante: "Naughty Dog / Sony",
    preco: "R$ 20,00",
    img: crash,
    alt: "Capa do jogo Crash Bandicoot para PlayStation 1",
  },
  {
    id: 4,
    nome: "Mario Kart (Usado) - SNES",
    descricao: "Corra com Mario e seus amigos em pistas cheias de itens e curvas perigosas. Diversão garantida para todas as idades.",
    especificacao: "Gênero: Corrida | Plataforma: Super Nintendo | Ano: 1992",
    fabricante: "Nintendo",
    preco: "R$ 20,00",
    img: mariokart,
    alt: "Capa do jogo Mario Kart para Super Nintendo",
  },
  {
    id: 5,
    nome: "Mickey Mania - Mega Drive",
    descricao: "Acompanhe Mickey Mouse em fases inspiradas em seus desenhos clássicos, com excelente trilha sonora e animação.",
    especificacao: "Gênero: Plataforma | Plataforma: Mega Drive | Ano: 1994",
    fabricante: "Traveller’s Tales / Disney Interactive",
    preco: "R$ 20,00",
    img: mikey,
    alt: "Capa do jogo Mickey Mania para Mega Drive",
  },
  {
    id: 6,
    nome: "Disney's Aladdin - SNES",
    descricao: "Reviva a magia de Agrabah com Aladdin em uma jornada repleta de ação, plataformas e músicas inesquecíveis da Disney.",
    especificacao: "Gênero: Ação / Plataforma | Plataforma: Super Nintendo | Ano: 1993",
    fabricante: "Capcom / Disney Interactive",
    preco: "R$ 20,00",
    img: aladdin,
    alt: "Capa do jogo Disney's Aladdin para Super Nintendo",
  },
  {
    id: 7,
    nome: "Super Mario World - SNES",
    descricao: "Explore o Reino dos Dinossauros com Mario e Yoshi em um dos maiores clássicos de todos os tempos do Super Nintendo.",
    especificacao: "Gênero: Plataforma | Plataforma: Super Nintendo | Ano: 1990",
    fabricante: "Nintendo",
    preco: "R$ 20,00",
    img: smw,
    alt: "Capa do jogo Super Mario World para Super Nintendo",
  },
  {
    id: 8,
    nome: "Mortal Kombat 3 - SNES",
    descricao: "Lute com personagens lendários em combates intensos e finalize com brutalidade neste clássico dos anos 90.",
    especificacao: "Gênero: Luta | Plataforma: Super Nintendo | Ano: 1995",
    fabricante: "Midway Games / Acclaim",
    preco: "R$ 20,00",
    img: mk3,
    alt: "Capa do jogo Mortal Kombat 3 para Super Nintendo",
  },
];

export default games;