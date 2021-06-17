import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteFirewallRuleRequest, DeleteFirewallRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFirewallRuleCommandInput extends DeleteFirewallRuleRequest {
}
export interface DeleteFirewallRuleCommandOutput extends DeleteFirewallRuleResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified firewall rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteFirewallRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFirewallRuleCommand extends $Command<DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteFirewallRuleCommandInput;
    constructor(input: DeleteFirewallRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput>;
    private serialize;
    private deserialize;
}
