import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolRequest, CreateUserPoolResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserPoolCommandInput extends CreateUserPoolRequest {
}
export interface CreateUserPoolCommandOutput extends CreateUserPoolResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon Cognito user pool and sets the password policy for the
 *             pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserPoolCommand extends $Command<CreateUserPoolCommandInput, CreateUserPoolCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolCommandInput;
    constructor(input: CreateUserPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolCommandInput, CreateUserPoolCommandOutput>;
    private serialize;
    private deserialize;
}
