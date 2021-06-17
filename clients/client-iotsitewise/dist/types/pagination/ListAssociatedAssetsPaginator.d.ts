import { ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput } from "../commands/ListAssociatedAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociatedAssets(config: IoTSiteWisePaginationConfiguration, input: ListAssociatedAssetsCommandInput, ...additionalArguments: any): Paginator<ListAssociatedAssetsCommandOutput>;
