import { __extends } from "tslib";
import { AttachVolumeRequest, VolumeAttachment } from "../models/models_0";
import { deserializeAws_ec2AttachVolumeCommand, serializeAws_ec2AttachVolumeCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance
 *       with the specified device name.</p>
 *          <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>After you attach an EBS volume, you must make it available. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Making an EBS volume available for use</a>.</p>
 *          <p>If a volume has an AWS Marketplace product code:</p>
 *          <ul>
 *             <li>
 *                <p>The volume can be attached only to a stopped instance.</p>
 *             </li>
 *             <li>
 *                <p>AWS Marketplace product codes are copied from the volume to the instance.</p>
 *             </li>
 *             <li>
 *                <p>You must be subscribed to the product.</p>
 *             </li>
 *             <li>
 *                <p>The instance type and operating system of the instance must support the product. For
 *           example, you can't detach a volume from a Windows instance and attach it to a Linux
 *           instance.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attaching Amazon EBS volumes</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachVolumeCommandInput} for command's `input` shape.
 * @see {@link AttachVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachVolumeCommand = /** @class */ (function (_super) {
    __extends(AttachVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachVolumeCommand(input) {
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
    AttachVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AttachVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VolumeAttachment.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AttachVolumeCommand(input, context);
    };
    AttachVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AttachVolumeCommand(output, context);
    };
    return AttachVolumeCommand;
}($Command));
export { AttachVolumeCommand };
//# sourceMappingURL=AttachVolumeCommand.js.map