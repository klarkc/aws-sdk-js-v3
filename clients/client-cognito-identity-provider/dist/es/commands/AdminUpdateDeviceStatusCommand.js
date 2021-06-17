import { __extends } from "tslib";
import { AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminUpdateDeviceStatusCommand, serializeAws_json1_1AdminUpdateDeviceStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the device status as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateDeviceStatusCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminUpdateDeviceStatusCommand = /** @class */ (function (_super) {
    __extends(AdminUpdateDeviceStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminUpdateDeviceStatusCommand(input) {
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
    AdminUpdateDeviceStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminUpdateDeviceStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminUpdateDeviceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminUpdateDeviceStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminUpdateDeviceStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminUpdateDeviceStatusCommand(input, context);
    };
    AdminUpdateDeviceStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminUpdateDeviceStatusCommand(output, context);
    };
    return AdminUpdateDeviceStatusCommand;
}($Command));
export { AdminUpdateDeviceStatusCommand };
//# sourceMappingURL=AdminUpdateDeviceStatusCommand.js.map