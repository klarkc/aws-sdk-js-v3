import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListIdentityProvidersRequest, ListIdentityProvidersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIdentityProvidersCommandInput extends ListIdentityProvidersRequest {
}
export interface ListIdentityProvidersCommandOutput extends ListIdentityProvidersResponse, __MetadataBearer {
}
/**
 * <p>Lists information about all identity providers for a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListIdentityProvidersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListIdentityProvidersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListIdentityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIdentityProvidersCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProvidersCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIdentityProvidersCommand extends $Command<ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListIdentityProvidersCommandInput;
    constructor(input: ListIdentityProvidersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
