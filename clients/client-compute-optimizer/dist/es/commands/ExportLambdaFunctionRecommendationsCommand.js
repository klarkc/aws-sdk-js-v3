import { __extends } from "tslib";
import { ExportLambdaFunctionRecommendationsRequest, ExportLambdaFunctionRecommendationsResponse, } from "../models/models_0";
import { deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand, serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports optimization recommendations for AWS Lambda functions.</p>
 *
 *
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Lambda function export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportLambdaFunctionRecommendationsCommand = /** @class */ (function (_super) {
    __extends(ExportLambdaFunctionRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportLambdaFunctionRecommendationsCommand(input) {
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
    ExportLambdaFunctionRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "ExportLambdaFunctionRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportLambdaFunctionRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportLambdaFunctionRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportLambdaFunctionRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand(input, context);
    };
    ExportLambdaFunctionRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand(output, context);
    };
    return ExportLambdaFunctionRecommendationsCommand;
}($Command));
export { ExportLambdaFunctionRecommendationsCommand };
//# sourceMappingURL=ExportLambdaFunctionRecommendationsCommand.js.map