import { __extends } from "tslib";
import { CreateChannelBanRequest, CreateChannelBanResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelBanCommand,
  serializeAws_restJson1CreateChannelBanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently bans a member from a channel. Moderators can't add banned members to a channel.
 *             To undo a ban, you first have to <code>DeleteChannelBan</code>, and then
 *                 <code>CreateChannelMembership</code>. Bans are cleaned up when you delete users or
 *             channels.</p>
 *          <p>If you ban a user who is already part of a channel, that user is automatically kicked from the channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateChannelBanCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelBanCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateChannelBanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelBanCommandInput} for command's `input` shape.
 * @see {@link CreateChannelBanCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateChannelBanCommand = /** @class */ (function (_super) {
  __extends(CreateChannelBanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateChannelBanCommand(input) {
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
  CreateChannelBanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateChannelBanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateChannelBanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelBanResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateChannelBanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateChannelBanCommand(input, context);
  };
  CreateChannelBanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateChannelBanCommand(output, context);
  };
  return CreateChannelBanCommand;
})($Command);
export { CreateChannelBanCommand };
//# sourceMappingURL=CreateChannelBanCommand.js.map
