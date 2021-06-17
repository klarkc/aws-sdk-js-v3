import { ListDelegatedServicesForAccountCommandInput, ListDelegatedServicesForAccountCommandOutput } from "../commands/ListDelegatedServicesForAccountCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDelegatedServicesForAccount(config: OrganizationsPaginationConfiguration, input: ListDelegatedServicesForAccountCommandInput, ...additionalArguments: any): Paginator<ListDelegatedServicesForAccountCommandOutput>;
