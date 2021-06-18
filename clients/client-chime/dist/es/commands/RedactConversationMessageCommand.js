import { __extends } from "tslib";
import { RedactConversationMessageRequest, RedactConversationMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RedactConversationMessageCommand,
  serializeAws_restJson1RedactConversationMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RedactConversationMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RedactConversationMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RedactConversationMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RedactConversationMessageCommandInput} for command's `input` shape.
 * @see {@link RedactConversationMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RedactConversationMessageCommand = /** @class */ (function (_super) {
  __extends(RedactConversationMessageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RedactConversationMessageCommand(input) {
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
  RedactConversationMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "RedactConversationMessageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RedactConversationMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RedactConversationMessageResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RedactConversationMessageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RedactConversationMessageCommand(input, context);
  };
  RedactConversationMessageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RedactConversationMessageCommand(output, context);
  };
  return RedactConversationMessageCommand;
})($Command);
export { RedactConversationMessageCommand };
//# sourceMappingURL=RedactConversationMessageCommand.js.map
