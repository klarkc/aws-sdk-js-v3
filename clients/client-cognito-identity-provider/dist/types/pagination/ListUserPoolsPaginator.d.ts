import { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "../commands/ListUserPoolsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserPools(config: CognitoIdentityProviderPaginationConfiguration, input: ListUserPoolsCommandInput, ...additionalArguments: any): Paginator<ListUserPoolsCommandOutput>;
