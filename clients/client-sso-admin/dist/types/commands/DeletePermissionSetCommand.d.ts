import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DeletePermissionSetRequest, DeletePermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePermissionSetCommandInput extends DeletePermissionSetRequest {
}
export interface DeletePermissionSetCommandOutput extends DeletePermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeletePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeletePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeletePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionSetCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePermissionSetCommand extends $Command<DeletePermissionSetCommandInput, DeletePermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DeletePermissionSetCommandInput;
    constructor(input: DeletePermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePermissionSetCommandInput, DeletePermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
