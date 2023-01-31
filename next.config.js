/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/libertus",
      destination: "https://discord.gg/9gqgUnkV2N",
      permanent: true,
      source: "/youtube",
      destination: "https://youtube.com/@klouqz",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
