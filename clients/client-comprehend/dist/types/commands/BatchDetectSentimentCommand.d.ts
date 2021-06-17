import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectSentimentRequest, BatchDetectSentimentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDetectSentimentCommandInput extends BatchDetectSentimentRequest {
}
export interface BatchDetectSentimentCommandOutput extends BatchDetectSentimentResponse, __MetadataBearer {
}
/**
 * <p>Inspects a batch of documents and returns an inference of the prevailing sentiment,
 *         <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>,
 *       in each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectSentimentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectSentimentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectSentimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectSentimentCommandInput} for command's `input` shape.
 * @see {@link BatchDetectSentimentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDetectSentimentCommand extends $Command<BatchDetectSentimentCommandInput, BatchDetectSentimentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectSentimentCommandInput;
    constructor(input: BatchDetectSentimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectSentimentCommandInput, BatchDetectSentimentCommandOutput>;
    private serialize;
    private deserialize;
}
