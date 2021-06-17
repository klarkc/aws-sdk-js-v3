import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {
}
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResult, __MetadataBearer {
}
/**
 * <p>Releases the specified address range that you provisioned for use with your AWS resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
 *          address range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeprovisionByoipCidrCommand extends $Command<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeprovisionByoipCidrCommandInput;
    constructor(input: DeprovisionByoipCidrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
