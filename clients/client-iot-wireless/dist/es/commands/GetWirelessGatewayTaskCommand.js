import { __extends } from "tslib";
import { GetWirelessGatewayTaskRequest, GetWirelessGatewayTaskResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWirelessGatewayTaskCommand, serializeAws_restJson1GetWirelessGatewayTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a wireless gateway task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayTaskCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWirelessGatewayTaskCommand = /** @class */ (function (_super) {
    __extends(GetWirelessGatewayTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWirelessGatewayTaskCommand(input) {
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
    GetWirelessGatewayTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetWirelessGatewayTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWirelessGatewayTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWirelessGatewayTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWirelessGatewayTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWirelessGatewayTaskCommand(input, context);
    };
    GetWirelessGatewayTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWirelessGatewayTaskCommand(output, context);
    };
    return GetWirelessGatewayTaskCommand;
}($Command));
export { GetWirelessGatewayTaskCommand };
//# sourceMappingURL=GetWirelessGatewayTaskCommand.js.map