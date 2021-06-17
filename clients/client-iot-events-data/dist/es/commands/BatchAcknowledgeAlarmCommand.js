import { __extends } from "tslib";
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchAcknowledgeAlarmCommand, serializeAws_restJson1BatchAcknowledgeAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAcknowledgeAlarmCommand = /** @class */ (function (_super) {
    __extends(BatchAcknowledgeAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchAcknowledgeAlarmCommand(input) {
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
    BatchAcknowledgeAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchAcknowledgeAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchAcknowledgeAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchAcknowledgeAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchAcknowledgeAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchAcknowledgeAlarmCommand(input, context);
    };
    BatchAcknowledgeAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchAcknowledgeAlarmCommand(output, context);
    };
    return BatchAcknowledgeAlarmCommand;
}($Command));
export { BatchAcknowledgeAlarmCommand };
//# sourceMappingURL=BatchAcknowledgeAlarmCommand.js.map