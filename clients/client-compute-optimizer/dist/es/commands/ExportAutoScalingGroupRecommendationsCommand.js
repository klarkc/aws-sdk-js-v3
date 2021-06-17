import { __extends } from "tslib";
import { ExportAutoScalingGroupRecommendationsRequest, ExportAutoScalingGroupRecommendationsResponse, } from "../models/models_0";
import { deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand, serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports optimization recommendations for Auto Scaling groups.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Auto Scaling group export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportAutoScalingGroupRecommendationsCommand = /** @class */ (function (_super) {
    __extends(ExportAutoScalingGroupRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportAutoScalingGroupRecommendationsCommand(input) {
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
    ExportAutoScalingGroupRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "ExportAutoScalingGroupRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportAutoScalingGroupRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportAutoScalingGroupRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportAutoScalingGroupRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand(input, context);
    };
    ExportAutoScalingGroupRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand(output, context);
    };
    return ExportAutoScalingGroupRecommendationsCommand;
}($Command));
export { ExportAutoScalingGroupRecommendationsCommand };
//# sourceMappingURL=ExportAutoScalingGroupRecommendationsCommand.js.map