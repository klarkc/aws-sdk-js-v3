import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutRolePermissionsBoundaryRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRolePermissionsBoundaryCommandInput extends PutRolePermissionsBoundaryRequest {
}
export interface PutRolePermissionsBoundaryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a role. Use the boundary to control the maximum permissions that the role can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the role.</p>
 *         <p>You cannot set the boundary for a service-linked role. </p>
 *         <important>
 *             <p>Policies used as permissions boundaries do not provide permissions. You must also
 *                 attach a permissions policy to the role. To learn how the effective permissions for
 *                 a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRolePermissionsBoundaryCommand extends $Command<PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutRolePermissionsBoundaryCommandInput;
    constructor(input: PutRolePermissionsBoundaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
