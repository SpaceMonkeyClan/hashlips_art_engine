const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Referee";
const description = "Referee Jam is a brand within the sport metaverse, where their community can share experiences and knowledges so new referees all over the world can benefit. Join for free to View the collection at ReferreJam.com/gallery. RefereeJam starts with a collection of 3,000 avatars that give access to our world best referee knowledgeable blog. A court of the internet where new referees can learn the basic of referees rules, principals and techniques and meet to create a decentralized future for all sports. We watch together. We rule together. We arbitrate together. Ready to take the trophy home?";
const baseUri = "ipfs://QmaSkERhAUbj9tS5s5BhyJHQ4AXKkzFRgssRvtFA67LZQx";

const solanaMetadata = {
  symbol: "MOM",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "null",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Body" },
      { name: "Eyebrows" },
      { name: "Shirt" },
      { name: "Neck" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Moustache" },
      { name: "Nose" },
      { name: "Glasses" },
      { name: "Hat" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000,
  height: 2000,
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