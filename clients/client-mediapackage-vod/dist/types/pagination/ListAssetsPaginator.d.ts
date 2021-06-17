import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssets(config: MediaPackageVodPaginationConfiguration, input: ListAssetsCommandInput, ...additionalArguments: any): Paginator<ListAssetsCommandOutput>;
