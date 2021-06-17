import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateEnclaveCertificateIamRoleRequest, AssociateEnclaveCertificateIamRoleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateEnclaveCertificateIamRoleCommandInput extends AssociateEnclaveCertificateIamRoleRequest {
}
export interface AssociateEnclaveCertificateIamRoleCommandOutput extends AssociateEnclaveCertificateIamRoleResult, __MetadataBearer {
}
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
export declare class AssociateEnclaveCertificateIamRoleCommand extends $Command<AssociateEnclaveCertificateIamRoleCommandInput, AssociateEnclaveCertificateIamRoleCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateEnclaveCertificateIamRoleCommandInput;
    constructor(input: AssociateEnclaveCertificateIamRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateEnclaveCertificateIamRoleCommandInput, AssociateEnclaveCertificateIamRoleCommandOutput>;
    private serialize;
    private deserialize;
}
