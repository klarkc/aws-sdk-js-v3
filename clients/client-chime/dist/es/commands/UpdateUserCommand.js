import { __extends } from "tslib";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateUserCommand,
  serializeAws_restJson1UpdateUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Updates user details for a specified user ID. Currently, only
 * <code>LicenseType</code>
 * updates are supported for this action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserCommand = /** @class */ (function (_super) {
  __extends(UpdateUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateUserCommand(input) {
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
  UpdateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateUserCommand(input, context);
  };
  UpdateUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateUserCommand(output, context);
  };
  return UpdateUserCommand;
})($Command);
export { UpdateUserCommand };
//# sourceMappingURL=UpdateUserCommand.js.map
