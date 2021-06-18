import { __extends } from "tslib";
import { DeleteBackupVaultAccessPolicyInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
  serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the policy document that manages permissions on a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupVaultAccessPolicyCommand = /** @class */ (function (_super) {
  __extends(DeleteBackupVaultAccessPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackupVaultAccessPolicyCommand(input) {
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
  DeleteBackupVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DeleteBackupVaultAccessPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackupVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackupVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(input, context);
  };
  DeleteBackupVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(output, context);
  };
  return DeleteBackupVaultAccessPolicyCommand;
})($Command);
export { DeleteBackupVaultAccessPolicyCommand };
//# sourceMappingURL=DeleteBackupVaultAccessPolicyCommand.js.map
