import { __extends } from "tslib";
import { CreateDatasetExportJobRequest, CreateDatasetExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatasetExportJobCommand, serializeAws_json1_1CreateDatasetExportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates a job that exports data from your dataset to an Amazon S3 bucket.
 *       To allow Amazon Personalize to export the training data, you must specify an
 *       service-linked AWS Identity and Access Management (IAM) role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket.
 *       For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a>
 *       in the Amazon Personalize developer guide.
 *     </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>
 *       To get the status of the export job, call <a>DescribeDatasetExportJob</a>,
 *       and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is
 *       complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job failed.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetExportJobCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetExportJobCommand(input) {
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
    CreateDatasetExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateDatasetExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDatasetExportJobCommand(input, context);
    };
    CreateDatasetExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDatasetExportJobCommand(output, context);
    };
    return CreateDatasetExportJobCommand;
}($Command));
export { CreateDatasetExportJobCommand };
//# sourceMappingURL=CreateDatasetExportJobCommand.js.map