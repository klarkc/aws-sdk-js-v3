import { __extends } from "tslib";
import { DeleteBackupVaultInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackupVaultCommand,
  serializeAws_restJson1DeleteBackupVaultCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the backup vault identified by its name. A vault can be deleted only if it is
 *          empty.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupVaultCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupVaultCommand = /** @class */ (function (_super) {
  __extends(DeleteBackupVaultCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackupVaultCommand(input) {
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
  DeleteBackupVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DeleteBackupVaultCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackupVaultCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackupVaultCommand(input, context);
  };
  DeleteBackupVaultCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackupVaultCommand(output, context);
  };
  return DeleteBackupVaultCommand;
})($Command);
export { DeleteBackupVaultCommand };
//# sourceMappingURL=DeleteBackupVaultCommand.js.map
