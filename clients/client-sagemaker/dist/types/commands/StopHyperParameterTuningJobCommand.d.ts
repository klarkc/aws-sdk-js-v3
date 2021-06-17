import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopHyperParameterTuningJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopHyperParameterTuningJobCommandInput extends StopHyperParameterTuningJobRequest {
}
export interface StopHyperParameterTuningJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a running hyperparameter tuning job and all running training jobs that the
 *             tuning job launched.</p>
 *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
 *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
 *             tuning job moves to the <code>Stopped</code> state, it releases all
 *             reserved
 *             resources for the tuning job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link StopHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopHyperParameterTuningJobCommand extends $Command<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopHyperParameterTuningJobCommandInput;
    constructor(input: StopHyperParameterTuningJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
