import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteFirewallDomainListRequest, DeleteFirewallDomainListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFirewallDomainListCommandInput extends DeleteFirewallDomainListRequest {
}
export interface DeleteFirewallDomainListCommandOutput extends DeleteFirewallDomainListResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified domain list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFirewallDomainListCommand extends $Command<DeleteFirewallDomainListCommandInput, DeleteFirewallDomainListCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteFirewallDomainListCommandInput;
    constructor(input: DeleteFirewallDomainListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFirewallDomainListCommandInput, DeleteFirewallDomainListCommandOutput>;
    private serialize;
    private deserialize;
}
