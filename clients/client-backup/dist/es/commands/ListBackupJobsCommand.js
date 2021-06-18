import { __extends } from "tslib";
import { ListBackupJobsInput, ListBackupJobsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupJobsCommand,
  serializeAws_restJson1ListBackupJobsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
 *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackupJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupJobsCommand = /** @class */ (function (_super) {
  __extends(ListBackupJobsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListBackupJobsCommand(input) {
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
  ListBackupJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListBackupJobsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListBackupJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupJobsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListBackupJobsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListBackupJobsCommand(input, context);
  };
  ListBackupJobsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListBackupJobsCommand(output, context);
  };
  return ListBackupJobsCommand;
})($Command);
export { ListBackupJobsCommand };
//# sourceMappingURL=ListBackupJobsCommand.js.map
