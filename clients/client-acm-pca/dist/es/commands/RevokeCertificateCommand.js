import { __extends } from "tslib";
import { RevokeCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RevokeCertificateCommand,
  serializeAws_json1_1RevokeCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate
 * 			revocation list (CRL) when you create or update your private CA, information about the
 * 			revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket
 * 			that you specify. A CRL is typically updated approximately 30 minutes after a
 * 			certificate is revoked. If for any reason the CRL update fails, ACM Private CA attempts makes
 * 			further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the
 * 			metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more
 * 			information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p>
 *          <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 *          <p>ACM Private CA also writes
 * 			revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p>
 * 		       <note>
 * 			         <p>You cannot revoke a root CA self-signed certificate.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RevokeCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RevokeCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new RevokeCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeCertificateCommandInput} for command's `input` shape.
 * @see {@link RevokeCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeCertificateCommand = /** @class */ (function (_super) {
  __extends(RevokeCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RevokeCertificateCommand(input) {
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
  RevokeCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "RevokeCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RevokeCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RevokeCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RevokeCertificateCommand(input, context);
  };
  RevokeCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RevokeCertificateCommand(output, context);
  };
  return RevokeCertificateCommand;
})($Command);
export { RevokeCertificateCommand };
//# sourceMappingURL=RevokeCertificateCommand.js.map
