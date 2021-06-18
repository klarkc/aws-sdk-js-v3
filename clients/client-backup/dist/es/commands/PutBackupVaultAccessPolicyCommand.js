import { __extends } from "tslib";
import { PutBackupVaultAccessPolicyInput } from "../models/models_0";
import {
  deserializeAws_restJson1PutBackupVaultAccessPolicyCommand,
  serializeAws_restJson1PutBackupVaultAccessPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets a resource-based policy that is used to manage access permissions on the target
 *          backup vault. Requires a backup vault name and an access policy document in JSON
 *          format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new PutBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutBackupVaultAccessPolicyCommand = /** @class */ (function (_super) {
  __extends(PutBackupVaultAccessPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutBackupVaultAccessPolicyCommand(input) {
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
  PutBackupVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "PutBackupVaultAccessPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutBackupVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutBackupVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutBackupVaultAccessPolicyCommand(input, context);
  };
  PutBackupVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutBackupVaultAccessPolicyCommand(output, context);
  };
  return PutBackupVaultAccessPolicyCommand;
})($Command);
export { PutBackupVaultAccessPolicyCommand };
//# sourceMappingURL=PutBackupVaultAccessPolicyCommand.js.map
