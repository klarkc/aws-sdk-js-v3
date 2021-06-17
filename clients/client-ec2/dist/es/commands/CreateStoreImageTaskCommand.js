import { __extends } from "tslib";
import { CreateStoreImageTaskRequest, CreateStoreImageTaskResult } from "../models/models_1";
import { deserializeAws_ec2CreateStoreImageTaskCommand, serializeAws_ec2CreateStoreImageTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stores an AMI as a single object in an S3 bucket.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using S3</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         S3</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateStoreImageTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateStoreImageTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateStoreImageTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStoreImageTaskCommandInput} for command's `input` shape.
 * @see {@link CreateStoreImageTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStoreImageTaskCommand = /** @class */ (function (_super) {
    __extends(CreateStoreImageTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStoreImageTaskCommand(input) {
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
    CreateStoreImageTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateStoreImageTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStoreImageTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStoreImageTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStoreImageTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateStoreImageTaskCommand(input, context);
    };
    CreateStoreImageTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateStoreImageTaskCommand(output, context);
    };
    return CreateStoreImageTaskCommand;
}($Command));
export { CreateStoreImageTaskCommand };
//# sourceMappingURL=CreateStoreImageTaskCommand.js.map