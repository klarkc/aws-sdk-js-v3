import { __extends } from "tslib";
import { GetWirelessGatewayStatisticsRequest, GetWirelessGatewayStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessGatewayStatisticsCommand, serializeAws_restJson1GetWirelessGatewayStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets operating information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessGatewayStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetWirelessGatewayStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessGatewayStatisticsCommand(input) {
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
    GetWirelessGatewayStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessGatewayStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessGatewayStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessGatewayStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessGatewayStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessGatewayStatisticsCommand(input, context);
    };
    GetWirelessGatewayStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessGatewayStatisticsCommand(output, context);
    };
    return GetWirelessGatewayStatisticsCommand;
}($Command));
export { GetWirelessGatewayStatisticsCommand };
//# sourceMappingURL=GetWirelessGatewayStatisticsCommand.js.map