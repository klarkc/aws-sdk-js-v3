import { __extends } from "tslib";
import { ImportCertificateAuthorityCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand,
  serializeAws_json1_1ImportCertificateAuthorityCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports a signed private CA certificate into ACM Private CA. This action is used when you are
 * 			using a chain of trust whose root is located outside ACM Private CA. Before you can call this
 * 			action, the following preparations must in place:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>In ACM Private CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you
 * 					plan to back with the imported certificate.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing
 * 					request (CSR).</p>
 * 			         </li>
 *             <li>
 * 				           <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises
 * 					PKI hierarchy or by a commercial CA.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Create a certificate chain and copy the signed certificate and the certificate
 * 					chain to your working directory.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>ACM Private CA supports three scenarios for installing a CA certificate:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Installing a certificate for a root CA hosted by ACM Private CA.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Installing a subordinate CA certificate whose parent authority is hosted by
 * 					ACM Private CA.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Installing a subordinate CA certificate whose parent authority is externally
 * 					hosted.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>The following additional requirements apply when you import a CA certificate.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Only a self-signed certificate can be imported as a root CA.</p>
 * 			         </li>
 *             <li>
 * 				           <p>A self-signed certificate cannot be imported as a subordinate CA.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your certificate chain must not include the private CA certificate that you
 * 					are importing.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your root CA must be the last certificate in your chain. The subordinate
 * 					certificate, if any, that your root CA signed must be next to last. The
 * 					subordinate certificate signed by the preceding subordinate CA must come next,
 * 					and so on until your chain is built. </p>
 * 			         </li>
 *             <li>
 * 				           <p>The chain must be PEM-encoded.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The maximum allowed size of a certificate is 32 KB.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The maximum allowed size of a certificate chain is 2 MB.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>
 *             <i>Enforcement of Critical Constraints</i>
 *          </p>
 * 		       <p>ACM Private CA allows the following extensions to be marked critical in the imported CA
 * 			certificate or chain.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Basic constraints (<i>must</i> be marked critical)</p>
 * 			         </li>
 *             <li>
 * 				           <p>Subject alternative names</p>
 * 			         </li>
 *             <li>
 * 				           <p>Key usage</p>
 * 			         </li>
 *             <li>
 * 				           <p>Extended key usage</p>
 * 			         </li>
 *             <li>
 * 				           <p>Authority key identifier</p>
 * 			         </li>
 *             <li>
 * 				           <p>Subject key identifier</p>
 * 			         </li>
 *             <li>
 * 				           <p>Issuer alternative name</p>
 * 			         </li>
 *             <li>
 * 				           <p>Subject directory attributes</p>
 * 			         </li>
 *             <li>
 * 				           <p>Subject information access</p>
 * 			         </li>
 *             <li>
 * 				           <p>Certificate policies</p>
 * 			         </li>
 *             <li>
 * 				           <p>Policy mappings</p>
 * 			         </li>
 *             <li>
 * 				           <p>Inhibit anyPolicy</p>
 * 			         </li>
 *          </ul>
 * 		       <p>ACM Private CA rejects the following extensions when they are marked critical in an imported CA
 * 			certificate or chain.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Name constraints</p>
 * 			         </li>
 *             <li>
 * 				           <p>Policy constraints</p>
 * 			         </li>
 *             <li>
 * 				           <p>CRL distribution points</p>
 * 			         </li>
 *             <li>
 * 				           <p>Authority information access</p>
 * 			         </li>
 *             <li>
 * 				           <p>Freshest CRL</p>
 * 			         </li>
 *             <li>
 * 				           <p>Any other extension</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ImportCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new ImportCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportCertificateAuthorityCertificateCommand = /** @class */ (function (_super) {
  __extends(ImportCertificateAuthorityCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportCertificateAuthorityCertificateCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  ImportCertificateAuthorityCertificateCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "ImportCertificateAuthorityCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportCertificateAuthorityCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportCertificateAuthorityCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ImportCertificateAuthorityCertificateCommand(input, context);
  };
  ImportCertificateAuthorityCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand(output, context);
  };
  return ImportCertificateAuthorityCertificateCommand;
})($Command);
export { ImportCertificateAuthorityCertificateCommand };
//# sourceMappingURL=ImportCertificateAuthorityCertificateCommand.js.map
