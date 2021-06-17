import { __extends } from "tslib";
import { AdminSetUserMFAPreferenceRequest, AdminSetUserMFAPreferenceResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminSetUserMFAPreferenceCommand, serializeAws_json1_1AdminSetUserMFAPreferenceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AdminSetUserMFAPreferenceCommand = /** @class */ (function (_super) {
    __extends(AdminSetUserMFAPreferenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminSetUserMFAPreferenceCommand(input) {
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
    AdminSetUserMFAPreferenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminSetUserMFAPreferenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminSetUserMFAPreferenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminSetUserMFAPreferenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminSetUserMFAPreferenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminSetUserMFAPreferenceCommand(input, context);
    };
    AdminSetUserMFAPreferenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminSetUserMFAPreferenceCommand(output, context);
    };
    return AdminSetUserMFAPreferenceCommand;
}($Command));
export { AdminSetUserMFAPreferenceCommand };
//# sourceMappingURL=AdminSetUserMFAPreferenceCommand.js.map