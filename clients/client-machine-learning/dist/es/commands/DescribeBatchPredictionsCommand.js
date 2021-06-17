import { __extends } from "tslib";
import { DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeBatchPredictionsCommand, serializeAws_json1_1DescribeBatchPredictionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeBatchPredictionsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeBatchPredictionsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeBatchPredictionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBatchPredictionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchPredictionsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBatchPredictionsCommand = /** @class */ (function (_super) {
    __extends(DescribeBatchPredictionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBatchPredictionsCommand(input) {
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
    DescribeBatchPredictionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DescribeBatchPredictionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBatchPredictionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBatchPredictionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBatchPredictionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBatchPredictionsCommand(input, context);
    };
    DescribeBatchPredictionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBatchPredictionsCommand(output, context);
    };
    return DescribeBatchPredictionsCommand;
}($Command));
export { DescribeBatchPredictionsCommand };
//# sourceMappingURL=DescribeBatchPredictionsCommand.js.map