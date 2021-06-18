import { __extends } from "tslib";
import { RequestCertificateRequest, RequestCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RequestCertificateCommand,
  serializeAws_json1_1RequestCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests an ACM certificate for use with other AWS services. To request an ACM
 *       certificate, you must specify a fully qualified domain name (FQDN) in the
 *         <code>DomainName</code> parameter. You can also specify additional FQDNs in the
 *         <code>SubjectAlternativeNames</code> parameter. </p>
 *
 *          <p>If you are requesting a private certificate, domain validation is not required. If you are
 *       requesting a public certificate, each domain name that you specify must be validated to verify
 *       that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>.
 *       We recommend that you use DNS validation. ACM issues public certificates after receiving
 *       approval from the domain owner. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RequestCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RequestCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RequestCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestCertificateCommandInput} for command's `input` shape.
 * @see {@link RequestCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RequestCertificateCommand = /** @class */ (function (_super) {
  __extends(RequestCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RequestCertificateCommand(input) {
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
  RequestCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "RequestCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RequestCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestCertificateResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RequestCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RequestCertificateCommand(input, context);
  };
  RequestCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RequestCertificateCommand(output, context);
  };
  return RequestCertificateCommand;
})($Command);
export { RequestCertificateCommand };
//# sourceMappingURL=RequestCertificateCommand.js.map
