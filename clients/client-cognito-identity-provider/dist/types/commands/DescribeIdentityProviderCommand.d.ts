import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeIdentityProviderRequest, DescribeIdentityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIdentityProviderCommandInput extends DescribeIdentityProviderRequest {
}
export interface DescribeIdentityProviderCommandOutput extends DescribeIdentityProviderResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specific identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIdentityProviderCommand extends $Command<DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeIdentityProviderCommandInput;
    constructor(input: DescribeIdentityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityProviderCommandInput, DescribeIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
