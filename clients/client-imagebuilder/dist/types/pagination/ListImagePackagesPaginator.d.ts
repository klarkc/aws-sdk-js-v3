import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "../commands/ListImagePackagesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImagePackages(config: ImagebuilderPaginationConfiguration, input: ListImagePackagesCommandInput, ...additionalArguments: any): Paginator<ListImagePackagesCommandOutput>;
