import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ExportCertificateRequest, ExportCertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ExportCertificateCommandInput extends ExportCertificateRequest {}
export interface ExportCertificateCommandOutput extends ExportCertificateResponse, __MetadataBearer {}
/**
 * <p>Exports a private certificate issued by a private certificate authority (CA) for use
 *       anywhere. The exported file contains the certificate, the certificate chain, and the encrypted
 *       private 2048-bit RSA key associated with the public key that is embedded in the certificate.
 *       For security, you must assign a passphrase for the private key when exporting it. </p>
 *          <p>For information about exporting and formatting a certificate using the ACM console or
 *       CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a
 *         Private Certificate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ExportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ExportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ExportCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportCertificateCommandInput} for command's `input` shape.
 * @see {@link ExportCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportCertificateCommand extends $Command<
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput,
  ACMClientResolvedConfig
> {
  readonly input: ExportCertificateCommandInput;
  constructor(input: ExportCertificateCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportCertificateCommandInput, ExportCertificateCommandOutput>;
  private serialize;
  private deserialize;
}
