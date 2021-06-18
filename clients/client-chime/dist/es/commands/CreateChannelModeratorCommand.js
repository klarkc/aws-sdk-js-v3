import { __extends } from "tslib";
import { CreateChannelModeratorRequest, CreateChannelModeratorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateChannelModeratorCommand,
  serializeAws_restJson1CreateChannelModeratorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Add and remove other members of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove other moderators of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove user bans for the channel.</p>
 *             </li>
 *             <li>
 *                <p>Redact messages in the channel.</p>
 *             </li>
 *             <li>
 *                <p>List messages in the channel.</p>
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
 * import { ChimeClient, CreateChannelModeratorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelModeratorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateChannelModeratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link CreateChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateChannelModeratorCommand = /** @class */ (function (_super) {
  __extends(CreateChannelModeratorCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateChannelModeratorCommand(input) {
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
  CreateChannelModeratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreateChannelModeratorCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateChannelModeratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelModeratorResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateChannelModeratorCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateChannelModeratorCommand(input, context);
  };
  CreateChannelModeratorCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateChannelModeratorCommand(output, context);
  };
  return CreateChannelModeratorCommand;
})($Command);
export { CreateChannelModeratorCommand };
//# sourceMappingURL=CreateChannelModeratorCommand.js.map
