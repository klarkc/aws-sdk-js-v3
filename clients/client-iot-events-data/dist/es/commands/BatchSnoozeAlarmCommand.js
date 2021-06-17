import { __extends } from "tslib";
import { BatchSnoozeAlarmRequest, BatchSnoozeAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchSnoozeAlarmCommand, serializeAws_restJson1BatchSnoozeAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes one or more alarms to the snooze mode. The alarms change to the
 *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchSnoozeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchSnoozeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchSnoozeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSnoozeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchSnoozeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchSnoozeAlarmCommand = /** @class */ (function (_super) {
    __extends(BatchSnoozeAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchSnoozeAlarmCommand(input) {
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
    BatchSnoozeAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchSnoozeAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchSnoozeAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchSnoozeAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchSnoozeAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchSnoozeAlarmCommand(input, context);
    };
    BatchSnoozeAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchSnoozeAlarmCommand(output, context);
    };
    return BatchSnoozeAlarmCommand;
}($Command));
export { BatchSnoozeAlarmCommand };
//# sourceMappingURL=BatchSnoozeAlarmCommand.js.map