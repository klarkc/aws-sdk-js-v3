import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListDelegatedAdministratorsRequest, ListDelegatedAdministratorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDelegatedAdministratorsCommandInput extends ListDelegatedAdministratorsRequest {
}
export interface ListDelegatedAdministratorsCommandOutput extends ListDelegatedAdministratorsResponse, __MetadataBearer {
}
/**
 * <p>Lists the AWS accounts that are designated as delegated administrators in this
 *             organization.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedAdministratorsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListDelegatedAdministratorsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedAdministratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedAdministratorsCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedAdministratorsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDelegatedAdministratorsCommand extends $Command<ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListDelegatedAdministratorsCommandInput;
    constructor(input: ListDelegatedAdministratorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput>;
    private serialize;
    private deserialize;
}
