import { __extends } from "tslib";
import { ListChannelMessagesRequest, ListChannelMessagesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListChannelMessagesCommand,
  serializeAws_restJson1ListChannelMessagesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>.
 *             By default, sorted by creation timestamp in descending
 *             order.</p>
 *
 *          <note>
 *             <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted.
 *                 Deleted messages do not appear in the results. This action always returns the latest
 *                 version of an edited message.</p>
 *             <p>Also, the x-amz-chime-bearer request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes the API call as the
 *         value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListChannelMessagesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListChannelMessagesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListChannelMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChannelMessagesCommandInput} for command's `input` shape.
 * @see {@link ListChannelMessagesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChannelMessagesCommand = /** @class */ (function (_super) {
  __extends(ListChannelMessagesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChannelMessagesCommand(input) {
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
  ListChannelMessagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "ListChannelMessagesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChannelMessagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMessagesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChannelMessagesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListChannelMessagesCommand(input, context);
  };
  ListChannelMessagesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListChannelMessagesCommand(output, context);
  };
  return ListChannelMessagesCommand;
})($Command);
export { ListChannelMessagesCommand };
//# sourceMappingURL=ListChannelMessagesCommand.js.map
