import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelExplainabilityJobDefinitionRequest, DescribeModelExplainabilityJobDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelExplainabilityJobDefinitionCommandInput extends DescribeModelExplainabilityJobDefinitionRequest {
}
export interface DescribeModelExplainabilityJobDefinitionCommandOutput extends DescribeModelExplainabilityJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of a model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelExplainabilityJobDefinitionCommand extends $Command<DescribeModelExplainabilityJobDefinitionCommandInput, DescribeModelExplainabilityJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelExplainabilityJobDefinitionCommandInput;
    constructor(input: DescribeModelExplainabilityJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelExplainabilityJobDefinitionCommandInput, DescribeModelExplainabilityJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
