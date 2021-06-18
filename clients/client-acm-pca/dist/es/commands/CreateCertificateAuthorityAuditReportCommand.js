import { __extends } from "tslib";
import {
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
  serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an audit report that lists every time that your CA private key is used. The
 * 			report is saved in the Amazon S3 bucket that you specify on input.
 *
 * 			The <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use
 * 			the private key. </p>
 *          <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 *
 * 		       <p>ACM Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit
 * 				Reports</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new CreateCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCertificateAuthorityAuditReportCommand = /** @class */ (function (_super) {
  __extends(CreateCertificateAuthorityAuditReportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateCertificateAuthorityAuditReportCommand(input) {
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
  CreateCertificateAuthorityAuditReportCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "CreateCertificateAuthorityAuditReportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityAuditReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityAuditReportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateCertificateAuthorityAuditReportCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(input, context);
  };
  CreateCertificateAuthorityAuditReportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(output, context);
  };
  return CreateCertificateAuthorityAuditReportCommand;
})($Command);
export { CreateCertificateAuthorityAuditReportCommand };
//# sourceMappingURL=CreateCertificateAuthorityAuditReportCommand.js.map
