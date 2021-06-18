import { __extends } from "tslib";
import { DeleteAppInstanceAdminRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceAdminCommand,
  serializeAws_restJson1DeleteAppInstanceAdminCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Demotes an <code>AppInstanceAdmin</code> to an <code>AppInstanceUser</code>. This action does not delete the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppInstanceAdminCommand = /** @class */ (function (_super) {
  __extends(DeleteAppInstanceAdminCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAppInstanceAdminCommand(input) {
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
  DeleteAppInstanceAdminCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAppInstanceAdminCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAppInstanceAdminRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAppInstanceAdminCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAppInstanceAdminCommand(input, context);
  };
  DeleteAppInstanceAdminCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAppInstanceAdminCommand(output, context);
  };
  return DeleteAppInstanceAdminCommand;
})($Command);
export { DeleteAppInstanceAdminCommand };
//# sourceMappingURL=DeleteAppInstanceAdminCommand.js.map
