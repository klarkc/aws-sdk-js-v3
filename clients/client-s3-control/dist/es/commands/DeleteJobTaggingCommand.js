import { __extends } from "tslib";
import { DeleteJobTaggingRequest, DeleteJobTaggingResult } from "../models/models_0";
import { deserializeAws_restXmlDeleteJobTaggingCommand, serializeAws_restXmlDeleteJobTaggingCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the entire tag set from the specified S3 Batch Operations job. To use this operation,
 *          you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteJobTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobTaggingCommand = /** @class */ (function (_super) {
    __extends(DeleteJobTaggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteJobTaggingCommand(input) {
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
    DeleteJobTaggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "DeleteJobTaggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteJobTaggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteJobTaggingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteJobTaggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlDeleteJobTaggingCommand(input, context);
    };
    DeleteJobTaggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlDeleteJobTaggingCommand(output, context);
    };
    return DeleteJobTaggingCommand;
}($Command));
export { DeleteJobTaggingCommand };
//# sourceMappingURL=DeleteJobTaggingCommand.js.map