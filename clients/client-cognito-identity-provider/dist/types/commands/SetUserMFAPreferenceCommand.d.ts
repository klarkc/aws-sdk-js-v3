import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUserMFAPreferenceRequest, SetUserMFAPreferenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetUserMFAPreferenceCommandInput extends SetUserMFAPreferenceRequest {
}
export interface SetUserMFAPreferenceCommandOutput extends SetUserMFAPreferenceResponse, __MetadataBearer {
}
/**
 * <p>Set the user's multi-factor authentication (MFA) method preference, including which
 *             MFA factors are enabled and if any are preferred. Only one factor can be set as
 *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
 *             factors are enabled. If multiple options are enabled and no preference is set, a
 *             challenge to choose an MFA option will be returned during sign in. If an MFA type is
 *             enabled for a user, the user will be prompted for MFA during all sign in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you would like
 *             MFA to be applied selectively based on the assessed risk level of sign in attempts,
 *             disable MFA for users and turn on Adaptive Authentication for the user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link SetUserMFAPreferenceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetUserMFAPreferenceCommand extends $Command<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUserMFAPreferenceCommandInput;
    constructor(input: SetUserMFAPreferenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
