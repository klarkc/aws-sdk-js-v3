import { __extends } from "tslib";
import { UpdateLogLevelsByResourceTypesRequest, UpdateLogLevelsByResourceTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand, serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Set default log level, or log levels by resource types, could be for wireless device log options or wireless gateways log options. This is to control the log messages that will be displayed in CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link UpdateLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLogLevelsByResourceTypesCommand = /** @class */ (function (_super) {
    __extends(UpdateLogLevelsByResourceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLogLevelsByResourceTypesCommand(input) {
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
    UpdateLogLevelsByResourceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "UpdateLogLevelsByResourceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLogLevelsByResourceTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLogLevelsByResourceTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLogLevelsByResourceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand(input, context);
    };
    UpdateLogLevelsByResourceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand(output, context);
    };
    return UpdateLogLevelsByResourceTypesCommand;
}($Command));
export { UpdateLogLevelsByResourceTypesCommand };
//# sourceMappingURL=UpdateLogLevelsByResourceTypesCommand.js.map