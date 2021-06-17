import { __extends } from "tslib";
import { DeleteAlarmModelRequest, DeleteAlarmModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAlarmModelCommand, serializeAws_restJson1DeleteAlarmModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
 *       are also deleted. This action can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DeleteAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlarmModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAlarmModelCommand = /** @class */ (function (_super) {
    __extends(DeleteAlarmModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAlarmModelCommand(input) {
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
    DeleteAlarmModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DeleteAlarmModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAlarmModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAlarmModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAlarmModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAlarmModelCommand(input, context);
    };
    DeleteAlarmModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAlarmModelCommand(output, context);
    };
    return DeleteAlarmModelCommand;
}($Command));
export { DeleteAlarmModelCommand };
//# sourceMappingURL=DeleteAlarmModelCommand.js.map