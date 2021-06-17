import { ListPackageVersionsCommandInput, ListPackageVersionsCommandOutput } from "../commands/ListPackageVersionsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackageVersions(config: CodeartifactPaginationConfiguration, input: ListPackageVersionsCommandInput, ...additionalArguments: any): Paginator<ListPackageVersionsCommandOutput>;
