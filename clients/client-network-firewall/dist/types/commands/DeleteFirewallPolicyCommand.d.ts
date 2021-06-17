import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DeleteFirewallPolicyRequest, DeleteFirewallPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFirewallPolicyCommandInput extends DeleteFirewallPolicyRequest {
}
export interface DeleteFirewallPolicyCommandOutput extends DeleteFirewallPolicyResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified <a>FirewallPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DeleteFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFirewallPolicyCommand extends $Command<DeleteFirewallPolicyCommandInput, DeleteFirewallPolicyCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DeleteFirewallPolicyCommandInput;
    constructor(input: DeleteFirewallPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFirewallPolicyCommandInput, DeleteFirewallPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
