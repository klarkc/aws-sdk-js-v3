import { __extends } from "tslib";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatasetImportJobCommand, serializeAws_json1_1CreateDatasetImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateDatasetImportJobCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetImportJobCommand(input) {
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
    CreateDatasetImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateDatasetImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDatasetImportJobCommand(input, context);
    };
    CreateDatasetImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDatasetImportJobCommand(output, context);
    };
    return CreateDatasetImportJobCommand;
}($Command));
export { CreateDatasetImportJobCommand };
//# sourceMappingURL=CreateDatasetImportJobCommand.js.map