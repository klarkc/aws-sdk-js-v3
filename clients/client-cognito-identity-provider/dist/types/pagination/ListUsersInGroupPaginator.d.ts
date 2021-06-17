import { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "../commands/ListUsersInGroupCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsersInGroup(config: CognitoIdentityProviderPaginationConfiguration, input: ListUsersInGroupCommandInput, ...additionalArguments: any): Paginator<ListUsersInGroupCommandOutput>;
