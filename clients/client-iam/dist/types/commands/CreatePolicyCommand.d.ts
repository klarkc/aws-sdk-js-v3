import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePolicyCommandInput extends CreatePolicyRequest {
}
export interface CreatePolicyCommandOutput extends CreatePolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new managed policy for your AWS account.</p>
 *         <p>This operation creates a policy version with a version identifier of <code>v1</code>
 *             and sets v1 as the policy's default version. For more information about policy versions,
 *             see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreatePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreatePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePolicyCommand extends $Command<CreatePolicyCommandInput, CreatePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreatePolicyCommandInput;
    constructor(input: CreatePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePolicyCommandInput, CreatePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
