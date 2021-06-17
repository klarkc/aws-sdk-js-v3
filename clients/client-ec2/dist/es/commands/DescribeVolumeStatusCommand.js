import { __extends } from "tslib";
import { DescribeVolumeStatusRequest, DescribeVolumeStatusResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVolumeStatusCommand, serializeAws_ec2DescribeVolumeStatusCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status of the specified volumes. Volume status provides the result of the
 *       checks performed on your volumes to determine events that can impair the performance of your
 *       volumes. The performance of a volume can be affected if an issue occurs on the volume's
 *       underlying host. If the volume's underlying host experiences a power outage or system issue,
 *       after the system is restored, there could be data inconsistencies on the volume. Volume events
 *       notify you if this occurs. Volume actions notify you if any action needs to be taken in
 *       response to the event.</p>
 *          <p>The <code>DescribeVolumeStatus</code> operation provides the following information about
 *       the specified volumes:</p>
 *          <p>
 *             <i>Status</i>: Reflects the current status of the volume. The possible
 *       values are <code>ok</code>, <code>impaired</code> , <code>warning</code>, or
 *         <code>insufficient-data</code>. If all checks pass, the overall status of the volume is
 *         <code>ok</code>. If the check fails, the overall status is <code>impaired</code>. If the
 *       status is <code>insufficient-data</code>, then the checks might still be taking place on your
 *       volume at the time. We recommend that you retry the request. For more information about volume
 *       status, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html">Monitoring the status of your volumes</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>
 *             <i>Events</i>: Reflect the cause of a volume status and might require you to
 *       take action. For example, if your volume returns an <code>impaired</code> status, then the
 *       volume event might be <code>potential-data-inconsistency</code>. This means that your volume
 *       has been affected by an issue with the underlying host, has all I/O operations disabled, and
 *       might have inconsistent data.</p>
 *          <p>
 *             <i>Actions</i>: Reflect the actions you might have to take in response to an
 *       event. For example, if the status of the volume is <code>impaired</code> and the volume event
 *       shows <code>potential-data-inconsistency</code>, then the action shows
 *         <code>enable-volume-io</code>. This means that you may want to enable the I/O operations for
 *       the volume by calling the <a>EnableVolumeIO</a> action and then check the volume
 *       for data consistency.</p>
 *          <p>Volume status is based on the volume status checks, and does not reflect the volume state.
 *       Therefore, volume status does not indicate volumes in the <code>error</code> state (for
 *       example, when a volume is incapable of accepting I/O.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumeStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumeStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumeStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumeStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumeStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVolumeStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeVolumeStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVolumeStatusCommand(input) {
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
    DescribeVolumeStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVolumeStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVolumeStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVolumeStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVolumeStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVolumeStatusCommand(input, context);
    };
    DescribeVolumeStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVolumeStatusCommand(output, context);
    };
    return DescribeVolumeStatusCommand;
}($Command));
export { DescribeVolumeStatusCommand };
//# sourceMappingURL=DescribeVolumeStatusCommand.js.map