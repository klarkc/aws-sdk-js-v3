import { __extends } from "tslib";
import { AdminListGroupsForUserRequest, AdminListGroupsForUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminListGroupsForUserCommand, serializeAws_json1_1AdminListGroupsForUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the groups that the user belongs to.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListGroupsForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link AdminListGroupsForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminListGroupsForUserCommand = /** @class */ (function (_super) {
    __extends(AdminListGroupsForUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminListGroupsForUserCommand(input) {
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
    AdminListGroupsForUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminListGroupsForUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminListGroupsForUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminListGroupsForUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminListGroupsForUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminListGroupsForUserCommand(input, context);
    };
    AdminListGroupsForUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminListGroupsForUserCommand(output, context);
    };
    return AdminListGroupsForUserCommand;
}($Command));
export { AdminListGroupsForUserCommand };
//# sourceMappingURL=AdminListGroupsForUserCommand.js.map