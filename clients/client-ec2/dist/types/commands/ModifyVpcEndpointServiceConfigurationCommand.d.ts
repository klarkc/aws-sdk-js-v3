import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointServiceConfigurationRequest, ModifyVpcEndpointServiceConfigurationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpcEndpointServiceConfigurationCommandInput extends ModifyVpcEndpointServiceConfigurationRequest {
}
export interface ModifyVpcEndpointServiceConfigurationCommandOutput extends ModifyVpcEndpointServiceConfigurationResult, __MetadataBearer {
}
/**
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpcEndpointServiceConfigurationCommand extends $Command<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointServiceConfigurationCommandInput;
    constructor(input: ModifyVpcEndpointServiceConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
