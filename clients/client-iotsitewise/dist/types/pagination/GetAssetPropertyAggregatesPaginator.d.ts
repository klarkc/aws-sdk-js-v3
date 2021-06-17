import { GetAssetPropertyAggregatesCommandInput, GetAssetPropertyAggregatesCommandOutput } from "../commands/GetAssetPropertyAggregatesCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAssetPropertyAggregates(config: IoTSiteWisePaginationConfiguration, input: GetAssetPropertyAggregatesCommandInput, ...additionalArguments: any): Paginator<GetAssetPropertyAggregatesCommandOutput>;
