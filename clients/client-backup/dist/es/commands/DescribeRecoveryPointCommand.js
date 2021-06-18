import { __extends } from "tslib";
import { DescribeRecoveryPointInput, DescribeRecoveryPointOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRecoveryPointCommand,
  serializeAws_restJson1DescribeRecoveryPointCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
 *          lifecycle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecoveryPointCommand = /** @class */ (function (_super) {
  __extends(DescribeRecoveryPointCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeRecoveryPointCommand(input) {
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
  DescribeRecoveryPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeRecoveryPointCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecoveryPointOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeRecoveryPointCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeRecoveryPointCommand(input, context);
  };
  DescribeRecoveryPointCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeRecoveryPointCommand(output, context);
  };
  return DescribeRecoveryPointCommand;
})($Command);
export { DescribeRecoveryPointCommand };
//# sourceMappingURL=DescribeRecoveryPointCommand.js.map
