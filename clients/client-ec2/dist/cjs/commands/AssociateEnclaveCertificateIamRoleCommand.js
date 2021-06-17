"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateEnclaveCertificateIamRoleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate.
 * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">AWS Certificate
 * 				Manager for Nitro Enclaves</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
 *
 * 		       <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted
 * 			private key are placed in an Amazon S3 bucket that only the associated IAM role can access. The private key of the certificate
 * 			is encrypted with an AWS-managed KMS customer master (CMK) that has an attached attestation-based CMK policy.</p>
 *
 * 		       <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
 * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the AWS KMS CMK, you must
 * 			grant it permission to call <code>kms:Decrypt</code> on the AWS KMS CMK returned by the command. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
 * 				Grant the role permission to access the certificate and encryption key</a> in the
 * 			<i>AWS Nitro Enclaves User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateEnclaveCertificateIamRoleCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateEnclaveCertificateIamRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(output, context);
    }
}
exports.AssociateEnclaveCertificateIamRoleCommand = AssociateEnclaveCertificateIamRoleCommand;
//# sourceMappingURL=AssociateEnclaveCertificateIamRoleCommand.js.map