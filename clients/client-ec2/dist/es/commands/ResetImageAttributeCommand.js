import { __extends } from "tslib";
import { ResetImageAttributeRequest } from "../models/models_5";
import { deserializeAws_ec2ResetImageAttributeCommand, serializeAws_ec2ResetImageAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets an attribute of an AMI to its default value.</p>
 *          <note>
 *             <p>The productCodes attribute can't be reset.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetImageAttributeCommand = /** @class */ (function (_super) {
    __extends(ResetImageAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetImageAttributeCommand(input) {
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
    ResetImageAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ResetImageAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetImageAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetImageAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ResetImageAttributeCommand(input, context);
    };
    ResetImageAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ResetImageAttributeCommand(output, context);
    };
    return ResetImageAttributeCommand;
}($Command));
export { ResetImageAttributeCommand };
//# sourceMappingURL=ResetImageAttributeCommand.js.map