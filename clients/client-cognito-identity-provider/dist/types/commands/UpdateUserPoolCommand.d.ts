import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserPoolRequest, UpdateUserPoolResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserPoolCommandInput extends UpdateUserPoolRequest {
}
export interface UpdateUserPoolCommandOutput extends UpdateUserPoolResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified user pool with the specified attributes. You can get a list of
 *             the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserPoolCommand extends $Command<UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserPoolCommandInput;
    constructor(input: UpdateUserPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
