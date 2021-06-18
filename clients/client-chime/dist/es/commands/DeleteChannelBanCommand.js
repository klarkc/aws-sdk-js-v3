import { __extends } from "tslib";
import { DeleteChannelBanRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteChannelBanCommand,
  serializeAws_restJson1DeleteChannelBanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a user from a channel's ban list.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteChannelBanCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteChannelBanCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteChannelBanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelBanCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelBanCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChannelBanCommand = /** @class */ (function (_super) {
  __extends(DeleteChannelBanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteChannelBanCommand(input) {
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
  DeleteChannelBanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteChannelBanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteChannelBanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteChannelBanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteChannelBanCommand(input, context);
  };
  DeleteChannelBanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteChannelBanCommand(output, context);
  };
  return DeleteChannelBanCommand;
})($Command);
export { DeleteChannelBanCommand };
//# sourceMappingURL=DeleteChannelBanCommand.js.map
