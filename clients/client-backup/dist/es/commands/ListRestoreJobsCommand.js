import { __extends } from "tslib";
import { ListRestoreJobsInput, ListRestoreJobsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRestoreJobsCommand,
  serializeAws_restJson1ListRestoreJobsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of jobs that AWS Backup initiated to restore a saved resource, including
 *          metadata about the recovery process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListRestoreJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRestoreJobsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRestoreJobsCommand = /** @class */ (function (_super) {
  __extends(ListRestoreJobsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListRestoreJobsCommand(input) {
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
  ListRestoreJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "ListRestoreJobsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListRestoreJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRestoreJobsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListRestoreJobsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListRestoreJobsCommand(input, context);
  };
  ListRestoreJobsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListRestoreJobsCommand(output, context);
  };
  return ListRestoreJobsCommand;
})($Command);
export { ListRestoreJobsCommand };
//# sourceMappingURL=ListRestoreJobsCommand.js.map
