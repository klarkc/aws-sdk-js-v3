import { __extends } from "tslib";
import { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/models_0";
import { deserializeAws_queryPutAnomalyDetectorCommand, serializeAws_queryPutAnomalyDetectorCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model
 * 			to display a band of expected normal values when the metric is graphed.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link PutAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(PutAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAnomalyDetectorCommand(input) {
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
    PutAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAnomalyDetectorInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutAnomalyDetectorOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutAnomalyDetectorCommand(input, context);
    };
    PutAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutAnomalyDetectorCommand(output, context);
    };
    return PutAnomalyDetectorCommand;
}($Command));
export { PutAnomalyDetectorCommand };
//# sourceMappingURL=PutAnomalyDetectorCommand.js.map