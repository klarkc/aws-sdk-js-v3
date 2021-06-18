import { __extends } from "tslib";
import { DescribeBackupVaultInput, DescribeBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBackupVaultCommand,
  serializeAws_restJson1DescribeBackupVaultCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about a backup vault specified by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupVaultCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupVaultCommand = /** @class */ (function (_super) {
  __extends(DescribeBackupVaultCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBackupVaultCommand(input) {
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
  DescribeBackupVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeBackupVaultCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupVaultOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBackupVaultCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeBackupVaultCommand(input, context);
  };
  DescribeBackupVaultCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeBackupVaultCommand(output, context);
  };
  return DescribeBackupVaultCommand;
})($Command);
export { DescribeBackupVaultCommand };
//# sourceMappingURL=DescribeBackupVaultCommand.js.map
