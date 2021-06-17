import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "../commands/ListAssetModelsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssetModels(config: IoTSiteWisePaginationConfiguration, input: ListAssetModelsCommandInput, ...additionalArguments: any): Paginator<ListAssetModelsCommandOutput>;
