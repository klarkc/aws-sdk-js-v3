import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnRoutesRequest, DescribeClientVpnRoutesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClientVpnRoutesCommandInput extends DescribeClientVpnRoutesRequest {
}
export interface DescribeClientVpnRoutesCommandOutput extends DescribeClientVpnRoutesResult, __MetadataBearer {
}
/**
 * <p>Describes the routes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnRoutesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClientVpnRoutesCommand extends $Command<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnRoutesCommandInput;
    constructor(input: DescribeClientVpnRoutesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnRoutesCommandInput, DescribeClientVpnRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
