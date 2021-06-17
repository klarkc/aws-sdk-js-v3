import { __extends } from "tslib";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeMetricFiltersCommand, serializeAws_json1_1DescribeMetricFiltersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the specified metric filters. You can list all of the metric filters or filter
 *       the results by log name, prefix, metric name, or metric namespace. The results are
 *       ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeMetricFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeMetricFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeMetricFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMetricFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMetricFiltersCommand = /** @class */ (function (_super) {
    __extends(DescribeMetricFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMetricFiltersCommand(input) {
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
    DescribeMetricFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DescribeMetricFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMetricFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMetricFiltersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMetricFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMetricFiltersCommand(input, context);
    };
    DescribeMetricFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMetricFiltersCommand(output, context);
    };
    return DescribeMetricFiltersCommand;
}($Command));
export { DescribeMetricFiltersCommand };
//# sourceMappingURL=DescribeMetricFiltersCommand.js.map