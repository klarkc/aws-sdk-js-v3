import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnConnectionsRequest, DescribeClientVpnConnectionsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClientVpnConnectionsCommandInput extends DescribeClientVpnConnectionsRequest {
}
export interface DescribeClientVpnConnectionsCommandOutput extends DescribeClientVpnConnectionsResult, __MetadataBearer {
}
/**
 * <p>Describes active client connections and connections that have been terminated within the last 60
 * 			minutes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClientVpnConnectionsCommand extends $Command<DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnConnectionsCommandInput;
    constructor(input: DescribeClientVpnConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnConnectionsCommandInput, DescribeClientVpnConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
