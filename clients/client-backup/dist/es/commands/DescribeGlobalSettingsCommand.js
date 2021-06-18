import { __extends } from "tslib";
import { DescribeGlobalSettingsInput, DescribeGlobalSettingsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeGlobalSettingsCommand,
  serializeAws_restJson1DescribeGlobalSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the global settings of the AWS account, including whether it is opted in to
 *          cross-account backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalSettingsCommand = /** @class */ (function (_super) {
  __extends(DescribeGlobalSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeGlobalSettingsCommand(input) {
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
  DescribeGlobalSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeGlobalSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeGlobalSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalSettingsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeGlobalSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeGlobalSettingsCommand(input, context);
  };
  DescribeGlobalSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeGlobalSettingsCommand(output, context);
  };
  return DescribeGlobalSettingsCommand;
})($Command);
export { DescribeGlobalSettingsCommand };
//# sourceMappingURL=DescribeGlobalSettingsCommand.js.map
