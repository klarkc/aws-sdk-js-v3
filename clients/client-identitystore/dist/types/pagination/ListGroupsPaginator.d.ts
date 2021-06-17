import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { IdentitystorePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroups(config: IdentitystorePaginationConfiguration, input: ListGroupsCommandInput, ...additionalArguments: any): Paginator<ListGroupsCommandOutput>;
