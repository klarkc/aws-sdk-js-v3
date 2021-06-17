import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { PutInlinePolicyToPermissionSetRequest, PutInlinePolicyToPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutInlinePolicyToPermissionSetCommandInput extends PutInlinePolicyToPermissionSetRequest {
}
export interface PutInlinePolicyToPermissionSetCommandOutput extends PutInlinePolicyToPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Attaches an IAM inline policy to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new PutInlinePolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInlinePolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutInlinePolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutInlinePolicyToPermissionSetCommand extends $Command<PutInlinePolicyToPermissionSetCommandInput, PutInlinePolicyToPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: PutInlinePolicyToPermissionSetCommandInput;
    constructor(input: PutInlinePolicyToPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInlinePolicyToPermissionSetCommandInput, PutInlinePolicyToPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
