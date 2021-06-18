import { __extends } from "tslib";
import { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlanVersionsCommand,
  serializeAws_restJson1ListBackupPlanVersionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanVersionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanVersionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanVersionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupPlanVersionsCommand = /** @class */ (function (_super) {
  __extends(ListBackupPlanVersionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupPlanVersionsCommand(input) {
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
  ListBackupPlanVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupPlanVersionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupPlanVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanVersionsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupPlanVersionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupPlanVersionsCommand(input, context);
  };
  ListBackupPlanVersionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupPlanVersionsCommand(output, context);
  };
  return ListBackupPlanVersionsCommand;
})($Command);
export { ListBackupPlanVersionsCommand };
//# sourceMappingURL=ListBackupPlanVersionsCommand.js.map
