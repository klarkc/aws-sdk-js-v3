import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
}
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult, __MetadataBearer {
}
/**
 * <p>Describes the associations between virtual interface groups and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand extends $Command<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput;
    constructor(input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
