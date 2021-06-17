import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfacePermissionsRequest, DescribeNetworkInterfacePermissionsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkInterfacePermissionsCommandInput extends DescribeNetworkInterfacePermissionsRequest {
}
export interface DescribeNetworkInterfacePermissionsCommandOutput extends DescribeNetworkInterfacePermissionsResult, __MetadataBearer {
}
/**
 * <p>Describes the permissions for your network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfacePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfacePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkInterfacePermissionsCommand extends $Command<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfacePermissionsCommandInput;
    constructor(input: DescribeNetworkInterfacePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
