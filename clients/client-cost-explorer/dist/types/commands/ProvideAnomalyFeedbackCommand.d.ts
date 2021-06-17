import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ProvideAnomalyFeedbackRequest, ProvideAnomalyFeedbackResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ProvideAnomalyFeedbackCommandInput extends ProvideAnomalyFeedbackRequest {
}
export interface ProvideAnomalyFeedbackCommandOutput extends ProvideAnomalyFeedbackResponse, __MetadataBearer {
}
/**
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ProvideAnomalyFeedbackCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ProvideAnomalyFeedbackCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ProvideAnomalyFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvideAnomalyFeedbackCommandInput} for command's `input` shape.
 * @see {@link ProvideAnomalyFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ProvideAnomalyFeedbackCommand extends $Command<ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: ProvideAnomalyFeedbackCommandInput;
    constructor(input: ProvideAnomalyFeedbackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput>;
    private serialize;
    private deserialize;
}
