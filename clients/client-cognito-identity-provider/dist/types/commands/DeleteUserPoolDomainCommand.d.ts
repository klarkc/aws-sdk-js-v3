import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserPoolDomainRequest, DeleteUserPoolDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserPoolDomainCommandInput extends DeleteUserPoolDomainRequest {
}
export interface DeleteUserPoolDomainCommandOutput extends DeleteUserPoolDomainResponse, __MetadataBearer {
}
/**
 * <p>Deletes a domain for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserPoolDomainCommand extends $Command<DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserPoolDomainCommandInput;
    constructor(input: DeleteUserPoolDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput>;
    private serialize;
    private deserialize;
}
