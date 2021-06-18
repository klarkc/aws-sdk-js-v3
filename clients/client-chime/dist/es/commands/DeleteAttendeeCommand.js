import { __extends } from "tslib";
import { DeleteAttendeeRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAttendeeCommand,
  serializeAws_restJson1DeleteAttendeeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
 * <code>JoinToken</code>. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAttendeeCommandInput} for command's `input` shape.
 * @see {@link DeleteAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAttendeeCommand = /** @class */ (function (_super) {
  __extends(DeleteAttendeeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAttendeeCommand(input) {
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
  DeleteAttendeeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAttendeeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAttendeeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAttendeeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAttendeeCommand(input, context);
  };
  DeleteAttendeeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAttendeeCommand(output, context);
  };
  return DeleteAttendeeCommand;
})($Command);
export { DeleteAttendeeCommand };
//# sourceMappingURL=DeleteAttendeeCommand.js.map
