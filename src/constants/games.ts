import type { Game } from "../models/game";

const ABYSS = {
  name: "Abyss",
  description:
    "The Abyss power is once again vacant, so the time has come to get your hands on the throne and its privileges. Use all of your cunning to win or buy votes in the Council. Recruit the most influential Lords and abuse their powers to take control of the most strategic territories. Finally, impose yourself as the only one able to rule the Abyssal people!",
  type: ["Strategy"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 4,
  category: ["Card Game", "Fantasy", "Myhology", "Nautical", "Science Fiction"],
  mechanics: [
    "Auction / Bidding",
    "Hand Management",
    "Memory",
    "Open Drafting",
    "Push Your Luck",
    "Set Collection"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/O9nPs9wrCghDF4izqFtoGQ__imagepage/img/MN9EkBI65dK1U5sv-EvpnuP7Els=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1965255.jpg"
};

const AEONS_END: Game = {
  name: "Aeon's End",
  description:
    "Aeon's End is a cooperative card game based on deck-building mechanics, in which cards are not shuffled at any stage, and the variable order of players' turns simulates the chaos of battle. Players make significant decisions by managing their deck. During each match, you will face a different Nemesis, each with a unique set of skills, forcing players to use different tactics to defeat him.",
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
  description:
    "Burgle your way to adventure in Clank!, the new deck-building board game. Sneak into an angry dragon's mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow. Be quick and be quiet. One false-step and - CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can only enjoy your plunder if you make it out of the depths alive!",
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
  description:
    "Overboss is an a devious tile-laying game featuring the retro villains of Boss Monster! Emerge from your dungeon to conquer the overworld in this game of tile drafting, map building, and set collection. Up to five players compete to build the map with the greatest Power. You can fill your world with spreading swamps, spooky graveyards, dense forests, dark caves, and orc encampments.",
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

const MYSTERY_OF_THE_TEMPLES = {
  name: "Mystery of the Temples",
  description:
    "Mysterious and intriguing temples call for exploration by brave adventurers. Powerful arcane runes were hidden in these ancient magical ruins protected by dark and deadly curses. Only the most courageous and adventurous Curse Breakers may enter the temples, break the dark curses, and bring back the arcane runes for the magic academy for its glorious bounty. Through teleportation, you can collect crystals of various colors from all over the world, and put them on your very own Crystal Grid in the correct order. Only then will the power of the crystals fuse together, and be powerful enough to break the dark curses inside the temples. Are you able to rise among your peers, and become the most reliable and professional Curse Breaker the magic academy has ever seen?",
  type: ["Strategy"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 4,
  category: ["Economic", "Fantasy"],
  mechanics: [
    "Action Queue",
    "Area Majority / Influence",
    "Pattern REcognition",
    "Set Collection",
    "Variable Player Powers"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/-pEmS5F1Z94KSA7VQ4Tt9w__imagepage/img/cW6e2ilbEtZf5p4YVJa2Oru3RTU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4124305.jpg"
};

const TERRAFORMING_MARS = {
  name: "Terraforming Mars",
  description:
    "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.",
  type: ["Strategy"],
  minimumNumberOfPlayers: 1,
  maximumNumberOfPlayers: 5,
  category: [
    "Economic",
    "Environmental",
    "Industry / Manufacturing",
    "Science Fiction",
    "Space Exploration",
    "Territory Building"
  ],
  mechanics: [
    "Closed Drafting",
    "Contracts",
    "Enclosure",
    "End Game Bonuses",
    "Hand Management",
    "Hexagon Grid",
    "Income",
    "Set Collection",
    "Solo / Solitaire Game",
    "Tags",
    "Take That",
    "Tech Trees / Tech Tracks",
    "Tile Placement",
    "Turn Order: Progressive",
    "Variable Player Powers",
    "Variable Set-up",
    "Victory Points as a Resource"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg"
};

const TAKENOKO = {
  name: "Takenoko",
  description:
    "A long time ago at the Japanese Imperial court, the Chinese Emperor offered a giant panda bear as a symbol of peace to the Japanese Emperor. Since then, the Japanese Emperor has entrusted his court members (the players) with the difficult task of caring for the animal by tending to his bamboo garden",
  type: ["Family"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 4,
  category: ["Animals", "Environmental", "Farming", "Territory Building"],
  mechanics: [
    "Action Points",
    "Contracts",
    "Dice Rolling",
    "End Game Bonuses",
    "Grid Movement",
    "Hexagon Grid",
    "Modular Board",
    "Network and Route Building",
    "Pattern Building",
    "Set Collection",
    "Tile Placement"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/uvz-5V6A2R6dp2oWIXmj_g__imagepage/img/DZl5Nd3-LjtQ9iLJRG-hiQtzBaI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1912529.jpg"
};

const SEVEN_WONDERS_DUEL = {
  name: "7 Wonders Duel",
  description:
    "In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.",
  type: ["Strategy"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 2,
  category: [
    "Ancient",
    "Card Game",
    "City Building",
    "Civilization",
    "Economic"
  ],
  mechanics: [
    "End Game Bonuses",
    "Income",
    "Layering",
    "Market",
    "Modular Board",
    "Multi-Use Cards",
    "Once-Per-Game Abilities",
    "Open Drafting",
    "Set Collection",
    "Sudden Death Ending",
    "Tags",
    "Tech Trees / Tech Tracks",
    "Tug of War",
    "Variable Player Powers",
    "Variable Set-up",
    "Victory Points as a Resource"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__imagepage/img/HdJ4d4O1P89V4UIhZnL3zoYnjow=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2576399.jpg"
};

const TICKET_TO_RIDE_AMSTERDAM = {
  name: "Ticket to Ride: Amsterdam",
  description:
    "Ticket to Ride: Amsterdam features the familiar gameplay from the Ticket to Ride game series — collect cards, claim routes, draw tickets — but on a map of 17th century Amsterdam that allows you to complete a game in no more than 15 minutes.",
  type: ["Family"],
  minimumNumberOfPlayers: 2,
  maximumNumberOfPlayers: 4,
  category: ["Trains"],
  mechanics: [
    "Hand Management",
    "Network and Route Building",
    "Open Drafting",
    "Set Collection"
  ],
  imageUrl:
    "https://cf.geekdo-images.com/ySS22WYTUX0SikxAsMnx4w__imagepage/img/XeWAlT6u64kR5usby3I-qjhwgGE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5399450.png"
};

export const GAMES: Game[] = [
  ABYSS,
  AEONS_END,
  CLANK_A_DECK_BUILDING_ADVENTURE,
  OVERBOSS_A_BOSS_MONSTER_ADVENTURE,
  MYSTERY_OF_THE_TEMPLES,
  TERRAFORMING_MARS,
  TAKENOKO,
  SEVEN_WONDERS_DUEL,
  TICKET_TO_RIDE_AMSTERDAM
  // K2,
  // EVERDELL,
  // DIXIT,
];

// const K2 = {
//   name: "",
//   description: "",
//   type: [],
//   minimumNumberOfPlayers: 0,
//   maximumNumberOfPlayers: 0,
//   category: [],
//   mechanics: [],
//   imageUrl: ""
// };

// const EVERDELL = {
//   name: "",
//   description: "",
//   type: [],
//   minimumNumberOfPlayers: 0,
//   maximumNumberOfPlayers: 0,
//   category: [],
//   mechanics: [],
//   imageUrl: ""
// };

// const DIXIT = {
//   name: "",
//   description: "",
//   type: [],
//   minimumNumberOfPlayers: 0,
//   maximumNumberOfPlayers: 0,
//   category: [],
//   mechanics: [],
//   imageUrl: ""
// };

// Add games from wardrobe XDDD ...
// {
//   name: "",
//   description: "",
//   type: [""],
//   minimumNumberOfPlayers: 0,
//   maximumNumberOfPlayers: 0,
//   category: [""],
//   mechanics: [""],
//   imageUrl: ""
// }
