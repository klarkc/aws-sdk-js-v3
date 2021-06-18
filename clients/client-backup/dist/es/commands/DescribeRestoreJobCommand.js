import { __extends } from "tslib";
import { DescribeRestoreJobInput, DescribeRestoreJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRestoreJobCommand,
  serializeAws_restJson1DescribeRestoreJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata associated with a restore job that is specified by a job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRestoreJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRestoreJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRestoreJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRestoreJobCommand = /** @class */ (function (_super) {
  __extends(DescribeRestoreJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeRestoreJobCommand(input) {
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
  DescribeRestoreJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeRestoreJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeRestoreJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRestoreJobOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeRestoreJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeRestoreJobCommand(input, context);
  };
  DescribeRestoreJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeRestoreJobCommand(output, context);
  };
  return DescribeRestoreJobCommand;
})($Command);
export { DescribeRestoreJobCommand };
//# sourceMappingURL=DescribeRestoreJobCommand.js.map
