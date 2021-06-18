import { __extends } from "tslib";
import { UpdatePhoneNumberRequest, UpdatePhoneNumberResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdatePhoneNumberCommand,
  serializeAws_restJson1UpdatePhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number
 *         detail at a time. For example, you can update either the product type or the calling name in one action.</p>
 *
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the
 *         Amazon Chime SIP Media Application Dial-In product type.</p>
 *
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
 *          can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePhoneNumberCommand = /** @class */ (function (_super) {
  __extends(UpdatePhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdatePhoneNumberCommand(input) {
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
  UpdatePhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdatePhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdatePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePhoneNumberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdatePhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdatePhoneNumberCommand(input, context);
  };
  UpdatePhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdatePhoneNumberCommand(output, context);
  };
  return UpdatePhoneNumberCommand;
})($Command);
export { UpdatePhoneNumberCommand };
//# sourceMappingURL=UpdatePhoneNumberCommand.js.map
