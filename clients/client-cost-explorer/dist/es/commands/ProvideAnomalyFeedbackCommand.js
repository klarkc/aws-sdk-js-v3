import { __extends } from "tslib";
import { ProvideAnomalyFeedbackRequest, ProvideAnomalyFeedbackResponse } from "../models/models_0";
import { deserializeAws_json1_1ProvideAnomalyFeedbackCommand, serializeAws_json1_1ProvideAnomalyFeedbackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ProvideAnomalyFeedbackCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ProvideAnomalyFeedbackCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new ProvideAnomalyFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvideAnomalyFeedbackCommandInput} for command's `input` shape.
 * @see {@link ProvideAnomalyFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ProvideAnomalyFeedbackCommand = /** @class */ (function (_super) {
    __extends(ProvideAnomalyFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ProvideAnomalyFeedbackCommand(input) {
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
    ProvideAnomalyFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "ProvideAnomalyFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ProvideAnomalyFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ProvideAnomalyFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ProvideAnomalyFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ProvideAnomalyFeedbackCommand(input, context);
    };
    ProvideAnomalyFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ProvideAnomalyFeedbackCommand(output, context);
    };
    return ProvideAnomalyFeedbackCommand;
}($Command));
export { ProvideAnomalyFeedbackCommand };
//# sourceMappingURL=ProvideAnomalyFeedbackCommand.js.map