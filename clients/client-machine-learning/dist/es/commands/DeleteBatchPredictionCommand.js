import { __extends } from "tslib";
import { DeleteBatchPredictionInput, DeleteBatchPredictionOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteBatchPredictionCommand, serializeAws_json1_1DeleteBatchPredictionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a>
 *             operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p>
 *
 *         <p>
 *             <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBatchPredictionCommand = /** @class */ (function (_super) {
    __extends(DeleteBatchPredictionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBatchPredictionCommand(input) {
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
    DeleteBatchPredictionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DeleteBatchPredictionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBatchPredictionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBatchPredictionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBatchPredictionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteBatchPredictionCommand(input, context);
    };
    DeleteBatchPredictionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteBatchPredictionCommand(output, context);
    };
    return DeleteBatchPredictionCommand;
}($Command));
export { DeleteBatchPredictionCommand };
//# sourceMappingURL=DeleteBatchPredictionCommand.js.map