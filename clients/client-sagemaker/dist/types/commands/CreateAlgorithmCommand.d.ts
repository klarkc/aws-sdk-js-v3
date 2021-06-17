import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAlgorithmInput, CreateAlgorithmOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAlgorithmCommandInput extends CreateAlgorithmInput {
}
export interface CreateAlgorithmCommandOutput extends CreateAlgorithmOutput, __MetadataBearer {
}
/**
 * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS
 *             Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlgorithmCommandInput} for command's `input` shape.
 * @see {@link CreateAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAlgorithmCommand extends $Command<CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAlgorithmCommandInput;
    constructor(input: CreateAlgorithmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
