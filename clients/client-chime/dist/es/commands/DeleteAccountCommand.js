import { __extends } from "tslib";
import { DeleteAccountRequest, DeleteAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccountCommand,
  serializeAws_restJson1DeleteAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting
 *                 <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action
 *             to dodo.</p>
 *
 *          <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the
 *             claimed domains for your Amazon Chime account before deletion. As soon as you release
 *             the domain, all users under that account are suspended.</p>
 *
 *          <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore
 *             deleted account from your <code>Disabled</code> accounts list, you must contact AWS
 *             Support.</p>
 *
 *          <p>After 90 days, deleted accounts are permanently removed from your
 * <code>Disabled</code> accounts list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountCommand = /** @class */ (function (_super) {
  __extends(DeleteAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAccountCommand(input) {
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
  DeleteAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "DeleteAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAccountCommand(input, context);
  };
  DeleteAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAccountCommand(output, context);
  };
  return DeleteAccountCommand;
})($Command);
export { DeleteAccountCommand };
//# sourceMappingURL=DeleteAccountCommand.js.map
