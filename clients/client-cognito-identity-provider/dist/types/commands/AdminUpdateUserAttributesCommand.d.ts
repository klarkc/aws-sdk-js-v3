import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminUpdateUserAttributesCommandInput extends AdminUpdateUserAttributesRequest {
}
export interface AdminUpdateUserAttributesCommandOutput extends AdminUpdateUserAttributesResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified user's attributes, including developer attributes, as an
 *             administrator. Works on any user.</p>
 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
 *             attribute name.</p>
 *         <p>In addition to updating user attributes, this API can also be used to mark phone and
 *             email as verified.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminUpdateUserAttributesCommand extends $Command<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateUserAttributesCommandInput;
    constructor(input: AdminUpdateUserAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
