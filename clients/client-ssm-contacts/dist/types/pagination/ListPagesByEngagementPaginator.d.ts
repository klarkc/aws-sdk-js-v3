import { ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput } from "../commands/ListPagesByEngagementCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPagesByEngagement(config: SSMContactsPaginationConfiguration, input: ListPagesByEngagementCommandInput, ...additionalArguments: any): Paginator<ListPagesByEngagementCommandOutput>;
