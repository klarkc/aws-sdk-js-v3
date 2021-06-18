import { __extends } from "tslib";
import { DeleteBackupSelectionInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackupSelectionCommand,
  serializeAws_restJson1DeleteBackupSelectionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the resource selection associated with a backup plan that is specified by the
 *             <code>SelectionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupSelectionCommand = /** @class */ (function (_super) {
  __extends(DeleteBackupSelectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackupSelectionCommand(input) {
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
  DeleteBackupSelectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DeleteBackupSelectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackupSelectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackupSelectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackupSelectionCommand(input, context);
  };
  DeleteBackupSelectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackupSelectionCommand(output, context);
  };
  return DeleteBackupSelectionCommand;
})($Command);
export { DeleteBackupSelectionCommand };
//# sourceMappingURL=DeleteBackupSelectionCommand.js.map
