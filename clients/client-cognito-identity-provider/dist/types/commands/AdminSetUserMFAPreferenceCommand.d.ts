import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminSetUserMFAPreferenceRequest, AdminSetUserMFAPreferenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AdminSetUserMFAPreferenceCommandInput extends AdminSetUserMFAPreferenceRequest {
}
export interface AdminSetUserMFAPreferenceCommandOutput extends AdminSetUserMFAPreferenceResponse, __MetadataBearer {
}
/**
 * <p>Sets the user's multi-factor authentication (MFA) preference, including which MFA
 *             options are enabled and if any are preferred. Only one factor can be set as preferred.
 *             The preferred MFA factor will be used to authenticate a user if multiple factors are
 *             enabled. If multiple options are enabled and no preference is set, a challenge to choose
 *             an MFA option will be returned during sign in.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminSetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminSetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserMFAPreferenceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AdminSetUserMFAPreferenceCommand extends $Command<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminSetUserMFAPreferenceCommandInput;
    constructor(input: AdminSetUserMFAPreferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
