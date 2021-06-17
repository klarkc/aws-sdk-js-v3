import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartSentimentDetectionJobRequest, StartSentimentDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSentimentDetectionJobCommandInput extends StartSentimentDetectionJobRequest {
}
export interface StartSentimentDetectionJobCommandOutput extends StartSentimentDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous sentiment detection job for a collection of documents. use the
 *          operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartSentimentDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartSentimentDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartSentimentDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSentimentDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartSentimentDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSentimentDetectionJobCommand extends $Command<StartSentimentDetectionJobCommandInput, StartSentimentDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartSentimentDetectionJobCommandInput;
    constructor(input: StartSentimentDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSentimentDetectionJobCommandInput, StartSentimentDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
