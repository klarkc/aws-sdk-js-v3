import { __extends } from "tslib";
import { GetEBSVolumeRecommendationsRequest, GetEBSVolumeRecommendationsResponse } from "../models/models_0";
import { deserializeAws_json1_0GetEBSVolumeRecommendationsCommand, serializeAws_json1_0GetEBSVolumeRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific
 *             set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEBSVolumeRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEBSVolumeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEBSVolumeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEBSVolumeRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetEBSVolumeRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEBSVolumeRecommendationsCommand(input) {
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
    GetEBSVolumeRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetEBSVolumeRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEBSVolumeRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEBSVolumeRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEBSVolumeRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetEBSVolumeRecommendationsCommand(input, context);
    };
    GetEBSVolumeRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetEBSVolumeRecommendationsCommand(output, context);
    };
    return GetEBSVolumeRecommendationsCommand;
}($Command));
export { GetEBSVolumeRecommendationsCommand };
//# sourceMappingURL=GetEBSVolumeRecommendationsCommand.js.map