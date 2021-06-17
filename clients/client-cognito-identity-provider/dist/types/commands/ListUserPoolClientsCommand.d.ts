import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserPoolClientsRequest, ListUserPoolClientsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserPoolClientsCommandInput extends ListUserPoolClientsRequest {
}
export interface ListUserPoolClientsCommandOutput extends ListUserPoolClientsResponse, __MetadataBearer {
}
/**
 * <p>Lists the clients that have been created for the specified user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserPoolClientsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolClientsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserPoolClientsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoolClientsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolClientsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserPoolClientsCommand extends $Command<ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserPoolClientsCommandInput;
    constructor(input: ListUserPoolClientsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoolClientsCommandInput, ListUserPoolClientsCommandOutput>;
    private serialize;
    private deserialize;
}
