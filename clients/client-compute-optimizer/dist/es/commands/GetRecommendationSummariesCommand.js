import { __extends } from "tslib";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import { deserializeAws_json1_0GetRecommendationSummariesCommand, serializeAws_json1_0GetRecommendationSummariesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the optimization findings for an account.</p>
 *         <p>It returns the number of:</p>
 *         <ul>
 *             <li>
 *                 <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>,
 *                         <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Lambda functions in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecommendationSummariesCommand = /** @class */ (function (_super) {
    __extends(GetRecommendationSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecommendationSummariesCommand(input) {
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
    GetRecommendationSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetRecommendationSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecommendationSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecommendationSummariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecommendationSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetRecommendationSummariesCommand(input, context);
    };
    GetRecommendationSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetRecommendationSummariesCommand(output, context);
    };
    return GetRecommendationSummariesCommand;
}($Command));
export { GetRecommendationSummariesCommand };
//# sourceMappingURL=GetRecommendationSummariesCommand.js.map