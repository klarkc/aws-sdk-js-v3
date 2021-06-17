import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "../commands/ListSchedulesCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchedules(config: DataBrewPaginationConfiguration, input: ListSchedulesCommandInput, ...additionalArguments: any): Paginator<ListSchedulesCommandOutput>;
