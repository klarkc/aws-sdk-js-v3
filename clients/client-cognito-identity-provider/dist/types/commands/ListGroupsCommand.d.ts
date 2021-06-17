import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListGroupsRequest, ListGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGroupsCommandInput extends ListGroupsRequest {
}
export interface ListGroupsCommandOutput extends ListGroupsResponse, __MetadataBearer {
}
/**
 * <p>Lists the groups associated with a user pool.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListGroupsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListGroupsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGroupsCommand extends $Command<ListGroupsCommandInput, ListGroupsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListGroupsCommandInput;
    constructor(input: ListGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupsCommandInput, ListGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
