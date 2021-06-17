import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroups(config: CognitoIdentityProviderPaginationConfiguration, input: ListGroupsCommandInput, ...additionalArguments: any): Paginator<ListGroupsCommandOutput>;
