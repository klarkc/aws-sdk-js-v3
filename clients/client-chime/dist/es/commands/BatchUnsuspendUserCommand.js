import { __extends } from "tslib";
import { BatchUnsuspendUserRequest, BatchUnsuspendUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUnsuspendUserCommand,
  serializeAws_restJson1BatchUnsuspendUserCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
 *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
 *             accounts can be unsuspended using this action. For more information about different
 *             account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
 *                 <i>Amazon Chime Administration Guide</i>.</p>
 *
 *          <p>
 * Previously suspended users who are unsuspended using this action are returned to
 * <code>Registered</code>
 * status. Users who are not previously suspended are ignored.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUnsuspendUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUnsuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUnsuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUnsuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchUnsuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUnsuspendUserCommand = /** @class */ (function (_super) {
  __extends(BatchUnsuspendUserCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchUnsuspendUserCommand(input) {
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
  BatchUnsuspendUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "BatchUnsuspendUserCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchUnsuspendUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUnsuspendUserResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchUnsuspendUserCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchUnsuspendUserCommand(input, context);
  };
  BatchUnsuspendUserCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchUnsuspendUserCommand(output, context);
  };
  return BatchUnsuspendUserCommand;
})($Command);
export { BatchUnsuspendUserCommand };
//# sourceMappingURL=BatchUnsuspendUserCommand.js.map
