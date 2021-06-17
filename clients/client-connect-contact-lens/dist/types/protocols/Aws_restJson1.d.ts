import { ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput } from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand: (input: ListRealtimeContactAnalysisSegmentsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRealtimeContactAnalysisSegmentsCommandOutput>;
