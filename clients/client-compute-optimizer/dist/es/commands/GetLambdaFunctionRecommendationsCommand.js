import { __extends } from "tslib";
import { GetLambdaFunctionRecommendationsRequest, GetLambdaFunctionRecommendationsResponse } from "../models/models_0";
import { deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand, serializeAws_json1_0GetLambdaFunctionRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns AWS Lambda function recommendations.</p>
 *
 *
 *
 *         <p>AWS Compute Optimizer generates recommendations for functions that meet a specific set of
 *             requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLambdaFunctionRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetLambdaFunctionRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLambdaFunctionRecommendationsCommand(input) {
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
    GetLambdaFunctionRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetLambdaFunctionRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLambdaFunctionRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLambdaFunctionRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLambdaFunctionRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetLambdaFunctionRecommendationsCommand(input, context);
    };
    GetLambdaFunctionRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand(output, context);
    };
    return GetLambdaFunctionRecommendationsCommand;
}($Command));
export { GetLambdaFunctionRecommendationsCommand };
//# sourceMappingURL=GetLambdaFunctionRecommendationsCommand.js.map