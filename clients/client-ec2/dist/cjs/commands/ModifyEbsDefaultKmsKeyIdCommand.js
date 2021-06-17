"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyEbsDefaultKmsKeyIdCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p>
 *          <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If
 *       you change the default CMK to a symmetric customer managed CMK, it is used instead of the AWS
 *       managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric CMKs.</p>
 *          <p>If you delete or disable the customer managed CMK that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyEbsDefaultKmsKeyIdCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyEbsDefaultKmsKeyIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyEbsDefaultKmsKeyIdResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(output, context);
    }
}
exports.ModifyEbsDefaultKmsKeyIdCommand = ModifyEbsDefaultKmsKeyIdCommand;
//# sourceMappingURL=ModifyEbsDefaultKmsKeyIdCommand.js.map