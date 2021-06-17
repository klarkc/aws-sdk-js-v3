import { __extends } from "tslib";
import { AdminDeleteUserRequest } from "../models/models_0";
import { deserializeAws_json1_1AdminDeleteUserCommand, serializeAws_json1_1AdminDeleteUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a user as an administrator. Works on any user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDeleteUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDeleteUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminDeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminDeleteUserCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminDeleteUserCommand = /** @class */ (function (_super) {
    __extends(AdminDeleteUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminDeleteUserCommand(input) {
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
    AdminDeleteUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminDeleteUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminDeleteUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminDeleteUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminDeleteUserCommand(input, context);
    };
    AdminDeleteUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminDeleteUserCommand(output, context);
    };
    return AdminDeleteUserCommand;
}($Command));
export { AdminDeleteUserCommand };
//# sourceMappingURL=AdminDeleteUserCommand.js.map