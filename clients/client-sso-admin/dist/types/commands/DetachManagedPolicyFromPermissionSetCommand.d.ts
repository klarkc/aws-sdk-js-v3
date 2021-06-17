import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DetachManagedPolicyFromPermissionSetRequest, DetachManagedPolicyFromPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachManagedPolicyFromPermissionSetCommandInput extends DetachManagedPolicyFromPermissionSetRequest {
}
export interface DetachManagedPolicyFromPermissionSetCommandOutput extends DetachManagedPolicyFromPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Detaches the attached IAM managed policy ARN from the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DetachManagedPolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachManagedPolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachManagedPolicyFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachManagedPolicyFromPermissionSetCommand extends $Command<DetachManagedPolicyFromPermissionSetCommandInput, DetachManagedPolicyFromPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DetachManagedPolicyFromPermissionSetCommandInput;
    constructor(input: DetachManagedPolicyFromPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachManagedPolicyFromPermissionSetCommandInput, DetachManagedPolicyFromPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
