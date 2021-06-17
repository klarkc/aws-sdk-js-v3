import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdatePipelineExecutionRequest, UpdatePipelineExecutionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePipelineExecutionCommandInput extends UpdatePipelineExecutionRequest {
}
export interface UpdatePipelineExecutionCommandOutput extends UpdatePipelineExecutionResponse, __MetadataBearer {
}
/**
 * <p>Updates a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdatePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePipelineExecutionCommand extends $Command<UpdatePipelineExecutionCommandInput, UpdatePipelineExecutionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdatePipelineExecutionCommandInput;
    constructor(input: UpdatePipelineExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineExecutionCommandInput, UpdatePipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
