import { __extends } from "tslib";
import { GetVoiceConnectorGroupRequest, GetVoiceConnectorGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorGroupCommand,
  serializeAws_restJson1GetVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated
 * <code>VoiceConnectorItems</code>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceConnectorGroupCommand = /** @class */ (function (_super) {
  __extends(GetVoiceConnectorGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetVoiceConnectorGroupCommand(input) {
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
  GetVoiceConnectorGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetVoiceConnectorGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetVoiceConnectorGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetVoiceConnectorGroupCommand(input, context);
  };
  GetVoiceConnectorGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetVoiceConnectorGroupCommand(output, context);
  };
  return GetVoiceConnectorGroupCommand;
})($Command);
export { GetVoiceConnectorGroupCommand };
//# sourceMappingURL=GetVoiceConnectorGroupCommand.js.map
