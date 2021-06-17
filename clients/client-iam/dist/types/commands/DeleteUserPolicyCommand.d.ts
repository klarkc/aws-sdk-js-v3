import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserPolicyCommandInput extends DeleteUserPolicyRequest {
}
export interface DeleteUserPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             user.</p>
 *         <p>A user can also have managed policies attached to it. To detach a managed policy from
 *             a user, use <a>DetachUserPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserPolicyCommand extends $Command<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteUserPolicyCommandInput;
    constructor(input: DeleteUserPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
