import { __extends } from "tslib";
import { AdminResetUserPasswordRequest, AdminResetUserPasswordResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminResetUserPasswordCommand, serializeAws_json1_1AdminResetUserPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the specified user's password in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>When a developer calls this API, the current password is invalidated, so it must be
 *             changed. If a user tries to sign in after the API is called, the app will get a
 *             PasswordResetRequiredException exception back and should direct the user down the flow
 *             to reset the password, which is the same as the forgot password flow. In addition, if
 *             the user pool has phone verification selected and a verified phone number exists for the
 *             user, or if email verification is selected and a verified email exists for the user,
 *             calling this API will also result in sending a message to the end user with the code to
 *             change their password.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminResetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminResetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminResetUserPasswordCommand = /** @class */ (function (_super) {
    __extends(AdminResetUserPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminResetUserPasswordCommand(input) {
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
    AdminResetUserPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminResetUserPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminResetUserPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminResetUserPasswordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminResetUserPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminResetUserPasswordCommand(input, context);
    };
    AdminResetUserPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminResetUserPasswordCommand(output, context);
    };
    return AdminResetUserPasswordCommand;
}($Command));
export { AdminResetUserPasswordCommand };
//# sourceMappingURL=AdminResetUserPasswordCommand.js.map