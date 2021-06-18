import { __extends } from "tslib";
import {
  PutVoiceConnectorLoggingConfigurationRequest,
  PutVoiceConnectorLoggingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand,
  serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutVoiceConnectorLoggingConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutVoiceConnectorLoggingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutVoiceConnectorLoggingConfigurationCommand(input) {
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
  PutVoiceConnectorLoggingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutVoiceConnectorLoggingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutVoiceConnectorLoggingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand(input, context);
  };
  PutVoiceConnectorLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand(output, context);
  };
  return PutVoiceConnectorLoggingConfigurationCommand;
})($Command);
export { PutVoiceConnectorLoggingConfigurationCommand };
//# sourceMappingURL=PutVoiceConnectorLoggingConfigurationCommand.js.map
