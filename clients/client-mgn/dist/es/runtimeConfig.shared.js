import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
    apiVersion: "2020-02-26",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: defaultRegionInfoProvider,
    serviceId: "mgn",
    urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map