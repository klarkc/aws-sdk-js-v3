import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "../commands/ListActivitiesCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActivities(config: SFNPaginationConfiguration, input: ListActivitiesCommandInput, ...additionalArguments: any): Paginator<ListActivitiesCommandOutput>;
