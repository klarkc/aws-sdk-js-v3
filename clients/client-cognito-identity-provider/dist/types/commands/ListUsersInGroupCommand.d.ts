import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { ListUsersInGroupRequest, ListUsersInGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUsersInGroupCommandInput extends ListUsersInGroupRequest {
}
export interface ListUsersInGroupCommandOutput extends ListUsersInGroupResponse, __MetadataBearer {
}
/**
 * <p>Lists the users in the specified group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUsersInGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUsersInGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ListUsersInGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersInGroupCommandInput} for command's `input` shape.
 * @see {@link ListUsersInGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUsersInGroupCommand extends $Command<ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: ListUsersInGroupCommandInput;
    constructor(input: ListUsersInGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput>;
    private serialize;
    private deserialize;
}
