import { ListComponentBuildVersionsCommandInput, ListComponentBuildVersionsCommandOutput } from "../commands/ListComponentBuildVersionsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListComponentBuildVersions(config: ImagebuilderPaginationConfiguration, input: ListComponentBuildVersionsCommandInput, ...additionalArguments: any): Paginator<ListComponentBuildVersionsCommandOutput>;
