import { __extends } from "tslib";
import { ResendValidationEmailRequest } from "../models/models_0";
import {
  deserializeAws_json1_1ResendValidationEmailCommand,
  serializeAws_json1_1ResendValidationEmailCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resends the email that requests domain ownership validation. The domain owner or an
 *       authorized representative must approve the ACM certificate before it can be issued. The
 *       certificate can be approved by clicking a link in the mail to navigate to the Amazon
 *       certificate approval website and then clicking <b>I Approve</b>.
 *       However, the validation email can be blocked by spam filters. Therefore, if you do not receive
 *       the original mail, you can request that the mail be resent within 72 hours of requesting the
 *       ACM certificate. If more than 72 hours have elapsed since your original request or since
 *       your last attempt to resend validation mail, you must request a new certificate. For more
 *       information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ResendValidationEmailCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ResendValidationEmailCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ResendValidationEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendValidationEmailCommandInput} for command's `input` shape.
 * @see {@link ResendValidationEmailCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResendValidationEmailCommand = /** @class */ (function (_super) {
  __extends(ResendValidationEmailCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ResendValidationEmailCommand(input) {
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
  ResendValidationEmailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "ResendValidationEmailCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ResendValidationEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ResendValidationEmailCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ResendValidationEmailCommand(input, context);
  };
  ResendValidationEmailCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ResendValidationEmailCommand(output, context);
  };
  return ResendValidationEmailCommand;
})($Command);
export { ResendValidationEmailCommand };
//# sourceMappingURL=ResendValidationEmailCommand.js.map
