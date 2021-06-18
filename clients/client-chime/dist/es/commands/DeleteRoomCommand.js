import { __extends } from "tslib";
import { DeleteRoomRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRoomCommand,
  serializeAws_restJson1DeleteRoomCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a chat room in an Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteRoomCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteRoomCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoomCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRoomCommand = /** @class */ (function (_super) {
  __extends(DeleteRoomCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRoomCommand(input) {
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
  DeleteRoomCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRoomCommand(input, context);
  };
  DeleteRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRoomCommand(output, context);
  };
  return DeleteRoomCommand;
})($Command);
export { DeleteRoomCommand };
//# sourceMappingURL=DeleteRoomCommand.js.map
