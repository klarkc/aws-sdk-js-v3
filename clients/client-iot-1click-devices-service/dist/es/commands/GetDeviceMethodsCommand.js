import { __extends } from "tslib";
import { GetDeviceMethodsRequest, GetDeviceMethodsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDeviceMethodsCommand, serializeAws_restJson1GetDeviceMethodsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Given a device ID, returns the invokable methods associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new GetDeviceMethodsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceMethodsCommandInput} for command's `input` shape.
 * @see {@link GetDeviceMethodsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeviceMethodsCommand = /** @class */ (function (_super) {
    __extends(GetDeviceMethodsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeviceMethodsCommand(input) {
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
    GetDeviceMethodsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickDevicesServiceClient";
        var commandName = "GetDeviceMethodsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeviceMethodsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeviceMethodsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeviceMethodsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDeviceMethodsCommand(input, context);
    };
    GetDeviceMethodsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDeviceMethodsCommand(output, context);
    };
    return GetDeviceMethodsCommand;
}($Command));
export { GetDeviceMethodsCommand };
//# sourceMappingURL=GetDeviceMethodsCommand.js.map