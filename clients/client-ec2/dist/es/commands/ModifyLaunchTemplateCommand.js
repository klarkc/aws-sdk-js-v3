import { __extends } from "tslib";
import { ModifyLaunchTemplateRequest, ModifyLaunchTemplateResult } from "../models/models_4";
import { deserializeAws_ec2ModifyLaunchTemplateCommand, serializeAws_ec2ModifyLaunchTemplateCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a launch template. You can specify which version of the launch template to
 *             set as the default version. When launching an instance, the default version applies when
 *             a launch template version is not specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link ModifyLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyLaunchTemplateCommand = /** @class */ (function (_super) {
    __extends(ModifyLaunchTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyLaunchTemplateCommand(input) {
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
    ModifyLaunchTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyLaunchTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyLaunchTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyLaunchTemplateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyLaunchTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyLaunchTemplateCommand(input, context);
    };
    ModifyLaunchTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyLaunchTemplateCommand(output, context);
    };
    return ModifyLaunchTemplateCommand;
}($Command));
export { ModifyLaunchTemplateCommand };
//# sourceMappingURL=ModifyLaunchTemplateCommand.js.map