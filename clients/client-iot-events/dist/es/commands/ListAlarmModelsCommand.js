import { __extends } from "tslib";
import { ListAlarmModelsRequest, ListAlarmModelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAlarmModelsCommand, serializeAws_restJson1ListAlarmModelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the alarm models that you created. The operation returns only the metadata
 *       associated with each alarm model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAlarmModelsCommand = /** @class */ (function (_super) {
    __extends(ListAlarmModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAlarmModelsCommand(input) {
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
    ListAlarmModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListAlarmModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAlarmModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAlarmModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAlarmModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAlarmModelsCommand(input, context);
    };
    ListAlarmModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAlarmModelsCommand(output, context);
    };
    return ListAlarmModelsCommand;
}($Command));
export { ListAlarmModelsCommand };
//# sourceMappingURL=ListAlarmModelsCommand.js.map