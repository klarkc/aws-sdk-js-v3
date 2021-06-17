import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignPrivateIpAddressesRequest } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnassignPrivateIpAddressesCommandInput extends UnassignPrivateIpAddressesRequest {
}
export interface UnassignPrivateIpAddressesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Unassigns one or more secondary private IP addresses from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnassignPrivateIpAddressesCommand extends $Command<UnassignPrivateIpAddressesCommandInput, UnassignPrivateIpAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnassignPrivateIpAddressesCommandInput;
    constructor(input: UnassignPrivateIpAddressesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignPrivateIpAddressesCommandInput, UnassignPrivateIpAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
