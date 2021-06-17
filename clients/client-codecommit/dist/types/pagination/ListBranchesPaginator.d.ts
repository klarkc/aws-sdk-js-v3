import { ListBranchesCommandInput, ListBranchesCommandOutput } from "../commands/ListBranchesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBranches(config: CodeCommitPaginationConfiguration, input: ListBranchesCommandInput, ...additionalArguments: any): Paginator<ListBranchesCommandOutput>;
