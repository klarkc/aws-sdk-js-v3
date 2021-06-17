import { ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput } from "../commands/ListInstanceGroupsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInstanceGroups(config: EMRPaginationConfiguration, input: ListInstanceGroupsCommandInput, ...additionalArguments: any): Paginator<ListInstanceGroupsCommandOutput>;
