import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectSentimentRequest, DetectSentimentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectSentimentCommandInput extends DetectSentimentRequest {
}
export interface DetectSentimentCommandOutput extends DetectSentimentResponse, __MetadataBearer {
}
/**
 * <p>Inspects text and returns an inference of the prevailing sentiment
 *         (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectSentimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectSentimentCommandInput} for command's `input` shape.
 * @see {@link DetectSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectSentimentCommand extends $Command<DetectSentimentCommandInput, DetectSentimentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectSentimentCommandInput;
    constructor(input: DetectSentimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectSentimentCommandInput, DetectSentimentCommandOutput>;
    private serialize;
    private deserialize;
}
