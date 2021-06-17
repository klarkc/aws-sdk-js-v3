import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDeleteUserRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminDeleteUserCommandInput extends AdminDeleteUserRequest {
}
export interface AdminDeleteUserCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a user as an administrator. Works on any user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDeleteUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDeleteUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDeleteUserCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminDeleteUserCommand extends $Command<AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDeleteUserCommandInput;
    constructor(input: AdminDeleteUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
