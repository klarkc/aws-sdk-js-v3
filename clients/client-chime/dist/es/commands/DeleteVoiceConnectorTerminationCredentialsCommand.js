import { __extends } from "tslib";
import { DeleteVoiceConnectorTerminationCredentialsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand,
  serializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorTerminationCredentialsCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorTerminationCredentialsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorTerminationCredentialsCommand(input) {
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
  DeleteVoiceConnectorTerminationCredentialsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorTerminationCredentialsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorTerminationCredentialsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand(input, context);
  };
  DeleteVoiceConnectorTerminationCredentialsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand(output, context);
  };
  return DeleteVoiceConnectorTerminationCredentialsCommand;
})($Command);
export { DeleteVoiceConnectorTerminationCredentialsCommand };
//# sourceMappingURL=DeleteVoiceConnectorTerminationCredentialsCommand.js.map
