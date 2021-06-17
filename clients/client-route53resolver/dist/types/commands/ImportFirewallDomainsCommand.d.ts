import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ImportFirewallDomainsRequest, ImportFirewallDomainsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportFirewallDomainsCommandInput extends ImportFirewallDomainsRequest {
}
export interface ImportFirewallDomainsCommandOutput extends ImportFirewallDomainsResponse, __MetadataBearer {
}
/**
 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
 *          <p>Each domain specification in your domain list must satisfy the following
 * 	requirements: </p>
 *          <ul>
 *             <li>
 *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
 *       	     </li>
 *             <li>
 *       	        <p>With the exception of the optional starting asterisk, it must only contain
 *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
 *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
 *       	     </li>
 *             <li>
 *       	        <p>It must be from 1-255 characters in length. </p>
 *       	     </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ImportFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ImportFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ImportFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ImportFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportFirewallDomainsCommand extends $Command<ImportFirewallDomainsCommandInput, ImportFirewallDomainsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ImportFirewallDomainsCommandInput;
    constructor(input: ImportFirewallDomainsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportFirewallDomainsCommandInput, ImportFirewallDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
