import { __extends } from "tslib";
import { UpdateBatchPredictionInput, UpdateBatchPredictionOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateBatchPredictionCommand, serializeAws_json1_1UpdateBatchPredictionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
 *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link UpdateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBatchPredictionCommand = /** @class */ (function (_super) {
    __extends(UpdateBatchPredictionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBatchPredictionCommand(input) {
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
    UpdateBatchPredictionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "UpdateBatchPredictionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBatchPredictionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBatchPredictionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBatchPredictionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateBatchPredictionCommand(input, context);
    };
    UpdateBatchPredictionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateBatchPredictionCommand(output, context);
    };
    return UpdateBatchPredictionCommand;
}($Command));
export { UpdateBatchPredictionCommand };
//# sourceMappingURL=UpdateBatchPredictionCommand.js.map