import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateFirewallRuleRequest, CreateFirewallRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFirewallRuleCommandInput extends CreateFirewallRuleRequest {
}
export interface CreateFirewallRuleCommandOutput extends CreateFirewallRuleResponse, __MetadataBearer {
}
/**
 * <p>Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFirewallRuleCommand extends $Command<CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: CreateFirewallRuleCommandInput;
    constructor(input: CreateFirewallRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput>;
    private serialize;
    private deserialize;
}
