import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetRiskConfigurationRequest, SetRiskConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetRiskConfigurationCommandInput extends SetRiskConfigurationRequest {
}
export interface SetRiskConfigurationCommandOutput extends SetRiskConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Configures actions on detected risks. To delete the risk configuration for
 *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
 *             configuration types.</p>
 *         <p>To enable Amazon Cognito advanced security features, update the user pool to include
 *             the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetRiskConfigurationCommand extends $Command<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetRiskConfigurationCommandInput;
    constructor(input: SetRiskConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
