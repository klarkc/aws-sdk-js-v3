import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeWorkforceRequest } from "../models/models_1";
import { DescribeWorkforceResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorkforceCommandInput extends DescribeWorkforceRequest {
}
export interface DescribeWorkforceCommandOutput extends DescribeWorkforceResponse, __MetadataBearer {
}
/**
 * <p>Lists private workforce information, including workforce name, Amazon Resource Name
 *             (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address
 *             ranges are the IP addresses that workers can use to access tasks. </p>
 *         <important>
 *             <p>This operation applies only to private workforces.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkforceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorkforceCommand extends $Command<DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeWorkforceCommandInput;
    constructor(input: DescribeWorkforceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput>;
    private serialize;
    private deserialize;
}
