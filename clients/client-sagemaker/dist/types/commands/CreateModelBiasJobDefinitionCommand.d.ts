import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelBiasJobDefinitionRequest, CreateModelBiasJobDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelBiasJobDefinitionCommandInput extends CreateModelBiasJobDefinitionRequest {
}
export interface CreateModelBiasJobDefinitionCommandOutput extends CreateModelBiasJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates the definition for a model bias job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelBiasJobDefinitionCommand extends $Command<CreateModelBiasJobDefinitionCommandInput, CreateModelBiasJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelBiasJobDefinitionCommandInput;
    constructor(input: CreateModelBiasJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelBiasJobDefinitionCommandInput, CreateModelBiasJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
