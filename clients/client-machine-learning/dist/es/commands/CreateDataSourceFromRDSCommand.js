import { __extends } from "tslib";
import { CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateDataSourceFromRDSCommand, serializeAws_json1_1CreateDataSourceFromRDSCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>,
 *          Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *             <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can
 *           be used only to perform <code>>CreateMLModel</code>>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *         <p>
 *           If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRDSCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromRDSCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromRDSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromRDSCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRDSCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataSourceFromRDSCommand = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromRDSCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataSourceFromRDSCommand(input) {
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
    CreateDataSourceFromRDSCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "CreateDataSourceFromRDSCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataSourceFromRDSInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataSourceFromRDSOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataSourceFromRDSCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDataSourceFromRDSCommand(input, context);
    };
    CreateDataSourceFromRDSCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDataSourceFromRDSCommand(output, context);
    };
    return CreateDataSourceFromRDSCommand;
}($Command));
export { CreateDataSourceFromRDSCommand };
//# sourceMappingURL=CreateDataSourceFromRDSCommand.js.map