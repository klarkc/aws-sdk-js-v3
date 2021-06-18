import { __extends } from "tslib";
import { InviteUsersRequest, InviteUsersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1InviteUsersCommand,
  serializeAws_restJson1InviteUsersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime
 *                 <code>Team</code> account. Only <code>Team</code> account types are currently
 *             supported for this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, InviteUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, InviteUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new InviteUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InviteUsersCommandInput} for command's `input` shape.
 * @see {@link InviteUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InviteUsersCommand = /** @class */ (function (_super) {
  __extends(InviteUsersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function InviteUsersCommand(input) {
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
  InviteUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "InviteUsersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: InviteUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InviteUsersResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  InviteUsersCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1InviteUsersCommand(input, context);
  };
  InviteUsersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1InviteUsersCommand(output, context);
  };
  return InviteUsersCommand;
})($Command);
export { InviteUsersCommand };
//# sourceMappingURL=InviteUsersCommand.js.map
