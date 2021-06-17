import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetAssociatedEnclaveCertificateIamRolesRequest, GetAssociatedEnclaveCertificateIamRolesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAssociatedEnclaveCertificateIamRolesCommandInput extends GetAssociatedEnclaveCertificateIamRolesRequest {
}
export interface GetAssociatedEnclaveCertificateIamRolesCommandOutput extends GetAssociatedEnclaveCertificateIamRolesResult, __MetadataBearer {
}
/**
 * <p>Returns the IAM roles that are associated with the specified AWS Certificate Manager (ACM) certificate.
 * 			It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain,
 * 			and encrypted private key bundle are stored, and the ARN of the AWS Key Management Service (KMS) customer master key (CMK)
 * 			that's used to encrypt the private key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedEnclaveCertificateIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssociatedEnclaveCertificateIamRolesCommand extends $Command<GetAssociatedEnclaveCertificateIamRolesCommandInput, GetAssociatedEnclaveCertificateIamRolesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetAssociatedEnclaveCertificateIamRolesCommandInput;
    constructor(input: GetAssociatedEnclaveCertificateIamRolesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociatedEnclaveCertificateIamRolesCommandInput, GetAssociatedEnclaveCertificateIamRolesCommandOutput>;
    private serialize;
    private deserialize;
}
