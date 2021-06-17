import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "../commands/ListRevisionAssetsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRevisionAssets(config: DataExchangePaginationConfiguration, input: ListRevisionAssetsCommandInput, ...additionalArguments: any): Paginator<ListRevisionAssetsCommandOutput>;
