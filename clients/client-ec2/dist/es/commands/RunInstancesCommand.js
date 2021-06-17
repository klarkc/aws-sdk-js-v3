import { __extends } from "tslib";
import { Reservation } from "../models/models_2";
import { RunInstancesRequest } from "../models/models_5";
import { deserializeAws_ec2RunInstancesCommand, serializeAws_ec2RunInstancesCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches the specified number of instances using an AMI for which you have
 *             permissions.</p>
 *         <p>You can specify a number of options, or leave the default options. The following rules
 *             apply:</p>
 *         <ul>
 *             <li>
 *                 <p>[EC2-VPC] If you don't specify a subnet ID, we choose a default subnet from
 *                     your default VPC for you. If you don't have a default VPC, you must specify a
 *                     subnet ID in the request.</p>
 *             </li>
 *             <li>
 *                 <p>[EC2-Classic] If don't specify an Availability Zone, we choose one for
 *                     you.</p>
 *             </li>
 *             <li>
 *                 <p>Some instance types must be launched into a VPC. If you do not have a default
 *                     VPC, or if you do not specify a subnet ID, the request fails. For more
 *                     information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types">Instance types available only in a VPC</a>.</p>
 *             </li>
 *             <li>
 *                 <p>[EC2-VPC] All instances have a network interface with a primary private IPv4
 *                     address. If you don't specify this address, we choose one from the IPv4 range of
 *                     your subnet.</p>
 *             </li>
 *             <li>
 *                 <p>Not all instance types support IPv6 addresses. For more information, see
 *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
 *                     types</a>.</p>
 *             </li>
 *             <li>
 *                 <p>If you don't specify a security group ID, we use the default security group.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security
 *                         groups</a>.</p>
 *             </li>
 *             <li>
 *                 <p>If any of the AMIs have a product code attached for which the user has not
 *                     subscribed, the request fails.</p>
 *             </li>
 *          </ul>
 *         <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>,
 *             which is a resource that contains the parameters to launch an instance. When you launch
 *             an instance using <a>RunInstances</a>, you can specify the launch template
 *             instead of specifying the launch parameters.</p>
 *         <p>To ensure faster instance launches, break up large requests into smaller batches. For
 *             example, create five separate launch requests for 100 instances each instead of one
 *             launch request for 500 instances.</p>
 *         <p>An instance is ready for you to use when it's in the <code>running</code> state. You
 *             can check the state of your instance using <a>DescribeInstances</a>. You can
 *             tag instances and EBS volumes during launch, after launch, or both. For more
 *             information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *                 resources</a>.</p>
 *         <p>Linux instances have access to the public key of the key pair at boot. You can use
 *             this key to provide secure access to the instance. Amazon EC2 public images use this
 *             feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key
 *                 pairs</a>.</p>
 *         <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What to do if
 *                 an instance immediately terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting connecting to your instance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RunInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunInstancesCommandInput} for command's `input` shape.
 * @see {@link RunInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RunInstancesCommand = /** @class */ (function (_super) {
    __extends(RunInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RunInstancesCommand(input) {
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
    RunInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RunInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RunInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Reservation.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RunInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RunInstancesCommand(input, context);
    };
    RunInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RunInstancesCommand(output, context);
    };
    return RunInstancesCommand;
}($Command));
export { RunInstancesCommand };
//# sourceMappingURL=RunInstancesCommand.js.map