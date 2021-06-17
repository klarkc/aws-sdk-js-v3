import { __extends } from "tslib";
import { StartCostEstimationRequest, StartCostEstimationResponse } from "../models/models_0";
import { deserializeAws_restJson1StartCostEstimationCommand, serializeAws_restJson1StartCostEstimationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the creation of an estimate of the monthly cost to analyze your AWS resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, StartCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, StartCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new StartCostEstimationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCostEstimationCommandInput} for command's `input` shape.
 * @see {@link StartCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCostEstimationCommand = /** @class */ (function (_super) {
    __extends(StartCostEstimationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartCostEstimationCommand(input) {
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
    StartCostEstimationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "StartCostEstimationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartCostEstimationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartCostEstimationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartCostEstimationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartCostEstimationCommand(input, context);
    };
    StartCostEstimationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartCostEstimationCommand(output, context);
    };
    return StartCostEstimationCommand;
}($Command));
export { StartCostEstimationCommand };
//# sourceMappingURL=StartCostEstimationCommand.js.map