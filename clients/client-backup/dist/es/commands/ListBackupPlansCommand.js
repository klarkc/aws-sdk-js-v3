import { __extends } from "tslib";
import { ListBackupPlansInput, ListBackupPlansOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlansCommand,
  serializeAws_restJson1ListBackupPlansCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing backup plans for an authenticated account. The list is
 *          populated only if the advanced option is set for the backup plan. The list contains
 *          information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates,
 *          version IDs, plan names, and creator request IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlansCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlansCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupPlansCommand = /** @class */ (function (_super) {
  __extends(ListBackupPlansCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupPlansCommand(input) {
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
  ListBackupPlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupPlansCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupPlansInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlansOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupPlansCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupPlansCommand(input, context);
  };
  ListBackupPlansCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupPlansCommand(output, context);
  };
  return ListBackupPlansCommand;
})($Command);
export { ListBackupPlansCommand };
//# sourceMappingURL=ListBackupPlansCommand.js.map
