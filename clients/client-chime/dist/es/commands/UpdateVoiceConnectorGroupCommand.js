import { __extends } from "tslib";
import { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateVoiceConnectorGroupCommand,
  serializeAws_restJson1UpdateVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and
 *             Amazon Chime Voice Connector priority ranking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVoiceConnectorGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateVoiceConnectorGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateVoiceConnectorGroupCommand(input) {
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
  UpdateVoiceConnectorGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateVoiceConnectorGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateVoiceConnectorGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateVoiceConnectorGroupCommand(input, context);
  };
  UpdateVoiceConnectorGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateVoiceConnectorGroupCommand(output, context);
  };
  return UpdateVoiceConnectorGroupCommand;
})($Command);
export { UpdateVoiceConnectorGroupCommand };
//# sourceMappingURL=UpdateVoiceConnectorGroupCommand.js.map
