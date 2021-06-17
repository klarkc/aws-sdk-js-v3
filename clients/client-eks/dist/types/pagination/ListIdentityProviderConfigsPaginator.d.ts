import { ListIdentityProviderConfigsCommandInput, ListIdentityProviderConfigsCommandOutput } from "../commands/ListIdentityProviderConfigsCommand";
import { EKSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIdentityProviderConfigs(config: EKSPaginationConfiguration, input: ListIdentityProviderConfigsCommandInput, ...additionalArguments: any): Paginator<ListIdentityProviderConfigsCommandOutput>;
