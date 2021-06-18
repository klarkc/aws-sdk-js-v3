import { __extends } from "tslib";
import { ListRecoveryPointsByBackupVaultInput, ListRecoveryPointsByBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
  serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRecoveryPointsByBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecoveryPointsByBackupVaultCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecoveryPointsByBackupVaultCommand = /** @class */ (function (_super) {
  __extends(ListRecoveryPointsByBackupVaultCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRecoveryPointsByBackupVaultCommand(input) {
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
  ListRecoveryPointsByBackupVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListRecoveryPointsByBackupVaultCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRecoveryPointsByBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByBackupVaultOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRecoveryPointsByBackupVaultCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(input, context);
  };
  ListRecoveryPointsByBackupVaultCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(output, context);
  };
  return ListRecoveryPointsByBackupVaultCommand;
})($Command);
export { ListRecoveryPointsByBackupVaultCommand };
//# sourceMappingURL=ListRecoveryPointsByBackupVaultCommand.js.map
