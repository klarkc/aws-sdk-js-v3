import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointsRequest, DescribeVpcEndpointsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpcEndpointsCommandInput extends DescribeVpcEndpointsRequest {
}
export interface DescribeVpcEndpointsCommandOutput extends DescribeVpcEndpointsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your VPC endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpcEndpointsCommand extends $Command<DescribeVpcEndpointsCommandInput, DescribeVpcEndpointsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointsCommandInput;
    constructor(input: DescribeVpcEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointsCommandInput, DescribeVpcEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
