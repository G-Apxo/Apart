/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["geo","en", "ru" ],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "geo",
    // detetcting from were was person connected
    localeDetection:true
  }
};

