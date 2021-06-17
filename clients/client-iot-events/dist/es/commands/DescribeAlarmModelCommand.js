import { __extends } from "tslib";
import { DescribeAlarmModelRequest, DescribeAlarmModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAlarmModelCommand, serializeAws_restJson1DescribeAlarmModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an alarm model. If you don't specify a value for the
 *         <code>alarmModelVersion</code> parameter, the latest version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlarmModelCommand = /** @class */ (function (_super) {
    __extends(DescribeAlarmModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlarmModelCommand(input) {
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
    DescribeAlarmModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DescribeAlarmModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlarmModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlarmModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlarmModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAlarmModelCommand(input, context);
    };
    DescribeAlarmModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAlarmModelCommand(output, context);
    };
    return DescribeAlarmModelCommand;
}($Command));
export { DescribeAlarmModelCommand };
//# sourceMappingURL=DescribeAlarmModelCommand.js.map