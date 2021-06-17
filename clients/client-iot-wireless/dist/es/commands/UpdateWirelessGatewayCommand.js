import { __extends } from "tslib";
import { UpdateWirelessGatewayRequest, UpdateWirelessGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateWirelessGatewayCommand, serializeAws_restJson1UpdateWirelessGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties of a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWirelessGatewayCommand = /** @class */ (function (_super) {
    __extends(UpdateWirelessGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWirelessGatewayCommand(input) {
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
    UpdateWirelessGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "UpdateWirelessGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWirelessGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWirelessGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWirelessGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateWirelessGatewayCommand(input, context);
    };
    UpdateWirelessGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateWirelessGatewayCommand(output, context);
    };
    return UpdateWirelessGatewayCommand;
}($Command));
export { UpdateWirelessGatewayCommand };
//# sourceMappingURL=UpdateWirelessGatewayCommand.js.map