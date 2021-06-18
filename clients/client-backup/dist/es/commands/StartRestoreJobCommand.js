import { __extends } from "tslib";
import { StartRestoreJobInput, StartRestoreJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StartRestoreJobCommand,
  serializeAws_restJson1StartRestoreJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StartRestoreJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRestoreJobCommandInput} for command's `input` shape.
 * @see {@link StartRestoreJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartRestoreJobCommand = /** @class */ (function (_super) {
  __extends(StartRestoreJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartRestoreJobCommand(input) {
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
  StartRestoreJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "StartRestoreJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartRestoreJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartRestoreJobOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartRestoreJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartRestoreJobCommand(input, context);
  };
  StartRestoreJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartRestoreJobCommand(output, context);
  };
  return StartRestoreJobCommand;
})($Command);
export { StartRestoreJobCommand };
//# sourceMappingURL=StartRestoreJobCommand.js.map
