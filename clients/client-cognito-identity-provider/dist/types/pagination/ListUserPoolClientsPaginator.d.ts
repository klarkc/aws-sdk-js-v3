import { ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput } from "../commands/ListUserPoolClientsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserPoolClients(config: CognitoIdentityProviderPaginationConfiguration, input: ListUserPoolClientsCommandInput, ...additionalArguments: any): Paginator<ListUserPoolClientsCommandOutput>;
