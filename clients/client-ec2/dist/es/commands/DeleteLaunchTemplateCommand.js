import { __extends } from "tslib";
import { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/models_1";
import { deserializeAws_ec2DeleteLaunchTemplateCommand, serializeAws_ec2DeleteLaunchTemplateCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a launch template. Deleting a launch template deletes all of its versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLaunchTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteLaunchTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLaunchTemplateCommand(input) {
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
    DeleteLaunchTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteLaunchTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLaunchTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLaunchTemplateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLaunchTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteLaunchTemplateCommand(input, context);
    };
    DeleteLaunchTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteLaunchTemplateCommand(output, context);
    };
    return DeleteLaunchTemplateCommand;
}($Command));
export { DeleteLaunchTemplateCommand };
//# sourceMappingURL=DeleteLaunchTemplateCommand.js.map