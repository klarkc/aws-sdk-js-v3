import { __extends } from "tslib";
import { CreateChannelMembershipRequest, CreateChannelMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelMembershipCommand,
  serializeAws_restJson1CreateChannelMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a user to a channel. The <code>InvitedBy</code> response field is derived from the
 *             request header. A channel member can:</p>
 *
 *          <ul>
 *             <li>
 *                <p>List messages</p>
 *             </li>
 *             <li>
 *                <p>Send messages</p>
 *             </li>
 *             <li>
 *                <p>Receive messages</p>
 *             </li>
 *             <li>
 *                <p>Edit their own messages</p>
 *             </li>
 *             <li>
 *                <p>Leave the channel</p>
 *             </li>
 *          </ul>
 *
 *          <p>Privacy settings impact this action as follows:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.</p>
 *             </li>
 *             <li>
 *                <p>Private Channels: You must be a member to list or send messages.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateChannelMembershipCommand = /** @class */ (function (_super) {
  __extends(CreateChannelMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateChannelMembershipCommand(input) {
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
  CreateChannelMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateChannelMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelMembershipResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateChannelMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateChannelMembershipCommand(input, context);
  };
  CreateChannelMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateChannelMembershipCommand(output, context);
  };
  return CreateChannelMembershipCommand;
})($Command);
export { CreateChannelMembershipCommand };
//# sourceMappingURL=CreateChannelMembershipCommand.js.map
