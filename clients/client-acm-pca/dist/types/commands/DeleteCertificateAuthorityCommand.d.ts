import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DeleteCertificateAuthorityRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteCertificateAuthorityCommandInput extends DeleteCertificateAuthorityRequest {}
export interface DeleteCertificateAuthorityCommandOutput extends __MetadataBearer {}
/**
 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource
 * 			Name (ARN) of the private CA that you want to delete. You can find the ARN by calling
 * 			the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p>
 * 		       <note>
 * 			         <p>Deleting a CA will invalidate other CAs and certificates below it in your CA
 * 				hierarchy.</p>
 * 		       </note>
 * 		       <p>Before you can delete a CA that you have created and activated, you must disable it.
 * 			To do this, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p>
 * 		       <p>Additionally, you can delete a CA if you are waiting for it to be created (that is,
 * 			the status of the CA is <code>CREATING</code>). You can also delete it if the CA has
 * 			been created but you haven't yet imported the signed certificate into ACM Private CA (that is,
 * 			the status of the CA is <code>PENDING_CERTIFICATE</code>). </p>
 * 		       <p>When you successfully call <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to
 * 			<code>DELETED</code>. However, the CA won't be permanently deleted until the restoration
 * 			period has passed. By default, if you do not set the
 * 				<code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30
 * 			days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the
 * 			restoration window of a private CA in the <code>DELETED</code> state. To restore an
 * 			eligible CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DeleteCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DeleteCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new DeleteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCertificateAuthorityCommand extends $Command<
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: DeleteCertificateAuthorityCommandInput;
  constructor(input: DeleteCertificateAuthorityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput>;
  private serialize;
  private deserialize;
}
