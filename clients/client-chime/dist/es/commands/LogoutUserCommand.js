import { __extends } from "tslib";
import { LogoutUserRequest, LogoutUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1LogoutUserCommand,
  serializeAws_restJson1LogoutUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, LogoutUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, LogoutUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new LogoutUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LogoutUserCommandInput} for command's `input` shape.
 * @see {@link LogoutUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LogoutUserCommand = /** @class */ (function (_super) {
  __extends(LogoutUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function LogoutUserCommand(input) {
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
  LogoutUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "LogoutUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: LogoutUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LogoutUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  LogoutUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1LogoutUserCommand(input, context);
  };
  LogoutUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1LogoutUserCommand(output, context);
  };
  return LogoutUserCommand;
})($Command);
export { LogoutUserCommand };
//# sourceMappingURL=LogoutUserCommand.js.map
