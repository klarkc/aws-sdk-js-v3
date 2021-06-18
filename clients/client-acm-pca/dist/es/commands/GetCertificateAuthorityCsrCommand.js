import { __extends } from "tslib";
import { GetCertificateAuthorityCsrRequest, GetCertificateAuthorityCsrResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateAuthorityCsrCommand,
  serializeAws_json1_1GetCertificateAuthorityCsrCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the certificate signing request (CSR) for your private certificate authority
 * 			(CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your ACM Private CA-hosted or
 * 			on-premises root or subordinate CA. Then import the signed certificate back into ACM Private CA
 * 			by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a
 * 			base64 PEM-encoded string. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCsrCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCsrCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new GetCertificateAuthorityCsrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateAuthorityCsrCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCsrCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCertificateAuthorityCsrCommand = /** @class */ (function (_super) {
  __extends(GetCertificateAuthorityCsrCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCertificateAuthorityCsrCommand(input) {
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
  GetCertificateAuthorityCsrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "GetCertificateAuthorityCsrCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCertificateAuthorityCsrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateAuthorityCsrResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCertificateAuthorityCsrCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetCertificateAuthorityCsrCommand(input, context);
  };
  GetCertificateAuthorityCsrCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommand(output, context);
  };
  return GetCertificateAuthorityCsrCommand;
})($Command);
export { GetCertificateAuthorityCsrCommand };
//# sourceMappingURL=GetCertificateAuthorityCsrCommand.js.map
