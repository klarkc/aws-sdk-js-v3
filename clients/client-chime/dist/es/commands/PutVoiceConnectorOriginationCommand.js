import { __extends } from "tslib";
import { PutVoiceConnectorOriginationRequest, PutVoiceConnectorOriginationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorOriginationCommand,
  serializeAws_restJson1PutVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutVoiceConnectorOriginationCommand = /** @class */ (function (_super) {
  __extends(PutVoiceConnectorOriginationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutVoiceConnectorOriginationCommand(input) {
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
  PutVoiceConnectorOriginationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutVoiceConnectorOriginationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutVoiceConnectorOriginationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorOriginationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutVoiceConnectorOriginationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutVoiceConnectorOriginationCommand(input, context);
  };
  PutVoiceConnectorOriginationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutVoiceConnectorOriginationCommand(output, context);
  };
  return PutVoiceConnectorOriginationCommand;
})($Command);
export { PutVoiceConnectorOriginationCommand };
//# sourceMappingURL=PutVoiceConnectorOriginationCommand.js.map
