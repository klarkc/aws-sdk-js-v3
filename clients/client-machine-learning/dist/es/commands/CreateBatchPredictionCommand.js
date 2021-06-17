import { __extends } from "tslib";
import { CreateBatchPredictionInput, CreateBatchPredictionOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateBatchPredictionCommand, serializeAws_json1_1CreateBatchPredictionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced
 *             by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data
 *             files referenced by the <code>DataSource</code> as information sources.
 *         </p>
 *
 *         <p>
 *             <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>,
 *         Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>.
 *         After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears,
 *             the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBatchPredictionCommand = /** @class */ (function (_super) {
    __extends(CreateBatchPredictionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBatchPredictionCommand(input) {
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
    CreateBatchPredictionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "CreateBatchPredictionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBatchPredictionInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBatchPredictionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBatchPredictionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBatchPredictionCommand(input, context);
    };
    CreateBatchPredictionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBatchPredictionCommand(output, context);
    };
    return CreateBatchPredictionCommand;
}($Command));
export { CreateBatchPredictionCommand };
//# sourceMappingURL=CreateBatchPredictionCommand.js.map