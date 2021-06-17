import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRolePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRolePolicyCommandInput extends DeleteRolePolicyRequest {
}
export interface DeleteRolePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             role.</p>
 *         <p>A role can also have managed policies attached to it. To detach a managed policy from
 *             a role, use <a>DetachRolePolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRolePolicyCommand extends $Command<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteRolePolicyCommandInput;
    constructor(input: DeleteRolePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
