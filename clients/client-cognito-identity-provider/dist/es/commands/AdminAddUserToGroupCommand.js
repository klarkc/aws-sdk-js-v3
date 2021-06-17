import { __extends } from "tslib";
import { AdminAddUserToGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1AdminAddUserToGroupCommand, serializeAws_json1_1AdminAddUserToGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified user to the specified group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminAddUserToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminAddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AdminAddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminAddUserToGroupCommand = /** @class */ (function (_super) {
    __extends(AdminAddUserToGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminAddUserToGroupCommand(input) {
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
    AdminAddUserToGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminAddUserToGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminAddUserToGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminAddUserToGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminAddUserToGroupCommand(input, context);
    };
    AdminAddUserToGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminAddUserToGroupCommand(output, context);
    };
    return AdminAddUserToGroupCommand;
}($Command));
export { AdminAddUserToGroupCommand };
//# sourceMappingURL=AdminAddUserToGroupCommand.js.map