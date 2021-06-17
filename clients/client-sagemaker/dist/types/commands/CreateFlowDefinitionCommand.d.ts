import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateFlowDefinitionRequest, CreateFlowDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFlowDefinitionCommandInput extends CreateFlowDefinitionRequest {
}
export interface CreateFlowDefinitionCommandOutput extends CreateFlowDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFlowDefinitionCommand extends $Command<CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateFlowDefinitionCommandInput;
    constructor(input: CreateFlowDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
