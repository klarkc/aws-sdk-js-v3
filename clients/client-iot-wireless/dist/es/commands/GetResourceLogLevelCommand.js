import { __extends } from "tslib";
import { GetResourceLogLevelRequest, GetResourceLogLevelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceLogLevelCommand, serializeAws_restJson1GetResourceLogLevelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches the log-level override if any for a given resource-ID and resource-type, coulde be a wireless device or a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link GetResourceLogLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceLogLevelCommand = /** @class */ (function (_super) {
    __extends(GetResourceLogLevelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceLogLevelCommand(input) {
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
    GetResourceLogLevelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetResourceLogLevelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceLogLevelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceLogLevelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceLogLevelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceLogLevelCommand(input, context);
    };
    GetResourceLogLevelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceLogLevelCommand(output, context);
    };
    return GetResourceLogLevelCommand;
}($Command));
export { GetResourceLogLevelCommand };
//# sourceMappingURL=GetResourceLogLevelCommand.js.map