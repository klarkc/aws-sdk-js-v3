import { __extends } from "tslib";
import { ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListVoiceConnectorGroupsCommand,
  serializeAws_restJson1ListVoiceConnectorGroupsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListVoiceConnectorGroupsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListVoiceConnectorGroupsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListVoiceConnectorGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVoiceConnectorGroupsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorGroupsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVoiceConnectorGroupsCommand = /** @class */ (function (_super) {
  __extends(ListVoiceConnectorGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListVoiceConnectorGroupsCommand(input) {
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
  ListVoiceConnectorGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListVoiceConnectorGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListVoiceConnectorGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVoiceConnectorGroupsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListVoiceConnectorGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListVoiceConnectorGroupsCommand(input, context);
  };
  ListVoiceConnectorGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListVoiceConnectorGroupsCommand(output, context);
  };
  return ListVoiceConnectorGroupsCommand;
})($Command);
export { ListVoiceConnectorGroupsCommand };
//# sourceMappingURL=ListVoiceConnectorGroupsCommand.js.map
