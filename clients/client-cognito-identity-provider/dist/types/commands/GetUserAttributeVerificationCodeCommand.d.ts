import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUserAttributeVerificationCodeRequest, GetUserAttributeVerificationCodeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUserAttributeVerificationCodeCommandInput extends GetUserAttributeVerificationCodeRequest {
}
export interface GetUserAttributeVerificationCodeCommandOutput extends GetUserAttributeVerificationCodeResponse, __MetadataBearer {
}
/**
 * <p>Gets the user attribute verification code for the specified attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserAttributeVerificationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserAttributeVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link GetUserAttributeVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUserAttributeVerificationCodeCommand extends $Command<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUserAttributeVerificationCodeCommandInput;
    constructor(input: GetUserAttributeVerificationCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput>;
    private serialize;
    private deserialize;
}
