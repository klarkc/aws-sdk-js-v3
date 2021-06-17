import { GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput } from "../commands/GetCommentsForComparedCommitCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCommentsForComparedCommit(config: CodeCommitPaginationConfiguration, input: GetCommentsForComparedCommitCommandInput, ...additionalArguments: any): Paginator<GetCommentsForComparedCommitCommandOutput>;
