import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUserPoolsRequest, ListUserPoolsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserPoolsCommandInput extends ListUserPoolsRequest {
}
export interface ListUserPoolsCommandOutput extends ListUserPoolsResponse, __MetadataBearer {
}
/**
 * <p>Lists the user pools associated with an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserPoolsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUserPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserPoolsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserPoolsCommand extends $Command<ListUserPoolsCommandInput, ListUserPoolsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUserPoolsCommandInput;
    constructor(input: ListUserPoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserPoolsCommandInput, ListUserPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
