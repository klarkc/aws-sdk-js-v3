import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackages(config: CodeartifactPaginationConfiguration, input: ListPackagesCommandInput, ...additionalArguments: any): Paginator<ListPackagesCommandOutput>;
