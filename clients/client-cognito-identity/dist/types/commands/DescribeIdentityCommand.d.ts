import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DescribeIdentityInput, IdentityDescription } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIdentityCommandInput extends DescribeIdentityInput {
}
export interface DescribeIdentityCommandOutput extends IdentityDescription, __MetadataBearer {
}
/**
 * <p>Returns metadata related to the given identity, including when the identity was
 *          created and any associated linked logins.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DescribeIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIdentityCommand extends $Command<DescribeIdentityCommandInput, DescribeIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DescribeIdentityCommandInput;
    constructor(input: DescribeIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityCommandInput, DescribeIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
