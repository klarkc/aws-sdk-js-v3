import { __extends } from "tslib";
import { StartCopyJobInput, StartCopyJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StartCopyJobCommand,
  serializeAws_restJson1StartCopyJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a job to create a one-time copy of the specified resource.</p>
 *          <p>Does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartCopyJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartCopyJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new StartCopyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCopyJobCommandInput} for command's `input` shape.
 * @see {@link StartCopyJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCopyJobCommand = /** @class */ (function (_super) {
  __extends(StartCopyJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartCopyJobCommand(input) {
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
  StartCopyJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "StartCopyJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartCopyJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartCopyJobOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartCopyJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartCopyJobCommand(input, context);
  };
  StartCopyJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartCopyJobCommand(output, context);
  };
  return StartCopyJobCommand;
})($Command);
export { StartCopyJobCommand };
//# sourceMappingURL=StartCopyJobCommand.js.map
