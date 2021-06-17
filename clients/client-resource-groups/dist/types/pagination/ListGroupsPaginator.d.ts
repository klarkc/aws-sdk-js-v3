import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroups(config: ResourceGroupsPaginationConfiguration, input: ListGroupsCommandInput, ...additionalArguments: any): Paginator<ListGroupsCommandOutput>;
