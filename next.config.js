/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["geo-Geo","en-US", "ru-Ru" ],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "geo-Geo"
  }
};

