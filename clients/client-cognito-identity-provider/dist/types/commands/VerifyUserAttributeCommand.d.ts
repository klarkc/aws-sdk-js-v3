import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { VerifyUserAttributeRequest, VerifyUserAttributeResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface VerifyUserAttributeCommandInput extends VerifyUserAttributeRequest {
}
export interface VerifyUserAttributeCommandOutput extends VerifyUserAttributeResponse, __MetadataBearer {
}
/**
 * <p>Verifies the specified user attributes in the user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifyUserAttributeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifyUserAttributeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifyUserAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyUserAttributeCommandInput} for command's `input` shape.
 * @see {@link VerifyUserAttributeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class VerifyUserAttributeCommand extends $Command<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: VerifyUserAttributeCommandInput;
    constructor(input: VerifyUserAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
