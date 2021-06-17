import { __extends } from "tslib";
import { GetJobTaggingRequest, GetJobTaggingResult } from "../models/models_0";
import { deserializeAws_restXmlGetJobTaggingCommand, serializeAws_restXmlGetJobTaggingCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the tags on an S3 Batch Operations job. To use this operation, you must have
 *          permission to perform the <code>s3:GetJobTagging</code> action. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
 *             access and labeling jobs using tags</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetJobTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobTaggingCommandInput} for command's `input` shape.
 * @see {@link GetJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobTaggingCommand = /** @class */ (function (_super) {
    __extends(GetJobTaggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobTaggingCommand(input) {
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
    GetJobTaggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetJobTaggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobTaggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobTaggingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobTaggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetJobTaggingCommand(input, context);
    };
    GetJobTaggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetJobTaggingCommand(output, context);
    };
    return GetJobTaggingCommand;
}($Command));
export { GetJobTaggingCommand };
//# sourceMappingURL=GetJobTaggingCommand.js.map