"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCertificateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with
 *       ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated
 *         services</a> allow only certificate types and keys they support to be associated with
 *       their resources. Further, their support differs depending on whether the certificate is
 *       imported into IAM or into ACM. For more information, see the documentation for each
 *       service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing
 *         Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
 *
 *          <note>
 *             <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p>
 *          </note>
 *
 *          <p>Note the following guidelines when importing third party certificates:</p>
 *
 *
 *          <ul>
 *             <li>
 *                <p>You must enter the private key that matches the certificate you are importing.</p>
 *             </li>
 *             <li>
 *                <p>The private key must be unencrypted. You cannot import a private key that is protected
 *           by a password or a passphrase.</p>
 *             </li>
 *             <li>
 *                <p>The private key must be no larger than 5 KB (5,120 bytes).</p>
 *             </li>
 *             <li>
 *                <p>If the certificate you are importing is not self-signed, you must enter its
 *           certificate chain.</p>
 *             </li>
 *             <li>
 *                <p>If a certificate chain is included, the issuer must be the subject of one of the
 *           certificates in the chain.</p>
 *             </li>
 *             <li>
 *                <p>The certificate, private key, and certificate chain must be PEM-encoded.</p>
 *             </li>
 *             <li>
 *                <p>The current time must be between the <code>Not Before</code> and <code>Not
 *             After</code> certificate fields.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Issuer</code> field must not be empty.</p>
 *             </li>
 *             <li>
 *                <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p>
 *             </li>
 *             <li>
 *                <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include
 *           this argument only when you want to replace a previously imported certificate.</p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using the CLI, you must specify the certificate, the
 *           certificate chain, and the private key by their file names preceded by
 *             <code>fileb://</code>. For example, you can specify a certificate saved in the
 *             <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>.
 *           If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.
 *         </p>
 *             </li>
 *             <li>
 *                <p>When you import a certificate by using an SDK, you must specify the certificate, the
 *           certificate chain, and the private key files in the manner required by the programming
 *           language you're using. </p>
 *             </li>
 *             <li>
 *                <p>The cryptographic algorithm of an imported certificate must match the algorithm of the
 *           signing CA. For example, if the signing CA key type is RSA, then the certificate key type
 *           must also be RSA.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
 *         Resource Name (ARN)</a> of the imported certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ImportCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ImportCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ImportCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ImportCertificateCommand extends smithy_client_1.Command {
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
    const clientName = "ACMClient";
    const commandName = "ImportCertificateCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ImportCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ImportCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1ImportCertificateCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1ImportCertificateCommand(output, context);
  }
}
exports.ImportCertificateCommand = ImportCertificateCommand;
//# sourceMappingURL=ImportCertificateCommand.js.map
