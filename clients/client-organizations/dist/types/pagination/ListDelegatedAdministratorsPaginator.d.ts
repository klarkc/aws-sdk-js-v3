import { ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput } from "../commands/ListDelegatedAdministratorsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDelegatedAdministrators(config: OrganizationsPaginationConfiguration, input: ListDelegatedAdministratorsCommandInput, ...additionalArguments: any): Paginator<ListDelegatedAdministratorsCommandOutput>;
