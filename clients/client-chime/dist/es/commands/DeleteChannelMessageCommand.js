import { __extends } from "tslib";
import { DeleteChannelMessageRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteChannelMessageCommand,
  serializeAws_restJson1DeleteChannelMessageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a channel message. Only admins can perform this action. Deletion makes messages
 *             inaccessible immediately. A background process deletes any revisions created by
 *                 <code>UpdateChannelMessage</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteChannelMessageCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteChannelMessageCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteChannelMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelMessageCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChannelMessageCommand = /** @class */ (function (_super) {
  __extends(DeleteChannelMessageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteChannelMessageCommand(input) {
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
  DeleteChannelMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteChannelMessageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteChannelMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteChannelMessageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteChannelMessageCommand(input, context);
  };
  DeleteChannelMessageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteChannelMessageCommand(output, context);
  };
  return DeleteChannelMessageCommand;
})($Command);
export { DeleteChannelMessageCommand };
//# sourceMappingURL=DeleteChannelMessageCommand.js.map
