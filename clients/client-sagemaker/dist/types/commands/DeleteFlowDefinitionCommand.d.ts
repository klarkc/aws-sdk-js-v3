import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFlowDefinitionCommandInput extends DeleteFlowDefinitionRequest {
}
export interface DeleteFlowDefinitionCommandOutput extends DeleteFlowDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFlowDefinitionCommand extends $Command<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteFlowDefinitionCommandInput;
    constructor(input: DeleteFlowDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
