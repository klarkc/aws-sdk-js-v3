import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { RestoreCertificateAuthorityRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RestoreCertificateAuthorityCommandInput extends RestoreCertificateAuthorityRequest {}
export interface RestoreCertificateAuthorityCommandOutput extends __MetadataBearer {}
/**
 * <p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You
 * 			can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days.
 * 			If you did not specify a <b>PermanentDeletionTimeInDays</b>
 * 			value, by default you can restore the CA at any time in a 30 day period. You can check
 * 			the time remaining in the restoration period of a private CA in the <code>DELETED</code>
 * 			state by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to
 * 			its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to
 * 				<code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the
 * 				<code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate
 * 			authority into the private CA before it can be activated. You cannot restore a CA after
 * 			the restoration period has ended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RestoreCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RestoreCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new RestoreCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link RestoreCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreCertificateAuthorityCommand extends $Command<
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: RestoreCertificateAuthorityCommandInput;
  constructor(input: RestoreCertificateAuthorityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput>;
  private serialize;
  private deserialize;
}
