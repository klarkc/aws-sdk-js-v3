import { __extends } from "tslib";
import { DeleteMeetingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMeetingCommand,
  serializeAws_restJson1DeleteMeetingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
 *     joining the meeting. For more information about the Amazon Chime SDK, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
 *     <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMeetingCommandInput} for command's `input` shape.
 * @see {@link DeleteMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMeetingCommand = /** @class */ (function (_super) {
  __extends(DeleteMeetingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteMeetingCommand(input) {
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
  DeleteMeetingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteMeetingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteMeetingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteMeetingCommand(input, context);
  };
  DeleteMeetingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteMeetingCommand(output, context);
  };
  return DeleteMeetingCommand;
})($Command);
export { DeleteMeetingCommand };
//# sourceMappingURL=DeleteMeetingCommand.js.map
