import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2018-05-01",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Chime",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
