import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnassignIpv6AddressesCommandInput extends UnassignIpv6AddressesRequest {
}
export interface UnassignIpv6AddressesCommandOutput extends UnassignIpv6AddressesResult, __MetadataBearer {
}
/**
 * <p>Unassigns one or more IPv6 addresses from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnassignIpv6AddressesCommand extends $Command<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnassignIpv6AddressesCommandInput;
    constructor(input: UnassignIpv6AddressesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput>;
    private serialize;
    private deserialize;
}
