import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2017-01-11",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "CloudDirectory",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
