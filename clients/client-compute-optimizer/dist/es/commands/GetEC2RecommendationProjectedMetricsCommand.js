import { __extends } from "tslib";
import { GetEC2RecommendationProjectedMetricsRequest, GetEC2RecommendationProjectedMetricsResponse, } from "../models/models_0";
import { deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand, serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run this action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                 CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
 *                     Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEC2RecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEC2RecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetEC2RecommendationProjectedMetricsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEC2RecommendationProjectedMetricsCommand = /** @class */ (function (_super) {
    __extends(GetEC2RecommendationProjectedMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEC2RecommendationProjectedMetricsCommand(input) {
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
    GetEC2RecommendationProjectedMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetEC2RecommendationProjectedMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEC2RecommendationProjectedMetricsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEC2RecommendationProjectedMetricsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEC2RecommendationProjectedMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(input, context);
    };
    GetEC2RecommendationProjectedMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(output, context);
    };
    return GetEC2RecommendationProjectedMetricsCommand;
}($Command));
export { GetEC2RecommendationProjectedMetricsCommand };
//# sourceMappingURL=GetEC2RecommendationProjectedMetricsCommand.js.map