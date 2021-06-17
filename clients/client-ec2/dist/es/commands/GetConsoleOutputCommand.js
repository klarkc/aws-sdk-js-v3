import { __extends } from "tslib";
import { GetConsoleOutputRequest, GetConsoleOutputResult } from "../models/models_4";
import { deserializeAws_ec2GetConsoleOutputCommand, serializeAws_ec2GetConsoleOutputCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the console output for the specified instance. For Linux instances, the instance
 *             console output displays the exact console output that would normally be displayed on a
 *             physical monitor attached to a computer. For Windows instances, the instance console
 *             output includes the last three system event log errors.</p>
 *         <p>By default, the console output returns buffered information that was posted shortly
 *             after an instance transition state (start, stop, reboot, or terminate). This information
 *             is available for at least one hour after the most recent post. Only the most recent 64
 *             KB of console output is available.</p>
 *         <p>You can optionally retrieve the latest serial console output at any time during the
 *             instance lifecycle. This option is supported on instance types that use the Nitro
 *             hypervisor.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
 *                 console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleOutputCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleOutputCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConsoleOutputCommandInput} for command's `input` shape.
 * @see {@link GetConsoleOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConsoleOutputCommand = /** @class */ (function (_super) {
    __extends(GetConsoleOutputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConsoleOutputCommand(input) {
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
    GetConsoleOutputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetConsoleOutputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConsoleOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConsoleOutputResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConsoleOutputCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetConsoleOutputCommand(input, context);
    };
    GetConsoleOutputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetConsoleOutputCommand(output, context);
    };
    return GetConsoleOutputCommand;
}($Command));
export { GetConsoleOutputCommand };
//# sourceMappingURL=GetConsoleOutputCommand.js.map