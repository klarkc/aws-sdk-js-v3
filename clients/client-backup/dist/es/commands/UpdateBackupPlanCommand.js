import { __extends } from "tslib";
import { UpdateBackupPlanInput, UpdateBackupPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackupPlanCommand,
  serializeAws_restJson1UpdateBackupPlanCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing backup plan identified by its <code>backupPlanId</code> with the
 *          input document in JSON format. The new version is uniquely identified by a
 *             <code>VersionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBackupPlanCommand = /** @class */ (function (_super) {
  __extends(UpdateBackupPlanCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBackupPlanCommand(input) {
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
  UpdateBackupPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "UpdateBackupPlanCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBackupPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackupPlanOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBackupPlanCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBackupPlanCommand(input, context);
  };
  UpdateBackupPlanCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBackupPlanCommand(output, context);
  };
  return UpdateBackupPlanCommand;
})($Command);
export { UpdateBackupPlanCommand };
//# sourceMappingURL=UpdateBackupPlanCommand.js.map
