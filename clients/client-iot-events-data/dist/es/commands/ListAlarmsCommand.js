import { __extends } from "tslib";
import { ListAlarmsRequest, ListAlarmsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAlarmsCommand, serializeAws_restJson1ListAlarmsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists one or more alarms. The operation returns only the metadata associated with each
 *       alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, ListAlarmsCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, ListAlarmsCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new ListAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAlarmsCommand = /** @class */ (function (_super) {
    __extends(ListAlarmsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAlarmsCommand(input) {
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
    ListAlarmsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "ListAlarmsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAlarmsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAlarmsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAlarmsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAlarmsCommand(input, context);
    };
    ListAlarmsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAlarmsCommand(output, context);
    };
    return ListAlarmsCommand;
}($Command));
export { ListAlarmsCommand };
//# sourceMappingURL=ListAlarmsCommand.js.map