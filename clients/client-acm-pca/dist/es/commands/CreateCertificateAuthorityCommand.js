import { __extends } from "tslib";
import { CreateCertificateAuthorityRequest, CreateCertificateAuthorityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityCommand,
  serializeAws_json1_1CreateCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a root or subordinate private certificate authority (CA). You must specify the
 * 			CA configuration, the certificate revocation list (CRL) configuration, the CA type, and
 * 			an optional idempotency token to avoid accidental creation of multiple CAs. The CA
 * 			configuration specifies the name of the algorithm and key size to be used to create the
 * 			CA private key, the type of signing algorithm that the CA uses, and X.500 subject
 * 			information. The CRL configuration specifies the CRL expiration period in days (the
 * 			validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME
 * 			alias for the S3 bucket that is included in certificates issued by the CA. If
 * 			successful, this action returns the Amazon Resource Name (ARN) of the CA.</p>
 * 		       <p>ACM Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 *          <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new CreateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCertificateAuthorityCommand = /** @class */ (function (_super) {
  __extends(CreateCertificateAuthorityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateCertificateAuthorityCommand(input) {
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
  CreateCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "CreateCertificateAuthorityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateCertificateAuthorityCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateCertificateAuthorityCommand(input, context);
  };
  CreateCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateCertificateAuthorityCommand(output, context);
  };
  return CreateCertificateAuthorityCommand;
})($Command);
export { CreateCertificateAuthorityCommand };
//# sourceMappingURL=CreateCertificateAuthorityCommand.js.map
