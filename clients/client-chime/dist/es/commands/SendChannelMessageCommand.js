import { __extends } from "tslib";
import { SendChannelMessageRequest, SendChannelMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1SendChannelMessageCommand,
  serializeAws_restJson1SendChannelMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a message to a particular channel that the member is a part of.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *
 *             <p>Also, <code>STANDARD</code> messages can contain 4KB of data and the 1KB of metadata. <code>CONTROL</code> messages can contain 30 bytes of
 *     data and no metadata.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, SendChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, SendChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new SendChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendChannelMessageCommandInput} for command's `input` shape.
 * @see {@link SendChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendChannelMessageCommand = /** @class */ (function (_super) {
  __extends(SendChannelMessageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SendChannelMessageCommand(input) {
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
  SendChannelMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "SendChannelMessageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SendChannelMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendChannelMessageResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SendChannelMessageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1SendChannelMessageCommand(input, context);
  };
  SendChannelMessageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1SendChannelMessageCommand(output, context);
  };
  return SendChannelMessageCommand;
})($Command);
export { SendChannelMessageCommand };
//# sourceMappingURL=SendChannelMessageCommand.js.map
