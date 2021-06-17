import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointServiceConfigurationRequest, CreateVpcEndpointServiceConfigurationResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpcEndpointServiceConfigurationCommandInput extends CreateVpcEndpointServiceConfigurationRequest {
}
export interface CreateVpcEndpointServiceConfigurationCommandOutput extends CreateVpcEndpointServiceConfigurationResult, __MetadataBearer {
}
/**
 * <p>Creates a VPC endpoint service configuration to which service consumers (AWS accounts,
 *             IAM users, and IAM roles) can connect.</p>
 *         <p>To create an endpoint service configuration, you must first create one of the
 *             following for your service:</p>
 *         <ul>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html">Network Load Balancer</a>. Service consumers connect to your service using an
 *                     interface endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html">Gateway Load Balancer</a>. Service consumers connect to your service using a
 *                     Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC Endpoint Services</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>. </p>
 *         <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpcEndpointServiceConfigurationCommand extends $Command<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointServiceConfigurationCommandInput;
    constructor(input: CreateVpcEndpointServiceConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
