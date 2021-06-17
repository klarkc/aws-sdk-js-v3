import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUsers(config: CognitoIdentityProviderPaginationConfiguration, input: ListUsersCommandInput, ...additionalArguments: any): Paginator<ListUsersCommandOutput>;
