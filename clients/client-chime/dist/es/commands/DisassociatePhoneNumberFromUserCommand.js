import { __extends } from "tslib";
import { DisassociatePhoneNumberFromUserRequest, DisassociatePhoneNumberFromUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumberFromUserCommand,
  serializeAws_restJson1DisassociatePhoneNumberFromUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumberFromUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumberFromUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DisassociatePhoneNumberFromUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePhoneNumberFromUserCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberFromUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociatePhoneNumberFromUserCommand = /** @class */ (function (_super) {
  __extends(DisassociatePhoneNumberFromUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociatePhoneNumberFromUserCommand(input) {
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
  DisassociatePhoneNumberFromUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DisassociatePhoneNumberFromUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumberFromUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePhoneNumberFromUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociatePhoneNumberFromUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisassociatePhoneNumberFromUserCommand(input, context);
  };
  DisassociatePhoneNumberFromUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisassociatePhoneNumberFromUserCommand(output, context);
  };
  return DisassociatePhoneNumberFromUserCommand;
})($Command);
export { DisassociatePhoneNumberFromUserCommand };
//# sourceMappingURL=DisassociatePhoneNumberFromUserCommand.js.map
