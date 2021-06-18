import { __extends } from "tslib";
import { UpdateRecoveryPointLifecycleInput, UpdateRecoveryPointLifecycleOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
  serializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the transition lifecycle of a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. AWS Backup transitions and expires backups automatically according to the
 *          lifecycle that you define.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “expire after days” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold.</p>
 *          <p>Only Amazon EFS file system backups can be transitioned to cold storage.</p>
 *          <p>Does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRecoveryPointLifecycleCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRecoveryPointLifecycleCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateRecoveryPointLifecycleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecoveryPointLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointLifecycleCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRecoveryPointLifecycleCommand = /** @class */ (function (_super) {
  __extends(UpdateRecoveryPointLifecycleCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRecoveryPointLifecycleCommand(input) {
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
  UpdateRecoveryPointLifecycleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "UpdateRecoveryPointLifecycleCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRecoveryPointLifecycleInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecoveryPointLifecycleOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRecoveryPointLifecycleCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRecoveryPointLifecycleCommand(input, context);
  };
  UpdateRecoveryPointLifecycleCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand(output, context);
  };
  return UpdateRecoveryPointLifecycleCommand;
})($Command);
export { UpdateRecoveryPointLifecycleCommand };
//# sourceMappingURL=UpdateRecoveryPointLifecycleCommand.js.map
