import { __extends } from "tslib";
import { DescribeRegionSettingsInput, DescribeRegionSettingsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRegionSettingsCommand,
  serializeAws_restJson1DescribeRegionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current service opt-in settings for the Region. If service-opt-in is enabled
 *          for a service, AWS Backup tries to protect that service's resources in this Region, when
 *          the resource is included in an on-demand backup or scheduled backup plan. Otherwise, AWS
 *          Backup does not try to protect that service's resources in this Region, AWS Backup does not
 *          try to protect that service's resources in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRegionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRegionSettingsCommand = /** @class */ (function (_super) {
  __extends(DescribeRegionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeRegionSettingsCommand(input) {
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
  DescribeRegionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "DescribeRegionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeRegionSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRegionSettingsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeRegionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeRegionSettingsCommand(input, context);
  };
  DescribeRegionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeRegionSettingsCommand(output, context);
  };
  return DescribeRegionSettingsCommand;
})($Command);
export { DescribeRegionSettingsCommand };
//# sourceMappingURL=DescribeRegionSettingsCommand.js.map
