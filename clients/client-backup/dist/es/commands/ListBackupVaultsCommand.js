import { __extends } from "tslib";
import { ListBackupVaultsInput, ListBackupVaultsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupVaultsCommand,
  serializeAws_restJson1ListBackupVaultsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of recovery point storage containers along with information about
 *          them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupVaultsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupVaultsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupVaultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupVaultsCommandInput} for command's `input` shape.
 * @see {@link ListBackupVaultsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupVaultsCommand = /** @class */ (function (_super) {
  __extends(ListBackupVaultsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupVaultsCommand(input) {
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
  ListBackupVaultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupVaultsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupVaultsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupVaultsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupVaultsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupVaultsCommand(input, context);
  };
  ListBackupVaultsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupVaultsCommand(output, context);
  };
  return ListBackupVaultsCommand;
})($Command);
export { ListBackupVaultsCommand };
//# sourceMappingURL=ListBackupVaultsCommand.js.map
