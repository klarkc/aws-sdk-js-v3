import { __extends } from "tslib";
import { ListAlarmModelVersionsRequest, ListAlarmModelVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAlarmModelVersionsCommand, serializeAws_restJson1ListAlarmModelVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the versions of an alarm model. The operation returns only the metadata
 *       associated with each alarm model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAlarmModelVersionsCommand = /** @class */ (function (_super) {
    __extends(ListAlarmModelVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAlarmModelVersionsCommand(input) {
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
    ListAlarmModelVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListAlarmModelVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAlarmModelVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAlarmModelVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAlarmModelVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAlarmModelVersionsCommand(input, context);
    };
    ListAlarmModelVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAlarmModelVersionsCommand(output, context);
    };
    return ListAlarmModelVersionsCommand;
}($Command));
export { ListAlarmModelVersionsCommand };
//# sourceMappingURL=ListAlarmModelVersionsCommand.js.map