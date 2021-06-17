import { __extends } from "tslib";
import { DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput } from "../models/models_0";
import { deserializeAws_queryDescribeAlarmHistoryCommand, serializeAws_queryDescribeAlarmHistoryCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type.
 * 			If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p>
 * 		       <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmHistoryCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmHistoryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlarmHistoryCommand = /** @class */ (function (_super) {
    __extends(DescribeAlarmHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlarmHistoryCommand(input) {
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
    DescribeAlarmHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DescribeAlarmHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlarmHistoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlarmHistoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlarmHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAlarmHistoryCommand(input, context);
    };
    DescribeAlarmHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAlarmHistoryCommand(output, context);
    };
    return DescribeAlarmHistoryCommand;
}($Command));
export { DescribeAlarmHistoryCommand };
//# sourceMappingURL=DescribeAlarmHistoryCommand.js.map