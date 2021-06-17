import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroups(config: WorkMailPaginationConfiguration, input: ListGroupsCommandInput, ...additionalArguments: any): Paginator<ListGroupsCommandOutput>;
