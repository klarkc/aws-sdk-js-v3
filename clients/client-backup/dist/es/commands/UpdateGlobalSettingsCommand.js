import { __extends } from "tslib";
import { UpdateGlobalSettingsInput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGlobalSettingsCommand,
  serializeAws_restJson1UpdateGlobalSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the current global settings for the AWS account. Use the
 *             <code>DescribeGlobalSettings</code> API to determine the current settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateGlobalSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateGlobalSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGlobalSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdateGlobalSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGlobalSettingsCommand(input) {
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
  UpdateGlobalSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "UpdateGlobalSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGlobalSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGlobalSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateGlobalSettingsCommand(input, context);
  };
  UpdateGlobalSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommand(output, context);
  };
  return UpdateGlobalSettingsCommand;
})($Command);
export { UpdateGlobalSettingsCommand };
//# sourceMappingURL=UpdateGlobalSettingsCommand.js.map
