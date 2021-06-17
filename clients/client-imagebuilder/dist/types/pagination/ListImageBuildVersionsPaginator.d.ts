import { ListImageBuildVersionsCommandInput, ListImageBuildVersionsCommandOutput } from "../commands/ListImageBuildVersionsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImageBuildVersions(config: ImagebuilderPaginationConfiguration, input: ListImageBuildVersionsCommandInput, ...additionalArguments: any): Paginator<ListImageBuildVersionsCommandOutput>;
