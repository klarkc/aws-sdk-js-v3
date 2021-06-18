import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2020-09-10",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "ApplicationCostProfiler",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
