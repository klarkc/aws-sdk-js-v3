import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeRuleGroupRequest, DescribeRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRuleGroupCommandInput extends DescribeRuleGroupRequest {
}
export interface DescribeRuleGroupCommandOutput extends DescribeRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns the data objects for the specified rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRuleGroupCommand extends $Command<DescribeRuleGroupCommandInput, DescribeRuleGroupCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DescribeRuleGroupCommandInput;
    constructor(input: DescribeRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuleGroupCommandInput, DescribeRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
