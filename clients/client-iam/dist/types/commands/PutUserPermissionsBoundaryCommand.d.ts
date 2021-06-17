import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPermissionsBoundaryRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutUserPermissionsBoundaryCommandInput extends PutUserPermissionsBoundaryRequest {
}
export interface PutUserPermissionsBoundaryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a user. Use the boundary to control the maximum permissions that the user can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the user.</p>
 *         <important>
 *             <p>Policies that are used as permissions boundaries do not provide permissions. You
 *                 must also attach a permissions policy to the user. To learn how the effective
 *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutUserPermissionsBoundaryCommand extends $Command<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput, IAMClientResolvedConfig> {
    readonly input: PutUserPermissionsBoundaryCommandInput;
    constructor(input: PutUserPermissionsBoundaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput>;
    private serialize;
    private deserialize;
}
