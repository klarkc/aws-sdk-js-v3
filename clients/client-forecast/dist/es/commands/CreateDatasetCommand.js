import { __extends } from "tslib";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatasetCommand, serializeAws_json1_1CreateDatasetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps
 *       Forecast understand how to consume the data for model training. This includes the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>DataFrequency</code>
 *                   </i> - How frequently your historical
 *           time-series data is collected.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>Domain</code>
 *                   </i> and
 *             <i>
 *                      <code>DatasetType</code>
 *                   </i> - Each dataset has an associated dataset
 *           domain and a type within the domain. Amazon Forecast provides a list of predefined domains and
 *           types within each domain. For each unique dataset domain and type within the domain,
 *           Amazon Forecast requires your data to include a minimum set of predefined fields.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <code>Schema</code>
 *                   </i> - A schema specifies the fields in the dataset,
 *           including the field name and data type.</p>
 *             </li>
 *          </ul>
 *          <p>After creating a dataset, you import your training data into it and add the dataset to a
 *       dataset group. You use the dataset group to create a predictor. For more information, see
 *         <a>howitworks-datasets-groups</a>.</p>
 *          <p>To get a list of all your datasets, use the <a>ListDatasets</a>
 *       operation.</p>
 *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
 *         repository</a>.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
 *         training data. Use the <a>DescribeDataset</a> operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetCommand(input) {
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
    CreateDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "CreateDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDatasetCommand(input, context);
    };
    CreateDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDatasetCommand(output, context);
    };
    return CreateDatasetCommand;
}($Command));
export { CreateDatasetCommand };
//# sourceMappingURL=CreateDatasetCommand.js.map