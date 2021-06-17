import { __extends } from "tslib";
import { ExportEBSVolumeRecommendationsRequest, ExportEBSVolumeRecommendationsResponse } from "../models/models_0";
import { deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand, serializeAws_json1_0ExportEBSVolumeRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports optimization recommendations for Amazon EBS volumes.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Amazon EBS volume export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportEBSVolumeRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportEBSVolumeRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportEBSVolumeRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportEBSVolumeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportEBSVolumeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportEBSVolumeRecommendationsCommand = /** @class */ (function (_super) {
    __extends(ExportEBSVolumeRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportEBSVolumeRecommendationsCommand(input) {
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
    ExportEBSVolumeRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "ExportEBSVolumeRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportEBSVolumeRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportEBSVolumeRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportEBSVolumeRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExportEBSVolumeRecommendationsCommand(input, context);
    };
    ExportEBSVolumeRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand(output, context);
    };
    return ExportEBSVolumeRecommendationsCommand;
}($Command));
export { ExportEBSVolumeRecommendationsCommand };
//# sourceMappingURL=ExportEBSVolumeRecommendationsCommand.js.map