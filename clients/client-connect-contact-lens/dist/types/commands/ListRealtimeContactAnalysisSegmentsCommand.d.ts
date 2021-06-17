import { ConnectContactLensClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectContactLensClient";
import { ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRealtimeContactAnalysisSegmentsCommandInput extends ListRealtimeContactAnalysisSegmentsRequest {
}
export interface ListRealtimeContactAnalysisSegmentsCommandOutput extends ListRealtimeContactAnalysisSegmentsResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
 * // const { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } = require("@aws-sdk/client-connect-contact-lens"); // CommonJS import
 * const client = new ConnectContactLensClient(config);
 * const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectContactLensClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRealtimeContactAnalysisSegmentsCommand extends $Command<ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput, ConnectContactLensClientResolvedConfig> {
    readonly input: ListRealtimeContactAnalysisSegmentsCommandInput;
    constructor(input: ListRealtimeContactAnalysisSegmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectContactLensClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput>;
    private serialize;
    private deserialize;
}
