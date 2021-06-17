import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachUserPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachUserPolicyCommandInput extends AttachUserPolicyRequest {
}
export interface AttachUserPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Attaches the specified managed policy to the specified user.</p>
 *         <p>You use this operation to attach a <i>managed</i> policy to a user. To
 *             embed an inline policy in a user, use <a>PutUserPolicy</a>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachUserPolicyCommand extends $Command<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: AttachUserPolicyCommandInput;
    constructor(input: AttachUserPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
