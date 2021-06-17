import { __extends } from "tslib";
import { InitiateDeviceClaimRequest, InitiateDeviceClaimResponse } from "../models/models_0";
import { deserializeAws_restJson1InitiateDeviceClaimCommand, serializeAws_restJson1InitiateDeviceClaimCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InitiateDeviceClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link InitiateDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitiateDeviceClaimCommand = /** @class */ (function (_super) {
    __extends(InitiateDeviceClaimCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InitiateDeviceClaimCommand(input) {
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
    InitiateDeviceClaimCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "InitiateDeviceClaimCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InitiateDeviceClaimRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InitiateDeviceClaimResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InitiateDeviceClaimCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InitiateDeviceClaimCommand(input, context);
    };
    InitiateDeviceClaimCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InitiateDeviceClaimCommand(output, context);
    };
    return InitiateDeviceClaimCommand;
}($Command));
export { InitiateDeviceClaimCommand };
//# sourceMappingURL=InitiateDeviceClaimCommand.js.map