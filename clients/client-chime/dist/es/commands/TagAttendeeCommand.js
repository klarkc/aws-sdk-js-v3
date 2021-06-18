import { __extends } from "tslib";
import { TagAttendeeRequest } from "../models/models_1";
import {
  deserializeAws_restJson1TagAttendeeCommand,
  serializeAws_restJson1TagAttendeeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies the specified tags to the specified Amazon Chime SDK attendee.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, TagAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, TagAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new TagAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagAttendeeCommandInput} for command's `input` shape.
 * @see {@link TagAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagAttendeeCommand = /** @class */ (function (_super) {
  __extends(TagAttendeeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TagAttendeeCommand(input) {
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
  TagAttendeeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "TagAttendeeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TagAttendeeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TagAttendeeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TagAttendeeCommand(input, context);
  };
  TagAttendeeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TagAttendeeCommand(output, context);
  };
  return TagAttendeeCommand;
})($Command);
export { TagAttendeeCommand };
//# sourceMappingURL=TagAttendeeCommand.js.map
