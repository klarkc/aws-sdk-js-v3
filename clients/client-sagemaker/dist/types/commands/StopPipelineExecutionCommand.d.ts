import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopPipelineExecutionRequest, StopPipelineExecutionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopPipelineExecutionCommandInput extends StopPipelineExecutionRequest {
}
export interface StopPipelineExecutionCommandOutput extends StopPipelineExecutionResponse, __MetadataBearer {
}
/**
 * <p>Stops a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopPipelineExecutionCommand extends $Command<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopPipelineExecutionCommandInput;
    constructor(input: StopPipelineExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
