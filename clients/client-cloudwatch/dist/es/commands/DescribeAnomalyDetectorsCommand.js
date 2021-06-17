import { __extends } from "tslib";
import { DescribeAnomalyDetectorsInput, DescribeAnomalyDetectorsOutput } from "../models/models_0";
import { deserializeAws_queryDescribeAnomalyDetectorsCommand, serializeAws_queryDescribeAnomalyDetectorsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the anomaly detection models that you have created in your account. You can list all
 * 			models in your account or filter the results to only the models that are related to a
 * 			certain namespace, metric name, or metric dimension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnomalyDetectorsCommand = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnomalyDetectorsCommand(input) {
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
    DescribeAnomalyDetectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DescribeAnomalyDetectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnomalyDetectorsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnomalyDetectorsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnomalyDetectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAnomalyDetectorsCommand(input, context);
    };
    DescribeAnomalyDetectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAnomalyDetectorsCommand(output, context);
    };
    return DescribeAnomalyDetectorsCommand;
}($Command));
export { DescribeAnomalyDetectorsCommand };
//# sourceMappingURL=DescribeAnomalyDetectorsCommand.js.map