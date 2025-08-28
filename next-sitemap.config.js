/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://2k.onebuffalogames.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
};
