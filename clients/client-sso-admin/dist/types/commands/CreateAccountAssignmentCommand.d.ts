import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { CreateAccountAssignmentRequest, CreateAccountAssignmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccountAssignmentCommandInput extends CreateAccountAssignmentRequest {
}
export interface CreateAccountAssignmentCommandOutput extends CreateAccountAssignmentResponse, __MetadataBearer {
}
/**
 * <p>Assigns access to a principal for a specified AWS account using a specified permission
 *       set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p>
 *          </note>
 *          <note>
 *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> to make these updates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccountAssignmentCommand extends $Command<CreateAccountAssignmentCommandInput, CreateAccountAssignmentCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: CreateAccountAssignmentCommandInput;
    constructor(input: CreateAccountAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccountAssignmentCommandInput, CreateAccountAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
