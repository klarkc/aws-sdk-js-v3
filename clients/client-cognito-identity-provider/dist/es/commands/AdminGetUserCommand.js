import { __extends } from "tslib";
import { AdminGetUserRequest, AdminGetUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminGetUserCommand, serializeAws_json1_1AdminGetUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the specified user by user name in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminGetUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminGetUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminGetUserCommandInput} for command's `input` shape.
 * @see {@link AdminGetUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminGetUserCommand = /** @class */ (function (_super) {
    __extends(AdminGetUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminGetUserCommand(input) {
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
    AdminGetUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminGetUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminGetUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminGetUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminGetUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminGetUserCommand(input, context);
    };
    AdminGetUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminGetUserCommand(output, context);
    };
    return AdminGetUserCommand;
}($Command));
export { AdminGetUserCommand };
//# sourceMappingURL=AdminGetUserCommand.js.map