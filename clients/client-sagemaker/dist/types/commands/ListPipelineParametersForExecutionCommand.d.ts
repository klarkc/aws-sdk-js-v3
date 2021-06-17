import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListPipelineParametersForExecutionRequest, ListPipelineParametersForExecutionResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPipelineParametersForExecutionCommandInput extends ListPipelineParametersForExecutionRequest {
}
export interface ListPipelineParametersForExecutionCommandOutput extends ListPipelineParametersForExecutionResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of parameters for a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineParametersForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineParametersForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineParametersForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineParametersForExecutionCommandInput} for command's `input` shape.
 * @see {@link ListPipelineParametersForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPipelineParametersForExecutionCommand extends $Command<ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListPipelineParametersForExecutionCommandInput;
    constructor(input: ListPipelineParametersForExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
