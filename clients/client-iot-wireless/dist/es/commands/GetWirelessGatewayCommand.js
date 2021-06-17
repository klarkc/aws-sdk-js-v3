import { __extends } from "tslib";
import { GetWirelessGatewayRequest, GetWirelessGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessGatewayCommand, serializeAws_restJson1GetWirelessGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessGatewayCommand = /** @class */ (function (_super) {
    __extends(GetWirelessGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessGatewayCommand(input) {
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
    GetWirelessGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessGatewayCommand(input, context);
    };
    GetWirelessGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessGatewayCommand(output, context);
    };
    return GetWirelessGatewayCommand;
}($Command));
export { GetWirelessGatewayCommand };
//# sourceMappingURL=GetWirelessGatewayCommand.js.map