import { __extends } from "tslib";
import { DescribeRecommendationExportJobsRequest, DescribeRecommendationExportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeRecommendationExportJobsCommand, serializeAws_json1_0DescribeRecommendationExportJobsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes recommendation export jobs created in the last seven days.</p>
 *
 *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
 *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
 *             recommendations. Then use the <code>DescribeRecommendationExportJobs</code> action to
 *             view your export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new DescribeRecommendationExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecommendationExportJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecommendationExportJobsCommand = /** @class */ (function (_super) {
    __extends(DescribeRecommendationExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRecommendationExportJobsCommand(input) {
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
    DescribeRecommendationExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "DescribeRecommendationExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRecommendationExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRecommendationExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRecommendationExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeRecommendationExportJobsCommand(input, context);
    };
    DescribeRecommendationExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeRecommendationExportJobsCommand(output, context);
    };
    return DescribeRecommendationExportJobsCommand;
}($Command));
export { DescribeRecommendationExportJobsCommand };
//# sourceMappingURL=DescribeRecommendationExportJobsCommand.js.map