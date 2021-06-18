import { __extends } from "tslib";
import { GetVoiceConnectorOriginationRequest, GetVoiceConnectorOriginationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorOriginationCommand,
  serializeAws_restJson1GetVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorOriginationCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorOriginationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorOriginationCommand(input) {
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
  GetVoiceConnectorOriginationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorOriginationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorOriginationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorOriginationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorOriginationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorOriginationCommand(input, context);
  };
  GetVoiceConnectorOriginationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorOriginationCommand(output, context);
  };
  return GetVoiceConnectorOriginationCommand;
})($Command);
export { GetVoiceConnectorOriginationCommand };
//# sourceMappingURL=GetVoiceConnectorOriginationCommand.js.map
