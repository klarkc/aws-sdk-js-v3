import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminUserGlobalSignOutCommandInput extends AdminUserGlobalSignOutRequest {
}
export interface AdminUserGlobalSignOutCommandOutput extends AdminUserGlobalSignOutResponse, __MetadataBearer {
}
/**
 * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh
 *             tokens issued to a user. The user's current access and Id tokens remain valid until
 *             their expiry. Access and Id tokens expire one hour after they are issued.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUserGlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUserGlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link AdminUserGlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminUserGlobalSignOutCommand extends $Command<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUserGlobalSignOutCommandInput;
    constructor(input: AdminUserGlobalSignOutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput>;
    private serialize;
    private deserialize;
}
