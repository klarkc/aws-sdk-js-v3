import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserPoolClientRequest, DescribeUserPoolClientResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserPoolClientCommandInput extends DescribeUserPoolClientRequest {
}
export interface DescribeUserPoolClientCommandOutput extends DescribeUserPoolClientResponse, __MetadataBearer {
}
/**
 * <p>Client method for returning the configuration information and metadata of the
 *             specified user pool app client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserPoolClientCommand extends $Command<DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserPoolClientCommandInput;
    constructor(input: DescribeUserPoolClientCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserPoolClientCommandInput, DescribeUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
