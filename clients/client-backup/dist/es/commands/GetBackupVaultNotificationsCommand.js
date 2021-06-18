import { __extends } from "tslib";
import { GetBackupVaultNotificationsInput, GetBackupVaultNotificationsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupVaultNotificationsCommand,
  serializeAws_restJson1GetBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns event notifications for the specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupVaultNotificationsCommand = /** @class */ (function (_super) {
  __extends(GetBackupVaultNotificationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupVaultNotificationsCommand(input) {
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
  GetBackupVaultNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupVaultNotificationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupVaultNotificationsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupVaultNotificationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupVaultNotificationsCommand(input, context);
  };
  GetBackupVaultNotificationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommand(output, context);
  };
  return GetBackupVaultNotificationsCommand;
})($Command);
export { GetBackupVaultNotificationsCommand };
//# sourceMappingURL=GetBackupVaultNotificationsCommand.js.map
