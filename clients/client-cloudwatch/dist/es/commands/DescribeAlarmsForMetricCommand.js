import { __extends } from "tslib";
import { DescribeAlarmsForMetricInput, DescribeAlarmsForMetricOutput } from "../models/models_0";
import { deserializeAws_queryDescribeAlarmsForMetricCommand, serializeAws_queryDescribeAlarmsForMetricCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the alarms for the specified metric. To
 * 			filter the results, specify a statistic, period, or unit.</p>
 * 		       <p>This operation retrieves only standard alarms that are based on
 * 		the specified metric. It does not return alarms based on math expressions that
 * 		use the specified metric, or composite alarms that use the specified metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsForMetricCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsForMetricCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmsForMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmsForMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsForMetricCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlarmsForMetricCommand = /** @class */ (function (_super) {
    __extends(DescribeAlarmsForMetricCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlarmsForMetricCommand(input) {
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
    DescribeAlarmsForMetricCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DescribeAlarmsForMetricCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlarmsForMetricInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlarmsForMetricOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlarmsForMetricCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAlarmsForMetricCommand(input, context);
    };
    DescribeAlarmsForMetricCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAlarmsForMetricCommand(output, context);
    };
    return DescribeAlarmsForMetricCommand;
}($Command));
export { DescribeAlarmsForMetricCommand };
//# sourceMappingURL=DescribeAlarmsForMetricCommand.js.map