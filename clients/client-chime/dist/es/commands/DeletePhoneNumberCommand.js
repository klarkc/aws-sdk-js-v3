import { __extends } from "tslib";
import { DeletePhoneNumberRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePhoneNumberCommand,
  serializeAws_restJson1DeletePhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves the specified phone number into the <b>Deletion
 *                 queue</b>. A phone number must be disassociated from any
 *             users or Amazon Chime Voice Connectors before it can be deleted.</p>
 *
 *          <p>Deleted phone numbers remain in the
 * <b>Deletion queue</b>
 * for 7 days before they are deleted permanently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeletePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeletePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DeletePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePhoneNumberCommand = /** @class */ (function (_super) {
  __extends(DeletePhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeletePhoneNumberCommand(input) {
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
  DeletePhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeletePhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeletePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeletePhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeletePhoneNumberCommand(input, context);
  };
  DeletePhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeletePhoneNumberCommand(output, context);
  };
  return DeletePhoneNumberCommand;
})($Command);
export { DeletePhoneNumberCommand };
//# sourceMappingURL=DeletePhoneNumberCommand.js.map
