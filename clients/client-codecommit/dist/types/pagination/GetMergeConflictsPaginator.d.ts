import { GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput } from "../commands/GetMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetMergeConflicts(config: CodeCommitPaginationConfiguration, input: GetMergeConflictsCommandInput, ...additionalArguments: any): Paginator<GetMergeConflictsCommandOutput>;
