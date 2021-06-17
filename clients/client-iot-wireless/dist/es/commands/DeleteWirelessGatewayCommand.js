import { __extends } from "tslib";
import { DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteWirelessGatewayCommand, serializeAws_restJson1DeleteWirelessGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DeleteWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWirelessGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteWirelessGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWirelessGatewayCommand(input) {
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
    DeleteWirelessGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "DeleteWirelessGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWirelessGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWirelessGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWirelessGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWirelessGatewayCommand(input, context);
    };
    DeleteWirelessGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWirelessGatewayCommand(output, context);
    };
    return DeleteWirelessGatewayCommand;
}($Command));
export { DeleteWirelessGatewayCommand };
//# sourceMappingURL=DeleteWirelessGatewayCommand.js.map