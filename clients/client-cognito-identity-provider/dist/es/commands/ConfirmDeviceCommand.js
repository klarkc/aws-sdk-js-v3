import { __extends } from "tslib";
import { ConfirmDeviceRequest, ConfirmDeviceResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmDeviceCommand, serializeAws_json1_1ConfirmDeviceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms tracking of the device. This API call is the call that begins device
 *             tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ConfirmDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmDeviceCommandInput} for command's `input` shape.
 * @see {@link ConfirmDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmDeviceCommand = /** @class */ (function (_super) {
    __extends(ConfirmDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmDeviceCommand(input) {
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
    ConfirmDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ConfirmDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmDeviceCommand(input, context);
    };
    ConfirmDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmDeviceCommand(output, context);
    };
    return ConfirmDeviceCommand;
}($Command));
export { ConfirmDeviceCommand };
//# sourceMappingURL=ConfirmDeviceCommand.js.map