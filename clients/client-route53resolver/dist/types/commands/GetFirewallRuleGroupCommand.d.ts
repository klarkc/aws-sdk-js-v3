import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetFirewallRuleGroupRequest, GetFirewallRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFirewallRuleGroupCommandInput extends GetFirewallRuleGroupRequest {
}
export interface GetFirewallRuleGroupCommandOutput extends GetFirewallRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the specified firewall rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFirewallRuleGroupCommand extends $Command<GetFirewallRuleGroupCommandInput, GetFirewallRuleGroupCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetFirewallRuleGroupCommandInput;
    constructor(input: GetFirewallRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFirewallRuleGroupCommandInput, GetFirewallRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
