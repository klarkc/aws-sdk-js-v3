import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteGroupPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGroupPolicyCommandInput extends DeleteGroupPolicyRequest {
}
export interface DeleteGroupPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             group.</p>
 *         <p>A group can also have managed policies attached to it. To detach a managed policy from
 *             a group, use <a>DetachGroupPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGroupPolicyCommand extends $Command<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteGroupPolicyCommandInput;
    constructor(input: DeleteGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
