import { __extends } from "tslib";
import { CreateRestoreImageTaskRequest, CreateRestoreImageTaskResult } from "../models/models_1";
import { deserializeAws_ec2CreateRestoreImageTaskCommand, serializeAws_ec2CreateRestoreImageTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a task that restores an AMI from an S3 object that was previously created by using
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *       S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRestoreImageTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRestoreImageTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRestoreImageTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRestoreImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreImageTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRestoreImageTaskCommand = /** @class */ (function (_super) {
    __extends(CreateRestoreImageTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRestoreImageTaskCommand(input) {
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
    CreateRestoreImageTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateRestoreImageTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRestoreImageTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRestoreImageTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRestoreImageTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateRestoreImageTaskCommand(input, context);
    };
    CreateRestoreImageTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateRestoreImageTaskCommand(output, context);
    };
    return CreateRestoreImageTaskCommand;
}($Command));
export { CreateRestoreImageTaskCommand };
//# sourceMappingURL=CreateRestoreImageTaskCommand.js.map