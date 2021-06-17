import { ListThingGroupsForThingCommandInput, ListThingGroupsForThingCommandOutput } from "../commands/ListThingGroupsForThingCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingGroupsForThing(config: IoTPaginationConfiguration, input: ListThingGroupsForThingCommandInput, ...additionalArguments: any): Paginator<ListThingGroupsForThingCommandOutput>;
