import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallDomainsRequest, UpdateFirewallDomainsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallDomainsCommandInput extends UpdateFirewallDomainsRequest {
}
export interface UpdateFirewallDomainsCommandOutput extends UpdateFirewallDomainsResponse, __MetadataBearer {
}
/**
 * <p>Updates the firewall domain list from an array of domain specifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallDomainsCommand extends $Command<UpdateFirewallDomainsCommandInput, UpdateFirewallDomainsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateFirewallDomainsCommandInput;
    constructor(input: UpdateFirewallDomainsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallDomainsCommandInput, UpdateFirewallDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
