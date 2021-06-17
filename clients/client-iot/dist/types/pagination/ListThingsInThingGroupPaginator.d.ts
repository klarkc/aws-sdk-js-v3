import { ListThingsInThingGroupCommandInput, ListThingsInThingGroupCommandOutput } from "../commands/ListThingsInThingGroupCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingsInThingGroup(config: IoTPaginationConfiguration, input: ListThingsInThingGroupCommandInput, ...additionalArguments: any): Paginator<ListThingsInThingGroupCommandOutput>;
