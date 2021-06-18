import { __extends } from "tslib";
import { CreateRoomMembershipRequest, CreateRoomMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRoomMembershipCommand,
  serializeAws_restJson1CreateRoomMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRoomMembershipCommand = /** @class */ (function (_super) {
  __extends(CreateRoomMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRoomMembershipCommand(input) {
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
  CreateRoomMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateRoomMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRoomMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRoomMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateRoomMembershipCommand(input, context);
  };
  CreateRoomMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateRoomMembershipCommand(output, context);
  };
  return CreateRoomMembershipCommand;
})($Command);
export { CreateRoomMembershipCommand };
//# sourceMappingURL=CreateRoomMembershipCommand.js.map
