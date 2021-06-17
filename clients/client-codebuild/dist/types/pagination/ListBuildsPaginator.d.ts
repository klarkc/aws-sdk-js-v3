import { ListBuildsCommandInput, ListBuildsCommandOutput } from "../commands/ListBuildsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBuilds(config: CodeBuildPaginationConfiguration, input: ListBuildsCommandInput, ...additionalArguments: any): Paginator<ListBuildsCommandOutput>;
