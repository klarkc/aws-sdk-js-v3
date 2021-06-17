import { GetCommentReactionsCommandInput, GetCommentReactionsCommandOutput } from "../commands/GetCommentReactionsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetCommentReactions(config: CodeCommitPaginationConfiguration, input: GetCommentReactionsCommandInput, ...additionalArguments: any): Paginator<GetCommentReactionsCommandOutput>;
