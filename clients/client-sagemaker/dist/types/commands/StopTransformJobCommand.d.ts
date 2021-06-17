import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopTransformJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopTransformJobCommandInput extends StopTransformJobRequest {
}
export interface StopTransformJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops a transform job.</p>
 *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
 *             changes to <code>Stopping</code>. After Amazon SageMaker
 *             stops
 *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
 *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTransformJobCommandInput} for command's `input` shape.
 * @see {@link StopTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopTransformJobCommand extends $Command<StopTransformJobCommandInput, StopTransformJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopTransformJobCommandInput;
    constructor(input: StopTransformJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTransformJobCommandInput, StopTransformJobCommandOutput>;
    private serialize;
    private deserialize;
}
