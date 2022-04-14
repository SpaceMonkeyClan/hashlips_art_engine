const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Mellow Fellow Felix";
const description = "The cat on whom humans all gave up, the collection Mellow Fellow Felix depicts the everyday life of Miss Felix, who is a fluffy cute Norwegian Forest Cat. Despite her cuteness overloaded attributes, do not forget she is a forest cat afterall. She hunts with Hammers, Dual axes, Sword and shield too. After a hectic day at the forest hunting, she ends her day with a tummy full of yummy lip-smacking food. She’s often caught having pizza and doughnut, which is her 2nd and 3rd fav food after fish. To improve her efficiency as a hunter in the forest she often has to go undercover to blend with the nature so as her enemies cannot locate her. Miss Felix loves her black outfit, which makes her feel like a secret warrior. On a very rare day, when her mood is at the peak, she can be seen splashing in rainbow colours too. It was a very hard task to manage an interview with Miss Felix, and ask her all the details. Finally, after months of struggle to locate her, we have finally been lucky to get an interview from her, gathering all the details which we have crafted in 10000 NFTs. She has been very polite, and also promised us another round of interview with her aunt, who is a Lynx Cat. This will be featured in season 2.";
const baseUri = "ipfs://QmWehH6cUnpo8Sdxh9eqNQzx4j3XrRLfh8oc989pF7cMue";

const solanaMetadata = {
  symbol: "MOM",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Skin" },
      { name: "Accessories" },
      { name: "Clothes" },
      { name: "Mouth" },
      { name: "Head" },
      { name: "Caged Thought" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
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