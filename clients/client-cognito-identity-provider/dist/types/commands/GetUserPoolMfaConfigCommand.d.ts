import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetUserPoolMfaConfigCommandInput extends GetUserPoolMfaConfigRequest {
}
export interface GetUserPoolMfaConfigCommandOutput extends GetUserPoolMfaConfigResponse, __MetadataBearer {
}
/**
 * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetUserPoolMfaConfigCommand extends $Command<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUserPoolMfaConfigCommandInput;
    constructor(input: GetUserPoolMfaConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput>;
    private serialize;
    private deserialize;
}
