import { __extends } from "tslib";
import { ListChannelModeratorsRequest, ListChannelModeratorsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelModeratorsCommand,
  serializeAws_restJson1ListChannelModeratorsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the moderators for a channel.</p>
 *
 *          <note>
 *
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelModeratorsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelModeratorsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelModeratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelModeratorsCommandInput} for command's `input` shape.
 * @see {@link ListChannelModeratorsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelModeratorsCommand = /** @class */ (function (_super) {
  __extends(ListChannelModeratorsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelModeratorsCommand(input) {
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
  ListChannelModeratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelModeratorsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelModeratorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelModeratorsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelModeratorsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelModeratorsCommand(input, context);
  };
  ListChannelModeratorsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelModeratorsCommand(output, context);
  };
  return ListChannelModeratorsCommand;
})($Command);
export { ListChannelModeratorsCommand };
//# sourceMappingURL=ListChannelModeratorsCommand.js.map
