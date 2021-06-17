import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminSetUserSettingsRequest, AdminSetUserSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminSetUserSettingsCommandInput extends AdminSetUserSettingsRequest {
}
export interface AdminSetUserSettingsCommandOutput extends AdminSetUserSettingsResponse, __MetadataBearer {
}
/**
 * <p>
 *             <i>This action is no longer supported.</i> You can use it to configure
 *             only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either
 *             type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminSetUserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminSetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminSetUserSettingsCommand extends $Command<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminSetUserSettingsCommandInput;
    constructor(input: AdminSetUserSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
