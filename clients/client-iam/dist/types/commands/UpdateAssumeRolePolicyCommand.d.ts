import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAssumeRolePolicyRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAssumeRolePolicyCommandInput extends UpdateAssumeRolePolicyRequest {
}
export interface UpdateAssumeRolePolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the policy that grants an IAM entity permission to assume a role. This is
 *             typically referred to as the "role trust policy". For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
 *                 delegate permissions and federate identities</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAssumeRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAssumeRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAssumeRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssumeRolePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssumeRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssumeRolePolicyCommand extends $Command<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateAssumeRolePolicyCommandInput;
    constructor(input: UpdateAssumeRolePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
