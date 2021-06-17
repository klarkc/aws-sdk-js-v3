import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DeleteRuleGroupRequest, DeleteRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRuleGroupCommandInput extends DeleteRuleGroupRequest {
}
export interface DeleteRuleGroupCommandOutput extends DeleteRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified <a>RuleGroup</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DeleteRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRuleGroupCommand extends $Command<DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DeleteRuleGroupCommandInput;
    constructor(input: DeleteRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
