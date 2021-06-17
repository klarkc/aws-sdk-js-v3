import { DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput } from "../commands/DescribeMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeMergeConflicts(config: CodeCommitPaginationConfiguration, input: DescribeMergeConflictsCommandInput, ...additionalArguments: any): Paginator<DescribeMergeConflictsCommandOutput>;
