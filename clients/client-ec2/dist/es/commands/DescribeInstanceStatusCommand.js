import { __extends } from "tslib";
import { DescribeInstanceStatusRequest, DescribeInstanceStatusResult } from "../models/models_2";
import { deserializeAws_ec2DescribeInstanceStatusCommand, serializeAws_ec2DescribeInstanceStatusCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status of the specified instances or all of your instances. By default,
 *             only running instances are described, unless you specifically indicate to return the
 *             status of all instances.</p>
 *         <p>Instance status includes the following components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Status checks</b> - Amazon EC2 performs status
 *                     checks on running EC2 instances to identify hardware and software issues. For
 *                     more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status checks for your instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshooting
 *                         instances with failed status checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Scheduled events</b> - Amazon EC2 can schedule
 *                     events (such as reboot, stop, or terminate) for your instances related to
 *                     hardware issues, software updates, or system maintenance. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled events for your instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Instance state</b> - You can manage your instances
 *                     from the moment you launch them through their termination. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance
 *                         lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceStatusCommand(input) {
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
    DescribeInstanceStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceStatusCommand(input, context);
    };
    DescribeInstanceStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceStatusCommand(output, context);
    };
    return DescribeInstanceStatusCommand;
}($Command));
export { DescribeInstanceStatusCommand };
//# sourceMappingURL=DescribeInstanceStatusCommand.js.map