import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateSoftwareTokenCommandInput extends AssociateSoftwareTokenRequest {
}
export interface AssociateSoftwareTokenCommandOutput extends AssociateSoftwareTokenResponse, __MetadataBearer {
}
/**
 * <p>Returns a unique generated shared secret key code for the user account. The request
 *             takes an access token or a session string, but not both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AssociateSoftwareTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateSoftwareTokenCommand extends $Command<AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AssociateSoftwareTokenCommandInput;
    constructor(input: AssociateSoftwareTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSoftwareTokenCommandInput, AssociateSoftwareTokenCommandOutput>;
    private serialize;
    private deserialize;
}
