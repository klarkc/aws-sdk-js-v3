import { ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput } from "../commands/ListUserHierarchyGroupsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListUserHierarchyGroups(config: ConnectPaginationConfiguration, input: ListUserHierarchyGroupsCommandInput, ...additionalArguments: any): Paginator<ListUserHierarchyGroupsCommandOutput>;
