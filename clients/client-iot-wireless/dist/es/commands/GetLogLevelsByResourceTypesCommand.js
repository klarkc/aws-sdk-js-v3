import { __extends } from "tslib";
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLogLevelsByResourceTypesCommand, serializeAws_restJson1GetLogLevelsByResourceTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns current default log-levels, or log levels by resource types, could be for wireless device log options or wireless gateway log options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLogLevelsByResourceTypesCommand = /** @class */ (function (_super) {
    __extends(GetLogLevelsByResourceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLogLevelsByResourceTypesCommand(input) {
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
    GetLogLevelsByResourceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "GetLogLevelsByResourceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLogLevelsByResourceTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLogLevelsByResourceTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLogLevelsByResourceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLogLevelsByResourceTypesCommand(input, context);
    };
    GetLogLevelsByResourceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLogLevelsByResourceTypesCommand(output, context);
    };
    return GetLogLevelsByResourceTypesCommand;
}($Command));
export { GetLogLevelsByResourceTypesCommand };
//# sourceMappingURL=GetLogLevelsByResourceTypesCommand.js.map