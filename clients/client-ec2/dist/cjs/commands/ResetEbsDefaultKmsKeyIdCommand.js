"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetEbsDefaultKmsKeyIdCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Resets the default customer master key (CMK) for EBS encryption for your account in this Region
 *       to the AWS managed CMK for EBS.</p>
 *          <p>After resetting the default CMK to the AWS managed CMK, you can continue to encrypt by a
 *       customer managed CMK by specifying it when you create the volume. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ResetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResetEbsDefaultKmsKeyIdCommand extends smithy_client_1.Command {
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
        const commandName = "ResetEbsDefaultKmsKeyIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.ResetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.ResetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(output, context);
    }
}
exports.ResetEbsDefaultKmsKeyIdCommand = ResetEbsDefaultKmsKeyIdCommand;
//# sourceMappingURL=ResetEbsDefaultKmsKeyIdCommand.js.map