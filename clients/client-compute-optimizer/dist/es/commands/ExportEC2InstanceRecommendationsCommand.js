import { __extends } from "tslib";
import { ExportEC2InstanceRecommendationsRequest, ExportEC2InstanceRecommendationsResponse } from "../models/models_0";
import { deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand, serializeAws_json1_0ExportEC2InstanceRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Amazon EC2 instance export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportEC2InstanceRecommendationsCommand = /** @class */ (function (_super) {
    __extends(ExportEC2InstanceRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportEC2InstanceRecommendationsCommand(input) {
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
    ExportEC2InstanceRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "ExportEC2InstanceRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportEC2InstanceRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportEC2InstanceRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportEC2InstanceRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExportEC2InstanceRecommendationsCommand(input, context);
    };
    ExportEC2InstanceRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand(output, context);
    };
    return ExportEC2InstanceRecommendationsCommand;
}($Command));
export { ExportEC2InstanceRecommendationsCommand };
//# sourceMappingURL=ExportEC2InstanceRecommendationsCommand.js.map