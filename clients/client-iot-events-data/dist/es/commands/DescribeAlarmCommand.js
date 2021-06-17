import { __extends } from "tslib";
import { DescribeAlarmRequest, DescribeAlarmResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAlarmCommand, serializeAws_restJson1DescribeAlarmCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new DescribeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlarmCommand = /** @class */ (function (_super) {
    __extends(DescribeAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlarmCommand(input) {
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
    DescribeAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "DescribeAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlarmResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAlarmCommand(input, context);
    };
    DescribeAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAlarmCommand(output, context);
    };
    return DescribeAlarmCommand;
}($Command));
export { DescribeAlarmCommand };
//# sourceMappingURL=DescribeAlarmCommand.js.map