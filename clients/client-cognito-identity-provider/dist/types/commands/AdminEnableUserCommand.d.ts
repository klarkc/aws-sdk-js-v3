import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminEnableUserRequest, AdminEnableUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminEnableUserCommandInput extends AdminEnableUserRequest {
}
export interface AdminEnableUserCommandOutput extends AdminEnableUserResponse, __MetadataBearer {
}
/**
 * <p>Enables the specified user as an administrator. Works on any user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminEnableUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminEnableUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminEnableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminEnableUserCommandInput} for command's `input` shape.
 * @see {@link AdminEnableUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminEnableUserCommand extends $Command<AdminEnableUserCommandInput, AdminEnableUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminEnableUserCommandInput;
    constructor(input: AdminEnableUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminEnableUserCommandInput, AdminEnableUserCommandOutput>;
    private serialize;
    private deserialize;
}
