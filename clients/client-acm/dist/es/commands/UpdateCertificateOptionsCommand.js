import { __extends } from "tslib";
import { UpdateCertificateOptionsRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCertificateOptionsCommand,
  serializeAws_json1_1UpdateCertificateOptionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a certificate. Currently, you can use this function to specify whether to opt in
 *       to or out of recording your certificate in a certificate transparency log. For more
 *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of
 *         Certificate Transparency Logging</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateCertificateOptionsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateCertificateOptionsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new UpdateCertificateOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateOptionsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCertificateOptionsCommand = /** @class */ (function (_super) {
  __extends(UpdateCertificateOptionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateCertificateOptionsCommand(input) {
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
  UpdateCertificateOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "UpdateCertificateOptionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateCertificateOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateCertificateOptionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateCertificateOptionsCommand(input, context);
  };
  UpdateCertificateOptionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateCertificateOptionsCommand(output, context);
  };
  return UpdateCertificateOptionsCommand;
})($Command);
export { UpdateCertificateOptionsCommand };
//# sourceMappingURL=UpdateCertificateOptionsCommand.js.map
