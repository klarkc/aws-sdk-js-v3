import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateIdentityProviderRequest, CreateIdentityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateIdentityProviderCommandInput extends CreateIdentityProviderRequest {
}
export interface CreateIdentityProviderCommandOutput extends CreateIdentityProviderResponse, __MetadataBearer {
}
/**
 * <p>Creates an identity provider for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateIdentityProviderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateIdentityProviderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateIdentityProviderCommand extends $Command<CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateIdentityProviderCommandInput;
    constructor(input: CreateIdentityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIdentityProviderCommandInput, CreateIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
