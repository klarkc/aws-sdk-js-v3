export default {
  name: "@aws-sdk/client-cognito-identity",
  description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
  version: "3.18.0",
  scripts: {
    clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
    "build-documentation": "yarn remove-documentation && typedoc ./",
    prepublishOnly: "yarn build && downlevel-dts dist/types dist/types/ts3.4",
    "remove-definitions": "rimraf ./types",
    "remove-dist": "rimraf ./dist",
    "remove-documentation": "rimraf ./docs",
    "test:unit": "mocha **/cjs/**/*.spec.js",
    "test:e2e": "mocha **/cjs/**/*.ispec.js && karma start karma.conf.js",
    test: "yarn test:unit",
    "build:cjs": "tsc -p tsconfig.json",
    "build:es": "tsc -p tsconfig.es.json",
    build: "yarn build:cjs && yarn build:es &&  node buildPackage.js",
  },
  main: "./dist/cjs/index.js",
  types: "./dist/types/index.d.ts",
  module: "./dist/es/index.js",
  browser: {
    "./runtimeConfig": "./runtimeConfig.browser",
    "./dist/es/runtimeConfig": "./dist/es/runtimeConfig.browser",
  },
  "react-native": {
    "./runtimeConfig": "./runtimeConfig.native",
  },
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "^1.0.0",
    "@aws-crypto/sha256-js": "^1.0.0",
    "@aws-sdk/client-sts": "3.18.0",
    "@aws-sdk/config-resolver": "3.18.0",
    "@aws-sdk/credential-provider-node": "3.18.0",
    "@aws-sdk/fetch-http-handler": "3.18.0",
    "@aws-sdk/hash-node": "3.18.0",
    "@aws-sdk/invalid-dependency": "3.18.0",
    "@aws-sdk/middleware-content-length": "3.18.0",
    "@aws-sdk/middleware-host-header": "3.18.0",
    "@aws-sdk/middleware-logger": "3.18.0",
    "@aws-sdk/middleware-retry": "3.18.0",
    "@aws-sdk/middleware-serde": "3.18.0",
    "@aws-sdk/middleware-signing": "3.18.0",
    "@aws-sdk/middleware-stack": "3.18.0",
    "@aws-sdk/middleware-user-agent": "3.18.0",
    "@aws-sdk/node-config-provider": "3.18.0",
    "@aws-sdk/node-http-handler": "3.18.0",
    "@aws-sdk/protocol-http": "3.18.0",
    "@aws-sdk/smithy-client": "3.18.0",
    "@aws-sdk/types": "3.18.0",
    "@aws-sdk/url-parser": "3.18.0",
    "@aws-sdk/util-base64-browser": "3.18.0",
    "@aws-sdk/util-base64-node": "3.18.0",
    "@aws-sdk/util-body-length-browser": "3.18.0",
    "@aws-sdk/util-body-length-node": "3.18.0",
    "@aws-sdk/util-user-agent-browser": "3.18.0",
    "@aws-sdk/util-user-agent-node": "3.18.0",
    "@aws-sdk/util-utf8-browser": "3.18.0",
    "@aws-sdk/util-utf8-node": "3.18.0",
    tslib: "^2.0.0",
  },
  devDependencies: {
    "@aws-sdk/client-documentation-generator": "3.18.0",
    "@aws-sdk/client-iam": "3.18.0",
    "@types/chai": "^4.2.11",
    "@types/mocha": "^8.0.4",
    "@types/node": "^12.7.5",
    "downlevel-dts": "0.7.0",
    jest: "^26.1.0",
    rimraf: "^3.0.0",
    "ts-jest": "^26.4.1",
    typedoc: "^0.19.2",
    typescript: "~4.3.2",
  },
  engines: {
    node: ">=10.0.0",
  },
  typesVersions: {
    "<4.0": {
      "types/*": ["types/ts3.4/*"],
    },
  },
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/",
  },
  license: "Apache-2.0",
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-cognito-identity",
  },
};
