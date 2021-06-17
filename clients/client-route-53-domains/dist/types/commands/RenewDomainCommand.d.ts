import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RenewDomainRequest, RenewDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RenewDomainCommandInput extends RenewDomainRequest {
}
export interface RenewDomainCommandOutput extends RenewDomainResponse, __MetadataBearer {
}
/**
 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p>
 * 		       <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the
 * 			expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RenewDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RenewDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RenewDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenewDomainCommandInput} for command's `input` shape.
 * @see {@link RenewDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RenewDomainCommand extends $Command<RenewDomainCommandInput, RenewDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: RenewDomainCommandInput;
    constructor(input: RenewDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenewDomainCommandInput, RenewDomainCommandOutput>;
    private serialize;
    private deserialize;
}
