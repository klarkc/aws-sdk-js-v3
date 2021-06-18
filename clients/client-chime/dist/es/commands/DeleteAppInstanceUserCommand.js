import { __extends } from "tslib";
import { DeleteAppInstanceUserRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceUserCommand,
  serializeAws_restJson1DeleteAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppInstanceUserCommand = /** @class */ (function (_super) {
  __extends(DeleteAppInstanceUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAppInstanceUserCommand(input) {
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
  DeleteAppInstanceUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAppInstanceUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAppInstanceUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAppInstanceUserCommand(input, context);
  };
  DeleteAppInstanceUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAppInstanceUserCommand(output, context);
  };
  return DeleteAppInstanceUserCommand;
})($Command);
export { DeleteAppInstanceUserCommand };
//# sourceMappingURL=DeleteAppInstanceUserCommand.js.map
