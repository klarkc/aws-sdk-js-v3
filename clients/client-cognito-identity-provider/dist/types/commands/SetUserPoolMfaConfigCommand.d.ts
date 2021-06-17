import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUserPoolMfaConfigRequest, SetUserPoolMfaConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetUserPoolMfaConfigCommandInput extends SetUserPoolMfaConfigRequest {
}
export interface SetUserPoolMfaConfigCommandOutput extends SetUserPoolMfaConfigResponse, __MetadataBearer {
}
/**
 * <p>Set the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link SetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetUserPoolMfaConfigCommand extends $Command<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUserPoolMfaConfigCommandInput;
    constructor(input: SetUserPoolMfaConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUserPoolMfaConfigCommandInput, SetUserPoolMfaConfigCommandOutput>;
    private serialize;
    private deserialize;
}
