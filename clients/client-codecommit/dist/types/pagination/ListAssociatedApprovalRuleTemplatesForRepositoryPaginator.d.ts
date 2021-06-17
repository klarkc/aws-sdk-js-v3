import { ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput } from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociatedApprovalRuleTemplatesForRepository(config: CodeCommitPaginationConfiguration, input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput, ...additionalArguments: any): Paginator<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
