import { __extends } from "tslib";
import { GetVoiceConnectorTerminationRequest, GetVoiceConnectorTerminationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorTerminationCommand,
  serializeAws_restJson1GetVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves termination setting details for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorTerminationCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorTerminationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorTerminationCommand(input) {
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
  GetVoiceConnectorTerminationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorTerminationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorTerminationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorTerminationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorTerminationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorTerminationCommand(input, context);
  };
  GetVoiceConnectorTerminationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorTerminationCommand(output, context);
  };
  return GetVoiceConnectorTerminationCommand;
})($Command);
export { GetVoiceConnectorTerminationCommand };
//# sourceMappingURL=GetVoiceConnectorTerminationCommand.js.map
