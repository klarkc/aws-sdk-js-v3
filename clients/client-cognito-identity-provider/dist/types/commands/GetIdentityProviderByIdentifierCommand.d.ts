import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIdentityProviderByIdentifierCommandInput extends GetIdentityProviderByIdentifierRequest {
}
export interface GetIdentityProviderByIdentifierCommandOutput extends GetIdentityProviderByIdentifierResponse, __MetadataBearer {
}
/**
 * <p>Gets the specified identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetIdentityProviderByIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityProviderByIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderByIdentifierCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIdentityProviderByIdentifierCommand extends $Command<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetIdentityProviderByIdentifierCommandInput;
    constructor(input: GetIdentityProviderByIdentifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
