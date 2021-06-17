import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactPrivacyRequest, UpdateDomainContactPrivacyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainContactPrivacyCommandInput extends UpdateDomainContactPrivacyRequest {
}
export interface UpdateDomainContactPrivacyCommandOutput extends UpdateDomainContactPrivacyResponse, __MetadataBearer {
}
/**
 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled,
 * 			contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org
 * 			domains) or with contact information for our registrar associate, Gandi.</p>
 * 		       <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech).
 * 			If the request succeeds, Amazon Route 53 returns an operation ID that you can use with
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p>
 * 		       <important>
 *             <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain
 * 			via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision.
 * 			You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the
 * 			Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database.
 * 			For more information on our privacy practices, see
 * 			<a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactPrivacyCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactPrivacyCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainContactPrivacyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainContactPrivacyCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactPrivacyCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainContactPrivacyCommand extends $Command<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainContactPrivacyCommandInput;
    constructor(input: UpdateDomainContactPrivacyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput>;
    private serialize;
    private deserialize;
}
