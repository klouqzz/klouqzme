export default async (req, res) => {
  const techs = [
    {
      name: "Adobe Photoshop",
      src: "/static/techs/photoshop.svg",
    },
    {
      name: "Adobe Illustrator",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    },
    {
      name: "Adobe After Effects",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    },
    {
      name: "Adobe Premiere Pro",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    },
    {
      name: "Behance",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Font_Awesome_5_brands_behance-square.svg",
    },
    {
      name: "HTML",
      src: "/static/techs/html.svg",
    },
    {
      name: "Java",
      src: "https://upload.wikimedia.org/wikipedia/tr/2/2e/Java_Logo.svg",
    },
    {
      name: "CSS",
      src: "/static/techs/css.svg",
    },
    {
      name: "Javascript",
      src: "/static/techs/javascript.svg",
    },
    {
      name: "Linkedin",
      src: "/static/techs/linkedin.svg",
    },
    {
      name: "Node.js",
      src: "/static/techs/nodejs.svg",
    },
    {
      name: "Mongo DB",
      src: "/static/techs/mongodb.svg",
    },
    {
      name: "TradingView",
      src: "/static/techs/tradingview.svg",
    },
    {
      name: "Investing",
      src: "/static/techs/investing.svg",
    },
    {
      name: "React",
      src: "/static/techs/react.svg",
    },
    {
      name: "VSC",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      name: "Vercel",
      src: "/static/techs/vercel.svg",
    },
    {
      name: "Github",
      src: "/static/techs/github.svg",
    },
    {
      name: "Replit",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg",
    },
    {
      name: "PhilPapers",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/P_philosophy.svg",
    },
  ];
  res.status(200).json(techs);
};
