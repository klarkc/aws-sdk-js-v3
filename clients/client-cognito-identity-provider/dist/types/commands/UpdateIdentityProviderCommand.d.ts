import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateIdentityProviderRequest, UpdateIdentityProviderResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIdentityProviderCommandInput extends UpdateIdentityProviderRequest {
}
export interface UpdateIdentityProviderCommandOutput extends UpdateIdentityProviderResponse, __MetadataBearer {
}
/**
 * <p>Updates identity provider information for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIdentityProviderCommand extends $Command<UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateIdentityProviderCommandInput;
    constructor(input: UpdateIdentityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityProviderCommandInput, UpdateIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
