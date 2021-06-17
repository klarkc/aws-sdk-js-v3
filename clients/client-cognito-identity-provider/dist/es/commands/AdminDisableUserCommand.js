import { __extends } from "tslib";
import { AdminDisableUserRequest, AdminDisableUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminDisableUserCommand, serializeAws_json1_1AdminDisableUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDisableUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDisableUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDisableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDisableUserCommandInput} for command's `input` shape.
 * @see {@link AdminDisableUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminDisableUserCommand = /** @class */ (function (_super) {
    __extends(AdminDisableUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminDisableUserCommand(input) {
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
    AdminDisableUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminDisableUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminDisableUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminDisableUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminDisableUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminDisableUserCommand(input, context);
    };
    AdminDisableUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminDisableUserCommand(output, context);
    };
    return AdminDisableUserCommand;
}($Command));
export { AdminDisableUserCommand };
//# sourceMappingURL=AdminDisableUserCommand.js.map