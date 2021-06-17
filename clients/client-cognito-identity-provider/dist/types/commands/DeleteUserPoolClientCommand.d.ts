import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserPoolClientRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserPoolClientCommandInput extends DeleteUserPoolClientRequest {
}
export interface DeleteUserPoolClientCommandOutput extends __MetadataBearer {
}
/**
 * <p>Allows the developer to delete the user pool client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteUserPoolClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolClientCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserPoolClientCommand extends $Command<DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserPoolClientCommandInput;
    constructor(input: DeleteUserPoolClientCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserPoolClientCommandInput, DeleteUserPoolClientCommandOutput>;
    private serialize;
    private deserialize;
}
