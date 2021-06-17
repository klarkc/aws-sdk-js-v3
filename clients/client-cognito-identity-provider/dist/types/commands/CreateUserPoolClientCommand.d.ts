import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolClientRequest, CreateUserPoolClientResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserPoolClientCommandInput extends CreateUserPoolClientRequest {
}
export interface CreateUserPoolClientCommandOutput extends CreateUserPoolClientResponse, __MetadataBearer {
}
/**
 * <p>Creates the user pool client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserPoolClientCommand extends $Command<CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolClientCommandInput;
    constructor(input: CreateUserPoolClientCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolClientCommandInput, CreateUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
