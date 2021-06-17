import { __extends } from "tslib";
import { CreateLaunchTemplateVersionRequest, CreateLaunchTemplateVersionResult } from "../models/models_1";
import { deserializeAws_ec2CreateLaunchTemplateVersionCommand, serializeAws_ec2CreateLaunchTemplateVersionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version for a launch template. You can specify an existing version of
 *             launch template from which to base the new version.</p>
 *         <p>Launch template versions are numbered in the order in which they are created. You
 *             cannot specify, change, or replace the numbering of launch template versions.</p>
 *         <p>For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Managing launch template versions</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLaunchTemplateVersionCommand = /** @class */ (function (_super) {
    __extends(CreateLaunchTemplateVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLaunchTemplateVersionCommand(input) {
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
    CreateLaunchTemplateVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateLaunchTemplateVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLaunchTemplateVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLaunchTemplateVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLaunchTemplateVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateLaunchTemplateVersionCommand(input, context);
    };
    CreateLaunchTemplateVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateLaunchTemplateVersionCommand(output, context);
    };
    return CreateLaunchTemplateVersionCommand;
}($Command));
export { CreateLaunchTemplateVersionCommand };
//# sourceMappingURL=CreateLaunchTemplateVersionCommand.js.map