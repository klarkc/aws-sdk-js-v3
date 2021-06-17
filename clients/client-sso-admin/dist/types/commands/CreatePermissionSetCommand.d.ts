import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { CreatePermissionSetRequest, CreatePermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePermissionSetCommandInput extends CreatePermissionSetRequest {
}
export interface CreatePermissionSetCommandOutput extends CreatePermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Creates a permission set within a specified SSO instance.</p>
 *          <note>
 *             <p>To grant users and groups access to AWS account resources, use <code>
 *                   <a>CreateAccountAssignment</a>
 *                </code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePermissionSetCommand extends $Command<CreatePermissionSetCommandInput, CreatePermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: CreatePermissionSetCommandInput;
    constructor(input: CreatePermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePermissionSetCommandInput, CreatePermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
