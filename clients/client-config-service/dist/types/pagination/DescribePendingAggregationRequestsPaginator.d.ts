import { DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput } from "../commands/DescribePendingAggregationRequestsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePendingAggregationRequests(config: ConfigServicePaginationConfiguration, input: DescribePendingAggregationRequestsCommandInput, ...additionalArguments: any): Paginator<DescribePendingAggregationRequestsCommandOutput>;
