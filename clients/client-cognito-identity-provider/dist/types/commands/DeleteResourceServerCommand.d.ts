import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteResourceServerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteResourceServerCommandInput extends DeleteResourceServerRequest {
}
export interface DeleteResourceServerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a resource server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteResourceServerCommand extends $Command<DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteResourceServerCommandInput;
    constructor(input: DeleteResourceServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceServerCommandInput, DeleteResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
