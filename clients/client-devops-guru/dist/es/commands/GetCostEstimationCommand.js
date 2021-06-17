import { __extends } from "tslib";
import { GetCostEstimationRequest, GetCostEstimationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCostEstimationCommand, serializeAws_restJson1GetCostEstimationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new GetCostEstimationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostEstimationCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCostEstimationCommand = /** @class */ (function (_super) {
    __extends(GetCostEstimationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCostEstimationCommand(input) {
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
    GetCostEstimationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "GetCostEstimationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCostEstimationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCostEstimationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCostEstimationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCostEstimationCommand(input, context);
    };
    GetCostEstimationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCostEstimationCommand(output, context);
    };
    return GetCostEstimationCommand;
}($Command));
export { GetCostEstimationCommand };
//# sourceMappingURL=GetCostEstimationCommand.js.map