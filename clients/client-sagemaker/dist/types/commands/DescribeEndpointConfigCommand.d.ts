import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeEndpointConfigInput, DescribeEndpointConfigOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEndpointConfigCommandInput extends DescribeEndpointConfigInput {
}
export interface DescribeEndpointConfigCommandOutput extends DescribeEndpointConfigOutput, __MetadataBearer {
}
/**
 * <p>Returns the description of an endpoint configuration created using the
 *                 <code>CreateEndpointConfig</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEndpointConfigCommand extends $Command<DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeEndpointConfigCommandInput;
    constructor(input: DescribeEndpointConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput>;
    private serialize;
    private deserialize;
}
