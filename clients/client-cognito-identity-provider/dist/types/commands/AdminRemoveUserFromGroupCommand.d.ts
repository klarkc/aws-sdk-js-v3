import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminRemoveUserFromGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminRemoveUserFromGroupCommandInput extends AdminRemoveUserFromGroupRequest {
}
export interface AdminRemoveUserFromGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified user from the specified group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminRemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminRemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link AdminRemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminRemoveUserFromGroupCommand extends $Command<AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminRemoveUserFromGroupCommandInput;
    constructor(input: AdminRemoveUserFromGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
