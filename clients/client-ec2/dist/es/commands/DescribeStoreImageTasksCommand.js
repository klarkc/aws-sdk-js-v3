import { __extends } from "tslib";
import { DescribeStoreImageTasksRequest, DescribeStoreImageTasksResult } from "../models/models_3";
import { deserializeAws_ec2DescribeStoreImageTasksCommand, serializeAws_ec2DescribeStoreImageTasksCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the progress of the AMI store tasks. You can describe the store tasks for
 *       specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from
 *       the last 31 days.</p>
 *          <p>For each AMI task, the response indicates if the task is <code>InProgress</code>,
 *         <code>Completed</code>, or <code>Failed</code>. For tasks <code>InProgress</code>, the
 *       response shows the estimated progress as a percentage.</p>
 *          <p>Tasks are listed in reverse chronological order. Currently, only tasks from the past 31
 *       days can be viewed.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStoreImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStoreImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeStoreImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStoreImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeStoreImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStoreImageTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeStoreImageTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStoreImageTasksCommand(input) {
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
    DescribeStoreImageTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeStoreImageTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStoreImageTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStoreImageTasksResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStoreImageTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeStoreImageTasksCommand(input, context);
    };
    DescribeStoreImageTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeStoreImageTasksCommand(output, context);
    };
    return DescribeStoreImageTasksCommand;
}($Command));
export { DescribeStoreImageTasksCommand };
//# sourceMappingURL=DescribeStoreImageTasksCommand.js.map