import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminConfirmSignUpRequest, AdminConfirmSignUpResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminConfirmSignUpCommandInput extends AdminConfirmSignUpRequest {
}
export interface AdminConfirmSignUpCommandOutput extends AdminConfirmSignUpResponse, __MetadataBearer {
}
/**
 * <p>Confirms user registration as an admin without using a confirmation code. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link AdminConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminConfirmSignUpCommand extends $Command<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminConfirmSignUpCommandInput;
    constructor(input: AdminConfirmSignUpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput>;
    private serialize;
    private deserialize;
}
