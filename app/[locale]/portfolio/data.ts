export interface ProjectData {
  key: string;
  url: string;
  img: string;
}

const IMGAgroibi = "/assets/portfolio/agroibi.webp";
const IMGXprimeLife = "/assets/portfolio/xprime-life.webp";
const IMGBroadFarma = "/assets/portfolio/broad-farma.webp";
const IMGPaintingGame = "/assets/portfolio/painting-game.webp";
const IMGSnakeGame = "/assets/portfolio/simple-snake-game.webp";
const IMGMemoryGame = "/assets/portfolio/memory-game.webp";
const IMGTicTacToeGame = "/assets/portfolio/tic-tac-toe.webp";
const IMGMarioGame = "/assets/portfolio/simple-mario-game.webp";
const IMGHackerToDoList = "/assets/portfolio/hacker-todo-list.webp";
const IMGAffiliatePanel = "/assets/portfolio/affiliate-management-system.webp";
const IMGAAccountingLandingPage =
  "/assets/portfolio/accounting-landingpage.webp";
const IMGProductTemplate = "/assets/portfolio/product-page-template.webp";
const IMGHackerTanos = "/assets/portfolio/hacker-tanos.webp";
const IMGHackerDoGreen = "/assets/portfolio/hacker-do-green.webp";
const IMGAutoDouble = "/assets/portfolio/auto-double-bet.webp";
const IMGCustomerManagement = "/assets/portfolio/customer-management.webp";

export const portfolioData = {
  githubUsername: "heitormbonfim",
  projects: [
    { key: "customerManagement", url: "", img: IMGCustomerManagement },
    { key: "autoDouble", url: "", img: IMGAutoDouble },
    {
      key: "hackerDoGreen",
      url: "https://hackerdogreen-af01bdce46e4.herokuapp.com/",
      img: IMGHackerDoGreen,
    },
    { key: "hackerTanos", url: "", img: IMGHackerTanos },
    { key: "productTemplate", url: "", img: IMGProductTemplate },
    {
      key: "accountingLanding",
      url: "https://github.com/heitormbonfim/lading-page-accounting",
      img: IMGAAccountingLandingPage,
    },
    { key: "affiliatePanel", url: "", img: IMGAffiliatePanel },
    {
      key: "agroibi",
      url: "https://heitormbonfim.github.io/agroibi-mvp/",
      img: IMGAgroibi,
    },
    {
      key: "xprimeLife",
      url: "https://github.com/xprimelife/xprime-life",
      img: IMGXprimeLife,
    },
    { key: "broadFarma", url: "", img: IMGBroadFarma },
    {
      key: "hackerTodoList",
      url: "https://github.com/heitormbonfim/hackertodolist",
      img: IMGHackerToDoList,
    },
    {
      key: "marioGame",
      url: "https://github.com/heitormbonfim/simple-mario-game",
      img: IMGMarioGame,
    },
    {
      key: "paintingGame",
      url: "https://github.com/heitormbonfim/painting-game",
      img: IMGPaintingGame,
    },
    {
      key: "snakeGame",
      url: "https://github.com/heitormbonfim/simple-snake-game",
      img: IMGSnakeGame,
    },
    {
      key: "memoryGame",
      url: "https://github.com/heitormbonfim/simple-memory-game",
      img: IMGMemoryGame,
    },
    {
      key: "ticTacToe",
      url: "https://github.com/heitormbonfim/simple-tic-tac-toe",
      img: IMGTicTacToeGame,
    },
  ] as ProjectData[],
};
