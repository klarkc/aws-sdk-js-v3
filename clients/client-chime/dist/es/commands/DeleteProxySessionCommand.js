import { __extends } from "tslib";
import { DeleteProxySessionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProxySessionCommand,
  serializeAws_restJson1DeleteProxySessionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified proxy session from the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteProxySessionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteProxySessionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProxySessionCommandInput} for command's `input` shape.
 * @see {@link DeleteProxySessionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProxySessionCommand = /** @class */ (function (_super) {
  __extends(DeleteProxySessionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteProxySessionCommand(input) {
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
  DeleteProxySessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteProxySessionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteProxySessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteProxySessionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteProxySessionCommand(input, context);
  };
  DeleteProxySessionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteProxySessionCommand(output, context);
  };
  return DeleteProxySessionCommand;
})($Command);
export { DeleteProxySessionCommand };
//# sourceMappingURL=DeleteProxySessionCommand.js.map
