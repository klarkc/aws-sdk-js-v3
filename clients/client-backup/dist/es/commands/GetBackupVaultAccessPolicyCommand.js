import { __extends } from "tslib";
import { GetBackupVaultAccessPolicyInput, GetBackupVaultAccessPolicyOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupVaultAccessPolicyCommand,
  serializeAws_restJson1GetBackupVaultAccessPolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the access policy document that is associated with the named backup
 *          vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupVaultAccessPolicyCommand = /** @class */ (function (_super) {
  __extends(GetBackupVaultAccessPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupVaultAccessPolicyCommand(input) {
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
  GetBackupVaultAccessPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupVaultAccessPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupVaultAccessPolicyOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupVaultAccessPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupVaultAccessPolicyCommand(input, context);
  };
  GetBackupVaultAccessPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupVaultAccessPolicyCommand(output, context);
  };
  return GetBackupVaultAccessPolicyCommand;
})($Command);
export { GetBackupVaultAccessPolicyCommand };
//# sourceMappingURL=GetBackupVaultAccessPolicyCommand.js.map
