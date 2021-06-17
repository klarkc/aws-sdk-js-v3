import { ListRepositoriesForApprovalRuleTemplateCommandInput, ListRepositoriesForApprovalRuleTemplateCommandOutput } from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRepositoriesForApprovalRuleTemplate(config: CodeCommitPaginationConfiguration, input: ListRepositoriesForApprovalRuleTemplateCommandInput, ...additionalArguments: any): Paginator<ListRepositoriesForApprovalRuleTemplateCommandOutput>;
