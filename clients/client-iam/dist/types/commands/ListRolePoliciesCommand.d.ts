import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolePoliciesRequest, ListRolePoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRolePoliciesCommandInput extends ListRolePoliciesRequest {
}
export interface ListRolePoliciesCommandOutput extends ListRolePoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             role.</p>
 *         <p>An IAM role can also have managed policies attached to it. To list the managed
 *             policies that are attached to a role, use <a>ListAttachedRolePolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified role, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRolePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRolePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListRolePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRolePoliciesCommand extends $Command<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRolePoliciesCommandInput;
    constructor(input: ListRolePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
