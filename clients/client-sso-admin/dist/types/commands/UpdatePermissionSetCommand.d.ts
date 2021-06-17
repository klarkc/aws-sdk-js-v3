import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { UpdatePermissionSetRequest, UpdatePermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePermissionSetCommandInput extends UpdatePermissionSetRequest {
}
export interface UpdatePermissionSetCommandOutput extends UpdatePermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new UpdatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePermissionSetCommand extends $Command<UpdatePermissionSetCommandInput, UpdatePermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: UpdatePermissionSetCommandInput;
    constructor(input: UpdatePermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePermissionSetCommandInput, UpdatePermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
