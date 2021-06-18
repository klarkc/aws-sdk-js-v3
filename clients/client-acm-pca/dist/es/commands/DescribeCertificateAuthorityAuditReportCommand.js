import { __extends } from "tslib";
import {
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand,
  serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created
 * 			every time the certificate authority (CA) private key is used. The private key is used
 * 			when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the
 * 				<a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new DescribeCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCertificateAuthorityAuditReportCommand = /** @class */ (function (_super) {
  __extends(DescribeCertificateAuthorityAuditReportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeCertificateAuthorityAuditReportCommand(input) {
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
  DescribeCertificateAuthorityAuditReportCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "DescribeCertificateAuthorityAuditReportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeCertificateAuthorityAuditReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCertificateAuthorityAuditReportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeCertificateAuthorityAuditReportCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(input, context);
  };
  DescribeCertificateAuthorityAuditReportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(output, context);
  };
  return DescribeCertificateAuthorityAuditReportCommand;
})($Command);
export { DescribeCertificateAuthorityAuditReportCommand };
//# sourceMappingURL=DescribeCertificateAuthorityAuditReportCommand.js.map
