import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachGroupPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachGroupPolicyCommandInput extends DetachGroupPolicyRequest {
}
export interface DetachGroupPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified managed policy from the specified IAM group.</p>
 *         <p>A group can also have inline policies embedded with it. To delete an inline policy,
 *             use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachGroupPolicyCommand extends $Command<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DetachGroupPolicyCommandInput;
    constructor(input: DetachGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
