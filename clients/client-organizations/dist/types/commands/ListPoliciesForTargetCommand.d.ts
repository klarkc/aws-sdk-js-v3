import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListPoliciesForTargetRequest, ListPoliciesForTargetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPoliciesForTargetCommandInput extends ListPoliciesForTargetRequest {
}
export interface ListPoliciesForTargetCommandOutput extends ListPoliciesForTargetResponse, __MetadataBearer {
}
/**
 * <p>Lists the policies that are directly attached to the specified target root,
 *             organizational unit (OU), or account. You must specify the policy type that you want
 *             included in the returned list.</p>
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
 * import { OrganizationsClient, ListPoliciesForTargetCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListPoliciesForTargetCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListPoliciesForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoliciesForTargetCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesForTargetCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPoliciesForTargetCommand extends $Command<ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListPoliciesForTargetCommandInput;
    constructor(input: ListPoliciesForTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput>;
    private serialize;
    private deserialize;
}
