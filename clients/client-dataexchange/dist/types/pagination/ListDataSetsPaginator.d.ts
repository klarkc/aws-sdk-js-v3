import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSets(config: DataExchangePaginationConfiguration, input: ListDataSetsCommandInput, ...additionalArguments: any): Paginator<ListDataSetsCommandOutput>;
