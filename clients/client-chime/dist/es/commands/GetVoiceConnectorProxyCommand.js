import { __extends } from "tslib";
import { GetVoiceConnectorProxyRequest, GetVoiceConnectorProxyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorProxyCommand,
  serializeAws_restJson1GetVoiceConnectorProxyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the proxy configuration details for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorProxyCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorProxyCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorProxyCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorProxyCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorProxyCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorProxyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorProxyCommand(input) {
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
  GetVoiceConnectorProxyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorProxyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorProxyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorProxyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorProxyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorProxyCommand(input, context);
  };
  GetVoiceConnectorProxyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorProxyCommand(output, context);
  };
  return GetVoiceConnectorProxyCommand;
})($Command);
export { GetVoiceConnectorProxyCommand };
//# sourceMappingURL=GetVoiceConnectorProxyCommand.js.map
