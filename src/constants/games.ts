import type { Game } from "../models/game";

const AEONS_END: Game = {
  name: "Aeon's End",
  type: ["Strategy"],
  minimumNumberOfPlayers: 1,
  maximumNumberOfPlayers: 4,
  category: ["Card Game", "Fantasy", "Fighting", "Science Fiction"],
  mechanics: [
    "Chit-Pull System",
    "Cooperative Game",
    "Deck, Bag and Pool Building",
    "Delayed Purchase",
    "Hand Management",
    "Open Drafting",
    "Solo / Solitaire Game",
    "Variable Phase Order",
    "Variable Player Powers",
    "Variable Set-up"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/d50LceHj6LIafa4S_qIsCg__imagepage/img/aVM_aBtz3L4qgDQkEf5-xUFj-N4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3189350.jpg"
};

const CLANK_A_DECK_BUILDING_ADVENTURE = {
  name: "Clank!: A Deck-Building Adventure",
  type: ["Family", "Strategy"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 4,
  category: ["Adventure", "Fantasy"],
  mechanics: [
    "Action Points",
    "Deck, Bag and Pool Building",
    "Delayed Purchase",
    "End Game Bonuses",
    "Movement Points",
    "Open Drafting",
    "Player Elimination",
    "Point to Point Movement",
    "Push Your Luck",
    "Variable Set-up"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__original/img/cXqOdM3BLyIeRt0GP3M3V--gF1M=/0x0/filters:format(jpeg)/pic4449526.jpg"
};

const OVERBOSS_A_BOSS_MONSTER_ADVENTURE = {
  name: "Overboss: A Boss Monster Adventure",
  type: ["Family"],
  minimumNumberOfPlayers: 1,
  maximumNumberOfPlayers: 5,
  category: ["Abstract Strategy", "Fantasy", "Puzzle", "Video Game Theme"],
  mechanics: [
    "Open Drafting",
    "Pattern Building",
    "Pieces as Map",
    "Set Collection",
    "Solo / Solitaire Game",
    "Tile Placement"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/t8tLdsAhe5e9tmel47BtmQ__imagepage/img/9VQ9Mjm1CdvCGOclXTs20pHyVow=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5650097.jpg"
};

export const GAMES: Game[] = [
  AEONS_END,
  CLANK_A_DECK_BUILDING_ADVENTURE,
  OVERBOSS_A_BOSS_MONSTER_ADVENTURE
];
