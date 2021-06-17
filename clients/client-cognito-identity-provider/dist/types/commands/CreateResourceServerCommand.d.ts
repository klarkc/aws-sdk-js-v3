import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateResourceServerRequest, CreateResourceServerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourceServerCommandInput extends CreateResourceServerRequest {
}
export interface CreateResourceServerCommandOutput extends CreateResourceServerResponse, __MetadataBearer {
}
/**
 * <p>Creates a new OAuth2.0 resource server and defines custom scopes in it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceServerCommandInput} for command's `input` shape.
 * @see {@link CreateResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceServerCommand extends $Command<CreateResourceServerCommandInput, CreateResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateResourceServerCommandInput;
    constructor(input: CreateResourceServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceServerCommandInput, CreateResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
