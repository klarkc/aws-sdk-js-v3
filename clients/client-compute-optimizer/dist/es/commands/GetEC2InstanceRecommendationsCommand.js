import { __extends } from "tslib";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/models_0";
import { deserializeAws_json1_0GetEC2InstanceRecommendationsCommand, serializeAws_json1_0GetEC2InstanceRecommendationsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns Amazon EC2 instance recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet
 *             a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
 *                 resources and requirements</a> in the <i>AWS Compute Optimizer User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEC2InstanceRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetEC2InstanceRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEC2InstanceRecommendationsCommand(input) {
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
    GetEC2InstanceRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetEC2InstanceRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEC2InstanceRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEC2InstanceRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEC2InstanceRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetEC2InstanceRecommendationsCommand(input, context);
    };
    GetEC2InstanceRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetEC2InstanceRecommendationsCommand(output, context);
    };
    return GetEC2InstanceRecommendationsCommand;
}($Command));
export { GetEC2InstanceRecommendationsCommand };
//# sourceMappingURL=GetEC2InstanceRecommendationsCommand.js.map