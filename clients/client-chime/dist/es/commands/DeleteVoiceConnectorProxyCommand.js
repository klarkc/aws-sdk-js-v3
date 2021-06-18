import { __extends } from "tslib";
import { DeleteVoiceConnectorProxyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorProxyCommand,
  serializeAws_restJson1DeleteVoiceConnectorProxyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the proxy configuration from the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorProxyCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorProxyCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorProxyCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorProxyCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorProxyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorProxyCommand(input) {
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
  DeleteVoiceConnectorProxyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorProxyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorProxyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorProxyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorProxyCommand(input, context);
  };
  DeleteVoiceConnectorProxyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorProxyCommand(output, context);
  };
  return DeleteVoiceConnectorProxyCommand;
})($Command);
export { DeleteVoiceConnectorProxyCommand };
//# sourceMappingURL=DeleteVoiceConnectorProxyCommand.js.map
