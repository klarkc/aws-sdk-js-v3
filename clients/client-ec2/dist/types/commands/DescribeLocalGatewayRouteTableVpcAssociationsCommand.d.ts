import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayRouteTableVpcAssociationsRequest, DescribeLocalGatewayRouteTableVpcAssociationsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandInput extends DescribeLocalGatewayRouteTableVpcAssociationsRequest {
}
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput extends DescribeLocalGatewayRouteTableVpcAssociationsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command<DescribeLocalGatewayRouteTableVpcAssociationsCommandInput, DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput;
    constructor(input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayRouteTableVpcAssociationsCommandInput, DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
