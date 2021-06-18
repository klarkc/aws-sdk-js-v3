import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2015-07-09",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "API Gateway",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
