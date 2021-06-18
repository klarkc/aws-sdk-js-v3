import { __extends } from "tslib";
import { DescribeBackupJobInput, DescribeBackupJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBackupJobCommand,
  serializeAws_restJson1DescribeBackupJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns backup job details for the specified <code>BackupJobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeBackupJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupJobCommand = /** @class */ (function (_super) {
  __extends(DescribeBackupJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBackupJobCommand(input) {
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
  DescribeBackupJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeBackupJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBackupJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupJobOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBackupJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeBackupJobCommand(input, context);
  };
  DescribeBackupJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeBackupJobCommand(output, context);
  };
  return DescribeBackupJobCommand;
})($Command);
export { DescribeBackupJobCommand };
//# sourceMappingURL=DescribeBackupJobCommand.js.map
