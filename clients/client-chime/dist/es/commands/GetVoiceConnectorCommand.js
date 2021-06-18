import { __extends } from "tslib";
import { GetVoiceConnectorRequest, GetVoiceConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorCommand,
  serializeAws_restJson1GetVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorCommand(input) {
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
  GetVoiceConnectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorCommand(input, context);
  };
  GetVoiceConnectorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorCommand(output, context);
  };
  return GetVoiceConnectorCommand;
})($Command);
export { GetVoiceConnectorCommand };
//# sourceMappingURL=GetVoiceConnectorCommand.js.map
