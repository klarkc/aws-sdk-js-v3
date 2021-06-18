import { __extends } from "tslib";
import { RenewCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RenewCertificateCommand,
  serializeAws_json1_1RenewCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Renews an eligible ACM certificate. At this time, only exported private certificates can
 *       be renewed with this operation. In order to renew your ACM PCA certificates with ACM, you must
 *       first <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaPermissions.html">grant the ACM
 *         service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a>
 *       in the ACM User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RenewCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RenewCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RenewCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenewCertificateCommandInput} for command's `input` shape.
 * @see {@link RenewCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RenewCertificateCommand = /** @class */ (function (_super) {
  __extends(RenewCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RenewCertificateCommand(input) {
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
  RenewCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "RenewCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RenewCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RenewCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RenewCertificateCommand(input, context);
  };
  RenewCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RenewCertificateCommand(output, context);
  };
  return RenewCertificateCommand;
})($Command);
export { RenewCertificateCommand };
//# sourceMappingURL=RenewCertificateCommand.js.map
