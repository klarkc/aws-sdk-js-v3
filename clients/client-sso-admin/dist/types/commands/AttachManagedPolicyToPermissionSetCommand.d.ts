import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { AttachManagedPolicyToPermissionSetRequest, AttachManagedPolicyToPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachManagedPolicyToPermissionSetCommandInput extends AttachManagedPolicyToPermissionSetRequest {
}
export interface AttachManagedPolicyToPermissionSetCommandOutput extends AttachManagedPolicyToPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Attaches an IAM managed policy ARN to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new AttachManagedPolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachManagedPolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachManagedPolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachManagedPolicyToPermissionSetCommand extends $Command<AttachManagedPolicyToPermissionSetCommandInput, AttachManagedPolicyToPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: AttachManagedPolicyToPermissionSetCommandInput;
    constructor(input: AttachManagedPolicyToPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachManagedPolicyToPermissionSetCommandInput, AttachManagedPolicyToPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
