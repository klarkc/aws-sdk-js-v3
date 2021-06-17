import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeRiskConfigurationRequest, DescribeRiskConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRiskConfigurationCommandInput extends DescribeRiskConfigurationRequest {
}
export interface DescribeRiskConfigurationCommandOutput extends DescribeRiskConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Describes the risk configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRiskConfigurationCommand extends $Command<DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeRiskConfigurationCommandInput;
    constructor(input: DescribeRiskConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRiskConfigurationCommandInput, DescribeRiskConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
