"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSharedValues = void 0;
const endpoints_1 = require("./endpoints");
const url_parser_1 = require("@aws-sdk/url-parser");
/**
 * @internal
 */
exports.ClientSharedValues = {
    apiVersion: "2017-01-11",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: endpoints_1.defaultRegionInfoProvider,
    serviceId: "Marketplace Entitlement Service",
    urlParser: url_parser_1.parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map