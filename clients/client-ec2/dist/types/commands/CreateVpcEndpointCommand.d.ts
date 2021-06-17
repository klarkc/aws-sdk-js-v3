import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointRequest, CreateVpcEndpointResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpcEndpointCommandInput extends CreateVpcEndpointRequest {
}
export interface CreateVpcEndpointCommandOutput extends CreateVpcEndpointResult, __MetadataBearer {
}
/**
 * <p>Creates a VPC endpoint for a specified service. An endpoint enables you to create a
 *             private connection between your VPC and the service. The service may be provided by AWS,
 *             an AWS Marketplace Partner, or another AWS account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in
 *             the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>A <code>gateway</code> endpoint serves as a target for a route in your route table for
 *             traffic destined for the AWS service. You can specify an endpoint policy to attach to
 *             the endpoint, which will control access to the service from your VPC. You can also
 *             specify the VPC route tables that use the endpoint.</p>
 *         <p>An <code>interface</code> endpoint is a network interface in your subnet that
 *             serves as an endpoint for communicating with the specified service. You can specify the
 *             subnets in which to create an endpoint, and the security groups to associate with the
 *             endpoint network interface.</p>
 *         <p>A <code>GatewayLoadBalancer</code> endpoint is a network interface in your subnet that serves an endpoint for communicating with a Gateway Load Balancer that you've configured as a VPC endpoint service.</p>
 *         <p>Use <a>DescribeVpcEndpointServices</a> to get a list of supported
 *             services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpcEndpointCommand extends $Command<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointCommandInput;
    constructor(input: CreateVpcEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
