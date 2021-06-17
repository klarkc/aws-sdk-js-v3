import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointServiceConfigurationsRequest, DescribeVpcEndpointServiceConfigurationsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpcEndpointServiceConfigurationsCommandInput extends DescribeVpcEndpointServiceConfigurationsRequest {
}
export interface DescribeVpcEndpointServiceConfigurationsCommandOutput extends DescribeVpcEndpointServiceConfigurationsResult, __MetadataBearer {
}
/**
 * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpcEndpointServiceConfigurationsCommand extends $Command<DescribeVpcEndpointServiceConfigurationsCommandInput, DescribeVpcEndpointServiceConfigurationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointServiceConfigurationsCommandInput;
    constructor(input: DescribeVpcEndpointServiceConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointServiceConfigurationsCommandInput, DescribeVpcEndpointServiceConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
