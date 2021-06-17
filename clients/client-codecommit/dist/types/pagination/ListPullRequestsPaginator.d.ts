import { ListPullRequestsCommandInput, ListPullRequestsCommandOutput } from "../commands/ListPullRequestsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPullRequests(config: CodeCommitPaginationConfiguration, input: ListPullRequestsCommandInput, ...additionalArguments: any): Paginator<ListPullRequestsCommandOutput>;
