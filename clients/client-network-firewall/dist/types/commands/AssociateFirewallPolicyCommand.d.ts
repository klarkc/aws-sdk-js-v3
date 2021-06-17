import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { AssociateFirewallPolicyRequest, AssociateFirewallPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateFirewallPolicyCommandInput extends AssociateFirewallPolicyRequest {
}
export interface AssociateFirewallPolicyCommandOutput extends AssociateFirewallPolicyResponse, __MetadataBearer {
}
/**
 * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p>
 *          <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a
 *          collection of inspection rule groups and other settings. Each firewall requires one
 *          firewall policy association, and you can use the same firewall policy for multiple
 *          firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new AssociateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateFirewallPolicyCommand extends $Command<AssociateFirewallPolicyCommandInput, AssociateFirewallPolicyCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: AssociateFirewallPolicyCommandInput;
    constructor(input: AssociateFirewallPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateFirewallPolicyCommandInput, AssociateFirewallPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
