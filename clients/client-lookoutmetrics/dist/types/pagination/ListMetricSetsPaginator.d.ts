import { ListMetricSetsCommandInput, ListMetricSetsCommandOutput } from "../commands/ListMetricSetsCommand";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMetricSets(config: LookoutMetricsPaginationConfiguration, input: ListMetricSetsCommandInput, ...additionalArguments: any): Paginator<ListMetricSetsCommandOutput>;
