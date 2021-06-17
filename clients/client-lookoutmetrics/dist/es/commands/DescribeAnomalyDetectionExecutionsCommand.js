import { __extends } from "tslib";
import { DescribeAnomalyDetectionExecutionsRequest, DescribeAnomalyDetectionExecutionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand, serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the status of the specified anomaly detection jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DescribeAnomalyDetectionExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyDetectionExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectionExecutionsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnomalyDetectionExecutionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAnomalyDetectionExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnomalyDetectionExecutionsCommand(input) {
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
    DescribeAnomalyDetectionExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "DescribeAnomalyDetectionExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnomalyDetectionExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnomalyDetectionExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnomalyDetectionExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand(input, context);
    };
    DescribeAnomalyDetectionExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand(output, context);
    };
    return DescribeAnomalyDetectionExecutionsCommand;
}($Command));
export { DescribeAnomalyDetectionExecutionsCommand };
//# sourceMappingURL=DescribeAnomalyDetectionExecutionsCommand.js.map