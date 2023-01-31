export default async (req, res) => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.discordapp.com/attachments/864201025047887932/1043597766259134595/image.png",
      name: "Poliéncé",
      description: "Giveaway Bot Project Working on Discord Platform.",
      link: "https://dsc.gg/polience",
      language: "Discord.js",
      languageIcon: "./static/techs/js.svg",
    },
    {
      id: 2,
      image:
        "https://cdn.discordapp.com/attachments/837060599031791678/1070034283592417370/libertus_logo.png",
      name: "Libertus Studios",
      description: "Our Development Studio",
      link: "https://discord.gg/9gqgUnkV2N",
      language: "React.js",
      languageIcon: "./static/techs/reactjs.svg",
    },
    {
      id: 4,
      image:
        "https://cdn.discordapp.com/attachments/864201025047887932/1041693973590331542/1111.png",
      name: "CryptoAnkha™",
      description: "NFT Project With My Team.",
      link: "https://opensea.io/cryptoankha",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
  ];
  res.status(200).json(data);
};
