import { __extends } from "tslib";
import { CreateLaunchTemplateRequest, CreateLaunchTemplateResult } from "../models/models_1";
import { deserializeAws_ec2CreateLaunchTemplateCommand, serializeAws_ec2CreateLaunchTemplateCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a launch template. A launch template contains the parameters to launch an
 *             instance. When you launch an instance using <a>RunInstances</a>, you can
 *             specify a launch template instead of providing the launch parameters in the request. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a
 *                 launch template</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLaunchTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLaunchTemplateCommand(input) {
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
    CreateLaunchTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateLaunchTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLaunchTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLaunchTemplateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLaunchTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateLaunchTemplateCommand(input, context);
    };
    CreateLaunchTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateLaunchTemplateCommand(output, context);
    };
    return CreateLaunchTemplateCommand;
}($Command));
export { CreateLaunchTemplateCommand };
//# sourceMappingURL=CreateLaunchTemplateCommand.js.map