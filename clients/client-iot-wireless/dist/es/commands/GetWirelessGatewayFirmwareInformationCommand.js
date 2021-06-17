import { __extends } from "tslib";
import { GetWirelessGatewayFirmwareInformationRequest, GetWirelessGatewayFirmwareInformationResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand, serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the firmware version and other information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayFirmwareInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayFirmwareInformationCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayFirmwareInformationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessGatewayFirmwareInformationCommand = /** @class */ (function (_super) {
    __extends(GetWirelessGatewayFirmwareInformationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessGatewayFirmwareInformationCommand(input) {
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
    GetWirelessGatewayFirmwareInformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessGatewayFirmwareInformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessGatewayFirmwareInformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(input, context);
    };
    GetWirelessGatewayFirmwareInformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(output, context);
    };
    return GetWirelessGatewayFirmwareInformationCommand;
}($Command));
export { GetWirelessGatewayFirmwareInformationCommand };
//# sourceMappingURL=GetWirelessGatewayFirmwareInformationCommand.js.map