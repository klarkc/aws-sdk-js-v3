import { __extends } from "tslib";
import { UpdateVoiceConnectorRequest, UpdateVoiceConnectorResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateVoiceConnectorCommand,
  serializeAws_restJson1UpdateVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates details for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVoiceConnectorCommand = /** @class */ (function (_super) {
  __extends(UpdateVoiceConnectorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVoiceConnectorCommand(input) {
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
  UpdateVoiceConnectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateVoiceConnectorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVoiceConnectorResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVoiceConnectorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVoiceConnectorCommand(input, context);
  };
  UpdateVoiceConnectorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVoiceConnectorCommand(output, context);
  };
  return UpdateVoiceConnectorCommand;
})($Command);
export { UpdateVoiceConnectorCommand };
//# sourceMappingURL=UpdateVoiceConnectorCommand.js.map
