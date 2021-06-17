import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelBiasJobDefinitionRequest, DescribeModelBiasJobDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelBiasJobDefinitionCommandInput extends DescribeModelBiasJobDefinitionRequest {
}
export interface DescribeModelBiasJobDefinitionCommandOutput extends DescribeModelBiasJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of a model bias job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelBiasJobDefinitionCommand extends $Command<DescribeModelBiasJobDefinitionCommandInput, DescribeModelBiasJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelBiasJobDefinitionCommandInput;
    constructor(input: DescribeModelBiasJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelBiasJobDefinitionCommandInput, DescribeModelBiasJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
