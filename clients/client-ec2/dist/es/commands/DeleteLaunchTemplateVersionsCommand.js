import { __extends } from "tslib";
import { DeleteLaunchTemplateVersionsRequest, DeleteLaunchTemplateVersionsResult } from "../models/models_1";
import { deserializeAws_ec2DeleteLaunchTemplateVersionsCommand, serializeAws_ec2DeleteLaunchTemplateVersionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more versions of a launch template. You cannot delete the default
 *             version of a launch template; you must first assign a different version as the default.
 *             If the default version is the only version for the launch template, you must delete the
 *             entire launch template using <a>DeleteLaunchTemplate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLaunchTemplateVersionsCommand = /** @class */ (function (_super) {
    __extends(DeleteLaunchTemplateVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLaunchTemplateVersionsCommand(input) {
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
    DeleteLaunchTemplateVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteLaunchTemplateVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLaunchTemplateVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLaunchTemplateVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLaunchTemplateVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteLaunchTemplateVersionsCommand(input, context);
    };
    DeleteLaunchTemplateVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteLaunchTemplateVersionsCommand(output, context);
    };
    return DeleteLaunchTemplateVersionsCommand;
}($Command));
export { DeleteLaunchTemplateVersionsCommand };
//# sourceMappingURL=DeleteLaunchTemplateVersionsCommand.js.map