import { __extends } from "tslib";
import { AdminForgetDeviceRequest } from "../models/models_0";
import { deserializeAws_json1_1AdminForgetDeviceCommand, serializeAws_json1_1AdminForgetDeviceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forgets the device, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminForgetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminForgetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminForgetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminForgetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminForgetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminForgetDeviceCommand = /** @class */ (function (_super) {
    __extends(AdminForgetDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminForgetDeviceCommand(input) {
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
    AdminForgetDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminForgetDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminForgetDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminForgetDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminForgetDeviceCommand(input, context);
    };
    AdminForgetDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminForgetDeviceCommand(output, context);
    };
    return AdminForgetDeviceCommand;
}($Command));
export { AdminForgetDeviceCommand };
//# sourceMappingURL=AdminForgetDeviceCommand.js.map