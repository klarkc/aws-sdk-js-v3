import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadSigningCertificateRequest, UploadSigningCertificateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UploadSigningCertificateCommandInput extends UploadSigningCertificateRequest {
}
export interface UploadSigningCertificateCommandOutput extends UploadSigningCertificateResponse, __MetadataBearer {
}
/**
 * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user.
 *             Some AWS services require you to use certificates to validate requests that are signed
 *             with a corresponding private key. When you upload the certificate, its default status is
 *                 <code>Active</code>.</p>
 *         <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing
 *                 server certificates in IAM</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>If the <code>UserName</code> is not specified, the IAM user name is determined
 *             implicitly based on the AWS access key ID used to sign the request. This operation
 *             works for access keys under the AWS account. Consequently, you can use this operation
 *             to manage AWS account root user credentials even if the AWS account has no
 *             associated users.</p>
 *         <note>
 *             <p>Because the body of an X.509 certificate can be large, you should use POST rather
 *                 than GET when calling <code>UploadSigningCertificate</code>. For information about
 *                 setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *                     AWS API requests</a> in the <i>AWS General Reference</i>. For
 *                 general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UploadSigningCertificateCommand extends $Command<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UploadSigningCertificateCommandInput;
    constructor(input: UploadSigningCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
