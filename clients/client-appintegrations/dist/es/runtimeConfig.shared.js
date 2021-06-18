import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2020-07-29",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "AppIntegrations",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
