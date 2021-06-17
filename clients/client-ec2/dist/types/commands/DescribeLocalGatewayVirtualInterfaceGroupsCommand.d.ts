import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayVirtualInterfaceGroupsRequest, DescribeLocalGatewayVirtualInterfaceGroupsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandInput extends DescribeLocalGatewayVirtualInterfaceGroupsRequest {
}
export interface DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput extends DescribeLocalGatewayVirtualInterfaceGroupsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified local gateway virtual interface groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command<DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput;
    constructor(input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
