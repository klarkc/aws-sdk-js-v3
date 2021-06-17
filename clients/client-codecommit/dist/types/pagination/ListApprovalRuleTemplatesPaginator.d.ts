import { ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput } from "../commands/ListApprovalRuleTemplatesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApprovalRuleTemplates(config: CodeCommitPaginationConfiguration, input: ListApprovalRuleTemplatesCommandInput, ...additionalArguments: any): Paginator<ListApprovalRuleTemplatesCommandOutput>;
