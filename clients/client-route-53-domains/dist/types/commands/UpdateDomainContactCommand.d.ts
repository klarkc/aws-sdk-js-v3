import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainContactCommandInput extends UpdateDomainContactRequest {
}
export interface UpdateDomainContactCommandOutput extends UpdateDomainContactResponse, __MetadataBearer {
}
/**
 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
 * 			registrant, administrator, or technical.</p>
 * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainContactCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainContactCommand extends $Command<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainContactCommandInput;
    constructor(input: UpdateDomainContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput>;
    private serialize;
    private deserialize;
}
