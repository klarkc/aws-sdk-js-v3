import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroups(config: IAMPaginationConfiguration, input: ListGroupsCommandInput, ...additionalArguments: any): Paginator<ListGroupsCommandOutput>;
