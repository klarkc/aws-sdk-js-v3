import { ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput } from "../commands/ListIdentityProvidersCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIdentityProviders(config: CognitoIdentityProviderPaginationConfiguration, input: ListIdentityProvidersCommandInput, ...additionalArguments: any): Paginator<ListIdentityProvidersCommandOutput>;
