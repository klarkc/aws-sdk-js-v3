import { __extends } from "tslib";
import { PutBackupVaultNotificationsInput } from "../models/models_0";
import {
  deserializeAws_restJson1PutBackupVaultNotificationsCommand,
  serializeAws_restJson1PutBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Turns on notifications on a backup vault for the specified topic and events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new PutBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutBackupVaultNotificationsCommand = /** @class */ (function (_super) {
  __extends(PutBackupVaultNotificationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutBackupVaultNotificationsCommand(input) {
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
  PutBackupVaultNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "PutBackupVaultNotificationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutBackupVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutBackupVaultNotificationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutBackupVaultNotificationsCommand(input, context);
  };
  PutBackupVaultNotificationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutBackupVaultNotificationsCommand(output, context);
  };
  return PutBackupVaultNotificationsCommand;
})($Command);
export { PutBackupVaultNotificationsCommand };
//# sourceMappingURL=PutBackupVaultNotificationsCommand.js.map
