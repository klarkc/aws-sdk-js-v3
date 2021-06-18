import { __extends } from "tslib";
import { UpdateRegionSettingsInput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRegionSettingsCommand,
  serializeAws_restJson1UpdateRegionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the current service opt-in settings for the Region. If service-opt-in is enabled
 *          for a service, AWS Backup tries to protect that service's resources in this Region, when
 *          the resource is included in an on-demand backup or scheduled backup plan. Otherwise, AWS
 *          Backup does not try to protect that service's resources in this Region. Use the
 *             <code>DescribeRegionSettings</code> API to determine the resource types that are
 *          supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateRegionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRegionSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdateRegionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRegionSettingsCommand(input) {
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
  UpdateRegionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "UpdateRegionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRegionSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRegionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRegionSettingsCommand(input, context);
  };
  UpdateRegionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRegionSettingsCommand(output, context);
  };
  return UpdateRegionSettingsCommand;
})($Command);
export { UpdateRegionSettingsCommand };
//# sourceMappingURL=UpdateRegionSettingsCommand.js.map
