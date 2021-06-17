import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServiceLinkedRoleCommandInput extends DeleteServiceLinkedRoleRequest {
}
export interface DeleteServiceLinkedRoleCommandOutput extends DeleteServiceLinkedRoleResponse, __MetadataBearer {
}
/**
 * <p>Submits a service-linked role deletion request and returns a
 *                 <code>DeletionTaskId</code>, which you can use to check the status of the deletion.
 *             Before you call this operation, confirm that the role has no active sessions and that
 *             any resources used by the role in the linked service are deleted. If you call this
 *             operation more than once for the same service-linked role and an earlier deletion task
 *             is not complete, then the <code>DeletionTaskId</code> of the earlier request is
 *             returned.</p>
 *         <p>If you submit a deletion request for a service-linked role whose linked service is
 *             still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the
 *             failure, usually including the resources that must be deleted. To delete the
 *             service-linked role, you must first remove those resources from the linked service and
 *             then submit the deletion request again. Resources are specific to the service that is
 *             linked to the role. For more information about removing resources from a service, see
 *             the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your
 *             service.</p>
 *         <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: AWS service-linked role</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServiceLinkedRoleCommand extends $Command<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteServiceLinkedRoleCommandInput;
    constructor(input: DeleteServiceLinkedRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput>;
    private serialize;
    private deserialize;
}
