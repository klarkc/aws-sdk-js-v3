import { __extends } from "tslib";
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/models_0";
import { deserializeAws_restJson1ClaimDevicesByClaimCodeCommand, serializeAws_restJson1ClaimDevicesByClaimCodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 *  received a claim code with the device(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ClaimDevicesByClaimCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClaimDevicesByClaimCodeCommandInput} for command's `input` shape.
 * @see {@link ClaimDevicesByClaimCodeCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ClaimDevicesByClaimCodeCommand = /** @class */ (function (_super) {
    __extends(ClaimDevicesByClaimCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ClaimDevicesByClaimCodeCommand(input) {
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
    ClaimDevicesByClaimCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "ClaimDevicesByClaimCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ClaimDevicesByClaimCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ClaimDevicesByClaimCodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ClaimDevicesByClaimCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ClaimDevicesByClaimCodeCommand(input, context);
    };
    ClaimDevicesByClaimCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ClaimDevicesByClaimCodeCommand(output, context);
    };
    return ClaimDevicesByClaimCodeCommand;
}($Command));
export { ClaimDevicesByClaimCodeCommand };
//# sourceMappingURL=ClaimDevicesByClaimCodeCommand.js.map