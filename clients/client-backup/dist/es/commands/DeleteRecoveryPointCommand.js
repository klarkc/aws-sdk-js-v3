import { __extends } from "tslib";
import { DeleteRecoveryPointInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRecoveryPointCommand,
  serializeAws_restJson1DeleteRecoveryPointCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the recovery point specified by a recovery point ID.</p>
 *          <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes
 *          the existing continuous backup and stops future continuous backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRecoveryPointCommand = /** @class */ (function (_super) {
  __extends(DeleteRecoveryPointCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRecoveryPointCommand(input) {
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
  DeleteRecoveryPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DeleteRecoveryPointCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRecoveryPointCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteRecoveryPointCommand(input, context);
  };
  DeleteRecoveryPointCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteRecoveryPointCommand(output, context);
  };
  return DeleteRecoveryPointCommand;
})($Command);
export { DeleteRecoveryPointCommand };
//# sourceMappingURL=DeleteRecoveryPointCommand.js.map
