import { __extends } from "tslib";
import { AdminEnableUserRequest, AdminEnableUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminEnableUserCommand, serializeAws_json1_1AdminEnableUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified user as an administrator. Works on any user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminEnableUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminEnableUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminEnableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminEnableUserCommandInput} for command's `input` shape.
 * @see {@link AdminEnableUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminEnableUserCommand = /** @class */ (function (_super) {
    __extends(AdminEnableUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminEnableUserCommand(input) {
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
    AdminEnableUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminEnableUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminEnableUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminEnableUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminEnableUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminEnableUserCommand(input, context);
    };
    AdminEnableUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminEnableUserCommand(output, context);
    };
    return AdminEnableUserCommand;
}($Command));
export { AdminEnableUserCommand };
//# sourceMappingURL=AdminEnableUserCommand.js.map