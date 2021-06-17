import { GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput } from "../commands/GetCommentsForPullRequestCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCommentsForPullRequest(config: CodeCommitPaginationConfiguration, input: GetCommentsForPullRequestCommandInput, ...additionalArguments: any): Paginator<GetCommentsForPullRequestCommandOutput>;
