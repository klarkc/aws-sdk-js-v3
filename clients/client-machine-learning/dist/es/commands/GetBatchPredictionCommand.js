import { __extends } from "tslib";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/models_0";
import { deserializeAws_json1_1GetBatchPredictionCommand, serializeAws_json1_1GetBatchPredictionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
 *             <code>Batch Prediction</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBatchPredictionCommand = /** @class */ (function (_super) {
    __extends(GetBatchPredictionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBatchPredictionCommand(input) {
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
    GetBatchPredictionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "GetBatchPredictionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBatchPredictionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetBatchPredictionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBatchPredictionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBatchPredictionCommand(input, context);
    };
    GetBatchPredictionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBatchPredictionCommand(output, context);
    };
    return GetBatchPredictionCommand;
}($Command));
export { GetBatchPredictionCommand };
//# sourceMappingURL=GetBatchPredictionCommand.js.map