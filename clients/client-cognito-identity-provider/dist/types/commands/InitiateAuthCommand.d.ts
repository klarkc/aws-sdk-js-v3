import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { InitiateAuthRequest, InitiateAuthResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitiateAuthCommandInput extends InitiateAuthRequest {
}
export interface InitiateAuthCommandOutput extends InitiateAuthResponse, __MetadataBearer {
}
/**
 * <p>Initiates the authentication flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, InitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new InitiateAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateAuthCommandInput} for command's `input` shape.
 * @see {@link InitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitiateAuthCommand extends $Command<InitiateAuthCommandInput, InitiateAuthCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: InitiateAuthCommandInput;
    constructor(input: InitiateAuthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateAuthCommandInput, InitiateAuthCommandOutput>;
    private serialize;
    private deserialize;
}
