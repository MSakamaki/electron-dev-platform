System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  traceurOptions: {
    "annotations": true,
    "memberVariables": true,
    "types": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "app": {
      "main": "index",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@3.0.2",
    "typescript": "npm:typescript@1.8.0",
    "github:frankwallis/plugin-typescript@3.0.2": {
      "typescript": "npm:typescript@1.9.0-dev.20160211"
    }
  }
});
