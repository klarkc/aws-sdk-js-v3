import { __extends } from "tslib";
import { CreateBackupVaultInput, CreateBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackupVaultCommand,
  serializeAws_restJson1CreateBackupVaultCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code>
 *          request includes a name, optionally one or more resource tags, an encryption key, and a
 *          request ID.</p>
 *          <note>
 *             <p>Sensitive data, such as passport numbers, should not be included the name of a backup
 *             vault.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackupVaultCommand = /** @class */ (function (_super) {
  __extends(CreateBackupVaultCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackupVaultCommand(input) {
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
  CreateBackupVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "CreateBackupVaultCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupVaultOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackupVaultCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackupVaultCommand(input, context);
  };
  CreateBackupVaultCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackupVaultCommand(output, context);
  };
  return CreateBackupVaultCommand;
})($Command);
export { CreateBackupVaultCommand };
//# sourceMappingURL=CreateBackupVaultCommand.js.map
