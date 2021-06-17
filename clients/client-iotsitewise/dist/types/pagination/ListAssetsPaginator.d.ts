import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssets(config: IoTSiteWisePaginationConfiguration, input: ListAssetsCommandInput, ...additionalArguments: any): Paginator<ListAssetsCommandOutput>;
