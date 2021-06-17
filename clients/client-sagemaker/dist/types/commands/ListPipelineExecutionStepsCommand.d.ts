import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListPipelineExecutionStepsRequest, ListPipelineExecutionStepsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPipelineExecutionStepsCommandInput extends ListPipelineExecutionStepsRequest {
}
export interface ListPipelineExecutionStepsCommandOutput extends ListPipelineExecutionStepsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineExecutionStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineExecutionStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListPipelineExecutionStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPipelineExecutionStepsCommand extends $Command<ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListPipelineExecutionStepsCommandInput;
    constructor(input: ListPipelineExecutionStepsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput>;
    private serialize;
    private deserialize;
}
