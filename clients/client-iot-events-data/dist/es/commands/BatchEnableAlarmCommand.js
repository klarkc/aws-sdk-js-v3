import { __extends } from "tslib";
import { BatchEnableAlarmRequest, BatchEnableAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchEnableAlarmCommand, serializeAws_restJson1BatchEnableAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
 *       enable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchEnableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchEnableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchEnableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEnableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchEnableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchEnableAlarmCommand = /** @class */ (function (_super) {
    __extends(BatchEnableAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchEnableAlarmCommand(input) {
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
    BatchEnableAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchEnableAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchEnableAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchEnableAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchEnableAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchEnableAlarmCommand(input, context);
    };
    BatchEnableAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchEnableAlarmCommand(output, context);
    };
    return BatchEnableAlarmCommand;
}($Command));
export { BatchEnableAlarmCommand };
//# sourceMappingURL=BatchEnableAlarmCommand.js.map