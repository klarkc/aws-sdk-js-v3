import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminCreateUserRequest, AdminCreateUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminCreateUserCommandInput extends AdminCreateUserRequest {
}
export interface AdminCreateUserCommandOutput extends AdminCreateUserResponse, __MetadataBearer {
}
/**
 * <p>Creates a new user in the specified user pool.</p>
 *         <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via
 *             email or phone (SMS).</p>
 *         <p>This message is based on a template that you configured in your call to create or
 *             update a user pool. This template includes your custom sign-up instructions and
 *             placeholders for user name and temporary password.</p>
 *         <p>Alternatively, you can call <code>AdminCreateUser</code> with “SUPPRESS” for the
 *                 <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p>
 *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
 *             they sign in and change their password.</p>
 *         <p>
 *             <code>AdminCreateUser</code> requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminCreateUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminCreateUserCommandInput} for command's `input` shape.
 * @see {@link AdminCreateUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminCreateUserCommand extends $Command<AdminCreateUserCommandInput, AdminCreateUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminCreateUserCommandInput;
    constructor(input: AdminCreateUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminCreateUserCommandInput, AdminCreateUserCommandOutput>;
    private serialize;
    private deserialize;
}
