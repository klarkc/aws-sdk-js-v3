import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CheckCapacityRequest, CheckCapacityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckCapacityCommandInput extends CheckCapacityRequest {
}
export interface CheckCapacityCommandOutput extends CheckCapacityResponse, __MetadataBearer {
}
/**
 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>AWS WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. AWS WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CheckCapacityCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CheckCapacityCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CheckCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckCapacityCommandInput} for command's `input` shape.
 * @see {@link CheckCapacityCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckCapacityCommand extends $Command<CheckCapacityCommandInput, CheckCapacityCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: CheckCapacityCommandInput;
    constructor(input: CheckCapacityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckCapacityCommandInput, CheckCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
