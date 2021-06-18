import { __extends } from "tslib";
import { CreateVoiceConnectorRequest, CreateVoiceConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVoiceConnectorCommand,
  serializeAws_restJson1CreateVoiceConnectorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p>
 *
 *          <p>
 * Enabling
 * <a>CreateVoiceConnectorRequest$RequireEncryption</a>
 * configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateVoiceConnectorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVoiceConnectorCommand = /** @class */ (function (_super) {
  __extends(CreateVoiceConnectorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVoiceConnectorCommand(input) {
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
  CreateVoiceConnectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateVoiceConnectorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVoiceConnectorResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVoiceConnectorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVoiceConnectorCommand(input, context);
  };
  CreateVoiceConnectorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVoiceConnectorCommand(output, context);
  };
  return CreateVoiceConnectorCommand;
})($Command);
export { CreateVoiceConnectorCommand };
//# sourceMappingURL=CreateVoiceConnectorCommand.js.map
