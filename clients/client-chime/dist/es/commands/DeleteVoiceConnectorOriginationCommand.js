import { __extends } from "tslib";
import { DeleteVoiceConnectorOriginationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand,
  serializeAws_restJson1DeleteVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
 *
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorOriginationCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorOriginationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorOriginationCommand(input) {
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
  DeleteVoiceConnectorOriginationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorOriginationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorOriginationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorOriginationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorOriginationCommand(input, context);
  };
  DeleteVoiceConnectorOriginationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand(output, context);
  };
  return DeleteVoiceConnectorOriginationCommand;
})($Command);
export { DeleteVoiceConnectorOriginationCommand };
//# sourceMappingURL=DeleteVoiceConnectorOriginationCommand.js.map
