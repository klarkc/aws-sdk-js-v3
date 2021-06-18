import { __extends } from "tslib";
import { TagMeetingRequest } from "../models/models_1";
import {
  deserializeAws_restJson1TagMeetingCommand,
  serializeAws_restJson1TagMeetingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, TagMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, TagMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new TagMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagMeetingCommandInput} for command's `input` shape.
 * @see {@link TagMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagMeetingCommand = /** @class */ (function (_super) {
  __extends(TagMeetingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TagMeetingCommand(input) {
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
  TagMeetingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "TagMeetingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TagMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TagMeetingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TagMeetingCommand(input, context);
  };
  TagMeetingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TagMeetingCommand(output, context);
  };
  return TagMeetingCommand;
})($Command);
export { TagMeetingCommand };
//# sourceMappingURL=TagMeetingCommand.js.map
