import { ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput } from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRealtimeContactAnalysisSegments(config: ConnectContactLensPaginationConfiguration, input: ListRealtimeContactAnalysisSegmentsCommandInput, ...additionalArguments: any): Paginator<ListRealtimeContactAnalysisSegmentsCommandOutput>;
