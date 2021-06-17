import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserPoolDomainRequest, CreateUserPoolDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserPoolDomainCommandInput extends CreateUserPoolDomainRequest {
}
export interface CreateUserPoolDomainCommandOutput extends CreateUserPoolDomainResponse, __MetadataBearer {
}
/**
 * <p>Creates a new domain for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserPoolDomainCommand extends $Command<CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserPoolDomainCommandInput;
    constructor(input: CreateUserPoolDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
