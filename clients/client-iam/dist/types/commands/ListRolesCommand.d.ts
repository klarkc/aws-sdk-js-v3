import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolesRequest, ListRolesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRolesCommandInput extends ListRolesRequest {
}
export interface ListRolesCommandOutput extends ListRolesResponse, __MetadataBearer {
}
/**
 * <p>Lists the IAM roles that have the specified path prefix. If there are none, the
 *             operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with
 *                 roles</a>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRolesCommandInput} for command's `input` shape.
 * @see {@link ListRolesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRolesCommand extends $Command<ListRolesCommandInput, ListRolesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRolesCommandInput;
    constructor(input: ListRolesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRolesCommandInput, ListRolesCommandOutput>;
    private serialize;
    private deserialize;
}
