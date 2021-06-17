"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatasetImportJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an
 *       Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an
 *       AWS Identity and Access Management (IAM) service role that has permission to read from the data source, as Amazon Personalize makes a
 *       copy of your data and processes it in an internal AWS system. For information on granting access
 *       to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize
 *       Access to Amazon S3 Resources</a>. </p>
 *          <important>
 *             <p>The dataset import job replaces any existing data in the dataset that you imported in bulk.</p>
 *          </important>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>,
 *       providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is
 *       complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job failed.</p>
 *          <note>
 *             <p>Importing takes time. You must wait until the status shows as ACTIVE before training a
 *         model using the dataset.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListDatasetImportJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDatasetImportJob</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDatasetImportJobCommand extends smithy_client_1.Command {
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
        const clientName = "PersonalizeClient";
        const commandName = "CreateDatasetImportJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDatasetImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDatasetImportJobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDatasetImportJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDatasetImportJobCommand(output, context);
    }
}
exports.CreateDatasetImportJobCommand = CreateDatasetImportJobCommand;
//# sourceMappingURL=CreateDatasetImportJobCommand.js.map