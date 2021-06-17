import { __extends } from "tslib";
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAlarmModelCommand, serializeAws_restJson1CreateAlarmModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
 *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
 *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, CreateAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, CreateAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new CreateAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlarmModelCommandInput} for command's `input` shape.
 * @see {@link CreateAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAlarmModelCommand = /** @class */ (function (_super) {
    __extends(CreateAlarmModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAlarmModelCommand(input) {
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
    CreateAlarmModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "CreateAlarmModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAlarmModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAlarmModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAlarmModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAlarmModelCommand(input, context);
    };
    CreateAlarmModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAlarmModelCommand(output, context);
    };
    return CreateAlarmModelCommand;
}($Command));
export { CreateAlarmModelCommand };
//# sourceMappingURL=CreateAlarmModelCommand.js.map