import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {
}
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified version from the specified managed policy.</p>
 *         <p>You cannot delete the default version from a policy using this operation. To delete
 *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
 *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
 *         <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePolicyVersionCommand extends $Command<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeletePolicyVersionCommandInput;
    constructor(input: DeletePolicyVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
