import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListHandshakesForAccountRequest, ListHandshakesForAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHandshakesForAccountCommandInput extends ListHandshakesForAccountRequest {
}
export interface ListHandshakesForAccountCommandOutput extends ListHandshakesForAccountResponse, __MetadataBearer {
}
/**
 * <p>Lists the current handshakes that are associated with the account of the requesting
 *             user.</p>
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
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHandshakesForAccountCommand extends $Command<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListHandshakesForAccountCommandInput;
    constructor(input: ListHandshakesForAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput>;
    private serialize;
    private deserialize;
}
