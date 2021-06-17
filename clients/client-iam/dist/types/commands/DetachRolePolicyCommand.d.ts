import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachRolePolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachRolePolicyCommandInput extends DetachRolePolicyRequest {
}
export interface DetachRolePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified managed policy from the specified role.</p>
 *         <p>A role can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DetachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachRolePolicyCommand extends $Command<DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachRolePolicyCommandInput;
    constructor(input: DetachRolePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
