import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SignUpRequest, SignUpResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SignUpCommandInput extends SignUpRequest {
}
export interface SignUpCommandOutput extends SignUpResponse, __MetadataBearer {
}
/**
 * <p>Registers the user in the specified user pool and creates a user name, password, and
 *             user attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignUpCommandInput} for command's `input` shape.
 * @see {@link SignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SignUpCommand extends $Command<SignUpCommandInput, SignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SignUpCommandInput;
    constructor(input: SignUpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignUpCommandInput, SignUpCommandOutput>;
    private serialize;
    private deserialize;
}
