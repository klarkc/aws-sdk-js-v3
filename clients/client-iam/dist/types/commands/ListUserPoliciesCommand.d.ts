import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUserPoliciesRequest, ListUserPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserPoliciesCommandInput extends ListUserPoliciesRequest {
}
export interface ListUserPoliciesCommandOutput extends ListUserPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists the names of the inline policies embedded in the specified IAM user.</p>
 *         <p>An IAM user can also have managed policies attached to it. To list the managed
 *             policies that are attached to a user, use <a>ListAttachedUserPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified user, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListUserPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListUserPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserPoliciesCommand extends $Command<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListUserPoliciesCommandInput;
    constructor(input: ListUserPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
