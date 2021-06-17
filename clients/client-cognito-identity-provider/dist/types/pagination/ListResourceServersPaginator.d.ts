import { ListResourceServersCommandInput, ListResourceServersCommandOutput } from "../commands/ListResourceServersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResourceServers(config: CognitoIdentityProviderPaginationConfiguration, input: ListResourceServersCommandInput, ...additionalArguments: any): Paginator<ListResourceServersCommandOutput>;
