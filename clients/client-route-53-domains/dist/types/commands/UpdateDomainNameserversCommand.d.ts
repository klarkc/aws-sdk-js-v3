import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainNameserversRequest, UpdateDomainNameserversResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainNameserversCommandInput extends UpdateDomainNameserversRequest {
}
export interface UpdateDomainNameserversCommandOutput extends UpdateDomainNameserversResponse, __MetadataBearer {
}
/**
 * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers.
 * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
 * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainNameserversCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainNameserversCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainNameserversCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainNameserversCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameserversCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainNameserversCommand extends $Command<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainNameserversCommandInput;
    constructor(input: UpdateDomainNameserversCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput>;
    private serialize;
    private deserialize;
}
