import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachUserPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachUserPolicyCommandInput extends DetachUserPolicyRequest {
}
export interface DetachUserPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified managed policy from the specified user.</p>
 *         <p>A user can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachUserPolicyCommand extends $Command<DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachUserPolicyCommandInput;
    constructor(input: DetachUserPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
