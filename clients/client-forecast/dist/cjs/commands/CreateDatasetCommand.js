"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatasetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateDatasetCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "ForecastClient";
        const commandName = "CreateDatasetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDatasetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDatasetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDatasetCommand(output, context);
    }
}
exports.CreateDatasetCommand = CreateDatasetCommand;
//# sourceMappingURL=CreateDatasetCommand.js.map