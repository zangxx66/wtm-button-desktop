"use strict";

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.hololive.wtmbutton",
        productName: "WTMbutton",
        buildVersion: "1.0.0",
        asar: true,
        compression: "maximum",
        copyright: "Copyright © WTMbutton",
        mac: {
          category: "public.app-category.productivity",
          icon: "public/favicon.icns"
        },
        win: {
          target: "nsis",
          icon: "public/favicon.ico"
        },
        linux: {
          category: "public.app-category.productivity"
        },
        nsis: {
          oneClick: true,
          allowElevation: true,
          menuCategory: true,
          createDesktopShortcut: true,
          deleteAppDataOnUninstall: true,
          language: "0x0804",
          artifactName: "${productName}_${version}_Setup.${ext}"
        }
      }
    }
  }
};
