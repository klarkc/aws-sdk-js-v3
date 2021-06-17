import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeResourceServerRequest, DescribeResourceServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourceServerCommandInput extends DescribeResourceServerRequest {
}
export interface DescribeResourceServerCommandOutput extends DescribeResourceServerResponse, __MetadataBearer {
}
/**
 * <p>Describes a resource server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceServerCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourceServerCommand extends $Command<DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeResourceServerCommandInput;
    constructor(input: DescribeResourceServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceServerCommandInput, DescribeResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
