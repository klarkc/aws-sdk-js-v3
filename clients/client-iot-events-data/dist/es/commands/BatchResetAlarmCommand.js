import { __extends } from "tslib";
import { BatchResetAlarmRequest, BatchResetAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchResetAlarmCommand, serializeAws_restJson1BatchResetAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
 *       reset them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchResetAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchResetAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchResetAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchResetAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchResetAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchResetAlarmCommand = /** @class */ (function (_super) {
    __extends(BatchResetAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchResetAlarmCommand(input) {
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
    BatchResetAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchResetAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchResetAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchResetAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchResetAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchResetAlarmCommand(input, context);
    };
    BatchResetAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchResetAlarmCommand(output, context);
    };
    return BatchResetAlarmCommand;
}($Command));
export { BatchResetAlarmCommand };
//# sourceMappingURL=BatchResetAlarmCommand.js.map