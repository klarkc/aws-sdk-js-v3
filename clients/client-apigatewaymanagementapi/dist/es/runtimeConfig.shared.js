import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
  apiVersion: "2018-11-29",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "ApiGatewayManagementApi",
  urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map
