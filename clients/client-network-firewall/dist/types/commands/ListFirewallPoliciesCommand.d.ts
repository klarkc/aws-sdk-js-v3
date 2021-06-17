import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { ListFirewallPoliciesRequest, ListFirewallPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFirewallPoliciesCommandInput extends ListFirewallPoliciesRequest {
}
export interface ListFirewallPoliciesCommandOutput extends ListFirewallPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
 *          your setting for max results and the number of firewall policies, a single call might not
 *          return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallPoliciesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallPoliciesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallPoliciesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFirewallPoliciesCommand extends $Command<ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: ListFirewallPoliciesCommandInput;
    constructor(input: ListFirewallPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
