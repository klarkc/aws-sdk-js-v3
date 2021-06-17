import { __extends } from "tslib";
import { DisableSerialConsoleAccessRequest, DisableSerialConsoleAccessResult } from "../models/models_4";
import { deserializeAws_ec2DisableSerialConsoleAccessCommand, serializeAws_ec2DisableSerialConsoleAccessCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link DisableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableSerialConsoleAccessCommand = /** @class */ (function (_super) {
    __extends(DisableSerialConsoleAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableSerialConsoleAccessCommand(input) {
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
    DisableSerialConsoleAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableSerialConsoleAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableSerialConsoleAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableSerialConsoleAccessResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableSerialConsoleAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableSerialConsoleAccessCommand(input, context);
    };
    DisableSerialConsoleAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableSerialConsoleAccessCommand(output, context);
    };
    return DisableSerialConsoleAccessCommand;
}($Command));
export { DisableSerialConsoleAccessCommand };
//# sourceMappingURL=DisableSerialConsoleAccessCommand.js.map