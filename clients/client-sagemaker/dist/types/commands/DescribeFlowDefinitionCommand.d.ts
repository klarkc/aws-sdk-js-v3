import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeFlowDefinitionRequest, DescribeFlowDefinitionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFlowDefinitionCommandInput extends DescribeFlowDefinitionRequest {
}
export interface DescribeFlowDefinitionCommandOutput extends DescribeFlowDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFlowDefinitionCommand extends $Command<DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeFlowDefinitionCommandInput;
    constructor(input: DescribeFlowDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
