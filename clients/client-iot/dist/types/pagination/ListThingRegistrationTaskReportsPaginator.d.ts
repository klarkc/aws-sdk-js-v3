import { ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput } from "../commands/ListThingRegistrationTaskReportsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListThingRegistrationTaskReports(config: IoTPaginationConfiguration, input: ListThingRegistrationTaskReportsCommandInput, ...additionalArguments: any): Paginator<ListThingRegistrationTaskReportsCommandOutput>;
