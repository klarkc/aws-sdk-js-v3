import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopKeyPhrasesDetectionJobRequest, StopKeyPhrasesDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopKeyPhrasesDetectionJobCommandInput extends StopKeyPhrasesDetectionJobRequest {
}
export interface StopKeyPhrasesDetectionJobCommandOutput extends StopKeyPhrasesDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Stops a key phrases detection job in progress.</p>
 *          <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put
 *       into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it
 *       is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the
 *         <code>STOPPED</code> state.</p>
 *          <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the
 *         <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400
 *       Internal Request Exception. </p>
 *          <p>When a job is stopped, any documents already processed are written to the output
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopKeyPhrasesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopKeyPhrasesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StopKeyPhrasesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopKeyPhrasesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopKeyPhrasesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopKeyPhrasesDetectionJobCommand extends $Command<StopKeyPhrasesDetectionJobCommandInput, StopKeyPhrasesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopKeyPhrasesDetectionJobCommandInput;
    constructor(input: StopKeyPhrasesDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopKeyPhrasesDetectionJobCommandInput, StopKeyPhrasesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
