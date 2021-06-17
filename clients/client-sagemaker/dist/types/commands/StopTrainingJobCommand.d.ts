import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopTrainingJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopTrainingJobCommandInput extends StopTrainingJobRequest {
}
export interface StopTrainingJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
 *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
 *             Algorithms might use this 120-second window to save the model artifacts, so the results
 *             of the training is not lost. </p>
 *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
 *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
 *                 <code>Stopped</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingJobCommandInput} for command's `input` shape.
 * @see {@link StopTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopTrainingJobCommand extends $Command<StopTrainingJobCommandInput, StopTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopTrainingJobCommandInput;
    constructor(input: StopTrainingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTrainingJobCommandInput, StopTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
