import { __extends } from "tslib";
import { AdminUserGlobalSignOutRequest, AdminUserGlobalSignOutResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminUserGlobalSignOutCommand, serializeAws_json1_1AdminUserGlobalSignOutCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Signs out users from all devices, as an administrator. It also invalidates all refresh
 *             tokens issued to a user. The user's current access and Id tokens remain valid until
 *             their expiry. Access and Id tokens expire one hour after they are issued.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUserGlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUserGlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link AdminUserGlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminUserGlobalSignOutCommand = /** @class */ (function (_super) {
    __extends(AdminUserGlobalSignOutCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminUserGlobalSignOutCommand(input) {
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
    AdminUserGlobalSignOutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminUserGlobalSignOutCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminUserGlobalSignOutRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminUserGlobalSignOutResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminUserGlobalSignOutCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminUserGlobalSignOutCommand(input, context);
    };
    AdminUserGlobalSignOutCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminUserGlobalSignOutCommand(output, context);
    };
    return AdminUserGlobalSignOutCommand;
}($Command));
export { AdminUserGlobalSignOutCommand };
//# sourceMappingURL=AdminUserGlobalSignOutCommand.js.map