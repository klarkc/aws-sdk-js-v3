import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedGroupPoliciesRequest, ListAttachedGroupPoliciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAttachedGroupPoliciesCommandInput extends ListAttachedGroupPoliciesRequest {
}
export interface ListAttachedGroupPoliciesCommandOutput extends ListAttachedGroupPoliciesResponse, __MetadataBearer {
}
/**
 * <p>Lists all managed policies that are attached to the specified IAM group.</p>
 *         <p>An IAM group can also have inline policies embedded with it. To list the inline
 *             policies for a group, use <a>ListGroupPolicies</a>. For information about
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
 * import { IAMClient, ListAttachedGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAttachedGroupPoliciesCommand extends $Command<ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAttachedGroupPoliciesCommandInput;
    constructor(input: ListAttachedGroupPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
