import { __extends } from "tslib";
import { DeleteCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCertificateAuthorityCommand,
  serializeAws_json1_1DeleteCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource
 * 			Name (ARN) of the private CA that you want to delete. You can find the ARN by calling
 * 			the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p>
 * 		       <note>
 * 			         <p>Deleting a CA will invalidate other CAs and certificates below it in your CA
 * 				hierarchy.</p>
 * 		       </note>
 * 		       <p>Before you can delete a CA that you have created and activated, you must disable it.
 * 			To do this, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p>
 * 		       <p>Additionally, you can delete a CA if you are waiting for it to be created (that is,
 * 			the status of the CA is <code>CREATING</code>). You can also delete it if the CA has
 * 			been created but you haven't yet imported the signed certificate into ACM Private CA (that is,
 * 			the status of the CA is <code>PENDING_CERTIFICATE</code>). </p>
 * 		       <p>When you successfully call <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to
 * 			<code>DELETED</code>. However, the CA won't be permanently deleted until the restoration
 * 			period has passed. By default, if you do not set the
 * 				<code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30
 * 			days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the
 * 			restoration window of a private CA in the <code>DELETED</code> state. To restore an
 * 			eligible CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DeleteCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DeleteCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new DeleteCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCertificateAuthorityCommand = /** @class */ (function (_super) {
  __extends(DeleteCertificateAuthorityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteCertificateAuthorityCommand(input) {
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
  DeleteCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "DeleteCertificateAuthorityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteCertificateAuthorityCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteCertificateAuthorityCommand(input, context);
  };
  DeleteCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommand(output, context);
  };
  return DeleteCertificateAuthorityCommand;
})($Command);
export { DeleteCertificateAuthorityCommand };
//# sourceMappingURL=DeleteCertificateAuthorityCommand.js.map
