import { __extends } from "tslib";
import { PutMetricStreamInput, PutMetricStreamOutput } from "../models/models_0";
import { deserializeAws_queryPutMetricStreamCommand, serializeAws_queryPutMetricStreamCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics
 * 			to AWS destinations including
 * 			Amazon S3 and to many third-party solutions.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Metric-Streams.html">
 * 		Using Metric Streams</a>.</p>
 * 		       <p>To create a metric stream,
 * 			you must be logged on to an account that has the <code>iam:PassRole</code> permission
 * 			and either the <code>CloudWatchFullAccess</code>
 * 		policy or the <code>cloudwatch:PutMetricStream</code>
 * 		permission.</p>
 * 		       <p>When you create or update a metric stream, you choose one of the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account, except
 * 				for the namespaces that you list in <code>ExcludeFilters</code>.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from only the metric namespaces that you list in
 * 				<code>IncludeFilters</code>.</p>
 *             </li>
 *          </ul>
 *
 * 		       <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream
 * 		is created in the <code>running</code> state. If you use it to update an existing stream,
 * 		the state of the stream is not changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricStreamCommandInput} for command's `input` shape.
 * @see {@link PutMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMetricStreamCommand = /** @class */ (function (_super) {
    __extends(PutMetricStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutMetricStreamCommand(input) {
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
    PutMetricStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "PutMetricStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutMetricStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutMetricStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutMetricStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPutMetricStreamCommand(input, context);
    };
    PutMetricStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPutMetricStreamCommand(output, context);
    };
    return PutMetricStreamCommand;
}($Command));
export { PutMetricStreamCommand };
//# sourceMappingURL=PutMetricStreamCommand.js.map