import { __extends } from "tslib";
import { PutVoiceConnectorTerminationCredentialsRequest } from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand,
  serializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutVoiceConnectorTerminationCredentialsCommand = /** @class */ (function (_super) {
  __extends(PutVoiceConnectorTerminationCredentialsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutVoiceConnectorTerminationCredentialsCommand(input) {
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
  PutVoiceConnectorTerminationCredentialsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutVoiceConnectorTerminationCredentialsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutVoiceConnectorTerminationCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutVoiceConnectorTerminationCredentialsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand(input, context);
  };
  PutVoiceConnectorTerminationCredentialsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand(output, context);
  };
  return PutVoiceConnectorTerminationCredentialsCommand;
})($Command);
export { PutVoiceConnectorTerminationCredentialsCommand };
//# sourceMappingURL=PutVoiceConnectorTerminationCredentialsCommand.js.map
