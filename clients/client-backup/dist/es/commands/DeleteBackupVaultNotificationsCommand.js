import { __extends } from "tslib";
import { DeleteBackupVaultNotificationsInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackupVaultNotificationsCommand,
  serializeAws_restJson1DeleteBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes event notifications for the specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupVaultNotificationsCommand = /** @class */ (function (_super) {
  __extends(DeleteBackupVaultNotificationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackupVaultNotificationsCommand(input) {
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
  DeleteBackupVaultNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DeleteBackupVaultNotificationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackupVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackupVaultNotificationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackupVaultNotificationsCommand(input, context);
  };
  DeleteBackupVaultNotificationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackupVaultNotificationsCommand(output, context);
  };
  return DeleteBackupVaultNotificationsCommand;
})($Command);
export { DeleteBackupVaultNotificationsCommand };
//# sourceMappingURL=DeleteBackupVaultNotificationsCommand.js.map
