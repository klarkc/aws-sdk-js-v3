import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopCompilationJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopCompilationJobCommandInput extends StopCompilationJobRequest {
}
export interface StopCompilationJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a model compilation job.</p>
 *         <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the
 *             job down. If the job hasn't stopped, it sends the SIGKILL signal.</p>
 *         <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to
 *             <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopCompilationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopCompilationJobCommandInput} for command's `input` shape.
 * @see {@link StopCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopCompilationJobCommand extends $Command<StopCompilationJobCommandInput, StopCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopCompilationJobCommandInput;
    constructor(input: StopCompilationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCompilationJobCommandInput, StopCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
