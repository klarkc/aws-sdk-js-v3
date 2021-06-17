import { __extends } from "tslib";
import { UpdateAlarmModelRequest, UpdateAlarmModelResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateAlarmModelCommand, serializeAws_restJson1UpdateAlarmModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an alarm model. Any alarms that were created based on the previous version are
 *       deleted and then created again as new data arrives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new UpdateAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link UpdateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAlarmModelCommand = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAlarmModelCommand(input) {
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
    UpdateAlarmModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "UpdateAlarmModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAlarmModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAlarmModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAlarmModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAlarmModelCommand(input, context);
    };
    UpdateAlarmModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAlarmModelCommand(output, context);
    };
    return UpdateAlarmModelCommand;
}($Command));
export { UpdateAlarmModelCommand };
//# sourceMappingURL=UpdateAlarmModelCommand.js.map