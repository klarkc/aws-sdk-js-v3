import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListHandshakesForOrganizationRequest, ListHandshakesForOrganizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHandshakesForOrganizationCommandInput extends ListHandshakesForOrganizationRequest {
}
export interface ListHandshakesForOrganizationCommandOutput extends ListHandshakesForOrganizationResponse, __MetadataBearer {
}
/**
 * <p>Lists the handshakes that are associated with the organization that the requesting
 *             user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list
 *             of handshake structures. Each structure contains details and status about a
 *             handshake.</p>
 *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> appear in the results of this API for only 30 days after
 *             changing to that state. After that, they're deleted and no longer accessible.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHandshakesForOrganizationCommand extends $Command<ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListHandshakesForOrganizationCommandInput;
    constructor(input: ListHandshakesForOrganizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
