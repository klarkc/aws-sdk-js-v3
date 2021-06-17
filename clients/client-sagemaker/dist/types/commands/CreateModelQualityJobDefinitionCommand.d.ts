import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelQualityJobDefinitionRequest, CreateModelQualityJobDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelQualityJobDefinitionCommandInput extends CreateModelQualityJobDefinitionRequest {
}
export interface CreateModelQualityJobDefinitionCommandOutput extends CreateModelQualityJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a definition for a job that monitors model quality and drift. For information
 *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelQualityJobDefinitionCommand extends $Command<CreateModelQualityJobDefinitionCommandInput, CreateModelQualityJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelQualityJobDefinitionCommandInput;
    constructor(input: CreateModelQualityJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelQualityJobDefinitionCommandInput, CreateModelQualityJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
