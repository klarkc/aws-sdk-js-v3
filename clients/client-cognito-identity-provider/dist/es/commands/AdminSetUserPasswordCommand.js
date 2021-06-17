import { __extends } from "tslib";
import { AdminSetUserPasswordRequest, AdminSetUserPasswordResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminSetUserPasswordCommand, serializeAws_json1_1AdminSetUserPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the specified user's password in a user pool as an administrator. Works on any
 *             user. </p>
 *         <p>The password can be temporary or permanent. If it is temporary, the user status will
 *             be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to
 *             sign in, the InitiateAuth/AdminInitiateAuth response will contain the
 *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it
 *             expires, the user will not be able to sign in and their password will need to be reset
 *             by an administrator. </p>
 *         <p>Once the user has set a new password, or the password is permanent, the user status
 *             will be set to <code>Confirmed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminSetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminSetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminSetUserPasswordCommand = /** @class */ (function (_super) {
    __extends(AdminSetUserPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminSetUserPasswordCommand(input) {
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
    AdminSetUserPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminSetUserPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminSetUserPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminSetUserPasswordResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminSetUserPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminSetUserPasswordCommand(input, context);
    };
    AdminSetUserPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminSetUserPasswordCommand(output, context);
    };
    return AdminSetUserPasswordCommand;
}($Command));
export { AdminSetUserPasswordCommand };
//# sourceMappingURL=AdminSetUserPasswordCommand.js.map