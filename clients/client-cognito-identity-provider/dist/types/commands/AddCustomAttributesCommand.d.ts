import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AddCustomAttributesRequest, AddCustomAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddCustomAttributesCommandInput extends AddCustomAttributesRequest {
}
export interface AddCustomAttributesCommandOutput extends AddCustomAttributesResponse, __MetadataBearer {
}
/**
 * <p>Adds additional user attributes to the user pool schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AddCustomAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AddCustomAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCustomAttributesCommandInput} for command's `input` shape.
 * @see {@link AddCustomAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddCustomAttributesCommand extends $Command<AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AddCustomAttributesCommandInput;
    constructor(input: AddCustomAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
