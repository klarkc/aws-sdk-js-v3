import { __extends } from "tslib";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = /** @class */ (function (_super) {
  __extends(DisassociatePhoneNumbersFromVoiceConnectorGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input) {
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
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input, context);
  };
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(output, context);
  };
  return DisassociatePhoneNumbersFromVoiceConnectorGroupCommand;
})($Command);
export { DisassociatePhoneNumbersFromVoiceConnectorGroupCommand };
//# sourceMappingURL=DisassociatePhoneNumbersFromVoiceConnectorGroupCommand.js.map
