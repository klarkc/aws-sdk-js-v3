import { __extends } from "tslib";
import { CreateWirelessGatewayRequest, CreateWirelessGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWirelessGatewayCommand, serializeAws_restJson1CreateWirelessGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWirelessGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateWirelessGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWirelessGatewayCommand(input) {
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
    CreateWirelessGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "CreateWirelessGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWirelessGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWirelessGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWirelessGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWirelessGatewayCommand(input, context);
    };
    CreateWirelessGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWirelessGatewayCommand(output, context);
    };
    return CreateWirelessGatewayCommand;
}($Command));
export { CreateWirelessGatewayCommand };
//# sourceMappingURL=CreateWirelessGatewayCommand.js.map