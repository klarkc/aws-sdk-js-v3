import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { VerifySoftwareTokenRequest, VerifySoftwareTokenResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface VerifySoftwareTokenCommandInput extends VerifySoftwareTokenRequest {
}
export interface VerifySoftwareTokenCommandOutput extends VerifySoftwareTokenResponse, __MetadataBearer {
}
/**
 * <p>Use this API to register a user's entered TOTP code and mark the user's software token
 *             MFA status as "verified" if successful. The request takes an access token or a session
 *             string, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifySoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifySoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link VerifySoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class VerifySoftwareTokenCommand extends $Command<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: VerifySoftwareTokenCommandInput;
    constructor(input: VerifySoftwareTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput>;
    private serialize;
    private deserialize;
}
