import { __extends } from "tslib";
import { ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlanTemplatesCommand,
  serializeAws_restJson1ListBackupPlanTemplatesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata of your saved backup plan templates, including the template ID, name,
 *          and the creation and deletion dates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanTemplatesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanTemplatesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanTemplatesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupPlanTemplatesCommand = /** @class */ (function (_super) {
  __extends(ListBackupPlanTemplatesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupPlanTemplatesCommand(input) {
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
  ListBackupPlanTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupPlanTemplatesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupPlanTemplatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanTemplatesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupPlanTemplatesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupPlanTemplatesCommand(input, context);
  };
  ListBackupPlanTemplatesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommand(output, context);
  };
  return ListBackupPlanTemplatesCommand;
})($Command);
export { ListBackupPlanTemplatesCommand };
//# sourceMappingURL=ListBackupPlanTemplatesCommand.js.map
