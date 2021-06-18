import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2020-08-23",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Appflow",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
