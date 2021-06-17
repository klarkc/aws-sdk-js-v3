import { ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput } from "../commands/ListDeliverabilityTestReportsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeliverabilityTestReports(config: PinpointEmailPaginationConfiguration, input: ListDeliverabilityTestReportsCommandInput, ...additionalArguments: any): Paginator<ListDeliverabilityTestReportsCommandOutput>;
