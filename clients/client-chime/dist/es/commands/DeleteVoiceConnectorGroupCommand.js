import { __extends } from "tslib";
import { DeleteVoiceConnectorGroupRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorGroupCommand,
  serializeAws_restJson1DeleteVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Amazon Chime Voice Connector group. Any
 * <code>VoiceConnectorItems</code>
 * and phone numbers associated with the group must be removed before it can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceConnectorGroupCommand = /** @class */ (function (_super) {
  __extends(DeleteVoiceConnectorGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteVoiceConnectorGroupCommand(input) {
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
  DeleteVoiceConnectorGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteVoiceConnectorGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteVoiceConnectorGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteVoiceConnectorGroupCommand(input, context);
  };
  DeleteVoiceConnectorGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteVoiceConnectorGroupCommand(output, context);
  };
  return DeleteVoiceConnectorGroupCommand;
})($Command);
export { DeleteVoiceConnectorGroupCommand };
//# sourceMappingURL=DeleteVoiceConnectorGroupCommand.js.map
