import { __extends } from "tslib";
import {
  GetVoiceConnectorTerminationHealthRequest,
  GetVoiceConnectorTerminationHealthResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand,
  serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from
 *             your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorTerminationHealthCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorTerminationHealthCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorTerminationHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorTerminationHealthCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorTerminationHealthCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorTerminationHealthCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorTerminationHealthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorTerminationHealthCommand(input) {
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
  GetVoiceConnectorTerminationHealthCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorTerminationHealthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorTerminationHealthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorTerminationHealthResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorTerminationHealthCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand(input, context);
  };
  GetVoiceConnectorTerminationHealthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand(output, context);
  };
  return GetVoiceConnectorTerminationHealthCommand;
})($Command);
export { GetVoiceConnectorTerminationHealthCommand };
//# sourceMappingURL=GetVoiceConnectorTerminationHealthCommand.js.map
