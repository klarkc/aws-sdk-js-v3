import { __extends } from "tslib";
import { AdminRemoveUserFromGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1AdminRemoveUserFromGroupCommand, serializeAws_json1_1AdminRemoveUserFromGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified user from the specified group.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminRemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminRemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link AdminRemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminRemoveUserFromGroupCommand = /** @class */ (function (_super) {
    __extends(AdminRemoveUserFromGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminRemoveUserFromGroupCommand(input) {
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
    AdminRemoveUserFromGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminRemoveUserFromGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminRemoveUserFromGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminRemoveUserFromGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminRemoveUserFromGroupCommand(input, context);
    };
    AdminRemoveUserFromGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminRemoveUserFromGroupCommand(output, context);
    };
    return AdminRemoveUserFromGroupCommand;
}($Command));
export { AdminRemoveUserFromGroupCommand };
//# sourceMappingURL=AdminRemoveUserFromGroupCommand.js.map