import { GetInterpolatedAssetPropertyValuesCommandInput, GetInterpolatedAssetPropertyValuesCommandOutput } from "../commands/GetInterpolatedAssetPropertyValuesCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetInterpolatedAssetPropertyValues(config: IoTSiteWisePaginationConfiguration, input: GetInterpolatedAssetPropertyValuesCommandInput, ...additionalArguments: any): Paginator<GetInterpolatedAssetPropertyValuesCommandOutput>;
