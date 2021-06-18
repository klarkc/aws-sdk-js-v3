import { __extends } from "tslib";
import { PutVoiceConnectorTerminationRequest, PutVoiceConnectorTerminationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorTerminationCommand,
  serializeAws_restJson1PutVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutVoiceConnectorTerminationCommand = /** @class */ (function (_super) {
  __extends(PutVoiceConnectorTerminationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutVoiceConnectorTerminationCommand(input) {
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
  PutVoiceConnectorTerminationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutVoiceConnectorTerminationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutVoiceConnectorTerminationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorTerminationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutVoiceConnectorTerminationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutVoiceConnectorTerminationCommand(input, context);
  };
  PutVoiceConnectorTerminationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutVoiceConnectorTerminationCommand(output, context);
  };
  return PutVoiceConnectorTerminationCommand;
})($Command);
export { PutVoiceConnectorTerminationCommand };
//# sourceMappingURL=PutVoiceConnectorTerminationCommand.js.map
