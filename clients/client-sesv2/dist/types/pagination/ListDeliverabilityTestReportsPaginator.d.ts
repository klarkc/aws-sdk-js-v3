import { ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput } from "../commands/ListDeliverabilityTestReportsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDeliverabilityTestReports(config: SESv2PaginationConfiguration, input: ListDeliverabilityTestReportsCommandInput, ...additionalArguments: any): Paginator<ListDeliverabilityTestReportsCommandOutput>;
