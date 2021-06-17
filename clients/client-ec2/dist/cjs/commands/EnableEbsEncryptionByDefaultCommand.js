"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableEbsEncryptionByDefaultCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you enable encryption by default, the EBS volumes that you create are
 *       always encrypted, either using the default CMK or the CMK that you specified
 *       when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can specify the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a>
 *       or <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>Enabling encryption by default has no effect on the encryption status of your
 *       existing volumes.</p>
 *          <p>After you enable encryption by default, you can no longer launch instances
 *       using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
 *         instance types</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link EnableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableEbsEncryptionByDefaultCommand extends smithy_client_1.Command {
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
        const commandName = "EnableEbsEncryptionByDefaultCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.EnableEbsEncryptionByDefaultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.EnableEbsEncryptionByDefaultResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2EnableEbsEncryptionByDefaultCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2EnableEbsEncryptionByDefaultCommand(output, context);
    }
}
exports.EnableEbsEncryptionByDefaultCommand = EnableEbsEncryptionByDefaultCommand;
//# sourceMappingURL=EnableEbsEncryptionByDefaultCommand.js.map