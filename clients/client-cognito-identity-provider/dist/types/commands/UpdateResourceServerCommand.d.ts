import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceServerCommandInput extends UpdateResourceServerRequest {
}
export interface UpdateResourceServerCommandOutput extends UpdateResourceServerResponse, __MetadataBearer {
}
/**
 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateResourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceServerCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceServerCommand extends $Command<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateResourceServerCommandInput;
    constructor(input: UpdateResourceServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput>;
    private serialize;
    private deserialize;
}
