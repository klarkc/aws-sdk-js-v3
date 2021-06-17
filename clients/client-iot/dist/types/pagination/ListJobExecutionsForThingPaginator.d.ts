import { ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput } from "../commands/ListJobExecutionsForThingCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobExecutionsForThing(config: IoTPaginationConfiguration, input: ListJobExecutionsForThingCommandInput, ...additionalArguments: any): Paginator<ListJobExecutionsForThingCommandOutput>;
