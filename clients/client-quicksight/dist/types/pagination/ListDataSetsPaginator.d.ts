import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "../commands/ListDataSetsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSets(config: QuickSightPaginationConfiguration, input: ListDataSetsCommandInput, ...additionalArguments: any): Paginator<ListDataSetsCommandOutput>;
