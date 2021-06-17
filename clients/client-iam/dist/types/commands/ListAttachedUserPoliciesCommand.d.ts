import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedUserPoliciesRequest, ListAttachedUserPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAttachedUserPoliciesCommandInput extends ListAttachedUserPoliciesRequest {
}
export interface ListAttachedUserPoliciesCommandOutput extends ListAttachedUserPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists all managed policies that are attached to the specified IAM user.</p>
 *         <p>An IAM user can also have inline policies embedded with it. To list the inline
 *             policies for a user, use <a>ListUserPolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedUserPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedUserPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttachedUserPoliciesCommand extends $Command<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAttachedUserPoliciesCommandInput;
    constructor(input: ListAttachedUserPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
