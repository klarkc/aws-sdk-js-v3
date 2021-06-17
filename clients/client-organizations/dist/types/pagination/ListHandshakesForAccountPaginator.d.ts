import { ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput } from "../commands/ListHandshakesForAccountCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHandshakesForAccount(config: OrganizationsPaginationConfiguration, input: ListHandshakesForAccountCommandInput, ...additionalArguments: any): Paginator<ListHandshakesForAccountCommandOutput>;
