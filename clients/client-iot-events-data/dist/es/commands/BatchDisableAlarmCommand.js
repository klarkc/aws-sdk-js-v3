import { __extends } from "tslib";
import { BatchDisableAlarmRequest, BatchDisableAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDisableAlarmCommand, serializeAws_restJson1BatchDisableAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
 *       you disable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchDisableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchDisableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchDisableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchDisableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisableAlarmCommand = /** @class */ (function (_super) {
    __extends(BatchDisableAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDisableAlarmCommand(input) {
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
    BatchDisableAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchDisableAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDisableAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDisableAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDisableAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDisableAlarmCommand(input, context);
    };
    BatchDisableAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDisableAlarmCommand(output, context);
    };
    return BatchDisableAlarmCommand;
}($Command));
export { BatchDisableAlarmCommand };
//# sourceMappingURL=BatchDisableAlarmCommand.js.map