import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFirewallPolicyCommandInput extends CreateFirewallPolicyRequest {
}
export interface CreateFirewallPolicyCommandOutput extends CreateFirewallPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFirewallPolicyCommand extends $Command<CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: CreateFirewallPolicyCommandInput;
    constructor(input: CreateFirewallPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
