import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ForgotPasswordCommandInput extends ForgotPasswordRequest {
}
export interface ForgotPasswordCommandOutput extends ForgotPasswordResponse, __MetadataBearer {
}
/**
 * <p>Calling this API causes a message to be sent to the end user with a confirmation code
 *             that is required to change the user's password. For the <code>Username</code> parameter,
 *             you can use the username or user alias. The method used to send the confirmation code is
 *             sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering
 *                 User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If
 *             neither a verified phone number nor a verified email exists, an
 *                 <code>InvalidParameterException</code> is thrown. To use the confirmation code for
 *             resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ForgotPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ForgotPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgotPasswordCommandInput} for command's `input` shape.
 * @see {@link ForgotPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ForgotPasswordCommand extends $Command<ForgotPasswordCommandInput, ForgotPasswordCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ForgotPasswordCommandInput;
    constructor(input: ForgotPasswordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ForgotPasswordCommandInput, ForgotPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
