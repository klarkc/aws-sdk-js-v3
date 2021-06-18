import { __extends } from "tslib";
import { UntagMeetingRequest } from "../models/models_1";
import {
  deserializeAws_restJson1UntagMeetingCommand,
  serializeAws_restJson1UntagMeetingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Untags the specified tags from the specified Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UntagMeetingCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UntagMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UntagMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagMeetingCommandInput} for command's `input` shape.
 * @see {@link UntagMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagMeetingCommand = /** @class */ (function (_super) {
  __extends(UntagMeetingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UntagMeetingCommand(input) {
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
  UntagMeetingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UntagMeetingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UntagMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UntagMeetingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UntagMeetingCommand(input, context);
  };
  UntagMeetingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UntagMeetingCommand(output, context);
  };
  return UntagMeetingCommand;
})($Command);
export { UntagMeetingCommand };
//# sourceMappingURL=UntagMeetingCommand.js.map
