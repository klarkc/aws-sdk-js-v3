import { __extends } from "tslib";
import { GetAutoScalingGroupRecommendationsRequest, GetAutoScalingGroupRecommendationsResponse, } from "../models/models_0";
import { deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand, serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns Auto Scaling group recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific
 *             set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAutoScalingGroupRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetAutoScalingGroupRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAutoScalingGroupRecommendationsCommand(input) {
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
    GetAutoScalingGroupRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetAutoScalingGroupRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAutoScalingGroupRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAutoScalingGroupRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAutoScalingGroupRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(input, context);
    };
    GetAutoScalingGroupRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(output, context);
    };
    return GetAutoScalingGroupRecommendationsCommand;
}($Command));
export { GetAutoScalingGroupRecommendationsCommand };
//# sourceMappingURL=GetAutoScalingGroupRecommendationsCommand.js.map