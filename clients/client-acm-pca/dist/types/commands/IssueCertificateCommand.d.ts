import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { IssueCertificateRequest, IssueCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface IssueCertificateCommandInput extends IssueCertificateRequest {}
export interface IssueCertificateCommandOutput extends IssueCertificateResponse, __MetadataBearer {}
/**
 * <p>Uses your private certificate authority (CA), or one that has been shared with you, to
 * 			issue a client certificate. This action returns the Amazon Resource Name (ARN) of the
 * 			certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and
 * 			specifying the ARN. </p>
 * 		       <note>
 * 			         <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the
 * 				certificates that you issue by using ACM Private CA.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, IssueCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, IssueCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new IssueCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IssueCertificateCommandInput} for command's `input` shape.
 * @see {@link IssueCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class IssueCertificateCommand extends $Command<
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  readonly input: IssueCertificateCommandInput;
  constructor(input: IssueCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IssueCertificateCommandInput, IssueCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
