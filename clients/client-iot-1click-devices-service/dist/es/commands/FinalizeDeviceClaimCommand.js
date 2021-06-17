import { __extends } from "tslib";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/models_0";
import { deserializeAws_restJson1FinalizeDeviceClaimCommand, serializeAws_restJson1FinalizeDeviceClaimCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new FinalizeDeviceClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FinalizeDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link FinalizeDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FinalizeDeviceClaimCommand = /** @class */ (function (_super) {
    __extends(FinalizeDeviceClaimCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function FinalizeDeviceClaimCommand(input) {
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
    FinalizeDeviceClaimCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "FinalizeDeviceClaimCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FinalizeDeviceClaimRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FinalizeDeviceClaimResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FinalizeDeviceClaimCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1FinalizeDeviceClaimCommand(input, context);
    };
    FinalizeDeviceClaimCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1FinalizeDeviceClaimCommand(output, context);
    };
    return FinalizeDeviceClaimCommand;
}($Command));
export { FinalizeDeviceClaimCommand };
//# sourceMappingURL=FinalizeDeviceClaimCommand.js.map