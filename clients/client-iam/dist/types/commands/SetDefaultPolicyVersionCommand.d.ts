import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SetDefaultPolicyVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetDefaultPolicyVersionCommandInput extends SetDefaultPolicyVersionRequest {
}
export interface SetDefaultPolicyVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the specified version of the specified policy as the policy's default (operative)
 *             version.</p>
 *         <p>This operation affects all users, groups, and roles that the policy is attached to. To
 *             list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetDefaultPolicyVersionCommand extends $Command<SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: SetDefaultPolicyVersionCommandInput;
    constructor(input: SetDefaultPolicyVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
