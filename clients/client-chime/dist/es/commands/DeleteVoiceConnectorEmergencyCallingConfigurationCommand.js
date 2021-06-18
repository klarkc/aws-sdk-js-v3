import { __extends } from "tslib";
import { DeleteVoiceConnectorEmergencyCallingConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  serializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorEmergencyCallingConfigurationCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorEmergencyCallingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorEmergencyCallingConfigurationCommand(input) {
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
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand(input, context);
  };
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand(output, context);
  };
  return DeleteVoiceConnectorEmergencyCallingConfigurationCommand;
})($Command);
export { DeleteVoiceConnectorEmergencyCallingConfigurationCommand };
//# sourceMappingURL=DeleteVoiceConnectorEmergencyCallingConfigurationCommand.js.map
