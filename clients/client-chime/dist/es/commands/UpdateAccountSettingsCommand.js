import { __extends } from "tslib";
import { UpdateAccountSettingsRequest, UpdateAccountSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAccountSettingsCommand,
  serializeAws_restJson1UpdateAccountSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings for the specified Amazon Chime account. You can update settings for
 *             remote control of shared screens, or for the dial-out option. For more information about
 *             these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use
 *                 the Policies Page</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccountSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdateAccountSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAccountSettingsCommand(input) {
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
  UpdateAccountSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateAccountSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAccountSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAccountSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAccountSettingsCommand(input, context);
  };
  UpdateAccountSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAccountSettingsCommand(output, context);
  };
  return UpdateAccountSettingsCommand;
})($Command);
export { UpdateAccountSettingsCommand };
//# sourceMappingURL=UpdateAccountSettingsCommand.js.map
