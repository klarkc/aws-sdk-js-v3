import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminAddUserToGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminAddUserToGroupCommandInput extends AdminAddUserToGroupRequest {
}
export interface AdminAddUserToGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds the specified user to the specified group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminAddUserToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminAddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AdminAddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminAddUserToGroupCommand extends $Command<AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminAddUserToGroupCommandInput;
    constructor(input: AdminAddUserToGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminAddUserToGroupCommandInput, AdminAddUserToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
