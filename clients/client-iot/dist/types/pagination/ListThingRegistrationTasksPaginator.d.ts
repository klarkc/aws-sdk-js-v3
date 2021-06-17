import { ListThingRegistrationTasksCommandInput, ListThingRegistrationTasksCommandOutput } from "../commands/ListThingRegistrationTasksCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingRegistrationTasks(config: IoTPaginationConfiguration, input: ListThingRegistrationTasksCommandInput, ...additionalArguments: any): Paginator<ListThingRegistrationTasksCommandOutput>;
