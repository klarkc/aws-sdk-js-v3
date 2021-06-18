import { __extends } from "tslib";
import { DeleteChannelMembershipRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteChannelMembershipCommand,
  serializeAws_restJson1DeleteChannelMembershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a member from a channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteChannelMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteChannelMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteChannelMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChannelMembershipCommand = /** @class */ (function (_super) {
  __extends(DeleteChannelMembershipCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteChannelMembershipCommand(input) {
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
  DeleteChannelMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteChannelMembershipCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteChannelMembershipCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteChannelMembershipCommand(input, context);
  };
  DeleteChannelMembershipCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteChannelMembershipCommand(output, context);
  };
  return DeleteChannelMembershipCommand;
})($Command);
export { DeleteChannelMembershipCommand };
//# sourceMappingURL=DeleteChannelMembershipCommand.js.map
