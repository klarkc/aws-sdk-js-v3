import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateFirewallDeleteProtectionRequest, UpdateFirewallDeleteProtectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallDeleteProtectionCommandInput extends UpdateFirewallDeleteProtectionRequest {
}
export interface UpdateFirewallDeleteProtectionCommandOutput extends UpdateFirewallDeleteProtectionResponse, __MetadataBearer {
}
/**
 * <p>Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible
 *          to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
 *          against deletion. This setting helps protect against accidentally deleting a firewall
 *          that's in use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDeleteProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDeleteProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDeleteProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallDeleteProtectionCommand extends $Command<UpdateFirewallDeleteProtectionCommandInput, UpdateFirewallDeleteProtectionCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: UpdateFirewallDeleteProtectionCommandInput;
    constructor(input: UpdateFirewallDeleteProtectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallDeleteProtectionCommandInput, UpdateFirewallDeleteProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
