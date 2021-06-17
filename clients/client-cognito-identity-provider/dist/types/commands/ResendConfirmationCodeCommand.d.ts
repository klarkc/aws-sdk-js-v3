import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ResendConfirmationCodeRequest, ResendConfirmationCodeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResendConfirmationCodeCommandInput extends ResendConfirmationCodeRequest {
}
export interface ResendConfirmationCodeCommandOutput extends ResendConfirmationCodeResponse, __MetadataBearer {
}
/**
 * <p>Resends the confirmation (for confirmation of registration) to a specific user in the
 *             user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ResendConfirmationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ResendConfirmationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ResendConfirmationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendConfirmationCodeCommandInput} for command's `input` shape.
 * @see {@link ResendConfirmationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResendConfirmationCodeCommand extends $Command<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ResendConfirmationCodeCommandInput;
    constructor(input: ResendConfirmationCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
