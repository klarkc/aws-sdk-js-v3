import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListDelegatedServicesForAccountRequest, ListDelegatedServicesForAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDelegatedServicesForAccountCommandInput extends ListDelegatedServicesForAccountRequest {
}
export interface ListDelegatedServicesForAccountCommandOutput extends ListDelegatedServicesForAccountResponse, __MetadataBearer {
}
/**
 * <p>List the AWS services for which the specified account is a delegated
 *             administrator.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedServicesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListDelegatedServicesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedServicesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedServicesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedServicesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDelegatedServicesForAccountCommand extends $Command<ListDelegatedServicesForAccountCommandInput, ListDelegatedServicesForAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListDelegatedServicesForAccountCommandInput;
    constructor(input: ListDelegatedServicesForAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDelegatedServicesForAccountCommandInput, ListDelegatedServicesForAccountCommandOutput>;
    private serialize;
    private deserialize;
}
