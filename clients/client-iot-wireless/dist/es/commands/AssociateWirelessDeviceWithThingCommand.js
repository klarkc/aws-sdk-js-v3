import { __extends } from "tslib";
import { AssociateWirelessDeviceWithThingRequest, AssociateWirelessDeviceWithThingResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand, serializeAws_restJson1AssociateWirelessDeviceWithThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a wireless device with a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessDeviceWithThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessDeviceWithThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessDeviceWithThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessDeviceWithThingCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessDeviceWithThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateWirelessDeviceWithThingCommand = /** @class */ (function (_super) {
    __extends(AssociateWirelessDeviceWithThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateWirelessDeviceWithThingCommand(input) {
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
    AssociateWirelessDeviceWithThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "AssociateWirelessDeviceWithThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateWirelessDeviceWithThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateWirelessDeviceWithThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateWirelessDeviceWithThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateWirelessDeviceWithThingCommand(input, context);
    };
    AssociateWirelessDeviceWithThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand(output, context);
    };
    return AssociateWirelessDeviceWithThingCommand;
}($Command));
export { AssociateWirelessDeviceWithThingCommand };
//# sourceMappingURL=AssociateWirelessDeviceWithThingCommand.js.map