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
    img: re2,
    alt: "Capa do jogo Resident Evil 2 para PlayStation 1",
    preco: "R$20",
  },
  {
    id: 2,
    nome: "Sonic the Hedgehog - Mega Drive",
    descricao: "Corra em alta velocidade com Sonic em fases cheias de loopings, inimigos e anéis dourados neste marco dos 16 bits.",
    img: sonic,
    alt: "Capa do jogo Sonic the Hedgehog para Mega Drive",
    preco: "R$20",
  },
  {
    id: 3,
    nome: "Crash Bandicoot - PS1",
    descricao: "Ajude Crash a deter o Dr. Neo Cortex em aventuras desafiadoras, com fases icônicas e muita diversão em 3D.",
    img: crash,
    alt: "Capa do jogo Crash Bandicoot para PlayStation 1",
    preco: "R$20",
  },
  {
    id: 4,
    nome: "Mario Kart (Usado) - SNES",
    descricao: "Corra com Mario e seus amigos em pistas cheias de itens e curvas perigosas. Diversão garantida para todas as idades.",
    img: mariokart,
    alt: "Capa do jogo Mario Kart para Super Nintendo",
    preco: "R$20",
  },
  {
    id: 5,
    nome: "Mickey Mania - Mega Drive",
    descricao: "Acompanhe Mickey Mouse em fases inspiradas em seus desenhos clássicos, com excelente trilha sonora e animação.",
    img: mikey,
    alt: "Capa do jogo Mickey Mania para Mega Drive",
    preco: "R$20",
  },
  {
    id: 6,
    nome: "Disney's Aladdin - SNES",
    descricao: "Reviva a magia de Agrabah com Aladdin em uma jornada repleta de ação, plataformas e músicas inesquecíveis da Disney.",
    img: aladdin,
    alt: "Capa do jogo Disney's Aladdin para Super Nintendo",
    preco: "R$20",
  },
  {
    id: 7,
    nome: "Super Mario World - SNES",
    descricao: "Explore o Reino dos Dinossauros com Mario e Yoshi em um dos maiores clássicos de todos os tempos do Super Nintendo.",
    img: smw,
    alt: "Capa do jogo Super Mario World para Super Nintendo",
    preco: "R$20",
  },
  {
    id: 8,
    nome: "Mortal Kombat 3 - SNES",
    descricao: "Lute com personagens lendários em combates intensos e finalize com brutalidade neste clássico dos anos 90.",
    img: mk3,
    alt: "Capa do jogo Mortal Kombat 3 para Super Nintendo",
    preco: "R$20",
  },
];

export default games;
