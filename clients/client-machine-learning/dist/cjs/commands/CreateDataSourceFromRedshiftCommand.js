"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataSourceFromRedshiftCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A
 * 		<code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code>
 * 		operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *           <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be
 *           used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *
 *         <p>
 *           If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code>
 * 		  attribute of the <code>GetDataSource</code> operation response.
 *         </p>
 *
 *         <p>The observations should be contained in the database hosted on an Amazon Redshift cluster
 *             and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an
 *                 <code>Unload</code> command in Amazon Redshift to transfer the result set of
 *                 the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p>
 *
 *         <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and
 *             batch predictions. If you plan to use the <code>DataSource</code> to train an
 *                 <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe
 *             describes how each input variable will be used in training an <code>MLModel</code>. Will
 *             the variable be included or excluded from training? Will the variable be manipulated;
 *             for example, will it be combined with another variable or will it be split apart into
 *             word combinations? The recipe provides answers to these questions.</p>
 *          <p>You can't change an existing datasource, but you can copy and modify the settings from an
 *             existing Amazon Redshift datasource to create a new datasource. To do so, call
 *                 <code>GetDataSource</code> for an existing datasource and copy the values to a
 *                 <code>CreateDataSource</code> call. Change the settings that you want to change and
 *             make sure that all required fields have the appropriate values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRedshiftCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromRedshiftCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromRedshiftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromRedshiftCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRedshiftCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDataSourceFromRedshiftCommand extends smithy_client_1.Command {
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
        const clientName = "MachineLearningClient";
        const commandName = "CreateDataSourceFromRedshiftCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDataSourceFromRedshiftInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDataSourceFromRedshiftOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDataSourceFromRedshiftCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDataSourceFromRedshiftCommand(output, context);
    }
}
exports.CreateDataSourceFromRedshiftCommand = CreateDataSourceFromRedshiftCommand;
//# sourceMappingURL=CreateDataSourceFromRedshiftCommand.js.map