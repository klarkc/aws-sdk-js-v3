"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVolumeCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p>
 *          <p>You can create a new empty volume or restore a volume from an EBS snapshot.
 *       Any AWS Marketplace product codes from the snapshot are propagated to the volume.</p>
 *          <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that
 *       support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically
 *       encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Creating an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateVolumeCommand extends smithy_client_1.Command {
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
        const commandName = "CreateVolumeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.Volume.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateVolumeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateVolumeCommand(output, context);
    }
}
exports.CreateVolumeCommand = CreateVolumeCommand;
//# sourceMappingURL=CreateVolumeCommand.js.map