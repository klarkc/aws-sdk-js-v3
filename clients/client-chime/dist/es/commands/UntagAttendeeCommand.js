import { __extends } from "tslib";
import { UntagAttendeeRequest } from "../models/models_1";
import {
  deserializeAws_restJson1UntagAttendeeCommand,
  serializeAws_restJson1UntagAttendeeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UntagAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UntagAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UntagAttendeeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagAttendeeCommandInput} for command's `input` shape.
 * @see {@link UntagAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagAttendeeCommand = /** @class */ (function (_super) {
  __extends(UntagAttendeeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UntagAttendeeCommand(input) {
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
  UntagAttendeeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UntagAttendeeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UntagAttendeeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UntagAttendeeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UntagAttendeeCommand(input, context);
  };
  UntagAttendeeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UntagAttendeeCommand(output, context);
  };
  return UntagAttendeeCommand;
})($Command);
export { UntagAttendeeCommand };
//# sourceMappingURL=UntagAttendeeCommand.js.map
