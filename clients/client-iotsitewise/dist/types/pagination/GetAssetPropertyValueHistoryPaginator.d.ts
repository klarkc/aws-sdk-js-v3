import { GetAssetPropertyValueHistoryCommandInput, GetAssetPropertyValueHistoryCommandOutput } from "../commands/GetAssetPropertyValueHistoryCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAssetPropertyValueHistory(config: IoTSiteWisePaginationConfiguration, input: GetAssetPropertyValueHistoryCommandInput, ...additionalArguments: any): Paginator<GetAssetPropertyValueHistoryCommandOutput>;
