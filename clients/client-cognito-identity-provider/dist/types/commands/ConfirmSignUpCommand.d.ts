import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ConfirmSignUpRequest, ConfirmSignUpResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfirmSignUpCommandInput extends ConfirmSignUpRequest {
}
export interface ConfirmSignUpCommandOutput extends ConfirmSignUpResponse, __MetadataBearer {
}
/**
 * <p>Confirms registration of a user and handles the existing alias from a previous
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link ConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfirmSignUpCommand extends $Command<ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ConfirmSignUpCommandInput;
    constructor(input: ConfirmSignUpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput>;
    private serialize;
    private deserialize;
}
