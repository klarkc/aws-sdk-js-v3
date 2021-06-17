import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelQualityJobDefinitionRequest, DescribeModelQualityJobDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelQualityJobDefinitionCommandInput extends DescribeModelQualityJobDefinitionRequest {
}
export interface DescribeModelQualityJobDefinitionCommandOutput extends DescribeModelQualityJobDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of a model quality job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelQualityJobDefinitionCommand extends $Command<DescribeModelQualityJobDefinitionCommandInput, DescribeModelQualityJobDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelQualityJobDefinitionCommandInput;
    constructor(input: DescribeModelQualityJobDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelQualityJobDefinitionCommandInput, DescribeModelQualityJobDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
