import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { ListFirewallsRequest, ListFirewallsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFirewallsCommandInput extends ListFirewallsRequest {
}
export interface ListFirewallsCommandOutput extends ListFirewallsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC
 *          identifiers in your request, this returns only the firewalls for those VPCs.</p>
 *          <p>Depending on your setting for max results and the number of firewalls, a single call
 *          might not return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFirewallsCommand extends $Command<ListFirewallsCommandInput, ListFirewallsCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: ListFirewallsCommandInput;
    constructor(input: ListFirewallsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFirewallsCommandInput, ListFirewallsCommandOutput>;
    private serialize;
    private deserialize;
}
