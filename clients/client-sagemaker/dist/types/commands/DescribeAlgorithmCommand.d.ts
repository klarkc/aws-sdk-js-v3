import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAlgorithmInput, DescribeAlgorithmOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAlgorithmCommandInput extends DescribeAlgorithmInput {
}
export interface DescribeAlgorithmCommandOutput extends DescribeAlgorithmOutput, __MetadataBearer {
}
/**
 * <p>Returns a description of the specified algorithm that is in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAlgorithmCommand extends $Command<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeAlgorithmCommandInput;
    constructor(input: DescribeAlgorithmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
