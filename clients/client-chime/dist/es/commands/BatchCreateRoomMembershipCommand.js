import { __extends } from "tslib";
import { BatchCreateRoomMembershipRequest, BatchCreateRoomMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateRoomMembershipCommand,
  serializeAws_restJson1BatchCreateRoomMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchCreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCreateRoomMembershipCommand = /** @class */ (function (_super) {
  __extends(BatchCreateRoomMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchCreateRoomMembershipCommand(input) {
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
  BatchCreateRoomMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchCreateRoomMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchCreateRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateRoomMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchCreateRoomMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchCreateRoomMembershipCommand(input, context);
  };
  BatchCreateRoomMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchCreateRoomMembershipCommand(output, context);
  };
  return BatchCreateRoomMembershipCommand;
})($Command);
export { BatchCreateRoomMembershipCommand };
//# sourceMappingURL=BatchCreateRoomMembershipCommand.js.map
