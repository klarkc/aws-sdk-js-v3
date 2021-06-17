import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupPoliciesRequest, ListGroupPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupPoliciesCommandInput extends ListGroupPoliciesRequest {
}
export interface ListGroupPoliciesCommandOutput extends ListGroupPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             group.</p>
 *         <p>An IAM group can also have managed policies attached to it. To list the managed
 *             policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified group, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupPoliciesCommand extends $Command<ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListGroupPoliciesCommandInput;
    constructor(input: ListGroupPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
