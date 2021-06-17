import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateTrainingJobRequest, UpdateTrainingJobResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrainingJobCommandInput extends UpdateTrainingJobRequest {
}
export interface UpdateTrainingJobCommandOutput extends UpdateTrainingJobResponse, __MetadataBearer {
}
/**
 * <p>Update a model training job to request a new Debugger profiling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link UpdateTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrainingJobCommand extends $Command<UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateTrainingJobCommandInput;
    constructor(input: UpdateTrainingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
