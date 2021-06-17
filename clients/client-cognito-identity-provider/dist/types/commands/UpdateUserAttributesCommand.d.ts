import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserAttributesRequest, UpdateUserAttributesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateUserAttributesCommandInput extends UpdateUserAttributesRequest {
}
export interface UpdateUserAttributesCommandOutput extends UpdateUserAttributesResponse, __MetadataBearer {
}
/**
 * <p>Allows a user to update a specific attribute (one at a time).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateUserAttributesCommand extends $Command<UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserAttributesCommandInput;
    constructor(input: UpdateUserAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
