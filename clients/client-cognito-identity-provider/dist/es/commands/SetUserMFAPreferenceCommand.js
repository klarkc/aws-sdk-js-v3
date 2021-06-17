import { __extends } from "tslib";
import { SetUserMFAPreferenceRequest, SetUserMFAPreferenceResponse } from "../models/models_0";
import { deserializeAws_json1_1SetUserMFAPreferenceCommand, serializeAws_json1_1SetUserMFAPreferenceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var SetUserMFAPreferenceCommand = /** @class */ (function (_super) {
    __extends(SetUserMFAPreferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetUserMFAPreferenceCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    SetUserMFAPreferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "SetUserMFAPreferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetUserMFAPreferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetUserMFAPreferenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetUserMFAPreferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetUserMFAPreferenceCommand(input, context);
    };
    SetUserMFAPreferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetUserMFAPreferenceCommand(output, context);
    };
    return SetUserMFAPreferenceCommand;
}($Command));
export { SetUserMFAPreferenceCommand };
//# sourceMappingURL=SetUserMFAPreferenceCommand.js.map