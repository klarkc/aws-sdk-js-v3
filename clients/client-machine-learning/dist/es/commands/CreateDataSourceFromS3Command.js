import { __extends } from "tslib";
import { CreateDataSourceFromS3Input, CreateDataSourceFromS3Output } from "../models/models_0";
import { deserializeAws_json1_1CreateDataSourceFromS3Command, serializeAws_json1_1CreateDataSourceFromS3Command, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that
 *           can be used to perform  <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or
 *           <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to
 *                 <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the
 *                 <code>DataSource</code> has been created and is ready for use, Amazon ML sets the
 *                 <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in
 *             the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only
 *                 <code>CreateMLModel</code>, <code>CreateEvaluation</code> or
 *                 <code>CreateBatchPrediction</code> operations. </p>
 *
 *         <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to
 *                 <code>FAILED</code> and includes an error message in the <code>Message</code>
 *             attribute of the <code>GetDataSource</code> operation response. </p>
 *
 *         <p>The observation data used in a <code>DataSource</code> should be ready to use; that is,
 *             it should have a consistent structure, and missing data values should be kept to a
 *             minimum. The observation data must reside in one or more .csv files in an Amazon Simple
 *             Storage Service (Amazon S3) location, along with a schema that describes the data items
 *             by name and type. The same schema must be used for all of the data files referenced by
 *             the <code>DataSource</code>. </p>
 *         <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and
 *             batch predictions. If you plan to use the <code>DataSource</code> to train an
 *                 <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe
 *             describes how each input variable will be used in training an <code>MLModel</code>. Will
 *             the variable be included or excluded from training? Will the variable be manipulated;
 *             for example, will it be combined with another variable or will it be split apart into
 *             word combinations? The recipe provides answers to these questions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromS3Command } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromS3Command } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromS3CommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromS3CommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataSourceFromS3Command = /** @class */ (function (_super) {
    __extends(CreateDataSourceFromS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataSourceFromS3Command(input) {
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
    CreateDataSourceFromS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "CreateDataSourceFromS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataSourceFromS3Input.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataSourceFromS3Output.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataSourceFromS3Command.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDataSourceFromS3Command(input, context);
    };
    CreateDataSourceFromS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDataSourceFromS3Command(output, context);
    };
    return CreateDataSourceFromS3Command;
}($Command));
export { CreateDataSourceFromS3Command };
//# sourceMappingURL=CreateDataSourceFromS3Command.js.map