import { __extends } from "tslib";
import { DeleteRoomRequest, DeleteRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRoomCommand,
  serializeAws_json1_1DeleteRoomCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a room by the room ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoomCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
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
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteRoomCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRoomResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRoomCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteRoomCommand(input, context);
  };
  DeleteRoomCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteRoomCommand(output, context);
  };
  return DeleteRoomCommand;
})($Command);
export { DeleteRoomCommand };
//# sourceMappingURL=DeleteRoomCommand.js.map
