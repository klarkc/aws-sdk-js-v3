import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateRoleRequest, CreateRoleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRoleCommandInput extends CreateRoleRequest {
}
export interface CreateRoleCommandOutput extends CreateRoleResponse, __MetadataBearer {
}
/**
 * <p>Creates a new role for your AWS account. For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM
 *                 roles</a>. For information about quotas for role names and the number of roles
 *             you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoleCommandInput} for command's `input` shape.
 * @see {@link CreateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRoleCommand extends $Command<CreateRoleCommandInput, CreateRoleCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateRoleCommandInput;
    constructor(input: CreateRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRoleCommandInput, CreateRoleCommandOutput>;
    private serialize;
    private deserialize;
}
