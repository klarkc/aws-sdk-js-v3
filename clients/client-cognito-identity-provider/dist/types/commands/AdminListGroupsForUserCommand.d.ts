import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminListGroupsForUserRequest, AdminListGroupsForUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminListGroupsForUserCommandInput extends AdminListGroupsForUserRequest {
}
export interface AdminListGroupsForUserCommandOutput extends AdminListGroupsForUserResponse, __MetadataBearer {
}
/**
 * <p>Lists the groups that the user belongs to.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link AdminListGroupsForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminListGroupsForUserCommand extends $Command<AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminListGroupsForUserCommandInput;
    constructor(input: AdminListGroupsForUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminListGroupsForUserCommandInput, AdminListGroupsForUserCommandOutput>;
    private serialize;
    private deserialize;
}
