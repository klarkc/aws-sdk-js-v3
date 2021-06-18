import { __extends } from "tslib";
import { ListVoiceConnectorsRequest, ListVoiceConnectorsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListVoiceConnectorsCommand,
  serializeAws_restJson1ListVoiceConnectorsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListVoiceConnectorsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListVoiceConnectorsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListVoiceConnectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVoiceConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVoiceConnectorsCommand = /** @class */ (function (_super) {
  __extends(ListVoiceConnectorsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVoiceConnectorsCommand(input) {
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
  ListVoiceConnectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListVoiceConnectorsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVoiceConnectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVoiceConnectorsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVoiceConnectorsCommand(input, context);
  };
  ListVoiceConnectorsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVoiceConnectorsCommand(output, context);
  };
  return ListVoiceConnectorsCommand;
})($Command);
export { ListVoiceConnectorsCommand };
//# sourceMappingURL=ListVoiceConnectorsCommand.js.map
