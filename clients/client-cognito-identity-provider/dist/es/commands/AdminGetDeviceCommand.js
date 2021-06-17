import { __extends } from "tslib";
import { AdminGetDeviceRequest, AdminGetDeviceResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminGetDeviceCommand, serializeAws_json1_1AdminGetDeviceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the device, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminGetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminGetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminGetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminGetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminGetDeviceCommand = /** @class */ (function (_super) {
    __extends(AdminGetDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminGetDeviceCommand(input) {
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
    AdminGetDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminGetDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminGetDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminGetDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminGetDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminGetDeviceCommand(input, context);
    };
    AdminGetDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminGetDeviceCommand(output, context);
    };
    return AdminGetDeviceCommand;
}($Command));
export { AdminGetDeviceCommand };
//# sourceMappingURL=AdminGetDeviceCommand.js.map