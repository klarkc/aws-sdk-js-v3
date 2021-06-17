import { ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput } from "../commands/ListPackageVersionAssetsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackageVersionAssets(config: CodeartifactPaginationConfiguration, input: ListPackageVersionAssetsCommandInput, ...additionalArguments: any): Paginator<ListPackageVersionAssetsCommandOutput>;
