import { ConnectContactLensClient } from "./ConnectContactLensClient";
import { ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput } from "./commands/ListRealtimeContactAnalysisSegmentsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents,
 *       by using speech transcription, natural language processing, and intelligent search
 *       capabilities. It performs sentiment analysis, detects issues, and enables you to automatically
 *       categorize contacts.</p>
 *          <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent
 *       conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using
 *         Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 */
export declare class ConnectContactLens extends ConnectContactLensClient {
    /**
     * <p>Provides a list of analysis segments for a real-time analysis session.</p>
     */
    listRealtimeContactAnalysisSegments(args: ListRealtimeContactAnalysisSegmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput>;
    listRealtimeContactAnalysisSegments(args: ListRealtimeContactAnalysisSegmentsCommandInput, cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void): void;
    listRealtimeContactAnalysisSegments(args: ListRealtimeContactAnalysisSegmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void): void;
}
