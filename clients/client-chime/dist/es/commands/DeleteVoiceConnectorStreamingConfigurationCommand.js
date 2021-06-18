import { __extends } from "tslib";
import { DeleteVoiceConnectorStreamingConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand,
  serializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the streaming configuration for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorStreamingConfigurationCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorStreamingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorStreamingConfigurationCommand(input) {
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
  DeleteVoiceConnectorStreamingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorStreamingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorStreamingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand(input, context);
  };
  DeleteVoiceConnectorStreamingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand(output, context);
  };
  return DeleteVoiceConnectorStreamingConfigurationCommand;
})($Command);
export { DeleteVoiceConnectorStreamingConfigurationCommand };
//# sourceMappingURL=DeleteVoiceConnectorStreamingConfigurationCommand.js.map
