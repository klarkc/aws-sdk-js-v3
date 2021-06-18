import { __extends } from "tslib";
import { RedactRoomMessageRequest, RedactRoomMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RedactRoomMessageCommand,
  serializeAws_restJson1RedactRoomMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Redacts the specified message from the specified Amazon Chime channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactRoomMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactRoomMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RedactRoomMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RedactRoomMessageCommandInput} for command's `input` shape.
 * @see {@link RedactRoomMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RedactRoomMessageCommand = /** @class */ (function (_super) {
  __extends(RedactRoomMessageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RedactRoomMessageCommand(input) {
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
  RedactRoomMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "RedactRoomMessageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RedactRoomMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RedactRoomMessageResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RedactRoomMessageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RedactRoomMessageCommand(input, context);
  };
  RedactRoomMessageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RedactRoomMessageCommand(output, context);
  };
  return RedactRoomMessageCommand;
})($Command);
export { RedactRoomMessageCommand };
//# sourceMappingURL=RedactRoomMessageCommand.js.map
