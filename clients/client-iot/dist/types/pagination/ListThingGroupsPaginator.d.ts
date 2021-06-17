import { ListThingGroupsCommandInput, ListThingGroupsCommandOutput } from "../commands/ListThingGroupsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingGroups(config: IoTPaginationConfiguration, input: ListThingGroupsCommandInput, ...additionalArguments: any): Paginator<ListThingGroupsCommandOutput>;
