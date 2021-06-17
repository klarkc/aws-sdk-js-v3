import { __extends } from "tslib";
import { GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessDeviceStatisticsCommand, serializeAws_restJson1GetWirelessDeviceStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets operating information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessDeviceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessDeviceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessDeviceStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetWirelessDeviceStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessDeviceStatisticsCommand(input) {
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
    GetWirelessDeviceStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessDeviceStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessDeviceStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessDeviceStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessDeviceStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessDeviceStatisticsCommand(input, context);
    };
    GetWirelessDeviceStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessDeviceStatisticsCommand(output, context);
    };
    return GetWirelessDeviceStatisticsCommand;
}($Command));
export { GetWirelessDeviceStatisticsCommand };
//# sourceMappingURL=GetWirelessDeviceStatisticsCommand.js.map