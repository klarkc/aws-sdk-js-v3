import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelExplainabilityJobDefinitionRequest, CreateModelExplainabilityJobDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelExplainabilityJobDefinitionCommandInput extends CreateModelExplainabilityJobDefinitionRequest {
}
export interface CreateModelExplainabilityJobDefinitionCommandOutput extends CreateModelExplainabilityJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates the definition for a model explainability job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelExplainabilityJobDefinitionCommand extends $Command<CreateModelExplainabilityJobDefinitionCommandInput, CreateModelExplainabilityJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelExplainabilityJobDefinitionCommandInput;
    constructor(input: CreateModelExplainabilityJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelExplainabilityJobDefinitionCommandInput, CreateModelExplainabilityJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
