const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
<<<<<<< Updated upstream
const namePrefix = "Zombie Baby Chimp";
const description = "Unique collection of Baby Chimps";
const baseUri = "ipfs://QmTahxECQEbpaY45MCarxdesP7ktCZZd99YG5uhXUo12Pk";

const solanaMetadata = {
  symbol: "ZBC",
=======
const namePrefix = "Happy Tree";
const description = "A unique collection of a wonderful and happy tree!";
const baseUri = "ipfs://QmPJb8zChpfZ4KEHiNtKNyyX4EGNdNT5cPwiCEPkuYvvJp";

const solanaMetadata = {
  symbol: "HAPPYTREES",
>>>>>>> Stashed changes
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
<<<<<<< Updated upstream
      address: "0x4eF25A37FbC70CA9d561D6a41036ccDF323258Ec",
=======
      address: "0x7049F337C02ab9F0f26C8b3419144ED89cDB4241",
>>>>>>> Stashed changes
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
<<<<<<< Updated upstream
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
=======
    growEditionSizeTo: 5,
    layersOrder: [
>>>>>>> Stashed changes
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
<<<<<<< Updated upstream
  width: 2000,
  height: 2000,
=======
  width: 4,
  height: 4,
>>>>>>> Stashed changes
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
