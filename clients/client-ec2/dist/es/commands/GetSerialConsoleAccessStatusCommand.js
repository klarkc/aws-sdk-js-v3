import { __extends } from "tslib";
import { GetSerialConsoleAccessStatusRequest, GetSerialConsoleAccessStatusResult } from "../models/models_4";
import { deserializeAws_ec2GetSerialConsoleAccessStatusCommand, serializeAws_ec2GetSerialConsoleAccessStatusCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the access status of your account to the EC2 serial console of all instances. By
 * 			default, access to the EC2 serial console is disabled for your account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSerialConsoleAccessStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSerialConsoleAccessStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetSerialConsoleAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSerialConsoleAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetSerialConsoleAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSerialConsoleAccessStatusCommand = /** @class */ (function (_super) {
    __extends(GetSerialConsoleAccessStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSerialConsoleAccessStatusCommand(input) {
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
    GetSerialConsoleAccessStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetSerialConsoleAccessStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSerialConsoleAccessStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSerialConsoleAccessStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSerialConsoleAccessStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetSerialConsoleAccessStatusCommand(input, context);
    };
    GetSerialConsoleAccessStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetSerialConsoleAccessStatusCommand(output, context);
    };
    return GetSerialConsoleAccessStatusCommand;
}($Command));
export { GetSerialConsoleAccessStatusCommand };
//# sourceMappingURL=GetSerialConsoleAccessStatusCommand.js.map