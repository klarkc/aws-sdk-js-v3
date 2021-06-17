"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportVolumeCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an import volume task using metadata from the specified disk image.</p>
 *          <p>This API action supports only single-volume VMs. To import multi-volume VMs, use
 *    <a>ImportImage</a> instead. To import a disk to a snapshot, use
 *    <a>ImportSnapshot</a> instead.</p>
 *          <p>This API action is not supported by the AWS Command Line Interface (AWS CLI). For
 *    information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportVolumeCommandInput} for command's `input` shape.
 * @see {@link ImportVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportVolumeCommand extends smithy_client_1.Command {
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
        const commandName = "ImportVolumeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ImportVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ImportVolumeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ImportVolumeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ImportVolumeCommand(output, context);
    }
}
exports.ImportVolumeCommand = ImportVolumeCommand;
//# sourceMappingURL=ImportVolumeCommand.js.map