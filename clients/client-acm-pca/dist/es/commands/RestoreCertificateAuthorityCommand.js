import { __extends } from "tslib";
import { RestoreCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreCertificateAuthorityCommand,
  serializeAws_json1_1RestoreCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You
 * 			can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days.
 * 			If you did not specify a <b>PermanentDeletionTimeInDays</b>
 * 			value, by default you can restore the CA at any time in a 30 day period. You can check
 * 			the time remaining in the restoration period of a private CA in the <code>DELETED</code>
 * 			state by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to
 * 			its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to
 * 				<code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the
 * 				<code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate
 * 			authority into the private CA before it can be activated. You cannot restore a CA after
 * 			the restoration period has ended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RestoreCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RestoreCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new RestoreCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link RestoreCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreCertificateAuthorityCommand = /** @class */ (function (_super) {
  __extends(RestoreCertificateAuthorityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RestoreCertificateAuthorityCommand(input) {
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
  RestoreCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "RestoreCertificateAuthorityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RestoreCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RestoreCertificateAuthorityCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RestoreCertificateAuthorityCommand(input, context);
  };
  RestoreCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommand(output, context);
  };
  return RestoreCertificateAuthorityCommand;
})($Command);
export { RestoreCertificateAuthorityCommand };
//# sourceMappingURL=RestoreCertificateAuthorityCommand.js.map
