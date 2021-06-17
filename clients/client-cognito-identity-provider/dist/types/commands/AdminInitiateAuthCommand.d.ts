import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminInitiateAuthCommandInput extends AdminInitiateAuthRequest {
}
export interface AdminInitiateAuthCommandOutput extends AdminInitiateAuthResponse, __MetadataBearer {
}
/**
 * <p>Initiates the authentication flow, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminInitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminInitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminInitiateAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminInitiateAuthCommandInput} for command's `input` shape.
 * @see {@link AdminInitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminInitiateAuthCommand extends $Command<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminInitiateAuthCommandInput;
    constructor(input: AdminInitiateAuthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput>;
    private serialize;
    private deserialize;
}
