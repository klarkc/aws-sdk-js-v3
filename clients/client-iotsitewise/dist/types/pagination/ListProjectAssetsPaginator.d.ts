import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "../commands/ListProjectAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProjectAssets(config: IoTSiteWisePaginationConfiguration, input: ListProjectAssetsCommandInput, ...additionalArguments: any): Paginator<ListProjectAssetsCommandOutput>;
