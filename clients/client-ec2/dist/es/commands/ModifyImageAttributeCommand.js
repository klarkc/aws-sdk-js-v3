import { __extends } from "tslib";
import { ModifyImageAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyImageAttributeCommand, serializeAws_ec2ModifyImageAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.
 *        You can use the <code>Attribute</code> parameter to specify the attribute or one of the following parameters:
 *        <code>Description</code>, <code>LaunchPermission</code>, or <code>ProductCode</code>.</p>
 *          <p>AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace product code cannot be made public.</p>
 *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance
 *        and create an AMI from the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyImageAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyImageAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyImageAttributeCommand(input) {
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
    ModifyImageAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyImageAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyImageAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyImageAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyImageAttributeCommand(input, context);
    };
    ModifyImageAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyImageAttributeCommand(output, context);
    };
    return ModifyImageAttributeCommand;
}($Command));
export { ModifyImageAttributeCommand };
//# sourceMappingURL=ModifyImageAttributeCommand.js.map