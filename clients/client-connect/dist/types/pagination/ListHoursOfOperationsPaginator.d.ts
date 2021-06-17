import { ListHoursOfOperationsCommandInput, ListHoursOfOperationsCommandOutput } from "../commands/ListHoursOfOperationsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHoursOfOperations(config: ConnectPaginationConfiguration, input: ListHoursOfOperationsCommandInput, ...additionalArguments: any): Paginator<ListHoursOfOperationsCommandOutput>;
