import { __extends } from "tslib";
import { AssociatePhoneNumberWithUserRequest, AssociatePhoneNumberWithUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePhoneNumberWithUserCommand,
  serializeAws_restJson1AssociatePhoneNumberWithUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a phone number with the specified Amazon Chime user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociatePhoneNumberWithUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociatePhoneNumberWithUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociatePhoneNumberWithUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePhoneNumberWithUserCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberWithUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociatePhoneNumberWithUserCommand = /** @class */ (function (_super) {
  __extends(AssociatePhoneNumberWithUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociatePhoneNumberWithUserCommand(input) {
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
  AssociatePhoneNumberWithUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "AssociatePhoneNumberWithUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociatePhoneNumberWithUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePhoneNumberWithUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociatePhoneNumberWithUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AssociatePhoneNumberWithUserCommand(input, context);
  };
  AssociatePhoneNumberWithUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AssociatePhoneNumberWithUserCommand(output, context);
  };
  return AssociatePhoneNumberWithUserCommand;
})($Command);
export { AssociatePhoneNumberWithUserCommand };
//# sourceMappingURL=AssociatePhoneNumberWithUserCommand.js.map
