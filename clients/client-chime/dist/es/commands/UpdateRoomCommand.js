import { __extends } from "tslib";
import { UpdateRoomRequest, UpdateRoomResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoomCommand,
  serializeAws_restJson1UpdateRoomCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoomCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoomCommand = /** @class */ (function (_super) {
  __extends(UpdateRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRoomCommand(input) {
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
  UpdateRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRoomCommand(input, context);
  };
  UpdateRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRoomCommand(output, context);
  };
  return UpdateRoomCommand;
})($Command);
export { UpdateRoomCommand };
//# sourceMappingURL=UpdateRoomCommand.js.map
