/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    compileNamespace: "es",
    locales: ["en", "cs", "fr"],
    sourceLocale: "en",
    catalogs: [
      {
        path: "<rootDir>/locales/{locale}/messages",
        include: ["./routes"],
      },
    ],
    format: "po",
  };