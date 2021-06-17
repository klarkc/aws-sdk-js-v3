import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFeedbackCommandInput extends PutFeedbackRequest {
}
export interface PutFeedbackCommandOutput extends PutFeedbackResponse, __MetadataBearer {
}
/**
 * <p>Add feedback for an anomalous metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, PutFeedbackCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, PutFeedbackCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFeedbackCommand extends $Command<PutFeedbackCommandInput, PutFeedbackCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: PutFeedbackCommandInput;
    constructor(input: PutFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFeedbackCommandInput, PutFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
