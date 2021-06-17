import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateSubnetsCommandInput extends DisassociateSubnetsRequest {
}
export interface DisassociateSubnetsCommandOutput extends DisassociateSubnetsResponse, __MetadataBearer {
}
/**
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DisassociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DisassociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateSubnetsCommand extends $Command<DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DisassociateSubnetsCommandInput;
    constructor(input: DisassociateSubnetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
