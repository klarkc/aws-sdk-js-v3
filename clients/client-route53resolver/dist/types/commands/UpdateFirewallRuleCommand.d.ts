import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallRuleRequest, UpdateFirewallRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallRuleCommandInput extends UpdateFirewallRuleRequest {
}
export interface UpdateFirewallRuleCommandOutput extends UpdateFirewallRuleResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified firewall rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallRuleCommand extends $Command<UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateFirewallRuleCommandInput;
    constructor(input: UpdateFirewallRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput>;
    private serialize;
    private deserialize;
}
