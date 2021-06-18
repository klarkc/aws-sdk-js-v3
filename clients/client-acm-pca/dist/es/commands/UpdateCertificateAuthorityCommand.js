import { __extends } from "tslib";
import { UpdateCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCertificateAuthorityCommand,
  serializeAws_json1_1UpdateCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status or configuration of a private certificate authority (CA). Your
 * 			private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you
 * 			can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or
 * 			make a CA that is in the <code>DISABLED</code> state active again.</p>
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
 * import { ACMPCAClient, UpdateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UpdateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new UpdateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCertificateAuthorityCommand = /** @class */ (function (_super) {
  __extends(UpdateCertificateAuthorityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateCertificateAuthorityCommand(input) {
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
  UpdateCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "UpdateCertificateAuthorityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateCertificateAuthorityCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateCertificateAuthorityCommand(input, context);
  };
  UpdateCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommand(output, context);
  };
  return UpdateCertificateAuthorityCommand;
})($Command);
export { UpdateCertificateAuthorityCommand };
//# sourceMappingURL=UpdateCertificateAuthorityCommand.js.map
