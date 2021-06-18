import { __extends } from "tslib";
import { BatchSuspendUserRequest, BatchSuspendUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchSuspendUserCommand,
  serializeAws_restJson1BatchSuspendUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime
 *             account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your
 *                 Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 *
 *          <p>Users suspended from a <code>Team</code> account are disassociated from the account,but they
 *             can continue to use Amazon Chime as free users. To remove the suspension from suspended
 *                 <code>Team</code> account users, invite them to the <code>Team</code> account again.
 *             You can use the <a>InviteUsers</a> action to do so.</p>
 *
 *          <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of
 *             Amazon Chime and can no longer sign in. To remove the suspension from suspended
 *                 <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action.</p>
 *
 *          <p>
 * To sign out users without suspending them, use the
 * <a>LogoutUser</a>
 * action.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchSuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchSuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchSuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchSuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchSuspendUserCommand = /** @class */ (function (_super) {
  __extends(BatchSuspendUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchSuspendUserCommand(input) {
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
  BatchSuspendUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchSuspendUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchSuspendUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchSuspendUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchSuspendUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchSuspendUserCommand(input, context);
  };
  BatchSuspendUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchSuspendUserCommand(output, context);
  };
  return BatchSuspendUserCommand;
})($Command);
export { BatchSuspendUserCommand };
//# sourceMappingURL=BatchSuspendUserCommand.js.map
