import { __extends } from "tslib";
import { UpdateJobStatusRequest, UpdateJobStatusResult } from "../models/models_0";
import { deserializeAws_restXmlUpdateJobStatusCommand, serializeAws_restXmlUpdateJobStatusCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status for the specified job. Use this action to confirm that you want to
 *          run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateJobStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateJobStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new UpdateJobStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateJobStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateJobStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobStatusCommand(input) {
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
    UpdateJobStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "UpdateJobStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlUpdateJobStatusCommand(input, context);
    };
    UpdateJobStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlUpdateJobStatusCommand(output, context);
    };
    return UpdateJobStatusCommand;
}($Command));
export { UpdateJobStatusCommand };
//# sourceMappingURL=UpdateJobStatusCommand.js.map