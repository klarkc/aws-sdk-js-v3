import { __extends } from "tslib";
import { CreateReplaceRootVolumeTaskRequest, CreateReplaceRootVolumeTaskResult } from "../models/models_1";
import { deserializeAws_ec2CreateReplaceRootVolumeTaskCommand, serializeAws_ec2CreateReplaceRootVolumeTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a root volume replacement task for an Amazon EC2 instance. The root volume
 *       can either be restored to its initial launch state, or it can be restored using a
 *       specific snapshot.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/">Replace a root volume</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReplaceRootVolumeTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReplaceRootVolumeTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReplaceRootVolumeTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplaceRootVolumeTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplaceRootVolumeTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplaceRootVolumeTaskCommand = /** @class */ (function (_super) {
    __extends(CreateReplaceRootVolumeTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplaceRootVolumeTaskCommand(input) {
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
    CreateReplaceRootVolumeTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateReplaceRootVolumeTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplaceRootVolumeTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplaceRootVolumeTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplaceRootVolumeTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateReplaceRootVolumeTaskCommand(input, context);
    };
    CreateReplaceRootVolumeTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateReplaceRootVolumeTaskCommand(output, context);
    };
    return CreateReplaceRootVolumeTaskCommand;
}($Command));
export { CreateReplaceRootVolumeTaskCommand };
//# sourceMappingURL=CreateReplaceRootVolumeTaskCommand.js.map