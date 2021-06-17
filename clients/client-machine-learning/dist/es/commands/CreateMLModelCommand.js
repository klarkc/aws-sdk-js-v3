import { __extends } from "tslib";
import { CreateMLModelInput, CreateMLModelOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateMLModelCommand, serializeAws_json1_1CreateMLModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as
 *             information sources. </p>
 *         <p>An <code>MLModel</code> is nearly immutable. Users can update only the
 *                 <code>MLModelName</code> and the <code>ScoreThreshold</code> in an
 *                 <code>MLModel</code> without creating a new <code>MLModel</code>. </p>
 *         <p>
 *             <code>CreateMLModel</code> is an asynchronous operation. In response to
 *                 <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns
 *             and sets the <code>MLModel</code> status to <code>PENDING</code>. After the
 *                 <code>MLModel</code> has been created and ready is for use, Amazon ML sets the
 *             status to <code>COMPLETED</code>. </p>
 *         <p>You can use the <code>GetMLModel</code> operation to check the progress of the
 *                 <code>MLModel</code> during the creation operation.</p>
 *
 *         <p>
 *            <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics,
 *           which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in
 *           <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or
 *           <code>CreateDataSourceFromRedshift</code> operations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMLModelCommandInput} for command's `input` shape.
 * @see {@link CreateMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMLModelCommand = /** @class */ (function (_super) {
    __extends(CreateMLModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMLModelCommand(input) {
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
    CreateMLModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "CreateMLModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMLModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMLModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMLModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMLModelCommand(input, context);
    };
    CreateMLModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMLModelCommand(output, context);
    };
    return CreateMLModelCommand;
}($Command));
export { CreateMLModelCommand };
//# sourceMappingURL=CreateMLModelCommand.js.map