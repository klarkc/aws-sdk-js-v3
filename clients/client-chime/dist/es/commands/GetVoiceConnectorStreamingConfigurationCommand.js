import { __extends } from "tslib";
import { GetVoiceConnectorStreamingConfigurationRequest } from "../models/models_0";
import { GetVoiceConnectorStreamingConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand,
  serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector.
 *             Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows
 *             the retention period, in hours, for the Amazon Kinesis data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorStreamingConfigurationCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorStreamingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorStreamingConfigurationCommand(input) {
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
  GetVoiceConnectorStreamingConfigurationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorStreamingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorStreamingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand(input, context);
  };
  GetVoiceConnectorStreamingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand(output, context);
  };
  return GetVoiceConnectorStreamingConfigurationCommand;
})($Command);
export { GetVoiceConnectorStreamingConfigurationCommand };
//# sourceMappingURL=GetVoiceConnectorStreamingConfigurationCommand.js.map
