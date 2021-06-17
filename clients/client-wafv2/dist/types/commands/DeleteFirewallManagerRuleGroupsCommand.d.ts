import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteFirewallManagerRuleGroupsRequest, DeleteFirewallManagerRuleGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFirewallManagerRuleGroupsCommandInput extends DeleteFirewallManagerRuleGroupsRequest {
}
export interface DeleteFirewallManagerRuleGroupsCommandOutput extends DeleteFirewallManagerRuleGroupsResponse, __MetadataBearer {
}
/**
 * <p>Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeleteFirewallManagerRuleGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallManagerRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallManagerRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFirewallManagerRuleGroupsCommand extends $Command<DeleteFirewallManagerRuleGroupsCommandInput, DeleteFirewallManagerRuleGroupsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteFirewallManagerRuleGroupsCommandInput;
    constructor(input: DeleteFirewallManagerRuleGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFirewallManagerRuleGroupsCommandInput, DeleteFirewallManagerRuleGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
