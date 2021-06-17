import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DeleteInlinePolicyFromPermissionSetRequest, DeleteInlinePolicyFromPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInlinePolicyFromPermissionSetCommandInput extends DeleteInlinePolicyFromPermissionSetRequest {
}
export interface DeleteInlinePolicyFromPermissionSetCommandOutput extends DeleteInlinePolicyFromPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes the inline policy from a specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteInlinePolicyFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteInlinePolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteInlinePolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInlinePolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DeleteInlinePolicyFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInlinePolicyFromPermissionSetCommand extends $Command<DeleteInlinePolicyFromPermissionSetCommandInput, DeleteInlinePolicyFromPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DeleteInlinePolicyFromPermissionSetCommandInput;
    constructor(input: DeleteInlinePolicyFromPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInlinePolicyFromPermissionSetCommandInput, DeleteInlinePolicyFromPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
