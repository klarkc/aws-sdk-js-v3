import { __extends } from "tslib";
import { EnableSerialConsoleAccessRequest, EnableSerialConsoleAccessResult } from "../models/models_4";
import { deserializeAws_ec2EnableSerialConsoleAccessCommand, serializeAws_ec2EnableSerialConsoleAccessCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a>
 * 			in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableSerialConsoleAccessCommand = /** @class */ (function (_super) {
    __extends(EnableSerialConsoleAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableSerialConsoleAccessCommand(input) {
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
    EnableSerialConsoleAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableSerialConsoleAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableSerialConsoleAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableSerialConsoleAccessResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableSerialConsoleAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableSerialConsoleAccessCommand(input, context);
    };
    EnableSerialConsoleAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableSerialConsoleAccessCommand(output, context);
    };
    return EnableSerialConsoleAccessCommand;
}($Command));
export { EnableSerialConsoleAccessCommand };
//# sourceMappingURL=EnableSerialConsoleAccessCommand.js.map