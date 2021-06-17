import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeFirewallPolicyRequest, DescribeFirewallPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFirewallPolicyCommandInput extends DescribeFirewallPolicyRequest {
}
export interface DescribeFirewallPolicyCommandOutput extends DescribeFirewallPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the data objects for the specified firewall policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFirewallPolicyCommand extends $Command<DescribeFirewallPolicyCommandInput, DescribeFirewallPolicyCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DescribeFirewallPolicyCommandInput;
    constructor(input: DescribeFirewallPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFirewallPolicyCommandInput, DescribeFirewallPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
