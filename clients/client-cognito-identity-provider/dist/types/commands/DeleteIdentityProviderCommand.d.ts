import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteIdentityProviderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIdentityProviderCommandInput extends DeleteIdentityProviderRequest {
}
export interface DeleteIdentityProviderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an identity provider for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIdentityProviderCommand extends $Command<DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteIdentityProviderCommandInput;
    constructor(input: DeleteIdentityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityProviderCommandInput, DeleteIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
