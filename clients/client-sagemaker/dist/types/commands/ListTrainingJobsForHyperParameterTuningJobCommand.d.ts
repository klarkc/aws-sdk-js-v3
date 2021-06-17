import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrainingJobsForHyperParameterTuningJobRequest, ListTrainingJobsForHyperParameterTuningJobResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrainingJobsForHyperParameterTuningJobCommandInput extends ListTrainingJobsForHyperParameterTuningJobRequest {
}
export interface ListTrainingJobsForHyperParameterTuningJobCommandOutput extends ListTrainingJobsForHyperParameterTuningJobResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
 *             jobs that a hyperparameter tuning job launched.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsForHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrainingJobsForHyperParameterTuningJobCommand extends $Command<ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrainingJobsForHyperParameterTuningJobCommandInput;
    constructor(input: ListTrainingJobsForHyperParameterTuningJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
