import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { AssociateSubnetsRequest, AssociateSubnetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateSubnetsCommandInput extends AssociateSubnetsRequest {
}
export interface AssociateSubnetsCommandOutput extends AssociateSubnetsResponse, __MetadataBearer {
}
/**
 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 *          subnet for each of the Availability Zones that the VPC spans. </p>
 *          <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To
 *          enable the firewall's protections, you must also modify the VPC's route tables for each
 *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 *          zone through the firewall endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new AssociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateSubnetsCommand extends $Command<AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: AssociateSubnetsCommandInput;
    constructor(input: AssociateSubnetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
