import { __extends } from "tslib";
import { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoomMembershipCommand,
  serializeAws_restJson1UpdateRoomMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
 *             Enterprise account. The member role designates whether the member is a chat room
 *             administrator or a general chat room member. The member role can be updated only for
 *             user IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoomMembershipCommand = /** @class */ (function (_super) {
  __extends(UpdateRoomMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRoomMembershipCommand(input) {
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
  UpdateRoomMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateRoomMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRoomMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRoomMembershipCommand(input, context);
  };
  UpdateRoomMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRoomMembershipCommand(output, context);
  };
  return UpdateRoomMembershipCommand;
})($Command);
export { UpdateRoomMembershipCommand };
//# sourceMappingURL=UpdateRoomMembershipCommand.js.map
