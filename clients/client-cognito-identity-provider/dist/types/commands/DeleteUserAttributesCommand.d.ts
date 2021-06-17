import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserAttributesRequest, DeleteUserAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserAttributesCommandInput extends DeleteUserAttributesRequest {
}
export interface DeleteUserAttributesCommandOutput extends DeleteUserAttributesResponse, __MetadataBearer {
}
/**
 * <p>Deletes the attributes for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DeleteUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserAttributesCommand extends $Command<DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserAttributesCommandInput;
    constructor(input: DeleteUserAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
