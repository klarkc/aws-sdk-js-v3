import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopLabelingJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopLabelingJobCommandInput extends StopLabelingJobRequest {
}
export interface StopLabelingJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
 *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopLabelingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLabelingJobCommandInput} for command's `input` shape.
 * @see {@link StopLabelingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopLabelingJobCommand extends $Command<StopLabelingJobCommandInput, StopLabelingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopLabelingJobCommandInput;
    constructor(input: StopLabelingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopLabelingJobCommandInput, StopLabelingJobCommandOutput>;
    private serialize;
    private deserialize;
}
