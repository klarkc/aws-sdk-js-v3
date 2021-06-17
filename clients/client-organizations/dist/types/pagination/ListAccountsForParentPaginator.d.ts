import { ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput } from "../commands/ListAccountsForParentCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccountsForParent(config: OrganizationsPaginationConfiguration, input: ListAccountsForParentCommandInput, ...additionalArguments: any): Paginator<ListAccountsForParentCommandOutput>;
