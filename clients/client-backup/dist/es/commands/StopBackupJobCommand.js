import { __extends } from "tslib";
import { StopBackupJobInput } from "../models/models_0";
import {
  deserializeAws_restJson1StopBackupJobCommand,
  serializeAws_restJson1StopBackupJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StopBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StopBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StopBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBackupJobCommandInput} for command's `input` shape.
 * @see {@link StopBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopBackupJobCommand = /** @class */ (function (_super) {
  __extends(StopBackupJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopBackupJobCommand(input) {
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
  StopBackupJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "StopBackupJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopBackupJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopBackupJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StopBackupJobCommand(input, context);
  };
  StopBackupJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StopBackupJobCommand(output, context);
  };
  return StopBackupJobCommand;
})($Command);
export { StopBackupJobCommand };
//# sourceMappingURL=StopBackupJobCommand.js.map
