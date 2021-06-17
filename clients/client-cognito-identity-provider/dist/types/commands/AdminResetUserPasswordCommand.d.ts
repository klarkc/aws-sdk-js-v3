import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminResetUserPasswordRequest, AdminResetUserPasswordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminResetUserPasswordCommandInput extends AdminResetUserPasswordRequest {
}
export interface AdminResetUserPasswordCommandOutput extends AdminResetUserPasswordResponse, __MetadataBearer {
}
/**
 * <p>Resets the specified user's password in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>When a developer calls this API, the current password is invalidated, so it must be
 *             changed. If a user tries to sign in after the API is called, the app will get a
 *             PasswordResetRequiredException exception back and should direct the user down the flow
 *             to reset the password, which is the same as the forgot password flow. In addition, if
 *             the user pool has phone verification selected and a verified phone number exists for the
 *             user, or if email verification is selected and a verified email exists for the user,
 *             calling this API will also result in sending a message to the end user with the code to
 *             change their password.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminResetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminResetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminResetUserPasswordCommand extends $Command<AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminResetUserPasswordCommandInput;
    constructor(input: AdminResetUserPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
