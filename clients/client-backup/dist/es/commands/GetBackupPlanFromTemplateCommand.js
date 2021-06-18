import { __extends } from "tslib";
import { GetBackupPlanFromTemplateInput, GetBackupPlanFromTemplateOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupPlanFromTemplateCommand,
  serializeAws_restJson1GetBackupPlanFromTemplateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupPlanFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupPlanFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackupPlanFromTemplateCommand = /** @class */ (function (_super) {
  __extends(GetBackupPlanFromTemplateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackupPlanFromTemplateCommand(input) {
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
  GetBackupPlanFromTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetBackupPlanFromTemplateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackupPlanFromTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupPlanFromTemplateOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackupPlanFromTemplateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackupPlanFromTemplateCommand(input, context);
  };
  GetBackupPlanFromTemplateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackupPlanFromTemplateCommand(output, context);
  };
  return GetBackupPlanFromTemplateCommand;
})($Command);
export { GetBackupPlanFromTemplateCommand };
//# sourceMappingURL=GetBackupPlanFromTemplateCommand.js.map
