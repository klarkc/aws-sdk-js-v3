import { __extends } from "tslib";
import {
  AssociatePhoneNumbersWithVoiceConnectorRequest,
  AssociatePhoneNumbersWithVoiceConnectorResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand,
  serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates phone numbers with the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, AssociatePhoneNumbersWithVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, AssociatePhoneNumbersWithVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociatePhoneNumbersWithVoiceConnectorCommand = /** @class */ (function (_super) {
  __extends(AssociatePhoneNumbersWithVoiceConnectorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociatePhoneNumbersWithVoiceConnectorCommand(input) {
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
  AssociatePhoneNumbersWithVoiceConnectorCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "AssociatePhoneNumbersWithVoiceConnectorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociatePhoneNumbersWithVoiceConnectorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand(input, context);
  };
  AssociatePhoneNumbersWithVoiceConnectorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand(output, context);
  };
  return AssociatePhoneNumbersWithVoiceConnectorCommand;
})($Command);
export { AssociatePhoneNumbersWithVoiceConnectorCommand };
//# sourceMappingURL=AssociatePhoneNumbersWithVoiceConnectorCommand.js.map
