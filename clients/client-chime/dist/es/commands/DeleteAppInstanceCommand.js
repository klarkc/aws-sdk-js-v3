import { __extends } from "tslib";
import { DeleteAppInstanceRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceCommand,
  serializeAws_restJson1DeleteAppInstanceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppInstanceCommand = /** @class */ (function (_super) {
  __extends(DeleteAppInstanceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAppInstanceCommand(input) {
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
  DeleteAppInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAppInstanceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAppInstanceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAppInstanceCommand(input, context);
  };
  DeleteAppInstanceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAppInstanceCommand(output, context);
  };
  return DeleteAppInstanceCommand;
})($Command);
export { DeleteAppInstanceCommand };
//# sourceMappingURL=DeleteAppInstanceCommand.js.map
