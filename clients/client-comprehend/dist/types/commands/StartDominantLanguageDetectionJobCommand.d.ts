import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartDominantLanguageDetectionJobRequest, StartDominantLanguageDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDominantLanguageDetectionJobCommandInput extends StartDominantLanguageDetectionJobRequest {
}
export interface StartDominantLanguageDetectionJobCommandOutput extends StartDominantLanguageDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous dominant language detection job for a collection of documents. Use
 *       the  operation to track the status
 *       of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartDominantLanguageDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartDominantLanguageDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartDominantLanguageDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDominantLanguageDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartDominantLanguageDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDominantLanguageDetectionJobCommand extends $Command<StartDominantLanguageDetectionJobCommandInput, StartDominantLanguageDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartDominantLanguageDetectionJobCommandInput;
    constructor(input: StartDominantLanguageDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDominantLanguageDetectionJobCommandInput, StartDominantLanguageDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
