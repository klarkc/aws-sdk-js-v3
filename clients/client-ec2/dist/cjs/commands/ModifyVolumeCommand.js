"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVolumeCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You can modify several parameters of an existing EBS volume, including volume size, volume
 *       type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance
 *       type, you might be able to apply these changes without stopping the instance or detaching the
 *       volume from it. For more information about modifying an EBS volume running Linux, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html">Modifying the size, IOPS, or
 *         type of an EBS volume on Linux</a>. For more information about modifying an EBS volume
 *       running Windows, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html">Modifying the size, IOPS, or type of an EBS volume on Windows</a>.</p>
 *          <p> When you complete a resize operation on your volume, you need to extend the volume's
 *       file-system size to take advantage of the new storage capacity. For information about
 *       extending a Linux file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extending a Linux
 *         file system</a>. For information about extending a Windows file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extending a
 *         Windows file system</a>. </p>
 *          <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For
 *       information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a
 *       modification using <a>DescribeVolumesModifications</a>. For information
 *       about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume
 *         modifications</a>. </p>
 *          <p>With previous-generation instance types, resizing an EBS volume might require detaching and
 *       reattaching the volume or stopping and restarting the instance. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic
 *           Volumes</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows).</p>
 *          <p>If you reach the maximum volume modification rate per volume limit, you will need to wait
 *       at least six hours before applying further modifications to the affected EBS volume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVolumeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVolumeCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "ModifyVolumeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVolumeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVolumeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVolumeCommand(output, context);
    }
}
exports.ModifyVolumeCommand = ModifyVolumeCommand;
//# sourceMappingURL=ModifyVolumeCommand.js.map