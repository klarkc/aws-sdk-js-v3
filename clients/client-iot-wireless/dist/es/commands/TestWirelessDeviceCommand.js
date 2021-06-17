import { __extends } from "tslib";
import { TestWirelessDeviceRequest, TestWirelessDeviceResponse } from "../models/models_0";
import { deserializeAws_restJson1TestWirelessDeviceCommand, serializeAws_restJson1TestWirelessDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, TestWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, TestWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new TestWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link TestWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestWirelessDeviceCommand = /** @class */ (function (_super) {
    __extends(TestWirelessDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestWirelessDeviceCommand(input) {
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
    TestWirelessDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "TestWirelessDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestWirelessDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestWirelessDeviceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestWirelessDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TestWirelessDeviceCommand(input, context);
    };
    TestWirelessDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TestWirelessDeviceCommand(output, context);
    };
    return TestWirelessDeviceCommand;
}($Command));
export { TestWirelessDeviceCommand };
//# sourceMappingURL=TestWirelessDeviceCommand.js.map