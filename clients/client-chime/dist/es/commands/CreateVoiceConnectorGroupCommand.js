import { __extends } from "tslib";
import { CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVoiceConnectorGroupCommand,
  serializeAws_restJson1CreateVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
 *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
 *             including <code>VoiceConnectorItems</code> in the request.</p>
 *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
 *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVoiceConnectorGroupCommand = /** @class */ (function (_super) {
  __extends(CreateVoiceConnectorGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVoiceConnectorGroupCommand(input) {
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
  CreateVoiceConnectorGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateVoiceConnectorGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVoiceConnectorGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVoiceConnectorGroupCommand(input, context);
  };
  CreateVoiceConnectorGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVoiceConnectorGroupCommand(output, context);
  };
  return CreateVoiceConnectorGroupCommand;
})($Command);
export { CreateVoiceConnectorGroupCommand };
//# sourceMappingURL=CreateVoiceConnectorGroupCommand.js.map
