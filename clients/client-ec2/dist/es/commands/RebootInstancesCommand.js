import { __extends } from "tslib";
import { RebootInstancesRequest } from "../models/models_4";
import { deserializeAws_ec2RebootInstancesCommand, serializeAws_ec2RebootInstancesCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a reboot of the specified instances. This operation is asynchronous; it only
 *             queues a request to reboot the specified instances. The operation succeeds if the
 *             instances are valid and belong to you. Requests to reboot terminated instances are
 *             ignored.</p>
 *         <p>If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a
 *             hard reboot.</p>
 *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html">Getting console output and
 *             rebooting instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RebootInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RebootInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RebootInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootInstancesCommandInput} for command's `input` shape.
 * @see {@link RebootInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootInstancesCommand = /** @class */ (function (_super) {
    __extends(RebootInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootInstancesCommand(input) {
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
    RebootInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RebootInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RebootInstancesCommand(input, context);
    };
    RebootInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RebootInstancesCommand(output, context);
    };
    return RebootInstancesCommand;
}($Command));
export { RebootInstancesCommand };
//# sourceMappingURL=RebootInstancesCommand.js.map