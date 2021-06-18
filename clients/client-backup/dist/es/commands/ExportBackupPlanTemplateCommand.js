import { __extends } from "tslib";
import { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ExportBackupPlanTemplateCommand,
  serializeAws_restJson1ExportBackupPlanTemplateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ExportBackupPlanTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ExportBackupPlanTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ExportBackupPlanTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBackupPlanTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportBackupPlanTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportBackupPlanTemplateCommand = /** @class */ (function (_super) {
  __extends(ExportBackupPlanTemplateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExportBackupPlanTemplateCommand(input) {
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
  ExportBackupPlanTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ExportBackupPlanTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExportBackupPlanTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExportBackupPlanTemplateOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExportBackupPlanTemplateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ExportBackupPlanTemplateCommand(input, context);
  };
  ExportBackupPlanTemplateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommand(output, context);
  };
  return ExportBackupPlanTemplateCommand;
})($Command);
export { ExportBackupPlanTemplateCommand };
//# sourceMappingURL=ExportBackupPlanTemplateCommand.js.map
