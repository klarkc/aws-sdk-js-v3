import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDeleteUserAttributesRequest, AdminDeleteUserAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminDeleteUserAttributesCommandInput extends AdminDeleteUserAttributesRequest {
}
export interface AdminDeleteUserAttributesCommandOutput extends AdminDeleteUserAttributesResponse, __MetadataBearer {
}
/**
 * <p>Deletes the user attributes in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDeleteUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDeleteUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDeleteUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDeleteUserAttributesCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminDeleteUserAttributesCommand extends $Command<AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDeleteUserAttributesCommandInput;
    constructor(input: AdminDeleteUserAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
