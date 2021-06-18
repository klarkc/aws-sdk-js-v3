import { __extends } from "tslib";
import { DeleteRoomMembershipRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRoomMembershipCommand,
  serializeAws_restJson1DeleteRoomMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a member from a chat room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRoomMembershipCommand = /** @class */ (function (_super) {
  __extends(DeleteRoomMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRoomMembershipCommand(input) {
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
  DeleteRoomMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteRoomMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRoomMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRoomMembershipCommand(input, context);
  };
  DeleteRoomMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRoomMembershipCommand(output, context);
  };
  return DeleteRoomMembershipCommand;
})($Command);
export { DeleteRoomMembershipCommand };
//# sourceMappingURL=DeleteRoomMembershipCommand.js.map
