import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdvertiseByoipCidrCommandInput extends AdvertiseByoipCidrRequest {
}
export interface AdvertiseByoipCidrCommandOutput extends AdvertiseByoipCidrResult, __MetadataBearer {
}
/**
 * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your AWS resources through
 *          bring your own IP addresses (BYOIP).</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
 *          it from AWS. To minimize down time, you can configure your AWS resources to use an address from a
 *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
 *          location and start advertising it through AWS.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses starts routing to AWS
 *          because of BGP propagation delays.</p>
 *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AdvertiseByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdvertiseByoipCidrCommand extends $Command<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AdvertiseByoipCidrCommandInput;
    constructor(input: AdvertiseByoipCidrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
