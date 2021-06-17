import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListChildrenRequest, ListChildrenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListChildrenCommandInput extends ListChildrenRequest {
}
export interface ListChildrenCommandOutput extends ListChildrenResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the organizational units (OUs) or accounts that are contained in the
 *             specified parent OU or root. This operation, along with <a>ListParents</a>
 *             enables you to traverse the tree structure that makes up this root.</p>
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
 * import { OrganizationsClient, ListChildrenCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListChildrenCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListChildrenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChildrenCommandInput} for command's `input` shape.
 * @see {@link ListChildrenCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListChildrenCommand extends $Command<ListChildrenCommandInput, ListChildrenCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListChildrenCommandInput;
    constructor(input: ListChildrenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListChildrenCommandInput, ListChildrenCommandOutput>;
    private serialize;
    private deserialize;
}
