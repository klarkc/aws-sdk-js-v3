import { __extends } from "tslib";
import { ListBackupSelectionsInput, ListBackupSelectionsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupSelectionsCommand,
  serializeAws_restJson1ListBackupSelectionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array containing metadata of the resources associated with the target backup
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupSelectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupSelectionsCommand = /** @class */ (function (_super) {
  __extends(ListBackupSelectionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupSelectionsCommand(input) {
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
  ListBackupSelectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupSelectionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupSelectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupSelectionsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupSelectionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupSelectionsCommand(input, context);
  };
  ListBackupSelectionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupSelectionsCommand(output, context);
  };
  return ListBackupSelectionsCommand;
})($Command);
export { ListBackupSelectionsCommand };
//# sourceMappingURL=ListBackupSelectionsCommand.js.map
