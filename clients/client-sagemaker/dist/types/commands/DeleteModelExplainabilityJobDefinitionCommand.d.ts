import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelExplainabilityJobDefinitionRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelExplainabilityJobDefinitionCommandInput extends DeleteModelExplainabilityJobDefinitionRequest {
}
export interface DeleteModelExplainabilityJobDefinitionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an Amazon SageMaker model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelExplainabilityJobDefinitionCommand extends $Command<DeleteModelExplainabilityJobDefinitionCommandInput, DeleteModelExplainabilityJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelExplainabilityJobDefinitionCommandInput;
    constructor(input: DeleteModelExplainabilityJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelExplainabilityJobDefinitionCommandInput, DeleteModelExplainabilityJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
